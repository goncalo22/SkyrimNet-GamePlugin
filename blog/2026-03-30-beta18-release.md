---
title: SkyrimNet Beta18  Released
description: SkyrimNet Beta18
tags: [release, beta18]
---

🎉  SkyrimNet Beta 18 Latest
<!--truncate-->

# SkyrimNet Beta18 

## External C++ API Enhancements @Galanx @Severause 
- **Custom Template Decorators** — External SKSE plugins can register their own template functions via `PublicRegisterDecorator()`. These work anywhere in Inja templates (e.g. `{{ my_standing(actor_uuid) }}`) and in action eligibility YAML rules, just like built-in decorators
- **Event Subscriptions** — `PublicRegisterEventCallback(eventType, callback)` lets plugins receive real-time notifications when SkyrimNet events fire (dialogue, combat, spell casts, etc.). Filter by event type or pass empty string for all events. Returns a callback ID for clean unregistration via `PublicUnregisterEventCallback()`
- **Memory Creation** — `PublicAddMemory(formId, content, importance, type, emotion, location, tags, relatedActors)` creates first-class memories for any actor. Created memories get full vector embeddings and integrate with semantic search, importance decay, and consolidation just like native memories
- **Actor Busy State** — `PublicSetActorBusy(formId, reason)` / `PublicClearActorBusy(formId)` / `PublicIsActorBusy(formId)` let plugins mark actors as occupied during multi-step actions. Two new template decorators `is_busy()` and `busy_reason()` expose this in prompts and eligibility rules. ActionManager also auto-sets busy state during any dispatched action with a descriptive reason (e.g. "GoToLocation (destination: Bannered Mare)")
- Public API version bumped to 6. Full API header with usage examples at `include/PublicAPI.h`

## LLM Testing Overhaul @Daikichi
- Completely revamped the LLM test on the Test & Easy Setup page — you can now test specific model variants (vision, non-vision, or all), use a dedicated vision prompt with an image file picker, and test all comma-separated models in rotation
- Added a "Save & Test" button directly on the LLM Config page next to the model name, so you can test your model right where you configure it without switching pages

## Custom IME Overlay for Asian Text Input @Daikichi
- Japanese and Chinese players now get a proper in-line IME overlay when typing in PrismaUI — composition and conversion candidates appear directly in the text window instead of the ugly unstyled system IME in the top-left corner
- The system IME no longer activates when the text input is unfocused, fixing the issue where movement keys would appear as text input
- Requires PrismaUI 1.4.1 or later for the new IME functionality to work.

## Improved Combat Target Awareness @Min
- New `get_combat_targets(uuid)` template decorator — returns UUIDs of all actors in the given actor's combat group. Use with `decnpc()` to get full entity details (name, race, level, etc.)
- Default combat status prompt updated to list target names during combat (e.g. "Fighting: Bandit, Bandit Chief, Frost Troll")
- Works for any actor type including generic creatures and summons — reads directly from the engine's CombatGroup, no external mod dependency

## Player Location Change Events @Severause 
- SkyrimNet now detects when the player changes location (entering a city, fast traveling, etc.) and emits `location_change` events — enabling triggers like "New City Arrival" or "Dungeon Entered"
- Note: Users with an existing Events.yaml where `location_change` is disabled will need to toggle it to Enabled under Event Configuration in the web UI

## OmniSight Description Locking @Min
- You can now lock OmniSight location descriptions to prevent them from being overwritten on auto-refresh — useful when you've manually edited a description to be just right
- Descriptions are auto-locked when edited via the web UI, and can be manually toggled with a lock button on each screenshot card

## Voice Input Interrupts NPC Speech @Bellbound
- New option to allow NPCs to stop speaking immediately when voice input begins, rather than waiting for voice synthesis to complete (or voice recording to end)
- Controlled by "Interrupt Dialogue On Voice Start" config option (disabled by default)

## Race Editor ID Voice Fallback @Daikichi
- TTS voice fallback now also checks the actor's race Editor ID (e.g. KhajiitRace) in addition to the localized race name — fixes voice assignment for non-English game localizations and modded NPCs
- Non-English players who had issues with voice fallback may need to delete their TTS config YAML file(s) so the editor IDs get added to the fallback config list

## Tweaks
- Improved NPC Action Selection Context: The NPC action selector now uses the same rich NPC context (from scene_context) as other prompts @jykej
- The `get_nearby_npc_list` template decorator now accepts an optional custom search radius @lemonade
- Eligibility condition UI now supports variadic decorators and resolves placeholders correctly in Expected Result fields @Min 
- Added sliders to control talk to player / npc package duration @Min 
- Whitelisting an actor by faction, race, OR gender now works independently — previously all three had to match, which meant manually whitelisted creatures like dragons or horses were still filtered out @aikichi
- Fixed several sources of "SkyrimNet can't keep up with game load!" messages caused by various modded spells. @Min 
- Keyboard input no longer leaks to other mods while typing in PrismaUI chat — keypresses meant for the chat window no longer trigger other mod hotkeys @naitro2010

## Bug Fixes
- Fixed NPC packages not being cleaned up when an actor dies mid-conversation @Min 
- Fixed persistent packages (e.g. FollowPlayer) not being re-applied after loading a save @Bellbound
- Fixed PocketTTS using the Skyrim voice type instead of the NPC's custom voice sample @Daikichi
- Fixed delayed audio playback when using Silent TTS @Daikichi
- Fixed non-English character prompts failing to load from save-isolated folders with a JSON parse error @Daikichi
- Fixed UTF-8 errors caused by non-ASCII characters in short-lived events @Daikichi
- Fixed voice input "recording end" sound playing when the game was out of focus @Bellbound
- Fixed equipment prompt using NPC variable, preventing use in custom prompts @lemonade
- Fixed decorator direct calls failing when variables are dynamic @lemonade
- Fixed plugin config pages (e.g. IntelEngine) showing 404 in the web UI — a bug since beta16 @Min 
- Reduced log noise across memory retrieval, eligibility checks, and other hot paths @Min 
- Downgraded a number of harmless errors to warnings @Min 
- Fixed an error when the content response from the LLM is null instead of empty @Daikichi
