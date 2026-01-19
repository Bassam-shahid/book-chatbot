import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  bookSidebar: [
    {
      type: 'category',
      label: 'Introduction',
      items: ['intro'],
      link: {
        type: 'doc',
        id: 'intro',
      },
    },
    {
      type: 'category',
      label: 'Foundations of AI-Native Development',
      items: [
        'tutorial-basics/create-a-document',
        'tutorial-basics/create-a-page',
      ],
    },
    {
      type: 'category',
      label: 'Data Management in AI-Native Systems',
      items: [
        'tutorial-basics/create-a-blog-post',
        'tutorial-basics/markdown-features',
      ],
    },
    {
      type: 'category',
      label: 'Model Development and Deployment',
      items: [
        'tutorial-basics/deploy-your-site',
      ],
    },
    {
      type: 'category',
      label: 'Advanced Topics',
      items: [
        'tutorial-extras/manage-docs-versions',
        'tutorial-extras/translate-your-site',
      ],
    },
  ],
};

export default sidebars;
