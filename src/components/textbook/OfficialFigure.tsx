import useBaseUrl from '@docusaurus/useBaseUrl';

export default function OfficialFigure({
  src,
  alt,
  source,
  teaching,
  whoMustAct,
}: {
  src: string;
  alt: string;
  source: string;
  teaching: string;
  whoMustAct?: string;
}): JSX.Element {
  const href = useBaseUrl(src);
  return (
    <figure className="gb-figure">
      <img src={href} alt={alt} />
      <figcaption>
        <strong>Official Gexbot UI</strong> (source: {source}). {teaching}
        {whoMustAct ? ` Who must act: ${whoMustAct}` : ''}
      </figcaption>
    </figure>
  );
}
