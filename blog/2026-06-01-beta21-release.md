---
title: SkyrimNet Beta21  Released
description: SkyrimNet Beta21
tags: [release, beta21]
---

🎉  SkyrimNet Beta 21 Latest
<!--truncate-->

# SkyrimNet Beta21

This is our biggest release in a while. The main highlight is a fully rebuilt and more user-friendly dashboard that now works **both in your browser and in-game** through PrismaUI. This release also includes a reworked provider/model system with shareable presets, a much larger Bard Singing provider menu, multi-language local TTS, and a broad pass on dialogue and prompt quality.

There is one upgrade step before you jump in: you will need to set up your models again in the new Models UI. See **Breaking Changes** below.

## Breaking Changes 🚨

**You will need to set up your models again — one time — in the new Models UI.** The provider/model system was rebuilt for this release, so your old rotation config will not carry over. This is a one-time reconfiguration, not a feature loss. Rotations are still supported, and they are now more flexible, with per-model providers and parameters.

SkyrimNet ships with a recommended preset, so you can get running again with one click while you rebuild your own setup. Your saved API keys are preserved. The old **comma-separated rotation text** has been replaced by the new row-based rotation editor, so rotations are still there; they are just configured through the UI now.

To clear up two likely concerns: rotations are **not** gone, and the browser UI is **not** gone. The new dashboard runs at `http://127.0.0.1:8080/` in any browser, and it also runs in-game.

## The New Dashboard @Zevick

The dashboard has been rebuilt from the ground up, and the big change is that it now runs **inside the game**. Press the dashboard hotkey, **F6** by default, and it opens as a full PrismaUI overlay with the same features as the browser version. You can configure, test, and manage everything without alt-tabbing. In fullscreen, it stops rendering the world behind it, which helps keep performance smooth even in busy areas.

The in-game dashboard works with both **PrismaUI 1.3 and 1.4+**

**Two ways in.** You can use the browser version at `http://127.0.0.1:8080/`, or open it in-game through PrismaUI. The legacy web UI is still included for now on a secondary port, `8081` by default, but it is **deprecated and will be removed soon**. To disable it now, set “Legacy browser UI port” to `0` under Settings → Web Server → Network. IMPORTANT NOTE: Assigning models in the old UI is broken, and incompatible with our new model/provider functionality. Do not assign models through the old UI. 

**A new interface, top to bottom.** The dashboard has been redesigned around making features easier to find. It is also i18n-ready, with English available for now and more languages planned. There are multiple built-in themes, plus support for custom themes. Theme, language, and UI scale are all under Settings → Dashboard.

**New dedicated pages** have been added for things that used to be buried in config: **Providers**, **Models**, **Text-to-Speech**, **Speech-to-Text**, **GameMaster** for feature toggles and the activity feed, **Bard Singing** for setup and replaying cached songs, and an in-app view of the community **Wiki**, maintained by @Gonçalo.

**Reworked pages.** Home, formerly called “Dashboard,” now has toggleable modules and a Quick Setup block for swapping or testing your LLM, TTS, or STT quickly. Characters can now create and manage Virtual Entities, sort by nearby actors, add actors to NPC Groups, edit overrides inline, show save-specific bios, and expose player settings from the player bio. Favorites and Pins have also been merged into one system.

Actions now combines Custom Actions and the Action Library into a single page, with a “Group by Source” toggle. YAML-defined actions are editable in the UI, and per-action actor eligibility is shown.

**Context-aware hotkey.** Pressing the dashboard key while an actor is in your crosshairs now jumps straight to that actor’s bio. If they do not have one yet, it opens the New Character modal instead. You can turn this off, or require Shift, under Settings → Dashboard.

**First-time tutorial.** A step-by-step setup walkthrough now gets a fresh install fully operational, and you can restart it any time from Settings.

**Troubleshooting in-game.** While the dashboard is open, **Ctrl + F6**, or whatever you have bound it to, toggles the PrismaUI inspector. Console, Network, and Storage tabs all work for diagnosing a page that is misbehaving. The upstream “Layers” tab is broken, so do not click it. Courtesy of @Dowser

The dashboard also supports IME composition for Japanese, Chinese, and Korean input, including inside the prompt editor’s iframe. Courtesy of @Daikichi

## Providers, Models & Presets @Zevick

**Providers are now first-class.** You can store your API key and endpoint once for OpenRouter, NanoGPT, Nvidia NIM, or Chutes, all listed by default. You can also add a custom provider. Once that is set up, you do not need to keep re-entering credentials.

**Rotations are more flexible.** On the Models page, every entry in a rotation now has its own provider, model ID, and parameters, and you can mix and match them freely. For the four default providers, the model-ID field is a searchable live list of available models, with a SkyrimNet-curated recommended set pinned at the top.

**Presets** let you store, export, and import full model configurations without API keys, so the community can share setups. SkyrimNet ships with approved presets at several price points. While you are using an official preset, your models update automatically when models are deprecated or when better options become available. If you edit a preset, you opt out of auto-updates. You can reselect the preset any time to opt back in.

## Bard Singing — More Providers & Failover @Dowser 

Bard Singing, originally by @Galanx, now supports a much wider range of music backends. It also has a **backup-provider** option that automatically retries with a second service if the primary one fails, whether that is because the provider is down, rate-limited, or returned a malformed response.

You can set up and manage all of this from the new dashboard’s Bard Singing page, which also lets you browse and replay your cached songs.

Provider menu, in USD per song. Please verify pricing yourself, since providers can change prices without notice:

```

SunoAPI         — Suno V4, V4_5, V4_5ALL, V5, V5_5            ($0.06)
OpenRouter.ai   — google/lyria-3-pro-preview                  ($0.08)
Nano-gpt        — google/lyria-3-pro/music                    ($0.08)
Minimax-Music-02                            ($0.05)
Minimax-Music-2.6                            ($0.15)
Minimax         — music-2.6-free (free), music-2.6 ($0.15), music-2.0 ($0.03)
Acemusic.ai     — acestep-v15-xl-turbo                        (free)
ACE-Step (local)— acestep-v15-xl-turbo                        (local)

```

For Minimax, use a Pay-As-You-Go or Token Plan account. The Audio Subscription plan does not authorize the music endpoint. ACE-Step local uses ACE-Step’s OpenRouter-style interface, not its API endpoint. The song cache holds 50 entries.

## PocketTTS Multi-Language @Dowser 

PocketTTS now has new on-device language models, so you can run local TTS in your preferred language without leaving the local pipeline. Supported languages are **English, Spanish, French, German, Italian, and Portuguese**.

There is also a new **FP32 → INT8 quantization** option that improves performance with a small quality tradeoff. It is worth trying if your CPU is the bottleneck for TTS.

> **Heads up:** old PocketTTS models and `.bin` voice files are no longer used. Switching languages starts a one-time download the first time you select that language. That is expected and does not mean the app has hung.

## Dialogue Choice (LLM-Assisted Vanilla Dialogue) @Min

SkyrimNet can now ask the LLM to pick one of Skyrim’s **vanilla dialogue topics** for you. The selected option is highlighted in the Dialogue Menu, and you press Enter to actually say it. In other words, the LLM suggests the choice, but it does not commit for you. Outside the Dialogue Menu, the feature does nothing.

There are two modes, following the same pattern as the V-key voice-thought hotkey:

- **Quick-tap** — the LLM picks based on event history alone. No mic input.
- **Hold + speak** — your spoken intent, such as “ask about the dragon” or “haggle him down,” is transcribed and matched against the visible options.

The LLM’s reasoning is voiced as a player-thought. The pick comes back with a short in-character justification, is registered as a `player_thoughts` event, and plays through the same PlayerThoughts virtual-entity TTS path as a normal V-key thought. It is channel-bound, with no facial animation and no dialogue package.

> The in-game hotkey to trigger this is not wired up yet. That will land in a follow-up. The feature itself is included in this release.

## Speaker Selector Tags & Tuning @Severause

The dialogue speaker selector and player-target selector prompts now tag nearby NPCs so the LLM has better context for who should speak or who you are addressing. Three tags appear automatically next to candidate names when applicable:

- **[COMPANION]** — the NPC is one of your followers
- **[ENGAGED]** — the NPC is running SkyrimNet’s follow package
- **[IN SCENE]** — the NPC is in a SexLab or OStim scene, and the tag is gracefully hidden if neither mod is installed

These tags make the LLM less likely to interrupt a scene participant and more likely to pick your companion when that makes sense. A new companion-priority factor nudges the target selector toward followers when your input is ambiguous.

All three tags are independently toggleable, and a new **silence-chance slider**, defaulting to 50%, controls how often the LLM is offered a “nobody speaks” option. Everything lives under Settings → Conversations → Speaker Selector and applies to both prompts together.

## Tighter NPC Thought Voice @Min 

NPC inner thoughts, including V-key monologue, the NPC-thought hotkey, and book-mode generations, now sound more like the character thinking instead of a narrator describing them. On some non-flagship models, thoughts had been drifting into third-person prose or reopening with recap phrases like “okay, let me think…”

The prompt tuning now keeps thoughts in the character’s own voice, with the same vocabulary, cadence, and register. It also tells the model that the thought is already mid-stream, so the next thought should feel like the next beat rather than a fresh opening. Recap-style intros and repetition between consecutive thoughts are also blocked.

## Unconscious NPCs & Furniture Phrasing @PhospheneOverdrive

NPCs that are knocked out are now understood as unconscious and unresponsive across scene context, combat status, and dialogue-target selection. Previously, you could “talk” to an unconscious NPC and the model would still generate dialogue for them.

The same change also fixes a phrasing bug where an empty furniture description could produce output like “Bill is interacting with a ”. It now falls back to “something” and handles articles correctly for all furniture types.

## Character Bio Audit — Spoiler Containment & Anti-Priming @Severause

A 519-bio audit pass was done over the base character bios to fix two problems that were leaking into production dialogue.

**speech_style priming** — Some bios used words like “clipped,” “terse,” or “blunt,” or included `Example: "…"` snippets. Those pushed NPCs into a cinematic tough-guy one-liner cadence regardless of scene-level guardrails, because bio-level voice carries more weight than scene-level instruction. Those styles were rewritten to keep each NPC’s distinctive voice without giving the model permission to overdo that cadence.

**summary spoilers** — Some bios had summaries that leaked forward-looking quest information, such as Dragonborn references, hidden allegiances, or supernatural-identity reveals. That caused NPCs to reveal quest material too early in idle first-contact dialogue. This information was *relocated to background*, not deleted, so the LLM still has the full context when a scene genuinely calls for it.

Priority NPCs and class generics were handled by hand. Less-prominent spoiler-bearing bios were handled by LLM agents with spot-checks. The roughly 1,800 bios that already followed the right pattern were left alone.

This is fully backward compatible: same paths, blocks, and syntax. Your own `prompts/characters/<name>.prompt` overrides are untouched.

## Lipsync Overhaul @Severause

NPC facial animation during dialogue has had another pass. Mouth shapes now match the spoken sounds more closely, mouths return to a neutral closed position between lines, interrupted lines ease back to neutral instead of holding the last mouth shape, and lip-sync timing is more closely aligned with the audio.

This is especially noticeable on longer lines, back-to-back replies, and interruptions such as walking away, drawing a weapon, or opening a menu. Requires **Mfg Fix NG**, which is already listed as a SkyrimNet dependency.

## New Template Decorators @Min 

For prompt authors, with the mount, furniture, and tempering decorators crediting @PhospheneOverdrivefor the reference implementations:

- **is_mounted(uuid)** — the mount’s display name when riding, empty otherwise
- **get_mount_race(uuid)** — the race of the actor’s mount
- **get_furniture(uuid)** — current furniture name, such as chairs, beds, alchemy stations, carts, and so on
- **get_tempered_items(uuid)** — array of `{formID, quality, healthPercent}` for tempered weapons and armor
- **is_in_package(actorUUID, packageEditorID)** — whether an NPC is running a specific AI package, by EditorID
- **get_speaker_selector_settings()** — all four speaker-selector knobs as one object

`get_inventory` now also exposes `quality` and `healthPercent` on tempered weapons and armor. `healthPercent` is the underlying item health, and `quality` is the tier it maps to.

## Faster World Knowledge @Min 

Rendering and retrieving world-knowledge entries is roughly **40× faster** than before. If you use large knowledge packs, you should see noticeably shorter prompt render times.

The dashboard’s trace viewer can also now import trace JSON for offline review, which is useful when sharing a render trace.

## Bulk Knowledge Pack Import @Min 

Importing knowledge packs is no longer one-at-a-time. The Knowledge Packs page now supports drag-and-drop for many `.sknpack` files, or multi-select through the picker.

Conflicts are resolved **per row** inside the import modal instead of stopping the whole batch. When an imported pack collides with an existing one by name, each row offers **Skip**, **Overwrite**, or **Rename**. Overwrite replaces the existing pack and its entries, while Rename imports with an `(N)` suffix.

## Default & Behavior Changes @Min 

A few defaults and behaviors changed in this release:

- **DeepSeek v4 Flash replaces Grok as the default** for the combat and meta LLM variants, including Core defaults, recommended models, and all three OpenRouter presets. This only affects fresh installs and anyone who relied on the default without setting an explicit override. Existing explicit configs are untouched.
- **Inline NPC thoughts in dialogue now default off** for fresh configs only. Existing configs keep whatever setting they already had.
- **Faction config overrides now require active membership.** An override keyed on a faction now checks the actor’s rank. Negative rank counts as “not a member” and is skipped. If you used a negative rank to mark an NPC as a *former* member, they will now correctly stop pulling that faction’s overrides.

## Smaller Gameplay & Prompt Changes

- **Real Names reset excludes renamed actors** ( @Min ) — the Real Names reset power no longer renames actors currently in the reset set.
- **Non-actor activations are tracked** ( @Min ) — quest scripts, triggers, and other non-actor activators that fire dialogue-style events are now recorded in event history instead of being silently dropped. TTS for these does not work yet; they are tracked, not voiced.
- **Wheel menu cleanup** ( @Daikichi ) — Faction Management was falling off the end of the Utilities submenu. Toggle Whisper Mode is now promoted to the top-level wheel, and Faction Management is back where it belongs.
- **Diary scope dialog has a Cancel button** ( @PhospheneOverdrive) — you can now back out of the diary scope prompt instead of being forced to pick one of the four options.
- **MCP world-knowledge fields filled in** ( @Min ) — `create_world_knowledge` and `update_world_knowledge` now expose `emotion`, `location`, and `knowledge_key`. `update_world_knowledge` also gains `type` and `tags`.

## Bug Fixes

- **`render_template` now works inside triggers and other events** — previously, it was not usable there. ( @lemonade8339 )
- **External C++ decorators from other plugins were silently failing** — a required argument was missing from the callback signature for externally registered decorators, so some non-Core decorators never worked. Fixed. ( @lemonade8339 )
- **`decnpc()` threw on null UUID arguments** — a template calling `decnpc(someObject.UUID)` where the upstream object resolved to null threw before any `{% if %}` guard could run. This created log noise during startup warmup and dialogue with NPCs whose name lookup failed. The argument is now wrapped in the same try/catch used by every sibling decorator; null returns an empty object. ( @Severause)
- **Papyrus quest-action registration failed on a casing mismatch** — `Could not get function info for Script::funcname` errors appeared whenever a YAML’s `executionFunctionName` casing did not match the compiled `.pex`. Papyrus is case-insensitive at the VM level, but our lookup was not. It is now. ( @Severause )
- **Papyrus reflection errors on some load orders** — an attempted fix for the null or unlinked script types some users hit with certain plugins. ( @Min )
- **MCP server rejected on the GLM coding plan** — `import_knowledge_pack`’s tool schema emitted `properties: true`, which is a JSON Schema violation. Most clients tolerated it, but GLM rejected the entire MCP tool list with a 400. The schema now emits a proper object. ( @Min )

## Under the Hood

Internal plumbing worth crediting, with no user-visible behavior change:

- **Logging overhaul** ( @Dowser ) — log files now rotate on startup, so your previous session’s log is kept instead of overwritten. The five most recent logs are retained per logger, and every line now includes the originating thread, which makes concurrency issues much easier to track down.
- **FFmpeg dynamic loading** ( @Dowser ) — FFmpeg is now loaded dynamically at runtime instead of being statically linked. The runtime DLLs still ship with the plugin, but this lightens the build and makes future FFmpeg swaps possible without a full rebuild.

# SkyrimNet Beta21.1 @everyone

Small hotfix addressing a few issues. Fixes a VR compatibility issue, and does a cleanup pass on the dashboard.

## VR Compatibility Fix @Min

Fixed a compatibility issue with Skyrim VR preventing Beta21 from working for those players.

NOTE: If you're still having problems with the game not booting on VR, make sure you upgrade to the latest version of SeverActions as well! 

## Dashboard Fixes @zevck

The new dashboard gets a cleanup pass — missing settings are back, buttons that didn't do anything now work, and a handful of display bugs are fixed.

**Settings that were missing from the new dashboard are back.** A number of options from the old web UI hadn't made it into the new dashboard yet. This pass went through every category and filled the gaps:

- **VastAI** — the whole Preferences section was missing and is now back
- **Voice / TTS** — PocketTTS precision and language, ElevenLabs/Inworld parallel limits, and voice clone cache size
- **Diary** — exclude-from-recall
- **Developer / Systems** — event filtering and outbound mod-event toggles
- **Conversations** — pinned-target range multiplier
- **Hotkeys** — the dialogue-choice key
- **MCP** — server version

**Buttons that did nothing now work.** Several confirmation pop-ups in the in-game dashboard — the delete buttons for custom voices, voice effects, and actors, plus bulk pack creation — didn't actually do anything when clicked. They now work, and a voice delete that fails tells you instead of looking like it succeeded.

**Custom voices show up after you upload them.** Uploading a player voice or thoughts voice worked, but it never appeared in the custom-voice tab. Now it does (NPC voices were never affected).

**The conditions dropdown in the edit-action window works again.**

**Other small fixes.** Model names made entirely of numbers now display correctly, the colored badges are back in the recent requests view, a file-picker error was fixed, plus minor cosmetic tweaks.

**Bard Singing is now in the Quick Toggles menu.**

https://github.com/MinLL/SkyrimNet-GamePlugin/releases/tag/vbeta21.1