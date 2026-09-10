import {useState} from 'react';
import {toyDisclaimer} from './chartTheme';

const windows = [
  {
    id: 'open',
    name: 'Cash open → ~11:00',
    legal:
      'Latest residual as a so-far map. Early RTH 09:29–11:00 if you map to ES/NQ. Need enough leftover to name a major (knowability).',
    leak: 'Using 15:50 net GEX or last-hour −vanna as if it were known at 09:35. Using full-book zero gamma as a 0DTE open line.',
    pressure: 'Mandate on the initial hedge (already done). Pending gamma re-hedge if spot moves. Charm is weak.',
  },
  {
    id: 'mid',
    name: '11:00 → 15:00',
    legal: 'Full RTH residual. Sequence (H3) can name day-type. Latest still default.',
    leak: 'Copying last-hour magnet logic onto midday. After 11:00, do not fold converted walls into an early-RTH volume claim.',
    pressure: 'Pending gamma re-hedge still path-conditional. Customer incentive (OP) if a node is approached.',
  },
  {
    id: 'last',
    name: 'Last 60–120 minutes',
    legal:
      '−vanna / charm on today’s residual (beta). 0DTE short-convexity as a pin family. Different instrument than the open.',
    leak: 'Promoting a morning trade from a −vanna stack. Pooling this family with 09:29–11:00.',
    pressure: 'Clock-forced dealer re-hedge (mandate). $800MM / $1000MM SPX notes are folklore.',
  },
  {
    id: 'know',
    name: 'Knowability clock',
    legal:
      'You need leftover to name majors. Usually after the open auction, not 09:30:01. A so-far map will keep rewriting.',
    leak: 'Treating a stack that printed after the touch as if it were known at the touch.',
    pressure: 'None until residual exists.',
  },
] as const;

export default function ClockFamilies(): JSX.Element {
  const [id, setId] = useState<(typeof windows)[number]['id']>('open');
  const w = windows.find((x) => x.id === id)!;
  return (
    <div className="gb-chart">
      <p className="gb-kicker">Clock family — legal claim vs leak</p>
      <div className="gb-controls">
        {windows.map((x) => (
          <button
            key={x.id}
            type="button"
            className={`button button--sm ${x.id === id ? 'button--primary' : 'button--secondary'}`}
            onClick={() => setId(x.id)}>
            {x.name}
          </button>
        ))}
      </div>
      <dl className="gb-dl">
        <dt>Legal in this family</dt>
        <dd>{w.legal}</dd>
        <dt>Labeling leak</dt>
        <dd>{w.leak}</dd>
        <dt>Pressure live</dt>
        <dd>{w.pressure}</dd>
      </dl>
      <p className="gb-chart-note">{toyDisclaimer} Cash RTH 09:30–16:00 ET is the classified-tape clock.</p>
    </div>
  );
}
