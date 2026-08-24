export function SectionHeading({
  index,
  title,
  subtitle,
}: {
  index: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="max-w-2xl">
      <div className="font-display flex items-center gap-3 text-[10px] tracking-[0.35em] text-signal">
        <span className="hairline h-px w-10" />
        {index}
      </div>
      <h2 className="headline chrome-text mt-4 text-4xl sm:text-5xl">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{subtitle}</p>
      )}
    </div>
  );
}
