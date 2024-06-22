// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Гид по внутренним процессам и стандартам разработки',
  tagline: 'Все, что нужно для качественной разработки',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://razdolie.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/dev-rules',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Razdolie', // Usually your GitHub org/user name.
  projectName: 'dev-rules', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
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
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/razdolie/dev-rules/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      ({
        hashed: true,
        indexBlog:false,
        language: ["ru", "en"],
        docsRouteBasePath:'/'
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      docs:{
        sidebar: {
          hideable: true,
          autoCollapseCategories: true
        },
      },
      navbar: {
        logo: {
          alt: 'Раздолье',
          src: 'img/logo.svg',
          width: '180px',
        },
        items: [],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Основное',
            items: [
              {
                label: 'razdolie.ru',
                href: 'https://razdolie.ru/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/razdolie/',
              },
            ],
          },
          {
            title: 'Сообщество',
            items: [
              {
                label: 'Infostart',
                href: 'https://infostart.ru/profile/335686/',
              },
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/@vcrazdolie/featured',
              },
              {
                label: 'VK',
                href: 'https://vk.com/vcrazdolie',
              },
            ],
          },
          {
            title: 'Еще',
            items: [
              {
                label: 'Вакансии',
                href: 'vk.cc/cxPWEC',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Razdolie`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
