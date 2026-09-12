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
      label: 'The screens',
      collapsed: false,
      items: [
        chapter('plans/01-what-gexbot-is', '1. The map of the screens', 'on-ramp/01-what-gexbot-is'),
        chapter('plans/02-classic', '2. Classic — the unsigned map', 'on-ramp/02-classic'),
        chapter(
          'plans/03-classification',
          '3. Classification and the hedge chain',
          'on-ramp/03-classification',
        ),
        chapter('plans/04-state', '4. State — leftover by strike', 'on-ramp/04-state'),
        chapter('plans/05-orderflow', '5. Orderflow — leftover over time', 'on-ramp/05-orderflow'),
      ],
    },
    {
      type: 'category',
      label: 'The complex',
      collapsed: false,
      items: [
        chapter('layer/06-nq-es-layer', '6. The Nasdaq family', 'on-ramp/06-nq-es-layer'),
        chapter(
          'layer/07-clocks-and-late-greeks',
          '7. Clocks and late greeks',
          'on-ramp/07-clocks-and-late-greeks',
        ),
      ],
    },
    {
      type: 'category',
      label: 'Reconstruct and refuse',
      collapsed: false,
      items: [
        chapter(
          'practice/08-heuristics-as-reading',
          '8. Named reads (H1–H15)',
          'on-ramp/08-heuristics-as-reading',
        ),
        chapter(
          'practice/09-grammar-and-journal',
          '9. The journal line',
          'on-ramp/09-grammar-and-journal',
        ),
        chapter(
          'practice/10-early-session',
          '10. Early session (E1–E6)',
          'on-ramp/10-early-session',
        ),
        chapter(
          'practice/11-structure-and-leftover',
          '11. Structure and leftover (S1–S10)',
          'on-ramp/11-structure-and-leftover',
        ),
        chapter('practice/12-misreads', '12. Misreads', 'on-ramp/12-misreads'),
      ],
    },
    {
      type: 'category',
      label: 'After this book',
      collapsed: false,
      items: [
        chapter('practice/13-next-course', '13. The next course', 'on-ramp/13-next-course'),
        chapter(
          'practice/14-futures-to-options',
          '14. From futures to options',
          'on-ramp/14-futures-to-options',
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
