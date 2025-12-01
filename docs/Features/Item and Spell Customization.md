---
id: customization
title: Item and Spell Customization
displayed_sidebar: tutorialSidebar
---


#  Item and Spell Customizations

<p align="center">
  <img src="/SkyrimNet-GamePlugin/img/custom.png" alt="custom" width="500"/>
</p>

SkyrimNet supports rich customization of both **items** and **spells**, enabling immersive and dynamic roleplay through custom names and descriptions. These customizations are fully exposed to the language model system, meaning NPCs and the world can react intelligently to what the player or nearby NPCs are wearing or casting.

---

## 🛡️ Item Customization

SkyrimNet detects and displays all **equipped items** from the player and nearby NPCs —If only in inventory the items isnt registered, as of beta5.If equipped,any detected item can be renamed and described through the in-game UI or external interface.

For example, a basic armor piece could be renamed:

**Ruined Leather Armor**  
*“This armor is old and torn, practically worthless…”*


<p align="center">
  <img src="/SkyrimNet-GamePlugin/img/items.PNG" alt="items" width="800"/>
</p>


Once customized, the item becomes context-aware:
- NPCs may **comment** on what you're wearing.
- The system can **log memories** based on observed gear.
- Dialogue will reflect an item's condition or name.

This allows items to feel personal, worn, legendary — or embarrassingly cheap.

---

## 🔮 Spell Customization

All **known spells** in the player’s spell list are detected and can be given custom names and descriptions. These descriptions do not alter gameplay mechanics, but are used by the LLM to:

- Narrate spellcasting with vivid details  
- Allow NPCs to recognize or react to your magical abilities  
- Generate **flavorful memory entries** tied to spell usage

<p align="center">
  <img src="/SkyrimNet-GamePlugin/img/spells.PNG" alt="items" width="800"/>
</p>



For instance, a custom description for *Ironflesh* might be:

*“As soon as the spell is cast, the owner's skin starts to harden with a metallic glint. It now looks capable of deflecting blows.”*

Whether you rename spells for storytelling, roleplay, or immersion, they become part of how the world sees your character.

---

## 🤖 AI Integration

Customized items and spells are exposed directly to SkyrimNet’s AI pipeline. This enables:

- Dynamic, **context-aware dialogue**  
- Personalized **memory generation**  
- World reactions based on equipped items or known spells  
- **Ambient commentary** or gesture responses by NPCs

An NPC may notice your enchanted boots, mock your shabby robe, or admire a named weapon you’ve handed them — all because of your customization input.

---

## Accessing the Customization Tools

Customization tools are found in SkyrimNet’s **web or in-game UI** under:

- **Item Customization**: for equipped armor and weapons
- **Spell Customization**: for known player spells

Changes are saved automatically and can be toggled, edited, or deleted. Only **equipped** or **active** assets are shown, ensuring relevance to the current scene.

---

