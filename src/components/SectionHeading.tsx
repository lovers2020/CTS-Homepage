type SectionHeadingProps = {
  title: string;
  description: string;
  tone?: "light" | "dark";
};

export function SectionHeading({
  title,
  description,
  tone = "dark",
}: SectionHeadingProps) {
  return (
    <header className={`section-heading section-heading--${tone}`}>
      <p className="section-heading__eyebrow">CANTOPS</p>
      <h2>{title}</h2>
      <div className="section-heading__divider" aria-hidden="true">
        <span />
        <i />
        <span />
      </div>
      <p className="section-heading__description">{description}</p>
    </header>
  );
}
