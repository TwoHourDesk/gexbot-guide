import Link from '@docusaurus/Link';
import {glossary} from '@site/src/data/glossary';

/**
 * Names concepts the chapter touches but does not teach, and that no other
 * chapter teaches. Two sentences each: what it is, and which object on this
 * chapter's screen it bears on. Naming and pointing only.
 */
export default function AdjacentConcepts({docId}: {docId: string}): JSX.Element | null {
  const items = glossary.filter((e) => e.kind === 'adjacent' && e.firstDefinedIn === docId);
  if (!items.length) return null;
  return (
    <aside className="gb-card">
      <p className="gb-kicker">Beyond this chapter — named, not taught</p>
      <p>
        Ideas this chapter leans on that no chapter of this book teaches. Each says what it is,
        then what it bears on here. None is on a Gexbot screen.
      </p>
      <ul>
        {items.map((e) => (
          <li key={e.id} id={`adj-${e.id}`}>
            <strong>{e.headword}</strong>
            {e.aliases?.length ? ` (${e.aliases.join(', ')})` : ''}
            {e.evidence ? (
              <span className="gb-label">
                {e.evidence}
                {e.evidenceNote ? `; ${e.evidenceNote}` : ''}
              </span>
            ) : null}
            {' — '}
            {e.shortDef}
            {e.bearsOn ? ` ${e.bearsOn}` : ''}
            {e.reading ? <em>{` Read: ${e.reading}`}</em> : null}
          </li>
        ))}
      </ul>
      <p>
        Listed in the <Link to="/docs/reference/glossary">glossary</Link> under kind{' '}
        <code>adjacent</code>.
      </p>
    </aside>
  );
}
