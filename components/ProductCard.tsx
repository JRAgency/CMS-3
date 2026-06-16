import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/lib/site";

export function ProductCard({
  product,
  index,
}: {
  product: Product;
  index?: number;
}) {
  const code =
    (product.category === "Software" ? "SW" : "MX") +
    "-" +
    String((index ?? 0) + 1).padStart(2, "0");
  const lead = product.specs?.[0];

  return (
    <Link
      href={`/produkte/${product.slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-md border border-line bg-white transition-all duration-500 hover:border-brand hover:shadow-[var(--shadow-card)]"
      style={{ transitionTimingFunction: "var(--ease-signature)" }}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-haze">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-contain p-6 transition-transform duration-700 group-hover:scale-[1.04]"
          style={{ transitionTimingFunction: "var(--ease-signature)" }}
        />
        <div className="absolute left-4 top-4 flex items-center gap-2">
          <span className="mono bg-anthracite px-2 py-1 text-[0.62rem] font-medium uppercase tracking-wider text-white">
            {product.category}
          </span>
        </div>
        <span className="mono absolute right-4 top-4 text-[0.7rem] text-ink-light/50">
          {code}
        </span>
      </div>

      <div className="flex flex-1 flex-col border-t border-line p-7">
        <h3 className="text-xl font-extrabold tracking-tight text-ink">
          {product.name}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-light">
          {product.short}
        </p>

        {lead && (
          <div className="mono mt-5 flex items-baseline justify-between border-t border-line-soft pt-4 text-[0.7rem]">
            <span className="uppercase tracking-wider text-ink-light/60">
              {lead.label}
            </span>
            <span className="font-medium text-ink">{lead.value}</span>
          </div>
        )}

        <span className="mono mt-5 inline-flex items-center gap-2 text-[0.72rem] font-medium uppercase tracking-wider text-brand">
          Mehr erfahren
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
