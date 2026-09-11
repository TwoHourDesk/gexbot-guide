import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Each main chapter is a category linked to the chapter doc, with its options
 * on-ramp sub-chapter nested beneath it. Pagination therefore runs
 * chapter → on-ramp → next chapter. See .cursor/rules/audience.mdc.
 */
function chapter(id: string, label: string, onRamp: string) {
  return {
    type: 'category' as const,
    label,
    collapsed: true,
    link: {type: 'doc' as const, id},
    items: [onRamp],
  };
}

const sidebars: SidebarsConfig = {
  textbookSidebar: [
    {
      type: 'category',
      label: 'Start here',
      collapsed: false,
      items: [chapter('intro', 'How to use this book', 'on-ramp/00-intro')],
    },
    {
      type: 'category',
      label: 'Gexbot plans',
      collapsed: false,
      items: [
        chapter('plans/01-what-gexbot-is', '1. What Gexbot is', 'on-ramp/01-what-gexbot-is'),
        chapter('plans/02-classic', '2. Classic', 'on-ramp/02-classic'),
        chapter(
          'plans/03-classification',
          '3. Classification and the hedge chain',
          'on-ramp/03-classification',
        ),
        chapter('plans/04-state', '4. State', 'on-ramp/04-state'),
        chapter('plans/05-orderflow', '5. Orderflow', 'on-ramp/05-orderflow'),
      ],
    },
    {
      type: 'category',
      label: 'NQ layer',
      collapsed: false,
      items: [
        chapter('layer/06-nq-es-layer', '6. NQ and the Nasdaq family', 'on-ramp/06-nq-es-layer'),
        chapter(
          'layer/07-clocks-and-late-greeks',
          '7. Clocks and late greeks',
          'on-ramp/07-clocks-and-late-greeks',
        ),
      ],
    },
    {
      type: 'category',
      label: 'Practice',
      items: [
        chapter(
          'practice/08-heuristics-as-reading',
          '8. Heuristics as reading',
          'on-ramp/08-heuristics-as-reading',
        ),
        chapter(
          'practice/09-grammar-and-journal',
          '9. Grammar and journal',
          'on-ramp/09-grammar-and-journal',
        ),
        chapter(
          'practice/09a-early-session',
          '9a. Early session: levels before leftover',
          'on-ramp/09a-early-session',
        ),
        chapter(
          'practice/09b-structure-and-gexbot',
          '9b. Structure and Gexbot together',
          'on-ramp/09b-structure-and-gexbot',
        ),
        chapter(
          'practice/10-misreads-and-mastery',
          '10. Misreads and mastery',
          'on-ramp/10-misreads-and-mastery',
        ),
        chapter(
          'practice/11-further-learning',
          '11. Further learning: the first two hours',
          'on-ramp/11-further-learning',
        ),
        chapter(
          'practice/12-futures-to-options',
          '12. From futures to options: a roadmap',
          'on-ramp/12-futures-to-options',
        ),
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
