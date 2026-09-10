import {useState} from 'react';

export default function CheckYourself({
  items,
}: {
  items: {q: string; a: string}[];
}): JSX.Element {
  const [open, setOpen] = useState<Record<number, boolean>>({});
  return (
    <div>
      {items.map((item, i) => (
        <aside className="gb-card" key={item.q}>
          <p className="gb-kicker">Check yourself</p>
          <p>
            <strong>{item.q}</strong>
          </p>
          <button
            type="button"
            className="button button--sm button--secondary"
            onClick={() => setOpen((s) => ({...s, [i]: !s[i]}))}>
            {open[i] ? 'Hide answer' : 'Show answer'}
          </button>
          {open[i] ? <p>{item.a}</p> : null}
        </aside>
      ))}
    </div>
  );
}
