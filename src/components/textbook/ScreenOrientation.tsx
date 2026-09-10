export default function ScreenOrientation({
  screen,
  axis,
  right,
  left,
  color,
  unit,
  expiry,
  clock,
}: {
  screen: string;
  axis: string;
  right: string;
  left: string;
  color: string;
  unit: string;
  expiry: string;
  clock: string;
}): JSX.Element {
  return (
    <aside className="gb-card">
      <p className="gb-kicker">Screen orientation</p>
      <h3>{screen}</h3>
      <p>
        Left and right mean different things on different Gexbot screens. Read this
        card before the first bar.
      </p>
      <dl className="gb-dl">
        <dt>Axis</dt>
        <dd>{axis}</dd>
        <dt>Right</dt>
        <dd>{right}</dd>
        <dt>Left</dt>
        <dd>{left}</dd>
        <dt>Color</dt>
        <dd>{color}</dd>
        <dt>Unit</dt>
        <dd>{unit}</dd>
        <dt>Expiry group</dt>
        <dd>{expiry}</dd>
        <dt>Clock</dt>
        <dd>{clock}</dd>
      </dl>
    </aside>
  );
}
