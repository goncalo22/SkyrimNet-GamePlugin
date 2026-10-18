---
title: SkyrimNet Beta14  Released
description: SkyrimNet Beta14
tags: [release, beta14]
---

🎉  SkyrimNet Beta 14 Latest
<!--truncate-->

# SkyrimNet Beta 14 Release

# SkyrimNet Beta14 @everyone 

## Highlights
This release brings major performance improvements, unified builds for all GPU types, per-save character isolation, and a wealth of new features for both users and template authors. This update should result in considerably snappier AI responses, particularly for users utilizing many of our community plugins.

## New Features

### Unified Build @Dowser
- SkyrimNet no longer requires separate CUDA vs universal builds - a single unified build works for all GPU types
- Non-NVIDIA cards can now use local Whisper
- Secondary GPU cards can be used for Whisper by setting the GPU index number

### Parallel TTS Generation @Min
- Enabled parallel TTS generation for ElevenLabs and Inworld engines
- Significant latency improvements for background dialogue and universal translator / silent dialogue with many NPCs
- Per-engine rate limiting to avoid exceeding api limits (default 2 concurrent; Users with fancier Elevenlabs subscriptions can raise this further as desired)
- Configurable via `max_parallel_requests` in TTS config (1-8: 1=no parallelism)

### Per-Save Character Bio Isolation @Min
- Character bios are now isolated per save game, allowing different playthroughs to have unique character histories
- Save-specific static and dynamic bios stored in `prompts/_saves/<saveId>/characters/`
- Automatic resolution: uses save-specific version if it exists, falls back to global
- Frontend shows lock icon for characters with save-specific overrides
- Existing dynamic bios migrate automatically the next time they're generated

### MessageBox Events @Min
- Message boxes opening are now a supported event type that can be added to the context, handled like any other event
- Triggers can now react to the content of message boxes
- New **Message Explorer** in the web UI to browse all game messages with filtering and "Create Trigger" integration
- New MCP integration to view and explore message boxes for all loaded plugins

### Virtual NPC Trigger Actions @Min
- Virtual NPCs can now be dynamically enabled and disabled through triggers
- Triggers can now scope events specifically to virtual NPCs

### New TTS: Chatterbox @lemonade339
- Added support for Chatterbox TTS engine
- Download: https://github.com/langfod/chatterbox/releases/latest

### MCP Memory Management Tools @Min
Added full CRUD operations for the memory system via MCP, enabling agentic workflows to create and manage character memories:
- `list_memories` — List memories with filtering by actor, type, and importance (pagination supported)
- `get_memory` — Get full memory details by ID
- `create_memory` — Create a new memory with automatic vector embedding generation
- `update_memory` — Update existing memory (regenerates embedding if content changes)
- `search_memories` — Semantic similarity search across memories using vector embeddings
- `delete_memory` — Permanently delete a memory and its embedding

### UI Notifications @Min
- New banner notification system in the web UI
- Prompts that fail validation now show a warning banner - you can still use invalid prompts, but you'll know about it

### HTTP Retry with Exponential Backoff @Min
- HTTP requests now automatically retry on 5xx errors and timeouts
- Reduces failures when AI providers experience temporary issues
- Applies to both TTS and AI providers
- Configurable independently via `max_retries` in each provider's config (default: 1 retry = 2 total attempts)


### Quick Toggles @Daikichi
- Added **Player Memories** option to MemoryFilter config - controls whether player memories are generated
  - Can be disabled to reduce memory generation costs, although player thoughts and diary coherency will suffer
- Added **NPC Reactions** toggle in the top-right of the web UI - more easily enable/disable NPC reaction events

## Performance Improvements

### Template Decorator Caching @Min
- Added intelligent callback caching for template decorators - return values from decorators called with the same arguments during a single dialogue generation are now cached and reused. Effectively, this means that we will only execute a decorator once over the course of a single dialogue generation if called with the same arguments. This cache does not persist beyond the life of that single dialogue generation. Multiple template renders happening in parallel will still continue to have strong isolation.
- **Significantly** improves render times for users with many add-ons
- Callback cache pre-warms when you press the player input hotkey for faster initial response times

### Eligibility Pre-warming @Min
- Pre-warm action eligibility caches during input preparation, reducing latency for embedded actions
- Batched decorator and eligibility warmup significantly reduces thread contention
- Improved to utilize far fewer threads used for decorator warmup for users with many Papyrus decorators and/or actions

### Other Performance @Min
- Active effect event handling performance improvements
- ThreadPool refactored to improve performance and fix potential resource leak (may have been resulting in game freezes when things were breaking)
- Fixed an issue causing up to 2 seconds of LLM response delay when using plugins containing Papyrus actions and Virtual NPCs
- A number of other different inja/template performance enhancements


## Omnisight / Item Rendering Improvements @Dowser
- Added PBR (Physically Based Rendering) support for more accurate visuals on a wider variety of item types
- Added support for transparency, specular highlights, and cubemap reflections
- Fixed vertex colors and glossiness issues for more accurate item images
- Improved RGBA handling for better image quality

## For Template Authors

### New Decorators @Min
- `get_location(entityUUID)` — Get the formatted location name for any actor, not just the player
- `get_nearby_references_for_entity(uuid, radius, typeFilter)` — Query world objects around any entity's position
- `group_by(array, field)` — Efficient array categorization in templates

### Expanded Decorator Usage @lemonade339 @Min
- Our full library of decorators can now be used in most places (action description strings, etc.)

### Debugging @Min
- Added `verboseInjaTracing` config option for debugging template performance (disabled by default)

---

## Tweaks & Improvements

### Audio @Min
- Fixed intermittent delays between audio segments
- Should be much snappier now overall

### Continuous Mode @Min
- Simplified and more reliable continuous mode - Continuous mode conversations should now be more coherent and smooth
- Fixed issues where multiple responses could trigger at once

### STT/Whisper @Daikichi@Dowser
- Whisper STT config changes now apply immediately without requiring a game restart @Daikichi
- Improved GPU detection: Vulkan now prioritized over OpenCL for better cross-platform compatibility @Dowser
- Whisper inference provider (e.g CUDA, Vulkan, etc) now displayed in Easy Test & Setup page @Min

### Configuration @Daikichi@Min
- Replaced the "Include Reasoning Disabled" LLM config option with "Allow Reasoning" for clarity @Daikichi
  - **Important:** Players who have customized their "Include Reasoning Disabled" options will need to set it again using the new field
- Process TTS text before testing in the Test page, to match how it's actually done in game @Daikichi
- Default TTS connection timeout increased from 2 to 5 seconds for users on slower networks @Min
- Virtual NPCs now appear in the nearby characters API, enabling config overrides for virtual actors @Min
- Added "Invisible Continues Linked to Self" to filtered dialogue topics (add to your `excludedTopics` list if upgrading) @Min
- Memory generation prompt updated to produce more token efficient memories @Min

## Bug Fixes
- Fixed issue with tag parsing logic resulting in audio tags sometimes being read aloud @Daikichi
- Stop player character from automatically responding to speech by virtual NPCs @Daikichi
- Fixed the default settings for Dynamic Bio update resulting in a "reasoning is mandatory" error - `CharacterProfileGeneration` variant now defaults to allowing reasoning @Daikichi
- Fixed heap corruption issue for users using some community plugins @Min
- Fixed virtual NPCs not being found when selected as speaker by GM @Min
- Worked around a rare Skyrim engine bug that would cause the player's name to be retrieved as an empty string @vrelk
- Fixed nearby object detection incorrectly including disabled/deleted game objects @Min
- Fixed trigger editor modal closing unexpectedly when clicking outside the form area @Min
- Dead NPCs are no longer selected as dialogue targets (they still appear in scene descriptions) @Min
- Fixed actors getting stuck in "InDialogue" state when LLM requests timeout, causing GM to stop autonomously starting dialogue until the game was rebooted @Min
- Fixed hotkeys being laggy/unresponsive when callbacks took too long to execute @Min
- Fixed duplicate actors appearing in event's involved actors list @Min
- Prompt editor now validates the `render_mode` requirement when saving @Min

## (Softly) Breaking Changes

### Template Authors @Min
- `character_bio` submodule templates must now include a `render_mode` check in the first 5 lines. It is best practice to guard all template logic behind these checks to avoid unnecessary work (As subsets of the character bio are rendered many different times for different usecases)
- The web UI will block saving templates that don't follow this convention
- Existing non-compliant templates will show a warning banner but continue to work
- Plugin authors should update their templates to avoid warnings