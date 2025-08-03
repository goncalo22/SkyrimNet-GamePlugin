---
id: static-bios
title: Static Bios
displayed_sidebar: tutorialSidebar
---

#  SkyrimNet Character Bio System 

## 🔧 What Is It?

The **SkyrimNet Bio System** is a structured character profiling system for NPCs in *The Elder Scrolls V: Skyrim*.  
It enables rich, AI-readable and editable bios that describe an NPC’s:

- Personality  
- Background  
- Goals  
- Relationships  
- Behaviors  

All bios are formatted in a consistent **block-template system**.

### This system is ideal for:

- Deepening AI-driven interactions  
- Providing behavioral context for decision-making  
- Enabling memory formation, emotional tracking, and natural dialogue based on who the NPC is  

---



### 📑 Section Breakdown

| Section Name        | Description                                                                 |
|---------------------|-----------------------------------------------------------------------------|
| `summary`           | A concise overview of the NPC’s role and essence.                           |
| `interject_summary` | When and why this NPC typically interjects or speaks up.                    |
| `background`        | A brief life history and context behind the NPC's current situation.        |
| `personality`       | Traits, values, and typical behaviors.                                      |
| `appearance`        | Physical description with practical or emotional relevance.                 |
| `aspirations`       | Short- and long-term goals, dreams, or intentions.                          |
| `relationships`     | Key NPC connections: family, employers, allies, or enemies.                 |
| `occupation`        | Day-to-day work and how the NPC interacts with the world.                   |
| `skills`            | Abilities and practical knowledge they bring to their work or life.         |
| `speech_style`      | How the NPC speaks: tone, vocabulary, pace, and mannerisms.                 |

##  How It’s Used by SkyrimNet

The bio system is deeply integrated into **SkyrimNet’s AI behavior engine**:

- **In-Game Contextual AI**  
  Bios inform how the AI reasons about characters, recalls memories, or speaks in conversations.

- **Prompt Injections**  
  During an AI prompt, sections of the bio are inserted into the context to help the NPC behave in character.

- **Memory Weighting**  
  `personality`, `relationships`, and `aspirations` influence what the NPC finds important or emotional.

---

## 🛠️ Updating Bios

Bios are updated dynamically using **real-time game information**.

### Updates are driven by:

- **User-written prompts**  
  _e.g._ `"Abelone recently lost her brother in a bandit raid."`

- **Game state data**  
  _e.g._ level, location, faction rank

- **Event streams**  
  _e.g._ witnessed a murder, survived a dragon attack

Only **relevant sections** are changed. SkyrimNet returns a structured response like this:

```json
{
  "updated_content": "Full bio with updated blocks",
  "changes_summary": "Summary of the edits made"
}

```

# 📘 SkyrimNet Character Bio Generation Tutorial

This guide walks you through the process of searching for NPCs and generating (or editing) their AI-driven character bios using the SkyrimNet Web UI.

---

## 🔍 Step 1: Search for Nearby Characters

Navigate to the **"Create New Character"** section:

- Use the **Search Radius** dropdown (e.g., `1000 units`) to define how far the system should search from the player or target location.
- Click **Refresh** to retrieve all characters within that area.

Characters will appear below once found. If a character already has a bio, it will show a yellow warning:
> ⚠️ Character bio already exists for this actor

---

## 🧠 Step 2: Provide Optional Generation Input

If the selected character has no bio, you can guide the AI generation using the **Optional Generation Input** field.

> This is *not required*, but it helps personalize the bio beyond just raw game data.

You can enter:
- Backstory hints
- Personality traits
- Specific goals
- Cultural flavor
- Story relevance
