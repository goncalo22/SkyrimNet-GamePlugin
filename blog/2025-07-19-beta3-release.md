---
title: SkyrimNet Beta3  Released
description: SkyrimNet Beta3
tags: [release, beta3]
---
🎉  SkyrimNet Beta 3 Latest
<!--truncate-->

# 🛠️ SkyrimNet Beta 3 Changelog

[📥 Download Beta 3 on GitHub](https://github.com/MinLL/SkyrimNet-GamePlugin/releases/tag/Beta3)

---

## 🐛 Important Bug Fixes

- **Locale Support:**  
  The mod now correctly handles locales where commas are used instead of periods for decimal values (e.g. France, Germany).  
  > ⚠️ **Recommendation:** If you're using one of these locales, delete all existing configs. Some configurations may have invalid decimal formatting that breaks functionality (e.g. facial animations not working).

- **Zonos UI Tests Fixed:**  
  Resolved test failures in the Zonos web interface.

- **Virtual Entity Support for Zonos:**  
  Zonos now fully supports virtual entities (e.g. narrator, player thoughts).

- **Narrator Voice Fix:**  
  Default narrator voice is now correctly set to **Serana** voice type.

- **Conversation Pausing:**  
  Fixed bug that caused Piper-style rapid-fire responses. There is now a short pause between dialogue segments.

- **Event Registration Fix:**  
  API now properly handles unknown event types during registration.

- **Miscellaneous Fixes:**  
  Other small bug fixes and improvements.

---

## ⚡ Performance & Optimization

- **Significant Latency Reduction in Dialogue Generation:**  
  A major optimization was implemented for how events are retrieved during dialogue.  
  - **Performance Boost:** ~500–1000ms reduction in response time during heavy load
  - **Technical Note:** Event retrieval improved from **O(n)** to **O(1)** complexity

---

## ✨ Enhancements

- **Decorator Enhancements:**
  - New decorators: `has_spell` and `has_magic_effect`  
    > These will enable deeper roleplay and integration (e.g. reacting to Calm/Fury spells)

- **Persistent Context History:**  
  Now includes all events marked as persistent, excluding only explicitly blacklisted types.

- **`isTimePaused` Variable (All Builds):**  
  Added to prevent decorators from firing while the Skyrim VM is paused (useful for modders).

- **Proximity Tweaks:**
  - **Line of Sight Radius** lowered to **350** units (from 500).  
    > Makes NPC awareness slightly more realistic and less permissive.

- **Zonos Caching Improvements:**  
  Boosted cache performance and reliability in Zonos.

- **Prompt System Tweaks:**  
  Various internal adjustments to prompt structures for better clarity and flow.

- **Dynamic Bio Tuning:**  
  Improved compatibility with more LLMs and reduced aggressiveness in pruning historical content.

- **Test Coverage Refactor:**  
  Internal systems were refactored for better unit testing and bug prevention.

- **C++ API for Modders:**  
  New **C++ API** introduced to allow other SKSE plugins to interact directly with SkyrimNet.  
  > 📘 Docs coming soon!

---

🧠 SkyrimNet continues to evolve rapidly, enabling deeper immersion, faster interaction, and a more intelligent modding experience.

➡️ [Download Beta 3 now](https://github.com/MinLL/SkyrimNet-GamePlugin/releases/tag/Beta3)

We appreciate your feedback and support!