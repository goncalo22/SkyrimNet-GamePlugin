---
title: SkyrimNet Beta8  Released
description: SkyrimNet Beta8
tags: [release, beta8]
---

🎉  SkyrimNet Beta 8 Latest
<!--truncate-->

This is a smaller update, scoped mostly to bugfixes, polish, and general quality of life improvements. 

### Tweaks @Daikichi,

- GameMaster will no longer initiate conversations while the player is in a dialogue menu. But ongoing conversations will continue to their end, and NPCs will still react to your input.,

- Audio can now play in parallel for multiple NPCs with Silent NPC TTS (DBVO), and at the same time as regular AI conversations (which still play in sequence),

- Made various improvements to the Diary / Memory TTS audio player,

- Diary and Memory TTS now downloads as a compressed mp3,

- Improved visibility of the variants dropdown in the OpenRouter config page,

- Added a download button for files in the Voice Samples page,

- Added Piper Config settings, and slowed its output down by 10%,

- Added entries to Piper's pronunciation dictionary to better handle pauses - I recommend you delete your Piper.yaml config file to get the new defaults,

- Restructured the Config page to improve organization, and ease of use.,

### Hotkey Manager Improvements @Min,

- Hotkey Manager now supports the use of numpad keys, and correctly differentiates them, allowing more potential keybinds.,

### Bugfixes @Daikichi,
- Fixed "voice type is nullptr" error introduced in beta 7,

- Fixed various causes of "invalid UTF-8 byte" errors,

- Display the IMPERIAL race as Imperial in prompts, to handle a vanilla Skyrim issue,

- Fixed custom voice sample upload for NPCs with dashes in their name,

- Fixed custom voice samples for voice types being looked for in the wrong folder,

- Fixed some causes of Diary and Memory TTS lines not being segmented properly,

- Fixed Access Violation that could occur when enabling quest stage updates, and other events that do not have an originator @Min