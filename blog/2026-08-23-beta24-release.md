---
title: SkyrimNet Beta24  Released
description: SkyrimNet Beta24
tags: [release, beta24]
---

🎉  SkyrimNet Beta 24 Latest
<!--truncate-->

# SkyrimNet Beta24

# SkyrimNet Beta 24 @everyone 

## Identity Links @severause

Link two identities (NPC or virtual) so SkyrimNet treats them as one being — Erik the farmer and Erik the Slayer share one history. Also covers a telepathic voice and its body, twins with one @Mind, a lich and its vessel. **Settings → NPCs → Identity Links.**

- Memory/conversation sharing direction is set per link.
- A bodiless identity stays silent while its physical counterpart is present.
- Possession modes for voice-and-body links: **Host-led** (host in control; entity speaks through the host's thoughts), **Contested** (control shifts; dialogue labels the speaker, including mid-conversation switches), **Entity-led** (entity controls the body).
- Host awareness is a separate setting, fully informed to completely unaware; custom possession text supported.
- Successions — declare that one record continues another, so the same person survives swapped records.

## Manual Book Capture @PhospheneOverdrive @Min

Press the Capture Crosshair hotkey while the Book Menu is open and your character reads the book and reacts on demand. New **Reading Mode** setting (auto / manual): auto keeps the existing close-the-book reaction, manual reacts only on the hotkey. Outside the Book Menu the hotkey keeps its OmniSight scene-capture behavior.

- A manual capture always responds — it bypasses the Player Reactions flag, probability roll, and cooldowns. Response type (thought vs. dialogue) is still honored.
- Textless books (maps, diagrams) fall back to the vision model for a page description.
- A book captured mid-combat renders the book reaction instead of a combat-panic thought that never saw the text.

## Dashboard Themes & Debug Tools @Zevick

Theme dropdown at the top of every page; save multiple custom themes, with every element customizable down to badges, log labels, and syntax highlighting. Built-in themes adjusted for contrast and colorblind friendliness.

- Debug page ported from the old web UI — button on the Settings page.
- The world knowledge entry modal creates and edits NPC groups inline.
- Variant search on the Models page.
- Fixes: dynamic bio diffs compare against the correct bio, Logs/Memories pagination shows the right page count, OmniSight gallery paginates server-side, empty tutorial steps.

## Trigger Condition Expansion @PhospheneOverdrive

Event triggers can now define multiple condition groups, OR-ed together; conditions within each group use ALL/ANY logic, e.g. (A AND B) OR (C OR D). Existing valid trigger files remain compatible; omitted operators default to AND.

## @MiniMax Music 3.0 @Dowser

Bard songs can use **Music-3.0** and **Music-3.0-free** (free: 3 req/@Min; paid: 120 RPM, ~$0.15 per ≤5 @Min of audio).

## Event History / Plugin API Fixes @Min

- Events without an originating actor were fetched but never rendered — they consumed fetch-window slots, then the prompt template dropped them. A 15-event fetch could render 6 during a knockdown-heavy fight while using community plugins for integrations like Acheron.
- Event schemas registered from Papyrus as ephemeral were written to the database anyway, accumulating forever. Declared ephemerality is honored.
## Master Switch Enforcement @Min

- `general.globalAIEnabled` off stops all outbound paid LLM/vision/music calls — scene descriptions, bard songs, triggered thoughts/dialogue/diary, and dashboard test buttons included. Previously several of these bypassed the flag. Papyrus `SendCustomPromptToLLM` and the exported-DLL equivalent return empty while off; the quick-toggle panel shows a disabled status line.
- Text or voice aimed at an NPC while the master switch or GameMaster is off shows an on-screen message na@Ming which switch is off and where to re-enable it (shown even with `general.showInGameNotifications` off). Thoughts, vanilla dialogue selection, and narration are unaffected.

## Movement & Mounted Awareness @PhospheneOverdrive

Walking/sprinting detection reads physical displacement instead of the engine's gait-toggle bit — stationary NPCs stop reporting "walking", moving players stop reporting "standing". Mounted riders are detected via mount displacement; mounted-state and tempered-equipment prompt coverage restored; `is_mounted(uuid)` display-name fallback fixed.

## Faster Boot on Slow Connections 

Startup model verification (Whisper, @MiniLM embeddings, Silero VAD) runs on background threads instead of the load thread — up to ~40s saved when a model record is missing/stale and the network is slow or down. Settled installs are unaffected. Mic hotkeys pressed before the VAD model finishes loading say "voice model still loading, try again in a moment" instead of failing silently.
## For Mod Authors @Min

- **Virtual NPC UUIDs from Papyrus** — `SkyrimNetApi.GetVirtualNPCUUID("Name")` (registration or display name, case-insensitive; the NPC must be enabled) and `GetVirtualNPCList()` (JSON array of all registered virtual NPCs). The UUID derives from the registration name — stable across sessions, safe to cache.
- **Actor mood is readable and observable** — decorator `get_actor_mood(actorUUID)` returns the current mood name (`NEUTRAL` if never evaluated; feed it to `mood_description` for catalog text). Mod event `SkyrimNet_MoodChanged` fires on actual change with `actorFormId`, `actorName`, `mood`, `previousMood`; a failed evaluation no longer broadcasts a spurious NEUTRAL.
- **Narration audio events** — `SkyrimNet_AudioStarted`/`AudioEnded` fire for narration lines (they never did; the Narrator entity has no FormID). Payload adds `isNarration`, `originatingSpeakerFormId`/`Name` (the NPC whose line the narration belongs to), and `sourceEventId` to pair start/end. Caveats: the Papyrus sender is None for narration; AudioEnded is best-effort.
- **Filtered memory queries — C++ plugin API v10** — `PublicQueryMemoriesForActor(formId, queryJSON)` filters and orders in SQL before truncation: tag include/exclude, memory type, emotion, location, importance and game-time bounds, active/inactive, seven orderings including semantic `Relevance`. Typed `MemoryQuery` struct in the updated `PublicAPI.h`; returns `[]` on installs older than v10. `PublicGetMemoriesForActor` is untouched. Memory `game_time` is stamped on every creation path.
- **Case-insensitive JSON property lookup in templates** — exact key first, case-insensitive fallback on miss. Fixes templates silently rendering nothing when Skyrim capitalizes keys (`Actors` vs `actors`) differently per install. Renders that work today are unchanged.
## Dashboard Fixes @Min

- **Action Library shows parse failures** — a custom action YAML with a syntax error is listed in a red panel with its parse error instead of vanishing with only a log line.
- **Editing an action wiped fields** — Custom Event Message, Temporary event, and per-rule required flags survive an edit/re-save.
- **64-bit UUIDs rounded in eligibility conditions** — big integers round-trip exactly in the Expected result field, including values corrupted by earlier saves.
- **Models "Test" button gave up at 35s** — the wait follows the variant's configured timeouts; timeout messages name the slot.
- **Pasted API keys with a trailing newline broke requests** — paste is sanitized, stored values cleaned on save, and the HTTP layer strips CR/LF from all outgoing headers.

## TTS & Audio

- **Universal Max Volume is per-character** (non-native audio path) — override the cap per character or NPC group. VR: your own outgoing voice is capped too; it used to bypass the cap at distance zero. @Min
- **Bracketed names never found their custom voices** — a sample for `Sosia [Whiterun Guard]` was saved sanitized but looked up raw, falling back to a race/gender default that persisted. Na@Ming unified; re-uploading clears the stale fallback. @Min
- **Player lines vanished with Voice Player Input off** — voicing off + player subtitles on shows your line as a subtitle; subtitles no longer depend on TTS. @Min
- **Inworld multi-NPC crash** — per-instance voice caches are locked, fixing a data race under `max_parallel_requests > 1`. @Min
## Bug Fixes

- **One LLM timeout could permanently kill the trigger system** — the trigger event worker survives uncaught strea@Ming exceptions, logs, and moves on. @Min
- **One malformed character mojibaked entire messages** — a single replacement character (split Cyrillic token) made the encoder re-encode the whole message as Windows-1252 and persist it. Encoder is resilient to malformed LLM output. @Min
- **Followers stopped counting past ~15m** — `is_follower` resolves by UUID instead of a proximity scan, so distance no longer flips party-quest sharing and scene inclusion while travelling. @Min
- **Private companion speech leaked** — private virtual-NPC lines no longer surface in nearby NPCs' thought/action prompts or get laundered into their memory. @Min
- **Private virtual NPCs addressed people who can't hear them** — a private-mode virtual speaker always addresses the player. @severause
- **Raw event text in prompts** — equip/activate/combat events render as prose again under Recent Events; a string/int id mismatch was dumping raw JSON. @Min
- **All-digit trigger condition values mis-parsed** — values like `00000014` stay strings instead of being read as octal, so those triggers fire. @Min
- **Blank bio section headings** — indented empty markdown headers (Background, Personality, …) are stripped from prompts. @Min
- **400s from strict LLM providers** — unset `frequency_penalty`/`presence_penalty` are omitted instead of sent as 0; per-param clear buttons added to the model sliders. @Min
- **Whisper "large" download 404'd** — replaced with `large-v1`; configs storing `large` heal on load. @Min
- **Access-violation spam when memory init failed** — failed memory initialization (e.g. model download blocked by antivirus) no longer crashes every query into SEH errors; guarded and logged. @Min
- **New Game never initialized on some SKSEVR setups** — init also fires once the player is controllable; the "Database is not initialized" check waits for init to settle. Loading a save was never affected. @Min
- **Token counts from local servers** — usage is read from the final SSE chunk on OpenAI-compatible servers like llama.cpp. @Dowser
- **HTTP retries** — transport failures are retried, cancellations are not; Papyrus/C++ LLM calls no longer abort before the retry budget is exhausted. @Dowser
- **In-game dashboard rendering** — CEF packaging rules applied to the dashboard bundle, improving display in the PrismaUI view. @Dowser
- **OmniSight** — deduplicated idle timers; scene-log spam moved to TRACE. @Dowser

...and other assorted @Minor fixes.

Full release notes and download on GitHub (vbeta24-rc3): https://github.com/@MinLL/SkyrimNet-GamePlugin/releases/tag/vbeta24-rc3