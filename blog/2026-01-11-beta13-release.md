---
title: SkyrimNet Beta13  Released
description: SkyrimNet Beta13
tags: [release, beta13]
---

🎉  SkyrimNet Beta 13 Latest
<!--truncate-->

# SkyrimNet Beta 13 Release 


# SkyrimNet Beta 13 Changelog @everyone

## New Features

### Virtual NPCs @Daikichi
Create AI entities that exist purely in the prompt context — no physical actor in the game world required.
- **Public mode**: Treated like a regular NPC, can talk to everyone and everyone can talk to them. Good for scenarios like "talking ring that the player carries"
- **Private mode**: Only the player and other private virtual NPCs can hear their speech. Good for scenarios like "Guide entity that gives advice on the game" or "Sheogorath inhabiting the player's mind"
- When added, a blank prompt file is created for the entity with the name (name)_virtual.prompt; Edit this to customize the behavior of your new Virtual NPC!
- Virtual NPCs always use the player's position for distance and line of sight checks
- They have memories and can write diaries
- Optional config setting to let regular NPCs respond to private virtual NPC speech (without that speech being in their context)
- Papyrus API for dynamic management during playthroughs:
  - `RegisterVirtualNPC`, `UpdateVirtualNPC`, `EnableVirtualNPC`, `DisableVirtualNPC`
  - Useful for modders creating entities for quests, such as on quest update or opening a cursed book
- Compatible with Floating Subtitles

### OmniSight: Direct Framebuffer Capture @Min
Completely rebuilt the screenshot capture portion of the vision system to read directly from Skyrim's renderer instead of using screen capture.
- Should work cross-platform via DXVK on Linux (standard D3D11 API)
- Works without borderless fullscreen being required
- Faster and more performant
- Compatible with Community Shaders, Upscaler, and other rendering mods

### Interrupt Support @Min
NPCs can now be interrupted mid-speech. When an interrupt happens (e.g., combat starts, you speak over them), the system:
- Stops audio playback immediately
- Rewrites event history to reflect only what was actually heard — if an NPC was halfway through a response, segments that had not yet been played are deleted. This typically truncates at the sentence boundary, rounding up to the end fo the sentence if interrupted mid-sentence. If dialogue was queued but never played, it's deleted entirely. This keeps NPCs from "remembering" things they never actually said.
- New dedicated hotkey (with wheel support) to interrupt dialogue on demand
- New Papyrus API to purge dialogue on demand
- Events and triggers now support an `interrupt` flag in their config schemas, to specify if they should trigger this behavior. 

### Just-in-Time Speaker Selection @Min
Previously, the system would figure out who speaks next immediately after generating dialogue, causing dialogue to queue up rapidly with NPCs continuing conversations for minutes after the initial trigger.

Now, speaker selection is deferred until the audio queue is nearly empty:
- Evaluation triggers when non-silent audio drops to a configurable threshold (default: 1 segment remaining)
- Silent dialogue (Universal Translator) doesn't count — only audible speech matters
- Result: Dialogue stays responsive to the current situation rather than playing out stale queued responses
- Tune with the "Audio Queue Near Completion Threshold" setting in Game Config. If using slow LLMs or TTS this value may need to be raised in order to avoid gaps inbetween sentences; Looking for feedback from people on what ends up working well for them, will raise the default here as needed based on feedback.

### Template Preview System @Min
Live template preview in the Prompts and Characters pages.
- Preview current editor content or system templates (dialogue_response, player_thoughts, player_transform)
- Select NPCs from nearby actors (including Virtual NPCs) to test with real game context
- Clickable trace links to inspect render performance in Trace Explorer
- Full-text prompt content search with highlighted matching snippets

### New MCP tools @Min
- `render_template` tool for previewing templates in real-time from external tools
- Several new tools for inspecting action eligibility for actors

### Multi-Speaker Piper TTS Models @Daikichi
Added support for multi-speaker Piper voice models.
- New `speaker_id` configuration field in Piper config (0-based speaker index)
- Per-voice override support for speaker selection

### SendCustomPromptToLLM API @Min
New Papyrus API for invoking the LLM with arbitrary prompts and template variables. This API was previously unimplemented; thus, I changed the signature considerably to function better. This allows you to make whatever LLM call you want for any arbitrary prompt that you create, and then receive the response via a callback in-game. LLM Response is truncated to 750 characters to avoid Papyrus string limits.

```papyrus
Function SendTestPrompt()
    ; Build context variables as JSON — available in template as {{ playerName }}, {{ location }}, etc.
    string contextJson = "{\"playerName\":\"" + Game.GetPlayer().GetDisplayName() + "\",\"location\":\"Skyrim\"}"
    
    ; Parameters: prompt template name, variant, context JSON, callback quest, script name, callback function
    int result = SkyrimNetApi.SendCustomPromptToLLM( \
        "dev/mcm_test", \
        "", \
        contextJson, \
        Self as Quest, \
        "SkyrimNet_CustomPromptDemo", \
        "OnLLMResponse" \
    )
EndFunction

; Callback invoked when LLM responds — signature must be: Function Name(String response, int success)
Function OnLLMResponse(String response, int success)
    if success == 1
        Debug.MessageBox("LLM says:\n\n" + response)
    else
        Debug.MessageBox("LLM Error:\n\n" + response)
    endif
EndFunction
```

### MCM API Testing Panel @Min
New panel in the MCM for exercising and testing API functions. Useful for debugging and mod development.

### Structured JSON Action Evaluation @naitro2010
Optional structured JSON support for action evaluation on OpenRouter providers that support it, as well as local LLMs.


## New Decorators

### `has_line_of_sight(actor1UUID, actor2UUID)` — Category: Actor @Min
Returns true if two actors can see each other using SkyrimNet's Line of Sight algorithm:
- Native gaze direction + field of view checks (is either actor looking at the other?)
- Raycast physics to detect physical obstructions (walls, terrain)
- Special furniture handling for actors sitting, sleeping, or using workbenches
- Bypassed when in combat, or within a tight radius of eachother
The check is bidirectional — returns true if EITHER actor can potentially perceive the other.
> Warning: This decorator is expensive as it must execute on the main game thread. Don't use this on many NPCs in your prompts or it will impact performance.

```jinja
{% if has_line_of_sight(actor.UUID, player.UUID) %}{{ actor.name }} can see the player{% endif %}
{% for npc in nearbyNPCs %}{% if has_line_of_sight(actor.UUID, npc.UUID) %}Can see: {{ npc.name }}{% endif %}{% endfor %}
```

### `distance_between(actor1UUID, actor2UUID)` — Category: Actor @Min
Calculates the 3D distance between two actors in game units (~70 units ≈ 1 meter).

```jinja
{% if distance_between(actor.UUID, player.UUID) < 200 %}{{ actor.name }} is very close{% endif %}
{% set dist = distance_between(guard.UUID, thief.UUID) %}Distance: {{ dist }} units
```

### `get_merchant_inventory(actorUUID)` — Category: Equipment @Min
Returns a merchant NPC's inventory (items for sale). Finds the vendor faction the actor belongs to and retrieves items from the associated merchant container.

Returns an object containing:
- `isMerchant` — boolean indicating if the actor is a merchant
- `vendorFaction` — the faction name
- `vendorFactionFormID` — the faction's form ID
- `buysStolen` / `buysNonStolen` — what the merchant will buy
- `startHour` / `endHour` — trading hours
- `items` — array of items with name, formID, count, value, weight, type, keywords
  - Weapons include damage and weaponType
  - Armor includes armorRating

```jinja
{% if get_merchant_inventory(npc.UUID).isMerchant %}{{ actor(npc.UUID).name }} is a merchant!{% endif %}
{% set shop = get_merchant_inventory(npc.UUID) %}{% for item in shop.items %}{{ item.name }}: {{ item.value }} gold{% endfor %}
```

### Scene Decorators for World Awareness @Min

**`get_nearby_references(radius, typeFilter)`** — Query nearby items, furniture, and containers with camera-relative positions.
- Filter by type: weapons, potions, furniture, containers, consumables, equipment, treasure, and more
- Enables NPCs to perceive and reference objects in the world around them

**`get_container_contents(formID)`** — Inspect what's inside chests, barrels, and other containers.

### `get_quest_alias_actor` @Min
Get the actor assigned to a quest alias.

### Virtual NPC Decorators @Daikichi
- `decnpc(npc.UUID).isVirtual` — true if this is a virtual NPC
- `decnpc(npc.UUID).isVirtualPublic` — true if public mode virtual NPC
- `decnpc(npc.UUID).isVirtualPrivate` — true if private mode virtual NPC

### `decnpc().height` @lemonade339
The `decnpc()` decorator now includes a `height` field that returns the actor's calculated height (race base height × individual height multiplier).

## Decorator Improvements

### `get_script_property` — Array & Object Type Preservation @Min
Previously returned string values only. Now preserves proper types:
- Arrays are fully iterable with `{% for %}` loops
- Objects (like ReferenceAlias targets) are resolved and return structured data with formId, editorId, name, baseFormId, baseName fields
- Primitives keep their types (int, float, bool, string)
- Now supports script variables as well as properties

```jinja
{% set actors = get_script_property("MyQuest", "MyScript", "ActorList") %}{% for actor in actors %}{{ actor }}{% endfor %}
{% set npc = get_script_property("MyQuest", "MyScript", "TargetNPC") %}{{ npc.name }} ({{ npc.editorId }})
{% set items = get_script_property("MyQuest", "MyScript", "ItemArray") %}{{ length(items) }} items, first: {{ first(items) }}
```

### Enhanced Spell Information @Min
`get_spell_list` now returns detailed spell metadata:
- School (Destruction, Restoration, etc.)
- Casting type
- Delivery method
- Filters out passive abilities and mod junk (no more bedrolls in spell lists)
- Includes powers, lesser powers, and voice powers alongside regular spells

### Native Decorator Protection @Min
Native decorators now take precedence over Papyrus script decorators. Prevents mods from accidentally overriding core SkyrimNet functionality.

### Papyrus Decorator Performance @Min
Papyrus decorators are now pre-cached more aggressively. Before response generation begins (no more than once every 5 seconds), the system pre-resolves Papyrus decorator data for the player plus a configurable number of nearby actors (default: 6), prioritizing followers. This will result in substantive response time improvements for users of mods that are using papyrus decorators, though comes at the cost of increasing Papyrus load a little.

### Papyrus_util decorator performance @naitro2010
- Significantly sped up the performance of the papyrus_util decorator. No longer has to execute on the main game thread; For users at 60fps, this results in approximately a 99.5% improvement in decorator execution speed (232x). For users below 60fps, this will be even more pronounced.
- This will **significantly** improve the performance of Body Language, and other mods that rely on these decorators.
- These decorators are once more a preferred solution over calling into Papyrus to resolve data where possible.

## Tracing & Debugging

### Decorator Tracing with Rich Metadata @Min
Added comprehensive decorator tracing in the Trace Explorer.
- Visualize which decorators are taking what amount of time in template rendering
- Captures decorator arguments and return values
- Logs errors in trace spans when decorators throw exceptions
- Collapse Decorators / Expand All buttons with hidden span count badge (+N)

## Tweaks
- Changed default speech pacing: time window 35s -> 60s, max recent speech count 5 -> 3 (less frequent chatter) 
- Changed default meta model to `x-ai/grok-4.1-fast` @Min
- Made the LLM variant dropdown literally impossible to miss @Daikichi
- When downloading voiced memories/diaries, now falls back to downloading the WAV file if MP3 conversion fails @Daikichi
- Allow ElevenLabs to skip cloning and go straight to TTS generation if the `voices_read` permission is missing @Daikichi
- Added `IsContinuousModeEnabled` Papyrus API @Min
- Disabled gamemaster narrate option by default @Min
- Significantly reduced logging verbosity @Min
- Updated MCP server to properly handle protocol negotiation with latest agentic software @Min
- Disabled the GameMaster DirectNarration action for the time being. Will revisit this again in the future. @Min
- Downgraded a number of harmless errors to warnings.
- Traces are now generated and tracked for non-player initiated requests.

## Bug Fixes
- Fixed the TTS URL input in the Test & Easy Setup page to show the correct URL when switching engines @Daikichi
- Fixed trigger originator and target for DirectNarration and PersistentEvent triggers — now correctly uses the originator, falling back to the player if unavailable @lemonade339
- Fixed PDB symbol loading for improved SEH diagnostics @Min
- Fixed character bios for Become High King of Skyrim @Daikichi
- Fixed diaries and manually-created memories not being used as memories @Daikichi
- Fixed temporary TTS Test virtual entities from being used later in prompts @Daikichi
  - If you have `TTS_TestEntity*` entries, delete your `VirtualEntities.yaml` and let it be recreated — this was a source of significant performance problems for some folks
- Added more safeguards to prevent calling into Papyrus with invalid actors @Min