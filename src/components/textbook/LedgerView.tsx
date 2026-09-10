import Link from '@docusaurus/Link';
import {ledgerRows} from '@site/src/data/forcedFlow';

export default function LedgerView(): JSX.Element {
  return (
    <div className="gb-grid-2">
      {ledgerRows.map((row) => (
        <aside className="gb-card" key={row.id} style={{margin: 0}}>
          <p className="gb-kicker">{row.pressure}</p>
          <h3>{row.screen}</h3>
          <dl className="gb-dl">
            <dt>Shows</dt>
            <dd>{row.shows}</dd>
            <dt>Who acts</dt>
            <dd>{row.whoActs}</dd>
            <dt>Trigger</dt>
            <dd>{row.trigger}</dd>
            <dt>Venue</dt>
            <dd>{row.hedgeVenue}</dd>
            <dt>Not shown</dt>
            <dd>{row.notShown}</dd>
            <dt>Chapter</dt>
            <dd>
              <Link to={`/docs/${row.chapter}`}>{row.chapter}</Link>
            </dd>
          </dl>
        </aside>
      ))}
    </div>
  );
}
