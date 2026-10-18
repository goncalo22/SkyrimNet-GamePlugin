---
title: SkyrimNet Beta19  Released
description: SkyrimNet Beta19
tags: [release, beta19]
---

🎉  SkyrimNet Beta 19 Latest
<!--truncate-->

# SkyrimNet Beta19 


## AI Bard Singing @Galanx  @Min
- Bards now compose and perform original songs using AI — lyrics are written from the bard's memories and experiences, with music generated via Suno API (Note: This is a third-party api provider on top of Suno, Suno does not have an official API)
- Bards auto-perform when you enter an inn; new songs generate every 8 game-hours (configurable in the Web UI)
- Ask any bard to sing about a specific topic, or tell them to stop their current performance
- Songs cached per save (10 max, configurable), with gender-matched vocals and spatial audio — vanilla bard sounds silenced automatically during AI performances
- Player song composition: use `/compose [topic]` in chat to write and perform your own songs, and `/playsong [title]` with Tab autocomplete to replay any cached song — jumping stops the performance
- Requires a Suno API key from sunoapi.org — configure in Web UI Configuration -> AI Model -> Bard Singing

## World Knowledge @Min @Severause
- New system for defining persistent world facts that NPCs know about — things like "The Stormcloaks won the civil war" or "There are three dangerous factions of bandits in my world"
- Each entry has a condition expression controlling which NPCs know it — uses the same template functions you already have (`is_in_faction`, `get_quest_stage`, `is_in_npc_group`, etc.). A Stormcloak war plan only reaches Stormcloak NPCs; a rumor about the Companions only reaches their members
- Entries can be always-injected (guaranteed in every matching NPC's prompt) or semantically retrieved (only surfaced when relevant to conversation, scored by keyword match, embedding similarity, and importance)
- Configurable limits for semantic and always-inject entries, with a minimum relevance score threshold (default: 0.6)
- Full condition builder in the Web UI with a Test button to verify which NPCs receive each entry
- MCP tools for bulk create/read/update/delete and search operations
- C++ and Papyrus APIs available for mod integration

## Knowledge Packs @Min 
- Bundle world knowledge entries into named, shareable collections
- Export packs as `.sknpack` files, share with other users, and import — making it easy to distribute lore, quest knowledge, or custom world-building
- Enable/disable toggle per pack — disabled packs exclude their entries from NPC knowledge entirely
- Full Web UI with bulk selection, inline pack assignment, and import/export

## NPC Groups @Min@Severause
- General-purpose NPC grouping system — create named groups like "Dawnguard Scouts" or "Whiterun Market Vendors" and assign specific NPCs (including the player)
- Groups plug directly into World Knowledge conditions — restrict knowledge to only members of a specific group
- Pinned actors now use the NPC Groups system internally, unifying pin and group management
- New template decorators `is_in_npc_group`, `get_npc_groups`, and `get_npc_group_members` for prompt templates
- Manage through Web UI, in-game chat context menu, or MCP tools
- Will be expanded in the future to integrate fully with other systems like config groups.


## Chat Context Menu & Group Management @Min 
- Right-click any speaker name or audience member in the chat UI to access a new context menu with Talk to, Whisper to, Pin/Unpin, Groups, and Copy Name
- Pin and unpin NPCs directly from the context menu with immediate visual feedback — pinned actors show gold highlighting in the audience strip
- Manage NPC group membership directly from chat — the Groups submenu shows all groups with checkmarks for quick toggling

## Group Chat Mode @Min 
- New `&` prefix modifier restricts dialogue to members of your Pinned NPC group only — non-group actors won't be selected as targets or interject
- Combinable with `^` whisper in either order (`&^` or `^&`) and works with all input modes
- GROUP toggle button added to the chat input bar for easy toggling
- Group restriction propagates through the entire dialogue and interjection chain — NPC responses also stay within the group
- This will serve as a foundation for some planned group conversation coherency improvements and optimizations. Already functions as a step-function improvement for people that play with parties.
- Currently limited to input via PrismaUI only; Deliberating options on how to best bring this to voice input in an intuitive manner.

## /summon Command @Min 
- New `/summon <name>` slash command in the in-game chat — teleports any NPC to the player
- Tab completion cycles through pinned actor names for quick selection
- Works with both nearby actors and far-away pinned group members

## Voice Slot LRU Cache @Daikichi
- Automatic voice slot management for ElevenLabs and Inworld TTS — configurable `max_voices` limit with least-recently-used eviction
- When the voice slot limit is reached, the oldest unused cloned voice is automatically deleted before cloning a new one — no more manual cleanup or subscription cap errors
- 🚨 ElevenLabs has limits on the number of voices that you can clone monthly; Using this feature may cause you to exceed the limit depending on how often it needs to delete voices, and what your plan limit is. See here for details: https://help.elevenlabs.io/hc/en-us/articles/24351056337937-How-many-voice-slots-do-I-get-per-tier-and-how-can-I-increase-it 🚨

## Memory Retrieval Improvements @Min 
- Significantly improved the semantic search engine — NPC memory recall is noticeably more accurate, finding the right memories more often based on conversational context
- Existing memories are automatically upgraded on first launch (~10 seconds, with HUD notifications as to progress)
- Retuned how NPCs prioritize memories — relevance matters more, recency matters less

## Config Defaults Review System @Min 
- New system to keep your configuration aligned with our latest recommended settings — when we update defaults between versions, you'll see a banner notification with a one-click review flow
- Accept individual changes to adopt our new recommendations, or keep your current values — full control over what updates and what stays
- No more guessing what changed between versions or manually comparing release notes against your config.
- This will mostly benefit future releases; Changes you've already made from the defaults before this release will not reflect in the UI (with a few exceptions for specific things I changed in this release)

## Updated Default LLM Models @Min 
- Default model assignments updated to more budget-friendly alternatives based on community feedback — dialogue now uses DeepSeek v3.2, action evaluation uses DeepSeek Chat v3-0324, character profile/memory/diary now use Qwen 3 235B, and GameMaster now uses Llama 3.3 70B
- Provider sorting now defaults to latency-based ordering for faster real-time responses
- Atlas Cloud provider excluded by default — it was producing garbage output for DeepSeek v3.2
- Existing users will need to delete and recreate their openrouter.yaml file to pick up all of the changed variant settings.

## Embed Actions in Dialogue (New Default) @Min 
- `embedActionsInDialogue` now defaults to `true` — eligible actions are listed directly in the dialogue prompt so the NPC can choose to act as part of its response. This has been available for quite some time, but is now the default and preferred path for action evaluation.
- When the dialogue LLM wants to act, it picks a top-level action category and provides an intent (e.g., "I want to give the player a healing potion"). The action evaluation LLM then drills down within that category to select and execute the specific action, guided by the dialogue LLM's intent. When the NPC doesn't want to act, no second LLM call happens at all — saving latency and tokens.
- The old separate-evaluation mode (a second LLM call after every response to decide on actions independently) is still available but no longer recommended. The new approach considerably improves action execution accuracy over the old one.
- If you previously had this set to `false`, the defaults review system will prompt you to consider switching. Unless you're using a small local model that has problems with doing double-duty on this use-case, it is recommended that you use this setting. Users may be concerned with this overly biasing LLM behavior based on the actions that are present (Like we observed with MinAI and the "horny llama"); This is not a significant problem with this implementation, due to us primarily exposing top level categories. The vast majority of actions are not exposed to the dialogue llm, and thus we still maintain a reasonable level of isolation.

## Trade Events @Min 
- NPCs now perceive when you open a merchant's shop and complete trades — with summaries of items bought/sold and gold exchanged.
- These are full-fledged events; you can create triggers on them like anything else if you wanted shop-keepers to automatically comment on trades, and so forth. Try talking to the next merchant you sell stuff to; this is a pretty fun awareness improvement.
- Empty trades (opening and closing the menu without trading) are silently skipped

## Dialogue Event Collapsing @Min 
- Consecutive dialogue lines from the same speaker (e.g., a bard singing 10 lines) are now collapsed into a single event in NPC context prompts, dramatically reducing prompt waste
- Fixes false "time has passed" dividers that could appear between rapid-fire dialogue lines

## Chat UI Improvements @Min 
- Tab completion now shows a visual popup with pill-style candidates instead of cycling blindly
- Pressing `/` then Tab cycles through available slash commands
- Smooth flow from command completion to argument input

## Plugin & Template Integration @Vrelk 
- Current save unique ID now available via Papyrus `GetSaveUniqueID()`, C++ `PublicGetSaveUniqueID()`, and Inja `{{ saveUUID }}`
- C++ decorator results are now parsed as JSON objects (matching Papyrus decorator behavior)
- Variable documentation page no longer shows giant base64 image blobs

## Configurable Text Splitting @Lemonade8339 
- Added configuration option to control word-length-based line breaking when full lines are available for TTS, giving more control over how text is split for speech

## Misc Tweaks And Enhancements
- Updated default Inworld model to `inworld-tts-1.5-mini` (previous `inworld-tts-1` is deprecated) @Daikichi
- Fixed calendar date desyncs and added support for mods that change the calendar like Seasons of Skyrim @Min 
- Reduced log noise across memory retrieval, eligibility checks, and quest property lookups @Min 
- Player thoughts now better adapt prompted topics to fit the NPC's character @Min 
- Added support for pre-built Inworld system voices (e.g., Ashley, Vinny) that don't count toward cloned voice limits @Daikichi
- Added support for using voices cloned directly on the Inworld dashboard by specifying the full voice ID @Daikichi

## Bug Fixes
- Fixed weather missing from NPC dialogue prompts — the weather section wasn't wrapped in a block tag, so NPCs had no weather awareness @Min 
- Fixed MO2 VFS template resolution issue — templates created in MO2's overwrite folder while the game is running now load correctly @Min>
- Fixed error when editing plugin variant config fields with null initial data @Galanx 
- Fixed keyboard input hook thread safety crash — `FlushKeyboard` now only runs in the keyboard process hook @naitro2010 
- Fixed Korean IME users unable to press Enter to submit chat messages @Daikichi
- Fixed `contains` template decorator failing when checking non-string array elements (e.g., numbers, booleans) @Lemonade8339 
- Fixed followers stopping and facing each other mid-travel during conversations — now uses headtracking only instead of overriding follow behavior @Min 
- Eliminated several sources of game thread stutters caused by SkyrimNet hooks, including a full rewrite of the framebuffer capture pipeline @Min 
- Fixed spurious "Configuration not found" error logs on first-time plugin config loading @Min 

## 🚨 Important: Back Up Your Database Before Upgrading 🚨
Memory data is automatically upgraded on first launch as part of the accuracy improvements in this release. This has been tested on long-term playthroughs and works fine. However — if you hit issues, you will **not** be able to revert to an older version of SkyrimNet without restoring a backup of your database. We are forward compatible, but not backward compatible for this update.

# SkyrimNet Beta 19.1, rc1 

## Virtual NPC Actions @Daikichi
- Virtual NPCs can now use actions! Previously, actions were hard-gated to only work with real (in-game) NPCs. This adds a new `dynamic_uuid` parameter type that passes the selected actor's UUID to Papyrus, enabling vNPCs to perform actions like reading books, trading, and more
- Action creators can opt-in their actions for vNPC use with the new "available for virtual NPC" flag in action definitions
- Action categories are now automatically hidden from the action selection prompt if all their items are filtered out (by cooldown or vNPC availability), keeping the action list clean and relevant

## Bug Fixes
- Fixed orphaned TalkToPlayer packages — when audio delivery fails (player moved too far, TTS failure), the TalkToPlayer package get stuck resulting in NPC's permanently chasing the player (until removed manually in the package manager UI) because the dialogue cleanup was never triggered. The orphaned package source is now properly handled. Note, that this comes with a behavioral change: The package is now applied when audio playback begins rather than when the speech is queued in our system. @Galanx 

