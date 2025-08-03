---
title: SkyrimNet Beta2 Released
description: SkyrimNet Beta2
tags: [release, beta2]
slug: /2025-07-13-beta2-release
---

🎉  SkyrimNet Beta 3 Latest
<!--truncate-->

> **Download the new release here:**  
> [https://github.com/MinLL/SkyrimNet-GamePlugin/releases/tag/Beta2](https://github.com/MinLL/SkyrimNet-GamePlugin/releases/tag/Beta2)

---

### 🚀 Installation Instructions

Install like any other mod through your mod manager, replacing the existing SkyrimNet files.

#### Important notes when upgrading:
1. The default values for many configurations have changed. We **recommend deleting** the folder:


This will restore all settings to default.
2. New users must still install the models during installation, same as before.

---

### ✨ New Features

- **Item customization interface**  
Users can now customize the display of worn equipment and weapons, as well as enable or disable their visibility.

- **HTTP server address/port config** added.

- **Combat variant selection** in OpenRouter config is now used for dialogue in combat. This allows fast models like Sonnet to be used during combat while retaining slow, high-quality models otherwise.

- **Universal "max volume" setting**  
Applies to both spatial and virtual entity (narrator/player) audio.

- **Memory generation** now uses its own OpenRouter config variant.

- **Sonnet caching support**  
- Significantly reduces costs and response time.  
- Cache TTL is 1 hour (only honored by Anthropic; others use 5 minutes).

- **Dynamic cache-extension**  
Allows the event history cache to span 3× longer than normal for better memory fidelity.

- **"The Party" kill attribution toggle** added.

- Characters no longer ship directly in the `prompts` folder. They are now **copied only if missing**, to preserve customizations.

- Settings file also no longer ships in default location. However, **this update will overwrite** it once to enable new format and caching support.

- **VRIK Action hotkey support** added.

---

### 🧠 Memory Generation Changes

- Improved memory accuracy for **location and people** involved.
- Avoids generating memories for events within the **last 8 minutes**.
- New default for max memories per retrieval: **5**.
- Memory generation algorithm is now **time-segmented**:

#### Segmentation Rules:
1. Segment must last at least **10 game minutes** (`min_segment_duration`)
2. Segment max is **12 game hours** (`max_segment_duration`)
3. Max **200 events** per memory
4. Minimum **5 events**
5. Time gap of over 60 minutes triggers a boundary

#### Examples:
- **Conversation → Travel → Combat**


> In testing:  
> **518 → 162** memories  
> Nearly same fidelity, significantly more cohesive.

#### To regenerate old memories:
1. Set `"Event Preload Count"` to `5000` in config
2. Delete all memories via in-game UI
3. Restart game
4. Click "Generate" in memory tab (up to 100 each batch)
5. Repeat as needed or increase batch size in config

---

### 🛠 Enhancements

- Actors now react to **health/magicka/stamina** in combat
- Increased default **event cooldowns**
- Added **Quick Settings menu** to Easy Setup page
- Fixed **Papyrus decorators** performance — modders can now safely publish plugins
- **Dynamic Narration API** now renders template variables
- Exposed **profile generation prompt**
- Improved **location & time awareness**
- Smarter **target gender/race** awareness
- Removed `[ Background ]` markers from LLM dialogue
- **Papyrus decorators** are now:
- Evaluated ahead-of-time
- Cached
- Only executed when needed
- Speech pacing tweaks: **less spammy dialogue**
- Events now sorted by **local time**, not game time
- SKSE version downgraded to **2.0.1.104** (supports older game versions)
- Faction filter now uses **Editor ID**

---

### 🐞 Bug Fixes

- Actors stop talking on **death**
- Speech queues flushed on **save reload**
- Fixed errors in **Dynamic Bio**
- Stopped false hit events from triggering LLM dialogue
- Critical fix: prevent **Papyrus decorators** from executing while VM is paused
- Fixed character save failures in editor
- Fixed NPCs **responding to themselves**
- Referrer now points to correct GitHub repo
- Fixed template render errors for `responseTarget`
- Case sensitivity issue in decorators' JSON booleans resolved
- **Global event cooldown** now functions correctly
- Fixed decimal input issue for **some locales**
- Exposed **event cache count** for game load
- Silenced harmless console errors
- Resolved memory generation template errors

---
