import {useState} from 'react';
import {toyDisclaimer} from './chartTheme';

const links = [
  {
    id: 'print',
    name: '1. Print',
    pressure: 'mandate starts here',
    shows: 'Orderflow bar (DEX OF / convexity OF / GEX OF)',
    hides: 'Open vs close; who the counterparty is',
    note: 'A customer crosses the spread. Gexbot signs it long or short.',
  },
  {
    id: 'absorb',
    name: '2. Absorb',
    pressure: 'none if two customers cancel',
    shows: 'Residual (only leftover survives)',
    hides: 'Identity of the absorber',
    note: 'Often a dealer, sometimes another customer. Two customers → later links do not happen.',
  },
  {
    id: 'initial',
    name: '3. Initial delta hedge',
    pressure: 'mandate — already mostly done',
    shows: 'DEX ladder / DEX OF as a record of the lean',
    hides: 'The hedge itself; whether the customer self-hedged',
    note: 'Dealer trades share-equivalents in ES/NQ/SPY, usually within seconds. DEX is not pending buying.',
  },
  {
    id: 'gamma',
    name: '4. Gamma re-hedge',
    pressure: 'mandate — pending, path-conditional',
    shows: 'Convexity ladder, GEX profile, GEX OF',
    hides: 'The path spot will take; hedge bands',
    note: 'Short gamma chases (amplifies). Long gamma fades (pins). Forced flow ahead depends on where spot goes.',
  },
  {
    id: 'clock',
    name: '5. Clock re-hedge',
    pressure: 'mandate — pending, clock/vol',
    shows: '−vanna / charm ladders (beta, today’s residual)',
    hides: 'The full OI vault',
    note: 'Charm and vanna move delta with spot unchanged. Hard in the last hour.',
  },
  {
    id: 'resolution',
    name: '6. Resolution',
    pressure: 'mandate at expiry',
    shows: 'Gexbot shows none of this link directly',
    hides: 'Settlement hedges; which desk',
    note: 'ITM → |delta| 1, OTM → 0. SPX daily expiries are PM cash-settled (market-general).',
  },
] as const;

export default function HedgeChain(): JSX.Element {
  const [id, setId] = useState<(typeof links)[number]['id']>('print');
  const link = links.find((l) => l.id === id)!;
  return (
    <div className="gb-chart">
      <p className="gb-kicker">The hedge chain</p>
      <div className="gb-controls">
        {links.map((l) => (
          <button
            key={l.id}
            type="button"
            className={`button button--sm ${l.id === id ? 'button--primary' : 'button--secondary'}`}
            onClick={() => setId(l.id)}>
            {l.name}
          </button>
        ))}
      </div>
      <aside className="gb-card" style={{margin: 0}}>
        <h4>{link.name}</h4>
        <p>{link.note}</p>
        <dl className="gb-dl">
          <dt>Pressure word</dt>
          <dd>{link.pressure}</dd>
          <dt>Screen shows</dt>
          <dd>{link.shows}</dd>
          <dt>Screen does not</dt>
          <dd>{link.hides}</dd>
        </dl>
      </aside>
      <p className="gb-chart-note">{toyDisclaimer} Static map. No simulation.</p>
    </div>
  );
}
