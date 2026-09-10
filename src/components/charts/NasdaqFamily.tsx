import {toyDisclaimer} from './chartTheme';

export default function NasdaqFamily(): JSX.Element {
  return (
    <div className="gb-chart">
      <p className="gb-kicker">One basket, three contracts</p>
      <div className="gb-grid-3">
        <div>
          <p>
            <strong>NDX</strong>
          </p>
          <p>The Nasdaq-100 as a number. You cannot buy it. Gexbot leftover is built from options on this number.</p>
        </div>
        <div>
          <p>
            <strong>QQQ</strong>
          </p>
          <p>A fund that holds the same stocks. You can buy the shares. Its options are a different pile.</p>
        </div>
        <div>
          <p>
            <strong>NQ</strong>
          </p>
          <p>The future you already chart. $20 per point. Same basket, different contract.</p>
        </div>
      </div>
      <p className="gb-chart-note">
        {toyDisclaimer} Same 100 names. Three contracts. Not interchangeable prints.
      </p>
    </div>
  );
}
