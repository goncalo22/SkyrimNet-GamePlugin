---
title: SkyrimNet Beta15  Released
description: SkyrimNet Beta15
tags: [release, beta15]
---

🎉  SkyrimNet Beta 15 Latest
<!--truncate-->

# SkyrimNet Beta 15 Release

# SkyrimNet Beta15 @everyone

This release brings **massive performance improvements** to dialogue generation and response times, along with critical fixes for issues where actors would stop responding or the Game Master would stall. Building on Beta14's foundation, we've optimized template rendering, improved caching strategies, and eliminated several blocking operations that were causing slowdowns.

This should be the fastest and most performant version of SkyrimNet to date, particularly for users that were using a lot of community plugins; Let us know if you encounter problems, and have fun!

## Major Performance Improvements @Min

This release brings significant performance optimizations to dialogue generation:

- **90% reduction in template render times** in many cases — single-digit millisecond renders on base SkyrimNet without plugins, low double-digits for users with a lot of complex templates
- **Decorator-level result caching** — When a decorator is called with the same arguments during a render, the result is cached and reused. The cache is keyed on the NPC, player, and response target to ensure proper isolation between actors — no data leaks between NPCs or across conversation flows. This cache lives for the entire request flow (from player input through NPC response), and is shared across all template renders in that flow, but is not reused beyond it
- **Smarter cache warmup** — When you press the talk key, the system pre-renders templates to populate the decorator cache ahead of time, so by the time the actual render happens most decorator calls are already cache hits. A few templates (like event history) are excluded from warmup caching so the player's input is still reflected, but their internal `format_event` calls still benefit from cached results
- **Reduced rendering overhead** — Internal refactoring eliminates redundant work when generating prompts, especially for nested templates

## Papyrus Decorator Caching Changes @MIn @naitro2010

We've significantly improved the speed of Papyrus decorators by reducing consistency guarantees in favor of performance:

- **Non-blocking resolution** — Template rendering no longer blocks waiting for Papyrus script calls. When cached data isn't available, the system immediately returns empty/stale data and logs a warning
- **Prefer stale cache over blocking** — When Papyrus cache expires during async operations, the system uses expired cached data while refreshing in the background, rather than blocking for fresh data
- **Extended cache TTL** — Papyrus and eligibility cache TTL increased from a few seconds to 15 minutes, dramatically reducing cache misses during normal gameplay sessions
- **Fixed action cache regression** — Resolved caching issues related to paused game time that could return stale action data

> **For modders:** If you require stronger consistency guarantees for your data, use native decorators like `get_worn_equipment()`, `is_in_combat()`, `get_faction_rank()`, or `papyrus_util` which always return current values.

## Biotemplate Translation Layer @Daikichi

Added a name translation system so non-English Skyrim installations can resolve localized NPC names to English prompt filenames — no need to rename prompt files per language:

- Supports unique NPCs (matched by plugin + actor ref ID) and generic NPCs (matched by base NPC form ID → localized name lookup)
- Handles light plugins (.esl and esp-fe) correctly
- Example: `リディア` (Japanese) automatically maps to `lydia_C94.prompt`

## Universal Translator Plugin Filter @Daikichi

Added a Plugin Filter to the Universal Translator page:

- Select plugins from those in your load order as either a whitelist or blacklist
- In blacklist mode, dialogue from selected plugins will not be translated
- In whitelist mode, **only** dialogue from selected plugins will be translated
- Uses LRU caching for better performance

## New Template Decorators @Min

- `get_name(uuid)` — Access entity names without needing to use `decnpc`. Useful for event history templates with many different actors
- `get_recent_events(uuid, count)` — Access event history from templates, synergizing with Beta14's caching changes
- `get_event_history_count(uuid)` — Returns the configured event history count for dialogue context, with optional per-actor overrides via bio template key

## CUDA Improvements @Dowser

- Better error messages when CUDA compute architecture is not supported
- More robust handling of unsupported CUDA configurations
- Improved provider auto-selection for GPU/CPU fallback

## Bug Fixes

### Stability Fixes
- Fixed Game Master directed dialogue stalling and never progressing that some users were encountering — refactored dialogue generation system to be less complex and prone to stalling @Min
- Fixed a race condition where NPC continuation dialogues could get blocked when TTS is slow, causing conversations to stall @Min
- Fixed crash caused by template rendering in multi-threaded scenarios @Min
- Fixed eligibility functions becoming stuck (introduced in Beta14) @Min

### Context Leak Fixes
- Fixed virtual NPC memory leak where private events could bleed into other NPC contexts @Min
- Fixed player thoughts leaking into NPC context @Min
- Fixed event context leak issue (NPCs seeing events they were not present for) @Min
- Fixed private virtual NPC events appearing in event history @Min
- Fixed target selector event history including ineligible NPCs @Min

### Template & Caching Fixes
- Fixed several template caching issues that could return stale/incorrect responses @Min
- Fixed trace ID not resetting when streaming buffer is reused @Min
- Fixed decorator trace spans for more accurate debugging @Min
- Fixed pre-warm cache miss that prevented dialogue warmup from working correctly @Min
- Fixed embedded actions not working @Min

### UI Fixes
- Fixed dashboard web UI rapidly polling and causing excessive CPU usage @Min
- Fixed dashboard NPC click incorrectly showing "create new bio" when bio was saved to current save profile @Min
- Fixed creating new character_bio submodule prompts failing validation — now auto-generates proper template scaffold @Min
- Improved trace timeline rendering — key spans are now expanded by default and long-running audio spans no longer compress the useful portion of the timeline @Min

### Game Integration Fixes
- Fixed Omnisight screenshots sometimes showing title screen instead of gameplay @Min
- Added per-actor throttling for hit events to prevent engine overload during big fights @Min
- Dialogue from actors like Meridia, the Black Door, etc. are now properly detected @Daikichi
- Added PaarthurnaxFaction to default faction whitelist @Daikichi

### Translation & Prompt Fixes
- Universal Translator now scans save-specific prompt directories, so actors with save-specific character bios are selectable @daikichi
- Fixed several misnamed prompt files and ref IDs for mod NPCs @Daikichi