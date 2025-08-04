---
id: vast-ai
title: Vast ai
displayed_sidebar: tutorialSidebar
---

# ☁️ Vast.ai – Smart Cloud Compute

<p align="center">
  <img src="/SkyrimNet-GamePlugin/img/vast.png" alt="vast" width="400"/>
</p>


**Vast.ai** is a marketplace for renting GPU computing power at low cost from providers around the world. It's widely used for AI, machine learning, 3D rendering, and other compute-heavy tasks — including real-time voice synthesis and LLM inference. It allows you to have high quality STT and TTS for SkyrimNet for $0.07-$0.15 per hour of use (billed by the minute, only when playing).

---

## ⚡ Key Features

- ✅ **Cheap GPU Access** – Pay-as-you-go, starting as low as ~$0.07/hour
- 🔍 **Smart Filtering** – Filter by GPU type (A100, 4090, etc.), RAM, disk, bandwidth
- 🚀 **Fast Launch** – Deploy instances in under 60 seconds
- 📡 **Port Forwarding** – Easily expose ports to access web UIs or APIs
- 🔧 **Custom Images** – Run any Dockerhub container, or configure your own template
- 🧠 **AI-Ready** – Prebuilt images for PyTorch, TensorFlow, Whisper, XTTS, etc.

---

## 🎮 Uses in SkyrimNet

In the context of **SkyrimNet**, Vast.ai can be used to:

- 🗣️ Run **XTTS or Zonos or Higgs TTS** remotely for real-time voice generation and included speech-to-text


This allows even low-end machines to offload heavy AI tasks to the cloud.
While locally XTTS makes the most sense to ensure you can fit both Skyrim and TTS in your VRAM, the Vast instance runs only the TTS engine (and optionally STT), therefore it's feasible to run more demanding Zonos or Higgs.
We recommend starting with Zonos (should be around $0.10/hr, pick a xx70 or xx80/xx90 GPU for best speed).
Optionally you can test Higgs TTS (experimental, may need more tinkering) from this template:
https://cloud.vast.ai?ref_id=159818&template_id=6aac6f66515a740d7040267daf874ea5
Keep Zonos settings in Skyrimnet just change the IP:port to the Higgs instance. It has the same API as Zonos from Skyrimnet point of view.

---

## 🔗 Learn More
- Official site: [https://vast.ai](https://vast.ai)
- Docs: [https://docs.vast.ai](https://docs.vast.ai)
- Community: [Discord](https://discord.gg/9jFa5Gdxq3)
