---
id: memory-recall
title: Memory System
displayed_sidebar: tutorialSidebar
---

#  SkyrimNet Memory System


<p align="center">
  <img src="/SkyrimNet-GamePlugin/img/greybeard.png" alt="vast" width="450"/>
</p>


SkyrimNet’s memory system gives NPCs long-term, context-aware memory — enabling immersive behaviors, dynamic relationships, and narrative consistency. Each memory is generated from actual in-game events and can influence dialogue, emotional state, or behavior.

---

## 📌 Overview

NPCs in SkyrimNet remember what happens around them. Their memories aren’t static — they form, change, and are recalled based on relevance. These memories are built from real events, like conversations, combat, or discoveries, and can persist for the entire game.


### 🧠 How Memories Work in SkyrimNet


In **SkyrimNet**, characters can remember what happens around them — just like people. These memories help shape their responses, personalities, and decisions.

Every time something important occurs (like a conversation, a fight, or a strange encounter), a memory may be created. These memories store:

- **What happened** (a short story or description)
- **Where it happened**
- **Who was involved**
- **How they felt about it**
- **How important it was**

> Example:  
> A vampire NPC might remember turning a player into a thrall, and that memory could make them act possessively or feel proud. These memories help make SkyrimNet characters feel more alive and consistent.

---

## 🔄 Memory Lifecycle

### 1. **Event Collection**
NPCs continuously observe and participate in game events:
- Conversations
- Combat
- Item transactions
- Proximity to notable actions or actors

Each event is timestamped and stored with metadata (e.g., actors, location, emotion, tags).

### 2. **Segmentation**
Events are grouped into **memorable segments** based on:
- Time gaps (`max_gap`: 60 minutes)
- Duration limits (10–480 minutes)
- Number of events (min: 5, max: 200)

This forms coherent memory blocks like:
- A full dungeon crawl
- A heated argument and its aftermath
- A romantic or traumatic moment

### 3. **Memory Generation**
An LLM summarizes the event segment into a first-person narrative:
- Describes **what happened**, **who was there**, and **how it felt**
- Uses specific places, names, and emotional context
- Follows configurable prompts for tone, detail, and format

Each memory is stored with:
- A **summary** and **details**
- **Emotion tag** (`joyful`, `angry`, `fearful`, etc.)
- **Importance score** (0.0–1.0)
- **Tags** (people, places, activities, items, emotions)
- **Memory type** (e.g., `EXPERIENCE`, `TRAUMA`, `RELATIONSHIP`)

### 4. **Embedding & Storage**
Each memory is embedded using `MiniLM-L6-v2` (384-dimensional vectors) and stored in a **SQLite** database with an **HNSW vector index** for similarity search.

Storage is optimized:
- Max memories per actor: `1000`
- Min importance to store: `0.2`
- Async memory generation: 10 threads × 100 batch size

---

## 🧠 Memory Retrieval

When an NPC needs to recall, SkyrimNet uses:

### 🔎 Semantic Vector Search
- Uses HNSW + cosine similarity
- Embedding model: `MiniLM-L6-v2`

### 🧮 Relevance Scoring Weights
Each candidate memory is scored with the following weights:

| Signal                | Weight |
|-----------------------|--------|
| Semantic similarity   | 0.35   |
| Temporal proximity    | 0.20   |
| Actor involvement     | 0.20   |
| Emotional match       | 0.10   |
| Keyword relevance     | 0.10   |
| Location match        | 0.05   |

Memories are ranked by score, and only those passing thresholds are considered relevant. You can change those in the settings, but for instance, raising the minimum relevance score would mean that the memories are still stored but npcs wont remember the very mundane events. 

By default there are five memories that are retrieved ( changeable from 1 to 10), ranked by importance and relevance to the ocasion.

---

## 🧪 Memory Types

- `EXPERIENCE`: General lived moments
- `RELATIONSHIP`: Interpersonal dynamics
- `KNOWLEDGE`: Learning or realization
- `LOCATION`: Place-linked impressions
- `SKILL`: Practice or improvement
- `TRAUMA`: Fearful or harmful events
- `JOY`: Happiness, pride, or relief

---

## 🔥 Use Cases

- **Dynamic Dialogue**: NPCs reference past conversations, betrayals, or help.
- **Behavioral Logic**: Memory of fear or violence can make NPCs hostile or cautious.
- **Relationship Tracking**: NPCs track favor, betrayal, romance, or tension.
- **Emergent AI**: The world remembers what you do — and reacts accordingly.

---

## 🛠 Technical Stack

- **Embedding Model**: `MiniLM-L6-v2`
- **Vector Store**: SQLite + HNSW (Ef=200, M=16)
- **Prompt Templates**: Editable `.inja` files for each memory type
- **Memory Processing**: Fully in-DLL, async-safe, mod-editable
- **Interaction**: Via Custom Actions, YAML logic, and LLM context queries

---

## 🧰 Related Tools

- `Memory Creator`: Generates full first-person narrative memories.
- `Memory Ranker`: Scores and selects relevant memories for LLM prompts.
- `Event Analyzer`: Filters raw event streams for memory-worthiness.
- `Custom Action Designer`: Hooks behavior to memory conditions.

---

## 📦 Example Memory

```json
{
  "content": "I still remember watching the prisoner bleed out that Thalmor agent at Northwatch Keep. I wasn’t ready for how fast it happened.",
  "location": "Northwatch Keep",
  "emotion": "surprised",
  "importance_score": 0.85,
  "tags": ["prisoner", "thalmor", "northwatch", "murder", "fear", "stealth", "betrayal"],
  "type": "TRAUMA"
}

``` 

## 🧩 Integration

SkyrimNet can feed these memories into:

- **NPC Dialogue Generation**  
  NPCs can reference specific events, locations, or past interactions dynamically.

- **Relationship Decay or Growth**  
  Memories influence long-term emotional state and trust toward other actors, including the player.

- **LLM-Driven Decision-Making**  
  When NPCs choose actions, they can consult recent or emotionally weighted memories to guide their response.

- **Arousal / Reactivity Systems**  
  High-importance or traumatic memories can affect NPC alertness, combat stance, or dialogue tone.

It also supports:

- **Contextual Memory Chaining** – linking memories in dialogue or planning.
- **Emotional Triggers** – activating responses when a memory matches the current mood or situation.
- **Filtered Recall** – using YAML or Papyrus-based logic to determine which memories are relevant to the current AI context.