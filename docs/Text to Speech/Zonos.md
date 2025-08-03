---
id: zonos
title: Zonos
displayed_sidebar: tutorialSidebar
---

# Zonos TTS

<p align="center">
  <img src="/img/zonos.png" alt="zonos" width="400"/>
</p>

## 🗣️ High-Fidelity TTS for SkyrimNet

**Zonos** is a premium-quality, neural text-to-speech engine used in **SkyrimNet** to deliver some of the most **natural-sounding and emotionally rich voice lines** available in modded Skyrim. Designed for performance and realism, Zonos bridges the gap between handcrafted voice acting and fully dynamic AI speech.

While XTTS is the default TTS engine in SkyrimNet due to its balanced resource cost and speed, **Zonos is often used for key characters, dramatic scenes, or premium experiences where vocal detail matters most**.

---

## 💡 What Zonos Does

Zonos turns any block of text into **studio-quality synthetic speech**, preserving subtle vocal cues like:

- Breathing
- Pacing and rhythm
- Emotional inflection
- Accent and tone control

> **Input:** `"You have no idea what you're walking into."`  
>  
> **Output:** Rich, immersive audio that sounds like a trained voice actor delivered the line.

---

## 🧠 How Zonos Works in SkyrimNet

Zonos runs **as an external high-performance TTS service** that SkyrimNet connects to via an **HTTP endpoint**, similar to XTTS:

SkyrimNet sends:

- The text to speak
- Optional speaker profile or voice ID
- Emotion tags or indirect prompted performance hints (planned?)

And receives:

- High-fidelity audio (WAV or raw PCM)

This lets modders use **Zonos for NPCs or scenes that demand maximum vocal clarity and polish**.

---

## 🎧 Key Features of Zonos in SkyrimNet

- ✅ **High-resolution voice synthesis** (often 44.1kHz or higher)
- 🎙️ **Extremely natural delivery**, suitable for main questlines or voiced companions
- 🌐 **Language and accent support** (varies by model)
- 🎭 **Tone control** for emotion, intent, and personality
- 🧩 **Modular voice profiles** assignable to NPCs or events

---

## ⚔️ When to Use Zonos vs XTTS

| Feature             | Zonos (High-Fidelity)       | XTTS (Default Cloning)        |
|---------------------|-----------------------------|-------------------------------|
| Quality             | ✅✅✅ Studio-level           | ✅✅ Great                    |
| Voice Cloning       |  ✅ Full voice cloning       | ✅ Full voice cloning         |
| Emotional Range     | ✅ Smooth prosody & intonation | ✅ Good, expressive          |
| Speed               | ⚠️ Slower, higher resource use | ✅ Faster, local-ready        |
| Use Case            | Key NPCs, premium cutscenes | General dialogue, dynamic AI |

---
## 🗣️ Setting Up Zonos TTS Server for SkyrimNet (Windows)

> 🔧 This guide is for Windows users. You can also install Zonos on Linux or WSL by following the official instructions here:  
> 👉 https://github.com/Zyphra/Zonos

---

### 📦 Step 1: Download Zonos (Windows Fork)

1. Go to this Windows-compatible Zonos fork:  
   👉 https://github.com/langfod/Zonos

2. Click the green **Code** button → **Download ZIP**

3. **Unzip** the folder somewhere convenient (not inside `C:\Program Files` or `Documents`)

---

### 🐍 Step 2: Install Python and Winget

- 📥 Download and install **Python 3.12.10**:  
  https://www.python.org/ftp/python/3.12.10/python-3.12.10-amd64.exe

- ✅ Zonos also requires **Winget** (comes with Windows 11+).  
  If you get an error saying it's missing, follow this fix:  
  https://github.com/microsoft/winget-cli/discussions/1738#discussioncomment-1682664

---

### ⚙️ Step 3: Install Zonos

- Inside the unzipped folder, run:

1_Install.bat



- If you get a **Windows Defender security warning**, click **More info → Run anyway**

---

### ▶️ Step 4: Start Zonos Server

- Whenever you're ready to play Skyrim, run:

2_Start_Zonos.bat



- This launches the Zonos server at `http://localhost:7860`

---

### 🔧 Step 5: Configure SkyrimNet

In the **SkyrimNet Web UI**:

1. Go to `Test and Easy Setup`
2. Under **Text-to-Speech**, set:
 - **TTS Backend** → `Zonos`
 - **TTS Server URL** → `http://localhost:7860`  
   (or the IP address of the PC running Zonos)

---

✅ You're now ready to use Zonos for real-time TTS in SkyrimNet!

