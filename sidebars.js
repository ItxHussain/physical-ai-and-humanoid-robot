// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Physical AI Modules',
      items: [
        'physical-ai-modules/index',
        'physical-ai-modules/module-1-ros2',
        'physical-ai-modules/module-2-digital-twin',
        'physical-ai-modules/module-3-nvidia-isaac',
        'physical-ai-modules/module-4-vla',
        'physical-ai-modules/capstone-autonomous-humanoid',
      ],
    },
    {
      type: 'category',
      label: 'AI Assistant',
      items: [
        'chatbot-guide',
      ],
    },
    {
      type: 'category',
      label: 'References',
      items: [
        'references/citations',
      ],
    },
  ],
};

module.exports = sidebars;