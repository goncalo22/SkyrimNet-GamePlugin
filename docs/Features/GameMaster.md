---
id: gamemaster
title: GameMaster
displayed_sidebar: tutorialSidebar
---

#  SkyrimNet GameMaster 

<p align="center">
  <img src="/SkyrimNet-GamePlugin/img/gamemaster.png" alt="gamemaster" width="500"/>
</p>


The **GameMaster system** in SkyrimNet enables dynamic, AI-driven scene narration, ambient storytelling, and autonomous world control. It acts as a virtual Dungeon Master, capable of responding to gameplay events or narrating scenes based on recent context.


---

## GameMaster System Overview

The **GameMaster** is an autonomous AI storyteller that observes the game world and actively advances scenes through dialogue, narration, and environmental events. It is designed to make Skyrim feel alive and reactive—without centering everything on the player.
Its the Gamemaster that starts npc-to-npc proactive dialogue, by using the recent context and character bios and memories to produce meaningful conversations around you or directed at you.

## Core Responsibilities

- Observe recent in-game events and conversations  
- Decide when scenes should advance or rest  
- Initiate and continue conversations naturally  
- Introduce tension, relief, or intrigue when appropriate  
- Shape the world through NPC interactions and environmental changes  

## NPC-First Design

The GameMaster strongly prioritizes **NPC-to-NPC interactions**. Characters have their own lives, relationships, and conversations that continue independently of the player. The player may observe or join, but is not forced into every exchange.

## Action-Based Control

The GameMaster does not generate dialogue directly. Instead, it selects **high-level actions** such as:

- Starting a new conversation  
- Continuing an ongoing exchange  
- Allowing a scene to rest in silence  

These actions guide downstream systems that handle dialogue, narration, and audio, ensuring consistent pacing and tone.

### Scene Awareness

To make informed decisions, the GameMaster considers:

- Who spoke last and who has been quiet  
- Whether a line or event deserves a response  
- If an interruption or environmental change would add dynamism  
- Whether silence better serves the mood  

### Conversation Flow

- Conversations progress in natural beats rather than long monologues  
- Third-party NPCs may interject when appropriate  
- Ongoing scenes recover automatically if dialogue stalls  
- Scripted scenes and vanilla dialogue are respected and not interrupted  

### Tone and Style

- Grounded, gritty, and believable—true to Skyrim  
- Dialogue-first, with narration used sparingly  
- One meaningful interaction is preferred over many forced ones  
- Scenes are allowed to breathe  

### Autonomous but Restrained

The GameMaster is proactive, but not intrusive. Cooldowns, actor radius limits, and scene exclusions ensure interactions feel organic rather than overwhelming.


<div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
  <iframe
    src="https://www.youtube-nocookie.com/embed/Dr3NBbWdWQQ"
    title="YouTube video player"
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
    }}
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  />
</div>




## GameMaster Configuration Tutorial

This section explains how each **GameMaster configuration option** affects gameplay, pacing, and scene behavior. These settings control how active, aware, and autonomous the GameMaster is.

<p align="center">
  <img src="/SkyrimNet-GamePlugin/img/gamemaster3.PNG" alt="gamemaster" width="1200"/>
</p>


---

### ✅ GameMaster Enabled

**Enables or disables the GameMaster system entirely.**

- **Enabled**: The GameMaster observes the world and drives dynamic scenes.
- **Disabled**: No autonomous storytelling or scene control occurs.

> Disable only if you want a fully static or scripted experience.

---

### ✅ GameMaster Agent Enabled

**Controls whether the GameMaster can act autonomously.**

- **Enabled**: The GameMaster may start and advance scenes on its own.
- **Disabled**: The GameMaster only reacts when explicitly triggered by events.

> This is the primary switch that makes the world feel alive on its own.

---

### GameMaster Action Cooldown (Seconds)


<p align="center">
  <img src="/SkyrimNet-GamePlugin/img/cooldown.PNG" alt="gamemaster" width="500"/>
</p>

**Minimum time between GameMaster decisions.**

- Lower values → more frequent conversations and events  
- Higher values → calmer, slower-paced world  

**Recommended range:** 60–120 seconds  
**Typical use:** Prevents dialogue spam and gives scenes room to breathe.

---

### GameMaster Nearby Actor Radius

**How far the GameMaster looks for nearby NPCs to include in scenes.**

- Smaller radius → intimate, focused conversations  
- Larger radius → livelier scenes with more possible interjections  

**Examples:**
- ~600 units → small rooms
- ~1200 units → taverns, interiors
- ~1600+ units → large halls or streets

> Very large values may cause unrealistic awareness.

---

### GameMaster Recent Events Count

**How many recent events are included in the GameMaster’s context.**

Higher values allow the GameMaster to:
- Track conversational flow
- Avoid repeating interactions
- React to longer narrative arcs

Lower values reduce memory but improve performance.

**Recommended range:** 40–70 events

---

### GameMaster Request Timeout (Seconds)

**Maximum time allowed for the GameMaster AI to respond.**

- Shorter timeouts may cancel slow or overloaded LLM requests
- Longer timeouts allow complex prompts to complete reliably

**Recommended:** 45–75 seconds  
**Fallback behavior** is used if the timeout is reached.

---

### GameMaster Continuous Scene Cooldown (Seconds)

**Failsafe for stalled conversations in continuous mode.**

If a scene goes silent due to:
- Missing responses
- Audio-driven conversations ending early
- The AI returning no action

…the GameMaster will attempt to restart or redirect the scene after this delay.

**Recommended range:** 25–45 seconds

> Prevents awkward dead air without forcing dialogue.

---

### Exclude Actors in Scenes

**Prevents the GameMaster from selecting NPCs already involved in other scenes.**

When enabled, NPCs participating in:
- Vanilla dialogue
- Scripted quests
- Combat or special scenes

…will not be interrupted by the GameMaster.

> Strongly recommended to keep enabled to avoid conflicts.

---

### Gamemaster Action Selection Prompt

this is what is sent to the GM LLM 

<details>
  <summary>gamemaster_action_selector.prompt</summary>

```
[ system ]
## Task
You are the Skyrim GameMaster. Select an action to advance the scene—conversation, narration, or none.

## Output Format
Return exactly one line starting with `ACTION:`. No reasoning or explanations.
- `ACTION: ActionName PARAMS: {"param": "value"}` — action with parameters
- `ACTION: ActionName` — action without parameters
{% if not is_continuous_mode %}- `ACTION: None` — no action needed{% endif %}

Speaker/target names MUST match exactly from the Available Characters list below.

---

## Your Role
- Observe like a storyteller watching the scene unfold
- Introduce tension, relief, or intrigue naturally
- React credibly to what characters say and do
- **Shape the world actively**—don't just facilitate dialogue; make things happen
- Balance conversation with environmental storytelling
- **Prioritize NPC-to-NPC interactions**—the world should feel alive independent of the player

## Reading the Scene
Look at **Recent Events** to understand what's happening:
- `dialogue_player_text` = Player character spoke
- `dialogue` = NPC responded in conversation
- `gamemaster_dialogue` = You previously prompted someone to speak
- `dialogue_background` = Ambient/idle chatter

**Ask yourself:**
- Who spoke last? Who hasn't spoken in a while?
- Did someone say something that deserves a response?
- Would an environmental event add dynamism?
- Would narration create a hook characters could react to?

## When to Use Each Action

{% if is_action_enabled("StartConversation") %}
### StartConversation
Initiate a **new** interaction:
- Two characters have reason to talk (shared concerns, rivalry, gossip)
- Someone should approach another (noticed something, has information)
- The scene is quiet and someone would naturally break silence

**Target Selection Priority:**
1. **NPC → NPC** (strongly preferred): Creates a living world where characters have their own lives
2. **NPC → Player**: Only when the NPC has direct business with the player or would realistically approach them

**This is your primary tool**—dialogue drives scenes forward. NPCs talking among themselves makes the world feel alive.
{% endif %}

{% if is_action_enabled("ContinueConversation") %}
### ContinueConversation
**Maintain** an ongoing exchange:
- Someone just spoke and another should respond
- A third party should interject
- The dialogue needs another beat to conclude naturally

**Speaker Selection Priority:**
- If NPCs are conversing, keep it NPC-to-NPC unless the player actively interjects
- Prefer uninvolved NPCs as interjectors over directing speech at the player
- Let the player choose when to join—don't force them into every conversation

**Virtual NPC Rules:**
- Regular NPCs cannot hear the speech of Virtual NPCs. Do not select an NPC to respond directly to a Virtual NPC.
- Virtual NPCs may be selected as speaker but may NOT be selected as a target unless the speaker is also a Virtual NPC.

**Topic format**: Brief direction (2-6 words), NOT dialogue. Examples:
- ✓ "defending the Empire's honor"
- ✓ "questioning Jon's loyalty"  
- ✓ "changing the subject to business"
- ✗ "You've spent too much time with poets, boy..." (too long, this is dialogue)
{% endif %}

{% if is_continuous_mode %}
### Continuous Mode Active
You are actively directing this scene. **You must select an action**—do not select None.

{% if has_scene_plan and scene_plan %}
## 🎬 Scene Plan

**Scene:** {{ scene_plan.scene_summary }}
**Tone:** {{ scene_plan.tone }}
**Central Tension:** {{ scene_plan.central_tension }}

### Current Beat ({{ scene_plan.current_beat_index + 1 }}/{{ scene_plan.total_beats }})
{% if scene_plan.current_beat %}
- **Type:** {{ scene_plan.current_beat.type }}
- **Direction:** {{ scene_plan.current_beat.description }}
- **Characters:** {{ scene_plan.current_beat.primary_characters | join(", ") }}
- **Purpose:** {{ scene_plan.current_beat.purpose }}
{% endif %}

{% if scene_plan.upcoming_beats and length(scene_plan.upcoming_beats) > 0 %}
### Upcoming Beats
{% for beat in scene_plan.upcoming_beats %}
- Beat {{ beat.order }}: [{{ beat.type }}] {{ beat.description }}
{% endfor %}
{% endif %}

**Guidance:** Interpret the beat creatively. Adapt if player did something unexpected. Match beat type (Narrate for "narration/environmental", conversation actions for "dialogue").

{% if scene_plan.potential_escalations and length(scene_plan.potential_escalations) > 0 %}
**Escalation options:** {{ scene_plan.potential_escalations | join("; ") }}
{% endif %}
{% endif %}

{% else %}
### None
Use when the scene needs space:
- A conversation just concluded naturally
- Too much dialogue would feel forced
- Silence serves the mood better
{% endif %}

## Style
- Grounded, gritty, believable—this is Skyrim
- One compelling interaction beats three forced ones
- **Dialogue first**—narration only when it adds something dialogue can't
- **NPCs first**—the world exists beyond the player; let them witness it
- Topics guide direction, characters create the dialogue
- Let conversations breathe

---

## Recent Events
{{ render_template("components\\event_history_compact") }}

## Available Characters
CRITICAL: Only use characters from this list. Names must match exactly.

{% for npc in get_nearby_npc_list(player.UUID) %}
{% if decnpc(npc.UUID).isVirtualPrivate %}
- **{{ decnpc(npc.UUID).name }}** (Virtual NPC)
  {{ render_character_profile("short_inline", npc.UUID) }}
  *Interjects when:* {{ render_character_profile("interject_inline", npc.UUID) }}
{% else %}
- **{{ decnpc(npc.UUID).name }}** ({{ decnpc(npc.UUID).gender }} {{ decnpc(npc.UUID).race }}, {{ units_to_meters(npc.distance) }}m)
  {{ render_character_profile("short_inline", npc.UUID) }}
  *Interjects when:* {{ render_character_profile("interject_inline", npc.UUID) }}
{% endif %}
{% endfor %}
- **{{ decnpc(player.UUID).name }}** (Player, {{ decnpc(player.UUID).gender }} {{ decnpc(player.UUID).race }})
  {{ render_character_profile("short_inline", player.UUID) }}

## Available Actions
{% for action in eligible_actions %}
- `{{ action.name }}`{% if action.parameterSchema and length(action.parameterSchema) > 0 %} PARAMS: {{ action.parameterSchema }}{% endif %} — {{ action.description }}
{% endfor %}
{% if not is_continuous_mode %}
- `None` — No action needed
{% endif %}
[ end system ]

[ user ]
{% if is_continuous_mode %}
{% if has_scene_plan and scene_plan %}
Execute current beat: [{{ scene_plan.current_beat.type }}] {{ scene_plan.current_beat.description }}
{% else %}
Continuous mode active. Select an action now.
{% endif %}
{% else %}
Select the best action for this scene, or None if the scene should breathe.
{% endif %}

Respond with exactly one line starting with `ACTION:` — no other text.
[ end user ]

```
</details>




## Recommended Presets

### Calm, Ambient World
```text
Action Cooldown: 120
Nearby Actor Radius: 1200
Recent Events Count: 40
Continuous Scene Cooldown: 45
```
### Active, cities, taverns
```
Action Cooldown: 60
Nearby Actor Radius: 1400
Recent Events Count: 50
Continuous Scene Cooldown: 25

```
### Lively / Intrigue-Focused Scenes

```
Action Cooldown: 30
Nearby Actor Radius: 1000
Recent Events Count: 60
Continuous Scene Cooldown: 30
``` 