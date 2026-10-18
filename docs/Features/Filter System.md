---
id: filter-system
title: Filter System
displayed_sidebar: tutorialSidebar
---

<p align="center">
  <img src="/SkyrimNet-GamePlugin/img/nazeem.png" alt="construction" width="400"/>
</p>


# SkyrimNet Actor Filter System

The Actor Filter System controls which NPCs SkyrimNet interacts with.
It prevents the AI from wasting resources on irrelevant actors like animals, mannequins, or scripted entities, ensuring that only meaningful characters are processed.
With the filter system you can also,using factions, races and genders, select which kinds of npcs are enabled by the ai. Skyrimnet philosophy is a always-on fully awakened world, but the actor filter allows Skyrimnet to be an easily scalable, customizable ai experience.

## 1. Purpose

The system filters in-game actors based on several criteria:

Factions – Exclude specific mod or system factions.

Races – Exclude animals and creatures.

Gender – Optional; used for gender-specific interactions.

Speech Capability – Ensures only voice-capable actors are processed.

Filtering occurs before any AI logic runs, improving performance and stability.

## 2. Filter Mode

You can choose one of two modes:

BlacklistExclusion 
→ All actors are allowed except those matching the blacklist filters.

WhitelistOnly
→ Only actors explicitly listed are allowed. Everyone else is ignored.
Useful for testing or limited-interaction setups.

You can use the Skyrimnet Wheel ( F12) to quickly add actors to the blacklist or whitelist factions.


<video width="640" height="360" controls>
  <source src="/SkyrimNet-GamePlugin/videos/Whitelistnpcs.mp4" type="video/mp4" />
</video>

---

<p align="center">
  <img src="/SkyrimNet-GamePlugin/img/actorfilter.png" alt="construction" width="1200"/>
</p>


---
## 3. Speech Capability

Allow Only Speech-Capable Actors:
When enabled, SkyrimNet only processes actors who can speak (those with valid voice types).
This automatically excludes animals, mannequins, and silent creatures.

## 4. Faction Filters

Filter actors based on faction membership.

Faction Blacklist:
Add factions whose members should be ignored.
```
SkyrimNet_ActorBlacklistFaction
```

Useful for excluding mannequins, scripted NPCs, or other special entities.

## 5. Race Filters

Control inclusion or exclusion based on race.

Race Whitelist:
Used only in WhitelistOnly mode. Add races that should be allowed.

Race Blacklist:
Used in BlacklistExclusion mode. Add races that should be ignored.
```
ACLRaceCat
DogRace
WolfRace
```

## 6. Gender Filters

You can include or exclude actors based on gender.
This is rarely needed but can support gender-specific AI behavior or testing scenarios.

---

## 7. Saving and Applying

After adjusting your filters:

Click Save Configuration.

SkyrimNet immediately reloads the updated filters — no restart required.

Interactions in-game now follow the new inclusion/exclusion rules.

---



## SkyrimNet Memory Filter

In practice, the Memory Filter “listing” works just like the Actor Filter: you can maintain whitelists and blacklists for factions and races (and optionally require speech-capable actors). Anything that lands on the blacklist simply can’t emit memories; anything on the whitelist (when using WhitelistOnly) is allowed to. This symmetry makes it easy to keep your interaction scope and your memory scope in lockstep—if an actor isn’t eligible for interaction, they usually shouldn’t be filling your memory store either.

Because the filters operate at the actor-group level, they’re also a convenient way to block specific actors from generating memories—most commonly the player or test NPCs. The simplest pattern is to keep using a dedicated exclusion faction (e.g., SkyrimNet_ActorBlacklistFaction) and add any actor you want to suppress to that faction via your setup scripts (or a quick console/Papyrus call). Excluding high-traffic actors like the player can save a lot token usage and LLM cycles, keeping the memory store lean and focused on the NPCs that matter.

 You can add the player to the new SkyrimNet_ActorBlacklistFaction and place that in the memory blacklist. 
to add use the console comand: 

``` player.addtofaction skyrimnet_actorblacklistfaction 0```

<p align="center">
  <img src="/SkyrimNet-GamePlugin/img/memoryfilter.png" alt="construction" width="1200"/>
</p>



---


## Dialogue Filter

<p align="center">
  <img src="/SkyrimNet-GamePlugin/img/delphine.png" alt="construction" width="500"/>
</p>



The **Dialogue Filter** preprocesses vanilla Skyrim dialogue **before it reaches the AI**.  
It uses **regular expression (regex) rules** to **skip, clean, or replace** unwanted dialogue lines such as combat grunts, filler barks, or repetitive NPC phrases.

This ensures the AI receives **meaningful, high-signal dialogue**, improving response quality and immersion.

Its Ui is located in Configuration Manager ---> Reactions and Events---> Dialogue Filter

---

### Design Notes

- Regex anchoring (`^...$`) is used for **precise bark removal**
- Filtering occurs **before AI processing**, not after
- Prevents irrelevant or low-quality dialogue from influencing AI behavior
*the 

---


### Filter Rules

Each rule uses a **case-insensitive regex pattern**.

**Rule behavior:**
- If **Replacement is empty** → the dialogue line is **skipped**
- If **Replacement is provided** → the matched portion is **replaced**
- Regex anchors (`^` / `$`) may be used to match entire lines exactly

**if you dont use these anchors, over-filtering will occur! Meaning all included words, instead of the precise sentence!**

---


<p align="center">
  <img src="/SkyrimNet-GamePlugin/img/filter2.PNG" alt="construction" width="1200"/>
</p>

### Example Rules

#### `combat_grunts`
- **Pattern:**
  ```regex
  ^(Rrargh!|Hnargh!|Uunnff!|Yeaargh!)$

 
Skips pure combat grunt lines entirely.

---

#### Serana
**Pattern:**  
`^(That's it! Let's go.)$`

**Behavior:**  
Removes a repetitive vanilla bark spoken verbatim.

---

#### Taarie
**Pattern:**  
`if you're heading to the Blue Palace`

**Replacement:**  
`oh hello my dear`

**Behavior:**  
Rewrites part of a longer dialogue line to custom text.

---

### 🧪 Regex Simple Examples

**🔹 Exact text**
`hello`

**Matches:**
- `hello`
- `hello there`
- `oh hello`

---

**🔹 Exact whole line** 
`^hello$`

**Matches:**
- `hello`

**Does NOT match:**
- `hello there`
- `oh hello`

---

**🔹 One of several words**
`(cat|dog|wolf)`

**Matches:**
- `cat`
- `dog`
- `wolf`

