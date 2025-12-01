---
title: SkyrimNet Beta7  Released
description: SkyrimNet Beta7
tags: [release, beta7]
---

🎉  SkyrimNet Beta 7 Latest
<!--truncate-->


# Major Features

 ### Backwards Incompatible Prompt Restructuring   @Min
The coherency of our system prompt has been mediocre, and has been getting worse as more and more community plugins are developed. In order to improve the quality of LLM roleplay, I have done a one-time backwards incompatible restructuring of our system prompt and character bio. 

Every mod-added addition to the bio, or system head should number itself accordingly so that the file ends up in the appropriate place in the prompt for consistency. For example, ### Worn Equipment is now nested under ## Appearance & Physical State. I've updated @wind and @Lazy Palm 's mods to follow this convention, though all mod authors are likely to need to rename their files to account for this if they have additions to the character bio or system head sections, in order to ensure that their information is placed at the right spot. Check out the character_bio and system_head folders to reference the new structure.

This will result in stronger and more consistent LLM responses, particularly from non-premium models (Though Sonnet and others benefit as well), and provides a solid base for us to build upon moving forward.  Almost every prompt has been touched in the character_bio and system_head submodules

Definitely open to suggestions and feedback on the new system prompt structure. Let me know what folks think.

 ### Overhauled UUID algorithm.    @Min

There were several sources of drift with the old algorithm that could cause duplicate and/or drifting uuid's.,

I've written a diagnostic feature to detect this problem / migrate the entire database to the new uuid algorithm so that people don't lose events/memories (Like many of you, I also don't like restarting constantly if I can help it  ).,

This should correct cases where actors lost access to their memories and past events. There were a few reasons why this could happen, including adding/removing mods, changing load order, and other factors.,

There is still a remaining source of drift for non-generic actors; Their ref id mutates regularly throughout normal play. I haven't addressed this just yet entirely, and am not sure if I need to or not as of yet. If I do need to address this, you'll be able to use this same tool to migrate to whatever I end up changing without losing data/progress.,

Consider backing up your database before proceeding if you want to be able to revert back to rc6. The database can be found in skse/plugins/SkyrimNet/data/,
To migrate your database to the new schemas, first:,

1) Visit the debug page at http://localhost:8080/debug 
2) Click the Execute Migration button under the Full UUID Migration section. Feel free to dry run it first with the provided interface. You must wait for this to complete before continuing to play the game.
3) Save, reload, and then Execute Migration once more. Wait for this to complete.
4) Save the game and continue playing.

### New Feature: Diaries @Min

Added UI and experience around generating, viewing, and managing Diary Entries. Diary entries are currently triggered manually, just like dynamic bio updates,

Diary entries are generated based upon recent memories, and recent events.,

Added new model type for this, so that you can use a separate model for diaries. Note: The default for this is Sonnet. If you're cost-adverse, I'd suggest changing this to qwen or deepseek r1.,

Diaries contain their own event type with a proper schema; You can create triggers/etc off of them like anything else. This event is persistent, and exposed only to the actor that made the diary.,

Diary entries create an entry into the memory database with embeddings, so that they can be recalled by the actor later like any other memory.,

New Diary specific configuration: Check out the available options.,

I tested this feature a fair bit, but there may be some rough edges: Send any feedback you may have around this! New diaries for actors that did not previously have one can (currently) only be generated from the Character page or the dashboard.,

### New Feature: Open Mic input mode @Daikichi
Adds a toggle hotkey (default unset) to use voice activated input as an alternative to push-to-talk.,

Also changed the default Silence Duration in STTConfig from 500ms to 1000ms (the period of silence required after you speak for the speech to be finalized).,

Added Open Mic VRIK functions as well.,

### New Feature: Allow TTS Engine and TTS Language Overrides @Daikichi,

Now you can set specific npcs or groups to use one tts service while everyone else uses the global TTS,

Overrides for the narrator / player thoughts can be done in the VirtualEntities config,


### New Feature: ElevenLabs support @Daikichi

Meant to be used in combination with the per-npc TTS override to give specific NPCs a very high quality (but expensive) TTS.,

### New Feature: Silent Dialogue TTS @Daikichi

Adds a feature to voice silent NPC lines with TTS (from mods with no voice acting).,

To enable this feature, download Dragonborn Voice Over but disable or delete its DBVO.esp file (no voice pack is needed).,

Lip sync/subtitles and the spoken dialogue may not match up perfectly, though we make our best effort.,

Added a config option to aggressively sync displayed subtitles with the TTS audio. Disabled by default due to some potential UX friction. @Daikichi,

### Make LLM parameters optional (Gemini Support) @Daikichi

Setting LLM generation parameters such as top_p to blank now removes them from the request,
This effectively adds support for Gemini,

### Add support for structured outputs @Daikichi

New flag in OpenRouter Config to enforce JSON output from LLMs (only affects memory generation),
Useful for local model setups (LM Studio),
Limited support via OpenRouter (only some providers),

### Prompt Improvements @Min
Overhauled Dynamic Bio Update prompt to enforce pruning, and generally avoid wild bio swings. Includes last diary entry.,

Added length guidelines to book reading events.,

Added awareness of summoned / reanimated / knocked down / etc states from new decorators.,

Tweaked memory generation to add mild length guidelines.,

Small presentation changes to various prompts.,

### New Decorators @Min

Added has_perk decorator `{% if has_perk(player.UUID, \"AdvancedSmithing\") %}You have advanced smithing!{% endif %},`
Added get_all_perks decorator 
```
metadata.returnInfo.description = "Array of objects with 'editorID' and 'rank' properties for each perk"; 
 metadata.returnInfo.exampleValue = nlohmann::json::array({
      {{"editorID", "AdvancedSmithing"}, {"rank", 1}},
      {{"editorID", "Locksmith"}, {"rank", 2}} });
```
Added get_relationship_rank decorator `{% if get_relationship_rank(player.UUID, npc.UUID) >= 3 %}You are a good friend of John Doe!{% endif %}`

Added is_in_combat decorator `{% if is_in_combat(player.UUID) %}You are in combat!{% endif %}`

Added is_capable_of_speech decorator `{% if is_capable_of_speech(player.UUID) %}This actor is capable of intelligent speech!{% endif %}`

`has_weapon_drawn` - Checks if an actor has their weapons drawn.,
`is_sprinting` - True if an actor is sprinting.,

`is_walking` - True if an actor is walking.,

`is_sneaking` - True if an actor is sneaking.,

`is_swimming` - True if an actor is swimming.,

`is_unconscious` - True if an actor is unconscious.,

Incorporated all of these into a new physical activity prompt, and updated the equipment prompt: https://github.com/MinLL/SkyrimNet-GamePlugin/commit/d22f4c2d5c61dd328b5982da8ab483bb217dcb6f,

`get_latest_diary_entry` - Returns latest diary entry for an actor.,

`get_diary_entries` - Returns the last N diary entries for an actor.,

`get_spell_list` - Returns an object containing all spells known by an actor.,

`is_summoned` - Returns true if actor is summoned.,

`is_reanimated` - Returns true if actor is reanimated.,

`is_knocked_down` - Returns true if actor is in essential down or bleedout.,

`is_hostile_to_actor` decorator for checking if one actor is hostile to another. @Min,

### API Improvements

Sending an empty DirectNarration will trigger a response without leaving anything in the context @Min
ParseString Papyrus function now converts variable names to lowercase @Min
Added new api GetTimeSinceLastAudioEnded() to allow modders to tell how long there has been silence for, for better pacing @Min
Added new api GenerateDiaryEntry(actor) - Triggers a diary entry for a given actor.,
Added new api UnregisterAction @Min,
Added paralysis and brainCondition actor values to decnpc(npc.UUID) @Min