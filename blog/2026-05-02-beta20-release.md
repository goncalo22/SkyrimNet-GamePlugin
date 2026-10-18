---
title: SkyrimNet Beta20  Released
description: SkyrimNet Beta20
tags: [release, beta20]
---

🎉  SkyrimNet Beta 20 Latest
<!--truncate-->

# SkyrimNet Beta20 @everyone

Beta20 is a major systems release focused on deeper NPC cognition, more reliable spatial awareness, richer world knowledge authoring, and new modding/plugin APIs. The headline changes are NPC Thoughts, Telepathy, the Knowledge Builder, the line-of-sight overhaul, Voice Effects, and a much stronger foundation for virtual actors and external integrations.

## Knowledge Builder @Min

New AI-powered Knowledge Builder integrated into the World Knowledge page for authoring and maintaining world knowledge packs.

The builder can inspect live game data from all loaded mods, existing knowledge entries, quests, stages, factions, races, condition expressions, and Skyrim lore context, then propose batches of entries for review. You can select a knowledge pack, browse/search/sort existing entries, and run the agent in that context so it can extend what is already there instead of duplicating it.

New `knowledge_key` deduplication: when multiple entries share a key, only the highest-importance entry whose condition passes is injected for a given NPC. This lets specific knowledge override general rumors without both appearing in the prompt.

While building this, a few other improvements were made:
- For agents (prompt editor / world knowledge builder), Pretty-printed / multi-line tool calls now parse correctly. @Min
- Faction and race dropdowns for the World Knowledge page now list full game data instead of only currently loaded actors.
- Fixed an issue causing poor retrieval for first-turn world knowledge lookups. 
- Also added bulk delete support for World Knowledge entries.

New MCP tools for modders and for the Knowledge Builder:
- `get_quest_stages`
- `get_npcs`

## Line-of-Sight and Awareness Overhaul @Min

SkyrimNet already used physics-based line of sight, but beta20 significantly overhauls it. NPCs can now “bend” their sight checks around open obstacles and corners while still being blocked by closed doors, closed rooms, and solid walls. See the included illustration: open geometry can be peeked around; closed spaces still block.

The old close-range LOS bypass has been removed. Instead of letting nearby NPCs see through walls, the underlying false blockers were fixed:
- Furniture no longer blocks seated NPCs across a table.
- Bystanders no longer block sight over someone’s shoulder.
- Trees, invisible AI markers, and small nearby clutter are handled more reliably.
- Exterior cell-boundary failures are fixed.
- Self-hits and target body hits are handled better.
- A torso-eye fallback helps when the head ray is awkwardly occluded.

The new peek system samples 17 fixed directions and tries two-stage sight paths: outward to a possible vantage point, then from that point to the target. This allows natural “around the pillar” or “around the doorway” cases without allowing sight through sealed rooms.

Interaction range defaults were also expanded:
- `interaction.maxDistance` default: `800 -> 1600`
- `interaction.normalMaxDistance` default: `800 -> 1600`
- max allowed interaction distance: `2000 -> 8000`
- `interaction.whisperMaxDistance` remains unchanged
- `interaction.pinnedTargetRangeMultiplier` added, default `2.0`, range `1.0-5.0`

Pinned targets now reach farther than normal interaction distance, which should make travelling with companions much less frustrating when Skyrim pathing leaves them behind.

Combat awareness is also stronger: NPCs in combat always remain mutually visible for SkyrimNet purposes, and combat targets are always aware of each other. This allows for easier back-and-forth banter during combat as the player repositions and maneuvers.


## NPC Thoughts @Min

NPC Thoughts are a major new cognition layer for characters. They let NPCs generate private, unvoiced internal thoughts that are saved to their event history and influence future prompts, improving LLM coherency, continuity, and depth.

This behaves a bit like giving characters a “reasoning mode” for roleplay cohesion, while explicitly not being model scratchpad/reasoning mode and without adding response latency. Thoughts happen alongside normal dialogue and are parsed into separate thought events instead of delaying speech. This has very little token cost in its out-of-the-box configuration, though it does result in the effective event history filling faster for dialogue use cases. Users can disable inline thoughts if they do not desire this behavior.

Thoughts can be triggered through:
- Trigger responses: `response.type: npc_thought`
- Papyrus: `SkyrimNetApi.GenerateNPCThought`
- Chat command: `/npcthink <name> [prompt]`
- Inline dialogue tags: `<internal_thought>...</internal_thought>`

`/npcthink` supports nearby and pinned actors, and pinned actors can be targeted at any distance.

Inline internal thoughts are stripped from TTS and saved as separate thought events. Player thoughts now follow the same separation path, so transform mode and voice mode no longer mix internal thoughts into spoken dialogue history.

Config defaults:
- `enabled: true`
- `perNPCCooldownSeconds: 60`
- `allowInlineInDialogue: true`


## Telepathy @Min

Telepathy builds on NPC Thoughts and adds player-facing thought perception and long-distance mental communication.

There are two independent perks. You can use either one, or both at the same time. Accessible via the MCM in the new powers menu.

**Telepathy**
Read-only player-facing telepathy. When enabled, the player sees NPC thoughts in the PrismaUI chat interface. Additionally, when eavesdropping is on, nearby NPC thoughts are voiced through TTS so the player can hear them. This does not make the player character canonically aware of those thoughts.

**Telepathy (Canonical)**
In-fiction telepathy. When eavesdropping is on, the player character can perceive nearby NPC thoughts; those thoughts are voiced through TTS and included in the chat/history context so the LLM can let the character act on that knowledge.

Canonical Telepathy also controls long-distance mental communication. With the canonical perk, the player can project a thought to a single NPC anywhere in Skyrim and receive a privately voiced reply.

Commands:
- `/telepathy Lydia meet me outside`
- `~Lydia meet me outside`
- `~'Lydia meet me outside`

The apostrophe form routes the message through transform mode, with behavior adjusted for `defaultTransform`.

Eavesdropping controls whether thought audio/perception is active:
- **Listen In**: Illusion spell, 140 magicka base, silent, instant, non-hostile, 60 seconds, reduced by Adept Illusion.
- **Eavesdrop Debug**: Lesser Power toggle for testing.
- Eavesdropping resets to off on save load.

Remote telepathy tells the target that the player is not physically present and provides both locations, so replies should not claim the NPC turned toward you from another city.

Telepathy and thoughts also suppress facial animation: NPC mouths no longer move while inner thoughts or telepathic replies are being voiced.


## Voice Effects @Daikichi 

Create recipes of post-processing effects to apply to TTS output and save them as Voice Effects.

- Accessible in the web UI from Manage Data -> Voice Effects.
- Available effects include pitch, formant, speed, bitcrush, distortion, reverb, chorus, tremolo, ringmod, echo, EQ, whisper, and gain.
- Effects can be toggled from the Characters page, Actor tab, in Triggers, and from Papyrus.
- Added Papyrus scripts: `SetVoiceEffect`, `ClearVoiceEffect`, `GetVoiceEffect`, `SetVoiceEffectByUUID`, `ClearVoiceEffectByUUID`, `GetVoiceEffectByUUID`.
- Effect assignments are persisted to the SKSE cosave.

This release includes several default Voice Effect definitions, such as Werewolf and Vampire Lord, but these are placeholders and do not really represent those creatures very well. Please ping @Daikichi if you find good recipes to replace the defaults in a follow-up release.

## Virtual NPCs, Actions, and Plugin APIs @Daikichi / @lemonade8339 / @Galanx

Actions can now be enabled to work with virtual NPCs. As part of this, new UUID-based Papyrus API variants allow scripts to work with virtual NPCs and entities that do not have a game Actor reference. @Daikichi

New helpers include:
- `GetEntityUUID`
- `GetEntityDisplayNameByUUID`
- `IsVirtualEntity`
- `GetActorByUUID`

New ByUUID variants include:
- `ExecuteActionByUUID`
- `RegisterEventByUUID`
- `RegisterShortLivedEventByUUID`
- `RegisterDialogueByUUID`
- `RegisterDialogueToListenerByUUID`
- `DirectNarrationByUUID`
- `RegisterPersistentEventByUUID`
- `GenerateDiaryEntryByUUID`

Virtual NPC action support was expanded with `availableForVirtualNpc` and dynamic UUID parameter mapping. @Daikichi

New public C++ APIs:
- `SendCustomPromptToLLM` lets third-party plugins invoke LLM generation directly, just like they could in Papyrus. @lemonade8339
- `PublicGetWorldKnowledgeForActor` exposes the same per-NPC world knowledge resolution used in prompts. @Galanx 
- Public API version bumped to v9. @Galanx

## Action System and Prompt Targeting @Min / @Severause

New runtime Actions master switch lets you temporarily disable NPC action execution from the wheel menu or Web UI QuickToggles. This is process-lifetime only and resets on restart. @Min

Prompt improvements from SeverActions were merged: @Severause
- Plugin-defined action categories now work correctly without requiring SeverActions.
- Player requests like “wait here” are picked up more reliably.
- Dialogue speaker targeting is more stable in multi-NPC scenes.
- Drilldown action selection now gets a lightweight NPC profile for action-relevant details.
- Player dialogue target selection is tighter when the crosshair target is virtual, unresolved, or not the actual addressee.

Dialogue target parsing is also more robust. NPC-to-NPC followups no longer fail when names are wrapped in brackets, markdown emphasis, or odd casing. @Min

## Prompt and Roleplay Improvements @Min / @Daikichi

Several prompt refinements improve character consistency and reduce drift:
- Diary entries now better preserve the character’s actual temperament. @Min
- Player dialogue transform preserves subject, opinion, and confidence more faithfully. Characters should argue with you a lot less. @Min
- Player thoughts stay closer to the input you provided. Characters should argue with you a lot less. @Min
- Universal translator transforms now receive world/setting context. @Min
- NPCs are no longer instructed to constantly comment on their surroundings. @Daikichi
- Dynamic bio updates now use a stricter “Stranger Test” so private context does not leak into public-facing summary/appearance fields. @Min
- Combat status prompts now describe whether a target seems beneath, equal to, or beyond the NPC’s capability without exposing raw numbers. @Min

The response-format prompt was moved into final user instructions to improve adherence around thoughts, narration, embedded actions, and response formatting. @Min

## Memory and Diary Recall @Min / @Dowser / @Galanx

Diary memories are no longer automatically recalled by default. Diary entries still receive embeddings and remain searchable through explicit paths like MCP `search_memories`, the web UI, IntelEngine, and vector queries, but automatic NPC recall skips them unless configured otherwise. @Min

Config:
- `DiaryConfig.excludeFromRecall = true` by default
- Set it to `false` to restore the old behavior

The memory candidate pre-filter pool was widened to compensate. @Min

World knowledge is also now preserved correctly across save reload timeline cleanup, so user-curated world knowledge entries are no longer deleted when loading older saves. @Min

Fixed recent-interaction name filtering / game-time arithmetic affecting the C++ API and IntelEngine integrations. @Dowser / @Galanx

## Bard Songs @Min

Bard songs now correctly attribute to their original composer instead of the performing bard.

Player-composed songs are filtered out of random bard repertoires, so unknown bards should not randomly perform songs your character wrote. Player performance paths such as `/playsong` still work.

## Project AHO Bios @kiloughs

Added character bios for NPCs from Project AHO.

## Removed and Cleanup @Min / @Dowser / @Daikichi

Removed the old Gesture action and its backing generic animation library. NPCs will no longer perform the old applaud / drink / pray / wave style idle gestures during dialogue. These actions were often blocking more appropriate usage. This has been removed for now, and is intended to make room for a more intelligent animation system later. @Min

Removed unused `textentrymenu.swf`. The chat overlay moved to PrismaUI, so this file was dead weight and could conflict with other UI mods. @Dowser

## Bug Fixes and Tweaks @Min / @Dowser / @Daikichi / @Severause

- Stripped model `<thinking>` reasoning blocks from TTS by default, fixing issues with models like DeepSeek-R1 / QwQ voicing scratchpad text. @Min
- Fixed response-format prompt guidance to explicitly forbid `<thinking>` reasoning tags. @Min
- Fixed two simultaneous LLM streams to the same NPC corrupting TTS playback. @Min
- Fixed short TTS segments sometimes not being voiced. @Min
- Fixed NPC faces lip-syncing during player/npc thoughts and telepathy. @Min
- Fixed SkyrimNet UI message boxes entering NPC awareness. @Min
- Fixed Skyrim’s missing-plugin load dialog leaking into LLM context. @Dowser
- Message boxes now are only perceived by the player when enabled. @Min
- Fixed seated NPCs standing up when spoken to. @Min
- Tuned default facial animation intensity and ramp rate for less twitchy mouth motion. @Min
- Fixed world knowledge location-condition context resolution. @Min
- Fixed event originator location for pinned followers, bystanders, remote thoughts, diary context, and thought context. A number of these were using the player's location, causing confusion in diaries and memories for non-present actors. @Min
- Fixed `has_perk` decorator missing runtime-added perks. @Min
- Fixed vNPC bios from community plugins being overwritten by blank templates. @Daikichi
- Fixed nested Custom Actions rows displaying blank fields and losing hidden metadata on save. @Severause
- Fixed Knowledge Builder crashes and stale streaming UI state. @Min
- Fixed Web UI EventText crashes on non-string values. @Min
- Fixed LLM `topP` / `topK` sending hardcoded defaults when unset. @Min
- Fixed config float fields being marked customized due to precision drift. @Min
- Fixed defaults changed notification in web UI reappearing after dismissal. @Min
- Fixed ElevenLabs voice list pagination for accounts with over 100 cloned voices. @Min
- Fixed issue preventing non-skyrimnet-cloned voices from being usable in ElevenLabs @Min
- Exposed `max_parallel_requests` in ElevenLabs and Inworld web UI schemas. @Min
- Fixed NPCGroups page title rendering blank. @Dowser
- Fixed bundled web UI asset loading via webpack manifest. @Dowser
- Fixed trigger forms requiring content for content-less response types such as `deactivate_voice_effect`, `diary_entry`, and `dynamic_bio_update`. @Min
- Fixed voice-effect deletion/rename edge cases, hot reload behavior, and path traversal handling. @Daikichi
- Internal system build improvements @Dowser