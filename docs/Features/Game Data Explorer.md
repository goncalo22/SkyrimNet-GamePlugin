---
id: gamedataexplorer
title: Game Data Explorer
displayed_sidebar: tutorialSidebar
---

#  Game Data Explorer

The **Game Data Explorer** is a powerful real-time web interface for browsing and manipulating Skyrim’s entire game data stack — including both vanilla content and loaded mods. It allows modders, developers, and advanced users to inspect and modify data across all major categories with precision and speed.

Whether you're managing plugins, debugging scripts, or exploring race attributes, this tool provides deep visibility into the live game state.

---

## 🔍 Game Data Coverage

The explorer automatically parses all loaded plugin data and organizes it into intuitive, searchable views. Supported data categories include:

### Plugin Management
- Browse all loaded `.esm`, `.esp`, and `.esl` files
- Identify plugin types and sort data by source mod

### Spells & Magic
- View all spells and magic effects from any plugin
- Inspect names, types, schools, descriptions, and conditions
- Add or remove spells from player or NPCs in real time

### Items & Equipment
- Browse weapons, armor, ammo, potions, ingredients, books, and misc items
- View detailed stats, keywords, weight, value, and model paths
- Dynamically give or remove items from any actor

### Factions
- Explore faction hierarchies and crime data
- Review vendor affiliations, crime types, ownership rules, and aggression settings

### Furniture & Activators
- Identify interactive objects for gameplay triggers and test scenes
- Useful for setting up animation conditions or trigger events

### Races
- Examine race flags, playable status, physical dimensions, movement stats, and abilities
- View inheritance chains and combat style links

### Quests
- Navigate quest structures with all stages, aliases, objectives, and conditions
- Check completion status, active stages, and priority
- View or manipulate attached scripts

---

## ⚙️ Real-Time Manipulation

The Game Data Explorer is not just for browsing — it offers **live modification and testing** features to accelerate development and enhance mod debugging.

- Instantly **add/remove spells and items** to or from the player and nearby actors
- Adjust **quantities**, remove unused magic, or simulate gear setups
- Detect **actors within a configurable radius** for target operations
- Fully compatible with mod-added content, no extra setup needed

---

## 📜 Quest Scripting Interface

One of the most advanced features is direct access to **Papyrus scripts** attached to quests.

- View all scripts attached to a quest from any plugin
- See **function names, parameter lists**, and **return types**
- Inspect **script properties** and real-time values
- Execute any exposed Papyrus function directly with custom parameters
- Receive and display **return values or errors** immediately
- Compatible with custom scripts from any mod

This enables fast testing of quest logic, debugging of broken stages, and experimentation without needing CK or in-game console workarounds.

---

## 💡 Use Cases

- Quickly browse and choose game assets for use with custom triggers and descriptions
- Give yourself or nearby nppcs  any items or spells from your mod list without needing FormIDs
- Execute and test quest stages and scripts without reloading
- Preview how a mod modifies base game data
- Rapidly iterate on balance or progression ideas
- Debug issues with modded spells or factions

---

The **Game Data Explorer** transforms SkyrimNet into a full development-grade toolkit — merging script inspection, asset control, and plugin-level visibility into one streamlined interface.