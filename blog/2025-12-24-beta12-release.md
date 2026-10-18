---
title: SkyrimNet Beta12  Released
description: SkyrimNet Beta12
tags: [release, beta12]
---

🎉  SkyrimNet Beta 12 Latest
<!--truncate-->

# SkyrimNet Beta 12 Release 

# SkyrimNet Beta12 
This release focuses on polish and stability improvements, while enhancing existing systems like OmniSight with powerful new capabilities, and expanding and upgrading our TTS offerings through automatic cloning, tag support for emotions, and more. ElevenLabs v3 provides top-of-class TTS, though is expensive; for those willing to shell out for it, it provides a currently unbeatable experience for speed and quality.

## New Features

### OmniSight Items & Item Customization @Min

**Standalone Item Renderer** @Min
- New standalone 3D item renderer that can render any item model / nif to an image independently of what the player is looking at - no need to have the item on screen. This uses an independent rendering pipeline to capture accurate 3D models with textures
- Items are rendered from multiple angles based on item type (weapons get front/side/back views, shields get front/back, armor gets front/back, etc.)
- Gender-aware armor rendering - Armor can be captured with male or female model variants
- Known Limitation: This works with most mod added armor. We have bumped into a couple smp items that it doesn't capture correctly.

**OmniSight Item Capture** @Min
- Extended OmniSight to **optionally** capture and describe items using AI vision. The AI will now be aware of exactly how items look, rendered as they are seen in game. 
- This system is passive by default; It must be engaged with (or configured to function automatically, see below).
- By default, this system will capture all items that an actor is wearing when you capture them through omnisight. This is configurable. 
- You can additionally capture all items that actors are wearing, or any item you want through the game data explorer and omnisight pages.
- Multi-angle images from the renderer are sent to your configured vision model for description generation from different angles.
- Item descriptions are stored in the database and available through decorators and the OmniSight UI
- Works with weapons, armor, shields, books, potions, ingredients, soul gems, scrolls, keys, ammo, and misc items
- Content hash deduplication - Items with identical visual appearance (mesh + textures) share descriptions to avoid repeat LLM calls.
- Auto-capture support for items as they are equipped (disabled by default)
- Configurable denylist for excluding specific items

**Item Customization Refactor** @Min
- Refactored Item Customization to per-file storage. This allows users to share, or mod authors to publish item descriptions for their items in a portable, reusable fashion.
- Each item customization is now stored in its own YAML file in the items/ directory
- ESL-aware lookups using plugin name + normalized FormID for load-order independence
- Updated Item Customization page UI to work with the new file-based system

**Misc** @Min
- Additionally, all OmniSight prompts now support submodules, allowing for mods to extend the instructions for them.

### Audio Tags and ElevenLabs v3 support @Min
- Added audio tag support for TTS engines that support it (ElevenLabs, Inworld support is WIP)
- Audio tags like `[sighs]`, `[whispers]`, `[laughs]`, and various emotions can be included in dialogue for more expressive speech that the model will correctly convert into sounds. This allows for extremely expressionate dialogue from elevenlabs.
- New `is_audio_tags_enabled` decorator to check if audio tags are enabled for an actor's TTS engine
- Tags are stripped from subtitles, and are not persisted as part of dialogue history
- Prompts can conditionally include tags based on whether the actor's TTS engine supports them
- **Users must delete their ElevenLabs.yaml config file to update to the new defaults**

## Memory Segment Timer @Daikichi
- Removed the Memory Segment (Game Time) config settings.
- Now SkyrimNet uses its own playtime counter to segment memories and track events (time while the game is running and not paused).
- No need to adjust for game time scale anymore!
- This additionally works around a rare but impactful engine bug a small number of users were encountering where time would stop advancing, and thus events were not accounted prooperly.

### ElevenLabs Voice Cloning @Daikichi
- Added automatic voice cloning for ElevenLabs. No need to manually input a voice id anymore.
- ElevenLabs is now a first class TTS with full support like the others for use across all NPC's if desired.
- If an NPC's voice ID is already a valid ElevenLabs ID, it will be used without cloning (manual override)
- Note that cloning voices requires a paid subscription. The starter plan allows up to 10 voices, and more expensive plans allow for more.
https://github.com/user-attachments/assets/e1df5aab-372e-42a9-9efc-d2387df05d83"

### InWorld TTS Integration @Daikichi
- Added InWorld as a TTS provider option
- Voices are automatically cloned (note: first generation takes 10+ seconds for clone operation - Users can use the bulk generation feature from the voice sample page to bulk clone ahead of time as desired)
- If you want, you can use Daikichi's referral code WQ6AKRYL to support his work on this feature, and to get a free $10 credits for yourself.
- This is free for all of December if you want to check it out!

### Bulk Voice Cloning @Min
- Added new modal in the voice sampling UI for mass cloning voices to ElevenLabs/InWorld
<img width="350" alt="image" src="https://github.com/user-attachments/assets/6dd27e42-d513-4773-a89c-d89200f02d05" />

### New Decorators

**TTS & Audio** @Min
- `get_actor_tts(actorUUID)` - Get the TTS engine that will be used for a specific actor (accounts for all overrides)
- `get_narrator_uuid()` - Get the UUID of the narrator virtual entity
- `is_audio_tags_enabled(actorUUID)` - Check if audio tags are enabled for an actor's TTS engine
- `is_action_enabled(actionName)` - Check if an action is available for use in prompts

**OmniSight Items** @Min
- `get_item_description_for_wearer(formId, actorUUID)` - Gets the OmniSight description for an item based on the wearer's gender
- `has_item_description_for_wearer(formId, actorUUID)` - Checks if an OmniSight description exists for an item

**Item Customization** @Min
- `get_item_name(formId)` - Get effective name for an item (custom name > AI-suggested name > original name)
- `get_item_description(formId)` - Get description for an item (custom description > OmniSight AI-generated)
- `is_item_enabled(formId)` - Check if an item is enabled in the customization system
- `get_item_customization(formId)` - Get complete customization information for an item

**Actor Properties**
- `isChild` - Check if an actor is a child @Vlrek
- `GetPossessiveAdjective` - Possessive adjectives (his/her/their) @Vlrek
- Fixed `GetPossessivePronoun` @Vlrek

**Other**
- Added playtime counter for use in memory prompts @Daikichi

### New MCP Tools @Min
- `render_item` - Render a 3D item model to an image and return it as base64 PNG. Supports single angle or multi-angle mode based on item type.
- `validate_item_customization` - Validate an item customization YAML configuration without loading it.
- Updated `get_items` - Now returns damage for weapons/ammo and armorRating for armor items.

## Improvements

### User Interface
- Upgraded text input to be larger and allow copy/paste. **Note: May conflict with other mods that overwrite this same file; Let ours win if you want the larger ui and copy/paste, otherwise it doesn't matter** @Ultus 
- Documentation sidebar is now a modal for better usability @Vlrek
- Fixed toolbar buttons being partially hidden in "Split" mode for profile editor @Vlrek
- Added example values to decorator documentation @Vlrek
- Added "Debug NIF" button to OmniSight item capture for troubleshooting @Min
- Added hover tooltip to show hidden voices in bulk clone preview @Min

### Performance & Stability
- Resolved crash for VR user around active magic effects @Min
- General active effect retrieval performance improvements for both VR and flatrim @Min
- Fixed PapyrusUtilBridge crash / SEH errors @Lemonade
- Reduced logging noise in continuous mode @Daikichi
- Sanitized image payloads from logs to reduce log size @Daikichi
- Piper TTS internal refactor - improved phonemizer integration @langfod
- CommonLibSSE-NG updated to latest version @langfod

### Prompts & AI Behavior @Min
- Player thoughts prompt now follows player-provided input better
- Actors are now more aware of vitals in combat
- Body slot removed from equipment descriptions
- Equipment descriptions now use omnisight provided values if available.

### Package System @Lemonade
- SkyrimNet packages are now more durable and recover from being purged by OStim scenes

## Bug Fixes @Min
- Fixed crash from UI menu checks that could be triggered by mods like QuickLoot
- Fixed death event killer attribution incorrectly crediting the player for follower kills
- Fixed death events being double-counted (TESDeathEvent fires twice per death)
- Fixed word-merging bug and first-character drop in streaming TTS responses
- Fixed actors / mannequins with empty names causing issues in GameMaster target selection
- Fixed PapyrusUtil issue @Lemonade

## Whisper Mode Tweaks @Min
- Various QoL improvements to make it harder to forget that you're in whisper mode.
- Default hotkey is now unbound
- Current whisper status is now shown on the dashboard
- Mode is disabled when loading a save or starting a new game

## Configuration Default Changes @Min

### Events @Min
- Short-lived events disabled for `continue_narration` by default
- Sleep Start event is now persistent by default

### OmniSight @Min
- Added config for blacklisting items from OmniSight
- Auto-capture on equip available but disabled by default

### Memory
- Deprecated the Memory Segment (Game Time) config settings - SkyrimNet now uses its own playtime counter to segment memories @Daikichi

