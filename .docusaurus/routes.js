import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/SkyrimNet-GamePlugin/__docusaurus/debug',
    component: ComponentCreator('/SkyrimNet-GamePlugin/__docusaurus/debug', '075'),
    exact: true
  },
  {
    path: '/SkyrimNet-GamePlugin/__docusaurus/debug/config',
    component: ComponentCreator('/SkyrimNet-GamePlugin/__docusaurus/debug/config', '78b'),
    exact: true
  },
  {
    path: '/SkyrimNet-GamePlugin/__docusaurus/debug/content',
    component: ComponentCreator('/SkyrimNet-GamePlugin/__docusaurus/debug/content', '627'),
    exact: true
  },
  {
    path: '/SkyrimNet-GamePlugin/__docusaurus/debug/globalData',
    component: ComponentCreator('/SkyrimNet-GamePlugin/__docusaurus/debug/globalData', 'bd9'),
    exact: true
  },
  {
    path: '/SkyrimNet-GamePlugin/__docusaurus/debug/metadata',
    component: ComponentCreator('/SkyrimNet-GamePlugin/__docusaurus/debug/metadata', '6ae'),
    exact: true
  },
  {
    path: '/SkyrimNet-GamePlugin/__docusaurus/debug/registry',
    component: ComponentCreator('/SkyrimNet-GamePlugin/__docusaurus/debug/registry', 'f1b'),
    exact: true
  },
  {
    path: '/SkyrimNet-GamePlugin/__docusaurus/debug/routes',
    component: ComponentCreator('/SkyrimNet-GamePlugin/__docusaurus/debug/routes', '982'),
    exact: true
  },
  {
    path: '/SkyrimNet-GamePlugin/characterbios',
    component: ComponentCreator('/SkyrimNet-GamePlugin/characterbios', 'cea'),
    exact: true
  },
  {
    path: '/SkyrimNet-GamePlugin/customactions',
    component: ComponentCreator('/SkyrimNet-GamePlugin/customactions', 'd9c'),
    exact: true
  },
  {
    path: '/SkyrimNet-GamePlugin/FAQ',
    component: ComponentCreator('/SkyrimNet-GamePlugin/FAQ', '94e'),
    exact: true
  },
  {
    path: '/SkyrimNet-GamePlugin/gamedatacenter',
    component: ComponentCreator('/SkyrimNet-GamePlugin/gamedatacenter', '437'),
    exact: true
  },
  {
    path: '/SkyrimNet-GamePlugin/markdown-page',
    component: ComponentCreator('/SkyrimNet-GamePlugin/markdown-page', 'd29'),
    exact: true
  },
  {
    path: '/SkyrimNet-GamePlugin/overrides',
    component: ComponentCreator('/SkyrimNet-GamePlugin/overrides', '034'),
    exact: true
  },
  {
    path: '/SkyrimNet-GamePlugin/playerconfiguration',
    component: ComponentCreator('/SkyrimNet-GamePlugin/playerconfiguration', 'de9'),
    exact: true
  },
  {
    path: '/SkyrimNet-GamePlugin/walkthroughs',
    component: ComponentCreator('/SkyrimNet-GamePlugin/walkthroughs', '393'),
    exact: true
  },
  {
    path: '/SkyrimNet-GamePlugin/web-ui',
    component: ComponentCreator('/SkyrimNet-GamePlugin/web-ui', '869'),
    exact: true
  },
  {
    path: '/SkyrimNet-GamePlugin/',
    component: ComponentCreator('/SkyrimNet-GamePlugin/', 'c7a'),
    exact: true
  },
  {
    path: '/SkyrimNet-GamePlugin/',
    component: ComponentCreator('/SkyrimNet-GamePlugin/', '992'),
    routes: [
      {
        path: '/SkyrimNet-GamePlugin/',
        component: ComponentCreator('/SkyrimNet-GamePlugin/', '8ea'),
        routes: [
          {
            path: '/SkyrimNet-GamePlugin/',
            component: ComponentCreator('/SkyrimNet-GamePlugin/', '08b'),
            routes: [
              {
                path: '/SkyrimNet-GamePlugin/Features/action-system',
                component: ComponentCreator('/SkyrimNet-GamePlugin/Features/action-system', '998'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/SkyrimNet-GamePlugin/Features/events-and-reactions',
                component: ComponentCreator('/SkyrimNet-GamePlugin/Features/events-and-reactions', 'a51'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/SkyrimNet-GamePlugin/Features/Gamedatacenter',
                component: ComponentCreator('/SkyrimNet-GamePlugin/Features/Gamedatacenter', '621'),
                exact: true
              },
              {
                path: '/SkyrimNet-GamePlugin/Features/gamemaster',
                component: ComponentCreator('/SkyrimNet-GamePlugin/Features/gamemaster', '07c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/SkyrimNet-GamePlugin/Features/Item and Spell Customization',
                component: ComponentCreator('/SkyrimNet-GamePlugin/Features/Item and Spell Customization', '0a7'),
                exact: true
              },
              {
                path: '/SkyrimNet-GamePlugin/Features/overview',
                component: ComponentCreator('/SkyrimNet-GamePlugin/Features/overview', '8ac'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/SkyrimNet-GamePlugin/Features/player-dialogue',
                component: ComponentCreator('/SkyrimNet-GamePlugin/Features/player-dialogue', 'e1d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/SkyrimNet-GamePlugin/Installation Guide/dependencies',
                component: ComponentCreator('/SkyrimNet-GamePlugin/Installation Guide/dependencies', 'bb2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/SkyrimNet-GamePlugin/Installation Guide/skyrimnet-installation',
                component: ComponentCreator('/SkyrimNet-GamePlugin/Installation Guide/skyrimnet-installation', '795'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/SkyrimNet-GamePlugin/intro',
                component: ComponentCreator('/SkyrimNet-GamePlugin/intro', 'd39'),
                exact: true
              },
              {
                path: '/SkyrimNet-GamePlugin/Large Language Models/model-agents',
                component: ComponentCreator('/SkyrimNet-GamePlugin/Large Language Models/model-agents', '878'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/SkyrimNet-GamePlugin/Large Language Models/openrouter',
                component: ComponentCreator('/SkyrimNet-GamePlugin/Large Language Models/openrouter', 'd45'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/SkyrimNet-GamePlugin/Large Language Models/suggested-llms',
                component: ComponentCreator('/SkyrimNet-GamePlugin/Large Language Models/suggested-llms', 'c47'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/SkyrimNet-GamePlugin/Memory System/memory-recall',
                component: ComponentCreator('/SkyrimNet-GamePlugin/Memory System/memory-recall', '69f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/SkyrimNet-GamePlugin/Memory System/sqlite-storage',
                component: ComponentCreator('/SkyrimNet-GamePlugin/Memory System/sqlite-storage', '9fc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/SkyrimNet-GamePlugin/Mod Integrations',
                component: ComponentCreator('/SkyrimNet-GamePlugin/Mod Integrations', '156'),
                exact: true
              },
              {
                path: '/SkyrimNet-GamePlugin/NPC Bios/Bios Generation',
                component: ComponentCreator('/SkyrimNet-GamePlugin/NPC Bios/Bios Generation', 'e2d'),
                exact: true
              },
              {
                path: '/SkyrimNet-GamePlugin/NPC Bios/dynamic-bios',
                component: ComponentCreator('/SkyrimNet-GamePlugin/NPC Bios/dynamic-bios', '20e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/SkyrimNet-GamePlugin/NPC Bios/static-bios',
                component: ComponentCreator('/SkyrimNet-GamePlugin/NPC Bios/static-bios', '650'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/SkyrimNet-GamePlugin/Prompts/prompts',
                component: ComponentCreator('/SkyrimNet-GamePlugin/Prompts/prompts', '09f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/SkyrimNet-GamePlugin/Skyrimnet API/api',
                component: ComponentCreator('/SkyrimNet-GamePlugin/Skyrimnet API/api', 'a98'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/SkyrimNet-GamePlugin/Skyrimnet API/decorators',
                component: ComponentCreator('/SkyrimNet-GamePlugin/Skyrimnet API/decorators', 'd1e'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/SkyrimNet-GamePlugin/Skyrimnet API/library',
                component: ComponentCreator('/SkyrimNet-GamePlugin/Skyrimnet API/library', '8e7'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/SkyrimNet-GamePlugin/Speech to Text/local-whisper',
                component: ComponentCreator('/SkyrimNet-GamePlugin/Speech to Text/local-whisper', '0f2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/SkyrimNet-GamePlugin/Speech to Text/whisper-openai',
                component: ComponentCreator('/SkyrimNet-GamePlugin/Speech to Text/whisper-openai', '470'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/SkyrimNet-GamePlugin/Text to Speech/piper',
                component: ComponentCreator('/SkyrimNet-GamePlugin/Text to Speech/piper', 'd95'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/SkyrimNet-GamePlugin/Text to Speech/tts-getting-started',
                component: ComponentCreator('/SkyrimNet-GamePlugin/Text to Speech/tts-getting-started', '438'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/SkyrimNet-GamePlugin/Text to Speech/xtts',
                component: ComponentCreator('/SkyrimNet-GamePlugin/Text to Speech/xtts', 'b25'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/SkyrimNet-GamePlugin/Text to Speech/zonos',
                component: ComponentCreator('/SkyrimNet-GamePlugin/Text to Speech/zonos', 'f6e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/SkyrimNet-GamePlugin/Vast.ai/images',
                component: ComponentCreator('/SkyrimNet-GamePlugin/Vast.ai/images', '681'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/SkyrimNet-GamePlugin/Vast.ai/vast-ai',
                component: ComponentCreator('/SkyrimNet-GamePlugin/Vast.ai/vast-ai', '4d1'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
