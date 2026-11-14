interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export default function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-14 max-w-2xl">
      <p className="mb-3 font-display text-sm uppercase tracking-[0.25em] text-sky-400">{eyebrow}</p>
      <h2 className="text-3xl font-bold leading-tight md:text-5xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-relaxed text-slate-400">{description}</p>}
    </div>
  );
}
