import Link from '@docusaurus/Link';
import {getEntry} from '@site/src/data/glossary';

export default function TermFirst({id}: {id: string}): JSX.Element | null {
  const entry = getEntry(id);
  if (!entry) {
    return (
      <aside className="gb-card">
        <p className="gb-kicker">Missing term</p>
        <p>No glossary entry for <code>{id}</code>.</p>
      </aside>
    );
  }
  return (
    <aside className="gb-card" id={`term-${entry.id}`}>
      <p className="gb-kicker">First use</p>
      <h3>{entry.headword}</h3>
      <p>{entry.shortDef}</p>
      {entry.longDef ? <p>{entry.longDef}</p> : null}
      <p>
        <Link to="/docs/reference/glossary">Glossary</Link>
        {entry.seeAlso?.length ? (
          <>
            {' · see also '}
            {entry.seeAlso.map((sid, i) => {
              const other = getEntry(sid);
              return (
                <span key={sid}>
                  {i > 0 ? ', ' : ''}
                  {other ? other.headword : sid}
                </span>
              );
            })}
          </>
        ) : null}
      </p>
    </aside>
  );
}
