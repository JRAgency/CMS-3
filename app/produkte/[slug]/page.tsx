import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { products, site } from "@/lib/site";
import { SpecTable } from "@/components/SpecTable";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};
  return {
    title: `${product.name} – ${product.headline}`,
    description: product.short,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const gallery = product.gallery ?? [product.image];
  const related = products.filter((p) => p.slug !== product.slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.short,
    category: product.category,
    brand: { "@type": "Brand", name: site.name },
    manufacturer: { "@type": "Organization", name: site.legalName },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Sub-Hero */}
      <section className="bg-anthracite-900 pb-12 pt-40 text-white">
        <div className="container-px mx-auto max-w-[1400px]">
          <nav className="mb-6 flex items-center gap-2 text-xs text-white/50">
            <Link href="/" className="hover:text-brand">Start</Link>
            <span>/</span>
            <Link href="/produkte" className="hover:text-brand">Produkte</Link>
            <span>/</span>
            <span className="text-white/80">{product.name}</span>
          </nav>
          <span className="rounded-full bg-brand px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider">
            {product.category}
          </span>
          <h1 className="mt-5 h-display">{product.name}</h1>
          <p className="mt-4 max-w-2xl text-lg text-gold-light">{product.headline}</p>
        </div>
      </section>

      {/* Galerie + Intro */}
      <section className="container-px mx-auto max-w-[1400px] py-16 md:py-24">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div className="reveal space-y-5">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-line bg-haze">
              <Image
                src={gallery[0]}
                alt={product.name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain p-6"
                priority
              />
            </div>
            {gallery.length > 1 && (
              <div className="grid grid-cols-3 gap-4">
                {gallery.slice(1).map((g) => (
                  <div
                    key={g}
                    className="relative aspect-square overflow-hidden rounded-2xl border border-line bg-haze"
                  >
                    <Image src={g} alt={product.name} fill sizes="20vw" className="object-contain p-3" />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="reveal" data-delay="100">
            <p className="eyebrow">Im Überblick</p>
            <p className="mt-5 text-lg leading-relaxed text-ink-light">{product.intro}</p>

            <ul className="mt-8 space-y-3">
              {product.features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  </span>
                  <span className="text-sm font-medium text-ink">{f}</span>
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="/kontakt" className="btn btn-primary">Datenblatt anfragen</Link>
              <a href={`tel:${site.contact.phoneHref}`} className="btn btn-outline text-brand">
                {site.contact.phone}
              </a>
            </div>
          </div>
        </div>

        {/* Technische Daten */}
        {product.specs && (
          <div className="mt-20">
            <div className="reveal mb-8 flex items-end justify-between">
              <h2 className="text-2xl font-extrabold text-ink">Technische Daten</h2>
              <span className="text-sm text-ink-light">{product.name}</span>
            </div>
            <div className="reveal mx-auto max-w-3xl">
              <SpecTable specs={product.specs} />
            </div>
          </div>
        )}
      </section>

      {/* Verwandte Produkte */}
      <section className="border-t border-line bg-haze py-20">
        <div className="container-px mx-auto max-w-[1400px]">
          <h2 className="reveal mb-10 text-2xl font-extrabold text-ink">
            Weitere Produkte
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {related.map((p) => (
              <Link
                key={p.slug}
                href={`/produkte/${p.slug}`}
                className="group flex items-center gap-4 rounded-2xl border border-line bg-white p-5 transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
                style={{ transitionTimingFunction: "var(--ease-signature)" }}
              >
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-haze">
                  <Image src={p.image} alt={p.name} fill sizes="64px" className="object-contain p-1.5" />
                </div>
                <div>
                  <p className="font-bold text-ink group-hover:text-brand">{p.name}</p>
                  <p className="mt-0.5 line-clamp-2 text-xs text-ink-light">{p.short}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
