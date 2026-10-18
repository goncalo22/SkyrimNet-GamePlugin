---
title: SkyrimNet Beta17  Released
description: SkyrimNet Beta17
tags: [release, beta17]
---

🎉  SkyrimNet Beta 17 Latest
<!--truncate-->

# SkyrimNet Beta17 @everyone

## PrismaUI In-Game Chat Overlay @Min 
Complete remake of text-based input into a modern, unified chat overlay rendered directly inside Skyrim via PrismaUI. Consolidates all previous text input modes (dialogue, narration, emotes, thoughts) into a single interface, and adds event management — view, edit, and delete events without alt-tabbing out of the game.

**Input Modes** — A single hotkey opens the overlay. Type naturally, or use prefixes to control how your input is interpreted:
- Single-character prefixes: `%` think, `'` action/emote, `#` silent narration, `!` direct input, `^` whisper, `@Name` direct targeting with tab-completion, `@None` monologue (logs to history without triggering NPC responses)
- All input modes also have corresponding slash commands if you prefer as opposed to the aforementioned prefixes: `/think`, `/narrate`, `/transform`, `/silent`, `/monologue`
- Clickable mode buttons above the input field for quick switching without memorizing prefixes
- Empty submit in Transform/Thoughts mode auto-generates NPC responses, matching short-tap voice input behavior

**Event Management** — View, edit, and delete your conversation history without leaving the game:
- Ctrl+Up to edit your last message, Ctrl+Delete to undo the last event
- Arrow keys to browse input history (works even with mode prefixes active)
- Diary entries display as short summaries in the chat feed

**Audience & Targeting** — See who's listening and control who hears you:
- Audience panel shows which nearby NPCs will perceive the event
- Whisper toggle (clickable indicator, purple when active) automatically filters the audience to whisper radius

**Layout & Readability** — Fully customizable positioning with a clean, readable design:
- Top/bottom anchoring, width slider (50-100%), vertical offset (up to 600px), horizontal alignment
- Message history hidden by default, browsable via arrow keys or chevron button
- Text shadows and high-contrast styling for readability over busy game backgrounds

PrismaUI 1.3+ is now required for text input.

This is the foundation for a much larger vision — future releases will migrate more interaction use-cases into PrismaUI and expand it considerably to power things like target selection, group conversations, blacklisting/whitelisting, and more. This feature is fully functional, but has a few areas that will be further polished in the future - Would love feedback from folks as to how they like this feature, and what they'd like to see included in the future.

## Hierarchical Action Categories @Severause
- NPC actions can now be organized into two-level category menus via the `customCategory` YAML field — the LLM sees manageable category folders instead of dozens of flat actions
- Drill-down uses a lightweight LLM call (~60% token savings) that skips event history, memories, and location context
- The first LLM call can pass a situational intent string (e.g., "sell a health potion to the player") that guides the second call's decisione

## Tweaks
- Hotkeys are no longer disabled while message boxes are active @Min
- Memories page actor list now only shows actors that actually have memories, with memory count displayed @Min
- Player dialogue events now include `speaker` and `listener` fields matching the schema used by NPC dialogue events, enabling prompt templates to reconstruct full two-way conversations from event history @Severause

## Bug Fixes
- Fixed error when talking to non-Actor references (e.g., Alternate Start Mara statue) @Min 
- Fixed lip sync breaking when "Enable NPC Node Updates" was enabled — the node reset calls were incorrectly made async, which reset lip sync before it could start @Daikichi
- Fixed narrative parser using regex that caused false narrator identity swaps mid-dialogue — now uses paired-asterisk scanning @Min 
- Web server startup errors (e.g., port already in use) now show an in-game HUD notification on save load instead of silently failing @Min 

# SkyrimNet Beta17.1

Small hotfix release.
- Setting Opacity to 100% now makes the chat box purely opaque. The background gradient now properly respects the opacity setting.
- Added missing prompt for action drilldown.
