---
title: SkyrimNet Beta11  Released
description: SkyrimNet Beta11
tags: [release, beta11]
---

🎉  SkyrimNet Beta 11 Latest
<!--truncate-->

# SkyrimNet Beta 11 Release 

# SkyrimNet Beta11

Beta11 focuses on bugfixes, quality of life features, polish, and roleplay quality. Core systems like line of sight, continuous mode, and the Game Master have been overhauled, and prompts have been refactored to improve output quality and reduce token overhead. Template authors get new tools for reading mod data and tracking entity state, with new bridges for PapyrusUtil and MinAI expanding mod compatibility.

**Diary/Bio Generation Hotkey**
- New Hotkey - Diary/Bio Generation @Min
- Supported in native DLL + Papyrus hotkeys. Press it.
- Select either nearby, pinned actors, player, or target in crosshair.
- Observe that dynamic bio and diary are generated for that actor.

**Line of Sight Overhaul**
- Overhauled Line of Sight @Min
- Fixed the poorly performing line of sight algorithm. It had a few bugs / issues preventing it from working correctly. 
- We should now accurately and quickly detect obstacles between actors. It should not be possible for people to hear you through walls, doors, or floors anymore.
- We had issues with furniture obstructing LoS previously as well that should now be resolved.
- Line of Sight is disabled while in combat, allowing you to banter with enemies, followers, etc inbetween rooms during combat.

**PapyrusUtil Integration**
- PapyrusUtil Integratio. @lemonade 
- A native C++ bridge now provides direct memory access to PapyrusUtil's StorageUtil data—bypassing Papyrus scripts entirely. 
- Templates can now read mod-stored data instantly via the papyrus_util decorator without Papyrus overhead. Supports AE, SE, GOG, and VR versions of PapyrusUtil (hopefully). Please report if you have issues with this. 
- This should enable very easy and powerful mod integrations with anything storing data through StorageUtil.
- Papyrus bridge will attempt to automatically detect offsets; should result in most versions of papyrusutil being supported @naitro2010

**Entity State Tracking**
- New Feature: Entity State Tracking @Min
- Added functionality to allow templates to set persistent values that are automatically pruned after expiration. I'm using this at present in a new prompt to detect sudden, sharp drops in key stats like health, magicka, etc since the last time the prompt executed. 
- track_entity_state(entityUUID, key, newValue, [timeWindowSeconds=60]): Atomically get previous value and set new one; returns object with current, previous, changed, isRecent, secondsSinceUpdate. Only updates stored value when it actually changes.
- set_entity_state(entityUUID, key, value): Store any JSON-compatible value for an entity. Returns true on success.
- get_entity_state(entityUUID, key, [defaultValue]): Retrieve a stored value. Returns null or defaultValue if not found.
- has_entity_state(entityUUID, key): Check if a key exists for an entity. Returns boolean.
- is_state_recent(entityUUID, key, windowSeconds): Check if stored value was updated within the time window. Returns boolean.
- clear_entity_state(entityUUID, [key]): Clear state for an entity. If key provided, clears only that key; otherwise clears all state for the entity.

**Continuous Mode / Game Master Overhaul**
- Updated Feature: Continuous Mode / Game Master @Min
- Started on some work to extend the game master.  Overhauled continuous mode, now works differently. Continuous mode is intended to be toggled on to have a continuous scene play out, and not be left on during general play.
- Instead of continuous mode functioning strictly as a toggle to lower the cooldown, this changes behavior to automatically invoke the GM when the dialogue queue is nearly drained. Continuous mode / "scene" cohesion seems improved quite a bit.
- Important! This does still enforce a lower lull detection timer (new default: 30 seconds), defaults updated. Change your continuous mode (lull) cooldown to 30 seconds, old default of 6 seconds will work poorly with this
- GM timer will not countdown when game is paused
- Added two new GM actions:
- ContinueDialogue - Continues an ongoing dialogue scene. This may have a small context leak problem, still playing with this.
- Narrate - Allows the GM to trigger arbitrary narrations to advance the scene. This part is still a bit WIP; Working well enough in testing that I wouldn't mind getting some more feedback on it. Can be disabled via action library if it results in the GM derailing your game too much. This only triggers when continuous mode is enabled.
- Continuous mode will briefly stop when the player is the target of the interaction to allow the player a chance to respond.
- I will be expanding on this considerably in the near future. Narrate in particular is a little bit "Proof of Concept" at present.

**Actor Dialogue Extractor**
- New Feature: Actor Dialogue Extractor @Min
- New tool that extracts dialogue trees directly from the game's data files, including branching conversations, script fragments, and scene data. Accessible via the new Actor Dialogue Explorer in the web UI under Game Data Explorer.
- This is mostly just ground-work for some upcoming very powerful feature work that requires this.

**AI Profile Generation**
- Updated Feature: AI Profile Generation @Min
- AI-generated character profiles now leverage extracted dialogue trees, giving NPCs more authentic personalities based on their actual in-game dialogue. Leveraging the above for this short-term. Have a lot more coming on this, later.
- This should result in greatly improved accuracy of ai generated profiles for mod-added npc's. I'll be adding some "Bulk" functionality to this in the future as well.

**Faction Based Overrides**
- New Feature: Faction based overrides @Min
- Group overrides can now be applied to actors based on their factions.
- Lot of useful stuff you can do with this (Change models while certain mods are animating, make all citizens of whiterun use a given model, make all bandits use piper, etc).

**MinAI Bridge**
- New Feature: MinAI Bridge @Min
- SkyrimNet will now process events from mods that had integrated with MinAI. Events that were intending to register events through minai will now register them through the appropriate persistent / short lived / direct narration api's. Effectively free integration for those mods.
- Tested on several installed mods, and worked well.

**Quick Toggles**
- Added Quick Toggles @Daikichi
- Added a button in the navbar to quickly switch off features that make automatic LLM calls, without needing to go in the config page
- Added a master SkyrimNet On/Off toggle as well
- Added a hotkey for the master toggle

**Embedded Actions**
- New feature: Embedded Actions @Min
- The action evaluation prompt can now be merged into the dialogue prompt via the enable embedded actions toggle (Currently false). I may make this default true in the future, currently evaluating how well it performs.  The intent behind this  is to allow the dialogue prompt which has intent to also control action, rather than having a second one guessing at it. This should allow for better autonomous use of actions without explicit request. Experimental at present, we'll have to see how it performs.  This will save tokens, but may bias weaker models into behaving differently with the presence of some mod added actions.
- Enable "Embedded Actions" in the config to try it out.

**Omnisight Nude/Dressed Variants**
- New Feature: Omnisight Nude/Dressed Variants @Min
- Omnisight can now provide different descriptions based on whether a character is clothed or not.

**Faction-Based Narrator Control**
- New Feature: Faction-Based Narrator Control @Min
- New config option to automatically disable the narrator when you're in specific factions. Great for turning off narration during animations from some mods, etc.

**Provider Sorting**
- New Feature: Provider sorting
- Users can now specify how they want to prioritize provider selection in the openrouter config (speed, cost, etc).  @MIKA

**New Decorators** 
- papyrus_util - Access PapyrusUtil StorageUtil data directly from memory (get/has int/float/string/form values and lists.) @lemonade
- read_json - Read and parse a JSON file from disk, optionally navigating to a specific path within i. @lemonade
- json_file_exists - Check if a JSON file exists at the specified pat. @lemonade
- to_string - Converts any value (number, boolean, null, etc.) to its string representatio. @lemonade
- formid_to_uuid - Convert a 32-bit FormID to a UUID for use with decnpc and other UUID-based function. @lemonade
- actor_has_keyword - Check if an actor has a specific keyword on their base form (e.g., ActorTypeNPC, ActorTypeUndead.) @lemonade
- replace(source, haystack, needle, case sensitive, only first) - Replace words within a string.  @Min
- New decnpc attributes: formId, keywords, weigh. @lemonade

**New MCP Tools** @Min
- get_decorators: returns documentation on all available decorators
- get_globals: Search available globals
- Added new MCP tools to get quest scripts, properties, etc. Using this to power automated action assistant creation through Cursor that I'm playing with locally. So far working decently. @Min
- Added get_monitored_events tool to view recent game events from the live event feed. Supports filtering by event type and animation events toggle. Event buffer now configurable, and you can view up to 5000 events when developer mode is active (500 default).
- Added validate_custom_action - Validates custom action YAML configurations without loading them. Catches syntax errors and missing fields.
- Added validate_custom_trigger - Validates custom trigger YAML configurations are syntactically valid without loading them.
- Added validate_prompt - Validates prompt template syntax (Inja) and catches template errors before runtime.

**New Papyrus API** @Min
- Added FindActorByName(string actorName) - Finds an actor by name among nearby actors (4000 unit radius). Case-insensitive matching. Useful for mods that need to resolve actor names to references.

**Game Data Explorer**
- Updated Feature: Game data Explorer @Min
- Added new page to game data explorer for viewing available globals.
- Added new page to game data explorer for viewing extracted dialogue trees (WIP)

**New Profiles**
- Added bios for Become High King of Skyrim @Min@ErenYegger

**WIP Mod Integration Workflows**
- WIP Mod Integration Workflows @Min
- Added 4 of the workflow prompts I've been using to the github repo: https://github.com/MinLL/SkyrimNet-GamePlugin/tree/main/docs/modding
- These should be leveraged from within your AI enabled editor of choice, with the source code for the mod you want to integrate with added to your workspace, as well as your skyrimnet / overwrite folders.
- You must have set up your editor to work with the SkyrimNet mcp server to leverage these.

**Tweaks**  @Min
- Iterated more on prompt tweaks, addressing feedback + my own observations. Tweaked narration behavior
- TalkToPlayer package no longer applies to (acutal skyrim) followers. There's an existing system to allow you to blacklist specific factions for nff /  mods that don't use the vanilla system.
- Added reload button to custom actions page
- All faction decorators can now be called by editor id or formid (previously only formid) (is_in_faction, etc)
- Tweaked thought prompt to encourage thought responses instead of dialogue
- Diary entries no longer include full contents in event history - still in memories. Avoids bloating prompt when using diaries often, and hijacking memories.
- Log spam reduction.
- Added pdb support for SEH handling. Will improve debuggability for these considerably when people report them.

**Prompt Changes** @Min
- Significantly refactored prompt instructions to simplify them, and remove bloat / improve coherency. Reduced token cost, and moved format / length instructions earlier. "Less is more".
- Should result in non state-of-the-art models looping less, becoming obsessed less, and generally working better.
- This may result in a degradation for some models that the prompts were previously fit very well for.

**Bug Fixes**
- Muted a couple unimportant error messages. @Min
- Fixed several potential access violation errors. @Min
- Fixed an OpenRouter API bug. When we receive cross-contaminated requests, we now immediately abort the http request (saves tokens, and prevents gibberish from bleeding through). @Min
- Comprehensively fixed everywhere that we can leak utf8 characters @Daikichi  ❤️
- Fixed an access violation with the active effect tracker. @Naitro
- Removed agent (like prompt helper agent) config from overrides, as this doesn't make sense to override per-actor @Min
- Fixed missing actor_name context variable for Papyrus Action event lines
- Hit events now filter non-actor hits immediately - Some mods cause a flood of non-actor hit events, which was causing us to choke during combat sometimes.
- Stripped backticks from action evaluation and target selection responses.


