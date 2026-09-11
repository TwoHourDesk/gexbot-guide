import {useMemo, useState} from 'react';
import Link from '@docusaurus/Link';
import {sortedGlossary} from '@site/src/data/glossary';
import type {Kind, Pressure} from '@site/src/data/types';

const kinds: ('all' | Kind)[] = [
  'all',
  'gexbot',
  'options',
  'hygiene',
  'plan',
  'cousin',
  'market-general',
  'adjacent',
];

const pressures: ('all' | Pressure)[] = [
  'all',
  'mandate',
  'incentive',
  'none',
  'unknown',
];

export default function GlossaryView(): JSX.Element {
  const [kind, setKind] = useState<(typeof kinds)[number]>('all');
  const [pressure, setPressure] = useState<(typeof pressures)[number]>('all');
  const [q, setQ] = useState('');
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  const rows = useMemo(() => {
    return sortedGlossary().filter((e) => {
      if (kind !== 'all' && e.kind !== kind) return false;
      if (pressure !== 'all' && e.pressure !== pressure) return false;
      if (q) {
        const hay = `${e.headword} ${e.aliases?.join(' ') ?? ''} ${e.shortDef}`.toLowerCase();
        if (!hay.includes(q.toLowerCase())) return false;
      }
      return true;
    });
  }, [kind, pressure, q]);

  return (
    <div>
      <div className="gb-controls">
        <label>
          Kind
          <select value={kind} onChange={(e) => setKind(e.target.value as typeof kind)}>
            {kinds.map((k) => (
              <option key={k} value={k}>
                {k}
              </option>
            ))}
          </select>
        </label>
        <label>
          Pressure
          <select
            value={pressure}
            onChange={(e) => setPressure(e.target.value as typeof pressure)}>
            {pressures.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </label>
        <label>
          Search
          <input value={q} onChange={(e) => setQ(e.target.value)} />
        </label>
      </div>
      <p>
        {letters.map((L) => (
          <a key={L} href={`#letter-${L}`} style={{marginRight: 8}}>
            {L}
          </a>
        ))}
      </p>
      {rows.map((e, i) => {
        const letter = e.headword[0]?.toUpperCase() ?? '';
        const prev = rows[i - 1]?.headword[0]?.toUpperCase();
        return (
          <article className="gb-card" key={e.id} id={`g-${e.id}`}>
            {letter !== prev ? <h2 id={`letter-${letter}`}>{letter}</h2> : null}
            <h3>
              {e.headword} <span className="gb-label">{e.kind}</span>
              {e.pressure ? <span className="gb-label">{e.pressure}</span> : null}
            </h3>
            {e.aliases?.length ? <p>Also: {e.aliases.join(', ')}</p> : null}
            <p>{e.shortDef}</p>
            {e.longDef ? <p>{e.longDef}</p> : null}
            {e.kind === 'gexbot' ? (
              <dl className="gb-dl">
                <dt>Unit</dt>
                <dd>{e.unit ?? '—'}</dd>
                <dt>Not counted</dt>
                <dd>{e.notCounted ?? '—'}</dd>
                <dt>Nearest cousin</dt>
                <dd>{e.nearestCousin ?? '—'}</dd>
                <dt>Cut</dt>
                <dd>{e.distinguishingCut ?? '—'}</dd>
                <dt>Import mistake</dt>
                <dd>{e.importMistake ?? '—'}</dd>
              </dl>
            ) : null}
            {e.kind === 'adjacent' ? (
              <dl className="gb-dl">
                <dt>Bears on</dt>
                <dd>{e.bearsOn ?? '—'}</dd>
                <dt>Evidence</dt>
                <dd>{e.evidence ?? '—'}</dd>
                <dt>Read</dt>
                <dd>{e.reading ?? '—'}</dd>
              </dl>
            ) : null}
            <p>
              {e.kind === 'adjacent' ? 'Named, not taught, in ' : 'First defined in '}
              <Link to={`/docs/${e.firstDefinedIn}`}>{e.firstDefinedIn}</Link>
              {e.neededForPlan ? ` · needed for ${e.neededForPlan}` : ''}
            </p>
          </article>
        );
      })}
    </div>
  );
}
