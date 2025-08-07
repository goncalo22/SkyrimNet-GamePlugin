---
id: dependencies
title: Dependencies
displayed_sidebar: tutorialSidebar
---
# 🖥️ System Requirements

SkyrimNet depends on several tools and libraries to function effectively, both for regular gameplay and optional GPU acceleration.

---

## 🔧 Essential Dependencies

These are required for SkyrimNet to function at all:

- **[Skyrim Script Extender (SKSE)]**  
- **[Address Library for SKSE Plugins]**  
- **[PowerOfThree's Papyrus Extender]**  
- **[Latest Microsoft Visual C++ Redistributable]**  
- **[Native EditorID Fix]**

---

## 🚀 CUDA Build Requirements (Maximum Performance)

If you're using the **CUDA-accelerated build**, the following is **required**:

- NVIDIA GPU with CUDA support  
- **CUDA Toolkit 12.x**  
  > ⚠️ _SkyrimNet **will not launch** with the CUDA build unless this is installed!_

---

## 📋 Optional Dependencies

- **UIExtensions**  
  Required for in-game **text input** and the **Input Wheel** UI.

---

## 🎮 Version-Specific Requirements

### For Skyrim SE (without ESL support)
- **Backported Extended ESL Support (BEES)**

### For Skyrim VR
- **Skyrim VR ESL Support** (Use this **instead** of BEES)
> ⚠️ _CUDA Toolkit is still required if using the CUDA build._

---

## 🌐 External API Requirements

- **LLM Provider:**  
  [OpenRouter API Key](https://openrouter.ai)  
  (or any compatible OpenAI-style API)

- **Cloud GPU Access (Optional):**  
  [Vast.ai Account](https://vast.ai)  
  Used for **remote GPU inference** and **automated TTS provisioning**

---