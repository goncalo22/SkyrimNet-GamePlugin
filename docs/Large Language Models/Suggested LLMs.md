---
id: suggested-llms
title: Suggested LLMs
displayed_sidebar: tutorialSidebar
---

For a seamless and cost-optimized experience with Openrouter also see:
[OpenRouter providers guide](/SkyrimNet-GamePlugin/Large%20Language%20Models/providers)



<p align="center">
  <img src="/SkyrimNet-GamePlugin/img/Ai.PNG" alt="deepseek" width="1200"/>
</p>




---

### ✨ Default Model – **DeepSeek V3.2** 


<p align="center">
  <img src="/SkyrimNet-GamePlugin/img/deepseek2.png" alt="deepseek" width="150"/>
</p>


The central model responsible for generating spoken lines, in-character dialogue, combat banter, memory processing, and action decisions.  Acts like a Dungeon Master, guiding the scene and ensuring the world feels alive.
This is the workhorse model in SkyrimNet — chosen for its **balanced creativity, flexible roleplay, no restrictions,  adherance to instructions and cost efficiency**.

**Why it works well here:**
- Handles long, context-heavy prompts without losing detail.
- Maintains consistent personality and tone for roleplay.From friendly, to tame to hostile, just depends on the npc bios and context.
- Strong decision making for action selection
- fully uncensored, allowing and roleplaying any sort of theme, if it makes sense for the character personna.
- Cost-effective enough to be used frequently for all main gameplay interactions.


**Alternative Models:**

<p align="center">
  <img src="/SkyrimNet-GamePlugin/img/gemma4.png" alt="deepseek" width="200"/>
</p>


Gemma4 31b , a "small" gem of a model. For its cost it delivers very good, immersive roleplay, with high creativity. ( arguably as good or better than many , more expensive models).
As of SkyrimNet Beta20 , the only caveat is that you may encounter some rate limiting by some providers, due to high demand. In that case, locate and exclude the provider.
Gemma4 31 can handle several dialogue features at once (if those are enabled), like narration, TTS emotion tags , inline npc "thoughts" and embedded action intents.
Its extremely cost effective and the ideal model for a budget but still immersive experience.
It is a completely uncensored model.


<p align="center">
  <img src="/SkyrimNet-GamePlugin/img/gemma4.png" alt="deepseek" width="200"/>
</p>

Gemma4 26 , does pretty much anything the slighly bigger 31b model does, but faster and cheaper. The quality is very similar to gemma4 31 at almost half the input cost. It can handle many inline dialogue features at once, without losing cohesion. 
It is a completely uncensored model

  

<p align="center">
  <img src="/SkyrimNet-GamePlugin/img/sonnet.png" alt="sonnet" width="150"/>
</p>

anthropic/claude-4.5-sonnet - a high quality roleplay model, offering realistic nuance, great prose and overall top notch experience. The price is its major shortcoming, with costs averaging $1 per hour of play (just this model alone), so have that in mind. It also tends to be verbose, though that can be managed through prompting.



---

### 🧠 Memory Generation Model – current Qwen/qwen3-235b-a22b-2507 instruct

<p align="center">
  <img src="/SkyrimNet-GamePlugin/img/qwen.png" alt="sonnet" width="150"/>
</p>

**Qwen/qwen3-235b-a22b-2507 instruct** , generates detailed, vivid memories, but still very grounded on the dialogue and events that produced them. Very good quality for the cost.
Handles memory creation, summarization, and storage.  


** Memory Creation**
- Summarizes recent event streams into first-person memories.
- Assigns:
  - `importance_score`
  - `emotion`
  - `tags`
  - `type` (TRAUMA, EXPERIENCE, etc.)
- Used later for recall, relationships, and mood shaping.

📍 View in-game under: **UI > Memories**


**Alternative Models:**


 - Deepseek v3.2 , generates detailed memories, but still very grounded on the dialogue and events that produced them.

---

### 🧬 Character Profile Generation Model – ***Qwen/qwen3-235b-a22b-2507 instruct**

<p align="center">
  <img src="/SkyrimNet-GamePlugin/img/qwen.png" alt="sonnet" width="150"/>
</p>

Generates and updates NPC identity data.

**Why *Qwen/qwen3-235b-a22b-2507 instruct here:**
- cheap but still competent at structured, consistent character building.
- Rich vocabulary for detailed backstories and personality profiles.
- Maintains thematic consistency while updating profiles over time.

** Profile Creation**
- Auto-generates profiles for modded or uninitialized NPCs.
- Includes:
  - Goals
  - Personality traits
  - Background
  - Relationship tendencies

** Dynamic Updates**
- Modifies profiles based on:
  - Important memories
  - Emotional shifts
- Allows characters to evolve naturally.

**Alternative Models:**

Several, less capable models are often unable to comply with the prompt Json instructions, so you should be careful what model to choose for this use.

-Deepseek V3 0324 



---

### 🎭 Action Evaluation Model –  current: google/gemma-4-31b it (should give you extremely reliable actions calls, while be very affordable)
Decides what an NPC does after speaking or reacting to an event.  

** Action Selection**
- Picks gameplay actions that follow logically from dialogue.
- Examples: `FollowPlayer`, `SlapTarget`, `PickUpItem`.


**Alternative Models:**

DeepSeek V3 (0324), is a cheap, competent llm, capable of dealing with the context and action parameters.

google/gemma-4-26b-a4b-it  , is extremely cheap, reported to still be dealing well with the parameter call
---

### 🧠 GameMaster Model –  current: meta-llama/llama-3.3-70b-instruct


<p align="center">
  <img src="/SkyrimNet-GamePlugin/img/llama3.3.png" alt="sonnet" width="150"/>
</p>

The humble and dated meta-llamma 3.3 is an inexpensive and good enough model for the gamemaster role. He will follow instructions and be very consistent enough in creating new or continue conversation topics consistently, for your proactive npcs dialogues.
Everytime the GM cooldown ends, this model will likey send a topic for the dialogue llm ( while "smarter" models often prefer silence)
Since most users prefer more banter, this is the chosen model


**Alternative Models:**


DeepSeek V3.2 , if you require more context awareness, you may want a "better" model. However these may output too much "none" as the conversation topics ( to keep it obnotrusive for the player). 

---


### ⚔️ Combat Model –  current: google/gemma-4-26b-a4b-it

<p align="center">
  <img src="/SkyrimNet-GamePlugin/img/deepseekflash.png" alt="gemini" width="200"/>
</p>


For combat banter you will want a fast model, to cope with the rapid firing back and forths, as well as numerous events. No need for it to be an expensive, very creative model, dialogue wise.
Its an ideal model for those short combat related lines.


**Alternative Models:**

 deepseek/deepseek-v4-flash should still be a fast and worthy solution.

 
---
### 🌐 Universal Translator  –  current:  google/gemini-2.5-flash

For the Universal Translator feature a precise, fast model is best, to avoid latency while working in tandem with the altered scripted dialogues. Gemini models work well with many languages, together with its relatively low price its a good match

**Alternative Models:**

x-ai/grok-4.1-fast will also do a good job as the model for the universal translator. Being fast and precise, while still creative enough

---
### 🧪 Meta Evaluation Model –  current  deepseek/deepseek-v4-flash 0423  ( the latest versions may give you issues, use 0423 for best, reliable results)

<p align="center">
  <img src="/SkyrimNet-GamePlugin/img/deepseekflash.png" alt="gemini" width="200"/>
</p>

Performs high-frequency, small tasks that keep scenes running smoothly.

**Why deepseek-v4 -flash 0423 is here:**
- Extremely fast and very cost-efficient for micro-decisions.
- Good at short context analysis without hallucination.
- Perfect for frequent updates like turn-taking and mood tracking.
- Its low input token cost assures that , despite the meta frequent calls, operational costs stay low

**😐 Mood Evaluation**
- Adjusts NPC emotional state from:
  - Dialogue tone
  - Memories
  - Player actions
- Affects:
  - Voice tone (for higher end TTS)
  - Facial expressions
  - Decision-making


**👥 Speaking Turn Selector**
- Chooses the next speaker based on relevance, social rules, and proximity.
- Ensures realistic pacing in conversations.


**Alternative Models:**


<p align="center">
  <img src="/SkyrimNet-GamePlugin/img/gemini.png" alt="gemini" width="150"/>
</p>


**Gemini 2.5 Flash**

A solid alternative, it was previously the default meta llm. Is slightly more censored than grok, if you run into certain more extreme themes.

---

### 🧪 Diary Generation Model –  -Qwen/qwen3-235b-a22b-2507


**Alternative Models:**

Like for Bios generations, cheaper but still creative models will be good enough, costing much less:

-Deepseek V3.2 
-Gemma4 31b is very good at writing and still inexpensive


 ### 🧪 Vision Model – google/gemma-4-26b-a4b-it

 is a very inexpensive but competent model, allowing you to have Omnisight always on and still being a negletible part of operational costs (adding a few cents over many hours of play)


**Alternative Models:**



### 🧪 Agent helper Model –  anthropic/claude-haiku-4.5

**Alternative Models:**


## Excluding faulty LLM providers in OpenRouter:

On you Openrouter call log page, check what provider was the culprit ( of weird output, slow call, above average cost, censorship, etc)

<p align="center">
  <img src="/SkyrimNet-GamePlugin/img/ORproviders.PNG" alt="gemini" width="1200"/>
</p>

Next go to your Settings , "Preferences" and next go to "Privacy"

<p align="center">
  <img src="/SkyrimNet-GamePlugin/img/exclude.PNG" alt="gemini" width="1200"/>
</p>

In there click on "add" to choose the provider you want to permanently exclude from being used on OpenRouter ( will affect all LLMs and tasks)

<p align="center">
  <img src="/SkyrimNet-GamePlugin/img/exclude2.PNG" alt="gemini" width="1200"/>
</p>






## OpenRouter SkyrimNet data

The charts displaying show the models by token count. The ranking doesnt mean higher is better, only that has more usage, often due to the task itself, like the grok4 fast models used as Meta.


<a href="https://openrouter.ai/apps?url=https://github.com/SkyrimNet" target="_blank">
  View current analytics on OpenRouter
</a>


<p align="center">
  <img src="/SkyrimNet-GamePlugin/img/SNanalyticsMain.PNG" alt="gemini" width="1200"/>
</p>


