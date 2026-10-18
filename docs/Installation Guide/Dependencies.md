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

- **[Skyrim Script Extender (SKSE)]**  https://skse.silverlock.org/
- **[Address Library for SKSE Plugins]**  https://www.nexusmods.com/skyrimspecialedition/mods/32444
- **[PowerOfThree's Papyrus Extender]**   https://www.nexusmods.com/skyrimspecialedition/mods/22854
- **[PapyrusUtil SE]**  https://www.nexusmods.com/skyrimspecialedition/mods/13048
- **[Latest Microsoft Visual C++ Redistributable]**  https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170
- **[Native EditorID Fix]** https://www.nexusmods.com/skyrimspecialedition/mods/85260

---

## 🚀 CUDA Build Requirements (will slightly accelerate your STT whisper model)


- NVIDIA GPU with CUDA support - https://developer.nvidia.com/cuda-12-9-1-download-archive

 **CUDA Toolkit 12.x**  (⚠️ install version 12.xx **not the recent 13.xx**, or your dll wont start!!!)
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