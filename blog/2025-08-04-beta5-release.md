---
title: SkyrimNet Beta5  Released
description: SkyrimNet Beta5
tags: [release, beta5]
---

🎉  SkyrimNet Beta 5 Latest
<!--truncate-->

# SkyrimNet Beta 5 – Full Changelog

**Beta 5** represents a major leap forward in mod integration capabilities, with ~90% of integrations now possible *without writing code* through three core systems:

- **Actions** – Expose any Papyrus function as an LLM action.  
- **Triggers** – Create conditional AI reactions to game events.  
- **Awareness** – Improved decorators give the LLM real-time access to game state and mod data.

This release also delivers:

- A **complete voice cloning overhaul** with browser-based management, automatic voice discovery, and real-time TTS testing (XTTS support coming soon).
- The new **Game Data Explorer** lets you browse and manipulate game data in real-time via web, integrating tightly with the AI ecosystem.

🔧 See `ExampleIntegrations.zip` for ready-made examples:
- **Dirt & Blood** – Dirty state awareness, LLM bathing reactions.
- **Sunhelm** – AI awareness of needs.
- **Vanilla** – `GiveCarriageRideTo` action. Carriage drivers now follow LLM instructions.

---

## Major Features

### Game Data Explorer

Browse and manipulate *all loaded game data* in real-time via a web interface.

**Game Data Coverage:**
- **Plugin Management** – Explore all .esm/.esp/.esl files with type classification.
- **Spells & Magic** – Add/remove spells/magic effects with rich property views.
- **Items & Equipment** – Full categorization of weapons, armor, consumables, etc.
- **Factions** – View hierarchies, crime flags, vendor status, ownership rules.
- **Furniture & Activators** – Ideal for trigger testing.
- **Races** – See playability, stats, and racial perks.
- **Quests** – Navigate quest trees, stages, priorities, and attached scripts.

**Real-Time Manipulation:**
- Give/remove spells or items to/from players or NPCs with control over quantity.
- Discover nearby actors dynamically for quick testing.
- Test mod content instantly with one-click execution.

**Quest Scripting:**
- View and inspect any mod's quest scripts and properties.
- Call any Papyrus function with live parameters and result preview.

**Integration & Safety:**
- One-click trigger creation from explored data.
- Action generation from discovered quest functions.
- Changes blocked until game is fully loaded (prevents corruption).
- Advanced error reporting and rollback on failure.

---

## AI Trigger System

Build conditional AI reactions to *any game event* via a no-code web interface.

**Features:**
- **Condition Builder** – Build rules using schema fields with operators (equals, regex, >, etc.).
- **Response Types** – Output thoughts, dialogue, narration using templating.
- **Auto-generation** – Trigger names & content generated based on event type.
- **Advanced Controls** – Probability, cooldowns, priority, audience targeting.
- **Real-time validation** – Instant syntax and condition feedback.
- **One-click creation** – Use live Event Monitor to auto-generate triggers.

**Technical Details:**
- All events follow structured schemas via an **Event Schema Registry**.
- Full template support: `{{ event_json.spell }}`, `{{ originator }}`, etc.
- Full **hot-reloading** support.
- Supports mod-distributable triggers.

---

## Custom AI Action System

Expose **any Papyrus function** as an LLM action — no code required.

**Creation & Management:**
- **4-Step Wizard**: Basic Info → Function → Eligibility → Advanced Settings.
- **Game Integration**: Create actions directly from quest/script explorer.
- **Storage**: Actions stored in hot-reloadable YAML format.

**Parameter Modes:**
- **Dynamic** – LLM decides values based on prompt and hints.
- **Speaker** – Uses triggering actor as parameter.
- **Static** – Manually define values with validation.
- **Nearby Actor** – Auto-populate parameters with actors near player.

**Eligibility Rules:**
- Use decorators like `is_follower`, `has_spell`, etc.
- Visual rule editor with suggestions and validation.
- Context-aware: Only show eligible actions at runtime.

**Technical:**
- Fast in-memory caching.
- Optional event emission after action completes.
- Full error reporting and safe rollback on failures.

---

## Location Detection Algorithm

NPCs now describe their **surroundings** using in-game context like:

> “Quite a ways away from Bleakwind Basin, near Ri’saad’s caravan.”

**Details:**
- Categorizes surroundings: landmarks, furniture, natural objects, etc.
- Filters redundancy and scales distance descriptors.
- Works indoors and outdoors with configurable thresholds.

---

## Spell Customization

Filter out utility/mod spells from showing in AI spellcast events.

- Customize spell names/descriptions for AI clarity.
- Enable/disable individual spells per event tracking.

---

## Voice System Improvements (by @Daikichi)

### Voice Sample Management UI

Manage voice samples *via browser* — upload, test, and assign voices.

**Voice Discovery:**
- Auto-detects voice types from all plugins.
- Grouped by plugin and sorted intelligently.
- Fast filtering & pagination.

**Sample Handling:**
- Supports WAV & FUZ with auto conversion.
- Quality checks, drag & drop uploads (1KB–10MB), real-time playback.
- Persistent across sessions.

**Testing & TTS:**
- Real-time TTS test/playback.
- Temporary dummy actors for voice testing.
- Live transcription & duration feedback.

**UI Enhancements:**
- Resizable panels, saved themes, instant validation.
- Direct link to voice types for workflow integration.

### Additional Voice Features:
- Persistent mapping from in-game dialogue.
- No dependency on vanilla dialogue exposure.
- **Kokoro TTS**: New lightweight high-quality narrator voices.
- VastAI, XTTS, Mantella compatibility fixes.
- Timeout & fallback improvements.

---

## Decorator System Additions

New decorators available:
- `is_follower`
- `is_indoors`
- `get_script_property`
- `is_in_faction`
- `get_global_value`
- `has_magic_effect`
- `has_spell`

---

## Prompt and UI Enhancements

- Smarter narration logic.
- Improved prompt formatting for dialogue/narration.
- Clearer indoor/outdoor differentiation.
- Easy Setup → Hotkeys link added.
- Better default layout scaling (up to 90% width).
- Fixed broken themes, item customization bugs.

---

## Bugfixes & Stability

- Fixed CTDs when adding items/spells.
- UTF-8 and broken links resolved.
- Fixed Zonos silent fallback logic.
- Better handling of non-English character names.
- Better logging for events and TTS errors.
- Whisper crash fix on simultaneous recordings.
- Custom event prompt formatting fix.
- Configurable cap for dialogue event history.

---

## Behavior & Engine Changes

> ⚠️ **Warning for Non-English Skyrim Players**  
Due to a bugfix in NPC ID handling, a **new game is recommended**. Continuing old saves may result in memory/event loss for some NPCs.

> ⚠️ **Voice File Format Changed**  
Custom Zonos voices must be **re-uploaded** using the new Characters UI.

**Additional Changes:**
- HTTP server now starts *after* Skyrim fully loads (prevents early-access bugs).
- Native Editor ID Fix is **now required**:  
  👉 https://www.nexusmods.com/skyrimspecialedition/mods/85260
- Mod-supplied configs now properly override defaults.

---

## Upcoming Roadmap

Planned (not ordered):

- Better **group chat** filtering & actor cohesion.
- XTTS & Piper fixes (run-on sentences).
- **Image-to-Text (ITT)** pipeline.
- More high-quality **action additions** (and removal of poor ones).
- **Dynamic Quest System**.
- Improved **VR support** — aiming for first-class experience.
- Broader **internationalization** support.
- Direct **HIGGS** integration.

## 📚 New SkyrimNet Wiki (WIP)

@everyone  
We now have a **work-in-progress Wiki** with excellent tutorial videos authored by **@Gonçalo**!  
📖 https://goncalo22.github.io/SkyrimNet-GamePlugin/  

> ⚠️ Future documentation efforts for the project will live here.

Want to contribute? Feel free to send us **Pull Requests (PRs)**!

---

## 🙌 Special Thanks

@everyone  
Huge thanks to everyone who contributed to this release!

- 🎙️ **@Daikichi** – Tons of bug fixes and polish, *especially* around TTS systems, plus the new **Voice Sample Management System**!
- 🗣️ **@MIKA** – Implementation of the new **Kokoro narrator voice**!
- 🧠 **@Elbios** – Bug fixes and improvements to **Vast.ai** support!
- 📘 **@Gonçalo** – Creator of the new **SkyrimNet Wiki**!
- 🧪 **All @Alpha Testers** – For tireless playtesting, bug reporting, and feedback!

---

## 🔗 SkyrimNet Docs  
[SkyrimNet Documentation](https://goncalo22.github.io/SkyrimNet-GamePlugin/)  
*An AI-driven Skyrim framework*