import Link from '@docusaurus/Link';
import {sortedGlossary} from '@site/src/data/glossary';

export default function KeywordIndex(): JSX.Element {
  const rows = sortedGlossary().flatMap((e) => {
    const names = [e.headword, ...(e.aliases ?? [])];
    return names.map((name) => ({name, entry: e}));
  });
  rows.sort((a, b) => a.name.localeCompare(b.name, 'en', {sensitivity: 'base'}));

  return (
    <div>
      {rows.map(({name, entry}) => (
        <p key={`${entry.id}-${name}`}>
          <strong>{name}</strong>
          {name !== entry.headword ? ` → ${entry.headword}` : ''}
          {' · '}
          <Link to={`/docs/${entry.firstDefinedIn}`}>
            <strong>{entry.firstDefinedIn}</strong>
          </Link>
          {entry.alsoAppears?.map((p) => (
            <span key={p}>
              {', '}
              <Link to={`/docs/${p}`}>{p}</Link>
            </span>
          ))}
          {entry.seeAlso?.length ? ` · see also ${entry.seeAlso.join(', ')}` : ''}
        </p>
      ))}
    </div>
  );
}
