import {useState} from 'react';
import {toyDisclaimer} from './chartTheme';

export default function ConversionMap(): JSX.Element {
  const [n, setN] = useState(500);
  const [delta, setDelta] = useState(0.5);
  const dollarPerPt = n * delta * 100;
  const es = dollarPerPt / 50;
  const nq = dollarPerPt / 20;
  return (
    <div className="gb-chart">
      <p className="gb-kicker">Where the print happened vs where the hedge lands</p>
      <div className="gb-controls">
        <label>
          Contracts {n}
          <input
            type="range"
            min={100}
            max={1000}
            step={50}
            value={n}
            onChange={(e) => setN(Number(e.target.value))}
          />
        </label>
        <label>
          |Δ| {delta.toFixed(2)}
          <input
            type="range"
            min={0.1}
            max={0.9}
            step={0.05}
            value={delta}
            onChange={(e) => setDelta(Number(e.target.value))}
          />
        </label>
      </div>
      <dl className="gb-dl">
        <dt>Share-equivalent</dt>
        <dd>
          {n} × {delta.toFixed(2)} × $100 = <strong>${dollarPerPt.toLocaleString()}</strong> per
          index point
        </dd>
        <dt>If the option is NDX (your default)</dt>
        <dd>
          Gexbot ticker <code>NQ_NDX</code>. Inferred hedge venue NQ ($20/pt) ≈{' '}
          <strong>{nq.toFixed(0)} NQ</strong>. Rule of thumb: 1 ATM NDX ≈ 2.5 NQ.
        </dd>
        <dt>If the option is SPX (the S&P cousin)</dt>
        <dd>
          Gexbot ticker <code>ES_SPX</code>. Inferred hedge venue ES ($50/pt) ≈{' '}
          <strong>{es.toFixed(0)} ES</strong>. Rule of thumb: 1 ATM SPX ≈ 1 ES.
        </dd>
      </dl>
      <p>
        The option print is not a CME lot. You may not call a futures print “the
        dealer hedge.” NDX is a thinner book than SPX — treat NQ reads as weaker
        evidence (<em>inferred</em>).
      </p>
      <p className="gb-chart-note">{toyDisclaimer} Market-general multipliers. Not CME volume.</p>
    </div>
  );
}
