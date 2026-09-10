import {getEntry} from '@site/src/data/glossary';

export default function DistinguishingNote({
  id,
  cousin,
  cut,
  doNotImport,
}: {
  id?: string;
  cousin?: string;
  cut?: string;
  doNotImport?: string;
}): JSX.Element {
  const entry = id ? getEntry(id) : undefined;
  return (
    <aside className="gb-card">
      <p className="gb-kicker">Not the same</p>
      <h3>Nearest cousin / Gexbot cut / do not import</h3>
      <dl className="gb-dl">
        <dt>Nearest cousin</dt>
        <dd>{cousin ?? entry?.nearestCousin ?? '—'}</dd>
        <dt>Gexbot cut</dt>
        <dd>{cut ?? entry?.distinguishingCut ?? '—'}</dd>
        <dt>Do not import</dt>
        <dd>{doNotImport ?? entry?.importMistake ?? '—'}</dd>
      </dl>
    </aside>
  );
}
