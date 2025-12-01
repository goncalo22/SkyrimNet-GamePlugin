---
id: dynamic-bios
title: Dynamic Bios
displayed_sidebar: tutorialSidebar
sidebar_position: 2
---


# Dynamic Bios System

<p align="center">
  <img src="/SkyrimNet-GamePlugin/img/aela2.png" alt="aela2" width="300"/>
</p>

The **Dynamic Bios System** in SkyrimNet provides a way for NPC character biographies to evolve based on in-game events, relationships, and world changes. It works as a layered system that preserves static baseline identities while dynamically updating details to reflect growth and current context.

## How It Works

### 1. Static Bio
- Each NPC has a **static bio file** (`.prompt`) stored under `SKSE/Plugins/SkyrimNet/prompts/characters/`.
- Organized into modular `{% block %}` sections:
  - `summary`, `background`, `personality`, `appearance`
  - `aspirations`, `relationships`, `occupation`, `skills`
  - `speech_style`, `interject_summary`, etc.
- Defines the **baseline identity** of the character. Think of it as the bios starting point.

### 2. Dynamic Bio
- When in-game events occur, you can manually generate or update a dynamic variant of the bio, by clicking **Dynamic Update** This newly created Dynamic bios will now be used **in place of the Static Bios**. 
- All information shown to the world will now be from the Dynamic Bios, so updates should be only made for that one. The Static Bios will remain unused, like a record of the starting character arc. It serves to be re-used on a new game, where the previous dynamic should be discarded.

<p align="center">
  <img src="/SkyrimNet-GamePlugin/img/dynamic2.PNG" alt="dynamic2" width="400"/>
</p>

## 🛠️ Updating Dynamic Bios

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
## Both Static and Dynamic Bios can be updated with current events, but you normally will want to update the Dynamic Bio, using the dynamic update button. 

- Dynamic bios **take precedence at runtime**, ensuring NPCs reflect evolving storylines.


### 3. Preview & Merge
- A **Dynamic Bio Preview** window shows:
- **Summary of changes** (e.g., new aspirations, updated relationships, expanded roles).
- **Static Bio** (original) vs **Dynamic Bio** (event-updated).
- Users can **apply or cancel** changes before they are saved.

### 4. Evolution, Not Replacement
- Dynamic updates preserve **core static traits** while layering in:
- New goals, allegiances, or enemies.
- Updated relationships with the player or other NPCs.
- Role changes due to quests, factions, or world events.
- Example: Aela the Huntress gains new responsibilities after the return of dragons, expanding her aspirations and leadership role without losing her established personality.

## Benefits
- NPCs feel **alive and responsive** to events.
- Supports **long-term progression** of characters without manual rewriting.
- Maintains **lore consistency** while reflecting individual growth.
- Modular design makes it easy to expand or customize per mod.

### When 
---

## What other NPCs know:

In the Bios, the **block summary and block appearance are exposed between npcs**, they know what is there, when they interact. This gives them very useful information, for a proper roleplay. To avoid exposing secrets or information you dont want them to know (like being a vampire or your quest acomplishments) make sure you dont have them revealed in those blocks. If you sense npcs are getting too much information, check these blocks, a "spoiler" could have been added, when a dynamic update was made.


When a Dynamic Bios is generated, it will be it that its exposed to the npc, rather than the Static Bios.
For most npcs the static bios will be more than enough, creating a dynamic bios is suitable for when you want to give a better sense of story progression and character development.