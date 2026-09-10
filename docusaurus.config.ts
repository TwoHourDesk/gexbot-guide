import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Gexbot Study Wiki',
  tagline: 'Gexbot as an information layer beside NQ and ES',
  favicon: 'img/logo.svg',

  future: {
    v4: true,
  },

  url: 'https://twohourdesk.github.io',
  baseUrl: '/gexbot-guide/',

  organizationName: 'TwoHourDesk',
  projectName: 'gexbot-guide',
  trailingSlash: false,

  onBrokenLinks: 'throw',

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
          routeBasePath: 'docs',
          numberPrefixParser: false,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/logo.svg',
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Gexbot Study Wiki',
      logo: {
        alt: 'Gexbot Study Wiki',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'textbookSidebar',
          position: 'left',
          label: 'Textbook',
        },
        {
          to: '/docs/reference/glossary',
          label: 'Glossary',
          position: 'left',
        },
        {
          href: 'https://www.gexbot.com/docs',
          label: 'Gexbot docs',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Read',
          items: [
            {label: 'Start here', to: '/docs/intro'},
            {label: 'What Gexbot is', to: '/docs/plans/01-what-gexbot-is'},
            {label: 'Glossary', to: '/docs/reference/glossary'},
          ],
        },
        {
          title: 'Reference',
          items: [
            {label: 'Forced-flow ledger', to: '/docs/reference/forced-flow-ledger'},
            {label: 'Guardrails', to: '/docs/reference/guardrails'},
            {label: 'Distinctions', to: '/docs/reference/distinctions'},
          ],
        },
        {
          title: 'Sources',
          items: [
            {label: 'gexbot.com', href: 'https://www.gexbot.com/'},
            {label: 'Official docs', href: 'https://www.gexbot.com/docs'},
          ],
        },
      ],
      copyright: `Not a trading system. Not locked edge. Built as a study wiki.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
