---
slug: cost
title: Cost Walkthrough

---

# Understanding the OpenRouter Request Log (SkyrimNet)

This page explains how to read the **OpenRouter request log** and use it to debug, optimize, and control SkyrimNet’s AI behavior, performance, and cost.

Think of this table as the **per-LLM-call microscope**: every row is one exact request sent by SkyrimNet.

---

## What this table represents

Each row = **one LLM request**  
Sent by SkyrimNet to OpenRouter, routed to a specific model.

This view is used for:
- Debugging AI behavior
- Tracking token usage
- Finding cost spikes
- Diagnosing latency
- Verifying model routing logic

---

## Column-by-column explanation

### Timestamp
When the request started.

**Tip:**  
Multiple requests with the same timestamp usually mean:
- chained calls (planner → evaluator → generator)
- multiple NPCs reacting to the same event
- multi-step AI pipelines

---

### Provider / Model
Which **exact model** handled the request.

Examples:
- Fast models → short reactions, cheap logic
- Large models → reasoning, narration, dialogue
- Vision models → image or scene understanding

**Tip:**  
This column is key for understanding **why something cost more or took longer**.

---

### App
The application or API key that sent the request.

For SkyrimNet, this is typically:




 Full dialogue, narration, or reasoning output

**Rule of thumb:**
- Input tokens = memory + context cost
- Output tokens = verbosity and latency

---

### Cost
The **exact cost of that single request**.

Use this to:
- Identify expensive steps
- Verify model routing decisions
- Catch accidental overuse of large models

**Tip:**  
Sort by cost to instantly find the most expensive AI actions.

---

### Speed (tokens/sec)
How fast the model streamed its **output**, not how long it “thought”.

Common patterns:
- `2–3 tps` → tiny outputs or control responses
- `20–40 tps` → large reasoning models
- `50–70+ tps` → fast dialogue or narration

Low speed does **not** always mean slow — it often just means very short output.

---

### Finish
How the request ended.

Common values:
- `stop` → completed normally
- `length` → hit max tokens
- `error` → request failed

If most entries are `stop`, your system is healthy.

---

### Actions (👁 View)
Opens the **full request details**, including:
- full prompt
- system instructions
- user content
- model output
- metadata

This is the **primary debugging tool** for SkyrimNet prompts and behaviors.

---

## How to read patterns in the log

### Large input → tiny output
Usually means:
- memory recall
- state evaluation
- decision logic

Optimization ideas:
- summarize memories earlier
- cap context size
- move these steps to cheaper models

---

### Many fast, cheap calls
Normal for:
- NPC reactions
- trigger checks
- background AI logic

This is expected and healthy.

---

### Few expensive, large-output calls
Usually:
- dialogue generation
- narration
- deep reasoning

This is where you *want* to spend tokens.

---

### Bursts of multiple models at once
Indicates:
- multi-model pipelines
- planner → evaluator → generator flow
- fallback or routing logic

This is normal in advanced SkyrimNet setups.

---

## Practical workflows

### Debugging AI behavior
1. Find the relevant timestamp
2. Click the 👁 icon
3. Inspect:
   - input size
   - selected model
   - output content

---

### Optimizing cost
1. Sort by **Cost**
2. Ask:
   > Did this step really need this model?
3. Adjust:
   - model routing
   - max tokens
   - context size

---

### Optimizing performance
1. Sort by **Speed**
2. Identify slow or heavy steps
3. Reduce:
   - output verbosity
   - unnecessary reasoning
   - repeated calls

---

## Mental model to remember

- **Requests** = how often SkyrimNet talks to models  
- **Input tokens** = how much memory/context it brings  
- **Output tokens** = how verbose the response is  
- **Cost** = model price × total tokens  


---

## Final note

If you see:
- stable costs
- normal token ratios
- mostly `stop` finishes
- clear model separation by task

Then your SkyrimNet AI pipeline is working exactly as intended.






- Embbeded vs Action LLM

Action LLM seems expensive with many memories enabled, detailed bios, context and many actions the calls are necessarily very frequent 

one can expect $1 after about 300 calls. if there are 3 calls per minute , thats $1 after 1h and 40 min ( even with all "none" calls )

´
Embedded increases token size , but there are no constant calls.

Each 3k token increase is about 19% more expensive  0.00293 vs 0.00348 , for example. 

In terms of calls per dollar it means 341 calls  vs 287 , so you could have 64 more dialogue calls before reaching a dollar ( if using 3k less tokens)

Embedded actions with an efficient action eligibility, can go a long way, in terms of cost.


Meta LLM

the mood call could be removed meaning 



