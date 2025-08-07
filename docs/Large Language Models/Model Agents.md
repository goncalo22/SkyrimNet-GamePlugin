---
id: model-agents
title: Model Agents
displayed_sidebar: tutorialSidebar
---

# Model Agents and Usage

SkyrimNet uses **specialized language models** for different tasks that collectively simulate intelligent NPC behavior. These models coordinate to deliver a rich, reactive Skyrim experience, from dialogue to memory, action selection, and emotional response.

There are six of them. You can configure model providers and parameters in:  
🔧 **Advanced Configuration > OpenRouter**

---

## ✨ Default Model  
The **central model** responsible for generating spoken lines and character dialogue. Use a good, smart model, suitable for roleplay.

### 🗨️ Text Generation
- Converts scene, memory, and personality context into **natural dialogue**.
- Uses retrieved memories and character profiles to remain consistent and grounded.
- Can speak to the player, to other NPCs, or monologue when alone.

### 🎮 Game Master 
Acts like a **Dungeon Master**, guiding the scene and ensuring the world feels alive.

### 🎬 Narrative Scene Control
- Creates **ambient interactions**, especially between NPCs.
- Responds to changes in the world state or player behavior.
- Manages **NPC–NPC chatter**, conflict, or alliances.

---

## 🧠 Memory Generation Model  
Handles memory creation, summarization, and storage.

### 📝 Memory Creation
- Summarizes **recent event streams** into **first-person memories**.
- Assigns:
  - `importance_score`
  - `emotion`
  - `tags`
  - `type` (`TRAUMA`, `EXPERIENCE`, etc.)
- Used later for recall, relationships, and mood shaping.

📍 View in-game under: `UI > Memories`

---

## 🔍 Memory Search Model  
Optimized for fast, accurate memory recall when context is needed.

### 🔎 Query Generation
- Builds search queries using:
  - **Semantic vector similarity** (`MiniLM-L6-v2`)
  - **Keyword match filters** (tags, actors, locations)
- Feeds the most relevant memories into the Default Model for improved dialogue quality.

---

## 🧬 Character Profile Generation Model  
Creates and updates NPC identity data.

### 🧾 Profile Creation
- Auto-generates profiles for **modded or uninitialized NPCs**.
- Includes:
  - Goals  
  - Personality traits  
  - Background  
  - Relationship tendencies

### 🔄 Dynamic Updates
- Modifies existing profiles over time based on:
  - Important memories  
  - Recent emotional shifts  
- Allows characters to **evolve** naturally.  
- 🛠 Configurable at: `Advanced Configuration > DynamicBio`

---

## 🎭 Action Evaluation Model  
Decides **what an NPC does** after speaking. The model just needs to be "decent", no need for an expensive one.

### 🎯 Action Selection
- Chooses appropriate **gameplay actions** tied to dialogue intent.  
  - Examples: `FollowPlayer`, `SlapTarget`, `PickUpItem`
- Prevents dialogue from feeling disconnected from in-game behavior.

### ✋ Gesture Generation
- Selects expressive **gestures or animations** that match speech tone.  
  - e.g., nodding, shrugging, dramatic motions

---

## 🧪 Meta Evaluation Model  
Performs **scene-level analysis** to keep interaction flow realistic. Use a fast, exact model. Its tasks are small and frequent.

### 😐 Mood Evaluation
- Updates NPC **emotional state** based on:
  - Dialogue tone  
  - Memories  
  - Player actions  
- Affects:
  - Voice tone (XTTS)  
  - Facial expressions  
  - Decision-making

### 👥 Speaking Turn Selector
- Decides **who should speak next**:
  - Based on relevance, social rules, and proximity  
- Ensures **realistic pacing** (e.g., not everyone talks at once)

---

## 🔗 Coordination Between Models

All models work in tandem:

1. **Memory Search** finds what’s relevant  
2. **Profile & Mood Evaluation** sets emotional/character context  
3. **Default Model** generates dialogue using that context  
4. **Action Model** makes the NPC act it out  
5. **Game Master** spices up the world with ambient interaction
