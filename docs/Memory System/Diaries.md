---
id: diaries
title: Diaries
displayed_sidebar: tutorialSidebar
---

# Diaries


<p align="center">
  <img src="/SkyrimNet-GamePlugin/img/diary.png" alt="vast" width="450"/>
</p>



#  Diary System — SkyrimNet Diary Feature

The **Diary System** allows the Player and NPCs to **write personal diary entries** with a manual generation, based on in-game events, emotional states, and memories.  
Each entry is **generated dynamically** using LLM templating, rendered beautifully in the **web UI**, and can be **read aloud** using the NPC’s own voice via TTS.
It is a large and deeply introspective summary of recents events, a way to peer into the character inner thoughts and a powerful aid for the LLM to better roleplay such character.

---

## 🧩 Core Components

### **1. Prompt Generation**
The diary system builds a structured LLM prompt that includes:
- The NPC’s name, background, and current emotional state  
- The most recent diary entry for narrative continuity  
- Recent **memories** (with timestamps and importance values)  
- Recent **in-game events** (using the event history template)  
- A detailed set of **writing and style guidelines** for authentic diary generation  

---

### **2. Memory Integration**
Each diary entry is automatically:
- Stored as a **personal memory** in SkyrimNet’s memory system  
- Tagged with emotional and importance metadata for recall weighting  
- Used by NPCs to influence dialogue, decisions, and emotional context in future interactions  

This makes each diary entry not just writing — but a **cognitive artifact** the NPC can later remember and reference.

---

### **3. Web UI Presentation**
The diary entries are displayed in the **Diary Viewer** page:
- Clean layout with entry metadata (location, date, emotion, importance)  
- Markdown-rendered text for immersive, journal-like presentation  
- Navigation between past entries (previous/next day)  
- Quick action buttons:
  - **🪄 Generate New Entry** — create a new diary entry based on recent events  
  - **🗣️ Voice** — play the NPC’s TTS narration of the entry  
  - **✏️ Edit** — modify the entry manually  
  - **🗑️ Delete** — remove the entry  

---

### **4. TTS Voice Narration**
Each diary entry can be **read aloud** using the NPC’s authentic voice:
- Uses the currently chosen TTS with the NPC’s voice 
- Emotionally adaptive playback based on the diary’s tone (`emotion` field)  
- Markdown text is preprocessed before narration for smooth speech  
- Optionally cached for re-listening or continuous playback  

This transforms the diary into a **living, voiced memory system**, where the player can *hear* the NPC’s inner thoughts in their own voice.

---
