import React from 'react';
import Layout from '@theme/Layout';

export default function FAQ() {
  return (
    <Layout title="FAQ">
      <div className="container padding-vert--lg">
        <h1>Frequently Asked Questions</h1>

       
       <h2>What is SkyrimNet?</h2>

        <p>
          <strong>SkyrimNet</strong> is a next-generation AI framework for Skyrim that enables 
          <strong> intelligent, dynamic, and immersive NPC behavior</strong> — all running entirely 
          <strong> in-process as a native DLL</strong>.
        </p>

        <p>
          Unlike traditional mods that rely on hardcoded dialogue trees or slow external servers, SkyrimNet uses 
          <strong> large language models (LLMs)</strong>, <strong>templated logic</strong>, and 
          <strong> real-time game state data</strong> to let NPCs:
        </p>

        <ul>
          <li>React naturally to your actions</li>
          <li>Remember and reference past events</li>
          <li>Carry on meaningful conversations</li>
          <li>Express desires, fears, or motivations, being shaped by them dynamically</li>
          <li>Perform actions on their own, according to their personality and situation </li>
        </ul>

        <p>
          Whether you're building a romance system, intelligent enemies, or dynamic questlines, SkyrimNet provides the 
          foundation for <strong>deep, lifelike AI behavior inside Skyrim</strong>.
        </p>
        
       
        <h2>What makes SkyrimNet different from other Skyrim AI mods?</h2>
        <p>
          SkyrimNet runs entirely <strong>in-process as a DLL</strong>, meaning it does <strong>not</strong> require any
          external servers, Python scripts, or WSL/Linux environments. This results in:
        </p>
        <ul>
          <li>Faster performance</li>
          <li>Lower system resource usage</li>
          <li>Real-time, memory-based AI reactions, fully costumizable</li>
          <li> Much simpler setup for modders and players</li>
          <li>The capacity to call upon any asset of the game, instantly, with the web ui</li>
          <li>Powerful but simple tools to create npc actions and behaviours without any coding skills </li>
        </ul>

        <h2>How does SkyrimNet handle AI decisions?</h2>
        <p>
          SkyrimNet uses <strong>LLM-driven prompts</strong> and <strong>smart decorators</strong> to evaluate in-game
          context and decide which NPC should respond and how. It selects responses dynamically — no rigid trees or
          fixed scripts required.
        </p>

        <h2>What are decorators in SkyrimNet?</h2>
        <p>
          Decorators are logic modules that:
        </p>
        <ul>
          <li>Add detailed context to actors, objects, or events</li>
          <li>Transform game data into LLM-friendly summaries</li>
          <li>Can be extended via <strong>Papyrus</strong> scripts</li>
        </ul>

          <h2>Does the SkyrimNet Web UI work without Skyrim running?</h2>
         <p>
         <strong>No</strong> — the <strong>SkyrimNet Web UI requires a running, loaded Skyrim game</strong> to function.
          </p>

          <p>
           This is because the Web UI is powered by <strong>live data streamed directly from the in-process DLL</strong>, allowing it to:
          </p>
          <ul>
         <li>Inspect real-time NPC states, locations, and memory</li>
          <li>Modify variables and trigger actions immediately</li>
          <li>Reflect the actual in-game world with full context</li>
          </ul>
          <p>
           While this means you can’t use the UI from your browser without Skyrim running, the tradeoff enables 
           <strong> unprecedented access and control</strong> over Skyrim’s systems — far beyond what’s possible with savefile parsing or offline tools.
           </p>
          <p>
           SkyrimNet’s Web UI is a <strong>live control surface for a living world</strong> — not a static modding interface.
          </p>
         <h2>Is SkyrimNet a paid mod or subscription service?</h2>
<p>
  <strong>No</strong> — <strong>SkyrimNet is a free, open passion project</strong>, the brainchild of a very talented developer, <strong>Min</strong>, who is building it out of love for Skyrim and AI-driven modding, aided by a small team of volunteer devs.
</p>
<p>
  You don’t need to pay anything to download, install, or use SkyrimNet. However, if you'd like to support the developer, you can do so via 
  <a href="https://ko-fi.com/minll" target="_blank" rel="noopener noreferrer"><strong>Ko-fi</strong></a>.    
</p>
<p>
  The only potential cost involved is usage of external <strong>LLMs (large language models)</strong>, which power the AI interactions. These may have minimal fees depending on the provider you choose — 
  but a single dollar often covers <strong>hours of in-game AI behavior</strong>, according to most LLM pricing estimates.
</p>
<p>
  SkyrimNet gives you access to deeply immersive AI-driven gameplay, without locking anything behind a paywall.
</p>
        <h2>Can I write SkyrimNet extensions using Papyrus?</h2>
        <p>
          Yes! SkyrimNet provides a <strong>Papyrus API</strong> to:
        </p>
        <ul>
          <li>Register custom decorators</li>
          <li>Handle event callbacks</li>
          <li>Extend behavior without C++</li>
        </ul>

        <h2>Are different models used in different situations?</h2>
        <p>
          Yes. SkyrimNet supports multiple LLM backends based on situation, such as:
        </p>
        <ul>
          <li><strong>Combat:</strong> fast, focused models</li>
          <li><strong>Dialogue:</strong> creative, expressive models</li>
          <li><strong>Meta:</strong> very fast and precise, for decison making</li>
        </ul>

        <h2>Does it poll game variables constantly?</h2>
        <p>
          No. SkyrimNet reads game data <strong>on demand</strong> during decoration. This makes it faster and avoids
          the overhead of constant polling.
        </p>
      </div>
    </Layout>
  );
}