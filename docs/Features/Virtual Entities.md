---
id: virtual-entities
title: Virtual Entities
displayed_sidebar: tutorialSidebar
---

<p align="center">
  <img src="/SkyrimNet-GamePlugin/img/virtual.png" alt="dialogue" width="500"/>
</p>


**Virtual NPCs** are AI-driven entities that exist purely in prompt/context space.  
They do **not** require a physical actor in the Skyrim game world, yet behave like full NPCs in dialogue, memory, and triggers.

This system enables powerful narrative and gameplay mechanics such as talking artifacts, inner voices, gods speaking in the mind, or quest-bound entities.
Virtual NPCs dramatically expand **SkyrimNet’s** narrative power by decoupling AI characters from physical actors.


---

## Core Concepts

### What Is a Virtual NPC?
- It is a Character that exists only in AI context (no physical Actor)
- Has:
  - Dialogue
  - Memory & diaries
  - Own editable Bios like it other npcs
- Fully integrated with SkyrimNet systems (bios,memories, triggers, subtitles)

---

## It has Interaction Modes:

### Public Mode
- Behaves like a normal NPC
- Everyone can hear and respond
- Use cases:
  - Talking rings or amulets
  - Cursed artifacts
  - Floating companions without bodies

### Private Mode
- Only the **player** and other **private virtual NPCs** can hear them
- Invisible to normal NPC context by default
- Use cases:
  - Inner voices / mental companions
  - Gods or Daedra inhabiting the player’s mind
  - Tutorial or guide entities

#### Optional Setting
- Allow **real NPCs to respond** to private virtual NPC speech
- The private speech itself is **not injected** into NPC context  
  (NPCs react to effects, not the voice)

Even in private mode, npcs will still hear the player talk ( apparently to himself). That is within expected immersion, so to avoid that, use [Whisper Mode](/Features/player-dialogue#whisper-mode).




---


## Memory System

Virtual NPCs:
- Have long-term memory
- Can:
- Remember events
- Track relationships
- Write diary entries
- Fully compatible with SkyrimNet’s memory segmentation and recall system

---

Caution: A Virtual Entity will be a constant presence, if always enabled, so will produce many memories. If that is undesired , there are triggers to disable/enable the Entity.

#

## UI & Compatibility

- ✅ Compatible with **Floating Subtitles**
- You can give it a voice and a prefered TTS
- Speech appears exactly like normal NPC dialogue
- Works seamlessly alongside physical NPCs

---

## Ideal Use Cases


- Talking artifacts (rings, weapons, cursed books)
- Inner monologues or sanity systems
- Daedric influence or possession mechanics
- Quest-only or ephemeral characters
- AI narrators or player advisors
- Meta-commentary and fourth-wall interactions

---

# SkyrimNet — Virtual Entities Configuration

## Overview



This configuration UI allows user to define, manage, and control these entities.

To create a new one simply click on "Add Entry" and give the Entity a name and the configuration you wish

<p align="center">
  <img src="/SkyrimNet-GamePlugin/img/virtual1.PNG" alt="dialogue" width="1200"/>
</p>


---

## Global Configuration

### Character TTS Overrides

- Shortcut to the **Character Overrides** tab
- Used to configure Text-to-Speech settings for:
  - Physical NPCs
  - The player
  - Virtual entities (unless overridden per entity)

---

### Allow NPC Reactions to Private Events

**Purpose:**  
Allows physical NPCs and public-mode virtual entities to react to *private* virtual speech events **without knowing what was said**.

**Example:**
- A Daedric voice whispers privately to the player
- Nearby NPCs react with fear, suspicion, or confusion
- The spoken content is not injected into NPC context

This enables believable world reactions while preserving secrecy.

---



## Virtual Entities List

Each row represents **one Virtual NPC**.

### Core Fields

#### Entity Name
- Internal unique identifier
- Used by:
  - Triggers
  - Papyrus API
  - Config files
- Example:
  ```text
  Player Thoughts
  Narrator
  Molag Bal

After creating a Virtual Entity in this section you can now complete a character Bios for it, in the Characters ---> Bios section of the UI

The **interjection block** is very important for how ther entity will intervene on its own, during play. So set it to make the subject matters as generic or specific as you desire. You can, of course, tune it later.


<p align="center">
  <img src="/SkyrimNet-GamePlugin/img/Molag.png" alt="dialogue" width="1200"/>
</p>


## Virtual NPC Triggers

 Using custom Triggers you can now:

- Target **only virtual NPCs**
- Enable or disable them dynamically
- Useful for:
- Quest stages
- Reading cursed books
- Entering specific locations
- Story-driven hallucinations or possession

---

## Use Cases

- Spawn a guide entity when a quest starts  
- Disable an inner voice after a key decision  
- Change a character’s personality mid-quest  
- Temporarily possess or influence the player  

---