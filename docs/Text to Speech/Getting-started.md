---
id: tts-getting-started
title: Getting Started with TTS
displayed_sidebar: tutorialSidebar
---
### 🗣️ What is Text-to-Speech (TTS)?
Text-to-Speech (TTS) is a technology that converts written text into spoken voice. It allows computers to "speak" words out loud using synthetic or recorded voices. In the context of SkyrimNet, TTS is used to give NPCs the ability to talk dynamically — not just with pre-recorded lines, but with sentences generated on the fly by the AI.

### 🔧 How It Works
TTS works in two steps: first, the system breaks down the written sentence into sounds (called phonemes), and then it uses a voice model to produce speech audio from those sounds. SkyrimNet uses modern neural TTS systems (like XTTS or Zonos) to make the voices sound natural and emotional — as if a real person were speaking. These voices can be customized to sound robotic, dramatic, calm, or even imitate characters.

### 🎮 Why It Matters in SkyrimNet
With TTS, SkyrimNet can give life to AI-powered NPCs who speak new, personalized lines every time they interact with you. This means conversations are no longer limited to pre-written dialogue. NPCs can comment on your actions, remember past events, or express emotion — all in their own voice, without requiring voice actors or modding tools like Creation Kit.

# 🔊 SkyrimNet TTS Engine Comparison

SkyrimNet supports multiple TTS backends — each with unique strengths in quality, speed, and customization. Here's a side-by-side comparison of **Zonos**, **XTTS**, and **Piper**, so users can choose the best engine for their systems.

---


<p align="center">
  <img src="/SkyrimNet-GamePlugin/img/TTS1.PNG" alt="voicesamples" width="1200"/>
</p>







## ⚖️ Feature Comparison

| Feature                 | 🧠 Zonos                        | 🗣️ XTTS (Default)              | ⚡ Piper                         |
|-------------------------|---------------------------------|--------------------------------|----------------------------------|
| **Voice Quality**       | 🎙️ high, cinematic             | 🎧 good, expressive             | 🔉 acceptable, clean, lightweight  |
| **Voice Cloning**       | ✅ Yes, identity cloning         | ✅ Yes, from voice sample       | ❌ No cloning                    |
| **Emotional Control**   | 🟡 Planned                      | 🟡 Basic support (tone hints)   | ❌ None                          |
| **Accent/Language Support** | ✅ Wide                      | ✅ Cross-lingual                | 🟡 Limited                       |
| **Speed**               | ⚠️ Slower (heavier inference)   | ✅ Moderate (~1–2s latency)     | ⚡ Instant (~100–200ms)         |
| **Local Integration**   | 🌐 Local HTTP endpoint          | 🌐 Local HTTP endpoint          | 🧩 In-process (no server)        |
| **Output Format**       | WAV / PCM                         | WAV / PCM                      | PCM (16-bit mono, 22050Hz)      |
| **Best Use**            | followers/ high end system        | General dialogue, dynamic LLM  | Background NPCs, fast chatter   |

---

## 🔋 Resource Usage (Approximate)

| Engine  | CPU Usage   | vRAM Usage                     | Load Time   | Notes                            |
|---------|-------------|-------------|----------------  |------------------------------------------------|
| **Zonos** | 🔥 High      | 🔥 High (aprox 6GB)         | 🕒 ~1–3s   | Large models, best for key scenes |
| **XTTS**  | ⚠️ Moderate | ⚠️ Moderate (aprox 3GB )    | 🕒 ~1–2s   | Real-time feasible, very flexible |
| **Piper** | ✅ Low      | ✅ none (cpu only)          | ⚡ Instant | Fastest, most efficient TTS       |

> 🧪 *Note:* Resource usage depends on the hardware and specific model used. GPU acceleration improves both Zonos and XTTS significantly, its load times can reach instant on high end systems

---

## 🎯 Summary

| Engine   | Strengths                                                 | Tradeoffs                                  |
|----------|-----------------------------------------------------------|--------------------------------------------|
| **Zonos** | Cinematic quality, voice cloning, emotional nuance        | Slower, heavier; ideal for premium content |
| **XTTS**  | Great balance of quality, cloning, and speed              | Slight delay; ocasional voice drifts     |
| **Piper** | Extremely fast and lightweight for real-time interaction | No cloning or advanced voice features      |

---

## 🛠️ Choosing the Right Engine

| Scenario                                | Recommended Engine |
|----------------------------------------|--------------------|
| Voiced main quest with drama/emotion   | 🎙️ **Zonos**       |
| Companion with a personalized voice    | 🗣️ **XTTS**        |
| Fast ambient barks / guards / vendors  | ⚡ **Piper**        |
| Fully dynamic AI-driven conversations  | 🗣️ **XTTS**        |
| Low-end PC /  reduced available vram   | ⚡ **Piper**        |

---

## TL;DR

- **Zonos** = *Premium, cinematic, cloned voices with deep expression*
- **XTTS** = *Default engine with cloning and great all-around quality*
- **Piper** = *Fastest engine, perfect for lightweight real-time voice playback*

All three engines can eventually be mixed and matched per actor or event within SkyrimNet for optimal performance and immersion. (note: not currently as of beta4)

  [Player Dialogue](/Features/player-dialogue)       
