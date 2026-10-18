---
id: npc-thoughts
title: NPC Thoughts
displayed_sidebar: tutorialSidebar
---



<p align="center">
  <img src="/SkyrimNet-GamePlugin/img/reading.png" alt="gamemaster" width="500"/>
</p>



## NPC Thoughts & Telepathy

## Overview

NPC Thoughts introduce a new cognition layer to SkyrimNet, allowing NPCs to generate **private internal thoughts** that are never spoken aloud unless specifically revealed. These thoughts are stored as part of the NPC's event history and become available to future prompt generations, improving long-term roleplay consistency, memory, and character depth.

Unlike LLM reasoning/scratchpad features, NPC Thoughts are **in-universe roleplay thoughts**. They are generated alongside normal dialogue without increasing response latency.

---

## NPC Thoughts

NPCs can silently think about events, conversations, plans, emotions, or observations. These thoughts are:

- Never spoken by default
- Saved as dedicated **Thought Events**
- Used by future prompts to improve character continuity
- Generated without delaying dialogue responses

Although thoughts consume very few tokens, they do increase the amount of stored event history during conversation-heavy gameplay.

Users who prefer traditional dialogue can disable inline thoughts entirely.

---

## Triggering NPC Thoughts

NPC Thoughts can be generated through several systems.

### Trigger Responses

Trigger actions can create thoughts using:

```yaml
response.type: npc_thought
```

---

### Papyrus API

Generate a thought directly from Papyrus:

```papyrus
SkyrimNetApi.GenerateNPCThought(...)
```

---

### Chat Command

```
/npcthink <NPC Name> [optional prompt]
```

Examples:

```
/npcthink Lydia
/npcthink Serana What do you think about the Dragonborn?
```

The command supports:

- Nearby NPCs
- Pinned NPCs
- Long-distance pinned NPCs

---

## Inline Dialogue Thoughts

these will be generated together with every dialogue output of an npc. Like the constant thought process everyone has while talking.
Since its just a small addition to the output and not a separate LLM call, inline thoughts dont add strain or meaningful cost to the system.
Inline Thoughts are a way of making the LLM add depth and further consideration to the roleplay of a character, with possible hidden motives, rationalizations and deeper decision making.

NPC dialogue may contain:

```xml
<internal_thought>
I don't trust this stranger...
</internal_thought>
```

These thoughts are automatically:

- Removed before TTS playback
- Saved as separate Thought Events
- Added to the NPC's event history

Player thoughts now follow the same pipeline, ensuring spoken dialogue and internal thoughts remain separate.

---

## Default Configuration


<p align="center">
  <img src="/SkyrimNet-GamePlugin/img/thoughts.PNG" alt="gamemaster" width="1500"/>
</p>




```yaml
enabled: true
perNPCCooldownSeconds: 60
allowInlineInDialogue: true
```

| Setting | Description |
|----------|-------------|
| enabled | Enables the thought system |
| perNPCCooldownSeconds | Minimum time between automatic thoughts for each NPC |
| allowInlineInDialogue | Allows `<internal_thought>` tags inside dialogue |

---

## Telepathy

Telepathy builds directly on NPC Thoughts by allowing the player to perceive—or canonically participate in—mental communication.

There are **two independent perks**, which can be enabled separately or together through the SkyrimNet MCM.


<p align="center">
  <img src="/SkyrimNet-GamePlugin/img/telepathy.PNG" alt="gamemaster" width="1500"/>
</p>



---

## Telepathy (Read-Only)

This mode is intended for the player only.

Features:

- NPC thoughts appear in the PrismaUI chat window.
- When **Eavesdropping** is enabled, nearby thoughts are voiced through TTS.
- The player character is **not** considered aware of these thoughts in the game world.

This mode is useful for observing NPC cognition without affecting roleplay.

---

## Telepathy (Canonical)

Canonical Telepathy makes mental communication part of the game's fiction.

When enabled:

- The player character can perceive nearby NPC thoughts.
- Thoughts are voiced through TTS.
- Thoughts become part of the conversation history.
- NPCs can react to the player acting on telepathic knowledge.

In addition, Canonical Telepathy enables **long-distance mental communication** with any NPC in Skyrim.

---

## Remote Telepathy

Send thoughts directly to distant NPCs using:

```
/telepathy Lydia Meet me outside.
```

or

```
~Lydia Meet me outside.
```

Transform mode variant:

```
~'Lydia Meet me outside.
```

The apostrophe (`~'`) routes the message through Transform Mode, following the current `defaultTransform` behavior.

Remote telepathy informs the receiving NPC that:

- The player is not physically present.
- Both the player's and NPC's locations are known.

This prevents immersion-breaking responses such as an NPC claiming to physically turn toward the player from another city.

---

## Eavesdropping

Thought perception is controlled independently through Eavesdropping.

### Listen In

An Illusion spell with the following properties:

- Base Magicka Cost: **140**
- Silent
- Instant cast
- Non-hostile
- Duration: **60 seconds**
- Cost reduced by **Adept Illusion**

---

## Eavesdrop Debug

A Lesser Power toggle intended for testing and development.

---

### Save Behavior

Eavesdropping automatically resets to **Off** whenever a save game is loaded.

---

## Facial Animation

During:

- Internal thoughts
- Telepathic communication

NPC facial animation is suppressed.

Characters no longer move their mouths while internal thoughts or telepathic speech are being voiced, helping preserve the illusion that communication is purely mental.

---

## Benefits

NPC Thoughts and Telepathy significantly improve character intelligence and immersion by:

- Giving NPCs persistent private cognition
- Increasing long-term conversational consistency
- Separating spoken dialogue from internal reasoning
- Enabling player observation of NPC thoughts
- Supporting immersive telepathic communication across Skyrim
- Preserving immersion through silent facial animation during mental speech
```