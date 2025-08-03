import React from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl'; // ✅ Import helper

export default function Home() {
  return (
    <Layout
      title="SkyrimNet Docs"
      description="AI-driven Skyrim framework"
    >
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to SkyrimNet Docs</h1>

        <img
          src={useBaseUrl('/img/animated.gif')}
          alt="SkyrimNet Banner"
          className={styles.banner}
          style={{ width: '450px' }}
        />

        <div className={styles.features} style={{ marginTop: '5rem' }}>
          <section>
            <img src={useBaseUrl('/img/mdx.png')} alt="MDX" />
            <h2>Powered by MDX</h2>
            <p>
              Write docs and blog posts in Markdown + JSX. Docusaurus builds them into static HTML files.
            </p>
          </section>

          <section>
            <img src={useBaseUrl('/img/magedragon.png')} alt="React" />
            <h2>Built Using React</h2>
            <p>
              Extend your site using React. Reuse data and create dynamic layouts.
            </p>
          </section>

          <section>
            <img src={useBaseUrl('/img/translation.png')} alt="Translation" />
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
