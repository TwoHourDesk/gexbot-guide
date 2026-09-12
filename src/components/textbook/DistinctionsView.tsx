import Link from '@docusaurus/Link';
import {cousinFamilies, objectCuts} from '@site/src/data/glossary';
import type {GlossaryEntry} from '@site/src/data/types';

function CutCard({entry, family}: {entry: GlossaryEntry; family?: boolean}): JSX.Element {
  return (
    <aside className="gb-card" id={`cut-${entry.id}`} style={{margin: 0}}>
      <p className="gb-kicker">{family ? 'Cousin family' : 'Object cut'}</p>
      <h3>
        {entry.headword}{' '}
        <span className="gb-label">{entry.kind}</span>
      </h3>
      {family ? <p>{entry.shortDef}</p> : null}
      <dl className="gb-dl">
        {family ? null : (
          <>
            <dt>Nearest cousin</dt>
            <dd>{entry.nearestCousin}</dd>
          </>
        )}
        <dt>Gexbot cut</dt>
        <dd>{entry.distinguishingCut ?? '—'}</dd>
        <dt>Do not import</dt>
        <dd>{entry.importMistake ?? '—'}</dd>
        <dt>Owned by</dt>
        <dd>
          <Link to={`/docs/${entry.firstDefinedIn}`}>{entry.firstDefinedIn}</Link>
        </dd>
      </dl>
    </aside>
  );
}

export default function DistinctionsView(): JSX.Element {
  const families = cousinFamilies();
  const cuts = objectCuts();
  const groups = new Map<string, GlossaryEntry[]>();
  for (const e of cuts) {
    const key = e.nearestCousin!;
    const arr = groups.get(key) ?? [];
    arr.push(e);
    groups.set(key, arr);
  }

  return (
    <div>
      <h2>Cousin families</h2>
      <p>
        The families this book names so a reader can place a tool. Each chapter
        applies one. The cut and the import mistake are the same three fields as
        a DistinguishingNote on that chapter.
      </p>
      <div className="gb-grid-2">
        {families.map((e) => (
          <CutCard key={e.id} entry={e} family />
        ))}
      </div>
      <h2>Cuts on objects this book teaches</h2>
      <p>
        Same three fields, now on Classic, State, Orderflow, and the later
        screens. Grouped by the cousin they refuse, so the leftover-and-label
        cut and the unsigned-map cut sit next to every object that uses them.
      </p>
      {[...groups.entries()].map(([cousin, rows]) => (
        <section key={cousin}>
          <h3>{cousin}</h3>
          <div className="gb-grid-2">
            {rows.map((e) => (
              <CutCard key={e.id} entry={e} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
