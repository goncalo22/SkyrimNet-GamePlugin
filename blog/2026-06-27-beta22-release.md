---
title: SkyrimNet Beta22  Released
description: SkyrimNet Beta22
tags: [release, beta22]
---

🎉  SkyrimNet Beta 22 Latest
<!--truncate-->


# SkyrimNet Beta22

## Quest Journal Awareness @PhospheneOverdrive

NPCs can now read your actual quest journal — the same quest names, journal narrative, and objective list you see in your own log — and bring it into conversation. A follower can ask how the hunt for the dragon is going, comment on the step you're stuck on, or react to a job you just wrapped up, all from your real, current journal rather than a vague "you're on a quest somewhere" hint.

Until now the quest data handed to characters was raw engine text, riddled with the tokens the game normally substitutes at display time. Aliases, location names, and progress counters all came through unresolved — so a character "reading" your journal saw nonsense. That's all resolved now:


More importantly, characters now get the journal narrative and your objective progress, not just the title. Here's the kind of thing a follower can actually see for a main-quest step — narrative text in your character's own voice, with finished objectives marked [DONE]:

**Dragon Rising**
Word reached Whiterun that a dragon was attacking the Western Watchtower.
The Jarl's housecarl, Irileth, gathered a few guards to deal with it, and
I went with them.
- Go to the Western Watchtower [DONE]
- Kill the dragon [DONE]
- Absorb the dragon's soul
- Report to Jarl Balgruuf

Because the done markers carry through, a character can tell the difference between "you've already slain the dragon" and "you still need to report back to Balgruuf" — and talk to you accordingly, instead of congratulating you on something you haven't done yet.

It rides along in a new party-quests bio section. Active quests show the resolved name, the journal narrative, and your displayed objectives with [DONE] markers. Misc tasks show as a flat list of outstanding objectives; quests sitting inactive in your log can be surfaced too, but are off by default. Controlled by `show_misc_tasks` (on by default) and `show_inactive_quests` (off by default).

Quest context is also centralized now — player and follower thought prompts used to render quest info twice, so thoughts and bios no longer double up on it.

## Inventory-Aware Prompts @PhospheneOverdrive

Two new decorators let prompt authors react to what someone is actually carrying. As usual, these can be used as conditions in triggers/actions as well:

```
{{ get_item_count(player.UUID, "Gold001") }}
{% if has_item(npc.UUID, "Lockpick") %}NPC has lockpicks{% endif %}
```

`get_item_count` returns how many of an item an actor holds; `has_item` is the true/false version. Both take either an editor ID (`"Lockpick"`) or a form ID (`0x0000000F`).

## OpenRouter Routing Visibility @Zevick

If you route through OpenRouter, you can now see and steer which underlying provider it picks.

- API requests show the routed provider next to the model name, so you can tell whether a given call actually went to, say, Together or Fireworks.
- A searchable "ignore providers" dropdown under **Providers → OpenRouter → Advanced** lets you exclude providers you don't want. It flags which providers have had recent requests, and you can search by provider or by model name to see every provider that serves a given model.
- **Logs → API Requests** is searchable by provider name.

## Request Cost in API Logs @Zevick

The API logs now show what each request cost, just to the left of the provider and model:

```
$0.0002 - novita - qwen/qwen3-vl-235b-a22b-instruct
```

It appears in the Logs list, the request-detail modal, and the home page's Recent API Requests module. Sub-cent amounts get extra decimal places, and the cost is hidden entirely when it's zero or unavailable. This is automatic on OpenRouter; other providers are unaffected. As a bonus, failed requests now show which upstream provider they actually routed to (recovered from the error body) instead of leaving it blank.

## Startup Diagnostics @Zevick

If your install is broken or incomplete, SkyrimNet now tells you in plain language with an in-game message box, instead of burying the problem in raw debug notifications you'd have to decode yourself. It catches the common failure shapes:

- **Missing dependencies** — split into critical (SkyrimNet won't run) and optional (some features degrade), so you can tell what's actually broken from what's merely nice-to-have.
- **Runtime failures** — config, database, or web-server problems that left SkyrimNet half-initialized, including a watchdog for "the game loaded but the database never came up."
- **First-run setup guidance** — a setup box that points you at the dashboard (and shows your real dashboard hotkey), with a live Discord invite button if you get stuck.

Each tier can be dismissed on its own, and a dismissed warning auto-clears once you fix the underlying problem. There's also ESL-aware handling so a missing `skyrimvresl`/BEES doesn't snowball into a bogus "SkyrimNet.esp is missing" warning. Tested on both SE and VR.

## Open the Dashboard from Wheel & MCM @Zevick

You can now open the in-game dashboard without reaching for a keyboard — handy for controller and VR users. There's a new top-level **Open Dashboard** entry in the wheel menu, plus an MCM-bindable dashboard hotkey you can set under SkyrimNet's controls. The bound key toggles the dashboard open *and* closed even while Papyrus owns the rest of the hotkey set.

A couple of related web fixes came with it:

- **Custom web-server ports now work** — the dashboard and the in-tutorial audio tests only functioned on the default port 8080; if you'd moved the web server elsewhere (e.g. 8083), the dashboard silently refused to open and audio tests broke. Base-URL resolution now waits for the real server address instead of assuming 8080.
- **Clear Recent Events takes any amount of time** — instead of a handful of fixed presets you can type any number of game-hours, plus a new **All** button to wipe the lot.

## Dashboard @Zevick

**Tutorial overview.** The tutorial now has a second half — a guided walkthrough of SkyrimNet's core systems (Prompts, Triggers, and more) with worked examples. The Prompts step walks through the `0010_setting` world prompt, and the Triggers step hands you a ready-made example trigger that writes a player diary entry when you sleep (SkyrimNet ships with no triggers by default, so this gives you something concrete to start from). Tutorial steps also no longer hard-gate the Next button behind running their test first.

**Character overrides are now one editor everywhere.** The Settings and Characters pages share the same override components — config sections, group inheritance, and character settings are available in both (Characters just omits the Override Targets pane). `voice_id` override fields get the same searchable, free-typeable voice dropdown as the rest of the voice settings, and a dialogue-model override now pre-selects the provider from the base endpoint instead of opening blank.

**Per-slot provider overrides.** When you edit a model's advanced parameters in your rotation, you can now override `provider_settings` and the SSE streaming config for that individual slot, instead of the change applying to every model.

**Prompts page.** You can pin prompts to the top of the list (`0010_setting.prompt` is pinned by default), and selecting a prompt for the first time no longer reloads the page.

**Edit slider values by typing.** Click the number shown next to any slider to get an input box and enter an exact value.

A pile of dashboard fixes also landed:

- Copy/paste in the prompt editor works reliably now; ESC exits the prompt editor (CM6) so a second press can close the dashboard.
- Template preview is back on the Characters page; bulk add-item and capture modals are back in the Game Data Explorer.
- Plugin model variants are no longer overwritten on startup; empty plugin setting sections are hidden.
- Pronunciation dictionary and voice-fallback entries now save correctly; the Trigger modal rejects spaces in names.
- Edit Action modal shows eligibility conditions again; toggling a virtual entity from the character list now auto-saves.
- Virtual-entity bios with Cyrillic (and other non-ASCII) names now resolve to the correct file.
- The AI-assistant window and its splitters resize smoothly again (pointer-capture instead of erratic mouse-drag); you can select and copy text out of the agent chat output.
- Deleting an NPC group works from the in-game PrismaUI overlay.
- OmniSight image refresh gives visible feedback; in-dashboard logs are truncated for performance; plus assorted text-selection and visual tweaks.

## Chat UI @Zevick

- **Dialogue & thoughts filter.** A new filter (off by default) drops everything except spoken dialogue and NPC thoughts from the overlay. Thoughts are still gated behind the usual perks.
- **Events display correctly now.** The overlay renders events the same way the Recent Events panel does. Lines that used to show up bare — "wrote a diary (troubled)", "Prisoner - Natural" — now read properly as "Prisoner wrote a diary (troubled)" and "Prisoner woke up from sleep". Empty dialogue responses are dropped.
- **Clicking an NPC name keeps what you've typed** — it prepends `@Name` to your current message instead of wiping it (and prefixes like `#` no longer pre-fill).
- The `!` prefix is no longer re-filled after you send a direct narration, and ESC exits the inline event editor. The whole chat UI was also converted to i18n in prep for future translations.

## Log Viewer Highlighting @PhospheneOverdrive

The dashboard's log viewer now syntax-highlights LLM request payloads so they're far easier to scan. Headings, roleplay context, and generation requests get full-line styling; action labels (`- ACTION: ActionName`), code, keys, bracketed labels, and bullets get inline coloring; and narration like *Prisoner studies the craftwork.* gets a subtle gray tint without touching **bold** text. JSON keeps its own coloring, with content inside JSON strings highlighted on top. Works in both light and dark themes.

(Raw `/logs` rows are intentionally left unhighlighted — that view exposes C++ source filenames rather than prompt content, which lives in the separate request view.)

## OmniSight on HDR Displays @Dowser 

Vision capture now works on HDR setups. HDR framebuffers (R10G10B10A2) are converted down to SDR so vision screenshots come out looking correct instead of washed out or blown. The conversion was rewritten to first check whether a conversion is even needed, run a white-balance histogram pass, and handle resizing in linear space before tone-mapping (Reinhard, via a PQ/Rec.2020 → ICtCp pipeline, similar to SKIV's JXR viewer). The pixel work is parallelized across image rows; expect at most a frame or two of hitch during capture on a 4K HDR rig.

## Stability & Behavior @Dowser 

- **Raycast line-of-sight crash guard** — added defensive checks around the Havok raycast used for line-of-sight to fix a reported CTD (e.g. an NPC being removed mid-check in some interiors).
- **Bard songs hold while you're in a menu** — a new AI bard song won't kick off while you're busy in a menu, and enabling/disabling bard singing now takes effect live without a restart.

## Model Presets: Budget Refresh & Premium Rename @Zevick

> **Note for testers**: the **Performance** preset is now called **Premium**. If you had Performance selected, switch to Premium to get the equivalent.

The Budget preset swapped a few models around:

- Vision → `qwen/qwen3-vl-8b-instruct`
- Gamemaster → `meta-llama/llama-3.3-70b-instruct` (the same one Balanced uses)
- Combat → `google/gemma-4-26b-a4b-it`

## Bug Fixes

- **Numeric preset names crashed / displayed wrong** ( @Zevick ) — a preset named with only digits (e.g. "0010") was treated as a number on the YAML→JSON round trip, which could crash and showed incorrectly in the quick-setup dropdown. Preset names are now coerced back to strings. (Reported as GamePlugin #431.)
- **Base64 image data flooding error logs** ( @Zevick) — when an LLM response errored, embedded base64 image data was dumped into the log. It's now stripped from error messages.
- **Freeze-frame background froze the game** ( @Zevick) — `kFreezeFrameBackground` is now gated to apply only when the game is actually paused, preventing a freeze in some scenarios.
- **Scary quest-journal error on startup** ( @PhospheneOverdrive) — on the first save load after launching Skyrim, `get_quest_journal()` could miss its 5-second window while the game thread was still busy loading. It always fell back safely to an empty list, but the timeout was logged as an error, which surfaced as an alarming in-game HUD notification. It's now a warning — same safe fallback, no false alarm.
- **Plugin settings didn't take effect** ( @Zevick) — saved as a flat key instead of nested YAML, so edits silently reverted on reload and never reached the plugin.
- **`Ctrl+R` triggered a phantom page refresh** ( @Zevick) — Ultralight sometimes drops the Ctrl key-up, so the latch stuck and a later `R` reloaded the page. The refresh hotkey is now F5-only.
- **Event edit modal showed "Unknown" actors** ( @Zevick) — when opened from a homepage deep-link; actor IDs are now hex-normalized like the other event views.
- **Deep-links reopened on refresh** ( @Zevick) — one-shot links (e.g. open-this-event) replayed every refresh; they're now cleared after use.
- **Request payloads weren't selectable** in the detail modal ( @Zevick) — they're now selectable and copyable.
- **An open dropdown didn't close** when you clicked into the code editor ( @Zevick) — it now closes on window blur (the editor is an iframe), and scrolling a dropdown or template preview no longer leaks to the page behind it.
- **The Vision LLM test asked "Are you working?"** instead of describing the attached image ( @Zevick) — it now sends a proper describe-the-image prompt.

# SkyrimNet Beta22.1 

A small stability hotfix on Beta22.

## OmniSight HDR/SDR Screenshot Detection @Dowser 

Reworked how OmniSight decides whether your game renders in HDR or SDR when it grabs screenshots for the vision model, and added a manual override for when auto-detection guesses wrong.

**New OmniSight setting: Auto / HDR / SDR.** Auto (default) detects the backbuffer colorspace itself; force HDR or SDR if it gets it wrong.

## Quest Journal Decorator Reverted @PhospheneOverdrive

Beta22's newer quest-journal integration (the `get_quest_journal` decorator and the party-quest prompt built on it) is disabled here, reverting quest context to the older, less powerful version. This is a stability fix — the newer path was causing problems for some VR users, this will return in a future release.

## Dragonborn Voice Over: Pin to v1.1.1 @Daikichi @Zevick

If you use Dragonborn Voice Over, install v1.1.1 — not 2.x. DBVO 2.x moved to a DLL and dropped the `.swf` file our integration depends on, which breaks it. The dependency instructions now specify v1.1.1.

## Bug Fixes

- **Gamepad buttons wouldn't open the dashboard** — Fixed; controller now opens the SkyrimNet dashboard. @Zevick

https://github.com/MinLL/SkyrimNet-GamePlugin/releases/tag/vbeta22.1-rc1