---
id: action-system
title: Action System
displayed_sidebar: tutorialSidebar
---



# Custom Action System 

<p align="center">
  <img src="/SkyrimNet-GamePlugin/img/actions2.png" alt="actions2" width="500"/>
</p>



The Custom Action System in SkyrimNet allows you to expose any Papyrus function as an AI-accessible action, turning existing mod functionality into intelligent, context-aware behaviors. It’s designed for both mod authors and non-programmers, with a clear visual interface and zero need to write code.

At its core, the system lets you define actions that AI-controlled NPCs can choose to perform based on context, emotion, memory, or ongoing events. These actions can be as simple as playing an animation or as complex as triggering scripted quests with parameters. Each custom action is defined through a guided interface in four steps: basic information, function setup, usage conditions, and advanced options.

When creating an action, you begin by selecting a Papyrus function from any installed mod, chosen from quests found with the game data explorer. Once selected, the system automatically pulls in the function signature and parameters, allowing you to configure how each argument should be filled.

Parameters can be assigned in several modes:

- **Speaker mode**: Automatically uses the actor who triggered the action.
- **Smart mode**: Lets the AI determine the best value based on context, assisted by custom descriptions.
- **Fixed values**: You provide a specific value, with type validation (e.g., int, bool, Actor, string).


## 🔧 Creation & Management

### 🧙 1. Basic Info

Set the action name and description.  
This metadata helps the AI choose appropriate actions during gameplay.

### ⚙️ 2. Function Setup


⚠️ Not all Papyrus functions existing in the quests are equally suited for use as custom AI actions. In SkyrimNet’s action system, any exposed Papyrus function from a quest script can technically be selected as the base of a new action. However, many functions were originally designed for internal quest logic and may require specific conditions, actors, or states to behave correctly. Using such functions blindly may result in broken behavior or invisible failures, especially if the function expects certain aliases, stages, or context that isn’t present during AI invocation.

Because of this, it's important to curate the functions exposed to the AI system. Functions that are stateless, broadly applicable, or perform well-defined, idempotent tasks are generally safer to use. Examples include animations, dialogue triggering, or gameplay effects like applying spells or setting faction relationships. On the other hand, functions that manipulate quest states, rely on alias setup, or assume player interaction may not be compatible unless the underlying logic is carefully understood. SkyrimNet helps mitigate these issues with validation and parameter assistance, but careful review of each function’s original context is still critical.
You can also provide descriptions for each parameter to guide the AI's reasoning.

### ⚙️ 3. Who can use this?

Eligibility rules ensure that only appropriate characters can use a given action. These rules are created visually using a decorator-based system. For example, a “Meditate” action might only be usable by characters in the `Monk` faction. You can combine multiple conditions with AND/OR logic, and the interface provides real-time validation and feedback.


### ⚙️ 4. Advanced Settings

The system also supports advanced features like cooldowns, priority ordering, and optional event generation upon completion. For example, triggering a “Drink Potion” action can emit a new event the AI can react to, allowing for narrative consequences or memory updates.

In summary, after using the game data explorer to find a suitable function these are the four steps

| Step | Name                | Description |
|------|---------------------|-------------|
| 1    | **Basic Information** | Set a clear action name and description. This helps the LLM decide when to use the action and gives modders context. |
| 2    | **Function Setup**    | Define how to fill each function parameter: choose Smart (AI decides), Speaker (triggering actor), or Fixed (constant). You also describe what each parameter means so the LLM knows how to use it effectively. |
| 3    | **Who Can Use This?** | Choose whether the action is available to all characters or set up conditions like faction membership, role, or quest state. This restricts who the AI can choose to perform the action. |
| 4    | **Advanced Settings** | Add features like cooldown timers, priority order, event generation, and target audience. These control when and how the action appears or triggers in-game. |


All actions are stored as readable `.yaml` files under a hot-reloadable directory. This makes editing and sharing actions simple, and enables modders to bundle actions with their mods for seamless distribution. Each YAML entry describes the function, parameter behavior, and eligibility rules—everything the AI needs to decide when and how to use it.


## ⚙️ Technical Highlights

- 📦 Works with any installed mod’s Papyrus functions.
- 🔁 Supports hot-reloading during gameplay.
- ⚡ Uses in-memory caching for fast performance.
- 🪄 Optional: emits a custom event after the action is executed.
- 🧪 Built-in validation with error messaging and rollback support.



Combined with the AI Trigger System, the Custom Action System offers an expressive and modular way to build complex, emergent NPC behavior—no Papyrus scripting required.
To make sharing and using AI actions even easier, an **Action Repository** will soon be available. This will allow users to browse, download, and contribute custom actions directly through the interface — making it simple to extend NPC behavior without needing to build everything from scratch.
