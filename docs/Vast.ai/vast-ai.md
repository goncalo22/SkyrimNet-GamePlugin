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

### Make sure you have selected the preset config for your intended TTS, either xtts or zonos/higgs
<p align="center">
  <img src="/SkyrimNet-GamePlugin/img/presets.PNG" alt="vast" width="1200"/>
</p>




### click on the smart instance button, a search for the best offers will be done, using your presets and configuration
(use the refresh button if they dont seem to be appearing)



<p align="center">
  <img src="/SkyrimNet-GamePlugin/img/smart.PNG" alt="vast" width="600"/>
</p>



### A number of instances will be created, give it a minute or two, the system will flush out the unstable/worst ones and choose the best.



<p align="center">
  <img src="/SkyrimNet-GamePlugin/img/instances.PNG" alt="vast" width="1200"/>
</p>


### When the last, chosen instance is running click on "update TTS" that will save its endpoint adress, plugging it to skyrimnet.

<p align="center">
  <img src="/SkyrimNet-GamePlugin/img/running.PNG" alt="vast" width="1200"/>
</p>



### Thats it! Make sure the adressess match and you can test it. If using zonos the test may fail, even if properly setup, so just try it in-game.

<p align="center">
  <img src="/SkyrimNet-GamePlugin/img/sucess2.PNG" alt="vast" width="1200"/>
</p>




Vast.ai allows even low-end machines to offload heavy AI tasks to the cloud.
While locally XTTS makes the most sense to ensure you can fit both Skyrim and TTS in your VRAM, the Vast instance runs only the TTS engine (and optionally STT), therefore it's feasible to run more demanding Zonos or Higgs.
We recommend starting with Zonos (should be around $0.10/hr, pick a xx70 or xx80/xx90 GPU for best speed).
**if you had an xtts instance running and you now want change for a zonos one ( or vice-versa), make sure you destroy all instances and fully start the smart instance from scratch**
Optionally you can test Higgs TTS (experimental, may need more tinkering) from this template:
https://cloud.vast.ai?ref_id=159818&template_id=6aac6f66515a740d7040267daf874ea5
Keep Zonos settings in Skyrimnet just change the IP:port to the Higgs instance. It has the same API as Zonos from Skyrimnet point of view.

---

## 🔗 Learn More
- Official site: [https://vast.ai](https://vast.ai)
- Docs: [https://docs.vast.ai](https://docs.vast.ai)
- Community: [Discord](https://discord.gg/9jFa5Gdxq3)
