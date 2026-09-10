import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import {getEntry} from '@site/src/data/glossary';

export default function DefinedTerm({
  id,
  children,
}: {
  id: string;
  children?: ReactNode;
}): JSX.Element {
  const entry = getEntry(id);
  const label = children ?? entry?.headword ?? id;
  if (!entry) {
    return <span>{label}</span>;
  }
  return (
    <Link
      className="gb-term"
      title={entry.shortDef}
      to="/docs/reference/glossary">
      {label}
    </Link>
  );
}
