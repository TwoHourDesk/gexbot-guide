import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  textbookSidebar: [
    {
      type: 'category',
      label: 'Start here',
      collapsed: false,
      items: ['intro'],
    },
    {
      type: 'category',
      label: 'Gexbot plans',
      collapsed: false,
      items: [
        'plans/01-what-gexbot-is',
        'plans/02-classic',
        'plans/03-classification',
        'plans/04-state',
        'plans/05-orderflow',
      ],
    },
    {
      type: 'category',
      label: 'NQ and ES layer',
      collapsed: false,
      items: ['layer/06-nq-es-layer', 'layer/07-clocks-and-late-greeks'],
    },
    {
      type: 'category',
      label: 'Practice',
      items: [
        'practice/08-heuristics-as-reading',
        'practice/09-grammar-and-journal',
        'practice/10-misreads-and-mastery',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      items: [
        'reference/glossary',
        'reference/keyword-index',
        'reference/distinctions',
        'reference/forced-flow-ledger',
        'reference/guardrails',
        'reference/source-of-truth',
      ],
    },
  ],
};

export default sidebars;
