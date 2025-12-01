---
id: suggested-llms
title: Suggested LLMs
displayed_sidebar: tutorialSidebar
---




---

### ✨ Default Model – **DeepSeek V3 (0324)**

<p align="center">
  <img src="/SkyrimNet-GamePlugin/img/deepseek.png" alt="deepseek" width="300"/>
</p>


The central model responsible for generating spoken lines, in-character dialogue, combat banter, memory processing, and action decisions.  Acts like a Dungeon Master, guiding the scene and ensuring the world feels alive.
This is the workhorse model in SkyrimNet — chosen for its **balanced creativity, reasoning skills, and cost efficiency**.

**Why it works well here:**
- Handles long, context-heavy prompts without losing detail.
- Maintains consistent personality and tone for roleplay.
- Strong reasoning for action selection and combat chatter.
- Cost-effective enough to be used frequently for all main gameplay interactions.


**Model shortcomings:**
Model Shortcomings:
DeepSeek has a known tendency to occasionally exaggerate interpersonal conflict. Traits such as sarcasm, defiance, or stubbornness—when included in prompts or character bios—can sometimes be amplified to the point of becoming unrealistic or caricature-like. This can lead to characters behaving in ways that feel forced, overly combative, or out of proportion to the situation. Despite this quirk, the model’s cost-to-quality ratio remains attractive, making it worthwhile to use with some targeted mitigation strategies. These may include softening the intensity of such traits in the input, providing explicit tone and behavior guidelines, or balancing potentially abrasive personality elements with cooperative or empathetic qualities to keep interactions believable and engaging.

**Alternative Models:**



<p align="center">
  <img src="/SkyrimNet-GamePlugin/img/qwen.png" alt="sonnet" width="150"/>
</p>

qwen/qwen3-235b-a22b-2507 instruct -  roughly half the price of deepseek, it is delivering as much. A very capable, very affordable LLM that for the price and quality may yet turn to be a standard model for the dialogues.

<p align="center">
  <img src="/SkyrimNet-GamePlugin/img/lama.png" alt="deepseek" width="150"/>
</p>

meta-llama/llama-4-maverick - a similarly priced model to deepseek, with a more "helpful" general tone. It is more consistent, taking less creative risks, which makes him feel somewhat more predictable than deepseek. If using Maverick you may want to raise the model temperature to 1, due to this. It is image capable, and one of the best for this price range. This aspect makes him worthwhile to appear on this list, since llm vision integrations will come to skyrimnet very soon. ( vision isnt available yet, as of Beta5)


<p align="center">
  <img src="/SkyrimNet-GamePlugin/img/sonnet.png" alt="sonnet" width="150"/>
</p>

anthropic/claude-3.7-sonnet - a high quality roleplay model, offering realistic nuance, great prose and overall top notch experience. The price is its major shortcoming, with costs averaging $1 per hour of play, so have that in mind. It also tends to be verbose, though that can be managed through prompting.


<p align="center">
  <img src="/SkyrimNet-GamePlugin/img/grok.png" alt="grok" width="150"/>
</p>


x-ai/grok-3 - similarly priced as sonnet, so a costly model. It offers high quality, realistic and very creative roleplay ( for better and worse). Can be overly inquisitive, due to its training, with a tendency to frequently ask your opinion. Again, these behaviors can be prompted out.

<p align="center">
  <img src="/SkyrimNet-GamePlugin/img/lama2.png" alt="lama2" width="150"/>
</p>

meta-llama/llama-3.1/3.3-70b-instruct - affordable models with a built-in “helpful LLM” bias, under the hood. While it can deliver competent roleplay, its style tends to be more predictable than highly dynamic models. For the price, however, the quality of the experience is more than acceptable ( though qwen3 2507 appears to be on a higher level, with roughly the same price). Because SkyrimNet provides clean, well-structured prompts and highly detailed—yet focused—context, even budget-friendly but still relatively large models like this can perform above expectations and deliver a surprisingly immersive experience. The difference between 3.1 and 3.3 is very small, 3.1 is a bit more uncensored than 3.3, (while the latter is very slighlty more context aware, for bigger requests)


---

### 🧠 Memory Generation Model – **DeepSeek V3 (0324)**
Handles memory creation, summarization, and storage.  
Using the same model as dialogue ensures **memories are phrased and “thought” in the same voice as NPC speech**, keeping personalities aligned.

**📝 Memory Creation**
- Summarizes recent event streams into first-person memories.
- Assigns:
  - `importance_score`
  - `emotion`
  - `tags`
  - `type` (TRAUMA, EXPERIENCE, etc.)
- Used later for recall, relationships, and mood shaping.

📍 View in-game under: **UI > Memories**

---

### 🔍 Memory Search Model – **DeepSeek V3 (0324)**
Optimized for retrieving context quickly and feeding it back into dialogue.
- Uses semantic vector similarity (**MiniLM-L6-v2**) plus keyword filtering.
- DeepSeek’s solid comprehension helps form precise search queries from vague NPC thoughts.

**Alternative Models:**


 - Qwen/qwen3-235b-a22b-2507 instruct , generates detailed, vivid memories, but still very grounded on the dialogue and events that produced them. Very good quality for the cost.

---

### 🧬 Character Profile Generation Model – **Claude 3.7 Sonnet**

<p align="center">
  <img src="/SkyrimNet-GamePlugin/img/sonnet.png" alt="sonnet" width="400"/>
</p>


Generates and updates NPC identity data.

**Why Sonnet 3.7 here:**
- Excellent at structured, consistent character building.
- Rich vocabulary for detailed backstories and personality profiles.
- Maintains thematic consistency while updating profiles over time.

**🧾 Profile Creation**
- Auto-generates profiles for modded or uninitialized NPCs.
- Includes:
  - Goals
  - Personality traits
  - Background
  - Relationship tendencies

**🔄 Dynamic Updates**
- Modifies profiles based on:
  - Important memories
  - Emotional shifts
- Allows characters to evolve naturally.

**Alternative Models:**

Several, less capable models are often unable to comply with the prompt Json instructions, so you should be careful what model to choose for this use.

-Deepseek V3 0324 , can be a cheaper alternative than sonnet.
-Qwen/qwen3-235b-a22b-2507 instruct produced very good results, costing only a small fraction of Sonnet



---

### 🎭 Action Evaluation Model – **DeepSeek V3 (0324)**
Decides what an NPC does after speaking or reacting to an event.  
Using the same model for actions and dialogue ensures **NPC behavior matches what they say**.

**🎯 Action Selection**
- Picks gameplay actions that follow logically from dialogue.
- Examples: `FollowPlayer`, `SlapTarget`, `PickUpItem`.

**✋ Gesture Generation**
- Chooses expressive gestures and animations to match tone.
- Examples: nodding, shrugging, dramatic motions.


**Alternative Models:**


---

### 🧪 Meta Evaluation Model – **Gemini 2.5 Flash**

<p align="center">
  <img src="/SkyrimNet-GamePlugin/img/gemini.png" alt="gemini" width="400"/>
</p>



Performs high-frequency, small tasks that keep scenes running smoothly.

**Why Gemini 2.5 Flash here:**
- Extremely fast and cost-efficient for micro-decisions.
- Good at short context analysis without hallucination.
- Perfect for frequent updates like turn-taking and mood tracking.

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

---
