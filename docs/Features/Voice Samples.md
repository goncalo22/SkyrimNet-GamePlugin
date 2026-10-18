---
id: voicesamples
title: Voice Samples
displayed_sidebar: tutorialSidebar
---

#  Voice Samples System

<p align="center">
  <img src="/SkyrimNet-GamePlugin/img/voicesamples.png" alt="voicesamples" width="500"/>
</p>

The Voice Samples section, in the web ui , provides a fast and powerful interface to browse and manage voice data for any NPC in Skyrim. It is primarily used for the voice cloning capable TTS ( that are integrated with SkyrimNet. This system supports rapid audio browsing, previewing and selection.

---

## Overview

The page lists all available **voice types**, sorted by plugin (e.g., `Skyrim.esm`, `Dawnguard.esm`, etc.). When you select a voice type, you’ll see a list of all detected **voice samples** associated with it.

Each sample includes:
- The in-game audio file path
- Estimated duration
- Transcribed dialogue (if available)
- Buttons to:
  - ▶️ **Play** the vanilla voice line
  - 🧪 **Test TTS** output using Zonos
  - 🎯 **Select** the sample for use in voice cloning

This makes it easy to evaluate sample quality and assign the most appropriate voice reference for any character.

---

## Use Cases

- **Voice cloning** for NPCs using  XTTS, PocketTTS, Zonos and other SN integrated TTS  
- **Replacing poor-quality auto-selected voices**  
- **Previewing how an NPC’s voice will sound in generated scenes**  
- **Quick debugging or review of sound data per voice type**

---

<p align="center">
  <img src="/SkyrimNet-GamePlugin/img/voice.png" alt="voicesamples" width="1200"/>
</p>

## How Voice Samples Are Collected

Only certain types of audio are scanned:

- ✅ Samples are gathered from **dialogue lines spoken during normal conversation** with the player.
- ❌ Lines from **scripted scenes**, **quest cinematics**, or **combat shouts** are **not scanned**.
- 🧩 For performance reasons, only dialogue from the **same plugin** that defines the voice type is scanned. For example, a voice type in `Skyrim.esm` will not scan lines added by `InterestingNPCs.esp`.

This keeps scans lightweight and prevents unexpected mismatches from unrelated mods.

---

## Mod Replacers and Compatibility

If you override an NPC's voice through a **modded audio replacer**, SkyrimNet will automatically use the replacer audio during scans.

> For example, if you install a mod that replaces Cicero’s voice with a female variant, the voice samples for Cicero will reflect her voice.

This allows you to fully support voice overhaul mods while preserving dynamic AI voice behavior.

---

## Fallback Behavior

The system no longer requires you to manually **talk to an NPC** to gather voice samples. However, if **no voice lines** are detected during a scan (e.g., rare NPCs or voiceless custom ones), the fallback system will activate:

- You must speak to the NPC using the **vanilla dialogue interface**
- The first line they speak will be captured and used as the voice sample

This ensures all NPCs, even obscure ones, can eventually receive a matching voice model — automatically or manually.

---



