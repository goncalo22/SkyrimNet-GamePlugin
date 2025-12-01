---
id: gamemaster
title: GameMaster
displayed_sidebar: tutorialSidebar
---

#  SkyrimNet GameMaster 

<p align="center">
  <img src="/SkyrimNet-GamePlugin/img/gamemaster.png" alt="gamemaster" width="500"/>
</p>


The **GameMaster system** in SkyrimNet enables dynamic, AI-driven scene narration, ambient storytelling, and autonomous world control. It acts as a virtual Dungeon Master, capable of responding to gameplay events or narrating scenes based on recent context.
Its the Gamemaster that starts npc-to-npc proactive dialogue, by using the recent context and character bios and memories to produce meaningful conversations around you or directed at you.

---

##  Core GameMaster Capabilities

### ✅ GameMaster Enabled
- **Purpose:** Activates the entire GameMaster system.
- **Effect:** Without this enabled, all GM-driven prompts, narration, and LLM injections are disabled.

### ✅ GameMaster Agent Enabled
- **Purpose:** Enables **autonomous scene generation**, allowing the AI to narrate or drive scenes independently.
- **Effect:** When active, the AI can inject scene descriptions, reactions, or environmental storytelling without player input.


---

## ⏱ GameMaster Timing & Scope Settings

| Setting                               | Value | Description |
|--------------------------------------|--------|-------------|
| **GameMaster Action Cooldown**       | 120s   | Minimum delay between two autonomous GameMaster actions. Prevents excessive narration. |
| **GameMaster Nearby Actor Radius**   | 800    | Distance (in game units) around the player to scan for relevant NPCs to include in narration. |
| **GameMaster Recent Events Count**   | 25     | Number of recent events passed to the LLM when generating GameMaster context. |
| **GameMaster Request Timeout**       | 30s    | Time limit for the LLM to respond to a GameMaster prompt. Prevents long hangs. |
| **GameMaster Continuous Scene Cooldown** | 6s | Cooldown between narration lines when in **continuous mode** (e.g., storytelling scenes). |

---

**The Game master Action Cooldown controls the frequency of autonomous npc conversations, so lower it if you desire higher frequency of npc chatting.**

## 🕹️ GameMaster Controls – Hotkeys & Manual Features

| Control                          | Default Key | Description |
|----------------------------------|-------------|-------------|
| **Toggle Continuous Mode**       | `F10`       | Enables rapid-fire narration mode. Best for focused RP scenes with frequent GameMaster input. |
| **Direct Input (Text)**          | `Insert`    | Lets the player type any fact (e.g., “A ghost enters”) and have the LLM act on it immediately. |
| **Voice Direct Input**           | `O`         |  Allows spoken commands to direct the GameMaster system.                                     |
| **Continue Narration**           | `F8`        | Manually prompts the AI to continue a previously paused narrative or NPC dialogue. |
| **Toggle GameMaster**            | `F3`        | Turns autonomous narration on/off in real time. Useful for controlling storytelling flow. |
| **Toggle World Event Reactions** | `X`         | Enables or disables global NPC reactions to world events (combat, dialogue, quests, etc.). |

---

## 🧩 GameMaster Use Cases

- 🎭 **Dynamic RP Scenes:** Narrate what NPCs do, describe environments, or inject ambient activity like weather changes.
- 📚 **Narrative Control:** Serve as an invisible narrator that weaves stories between gameplay events.
- 👁 **Off-screen Worldbuilding:** Have the GameMaster suggest things happening outside the player’s direct view.
- ⌨️ **Player-Directed Scenes:** Manually inject actions, plot twists, or scene changes using text or voice input.

---

##  How It Works Internally

- The system pulls in recent events (`GameMaster Recent Events Count`) and scans the surrounding area (`Nearby Actor Radius`).
- Using a templated LLM prompt, it creates a scene narration or environmental update.
- If `GameMaster Agent` is enabled, this happens automatically at intervals (respecting cooldowns).
- In `Continuous Mode`, narration flows rapidly with very short delays for RP-heavy segments. ( this can sometimes lead to some redundant answers, where the conversation seems to loop, depending of topic and llm creativity)

---

## ✅ Tips for Use

- Use `F3` to toggle auto-mode when you want quiet periods or direct control.
- Activate `F10` (continuous) during immersive scenes, like rituals, boss fights, or romantic interludes.
- Combine with `Insert` input to inject surprises or react to roleplay manually.
- Use small cooldowns (e.g., 6s) only during focused storytelling, not during combat or exploration.
- **If the Gamemaster seems to not be triggering conversations,after the established cooldowns, a re-load of the game should solve it.**