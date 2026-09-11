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
      label: 'NQ layer',
      collapsed: false,
      items: ['layer/06-nq-es-layer', 'layer/07-clocks-and-late-greeks'],
    },
    {
      type: 'category',
      label: 'Practice',
      items: [
        'practice/08-heuristics-as-reading',
        'practice/09-grammar-and-journal',
        'practice/09a-early-session',
        'practice/09b-structure-and-gexbot',
        'practice/10-misreads-and-mastery',
        'practice/11-further-learning',
        'practice/12-futures-to-options',
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
