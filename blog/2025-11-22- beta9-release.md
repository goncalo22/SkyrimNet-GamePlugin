---
title: SkyrimNet Beta9  Released
description: SkyrimNet Beta9
tags: [release, beta9]
---


🎉  SkyrimNet Beta 9 Latest
<!--truncate-->


# SkyrimNet Beta 9  @everyone

## New Features

**OmniSight System** 
- Omnisight is a new image-to-text system providing enhanced environmental awareness by capturing screenshots and submitting them to the LLM for evaluation during player-initiated dialogue and when entering new areas. A new OmniSight page in the UI displays all captured images and descriptions, and a card on the dashboard shows the latest screenshot with description. On default settings this system will passively, substantially improve LLM awareness of your surroundings without active player engagement. The AI will now "See what is happening in the world around you".
- Added a hotkey to capture and describe the current target in your crosshair (hold to describe your own character). When an actor has been captured, visual descriptions replace appearance text from actor bios.
- At default settings, each capture costs less than $0.0004 with multiple configuration options available to control behavior and reduce costs as needed.
- This system is properly aware of first person versus third person camera perspective, and will attempt to avoid fixating on the player character when in third person view.

https://github.com/user-attachments/assets/8bd9d0f4-0187-4e90-a647-2affb07a9332

https://github.com/user-attachments/assets/30feb7e5-0edd-4a01-873f-c1ea88a7796e

**Trace Explorer** 
- Traces are a way to understand what's happening during AI response generation and troubleshoot latency issues. Each request flows through multiple systems with a lot happening in parallel - memory retrieval, context building, LLM calls, post-processing, audio generation, audio playback - and traces let you see exactly where time is being spent.
- The Trace Explorer displays this information in time span and waterfall views with detailed metadata for each operation, making it easy to identify bottlenecks or understand why a particular response took longer than expected.
- Currently instruments player-initiated flows (player to NPC, player to self, etc.), with expanded coverage planned for future updates. Traces can be exported and shared for debugging.
- Building this feature led to discovery and resolution of several performance bottlenecks, improving response speed.

https://github.com/user-attachments/assets/d49ef476-2ca5-48e1-9e32-51f1f6383808

https://github.com/user-attachments/assets/74da7678-afff-47a5-bb4c-7d1aec44eba0

**MCP Server Integration** 
- Live game data is now exposed through an MCP (Model Context Protocol) server, running on port 8889 by default. MCP is a standardized way for AI applications to access external data sources - in this case, allowing AI assistants in code editors (like Claude in Cursor) to read your loaded mod data, active quests, and other game state information.
- This is leveraged by the agentic prompt editor (see below) to automatically build powerful integrations with your installed mods. Additional tools will be added in future updates.
- If you want to use this with an external editor (normal users can ignore this), add this to your MCP configuration file:

```json
{
  "mcpServers": {
    "skyrimnet": {
      "url": "http://localhost:8889/sse"
    }
  }
}
```

Additional tools will be added in future updates, and I have quite a bit planned that will leverage this in the future.



**AI Prompt Agent** 
- A new AI assistant in the prompt editor helps you write and modify prompts. It can read loaded game/mod data through the MCP server to help build custom integrations with your installed mods.
- The agent is aware of our Inja template syntax and will self-correct if it produces syntactically invalid output. This significantly streamlines the process of integrating new mods, though it does not 100% automate the process - it goes a long way towards easing it. I'll probably add similar agents to help with trigger and action creation in the future as well.

Example - Updating an existing prompt:

https://github.com/user-attachments/assets/56a9a065-6ee5-41a5-b813-6e908177c011

Example - Building a new integration for Survival Mode:

https://github.com/user-attachments/assets/d050078f-3067-4b92-a628-f016fd9a7b3c

https://github.com/user-attachments/assets/fe615f12-cd6c-4cfb-bbbf-6b33deade6f8

https://github.com/user-attachments/assets/935be2cd-60b3-4e7f-93ec-76c3025fe1ea

**In-game Hotkey Support** 
- MCM-based hotkey configuration is now available, primarily intended for VR and gamepad players. Includes native support for VR controllers, bringing VR support for SkyrimNet up to parity with flatrim keyboard support.
- Enable this in the MCM to use it instead of the DLL hotkey system (use one or the other, not both). The DLL-based native hotkeys are slightly faster as they don't go through Papyrus, but these are otherwise functionally equivalent.

https://github.com/user-attachments/assets/763dc4a2-c55b-46fd-9e71-5407d91b15af

**Whitelist/Blacklist Management** 
- Added wheel menu options to easily add or remove actors from whitelist/blacklist factions directly during gameplay, making it much faster to manage actor permissions on the fly.








## Tweaks

**Prompt Engine Enhancements** 
- The prompt engine has been hardened to handle malformed input (like missing functions/variables) more gracefully, now logging warnings instead of failing the entire template render with errors. Fixed prompt validation in the UI to eliminate false positives by actually using the template engine to parse templates instead of a linter-based approach.
- Added support for `{% raw %}{% endraw %}` blocks for escaping content, `elif` statements, and `{{ variable | function }}` notation (Jinja-style). Added common array manipulation functions for easier prompt construction and improved whitespace handling for better readability.
- Hash symbol (#) is no longer a reserved character in prompts.

**Prompt Quality Improvements** 
- Significantly reworked main dialogue and roleplay prompts based on community feedback and testing. These changes should result in more natural AI behavior with reduced fixation on specific patterns introduced in earlier versions.
- Player thoughts and dialogue generation prompts received similar quality improvements. All prompts have been updated to utilize new whitespace rules for better readability.

**Skyrim Quest Tracking Improvements** 
- Refactored the internal quest tracking system for better efficiency. Quest objectives and their completion status are now exposed to template decorators for use in prompts.
- Added an improved active quest filter to the player thoughts prompt by default, allowing the AI to be aware of your active quests as context without over-fixating on them. I'll play around with conditionally exposing them in other prompts beyond player thoughts in future updates.

Example:
```
{% for quest in get_all_active_quests() %}
{% for objective in quest.objectives %}{{ quest.name }}: {{ objective.objectiveText }}{% if objective.isCompleted %} (Completed){% endif %}
{% endfor %}{% endfor %}
```

Becomes
```
Imperial Introductions: Join the Imperial Legion
Before the Storm: Talk to Alvor in Riverwood
Unbound: Escape Helgen (Completed)
```

**Performance & Memory** 
- Memory search query generation is now non-blocking, improving response times significantly in situations where the query was not already cached. Fixed hybrid memory retrieval to properly use player's last input for thought/transform inputs, which should improve the relevancy of memory recall from the vector database.

**DBVO & Audio**  
- Changed "DBVO - Silent NPC TTS" config setting to off by default. Existing players who are not using DBVO should disable this in their game configuration.

**Template & Scripting** 
- Added `has_magic_archetype` decorator for checking if an actor has an entire archetype of magic effects. This allows you to easily check for things like "Calm", "Frenzy", "Reanimation", etc. without having to hardcode checks for every individual magic effect that falls under those categories. 
- Added array manipulation functions for easier prompt construction: append, push, insert, pop, remove, clear, reverse, index, count, flatten, keys, values, items, get, has_key. Also added `JoinStrings` utility function for in-template string manipulation. 
- Migrated variables to use consistent camelCase naming convention moving forward. @vrelk

**Quality of Life** 
- Spells containing "SkyrimNet" in their name are now filtered from recent events to reduce clutter.
- Added configuration option to allow summoned/reanimated creatures to bypass the actor filter.
- Reduced the verbosity of logging output - more improvements to this planned for future releases.
- Added mouse button support for keybinds in the UI.

## Bug Fixes

**Local LLM Support** 
- Added configuration option to disable SSE (Server-Sent Events) to fix support for local LLM users. This was broken in Beta 7 or Beta 8 when we added proper SSE protocol support for OpenAI-compatible endpoints.

**DBVO & Voice Issues** 
- Fixed crash that occurred when rapidly switching between open mic and voice record functions. Fixed hard crash when using DBVO with Conquest of Skyrim and potentially other mods.
- Fixed dialogue options not appearing when using Silent NPC TTS mode. Added missing TTS audio for goodbye lines with Silent NPC TTS enabled.
- Fixed players and NPCs sometimes speaking with the wrong voice when using DBVO with Zonos mod. Stopped DBVO subtitles from being split into segments, which was causing the subtitles to flicker frequently.
- Changed "voicetype is nullptr" log message from error level to warning level, as it can occur in some situations that are not actually problematic.

**Character & Actor Issues** 
- Added mannequins (MannequinRace) to the default blacklists to prevent them from speaking and having memories. Fixed issue where changes to actor bio templates would not reflect properly until restart. Fixed dynamic bio template not being available until restart if some of the subcomponents were edited.

**Dialogue & Memory** 
- Resolved UTF-8 encoding issues with diary entries. Fixed several issues that were causing NPC-to-NPC dialogue to be unreliable in generating responses and misattributing the target to the player instead of the actual NPC being addressed.

**Engine & Stability** 
- Fixed UTF-8 encoding errors when visiting certain locations in Maelstrom mod 
- Fixed crash that would occur when enabling Kokoro TTS without having its dependencies properly installed. 
- Fixed potential access violation in the audio engine. 
- Fixed issue where mood evaluation requests were ignoring the majority of meta configuration options.
- Resolved several error handling issues in the template engine introduced by the graceful error handling changes. 
- Fixed several issues that were causing npc -> npc dialogue to be unreliable in generating responses, and misattribute target to the player. 

**Assorted Tweaks** 
- Book references in the event history now show only the book title instead of dumping the entire book text, significantly improving performance and token usage.