import {useState} from 'react';
import {toyDisclaimer} from './chartTheme';

export default function ResidualScale(): JSX.Element {
  const [buys, setBuys] = useState(8);
  const [sells, setSells] = useState(5);
  const residual = buys - sells;
  const tape = buys + sells;
  const width = Math.max(Math.abs(residual), 1);
  return (
    <div className="gb-chart">
      <p className="gb-kicker">Residual vs tape width</p>
      <div className="gb-controls">
        <label>
          Customer buys {buys}
          <input
            type="range"
            min={0}
            max={20}
            value={buys}
            onChange={(e) => setBuys(Number(e.target.value))}
          />
        </label>
        <label>
          Customer sells {sells}
          <input
            type="range"
            min={0}
            max={20}
            value={sells}
            onChange={(e) => setSells(Number(e.target.value))}
          />
        </label>
      </div>
      <p>
        Tape width (two-way volume): <strong>{tape}</strong>. Residual (needle):{' '}
        <strong>{residual}</strong>. Pressure:{' '}
        <strong>{residual === 0 ? 'none' : residual > 0 ? 'leftover long' : 'leftover short'}</strong>.
      </p>
      <div
        style={{
          position: 'relative',
          height: 28,
          background: '#292524',
          borderRadius: 8,
          overflow: 'hidden',
        }}>
        <div
          style={{
            position: 'absolute',
            left: '50%',
            width: `${(width / 20) * 50}%`,
            height: '100%',
            background: residual >= 0 ? '#34d399' : '#fb7185',
            transform: residual >= 0 ? 'translateX(0)' : 'translateX(-100%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: 0,
            bottom: 0,
            width: 2,
            background: '#e7e5e4',
          }}
        />
      </div>
      <p className="gb-chart-note">
        {toyDisclaimer} Same contract only. Matching weights cancel. Quiet ladder ≠
        nothing traded.
      </p>
    </div>
  );
}
