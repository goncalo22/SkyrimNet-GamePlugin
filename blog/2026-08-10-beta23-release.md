---
title: SkyrimNet Beta23  Released
description: SkyrimNet Beta23
tags: [release, beta23]
---

🎉  SkyrimNet Beta 23 Latest
<!--truncate-->

# SkyrimNet Beta23 


## Native Audio Engine Integration @Zevick

SkyrimNet speech, bard performances, and virtual entities now play through Skyrim's own audio engine instead of a separate audio device the game knew nothing about. Voices pick up the game's spatial audio, acoustic spaces, occlusion and ducking for free, so an NPC talking to you in a dungeon now carries the same reverb as vanilla dialogue. It's on by default; you can turn it off at the top of Settings > Audio & Voice > Audio. **This is particularly impactful for VR players**

**Three new sliders in Skyrim's own Audio settings.** Each is its own sound category parented to Master, so they're independent of each other and of vanilla's voice mix.

- **SkyrimNet Voice** — NPC and player speech
- **SkyrimNet Bards** — AI-generated bard songs
- **SkyrimNet Virtual Speakers** — narrator and virtual entities

## Higgs Audio v3 @lemonade8339

A new TTS engine option, set up in the Voice/TTS section of the web UI.

Emotion, style and prosody tags now carry across sentences instead of resetting every segment, so a line that starts angry stays angry — and *narration is skipped*, so stage directions don't inherit the speaking tone. Tags work in either form:

```
[emotion-angry]
<|emotion:angry|>
```

Additionally, Ellipses reach the engine intact as real pauses. XTTS still collapses them, since feeding it `...` made it stutter.

## Sealed Rooms Line of Sight @Min 

Several fixes to stop line of sight clipping through walls and floors in sealed rooms, so NPCs are less likely to eavesdrop upon things they shouldn't be able to hear or see. Structural geometry now blocks correctly at the ray origin. Note: This should help prevent NPC's from eavesdropping on you in closed rooms. There is still work to be done in this space to improve game-master response target selection, but this should materially improve things.

## Quest System Fixes

- **Quest journal context is back** — NPC awareness of your tracked quests and journal entries was disabled in Beta22.1 pending a crash fix. The quest tracking layer has been rewritten underneath (a performance change, otherwise invisible) and the quest journal prompts are restored. If NPC quest awareness acts differently than before, report it. @Dowser  on the rewrite, @PhospheneOverdirve  on the prompt restore, @Min on stability improvements and fixes.

## Provider & Connectivity Fixes

- **OpenRouter sorting leaked into other providers** — `provider.sort` was written into every request body regardless of endpoint, so NVIDIA NIM and other OpenAI-compatible providers received an unknown `provider` object and rejected the request outright. Sorting is now scoped to the OpenRouter endpoint and resolves against the active rotation slot instead of falling back to the global value. @Zevick
- **External Whisper no longer demands an API key for self-hosted servers** — If your STT endpoint isn't OpenAI (e.g. whisper.cpp on a Vast.ai box), the API key field can be left empty; the auth header is only sent when a key is actually set. @Elbios
- **vast.ai instances and invoices failed** — Those two endpoints moved to `/api/v1` while the rest of the API stayed on `/api/v0`. @Elbios
- **Chatterbox voice sample bitrate is now configurable** — 8–48 kHz instead of hardcoded at 16. @Dowser 

## Assorted Bug Fixes

- **Action eligibility stuck on stale values** — Checking whether an action was eligible refreshed the cache's 10-second expiration timer, so anything checked frequently never expired and could stay (in)eligible long after conditions changed. Cache hits no longer reset the timer. @lemonade8339


## SkyrimNet Beta23.1 @everyone 

Small hotfix release addressing several issues with Beta 23:
- Fixed a compatibility issue that was causing a CTD for players on version 1.6.640 of Skyrim.
- Fixed a compatibility issue with Vast's v1 API that was preventing some operations from succeeding for users of Vast.AI

https://github.com/MinLL/SkyrimNet-GamePlugin/releases/tag/vbeta23.1-rc2