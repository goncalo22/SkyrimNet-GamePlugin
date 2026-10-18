---
id: events-and-reactions
title: Events and Reactions
displayed_sidebar: tutorialSidebar
---

#  Event & Reaction System 

<p align="center">
  <img src="/SkyrimNet-GamePlugin/img/events.png" alt="events" width="500"/>
</p>


SkyrimNet’s event system enables **dynamic memory**, **LLM-based dialogue**, and **NPC reactivity** by processing structured in-game events. These events act as the core data stream that drives memory formation, conversation context, and AI behavior.

---

## 🧠 Core Concepts

### 1. Events
- **Definition:** Structured records representing player or NPC actions (e.g., combat, dialogue, spell casting).
- **Per Event Type Settings:**
  - `Enabled`: If unchecked, event is ignored.
  - `Persistent`: If checked, event is logged to the memory database.
  - `Allow NPC Reaction`: Enables live NPC responses.
  - `NPC Reaction Cooldown`: Time in seconds before another reaction to the same type.

  

### 2. Dialogue Context History
- **Setting:** `Event History Count – Dialogue`
- **Default:** 50 (range: 5–200)
- **Purpose:** Controls how many past events are passed to the LLM during dialogue generation.

### 3. Preloaded Event Memory
- **Setting:** `Event Preload Count` (e.g., 1000)
- **Range:** 500–8000
- **Purpose:** Number of past events preloaded on game start to prime memory and context.

---

<p align="center">
  <img src="/SkyrimNet-GamePlugin/img/events1.PNG" alt="override" width="1200"/>
</p>


Enabled and Persistent Events can be seen in the Web UI dashboard , under "Recent Events". These will be exposed to the memory system, when generating memories.
Enabled but not persistent Events have a short life in the context, usually around 30 seconds. They are used for immediate LLM behavior responses but will not be registered after their ephemeral duration. These kinds of events are useful for things like "hit" and "container change", to avoid spamming the event context.


## 🧠 How Events Influence Memory & Dialogue

| Feature                    | Uses Events | Needs Persistence | Affected by Cooldowns |
|----------------------------|-------------|--------------------|------------------------|
| LLM Dialogue Context       | ✅ Yes      | ✅ Yes             | ❌ No                  |
| Memory Recall / Reflection | ✅ Yes      | ✅ Yes             | ❌ No                  |
| NPC Live Reactions         | ✅ Yes      | ❌ No              | ✅ Yes                 |
| Event Logging / Debugging  | ✅ Yes      | ✅ Yes             | ❌ No                  |

> ✅ Best practice: Events you want remembered or reacted to should be `Enabled`, `Persistent`, or/and have `Allow NPC Reaction` set appropriately.

---

<p align="center">
  <img src="/SkyrimNet-GamePlugin/img/events3.PNG" alt="override" width="1200"/>
</p>





## 💬 NPC Reactions Overview

- **What They Are:** Real-time dialogue or behavior responses triggered by in-game events.
- **Cooldowns:**
  - **Global Cooldown:** Minimum delay between *any* reactions (e.g., 60s).
  - **Per-Event Cooldown:** Delay between reacting to the *same* event type (e.g., 180s for combat).

### Example Use Cases:
- NPC comments on spell casting (`spell_cast`)
- NPC notices player looting a container (`container_changed`)
- NPC reacts to combat or death (`combat`, `death`)



---

## 🧪 Event Type Tiers – Recommendation Matrix

| Event Type             | Enable | Persist | NPC React | Cooldown |
|------------------------|--------|---------|-----------|----------|
| `combat`, `death`      | ✅     | ✅      | ✅        | 120–180s |
| `activation`, `equip`  | ✅     | ✅      | ✅        | 30–60s   |
| `book_read`, `container_changed` | ✅ | ✅ | ✅      | 60s      |
| `spell_cast`           | ✅     | ✅      | ✅        | 60–90s   |
| `dialogue_*`, `scene_*`| ✅     | ✅      | ❌        | 0        |
| `direct_narration`, `continue_narration` | ✅ | ❌ | ❌    | 0        |
| `custom`, `gamemaster_dialogue`, `player_thoughts` | ✅ | ❌ | ❌ | 0    |

---

## 🚀 Usage Strategy Summary

### ✅ For Immersive Memory and Dialogue
- Set `Persistent = true` for all important events.
- Adjust `Event History Count` (50–100) for context depth.

### ✅ For NPC Interactivity
- Enable `Allow NPC Reaction` for immersive actions (combat, lockpicking, spell casting).
- Use custom cooldowns to avoid spammy chatter.

### ✅ For Performance Balance
- Use a `Preload Count` of 1000–3000 for good memory retention without overloading startup.
- Avoid enabling reactions on every event — pick impactful ones.

---




