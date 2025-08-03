---
id: whisper-openai
title: Whisper openai
displayed_sidebar: tutorialSidebar
---

# 🗣️ OpenAI Whisper (Online STT)
SkyrimNet supports OpenAI Whisper as a cloud-based speech-to-text (STT) service. When enabled, this mode sends your microphone input to OpenAI’s servers for transcription, and receives highly accurate text in return.

This allows SkyrimNet to interpret your spoken dialogue, commands, or roleplay voice lines in real time—driving dynamic in-game responses and interactions with AI-powered NPCs.

## 🌐 Key Features
✅ High accuracy — Uses OpenAI’s latest large-v3 Whisper model hosted in the cloud.

🌍 Multilingual support — Can recognize and transcribe dozens of spoken languages.

🧠 Zero setup — No model downloads, no local GPU needed. Works out of the box with an OpenAI API key.

🎮 Fully integrated — Transcribed speech is processed the same as text input in SkyrimNet, enabling actions, dialogue, and memory events.

## ⚠️ Requirements
A valid OpenAI API key (set in your SkyrimNet config).

An active internet connection during gameplay.

Microphone access enabled.

## 🔄 When to Use Online STT
Choose OpenAI Whisper if:

You want the highest possible accuracy for spoken commands.

You don’t have a GPU capable of running local models.

You need support for languages other than English.

You’re okay with sending your audio to OpenAI for processing.

For full privacy or offline play, use Local Whisper STT instead.

## 🔧 How to Set Up OpenAI Whisper STT in SkyrimNet

### Step 1: Get Your OpenAI API Key

 Go to https://platform.openai.com/account/api-keys.

 Log in or sign up for a free OpenAI account.

 Click “Create new secret key”.

 Copy the key (it looks like sk-...) — you won’t be able to see it again later.

### Step 2: Add the API Key to SkyrimNet
Open SkyrimNet's Configuration Manager.

Navigate to:
STT → External Whisper API.

Paste your API key into the API Key field.

Make sure the API Endpoint is set to:

https://api.openai.com/v1/audio/transcriptions
Use the default model name:


whisper-1
Optional: Adjust the API Timeout (default is 30000 ms).

Click Save Configuration at the top right.

## ✅ You're Done!
Now, when SkyrimNet STT is enabled and configured to use OpenAI, your spoken dialogue will be transcribed using the cloud-based Whisper API.