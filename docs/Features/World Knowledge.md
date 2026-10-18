---
id: world-knowledge
title: World Knowledge
displayed_sidebar: tutorialSidebar
---

<p align="center">
  <img src="/SkyrimNet-GamePlugin/img/world.png" alt="voicesamples" width="500"/>
</p>


<p align="center">
  <img src="/SkyrimNet-GamePlugin/img/options9.PNG" alt="actions2" width="1100"/>
</p>



#  World Knowledge System

The **World Knowledge System** defines persistent facts about the game world that only certain NPCs can know, reference, and react.

It enables scalable, condition-driven knowledge distribution across NPCs, supporting both always-on entries as well as semantic search , retrievable ones.

With this system you can quickly and reliably set up a customized, vibrant world , full of nuanced knowledge. 

---

## 🧠 Overview

World Knowledge entries represent facts such as:

- "The Stormcloaks won the civil war"
- "There is a thieves guild beneath the city"
- "The player is a known Dragonborn"
- "Bandits control the northern roads"

Each entry can be selectively known by NPCs based on configurable conditions.
It can be as short and simple , or convoluted and extensive as you wish. Though for "always-inject" entries its better to keep it in a manageable size.

---

<p align="center">
  <img src="/SkyrimNet-GamePlugin/img/entry.PNG" alt="voicesamples" width="1200"/>
</p>



## ⚙️ Core Features

###  Conditional Knowledge Distribution

<p align="center">
  <img src="/SkyrimNet-GamePlugin/img/knowledge.PNG" alt="voicesamples" width="600"/>
</p>

Each entry includes a **condition expression** that determines which NPCs know it.

Supported condition types include:

- `is_in_faction(...)`
- `get_quest_stage(...)`
- `is_in_npc_group(...)`
- Custom template expressions : this allow the full use of skyrimnet decorator system, where you can 

This allows fine-grained control, such as:

- War plans only known to Stormcloak members
- Rumors limited to specific cities or factions
- Secrets known only after certain quest stages

---

### 🔁 Injection Modes

####  Always Inject
- Guaranteed to appear in every matching NPC's prompt
- Best for **core identity or critical world state**

####  Semantic Retrieval
- Included only when relevant to the current conversation
- Uses:
  - Keyword matching
  - Embedding similarity
  - Importance score


<p align="center">
  <img src="/SkyrimNet-GamePlugin/img/groups.PNG" alt="voicesamples" width="600"/>
</p>

---

###  Relevance & Limits

- Configurable limits for:
  - Always-injected entries
  - Semantically retrieved entries
- Minimum relevance threshold (default: `0.7`)
- Each entry has an **importance score** influencing retrieval priority

---

###  Testing & Debugging

- Built-in **condition tester**
- Select any NPC to verify:
  - Whether they receive the knowledge
  - How conditions evaluate

---

###  Metadata Support

Each knowledge entry supports:

- **Display Name** (UI label)
- **Type** (e.g., Knowledge, Rumor, etc.)
- **Emotion** (contextual tone)
- **Location**
- **Tags** (for categorization/search)

---

## 📦 Knowledge Packs

Knowledge Packs allow grouping entries into reusable collections. You can save your entries as a pack at anytime.

### Features

- Export/import as `.sknpack`
- Shareable across users/mod setups
- Enable/disable entire packs
- Bulk assignment and editing via UI

### Use Cases

- Quest-specific knowledge sets
- Faction lore bundles
- Custom world-building modules
- Mod distribution packages

---

## 🛠️ Integration

### APIs

- **C++ API** for engine-level integration
- **Papyrus API** for in-game scripting

### MCP Tools

With the Skyriment MPC, the LLM agent will be able to read, edit and create knowledge for you, using your entire game data information!

- Full CRUD operations:
  - Create / Read / Update / Delete
- Bulk operations
- Search and filtering

---

