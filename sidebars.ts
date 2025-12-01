import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
   tutorialSidebar: {
    'Features': ['Features/overview','Features/events-and-reactions','Features/gamemaster','Features/player-dialogue', 'Features/action-system', 'Features/customization','Features/overrides', 'Features/gamedataexplorer', 'Features/customtriggers',
      'Features/voicesamples','Features/filter-system'
       ],

    'Installation Guide': [
      'Installation Guide/dependencies',
      'Installation Guide/skyrimnet-installation',
    ],

    'Large Language Models': [
      'Large Language Models/model-agents',
      'Large Language Models/openrouter',
      'Large Language Models/suggested-llms'
    ],
     'Memory System': ['Memory System/memory-recall','Memory System/sqlite-storage','Memory System/diaries'],

     'Prompts': ['Prompts/prompts','Prompts/prompt_tutorial' ],

    'NPC Bios': ['NPC Bios/static-bios','NPC Bios/dynamic-bios'],

    'Text to Speech': [
      'Text to Speech/tts-getting-started',
      'Text to Speech/piper',
      'Text to Speech/xtts',
      'Text to Speech/zonos',
      
    ],
    'Speech to Text': [
      'Speech to Text/local-whisper',
      'Speech to Text/whisper-openai',
    ],
     'Vast.ai': ['Vast.ai/vast-ai','Vast.ai/images'],
    
  },

  apiSidebar: {
    'SkyrimNet API': ['Skyrimnet API/api',
    'Skyrimnet API/library', 
    'Skyrimnet API/decorators', 
    
    ],
  },
};

export default sidebars;
