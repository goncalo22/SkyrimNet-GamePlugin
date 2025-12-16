---
title: SkyrimNet Beta10  Released
description: SkyrimNet Beta10
tags: [release, beta10]
---


🎉  SkyrimNet Beta 10 Latest
<!--truncate-->

# SkyrimNet Beta 10 Release 

## New Features

### Migrated to the most recent version of commonlib @Dowser
- This update brings us up to the most modern version of one of our core dependencies, pulling in more than 1800 commits containing improvements and fixes from upstream to the core library that we use to integrate with Skyrim.  Immediately obvious to users are the two following changes:
- VR users will now be able to use their HMD to function as a crosshair. This should allow all crosshair related functionality that was not working for them to now work.
- The log file is now in "Skyrim Special Edition" instead of Skyrim.INI"
- ...And a lot more. Bunch of improvements we can take advantage of over the coming releases in its api.

### Universal Translator @Daikichi  
Completely reimagine Skyrim's dialogue. This feature transforms **vanilla and modded** dialogue with custom speech patterns and bio / recent event awareness.
- Want Imperials to speak like city-folks, and stormcloaks to talk like southerners? Think that High Elves should speak Chinese? Or Wood Elves Spanish? Think Lucan should talk like Trump? That's possible now.
- Never experience the original vanilla dialogue lines again, should you wish.
Use the new Universal Translator page in the Customization menu to set rules for races, factions, NPCs, or globally.
The NPC's original dialogue will be muted, transformed with the configured speech pattern, and voiced by TTS.
**This is an extension of the Silent TTS system.** To use this feature, install DBVO and delete its esp, and enable Silent TTS for NPCs in the config.

- Added hooks on native game functions for audio and dialogue. **Warning:** this could potentially cause conflicts if any other mods are hooking the same functions.
- Added a new UniversalTranslator model variant for this feature. The default is `google/gemini-2.5-flash`. The model choice needs to be something very fast and cheap. Creativity is not as important for this model.
- Note: Narration is currently disabled for Universal Translator transformed text, to work around a bug. This will be fixed properly in a later release.


### Event Monitor (under system in nav bar) @Min
- View the stream of all events that SkyrimNet sees from the game, and examine their payloads/data.
- Easily create triggers on any event that Skyrimnet sees. 
- Several current limitations:
1) The current suggested parameters from the trigger button can be scuffed depending on the event type. I need to improve this flow still. To access data from an event reference `event_json.whatever` as usual.
2) We retain a limited number of events in memory, so if you wait too long it will vanish.

### Dialogue Filter @Min
- Configurable filter for stripping lines from the game. Block things like hello/goodbye from actors, etc.
- By default, this blocks Combat grunts, and the player's heavy sprinting line.

### Diary/Dynamic Bio Triggers @Min
- Players can now configure dynamic bio updates or diary entries via the trigger system. I'm imagining players using this in response to quest completion, sleep start, etc. I'll probably ship some default triggers for this later post-beta10, open to feedback on what folks like the most for this.

### Config Tweaks
- Changed config categorization in an attempt to be more user-friendly @Min
- Improved config option search experience in an attempt to be more user friendly @Min
- Updated config descriptions for push to talk to make it more user friendly @Min
- Added a config option to disable Narration while in combat, while Narration is otherwise enabled. Default: true @Min
- Added a config option to greatly improve lip sync for Silent TTS (and Universal Translator in some cases). Game config -> Voices -> Enable NPC Node Updates. Default: disabled. @Daikichi 
  - This option is reported to be incompatible with certain skin mods like SynthEBD and will cause NPC skin to flicker during conversation. Disable this option if you see that happening.
- Merged @Mika 's changes to add a new config for specifying packages that should block talk to actor / talk to npc packagesl.
- Added option to event schema (configurable via config page) for enabling or disabling the processing of short lived events, separate from enabling or disabling processing for the event entirely - Intended to allow for disabling our default short lived event handling for things like hits, active effects, etc while still allowing triggers @Min
- Increased default max spatial audio distances to work better with the Universal Translator. Delete game config to pick up new defaults. @Min
- New config option to allow the Game Master to target NPCs that are in scenes. Default: not allowed. @Min

### New Decorators
- Added `get_actor_value` - Fetch a given actor value from a specified actor. @Min
- Added `get_selected_quests` decorator. Returns only the quests that are active in the player's journal. Now used in the player_thoughts prompt by default @Min
- Added `universalTranslatorSpeechPattern` decnpc attribute. Returns the NPC's Universal Translator speech pattern, if one exists.  @Daikichi

## Events @Min

### Active Effect @Min
- Active effect application (addition/removal) is now tracked. Triggers can be created on the application and removal of active magic effects.

### New Quest Events
- quest_start_stop: Fires when a quest is started or stopped.
- quest_objective_state: Fires when an objective for a quest changes state.

## New Events

### Active Effect @Min
- Active effect application (addition/removal) is now tracked. Triggers can be created on the application and removal of active magic effects.

### New Quest Events @Min
- quest_start_stop: Fires when a quest is started or stopped.
- quest_objective_state: Fires when an objective for a quest changes state.

### Animation Events @Min
- You can now create triggers off of Animation Events. These allow extremely fine-grained trigger support for most things that an actor can physically do. Jumping, mod added events, etc.
- Animation events are captured for every target within SkyrimNet's interaction radius.
- Additionally, we capture animation events for objects that you are directly interacting with, if they have their own animation graph (Some mods do this).
- Events that do not have a type registered for them are filtered out. Enable "Developer Mode" in the new UI to allow all animation events and mod events to bypass the filter.
- Limitation: I'm still playing around with all of the data we can reliably extract from these, and will likely improve this further in the future.

### Mod Events @Min
- You can now create triggers off of Mod Events. Mod events are events that Papyrus mods typically use to communicate with eachother, and inform eachother of events that occur. 
- This allows you to easily build reactions to internal mod things that were previously not possible (DD events, for instance) without having to write any code.
- Limitation: We're fetching args in the old manner at present (One string arg, one number arg); Modern mod events typically send these in a different format, which we are currently unable to retrieve. So, depending on the mod event, you may just have work off the name of it for now rather than being able to fully parse the args. Looking into improving this. Still very useful as-is.

## Papyrus API
- Added papyrus api for registering generic persistent events @Min
```
; Register a persistent event that informs actors without triggering dialogue reactions
; This function creates an event that NPCs will be aware of for context, but will NOT
; respond to with dialogue. Use this for:
; - Background events that add context but shouldn't interrupt scenes
; - State changes that actors should know about but not react to immediately
; - Information that should be stored in actor memory without triggering conversation
; 
; Unlike DirectNarration, this event type has NPC reactions disabled by default.
; The event will still be persisted to the database and appear in the event history
;
; Content must not be empty - empty content will be rejected and return 1 (failure).
;
; If originatorActor is specified, that actor will be associated with the event
; If targetActor is specified, that actor will also be associated with the event
;
; Examples:
; RegisterPersistentEvent("The sun sets over the mountains") ; General atmospheric event
; RegisterPersistentEvent("A caravan arrives at the gates", caravanLeaderRef) ; Associated with an actor
; RegisterPersistentEvent("The player appears tired from travel", None, Game.GetPlayer()) ; Targets the player
; 
; Returns 0 on success, 1 on failure (including empty content)
int function RegisterPersistentEvent(String content, Actor originatorActor = None, Actor targetActor = None) Global Native
```

## Prompts @Min
- Added Universal Translator speech pattern prompting to dialogue response prompts to ensure consistency between UT and AI dialogue.
- Several small prompt tweaks to reduce repetition and make player dialogue transform/thoughts work better.
- Reduced hallucinations and improved coherency of player thoughts prompt.
- Added the new get selected_quests decorator to the player_thoughts template.
- Added a universal_translator.prompt in the transformers folder.

## Tweaks
- Added filter to strip narration from TTS when the option is disabled. @Min
- Merged @Mika's changes for actor's to look at each-other via talk-to-npc package during npc -> npc dialogue
- The various has archetype, has magic effect, etc decorators now respect whether or not the condition is active, or if it is suppressed due to it's conditions not being met. @Min
- Added scene awareness for parallel Silent TTS audio, to prevent actors in the same scene from talking over each other. @Min
- If it's installed, MFG Fix NG is called for the player before speaking to clear stuck faces after nsfw animations have played @Daikichi 
- Improved performance of trigger manager to handle high volume events more reliably. @Min
- Added new generic persistent event type @Min
- Added generic persistent event registration as an option to the trigger manager @Min
- The API Log Viewer now shows what type of request it's from, and allows full screen maximization. @Min
- Improved error response display when OpenRouter calls fail for whatever reason to make it easier for people to debug @Min
- Subtitles are now managed more consistently. They will vanish 10 seconds after the last spoken audio finishes. @Min
- Changed the method used to silence NPCs while TTS is playing. No more silent-voice voice type @Daikichi
- Added new CastSpell_Execute action to the Skynet_Library for use with casting arbitrary spells easily from actions. Very easy form of integrating with a lot of mods. @PhospheneOverdrive
- Fixed inconsistency when narration was disabled for thoughts usecase. @Min
- Game Master events will no longer show up in the event history @Min
- The Game master will no longer target actors that are (target or originator): Asleep, Unconscious, Sneaking, In Scenes (new config option to disable this one). This will prevent autonomous dialogue from happening for actors in these conditions @Min
- Improved test coverage @Dowser

## Bugfixes
- **Critical Bug Fix**: Fixed a long-standing issue (pre-beta1) that could result in events being scrambled upon loading the game and misattributed to the wrong actors. This was a major source of subtle context leak issues (Thanks to @romans9  for the report and logs!) @Min
- Stopped mods disabled in MO2 from being detected. Now you can disable DBVO.esp instead of needing to delete it. @Daikichi
- Hopefully keep inventory and other issues from causing assertion crashes @Daikichi
- Fixed several regressions (Including the freeze some folks were hitting) around facial animation handling @Min
- Fixed potential access violation in audio engine @Min
- Fixed regression with crosshair capturing. It should consistently work for both Vr and SE alike now in both the target selection prompt + OmniSight @Min 
- Fixed a rare papyrus deadlock that could occur when calling actions @Min
- Made Boolean handling for json from Papyrus more consistent @Min 
- Web UI: Don't trim comma's or new lines while typing (action tags editor) @Vrelk 
- Web UI: Don't reorder a table as soon as you type in it. (various config pages) @Vrelk
- Web UI: Sort character dropdown list alphabetically (event & memory editor) @Vrelk
