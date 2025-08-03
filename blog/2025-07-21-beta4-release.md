---
title: SkyrimNet Beta4  Released
description: SkyrimNet Beta4
tags: [release, beta4]
---

🎉  SkyrimNet Beta 4 Latest
<!--truncate-->



### Major new feature: 
- Now supports per-actor customizations (And per-group). Groups are sets of config overrides that you can apply to multiple actors (Ex, "High quality" for followers, etc) to avoid having to maintain the same settings in more than one place. I'll likely expand the "group" feature to allow automatic application to factions, races, genders, etc at a later point.

- The config system itself supports overriding any config value from any config file anywhere (Assuming that the config value makes sense within a per-actor context), but I need to explicitly enable support the field being overridable like this. Let me know what areas you folks think would benefit the most from being wired up. In the initial implementation, I support overriding the voice id, and openrouter settings, as those seem to be the two highest ROI. It's relatively easy to add more from here, though supporting multiple different TTS engines simultaneously is not currently possible. I'll fix this at a later point.

### New Feature: 
Added a dictionary for changing the pronunciation of words pronounced by the TTS (Khajiit -> Kajeet, etc). If you notice any words that are consistently being misread by TTS and you think it should be part of the default dictionary, let us know in #beta-feedback!

 - Elbios' vastAI images are the new default images for smart create. These images are improvements over the existing ones which feature the ability to run both Whisper and (XTTS or Zonos) out of the same image.

 - Added support for sending keep-alive messages to prevent the new images from tearing themselves down. Elbios' images are configured to automatically shut down after one hour of inactivity to prevent users from forgetting about them and running up a bill.

 - Expanded smart create logic for VastAI - It will now create N instances (default: 5), and then tear down all but the first one to successfully come up and be ready to serve traffic. This should result in much more reliable instance creation, and result in the user ending up with better/faster images more often than before.

 - Added new presets for VastAI creation - Can now switch between XTTS and Zonos image presets in the VastAI page.

 - Added button for quick-setting STT (External Whisper) to the VastAI instance.

 - Fixed prompt issue causing actors to fixate on their weapon (Hand goes to dagger narrate spam).

 - Line of Sight requirement for events is now ignored during combat.

 - Assorted prompt tweaks and fixes.