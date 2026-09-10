import {getEntry} from '@site/src/data/glossary';
import {ledgerRows} from '@site/src/data/forcedFlow';

export default function WhoMustAct({
  id,
  screenId,
}: {
  id?: string;
  screenId?: string;
}): JSX.Element {
  const row = screenId ? ledgerRows.find((r) => r.id === screenId) : undefined;
  const entry = id ? getEntry(id) : undefined;

  if (row) {
    return (
      <aside className="gb-card">
        <p className="gb-kicker">Who must act</p>
        <h3>{row.screen}</h3>
        <dl className="gb-dl">
          <dt>Shows</dt>
          <dd>{row.shows}</dd>
          <dt>Actor · pressure</dt>
          <dd>
            <span className="gb-label">{row.pressure}</span>
            {row.whoActs}
          </dd>
          <dt>Trigger</dt>
          <dd>{row.trigger}</dd>
          <dt>Venue</dt>
          <dd>{row.hedgeVenue}</dd>
          <dt>Not shown</dt>
          <dd>{row.notShown}</dd>
        </dl>
      </aside>
    );
  }

  if (entry) {
    return (
      <aside className="gb-card">
        <p className="gb-kicker">Who must act</p>
        <h3>{entry.headword}</h3>
        <dl className="gb-dl">
          <dt>Actor · pressure</dt>
          <dd>
            {entry.pressure ? <span className="gb-label">{entry.pressure}</span> : null}
            {entry.actor ?? 'If the honest answer is unknown, it is unknown.'}
          </dd>
          <dt>Trigger</dt>
          <dd>{entry.trigger ?? '—'}</dd>
          <dt>Venue</dt>
          <dd>{entry.hedgeVenue ?? '—'}</dd>
          <dt>Liquidity role</dt>
          <dd>{entry.liquidityRole ?? 'Inferred, never observed on the futures tape.'}</dd>
          <dt>Not shown</dt>
          <dd>{entry.notShown ?? '—'}</dd>
        </dl>
      </aside>
    );
  }

  return (
    <aside className="gb-card">
      <p>WhoMustAct needs an <code>id</code> or <code>screenId</code>.</p>
    </aside>
  );
}
