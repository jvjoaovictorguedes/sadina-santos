export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && (
        <p className="mb-3 font-body text-sm text-[var(--color-brand)]">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl leading-tight text-[var(--color-ink)] md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-[var(--color-ink-soft)]">
          {description}
        </p>
      )}
    </div>
  );
}
