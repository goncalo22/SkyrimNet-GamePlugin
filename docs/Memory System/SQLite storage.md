---
id: sqlite-storage
title: SQLite storage
displayed_sidebar: tutorialSidebar
---


# 🗄️ SkyrimNet Memory Storage System (SQLite-Based)

SkyrimNet uses a persistent, lightweight **SQLite database** to store NPC memories, enabling characters to remember events across sessions — even after saving, quitting, or rebooting the game.

---

## 🧱 What is SQLite?

**SQLite** is a fast, file-based database engine that stores structured data in a single `.db` file — no server required.

- ✅ **Zero configuration** — it runs in-process with your game or mod.
- ✅ **Cross-platform** — works on Windows, Linux, and Steam Deck.
- ✅ **Reliable and lightweight** — used by apps like Firefox, Discord, and Android.
- ✅ **SQL-compliant** — allows rich querying and filtering via standard SQL syntax.

In SkyrimNet, this means you get **permanent memory storage** that:
- Survives between game loads
- Supports fast search and recall
- Doesn't require external services or internet

---

## 🧠 Memory Table Structure

Each NPC memory is stored as a row in the `memories` table.

### Example Schema

```sql
CREATE TABLE memories (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  actor_uuid TEXT NOT NULL,
  memory_type TEXT,              -- EXPERIENCE, RELATIONSHIP, etc.
  content TEXT,                  -- Main narrative summary
  details TEXT,                  -- Optional longer description
  emotion TEXT,                  -- e.g., fearful, joyful, angry
  importance_score REAL,         -- Between 0.0 and 1.0
  location TEXT,                 -- Specific place (e.g., "Whiterun Market")
  tags TEXT,                     -- Serialized array (JSON or comma-separated)
  embedding BLOB,                -- 384-dimensional float vector (MiniLM-L6-v2)
  game_time INTEGER,            -- When this memory occurred
  timestamp INTEGER DEFAULT CURRENT_TIMESTAMP
); 

```

## 🧬 Embedding Storage

Each memory is embedded as a **384-dimensional vector** using **MiniLM-L6-v2**. This vector is stored in a `BLOB` field, enabling **fast similarity search** via a vector index (e.g., FAISS or HNSW).

This allows SkyrimNet to:

- Retrieve memories by **semantic similarity**
- Rank relevant memories for **behavior** or **dialogue**
- Perform **emotionally and contextually aware recall**

---

## 🔁 Writing & Updating

### Memory Creation:
After a memory segment is generated (via the LLM), it's written into the SQLite DB if:
- `importance_score >= 0.2`
- It passes internal relevance filters

### Memory Pruning:
- Each actor can store up to **1000 memories**
- Low-importance memories are purged first
- This is configurable in SkyrimNet's settings

### Memory Updates:
- Memories can be **edited post-generation** (e.g., emotion corrected)
- **Tags can be updated** dynamically to support evolving gameplay

---

## 🔍 Querying

SkyrimNet queries memory using **hybrid filtering**:

- **Vector similarity** (via the embedding)
- **SQL filters** (e.g., by actor, emotion, tag, or location)
- **Time-based filters** (e.g., “memories within the last day”)

This enables NPCs to recall things like:
- “What have I seen the Prisoner do in Whiterun?”
- “Have I ever felt fear around dragons?”
- “When did I last talk to Iggwilv?”

---

## ⚙️ Performance Notes

- **Thread-safe**: SQLite access is wrapped in safe async calls
- **Low overhead**: Indexing and embedding is lightweight (~1ms per memory)
- **Optimized for read-heavy workloads** — ideal for real-time recall during gameplay

---



---



SkyrimNet's memory system is a hybrid architecture involving vector-based semantic storage, keyword tagging, actor-event tracking, and SQLite-based persistence.

### 🔧 Storage

- **Embedding Model**: `MiniLM-L6-v2`
- **Vector Dimension**: `384`
- **Backend**: SQLite with HNSW vector index for fast approximate search
- **HNSW Parameters**:
  - `ef_construction`: `200`
  - `M`: `16`

---

### 📊 Retrieval Logic

Memory retrieval uses a weighted scoring function that considers:

| Weight Type           | Value   |
|-----------------------|---------|
| Semantic Similarity   | `0.35`  |
| Temporal Proximity    | `0.20`  |
| Actor Involvement     | `0.20`  |
| Emotional Resonance   | `0.10`  |
| Keyword Relevance     | `0.10`  |
| Location Proximity    | `0.05`  |

#### Retrieval Thresholds

- **Minimum Similarity Score**: `0.519999981`
- **Minimum Relevance Score**: `0.569999993`
- **Minimum Keyword Relevance**: `0.180000007`

---

### 🧠 Memory Generation

Memories are generated from in-game events segmented by time and density:

- **Max Time Gap Between Events**: `60` minutes
- **Min Segment Duration**: `10` minutes
- **Max Segment Duration**: `480` minutes
- **Min Events Per Segment**: `5`
- **Max Events Per Segment**: `200`
- **Min Importance to Store**: `0.2`

Each memory stores:

- **Actor UUID**
- **Memory Type** (e.g. `EXPERIENCE`, `FACT`, `DIALOGUE`)
- **Text Content**
- **Importance (0–1.0)**
- **Emotion Label**
- **Location**
- **Related Actors**
- **Related Event IDs**
- **Tags**

---


## 💡 Example Use Case

A vampire NPC sees a player feed on a bandit. SkyrimNet logs the event and builds a memory:

> "I saw the prisoner feed on a Wood Elf bandit under the moonlight. Their bloodlust awakened something... familiar."

This memory can now influence future dialogue, attitude, or AI behavior.

---
