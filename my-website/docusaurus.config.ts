import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'AI-Native Driven Development',
  tagline: 'The definitive guide to building AI-native applications and systems',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  markdown: {
    format: 'mdx',
    mermaid: false,
    mdx1Compat: {
      comments: true,
      admonitions: true,
      headingIds: true,
    },
  },

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
        docs: {
          sidebarPath: './sidebars.ts',
          // Route base path for docs - this will make docs available at root
          routeBasePath: '/book', // Docs will be served at /book/*
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false, // Disable blog since we're focusing on book content
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [],
  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'AI-Native Driven Development',
      logo: {
        alt: 'AI-Native Driven Development Logo',
        src: 'img/logo.svg',
      },
      items: [
        {to: '/', label: 'Home', position: 'left'},
        {to: '/book', label: 'Book', position: 'left'},
        {to: '/about', label: 'About', position: 'left'},
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Book',
          items: [
            {
              label: 'Introduction',
              to: '/book',
            },
            {
              label: 'Foundations',
              to: '/book/intro',
            },
            {
              label: 'Chapters',
              to: '/book/tutorial-basics/create-a-document',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Documentation',
              to: '/book',
            },
            {
              label: 'Tutorials',
              to: '/book/tutorial-basics/create-a-document',
            },
            {
              label: 'Examples',
              to: '/book/tutorial-basics/deploy-your-site',
            },
          ],
        },
        {
          title: 'Company',
          items: [
            {
              label: 'About',
              to: '/about',
            },
            {
              label: 'Contact',
              to: '/contact',
            },
            {
              label: 'Privacy',
              to: '/privacy',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} AI-Native Driven Development Book. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
