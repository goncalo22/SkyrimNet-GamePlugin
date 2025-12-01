---
id: model-agents
title: Model Agents
displayed_sidebar: tutorialSidebar
---

# Model Agents and Usage

SkyrimNet uses multiple specialized LLMs that work together behind the scenes to create seamless, immersive NPC behaviour . These models coordinate to deliver a rich, reactive Skyrim experience, from dialogue responses, memory and action selection to bios profile and diary generation.
This architecture enables high complexity in organized fashion, ensuring that all involved llms do their tasks in a focused, fast manner, providing each other the context they need.

There are seven of them. You can configure model providers and parameters in:  
🔧 **Configuration Manager > AI Service > LLM Settings**


<p align="center">
  <img src="/SkyrimNet-GamePlugin/img/Models.PNG" alt="XTTS" width="800"/>
</p>

---

## ✨ Default Model  
The **central model** responsible for generating spoken lines and character dialogue. Use a good, smart model, suitable for roleplay.

### Text Generation
- Converts scene, memory, and personality context into **natural dialogue**.
- Uses retrieved memories and character profiles to remain consistent and grounded.
- Can speak to the player, to other NPCs, or monologue when alone.

###  Game Master 
Acts like a **Dungeon Master**, guiding the scene and ensuring the world feels alive.

###  Narrative Scene Control
- Creates **ambient interactions**, especially between NPCs.
- Responds to changes in the world state or player behavior.
- Initiates autonomous **NPC–NPC chatter**.

Configurable at: `Configuration Manager > Game > Gamemaster`

---

## 🧠 Memory Generation Model  
Handles memory creation, summarization, and storage.

###  Memory Creation
- Summarizes **recent event streams** into **first-person individual memories**.
- Assigns:
  - `importance_score`
  - `emotion`
  - `tags`
  - `type` (`TRAUMA`, `EXPERIENCE`, etc.)
- Used later for recall, relationships, and mood shaping.

View in-game under: `UI > Memories`
Configurable at: `Configuration Manager > Memories`

---


## 🎭 Character Profile Generation Model  
Creates and updates NPC identity data. It should be model capable of parsing json well, as it needs to output the bios format correctly.

###  Profile Creation
- Auto-generates profiles for **modded or uninitialized NPCs**.
- Includes:
  - Goals  
  - Personality traits  
  - Background  
  - Relationship tendencies

###  Dynamic Updates
- Modifies existing profiles over time based on:
  - Important memories  
  - Recent emotional shifts  
- Allows characters to **evolve** naturally.  
- Configurable at: `Configuration Manager > Characters > Dynamic Bio`

---

## 🏃 Action Evaluation Model  
Decides **what an NPC does** after speaking. The model just needs to be "decent", no need for an expensive one. Its important though that it can properly judge the context, to correctly start autonomous npc actions and atribute their script parameters correctly.

### Action Selection
- Chooses appropriate **gameplay actions** tied to dialogue intent.  
  - Examples: `FollowPlayer`, `SlapTarget`, `Gesture`
- Prevents dialogue from feeling disconnected from in-game behavior.

###  Gesture Generation
- Selects expressive **gestures or animations** that match speech tone.  
  - e.g., nodding, shrugging, dramatic motions

 Configurable at: `Automation > Action Library` 

---

## ⚔️ Combat Evaluation Model  

Also cost-wise, its recommended a relatively inexpensive llm here, as the combat chatter and reactions will be frequent and short and simple.

When the characters are currently engaged in combat, instructs the LLM to prioritize recent combat-related events and dialogue in its responses. 
- Make NPC speech **reactive to active combat**.
- Emphasize **recent combat-related events** such as:
  - Enemy actions
  - Player moves
  - Damage taken or inflicted
  - Tactical changes (retreat, push, heal)
- Maintain immersion by blending **character personality** with **battle context**.


---

## 🧪 Meta Evaluation Model  
Performs **npc and scene-level analysis** to keep interaction flow realistic. Use a fast, exact model. Its tasks are small and frequent but very important for a good flow and immersive experience.

###  Mood Evaluation
- Updates NPC **emotional state** based on:
  - Dialogue tone  
  - Memories  
  - Player actions  
- Affects:
  - Voice tone (XTTS)  
  - Facial expressions  
  - Decision-making

###  Speaking Turn Selector
- Decides **who should speak next**:
  - Based on relevance, social rules, and proximity  
- Ensures **realistic pacing** (e.g., not everyone talks at once)

###  Query Generation
- Builds very frequent search queries using:
  - **Semantic vector similarity** (`MiniLM-L6-v2`)
  - **Keyword match filters** (tags, actors, locations)
- Feeds the most relevant memories into the Default Model for improved dialogue quality.

--- 

## ✍️ Diary Creation Model 

Responsible for the generation of character diaries, with a manual generation, based on in-game events, emotional states, and memories.   
Each diary entry is automatically:
- Stored as a **personal memory** in SkyrimNet’s memory system  
- Tagged with emotional and importance metadata for recall weighting  
- Used by NPCs to influence dialogue, decisions, and emotional context in future interactions  

The diary llm should be one capable of good, immersive writing, to better acomplish the feature objective.

- Configurable at: `Configuration Manager > Characters > Diary`



---



## 🔗 Coordination Between Models

All models work in tandem:

1. **Bios profile Model** generates and updates character profiles with recent events.
2. **Memory model** generates, classifies and stores individual memories, for fast retrieval
3. **Meta Model** sets emotional/character context. Coordinates conversations by designating the next speaker  
4. **Game Master** uses the Default Model to spice up the world with ambient interaction
5. **Diary Creation Model** When manually prompted, creates an introspective npc diary entry.
6. **Default Model** generates dialogue using all context 
7. **Action Model** makes the NPC act it out 
8. **Combat Model** used in fast paced battles, where intricate dialogue isnt required. 
