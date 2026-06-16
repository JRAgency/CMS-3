import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/lib/site";
import { ProductCard } from "@/components/ProductCard";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Produkte – Maschinen & Software für den Luftkanalbau",
  description:
    "plasmaWASP, plasmaDragon, varioFormer, viaDuct-3D, viaScanner, Profilierer und SDK 34 – innovative Maschinen und Software von CMS 3 für den Luftkanalbau.",
};

export default function ProduktePage() {
  const machines = products.filter((p) => p.category === "Maschine");
  const software = products.filter((p) => p.category === "Software");

  return (
    <>
      <PageHero
        eyebrow="Unsere Produkte"
        title="Maschinen & Software für den Luftkanalbau"
        subtitle="Vom schnellen Plasmaschneiden über das Sicken und Kanten bis zur durchgängigen Fertigungssoftware – ein aufeinander abgestimmtes System."
        crumb="Produkte"
      />

      <section className="container-px mx-auto max-w-[1400px] py-20 md:py-28">
        <h2 className="reveal text-2xl font-extrabold text-ink">Maschinen</h2>
        <div className="mt-8 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {machines.map((p, i) => (
            <div key={p.slug} className="reveal" data-delay={(i % 3) * 80}>
              <ProductCard product={p} index={products.indexOf(p)} />
            </div>
          ))}
        </div>

        <h2 className="reveal mt-20 text-2xl font-extrabold text-ink">Software</h2>
        <div className="mt-8 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {software.map((p, i) => (
            <div key={p.slug} className="reveal" data-delay={(i % 3) * 80}>
              <ProductCard product={p} index={products.indexOf(p)} />
            </div>
          ))}
        </div>

        <div className="reveal mt-16 flex flex-col items-center justify-between gap-6 rounded-3xl bg-haze p-10 text-center sm:flex-row sm:text-left">
          <div>
            <h3 className="text-xl font-extrabold text-ink">
              Nicht sicher, welche Lösung passt?
            </h3>
            <p className="mt-2 text-ink-light">
              Wir beraten Sie gerne bei der Planung Ihrer Fertigung.
            </p>
          </div>
          <Link href="/kontakt" className="btn btn-primary shrink-0">
            Beratung anfragen
          </Link>
        </div>
      </section>
    </>
  );
}
