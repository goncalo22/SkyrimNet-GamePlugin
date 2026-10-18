import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl'; // ✅ Required for GitHub Pages asset paths
import styles from "./walkthroughs.module.css";

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
<div className={styles.card}>
  <Link to="/player-configuration">
    <img
      src={useBaseUrl('/img/dragonborn.png')}
      alt="Player Configuration"
      loading="lazy"
    />
  </Link>

  <h2>Player Configuration</h2>
  <p style={{ marginTop: '0.5rem' }}>
    Fully customize the player voice, dialogue, reactions and even his inner thoughts. Have a fully featured Narrator tell your epic story, as it unfolds.
  </p>
</div>

          {/* Card 2 */}
          <div className={styles.card}>
            <Link to="/gamedatacenter">
              <img
                src={useBaseUrl('/img/magedragon.png')}
                alt="Mage and Dragon"
                loading="lazy"
              />
            </Link>
            <h2>Custom Context Editor</h2>
            <p style={{ marginTop: '0.5rem' }}>
              Integrate spells, items and much more with Game Data Manager, making the AI see them, use them and react to them, as you want, when you want.
            </p>
          </div>

          {/* Card 3 */}
<div className={styles.card}>
  <Link to="/characterbios">
    <img
      src={useBaseUrl('/img/bios.png')}
      alt="Dialogue Engine"
      loading="lazy"
    />
  </Link>
  <h2>Character Bios Setups</h2>
  <p style={{ marginTop: '0.5rem' }}>
    Easily access and edit more than 3000 lore-accurate characters; their detailed bios will evolve dynamically as you play. Generate full bios automatically for custom NPCs.
  </p>
</div>

        {/* Card 4 */}
<div className={styles.card}>
  <Link to="/npc-configuration">
    <img
      src={useBaseUrl('/img/npcs2.png')}
      alt="NPC Configuration"
      loading="lazy"
    />
  </Link>

  <h2>NPC Configuration</h2>
  <p style={{ marginTop: '0.5rem' }}>
    Use the overrides system to easily customize any NPC, individually or by groups, giving them different LLMs, voices and settings.
  </p>
</div>

         {/* Card 5 */}
<div className={styles.card}>
  <Link to="/custom-actions">
    <img
      src={useBaseUrl('/img/repository.png')}
      alt="Custom Actions"
      loading="lazy"
    />
  </Link>

  <h2>Custom Actions</h2>
  <p style={{ marginTop: '0.5rem' }}>
    Create custom actions that allow NPCs to interact with the world in new ways.
  </p>
</div>

{/* Card 6 */}
          <div className={styles.card}>
         <Link to="/conversations">
    <img
      src={useBaseUrl('/img/conversation.png')}
      alt="Dialogue Engine"
      loading="lazy"
    />
  </Link>
            <h2>Conversation System</h2>
            <p style={{ marginTop: '0.5rem' }}>
              Make even the most complex conversations, with many npcs, truly dynamic!
            </p>
          </div>

        </div>
      </div>
    </Layout>
  );
}