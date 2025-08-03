---
id: skyrimnet-installation
title: SkyrimNet Installation
displayed_sidebar: tutorialSidebar
---

# 🚀 Getting Started

SkyrimNet is easy to set up and flexible to use, whether you're running it locally or leveraging cloud services.

---

## 📦 Installation

Download the latest release from:  
👉 [SkyrimNet Releases on GitHub](https://github.com/MinLL/SkyrimNet-GamePlugin/releases)

You’ll see **two versions** — choose **one** based on your system:

- **🎮 CUDA Build**  
  Use this if you have an **NVIDIA graphics card**.  
  Includes Whisper STT locally and improves performance of some components.

- **🧩 Universal Build**  
  Use this if you **don’t have an NVIDIA GPU**, or plan to use Whisper remotely via **Vast.ai**, **OpenAI**, or **text input only**.

> 📥 Install the downloaded `.zip` as a **mod** via your mod manager (e.g., MO2 or Vortex).

---

## ⚙️ Requirements

You **must install** all dependencies listed in:  
🔗 [System Requirements](https://github.com/MinLL/SkyrimNet-GamePlugin?tab=readme-ov-file#-system-requirements)

- For **CUDA users**, make sure to install the **CUDA Toolkit** and **restart your PC** after installing — this is crucial.  
- Check the **Version-Specific Requirements** section for compatibility if using **Skyrim VR** or an older version.

---

## 🗣️ Piper TTS Models (Optional)

> Skip this if you’re not using **Piper TTS**.

SkyrimNet uses **Piper** as the default speech generation system, but models are downloaded separately.

🔗 [Download Piper models from Google Drive](https://drive.google.com/file/d/1zmBJCLlaGWKBW8Z87rw2MiaNE-8cdSlv/view)

📦 Install them as a **separate mod** in your mod manager.

---

## 🧪 Setup

1. Launch the game
2. Open the **SkyrimNet MCM**
3. Go to the **Overview tab**
4. Click the **Web UI link** to open the in-game control panel

> 💡 The web UI includes a built-in tutorial to help you get started.

If you want to skip setup and test immediately:
- Enter your **OpenRouter API key** in the **Test & Easy Setup** section.

---

## 🔄 Updating

Follow any **update instructions** included with the release.

> ⚠️ Important: Custom prompt files **outside** of the `/characters/` folder and the **world settings file** may be **overwritten** by updates.

To preserve your changes:
- **Back up** your `SkyrimNet/prompts` folder if you’ve made edits.

If no special instructions are provided:
- Just **download the latest release** and **merge it** into your existing SkyrimNet mod installation via your mod manager.

---




