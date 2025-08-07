---
id: voicesamples
title: Voice Samples
displayed_sidebar: tutorialSidebar
---

#  Voice Samples System

The Voice Samples section, in the web ui , provides a fast and powerful interface to browse and manage voice data for any NPC in Skyrim. It is primarily used for voice cloning with Zonos TTS and, in the future, XTTS. This system supports rapid audio previewing and selection, enabling high-quality, consistent voice matching for dynamic AI-generated speech.

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

- **Voice cloning** for NPCs using Zonos or soon, XTTS  
- **Replacing poor-quality auto-selected voices**  
- **Previewing how an NPC’s voice will sound in generated scenes**  
- **Quick debugging or review of sound data per voice type**

---

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

## Future Support

XTTS integration is in progress. Once enabled, you’ll be able to:

- Clone NPC voices using neural TTS that closely mimics original delivery  
- Generate natural responses in the correct tone and accent  
- Blend seamlessly between recorded lines and AI dialogue  

This system is designed to make TTS feel indistinguishable from vanilla.

---

