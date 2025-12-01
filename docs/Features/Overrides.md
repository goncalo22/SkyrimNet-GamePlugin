---
id: overrides
title: Overrides System
displayed_sidebar: tutorialSidebar
---

## 🎛 Overrides System

<p align="center">
  <img src="/SkyrimNet-GamePlugin/img/overrides.png" alt="gamemaster" width="500"/>
</p>

The **Overrides System** lets you customize AI, voice, and other configuration settings on a **per-actor** or **per-group** basis, without modifying global configurations.

---

### 🧍 Per-Actor Overrides
Apply settings to a **single NPC** or the **player**.  
Currently supported high-value overrides:
- **🗣 Voice ID** – Assign a unique TTS voice for the actor.
- **🤖 LLM Model Configuration** – Change the LLM model, parameters, API endpoints, and provider settings for text generation.

<p align="center">
  <img src="/SkyrimNet-GamePlugin/img/override.PNG" alt="override" width="1200"/>
</p>


These overrides are perfect for making certain characters stand out with unique personalities or speech patterns.
Giving your followers different llms, suitable for their personas, will help balance the llm worst quirks and tendencies, as they wont reinforce each other.
For instance, deepseek likes confrontation, while meta-lama models are more tame and helpful, the two having a dialogue will somewhat cancel each other, instead of escalating a discussion.

---

### 👥 Groups
Groups are **sets of config overrides** that can be applied to multiple actors at once.
- Example: *"High Quality"* group for followers.
- Saves time by avoiding duplicate configuration edits.
- Planned expansion: auto-apply groups to **factions, races, genders**, and other categories.

Groups allow consistent behavior or quality settings across many NPCs without repetitive edits.

---

### ⚙ Config-Wide Support
The system can override **any config value from any file**—as long as:
1. The value makes sense in a per-actor context.
2. The field has been explicitly enabled for overriding.

Initially, only **Voice ID** and **OpenRouter** settings are enabled, but more can be added easily.

---

### 📌 Limitations
- **Multiple TTS engines at once** are not supported (per-actor engine selection is not yet possible).
- Some global-only settings cannot be applied per actor until explicitly wired for override.

---

### ✅ Benefits
- Fine-grained control over AI behavior and voices.
- Keep global defaults intact while tailoring specific characters.
- Reusable groups streamline maintaining consistent settings across large numbers of NPCs.