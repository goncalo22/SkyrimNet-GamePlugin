---
id: local-whisper
title: Local Whisper
displayed_sidebar: tutorialSidebar
---

# 🗣️ Local Whisper STT (Speech-to-Text)


<p align="center">
  <img src="/SkyrimNet-GamePlugin/img/whisper.png" alt="whisper" width="400"/>
</p>


Local Whisper STT is SkyrimNet’s offline speech recognition system, powered by OpenAI’s open-source Whisper model. It enables players to press a key and speak naturally through a microphone, it then converts their voice into text entirely on-device, with no audio ever sent to the cloud.

This system is ideal for immersive AI interactions—letting NPCs understand spoken commands, dialogue, or emotions, all while preserving user privacy.

🔍 Key Features
✅ Privacy-first: All audio is processed locally—no external servers involved.

⚡ Real-time transcription: Whisper runs directly inside SkyrimNet for fast, fluid speech recognition.

🧠 Skyrim-tuned models: Supports multiple local models, including a fine-tuned large.en.bin trained on Skyrim-specific vocabulary (e.g. dragon shouts, place names, lore terms).

🎮 Gameplay integration: Voice input is treated the same as text—usable for actions, dialogue, or mod-driven behaviors.

## 📦 Model Options

SkyrimNet supports the following Whisper model variants:

| Model Name                | Size              | Description                                  |
|---------------------------|-------------------|----------------------------------------------|
| `ggml-base.en.bin`        | Small             | Lightweight English-only model, fast         |
| `ggml-medium.en.bin`      | Medium            | Higher accuracy, moderate performance        |
| `ggml-large.en.bin`       | Large             | Highest accuracy, slower                     |
| `ggml-large.en-skyrim.bin`| Large (fine-tuned)| Custom-trained for Skyrim terminology        |


## ⚠️ Performance Requirements
Local Whisper is GPU-accelerated and requires NVIDIA CUDA for real-time use.
Running Whisper on CPU is not supported in production—performance is insufficient for live gameplay transcription.

Minimum GPU: NVIDIA GTX 1060 or better (6GB+ VRAM recommended).

## ⚙️ How to Enable

If you are using the CUDA version an automatic download of the `ggml-large.en-skyrim.bin`  will commence, as soon you as you start the game with skyrimnet for the first time. Give it some time to complete.

 or alternativey drop your desired Whisper model (e.g. ggml-large.en-skyrim.bin) into SkyrimNet/models/.

Set stt.enabled = true in your SkyrimNet config YAML.

Speak through your microphone—transcription will appear in SkyrimNet logs and drive in-game responses if voice routing is configured.



