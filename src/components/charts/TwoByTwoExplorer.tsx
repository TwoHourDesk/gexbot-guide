import {useState} from 'react';
import {toyDisclaimer} from './chartTheme';

const cells = [
  {
    id: 'long-call',
    name: 'Long call',
    dex: '+',
    cvr: '+',
    gex: '+ (call residual grew)',
    who: 'Customer paid for upside expansion. Dealer short those calls — mandate to chase if spot rips. DEX is a record; convexity is pending.',
  },
  {
    id: 'short-put',
    name: 'Short put',
    dex: '+',
    cvr: '−',
    gex: '− (put residual grew)',
    who: 'Customer collected premium, wants a pin above the strike. Dealer long those puts — mandate to fade. Same +DEX as a long call, opposite story.',
  },
  {
    id: 'long-put',
    name: 'Long put',
    dex: '−',
    cvr: '+',
    gex: '−',
    who: 'Customer paid for downside expansion. Dealer short those puts — mandate to chase a break.',
  },
  {
    id: 'short-call',
    name: 'Short call',
    dex: '−',
    cvr: '−',
    gex: '+',
    who: 'Customer overwrite. Same +GEX OF as a long call — opposite 2×2 cell. Dealer long those calls — mandate to fade a rip.',
  },
] as const;

export default function TwoByTwoExplorer(): JSX.Element {
  const [id, setId] = useState<(typeof cells)[number]['id']>('long-call');
  const cell = cells.find((c) => c.id === id)!;
  return (
    <div className="gb-chart">
      <p className="gb-kicker">Name the print</p>
      <div className="gb-grid-2">
        {cells.map((c) => (
          <button
            key={c.id}
            type="button"
            className={`button ${c.id === id ? 'button--primary' : 'button--secondary'}`}
            onClick={() => setId(c.id)}>
            {c.name}
            <br />
            DEX {c.dex} · convexity {c.cvr}
          </button>
        ))}
      </div>
      <aside className="gb-card">
        <h4>{cell.name}</h4>
        <dl className="gb-dl">
          <dt>DEX OF</dt>
          <dd>{cell.dex}</dd>
          <dt>Convexity OF</dt>
          <dd>{cell.cvr}</dd>
          <dt>GEX OF (typical)</dt>
          <dd>{cell.gex}</dd>
          <dt>Who must act</dt>
          <dd>{cell.who}</dd>
        </dl>
      </aside>
      <p className="gb-chart-note">{toyDisclaimer} Table from the study SoT. Not a buy signal.</p>
    </div>
  );
}
