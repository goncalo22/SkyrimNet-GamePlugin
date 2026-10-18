---
id: inworld
title: Inworld
displayed_sidebar: tutorialSidebar
---





# Inworld TTS 

<p align="center">
  <img src="/SkyrimNet-GamePlugin/img/InworldTTS.png" alt="piper" width="400"/>
</p>



## Overview
**Inworld TTS** is a real-time text-to-speech system built by Inworld AI. 
Inworld is a paid TTS service, a mid-tier option a bit higher quality than XTTS, and much cheaper than ElevenLabs.
The service is credit-based with no subscription. As of March 2026, you get $2 credits for free when signing up.
Note that Inworld takes quite awhile to clone voices, 10-15 seconds per voice. The first time you speak to an npc with a new voice type the response will be delayed - it should be fast for subsequent generations.


Within SkyrimNet-style setups, it represents a **fully managed, cloud-based alternative** to local solutions like XTTS or Piper.

---

## Key Features

### 1. Real-Time Streaming
- Designed for **low latency**
- Supports **streaming audio output**
- Characters can begin speaking **before text generation finishes**

---

### 2. Character-Native Design
- Built to work with Inworld’s **AI character system**
- Speech is generated as part of a unified pipeline:
  - Dialogue → Emotion → Voice output

---

### 3. Fully Managed Cloud Service
- No local model setup required
- Hosted inference via API
- Handles:
  - Scaling
  - Optimization
  - Updates


---

## Model Variants

### Inworld TTS 1
- First-generation system
- Focus on:
  - Low latency
  - Stable real-time performance
- Pros:
  - Fast and reliable
  - Good conversational quality
- Cons:
  - Less expressive than newer models
  - More limited emotional range

---

### Inworld TTS 1.5
- Improved version with better **prosody and realism**
- Enhancements:
  - More natural pacing
  - Better emotional transitions
  - Improved voice consistency

---

### Inworld TTS 1.5 Max
- Highest-tier offering
- Focus on **maximum expressiveness and realism**

#### Improvements over 1.5:
- Richer emotional depth
- More nuanced delivery (pauses, emphasis, tone shifts)
- Better handling of:
  - Long-form dialogue
  - Complex conversational context

#### Trade-offs:
- Slightly higher latency than base models
- Higher cost (API usage)

---

## Integration Characteristics

### Typical Workflow
1. Send dialogue text (often with context/metadata)
2. Inworld processes:
   - Intent
   - Emotion
   - Character state
3. TTS generates **streamed audio output**

---

### Compared to SkyrimNet Local TTS
- No need for:
  - Voice sample management
  - Model hosting
  - GPU setup and vram usage
  

---


## Strengths

- ✔️ **Ultra-low latency streaming**
- ✔️ Strong **emotion and personality modeling**
- ✔️ No setup or hosting required
- ✔️ Consistent voice quality out of the box
- ✔️Cloning is automatic and can conserve voice fx effects, like echos and reverbs

---

## Limitations

- ❗ Requires **cloud connectivity**
- ❗ Ongoing **API cost** , though its cost is very affordable



## Quick Setup 

1. Sign up for an account on the [Inworld TTS](https://platform.inworld.ai/) website.
2. Click the API Keys link in the bottom left of the site and click Generate new key. Create it with Write permission.
3. In SkyrimNet's Test & Easy Setup page, set the TTS Backend dropdown to Inworld and hit save.
4. In SkyrimNet's Advanced Configuration page, go to NPC Voices -> Inworld TTS -> Connection and set **both** your Workspace ID and Basic (Base 64) keys from the API Keys page on Inworld's website. Save the changes.
5. Also in the Inworld TTS configuration page, you can change the TTS -> Model ID setting to `inworld-tts-1-max` for higher quality (and 2x the cost). Voice -> Enable Audio Tags can also add more emotional quality.

---

## Comparison (SkyrimNet Context)

| Feature            | Inworld TTS           | XTTS                     | Piper                  | Zonos                  |
|-------------------|----------------------|--------------------------|------------------------|------------------------|
| Speed             | Very fast (streaming)| Medium                   | Very fast              | Slow                   |
| Quality           | High (conversational)| Good                     | Lower                  | High                   |
| Emotion           | Native / automatic   | Limited                  | Minimal                | High (manual)          |
| Voice Cloning     | Yes, with effects    | Yes                      | No                     | Yes                    |
| Setup             | None (cloud)         | Moderate                 | Easy                   | Complex                |
| Offline Support   | No                   | Yes                      | Yes                    | Yes                    |

---

## Notes

- Best results are achieved when used with **Inworld’s full character system**
- Voice output is influenced by **AI state**, not just raw text input

---

### Overview
**Audio Tags** in Inworld TTS are inline annotations (e.g., `[whisper]`, `[laugh]`) that modify **how a line is spoken**, not what is said.

They allow you to inject **paralinguistic cues** directly into dialogue, influencing delivery such as tone, emotion, and non-verbal sounds.

---

### How They Work

- Tags are written inside square brackets, if enabled they will be created by the dialogue llm , being sent for the Inworld TTS.:


<p align="center">
  <img src="/SkyrimNet-GamePlugin/img/Inworld2.png" alt="piper" width="800"/>
</p>




---


## Bottom Line

Inworld TTS is a **real-time, character-aware speech system** that prioritizes:
- Emotion
- Responsiveness
- Conversational realism

It is ideal if you want:
- Plug-and-play setup
- Emotionally expressive NPCs
- Streaming dialogue with minimal latency
- No resource cost , since its an external service

