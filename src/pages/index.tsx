import React from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout title="SkyrimNet Docs" description="AI-driven Skyrim framework">
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to SkyrimNet Docs</h1>

        <img
          src="/img/Sk animated.gif" // Place your image in static/img/
          alt="SkyrimNet Banner"
          className={styles.banner}
          style={{ width: '450px' }} // Increase or adjust as needed
        />

        <div className={styles.features}style={{ marginTop: '5rem' }}>
          <section>
            <img src="/img/mdx.png" alt="" />
            <h2>Powered by MDX</h2>
            <p>
              Write docs and blog posts in Markdown + JSX. Docusaurus builds them into static HTML files.
            </p>
          </section>
          <section>
            <img src="/img/magedragon.png" alt="" />
            <h2>Built Using React</h2>
            <p>
              Extend your site using React. Reuse data and create dynamic layouts.
            </p>
          </section>
          <section>
            <img src="/img/translation.png" alt="" />
            <h2>Ready for Translations</h2>
            <p>
              Easily localize your documentation using tools like Crowdin.
            </p>
          </section>
        </div>
      </main>
    </Layout>
  );
}


