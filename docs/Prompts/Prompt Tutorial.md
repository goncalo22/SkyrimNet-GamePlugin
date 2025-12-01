---
id: prompt_tutorial
title: Prompt Tutorial
displayed_sidebar: tutorialSidebar

---


<p align="center">
  <img src="/SkyrimNet-GamePlugin/img/prompts.png" alt="construction" width="500"/>
</p>


## Prompts in Skyrimnet

In SkyrimNet, all prompts are defined in their respective prompt files in SKSE/plugins/SkyrimNet/prompts. This does not only apply to the prompt for getting the npc to speak, but also things like Generating Memories, Prompts for choosing the appropriate action to call as well as prompts added through mods.

Likely, the most relevant prompt sub-folders for you to add your files in are prompts/submodules/character_bio/ and prompts/submodules/system_head/

### Character Bio
All prompt files in the character_bio folder get combined into each characters bio.

They are combined in the order they appear in the folder, so having your prompt start appropriate number, you can choose at which point in the bio you would like your custom entry to be rendered (eg. 0001_myMod.prompt would render before anything else)

Since you character bios are always evaluated for a specific npc, you have the npc for which it is evaluated available in the npc variable

```
{{ decnpc(npc.UUID).name }} has been magically turned into a mudcrab
``` 


### System Head
TBA

### Decorators
Decorators are functions callable from within your prompt, that return some value.

There are several native decorators supplied, an overview of which can be found in this wiki, in the API section, or in the SkyrimNet dashboard.



# 🧙 SkyrimNet Prompt Editing Tutorial

SkyrimNet’s prompts drive how NPCs think, remember, and act. Editing them can be powerful—but also risky. This guide teaches you the **do’s and don’ts** so your edits feel natural, immersive, and stable.  

---

## 🎯 Core Principles

- **Keep prompts clean and minimal.** Don’t overload with redundant instructions—the LLM already understands basics like conversation flow and basic social cues.  
- **Structure matters.** maintain the existing SkyrimNet format (`actor`, `event`, `context`, etc.). Don’t break the JSON or YAML scaffolding.  
- **Think like a player.** Write prompts as if you’re nudging the NPC’s perspective, not micromanaging it.  
- **Don’t overexplain.** More text ≠ better output. Unnecessary “slop” confuses the model.  

---

## ✅ Good Practices

### 1. Be Concise and Clear
**Good:**  
```text
The NPC should respond in-character, reflecting their current mood and memory of the player.
```
## ❌ Bad Example

```text
Always respond politely. Use medieval language. Avoid modern slang. Pretend you are in Skyrim and never break character. Do not be rude unless instructed otherwise. Remember the player’s name and past events. Always show emotions. Never forget the lore of Skyrim.
``` 
### Why: The LLM already knows how to roleplay. Too many rules = more hallucinations.

2. Use Context Variables, Not Hardcoding

SkyrimNet passes context with variables like 

✅ Good:
```
You are roleplaying as {{ decnpc(npc.UUID).name }}, a {{ decnpc(npc.UUID).gender }} {{ decnpc(npc.UUID).race }} in Skyrim. Remain completely in character and speak as they would in the given situation.
```

❌ Bad:
```
The NPC sees the player walk in the tavern and remembers that last time they argued with them.
```

(Unless you’re writing a test case, don’t hardcode events—the bios and memory system handles that!)

3. Guide Tone, Don’t Dictate Dialogue

✅ Good:
```
The response should feel cautious and slightly distrustful.
```

❌ Bad:
```
Say: "I don’t trust you, stranger."
```

### Why: Direct scripting kills variety and makes NPCs sound robotic.

 ### 4. Let the LLM Infer Social Cues

You don’t need to tell it obvious things:

“Remember to greet politely” → unnecessary.

“Answer in complete sentences” → unnecessary.

“Stay immersive” → unnecessary.

Instead, just describe the desired tone or intent.

 ### 5. Watch Out for Hallucination Traps

Certain instructions encourage the LLM to invent events that never happened:

“Describe what just happened in great detail.”

“Always recall the player’s history.”

“Pretend you know everything about the world.”

Instead, use memory safely:


 ### 6. Respect Segmentation

SkyrimNet already breaks gameplay into events, memories, and reactions. Don’t force prompts to summarize the whole story so far. Just focus on the current event + relevant memory slice.

🚫 Common Bad Habits

❌ Writing 10+ “DO NOT” rules in every prompt.

❌ Using walls of prose in system instructions.

❌ Forcing NPCs to behave unrealistically polite/formal.

❌ Trying to encode Skyrim lore in the prompt.

❌ Asking for narrative control (“Make a plot twist happen now”).

🛠️ Quick “Prompt Hygiene” Checklist

Before saving your prompt edits, ask:

- Am I giving the minimum necessary guidance?

- Am I avoiding redundancy?

- Am I using variables `({{ }})` instead of hardcoding details?

- Am I trusting SkyrimNet’s memory system, not forcing fake history?

- Am I shaping tone and style, not dictating exact dialogue?

✨ With these habits, your SkyrimNet prompts will be clean, stable, and immersive—keeping NPCs dynamic without breaking into hallucinations or robotic, forced chatter.

