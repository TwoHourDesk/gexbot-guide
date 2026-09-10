import {useMemo, useState} from 'react';
import {
  Line,
  LineChart,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import {callPayoff, putPayoff} from './blackScholes';
import {chartTheme, toyDisclaimer} from './chartTheme';

export default function PayoffSketch(): JSX.Element {
  const [strike, setStrike] = useState(5000);
  const [spot, setSpot] = useState(5000);
  const [kind, setKind] = useState<'call' | 'put'>('call');
  const [side, setSide] = useState<'long' | 'short'>('long');

  const data = useMemo(() => {
    const rows = [];
    for (let s = strike - 200; s <= strike + 200; s += 5) {
      const intrinsic = kind === 'call' ? callPayoff(s, strike) : putPayoff(s, strike);
      rows.push({spot: s, payoff: side === 'long' ? intrinsic : -intrinsic});
    }
    return rows;
  }, [kind, side, strike]);

  const now =
    (kind === 'call' ? callPayoff(spot, strike) : putPayoff(spot, strike)) *
    (side === 'long' ? 1 : -1);

  return (
    <div className="gb-chart">
      <p className="gb-kicker">Why Classic splits call and put</p>
      <div className="gb-controls">
        <label>
          Contract
          <select value={kind} onChange={(e) => setKind(e.target.value as 'call' | 'put')}>
            <option value="call">Call</option>
            <option value="put">Put</option>
          </select>
        </label>
        <label>
          Side
          <select value={side} onChange={(e) => setSide(e.target.value as 'long' | 'short')}>
            <option value="long">Long (bought)</option>
            <option value="short">Short (sold)</option>
          </select>
        </label>
        <label>
          Strike {strike}
          <input
            type="range"
            min={4800}
            max={5200}
            value={strike}
            onChange={(e) => setStrike(Number(e.target.value))}
          />
        </label>
        <label>
          Spot {spot}
          <input
            type="range"
            min={4800}
            max={5200}
            value={spot}
            onChange={(e) => setSpot(Number(e.target.value))}
          />
        </label>
      </div>
      <div style={{width: '100%', height: 260}}>
        <ResponsiveContainer>
          <LineChart data={data}>
            <XAxis dataKey="spot" stroke={chartTheme.axis} />
            <YAxis stroke={chartTheme.axis} />
            <Tooltip />
            <ReferenceLine x={spot} stroke={chartTheme.text} />
            <Line type="monotone" dataKey="payoff" stroke={chartTheme.call} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <p>
        Payoff at expiry at this spot: <strong>{now.toFixed(0)}</strong> points (premium not
        subtracted). Classic nets call GEX against put GEX at one strike — that is why a
        call and a put at the same shelf can cancel on the unsigned map.
      </p>
      <p className="gb-chart-note">{toyDisclaimer} Expiry payoff only.</p>
    </div>
  );
}
