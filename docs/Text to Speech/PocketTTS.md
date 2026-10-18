---
id: pocket
title: PocketTTS
displayed_sidebar: tutorialSidebar
---

# Pocket TTS (Kyutai)

<p align="center">
  <img src="/SkyrimNet-GamePlugin/img/pocket.png" alt="XTTS" width="400"/>
</p>


## Overview
Pocket TTS is a lightweight, CPU-first text-to-speech system developed by Kyutai. It is designed for low-latency, real-time speech synthesis without requiring GPUs or external APIs, making it highly suitable for local, embedded, and modded environments like SkyrimNet.

Unlike cloud-based TTS solutions, Pocket TTS runs entirely locally, offering strong privacy guarantees and minimal setup overhead.

---

Pocket TTS is one of the most practical modern TTS solutions for SkyrimNet:

- Runs locally on CPU  
- Streams audio in real-time  
- Supports voice cloning  
- Easy to integrate  

It trades a bit of raw quality for speed, simplicity, and full offline capability

## Key Features

- **CPU-Only Inference**
  - Runs efficiently on standard CPUs (no GPU required)
  - Uses ~2 CPU cores for real-time synthesis  

- **Low Latency Streaming**
  - ~200ms to first audio chunk  
  - Supports incremental audio generation (streaming pipeline)

- **Fast Execution**
  - Up to ~6× real-time speed on modern CPUs  

- **Small Model Size**
  - ~100M parameters (extremely compact for TTS)  

- **Voice Cloning**
  - Can replicate voices from short audio samples  

- **Multi-language Support**
  - English, French, German, Portuguese, Italian, Spanish  

- **Unlimited Input Length**
  - Handles arbitrarily long text inputs without chunking constraints  

- **Multiple Interfaces**
  - Python API
  - CLI tool
  - Optional web server (FastAPI)

---


---

## Strengths for SkyrimNet

### Fully Local Execution
- No external API calls (ideal for offline mods)
- Avoids latency, cost, and privacy concerns

### Real-Time NPC Dialogue
- Streaming output fits naturally with:
  - Dialogue systems
  - Interruptible speech
  - Reactive AI conversations

### Lightweight Integration
- Simple install (just enable it on Easy settings)


### Voice Personalization
- Voice cloning enables:
  - NPC-specific voices
  - Dynamic voice generation per character

---

## Limitations

- **Quality vs Size Tradeoff**
  - Smaller model than SOTA cloud TTS (slightly less natural in some cases)

- **Python-Centric**
  - Requires bridging for C++ (Skyrim native integration)

- **Voice Dataset Constraints**
  - Voice cloning quality depends on input sample quality

- **Ecosystem Maturity**
  - New project, fewer tools compared to established TTS stacks

---


## When to Use Pocket TTS in SkyrimNet

**Best fit:**
- Fully local AI setups
- Real-time NPC conversations
- Low-latency dialogue systems


**Less ideal:**
- Ultra-high-fidelity cinematic voice acting
- Complex emotional prosody (compared to large cloud models)

---

## Comparison Between TTS



| System          | Type                | Runs Local            | Latency         | Quality              | Voice Cloning | Resource Usage            | Best Use Case        |
| --------------- | ------------------- | --------------------- | --------------- | -------------------- | ------------- | ------------------------- | -------------------- |
| **Piper**       | Lightweight VITS    | ✅ CPU                 | ⚡ Extremely low | ❌ Basic              | ❌ No         | 🟢 Very low (runs on weak CPUs) | Fast NPC chatter     |
| **XTTS v2**     | Neural (Coqui)      | ✅ GPU                 | 🐢 High         | ✅ High               | ✅ Yes         | 🟡 Moderate (GPU required,aprox 3GB VRAM) | High-quality voices  |
| **Inworld TTS** | Large-scale AI      | ❌ (API / heavy local) | ⚡ Low–Medium    | 🧠 SOTA / expressive | ✅ Yes         | 🟢 None (but costs $)  External service | AAA dialogue systems |
| **Pocket TTS**  | Flow-based (Kyutai) | ✅ CPU                 | ⚡ Very low      | ✅ Good+              | ✅ Yes        | 🟡 Moderate (multi-core CPU)     | Real-time local AI   |