---
title: SkyrimNet Beta6  Released
description: SkyrimNet Beta6
tags: [release, beta6]
---

🎉  SkyrimNet Beta 6 Latest
<!--truncate-->


# SkyrimNet Beta6 — Full Changelog

### Summary
This release is mostly focused on bugfixes, quality of life improvements, and several cool new features such as model rotation, automatic voiced player vanilla dialogue through DBVO, XTTS voice cloning, and a new whisper mode.

### XTTS Voice cloning @Elbios 

Now XTTS has automatic voice cloning just like Zonos or our other Gradios TTS with the same mechanism.
When running XTTS locally, requires updated xtts-api-server available here
When using vast AI, no action is needed
Comes with an option to turn automatic voice cloning off.
Model Rotation @mikastamm
New model rotation feature, that changes the dialogue model after each generation.

In the model name field, you can now have multiple models, seperated by commas. After each converation turn, it will switch models to the next in the list. This only works for the ‘Default’ (Conversation) model type

This can make the NPCs responses more varied or keep weaker models on-track by having a smarter model respond every once in a while.

Try mixing in a stronger model once in a while to keep the conversation interesting.

**Example:**
```
"openrouter/sonoma-dusk-alpha, anthropic/claude-3.7-sonnet, anthropic/claude-3.7-sonnet"
```

### Api Extensions @mikastamm @MinLL
The following papyrus functions were added to the api:



```
; Change values of SkyrimNets config
; - name: The name of the configuration section to modify (eg. game, Memory)
; - jsonPatch: The partial json, containg only the values to apply to the config. Must match the structure of the yaml file of the configuration section
bool function PatchConfig(String name, String jsonPatch) Global Native

; Makes the specified actor run the specified action. Arguments can be supplied as a json string. Runs the action irrespective of cooldowns or eligibility.
int function ExecuteAction(string actionName, Actor akOriginator, string argsJson) global native

; Sets the cooldown for the specified action
int function SetActionCooldown(string actionName, int cooldownTimeSeconds) global native

; Gets the remaining cooldown time for the specified action in seconds. Returns -1 if no cooldown is set.
int function GetRemainingCooldown(string actionName) global native

; Utility functions to set configuration values
; - name: The name of the configuration section to modify. Options:
;       game, OpenRouter, XTTS, Zonos, Piper, STT, ActorFilter, Phonetic, Hotkey, furniture, PlayerDialogue, VirtualEntities, Entity, Memory, ItemCustomization, Actions, DynamicBio, Events, VastAI, WebServer, VoiceSamples, SpellCustomization
; - jsonPath: The partial json, of the values to apply to the config
bool function PatchConfig(String name, String jsonPatch) Global Native

; Makes the specified actor run the specified action. Arguments can be supplied as a json string. Runs the action irrespective of cooldowns or eligibility.
int function ExecuteAction(string actionName, Actor akOriginator, string argsJson) global native

; Sets the cooldown for the specified action
int function SetActionCooldown(string actionName, int cooldownTimeSeconds) global native

; Gets the remaining cooldown time for the specified action in seconds. Returns -1 if no cooldown is set.
int function GetRemainingCooldown(string actionName) global native

; - Toggles interaction.maxDistance between interaction.whisperMaxDistance and interaction.normalMaxDistance
; - Shows notification with current state (Whisper mode: ON/OFF)
; Functions identically to pressing the configured whisper toggle key
int function TriggerToggleWhisperMode() Global Native

``` 

- Add two missing actions to VRIK @mikastamm
- Add a simple List Menu to change some commonly toggled configs from in-game (Still needs a spell to open it, but it works) @mikastamm
- Added a new is_player decorator for prompt usage. Example: is_player(npc.UUID). This will return true if the actor is the player. @MinLL

### Player-Voiced Vanilla Dialogue (Dragonborn Voice Over Integration) @Dekana

SkyrimNet now supports voicing the player's vanilla dialogue lines with TTS.
To enable this feature, download Dragonborn Voice Over but disable or delete its DBVO.esp file (no voice pack is needed).
SkyrimNet will capture the dialogue event from DBVO and send it to TTS, rather than using a static voice pack.
You can adjust the delay before an NPC responds to your dialogue selection in Advanced Configuration -> game -> Player-Voiced Vanilla Dialogue (DBVO).
If the DBVO.esp file is active, then this feature will be disabled.

### New Feature: Whisper Mode @MinLL

- Players can now toggle between two configureable "max interaction ranges". 
This setting limits the range at which actors will perceive events. You can configure the radius via the game config.
Useful if you want to have a more private conversation without nosy folks interrupting.
More coming in this particular area soon.

### Tweaks @MinLL

- Actor / Memory Whitelists will now bypass "Is capable of speech" filter. @MinLL
- Actor skills are now exposed in the return value from decnpc in templates. Ex. decnpc(npc.UUID).onehanded @MinLL
- Added memory generation filter, allowing you to control which actor's generate memories.
- Newly registered event schemas are now enabled by default @MinLL
- Added new SkyrimNet factions to actor filter by default. No flow is published at present for easily adding/removing things to these outside of the console, but this will let us later set up a flow to allow users to - easily allowlist/denylist NPC's. @vrelk

### Bugfixes

- Sanitized TTS input to avoid weird audio glitches with unicode characters and symbols @MinLL
- Added output sanitization to handle some Chinese models sending excessive newlines in their output. @MinLL
- Fixed utf8 sanitization issue with template input. @MinLL
- Fixed triggers not working for short lived events registered from Papyrus @MinLL
- Add missing npc from 3DNPC mod @mikastamm
- Adds prompt for the follower Koemia @mikastamm
- Fix typo in action selection prompt @Dekana
- Fix misnamed prompt file for the character Silvia @Dekana
- Add instructions in the github readme and the TTS test page to install piper models @Dekana
- Change cuda link to archived 12.9 in the github readme @Dekana
- Remove "emotions" key from zonos default settings so that SkyrimNet's custom mood values will be used @Dekana
- Fix error spam for disembodied speakers (eg. Augur of Dunlain and Hermeus Mora) @Dekana
- Better Error message if a user has not downloaded the Piper models and tries to run it @Dekana
- Fix inability to add new event entries to the player response configuration @Dekana
- Fix STT sometimes rejecting short voice inputs @mikastamm
- Added an extra option Max Interaction Distance : Governs at which distance from the player the audio cuts out. Useful for when followers are not as fast as you and still speaking while you run away @mikastamm
- Make dialogue transformation available in VRIK @mikastamm