---
slug: conversations
title: Conversations

---

# Conversations

<p align="center">
  <img src="/SkyrimNet-GamePlugin/img/conversation.png" alt="vast" width="450"/>
</p>




Conversations in Skyrimnet are intended to be seamless, happening organically with the involved characters.


  ##  🎯  Core Design Objectives
 ### 1.  Contextual Authenticity

Every spoken line must emerge from real in-world context:

Proximity: Who is physically near and aware of the event.

Relationship: Friends, allies, rivals, factions, or companions get priority.

Emotional or personal stake: A character reacts not because “someone should,” but because they would.

The interjection guidance for each NPC is the key — it encodes how and when they’re naturally inclined to speak.

### 2.  Seamless Turn-Taking

SkyrimNet’s speaker selector, through the **Meta LLM**, acts like a social timing manager. With very frequent, fast calls to decide who and if someone should speak next.

### 3. Reactive

 NPC responses are generated using LLM templates that reference:

get_scene_context() (event history, current environment)

candidateDialogues (NPC profiles + interjection logic)

Registered decorators and Papyrus actions (for dynamic behavior)


 ### 4.  The role of `{% block interject_summary %}`

This block is SkyrimNet’s social reaction blueprint.

When the system runs the speaker selection prompt, it uses this block to determine:

Whether the NPC’s interjection context aligns with recent events (get_scene_context()).

Whether the NPC has a socially valid reason to speak.

Whether silence or a different NPC would feel more natural.

### 5. The Talkto Package and AI actions

They will ensure that speaking or engaged npcs will hang around, listening and responding.
The Talkto Package makes the npcs aproach the player, being removed some time later.
The Wait or Follow/Acompany Actions can be used to ensure the npcs stay for the conversation.

