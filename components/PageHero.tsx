import Link from "next/link";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  crumb,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  crumb: string;
}) {
  return (
    <section className="bg-grid-dark relative overflow-hidden bg-anthracite-900 pb-16 pt-40 text-white md:pb-20">
      {/* dezente diagonale Akzentfläche */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 h-full w-1/3 bg-brand/10"
        style={{ clipPath: "polygon(40% 0, 100% 0, 100% 100%, 0 100%)" }}
      />
      <div className="container-px relative mx-auto max-w-[1400px]">
        <nav className="mono mb-7 flex items-center gap-2 text-[0.72rem] uppercase tracking-wider text-white/45">
          <Link href="/" className="transition-colors hover:text-brand">
            Start
          </Link>
          <span>/</span>
          <span className="text-white/75">{crumb}</span>
        </nav>
        <p className="eyebrow tag-light">{eyebrow}</p>
        <h1 className="mt-6 max-w-4xl h-display">{title}</h1>
        {subtitle && (
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/75">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
