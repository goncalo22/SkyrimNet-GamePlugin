---
id: universal-translator
title: Universal Translator
displayed_sidebar: tutorialSidebar
---


<p align="center">
  <img src="/SkyrimNet-GamePlugin/img/translator2.png" alt="dialogue" width="500"/>
</p>



Completely reimagine Skyrim’s dialogue. Universal Translator transforms both vanilla *and* modded lines using custom speech patterns, along with awareness of each NPC’s bio and recent events.

Want Imperials to sound like city folk and Stormcloaks like Southern rebels? Think High Elves should speak Chinese, or Wood Elves Spanish? Want Lucan to talk like a certain real-estate mogul? That’s all possible now.


- **Total dialogue replacement**  
  Never hear the original vanilla dialogue again—unless you explicitly allow it.

- **Culture, class, and identity through speech**  
  - Imperials as refined city folk  
  - Stormcloaks with Southern-style rural accents  
  - High Elves speaking Chinese  
  - Wood Elves speaking Spanish  

- **Targeted personality overrides**  
  Want Lucan Valerius to talk like a certain bombastic real-estate mogul?  
  You can do that. Precisely. And only for him.

- **Context-aware rewriting**  
  Dialogue is rewritten with awareness of:
  - NPC bios (race, faction, role, personality)
  - Recent memories and world events
  - The player’s actions and reputation


<p align="center">
  <img src="/SkyrimNet-GamePlugin/img/translator.PNG" alt="dialogue" width="800"/>
</p>

### How it works

Using the **Universal Translator** page in the **Customization** menu, you define ordered transformation rules that apply to:

- 🌍 Global (all NPCs)  
- 🧬 Races  
- 🛡️ Factions  
- 👤 Individual NPCs  




Rules are evaluated **top-first**, enabling precise whitelists, blacklists, and overrides.

When an NPC speaks:
1. The original voice line is muted  
2. The dialogue is rewritten to match the configured speech pattern  
3. The new line is spoken using TTS  

All without editing dialogue records or patching mods.