import Link from '@docusaurus/Link';
import {getEntry} from '@site/src/data/glossary';

export default function GexbotConcept({id}: {id: string}): JSX.Element {
  const entry = getEntry(id);
  if (!entry) {
    return (
      <aside className="gb-card">
        <p>Missing GexbotConcept id <code>{id}</code>.</p>
      </aside>
    );
  }
  return (
    <aside className="gb-card" id={`concept-${entry.id}`}>
      <p className="gb-kicker">Gexbot concept</p>
      <h3>{entry.headword}</h3>
      <p>{entry.shortDef}</p>
      <dl className="gb-dl">
        <dt>Unit</dt>
        <dd>{entry.unit ?? '—'}</dd>
        <dt>Not counted</dt>
        <dd>{entry.notCounted ?? '—'}</dd>
        <dt>Nearest cousin</dt>
        <dd>{entry.nearestCousin ?? '—'}</dd>
        <dt>Distinguishing cut</dt>
        <dd>{entry.distinguishingCut ?? '—'}</dd>
        <dt>Import mistake</dt>
        <dd>{entry.importMistake ?? '—'}</dd>
      </dl>
      <p>
        <Link to="/docs/reference/glossary">Full glossary entry</Link>
      </p>
    </aside>
  );
}
