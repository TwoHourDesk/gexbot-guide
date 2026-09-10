import Link from '@docusaurus/Link';
import {entriesFirstDefinedIn} from '@site/src/data/glossary';

export default function ChapterTerms({docId}: {docId: string}): JSX.Element {
  const terms = entriesFirstDefinedIn(docId);
  if (!terms.length) {
    return (
      <p>
        No lexicon headwords list this page as first definition. See the{' '}
        <Link to="/docs/reference/glossary">glossary</Link>.
      </p>
    );
  }
  return (
    <ul>
      {terms.map((t) => (
        <li key={t.id}>
          <strong>{t.headword}</strong>
          {t.aliases?.length ? ` (${t.aliases.join(', ')})` : ''} — {t.kind}
        </li>
      ))}
    </ul>
  );
}
