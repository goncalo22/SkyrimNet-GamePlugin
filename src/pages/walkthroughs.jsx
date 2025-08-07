import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl'; // ✅ Required for GitHub Pages asset paths

export default function Walkthrough() {
  return (
    <Layout title="Walkthrough" description="SkyrimNet Features Guides">
      <div style={{ padding: '2rem' }}>
        <h1>Walkthroughs</h1>
        <p>
          click on the picture to acess the step by step video tutorials related to each set of features.
        </p>

        <div
          style={{
            display: 'flex',
            gap: '2rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginTop: '2rem',
          }}
        >
          {/* Card 1 */}
          <div style={{ textAlign: 'center', width: '300px' }}>
            <a
              href="https://example.com/skreact"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={useBaseUrl('/img/dragonborn.png')}
                alt="SK React Guide"
                style={{ width: '100%', borderRadius: '8px' }}
              />
            </a>
            <h2>Player Configuration</h2>
            <p style={{ marginTop: '0.5rem' }}>
              Fully customize the player voice, dialogue, reactions and even his inner thoughts. Have a fully featured Narrator tell your epic story, as it unfolds
            </p>
          </div>

          {/* Card 2 */}
          <div style={{ textAlign: 'center', width: '300px' }}>
            <Link to="/gamedatacenter">
              <img
                src={useBaseUrl('/img/magedragon.png')}
                alt="Mage and Dragon"
                style={{ width: '100%', borderRadius: '8px' }}
              />
            </Link>
            <h2>Custom Context Editor</h2>
            <p style={{ marginTop: '0.5rem' }}>
              Integrate spells, items and much more with Game Data Manager, making the AI see them, use them and react to them, as you want, when you want.
            </p>
          </div>

          {/* Card 3 */}
<div style={{ textAlign: 'center', width: '300px' }}>
  <Link to="/characterbios">
    <img
      src={useBaseUrl('/img/followers2.png')}
      alt="Dialogue Engine"
      style={{ width: '100%', borderRadius: '8px' }}
    />
  </Link>
  <h2>Character Bios Setups</h2>
  <p style={{ marginTop: '0.5rem' }}>
    Easily access and edit more than 3000 lore-accurate characters; their detailed bios will evolve dynamically as you play. Generate full bios automatically for custom NPCs.
  </p>
</div>

          {/* Card 4 */}
          <div style={{ textAlign: 'center', width: '300px' }}>
            <a
              href="https://example.com/memory"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={useBaseUrl('/img/npcs.png')}
                alt="NPC Memory"
                style={{ width: '100%', borderRadius: '8px' }}
              />
            </a>
            <h2>NPC Configuration</h2>
            <p style={{ marginTop: '0.5rem' }}>
              Use the overrides system to easily customize any npc, individually or by groups, giving them different LLMs, voices and settings
            </p>
          </div>

          {/* Card 5 */}
          <div style={{ textAlign: 'center', width: '300px' }}>
         <Link to="/costumactions">
    <img
      src={useBaseUrl('/img/actions.png')}
      alt="Dialogue Engine"
      style={{ width: '100%', borderRadius: '8px' }}
    />
  </Link>
            <h2>Custom Action System</h2>
            <p style={{ marginTop: '0.5rem' }}>
              Search Quests and use their working functions to easily create actions that the ai npcs can autonomously use. Make your game truly come to life!
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}