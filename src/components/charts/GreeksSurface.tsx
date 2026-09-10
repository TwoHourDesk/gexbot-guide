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
import {callDelta, gamma, putDelta} from './blackScholes';
import {chartTheme, toyDisclaimer} from './chartTheme';

export default function GreeksSurface({
  defaultMetric = 'gamma',
}: {
  defaultMetric?: 'delta' | 'gamma';
}): JSX.Element {
  const [spot, setSpot] = useState(5000);
  const [strike, setStrike] = useState(5000);
  const [dteHours, setDteHours] = useState(6);
  const [iv, setIv] = useState(0.16);
  const [metric, setMetric] = useState<'delta' | 'gamma'>(defaultMetric);
  const [right, setRight] = useState<'call' | 'put'>('call');

  const tYears = Math.max(dteHours, 0.25) / (365 * 24);

  const data = useMemo(() => {
    const rows = [];
    for (let s = strike - 120; s <= strike + 120; s += 2) {
      const d =
        right === 'call'
          ? callDelta(s, strike, tYears, iv)
          : putDelta(s, strike, tYears, iv);
      rows.push({
        spot: s,
        delta: d,
        gamma: gamma(s, strike, tYears, iv) * 100,
      });
    }
    return rows;
  }, [iv, right, strike, tYears]);

  return (
    <div className="gb-chart">
      <p className="gb-kicker">
        {metric === 'gamma'
          ? 'Why 0DTE ATM bars dominate Classic GEX'
          : 'Why DEX is share-equivalent'}
      </p>
      <div className="gb-controls">
        <label>
          Metric
          <select
            value={metric}
            onChange={(e) => setMetric(e.target.value as 'delta' | 'gamma')}>
            <option value="gamma">Gamma vs spot</option>
            <option value="delta">Delta vs spot</option>
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
          Hours to expiry {dteHours}
          <input
            type="range"
            min={0.5}
            max={72}
            step={0.5}
            value={dteHours}
            onChange={(e) => setDteHours(Number(e.target.value))}
          />
        </label>
        <label>
          IV {(iv * 100).toFixed(0)}%
          <input
            type="range"
            min={0.08}
            max={0.4}
            step={0.01}
            value={iv}
            onChange={(e) => setIv(Number(e.target.value))}
          />
        </label>
        <label>
          Spot {spot}
          <input
            type="range"
            min={4880}
            max={5120}
            value={spot}
            onChange={(e) => setSpot(Number(e.target.value))}
          />
        </label>
      </div>
      <div style={{width: '100%', height: 280}}>
        <ResponsiveContainer>
          <LineChart data={data}>
            <XAxis dataKey="spot" stroke={chartTheme.axis} />
            <YAxis stroke={chartTheme.axis} />
            <Tooltip />
            <ReferenceLine x={spot} stroke={chartTheme.text} />
            <ReferenceLine x={strike} stroke={chartTheme.call} strokeDasharray="4 4" />
            {metric === 'gamma' ? (
              <Line type="monotone" dataKey="gamma" stroke={chartTheme.plus} dot={false} />
            ) : (
              <Line type="monotone" dataKey="delta" stroke={chartTheme.put} dot={false} />
            )}
          </LineChart>
        </ResponsiveContainer>
      </div>
      <p>
        Drag hours toward zero: gamma peaks ATM and the call delta becomes a cliff.
        That is why a 0DTE print outweighs a far-dated debit on Gexbot.
      </p>
      <p className="gb-chart-note">{toyDisclaimer} Toy Black-Scholes.</p>
    </div>
  );
}
