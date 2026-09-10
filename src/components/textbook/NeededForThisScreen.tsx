import {useState} from 'react';
import {getEntry} from '@site/src/data/glossary';

export default function NeededForThisScreen({
  ids,
  title = 'Needed to read this screen',
}: {
  ids: string[];
  title?: string;
}): JSX.Element {
  const [open, setOpen] = useState(true);
  return (
    <aside className="gb-card">
      <p className="gb-kicker">Schoolbook — then back to Gexbot</p>
      <h3 style={{display: 'flex', justifyContent: 'space-between', gap: '1rem'}}>
        <span>{title}</span>
        <button
          type="button"
          className="button button--sm button--secondary"
          onClick={() => setOpen((v) => !v)}>
          {open ? 'Collapse' : 'Open'}
        </button>
      </h3>
      {open ? (
        <dl className="gb-dl">
          {ids.map((id) => {
            const entry = getEntry(id);
            return (
              <span key={id} style={{display: 'contents'}}>
                <dt id={entry ? `term-${entry.id}` : undefined}>
                  {entry?.headword ?? id}
                </dt>
                <dd>{entry?.shortDef ?? `Missing glossary id: ${id}`}</dd>
              </span>
            );
          })}
        </dl>
      ) : (
        <p>
          Fluent path: keep walking the Gexbot object. The words{' '}
          {ids
            .map((id) => getEntry(id)?.headword ?? id)
            .join(', ')}{' '}
          are defined above if you open this box.
        </p>
      )}
    </aside>
  );
}
