import {useMemo, useState} from 'react';
import {callDelta, putDelta} from './blackScholes';
import {toyDisclaimer} from './chartTheme';

const STRIKE = 5000;
const IV = 0.16;
const T0 = 6 / (365 * 24);

export default function DealerHedgeSim({
  showTime = true,
}: {
  showTime?: boolean;
}): JSX.Element {
  const [bought, setBought] = useState(true);
  const [right, setRight] = useState<'call' | 'put'>('call');
  const [size, setSize] = useState(500);
  const [spot, setSpot] = useState(5000);
  const [selfHedged, setSelfHedged] = useState(false);
  const [hoursLeft, setHoursLeft] = useState(6);
  const [band, setBand] = useState(50);

  const tYears = Math.max(showTime ? hoursLeft : 6, 0.25) / (365 * 24);
  const customerDelta =
    right === 'call'
      ? callDelta(spot, STRIKE, tYears, IV)
      : putDelta(spot, STRIKE, tYears, IV);
  const dealerDelta = bought ? -customerDelta * size : customerDelta * size;
  const rawEs = dealerDelta * 100 / 50;
  const netEs = selfHedged ? 0 : rawEs;
  const stepped = Math.round(netEs / band) * band;
  const shortGamma = bought;
  const role = shortGamma
    ? 'Dealer short gamma — inferred: takes liquidity, chases (buy rips / sell dips)'
    : 'Dealer long gamma — inferred: supplies liquidity, fades (sell rips / buy dips)';

  const atmCompare = useMemo(() => {
    const dNow =
      right === 'call'
        ? callDelta(spot, STRIKE, T0, IV)
        : putDelta(spot, STRIKE, T0, IV);
    const dAtm =
      right === 'call'
        ? callDelta(STRIKE, STRIKE, T0, IV)
        : putDelta(STRIKE, STRIKE, T0, IV);
    return {dNow, dAtm};
  }, [right, spot]);

  return (
    <div className="gb-chart">
      <p className="gb-kicker">Running example — dealer hedge (toy)</p>
      <div className="gb-controls">
        <label>
          Customer
          <select
            value={bought ? 'bought' : 'sold'}
            onChange={(e) => setBought(e.target.value === 'bought')}>
            <option value="bought">Bought</option>
            <option value="sold">Sold</option>
          </select>
        </label>
        <label>
          Right
          <select
            value={right}
            onChange={(e) => setRight(e.target.value as 'call' | 'put')}>
            <option value="call">Call</option>
            <option value="put">Put</option>
          </select>
        </label>
        <label>
          Size {size}
          <input
            type="range"
            min={100}
            max={1000}
            step={50}
            value={size}
            onChange={(e) => setSize(Number(e.target.value))}
          />
        </label>
        <label>
          Spot {spot}
          <input
            type="range"
            min={4940}
            max={5060}
            value={spot}
            onChange={(e) => setSpot(Number(e.target.value))}
          />
        </label>
        {showTime ? (
          <label>
            Hours left {hoursLeft}
            <input
              type="range"
              min={0.5}
              max={8}
              step={0.5}
              value={hoursLeft}
              onChange={(e) => setHoursLeft(Number(e.target.value))}
            />
          </label>
        ) : null}
        <label>
          Band width (ES) {band}
          <input
            type="range"
            min={10}
            max={150}
            step={10}
            value={band}
            onChange={(e) => setBand(Number(e.target.value))}
          />
        </label>
        <label>
          <span>
            <input
              type="checkbox"
              checked={selfHedged}
              onChange={(e) => setSelfHedged(e.target.checked)}
            />{' '}
            Customer self-hedged
          </span>
        </label>
      </div>
      <dl className="gb-dl">
        <dt>Customer Δ / contract</dt>
        <dd>{atmCompare.dNow.toFixed(2)}</dd>
        <dt>Dealer net Δ (contracts × Δ)</dt>
        <dd>{dealerDelta.toFixed(0)}</dd>
        <dt>Inferred ES hedge</dt>
        <dd>
          {selfHedged
            ? '≈ 0 — two hedgers, no net forced flow in the underlying (inferred)'
            : `continuous ≈ ${rawEs.toFixed(0)} ES; in a ${band}-lot band ≈ ${stepped} ES`}
        </dd>
        <dt>Liquidity role</dt>
        <dd>{role}</dd>
      </dl>
      <p>
        Default 500 ATM calls at 5000: 500 × 0.50 × $100 / $50 ≈ 500 ES. Spot +15
        toward 0.80 is the SoT toy in Classification. You cannot identify this hedge
        on the futures tape.
      </p>
      <p className="gb-chart-note">{toyDisclaimer} Names pressure and direction, not size of a real desk.</p>
    </div>
  );
}
