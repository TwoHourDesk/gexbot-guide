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
  return (
    <figure className="gb-figure">
      <img src={src} alt={alt} />
      <figcaption>
        <strong>Official Gexbot UI</strong> (source: {source}). {teaching}
        {whoMustAct ? ` Who must act: ${whoMustAct}` : ''}
      </figcaption>
    </figure>
  );
}
