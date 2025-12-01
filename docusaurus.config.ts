import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'SkyrimNet Documentation',
  tagline: 'lets try this',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://goncalo22.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/SkyrimNet-GamePlugin/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'goncalo22', // Usually your GitHub org/user name.
  projectName: 'SkyrimNet-GamePlugin', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: false,
        
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/goncalo22/SkyrimNet-GamePlugin/edit/main/blog/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
plugins: [
  [
    '@docusaurus/plugin-content-docs',
    {
      id: 'default',
      path: 'docs',
      routeBasePath: '/',
      sidebarPath: require.resolve('./sidebars.ts'),
      editUrl: 'https://github.com/goncalo22/SkyrimNet-GamePlugin/edit/main/',
    },
  ],

  // ⭐ Add this block for image zoom
  [
    'docusaurus-plugin-image-zoom',
    {
      selector: '.markdown img',
      options: {
        margin: 24,
        background: '#000',
        scrollOffset: 0,
      },
    },
  ],
],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/Skyrimnet svg wborder icon.svg',

 metadata: [
      {
        name: 'algolia-site-verification',
        content: '24A26FDBCAD11C73',
      },
    ],


    navbar: {
      title: 'SkyrimNet',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logogreen.png',
      },
      items: [
  {
    type: 'docSidebar',
    sidebarId: 'tutorialSidebar',
    position: 'left',
    label: 'Tutorial',
  },
   {
    type: 'docSidebar',
    sidebarId: 'apiSidebar',
    position: 'left',
    label: 'API',
  },
  {
    to: '/web-ui',
    label: 'Web UI',
    position: 'left'
  },
  {
    to: '/walkthroughs',
    label: 'Walkthroughs',
    position: 'left'
  },
   {
    to: '/action-repository',
    label: 'Action Repository',
    position: 'left'
  },
   {
    to: '/trigger-repository',
    label: 'Trigger Repository',
    position: 'left'
  },
  {
    to: '/mod-integrations',
    label: 'Mod Integrations',
    position: 'left'
  },
 {
    to: '/customizations',
    label: 'Customizations',
    position: 'left'
  }, 
  {
    to: '/blog',
    label: 'Releases',
    position: 'left'
  },
  {
    to: '/faq',
    label: 'FAQ',
    position: 'left'
  },
   {
    to: '/troubleshooting',
    label: 'Troubleshooting',
    position: 'left'
  },
   {
      type: 'html',
      position: 'right',
      value: '<div id="docsearch"></div>',
    }, 
  {
    href: 'https://github.com/MinLL/SkyrimNet-GamePlugin',
    label: 'GitHub',
    position: 'right'
  }
],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'X',
              href: 'https://x.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Nexus Mods',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/MinLL/SkyrimNet-GamePlugin',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} SkyrimNet, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
