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
*This is used in addition to the Omnisight vision system, can be used as replacement for item descriptions if not using vision.*

---

## 🛡️ Item Customization

SkyrimNet detects and displays all **equipped items** from the player and nearby NPCs —If only in inventory the items arent registered .any detected item can be renamed and described through the in-game UI or external interface.

For example, a basic armor piece could be renamed:

**Ruined Leather Armor**  
*“This armor is old and torn, practically worthless…”*


## Accessing the Customization Tools

Customization tools are found in SkyrimNet’s **web or in-game UI** under:

- **Item Customization**: for equipped armor and weapons
- **Spell Customization**: for known player spells

Changes are saved automatically and can be toggled, edited, or deleted. Only **equipped** or **active** assets are shown, ensuring relevance to the current scene, keeping the list manageable.

<p align="center">
  <img src="/SkyrimNet-GamePlugin/img/itemcustom.PNG" alt="items" width="1200"/>
</p>

** You can also customize items and spell from the Game Data Explorer**:

<p align="center">
  <img src="/SkyrimNet-GamePlugin/img/explorer3.PNG" alt="construction" width="1200"/>
</p>





Once customized, the item description becomes context:
- NPCs may **comment** on what you're wearing.
- The system can **log memories** based on observed gear.
- Dialogue will reflect an item's condition or name.

This allows items to feel personal, worn, legendary — or embarrassingly cheap.

---

## 🔮 Spell Customization

All **known spells** in the player’s spell list are detected and can be given custom names and descriptions. These descriptions do not alter gameplay mechanics, but are used by the LLM to:
The description isnt used on the moment of casting, but given whenever the spell is being wielded. So, not the effect of discharge but how it looks in your hand ( if you wish to convey it)

- Allow NPCs to recognize or react to your magical abilities  
- Generate **flavorful memory entries** tied to spell usage

<p align="center">
  <img src="/SkyrimNet-GamePlugin/img/spellcustom.PNG" alt="items" width="1200"/>
</p>




<p align="center">
  <img src="/SkyrimNet-GamePlugin/img/spellcontext.PNG" alt="items" width="600"/>
</p>


---

## 🤖 AI Integration

Customized items and spells are exposed directly to SkyrimNet’s AI pipeline. This enables:

- Dynamic, **context-aware dialogue**  
- Personalized **memory generation**  
- World reactions based on equipped items or known spells  
- **Ambient commentary** or gesture responses by NPCs

An NPC may notice your enchanted boots, mock your shabby robe, or admire a named weapon you’ve handed them — all because of your customization input.

---


Due to how many mods use silent "placeholder" spells to created desired effects ( like cloak spells to reach out nearby npcs) its often important to make sure these spell are removed from the LLM input.
Here you can select the spell and disable it from the context, avoiding confusion and "hallucinations" from the npcs ( which ironically would be based on actual in game events being detected).


<p align="center">
  <img src="/SkyrimNet-GamePlugin/img/spellcontext2.PNG" alt="items" width="600"/>
</p>




---

