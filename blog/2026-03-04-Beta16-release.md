---
title: SkyrimNet Beta16  Released
description: SkyrimNet Beta16
tags: [release, beta16]
---

🎉  SkyrimNet Beta 16 Latest
<!--truncate-->

# SkyrimNet Beta16 

## Overhauled Package Management System @MIn @Naitro2010
  SkyrimNet now manages NPC AI packages (dialogue, follow) entirely through direct engine hooks, bypassing both Papyrus and PapyrusUtil for package writes. This is a ground-up replacement of the previous package dispatch system.
  - **Better mod compatibility** — Eliminates race conditions where PapyrusUtil's `PackageEnded` handler would destroy other mods' package overrides (e.g., MARAS, IntelEngine) when SkyrimNet applied its own packages. Both systems now stay in sync automatically.
  - **More reliable package application/removal** — Direct engine hooks remove the fragile multi-layer
   dispatch chain (C++ → Papyrus VM → PapyrusUtil → Engine), reducing points of failure for stuck or
  lost packages.
  - **Behavioral change** — Followers now properly look at their dialogue targets and can use
  NPC-to-NPC dialogue packages now apply to followers (previously excluded).
  - This change is scoped to *how* packages are applied — we're planning further updates to the logic around *when* packages are added and removed, building on this more robust foundation.


## Plugin Configuration System @Galanx
- Third-party plugins can now define config schemas via `manifest.yaml` and appear automatically in the WebUI
- Plugins can register their own LLM variants with custom endpoints, models, and parameters
- Plugin settings are hot-reloadable — saving in the WebUI immediately re-registers LLM variants

## C++ Plugin API v4 @Galanx @MIn
New native API functions for SKSE plugins and external DLLs to query SkyrimNet data:
- **UUID Resolution** — convert between Skyrim FormIDs and SkyrimNet UUIDs, look up actor names
- **Memories** — retrieve NPC memories with optional semantic search
- **Events** — query recent events filtered by actor and event type
- **Dialogue History** — fetch player-NPC dialogue exchanges and most recent speaker info
- **Engagement Analytics** — per-actor engagement stats with configurable recency windows
- **Relationship Data** — find related actors via shared event history, directed NPC-to-NPC event pair counts, and comprehensive player context
- **Plugin Config** — read any registered plugin's configuration by name or dot-path
- **Diary Entries** — query NPC diary entries by UUID with optional date range and limit filters

Published `PublicAPI.h` header with parameter docs, JSON return schemas, thread safety notes, and initialization timing guidance — shipped in the `CppAPI/` directory of the release for easy third-party integration

## SKSE ModEvent Notifications @MIn
SkyrimNet now fires SKSE ModEvents at key lifecycle points — external mods can hook these via `RegisterForModEvent()` to react to SkyrimNet in real time. Configurable via `events.enableOutboundModEvents` (enabled by default)

| Event | When It Fires |
|-------|---------------|
| `SkyrimNet_DiaryCreated` | Diary entry saved |
| `SkyrimNet_MemoryCreated` | New memory stored |
| `SkyrimNet_SpeechStarted` | Text segment queued for TTS |
| `SkyrimNet_SpeechComplete` | Full LLM response finalized |
| `SkyrimNet_AudioStarted` | Audio playback begins |
| `SkyrimNet_AudioEnded` | Audio playback ends |
| `SkyrimNet_OnPluginConfigSaved` | Plugin config saved via WebUI |

Each event sends a JSON payload in `strArg` with context like speaker name, form ID, text content, and importance scores. Example Papyrus usage:
```
RegisterForModEvent("SkyrimNet_SpeechComplete", "OnSpeechComplete")

Event OnSpeechComplete(string eventName, string strArg, float numArg, Form sender)
  ; strArg contains JSON: {"speakerFormId": ..., "speakerName": "Lydia", "fullText": "...", "targetName": "Player"}
  Debug.Notification("Speech complete: " + strArg)
EndEvent
```

## Silent Narration Hotkey @MIn
New "Silent Narration" hotkey that lets you type facts or events into the world context without triggering NPC dialogue responses — useful for establishing story context that NPCs should be aware of but not react to immediately. Available from the wheel menu or as a configurable hotkey binding. Very similar to direct narration, though without triggering an immediate response.

## MCP Console Commands @MIn
New `execute_console_command` MCP tool lets you run arbitrary Skyrim console commands programmatically through the MCP interface — specify a command and an optional target form ID (defaults to player). Functionally, this allows you to ask an agent that is connected to our MCP to do a great many things in game - debugging, fixing issues, adding items, etc. 

## Console Dialogue Output @MIn
New `subtitles.enableConsoleOutput` toggle (off by default) that mirrors all dialogue and narration to the Skyrim console (`~`) — works independently of subtitle visibility, so you can read dialogue text even with subtitles disabled

## Optional Action Parameters @Lemonade8339
Custom Papyrus quest actions now support optional parameters with default values — actions can proceed even if the AI omits certain parameters. Configurable in the WebUI with new optional/default fields for dynamic parameters.

## Papyrus API Additions @MIn @Lemonade8339

| Function | Description |
|----------|-------------|
| `TransformDialogue(String text)` | New — Transform freeform text into player dialogue via LLM, same as the Transform Dialogue hotkey but callable from scripts |
| `TriggerSilentNarration()` | New — Programmatically open the silent narration input dialog |
| `PurgeDialogue(bool abDeferToCurrentFinished)` | Updated — New optional parameter: when true, lets the current line finish before clearing the queue |
| `TriggerInterruptDialogue(bool abDeferToCurrentFinished)` | Updated — Same deferred mode option as PurgeDialogue |

## Improvements

### NPC-to-NPC Dialogue @Severause
Fixed NPC-to-NPC conversations incorrectly showing the player as the dialogue target — NPCs now properly address each other. Added `lastDialogueTarget` context variable for prompt templates, improving conversation flow and target selection accuracy in multi-NPC scenes.

### Model Verification & Audio @Dowser
- All HuggingFace model downloads now verify file integrity via SHA hashes — prevents silent corruption and version drift
- Each TTS provider now declares its preferred sample rate; resampling happens at load time via FFmpeg instead of ad-hoc downstream conversion
- Added try/catch guards around ONNX model loading in Kokoro, PocketTTS, and SileroVAD — corrupt models now produce clear errors instead of crashes

### Reusable Character Submodule Blocks @Lemonade8339
Added render modes for each individual character bio block to allow for targeted rendering

### Other Improvements
- Interrupt/purge now has an option to let the currently speaking NPC finish their line before cutting off, instead of stopping mid-sentence @Lemonade8339
- Max memories per actor increased from 1,000 to 5,000 (max configurable ceiling also raised from 10,000 to 50,000) @MIn
- SkyrimNet hotkeys are now suppressed when the PrismaUI overlay has focus, preventing accidental triggers. Requires the latest version of PrismaUI to work. @MIn
- CPU, GPU, and RAM info logged at startup to help diagnose performance issues in bug reports @Dowser
- Build now compiles ESP plugin and Papyrus scripts directly from the SkyrimNet-GamePlugin repo @Dowser

### Engine Updates @Dowser
- Updated CommonLibSSE-NG from Dec 2025 to 4.2.0 (Feb 2026)
- Game version and CommonLib version now logged at startup

## Bug Fixes
- Fixed crash when Kokoro TTS was enabled that was occurring for some users from Beta15 @Galanx
- Fixed diary entries showing 1970 dates — was using game time instead of real system time for creation timestamps. Fixes this moving forward, does not retroactively correct timestamps for older diary entries. @MIn
- Fixed crash (CTD) when accessing memory endpoints in the web UI during game load — now returns a "game is loading" message instead @MIn
- Fixed background memory worker generating memories from "future" events when loading an older save before the timeline continuity check completes @MIn
- Fixed stale memory search results persisting after a timeline clear @MIn
- Fixed background dialogue clobbering active player conversations — if you talk to an NPC while they're delivering a vanilla line, your dialogue now takes priority @MIn
- Fixed memory listing sort not working in the web UI @MIn
- Fixed config variant overrides not clearing properly on reload @MIn
- Fixed unconscious/sleeping NPCs being selected as dialogue targets @MIn
- Fixed raw JSON error details being shown to users — error messages are now human-readable @MIn
- Removed SlapTarget action that could cause permanent player ragdoll @MIn
- Fixed file-exists decorator showing unhelpful error messages — now includes the filename and value @MIn
- Fixed SkyrimNet package overrides getting stuck on dead NPCs @MIn
- Fixed OmniSight capture slots leaking permanently if a task was interrupted — now uses RAII cleanup so slots are always released @MIn
- Fixed LLM timeout error messages not showing which variant (dialogue, default, etc.) timed out @MIn
- Removed two unused config settings (`language.defaultVariant` and `openrouter.max_context_length`) that were saved to YAML but never actually used @MIn

## Breaking Changes 🚨
`PurgeDialogue` and `TriggerInterruptDialogue` both accept a new optional argument. If you have Papyrus scripts compiled that use either function, you need to recompile them to continue working with this version.