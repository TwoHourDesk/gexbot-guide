import {useState} from 'react';
import {toyDisclaimer} from './chartTheme';

const families = [
  {
    id: 'dealer',
    name: 'Textbook dealer gamma',
    measures: 'Dealers short gamma chase; dealers long gamma fade.',
    gexbot:
      'Gexbot keeps that polarity and adds a customer book. State and Orderflow report the customer sign.',
  },
  {
    id: 'unsigned',
    name: 'Unsigned GEX maps',
    measures:
      'OI × gamma. Zero-gamma flip. Call wall / put wall as if ownership were known.',
    gexbot:
      'Classic is the cousin. WhoMustAct on Classic is unknown. State and Orderflow reject the unsigned-owner shortcut.',
  },
  {
    id: 'futures',
    name: 'Futures-native gamma products',
    measures: 'Gamma computed on ES/NQ themselves, often with pre-drawn levels.',
    gexbot:
      'Gexbot ES/NQ is ES_SPX / NQ_NDX: a multiplier conversion of index options, not CME volume.',
  },
  {
    id: 'premium',
    name: 'Premium / sweep flow tools',
    measures: 'Debit-credit tapes, often with open vs close.',
    gexbot:
      'Gexbot is greek-weighted residual. No open/close split. A large debit is not a large DEX print.',
  },
] as const;

export default function NotTheSame(): JSX.Element {
  const [id, setId] = useState<(typeof families)[number]['id']>('unsigned');
  const fam = families.find((f) => f.id === id)!;
  return (
    <div className="gb-chart">
      <p className="gb-kicker">Cousin family vs Gexbot</p>
      <div className="gb-controls">
        {families.map((f) => (
          <button
            key={f.id}
            type="button"
            className={`button button--sm ${f.id === id ? 'button--primary' : 'button--secondary'}`}
            onClick={() => setId(f.id)}>
            {f.name}
          </button>
        ))}
      </div>
      <div className="gb-grid-2">
        <aside className="gb-card" style={{margin: 0}}>
          <h4>That family measures</h4>
          <p>{fam.measures}</p>
        </aside>
        <aside className="gb-card" style={{margin: 0}}>
          <h4>Gexbot counts</h4>
          <p>{fam.gexbot}</p>
        </aside>
      </div>
      <p className="gb-chart-note">{toyDisclaimer} No other-product level names.</p>
    </div>
  );
}
