import Link from "next/link";
import Image from "next/image";
import { products, site } from "@/lib/site";
import { Stats } from "@/components/Stats";
import { ClientMarquee } from "@/components/ClientMarquee";
import { MachineFinder } from "@/components/MachineFinder";

const quickActions = [
  {
    label: "01",
    title: "Fertigungsberatung",
    desc: "Wir analysieren Ihren Werkstatt-Ablauf und empfehlen die passende Kombination aus Maschine und Software.",
    href: "/kontakt",
    cta: "Beratung anfragen",
  },
  {
    label: "02",
    title: "Technische Daten",
    desc: "Arbeitsbereiche, Blechstärken, Editionen und Schnittstellen – alle Spezifikationen im Überblick.",
    href: "/produkte",
    cta: "Zu den Produkten",
  },
  {
    label: "03",
    title: "2.000+ Installationen",
    desc: "viaDuct-3D Customer ist das bewährteste Bestellprogramm der Luftkanal-Branche, weltweit im Einsatz.",
    href: "/referenzen",
    cta: "Referenzen ansehen",
  },
  {
    label: "04",
    title: "Service aus einer Hand",
    desc: "Ersatzteile, Wartung und Software-Hotline direkt vom Hersteller – kein Umweg über Dritte.",
    href: "/service",
    cta: "Service & Support",
  },
];

const flagship = products.find((p) => p.slug === "plasmawasp")!;
const software = products.find((p) => p.slug === "viaduct-3d")!;

export default function HomePage() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-anthracite-900">
        <Image
          src="/img/hero-plasma.jpg"
          alt="Plasmaschneidanlage in der Fertigung für den Luftkanalbau"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-anthracite-900 via-anthracite-900/40 to-anthracite-900/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-anthracite-900/75 via-anthracite-900/20 to-transparent" />

        <div className="container-px relative mx-auto w-full max-w-[1560px] pb-14 pt-40 md:pb-20">
          <p className="eyebrow eyebrow-light reveal">Luftkanalbau-Systeme</p>
          <h1 className="reveal mt-6 max-w-[18ch] text-white h-display" data-delay="80">
            Das komplette System für den Luftkanalbau
          </h1>
          <p className="reveal lead mt-7 max-w-xl text-white/80" data-delay="160">
            Maschinen, Steuerungen und Software – entwickelt und gebaut aus einer
            Hand. Vom Auftrag bis zum LKW.
          </p>
          <div className="reveal mt-9 flex flex-wrap gap-3" data-delay="240">
            <Link href="/produkte" className="btn btn-primary">
              Maschinen entdecken
            </Link>
            <Link href="/kontakt" className="btn btn-ghost-light">
              Beratung anfragen
            </Link>
          </div>
        </div>

        {/* Technische Spec-Leiste */}
        <div className="reveal relative w-full border-t border-white/15" data-delay="320">
          <div className="container-px mx-auto grid max-w-[1560px] grid-cols-1 divide-white/15 sm:grid-cols-3 sm:divide-x">
            {[
              { k: "Standort", v: "Kaiserslautern, DE" },
              { k: "Erfahrung", v: "20+ Jahre Luftkanalbau" },
              { k: "System", v: "viaDuct-3D · 8 Sprachen" },
            ].map((d) => (
              <div key={d.k} className="flex items-baseline gap-3 py-5 sm:px-7 sm:first:pl-0">
                <span className="text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-gold-light">
                  {d.k}
                </span>
                <span className="text-sm font-semibold text-white/90">{d.v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- MASCHINEN-FINDER (Audi-Modellraster) ---------- */}
      <section className="container-px mx-auto max-w-[1560px] py-24 md:py-32">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow reveal">Unser Programm</p>
            <h2 className="reveal mt-5 h-section" data-delay="80">
              Maschinen &amp; Software im Überblick
            </h2>
          </div>
          <p className="reveal max-w-md text-ink-light" data-delay="120">
            Vom Plasmaschneiden über das Umformen bis zur Fertigungssoftware –
            jede Komponente greift ins System.
          </p>
        </div>
        <div className="reveal" data-delay="160">
          <MachineFinder />
        </div>
      </section>

      {/* ---------- QUICK ACTIONS ---------- */}
      <section className="border-y border-line bg-haze">
        <div className="container-px mx-auto max-w-[1560px]">
          <div className="grid grid-cols-1 divide-y divide-line md:grid-cols-2 md:divide-x lg:grid-cols-4 lg:divide-y-0">
            {quickActions.map((a, i) => (
              <Link
                key={a.title}
                href={a.href}
                className="group reveal flex flex-col p-8 transition-colors duration-300 hover:bg-white md:p-10"
                data-delay={(i % 4) * 70}
              >
                <span className="text-sm font-semibold text-brand">{a.label}</span>
                <h3 className="mt-4 text-xl font-bold tracking-tight text-ink">
                  {a.title}
                </h3>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-ink-light">
                  {a.desc}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink transition-colors group-hover:text-brand">
                  {a.cta}
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- FLAGSHIP SHOWCASE (dunkel, cinematic) ---------- */}
      <section className="relative overflow-hidden bg-anthracite-900">
        <Image
          src="/img/hero-sparks.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-anthracite-900 via-anthracite-900/70 to-anthracite-900/20" />
        <div className="container-px relative mx-auto grid max-w-[1560px] items-center gap-12 py-24 md:py-32 lg:grid-cols-2">
          <div>
            <p className="eyebrow eyebrow-light reveal">Flaggschiff</p>
            <h2 className="reveal mt-5 text-white h-section" data-delay="80">
              {flagship.name}
            </h2>
            <p className="reveal lead mt-6 max-w-lg text-white/80" data-delay="140">
              {flagship.short}
            </p>
            <div className="reveal mt-9 grid max-w-lg grid-cols-3 gap-4 border-y border-white/15 py-6" data-delay="180">
              {flagship.specs?.slice(0, 3).map((s) => (
                <div key={s.label}>
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-gold-light">
                    {s.label}
                  </p>
                  <p className="mt-1 text-sm font-bold text-white">{s.value}</p>
                </div>
              ))}
            </div>
            <div className="reveal mt-9 flex flex-wrap gap-3" data-delay="220">
              <Link href={`/produkte/${flagship.slug}`} className="btn btn-primary">
                Maschine ansehen
              </Link>
              <Link href="/kontakt" className="btn btn-ghost-light">
                Angebot anfragen
              </Link>
            </div>
          </div>
          <div className="reveal relative aspect-[4/3] overflow-hidden rounded-3xl bg-white/95 shadow-2xl" data-delay="160">
            <Image
              src={flagship.image}
              alt={flagship.name}
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-contain p-10"
            />
          </div>
        </div>
      </section>

      {/* ---------- SOFTWARE SHOWCASE (hell, editorial) ---------- */}
      <section className="container-px mx-auto max-w-[1560px] py-24 md:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="reveal relative order-2 aspect-[4/3] overflow-hidden rounded-3xl bg-haze lg:order-1">
            <Image
              src={software.image}
              alt={software.name}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="eyebrow reveal">Fertigungssoftware</p>
            <h2 className="reveal mt-5 h-section" data-delay="80">
              {software.name}
            </h2>
            <p className="reveal lead mt-6 max-w-lg text-ink-light" data-delay="140">
              {software.intro}
            </p>
            <ul className="reveal mt-8 max-w-lg space-y-3" data-delay="180">
              {software.features.slice(0, 4).map((f) => (
                <li key={f} className="flex gap-3 text-ink">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <span className="text-[0.98rem] leading-relaxed">{f}</span>
                </li>
              ))}
            </ul>
            <Link href={`/produkte/${software.slug}`} className="btn btn-dark reveal mt-9" data-delay="220">
              Software entdecken
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- KENNZAHLEN (dunkles Band) ---------- */}
      <section className="bg-grid-dark relative overflow-hidden bg-anthracite-900 py-20 md:py-24">
        <div className="container-px relative mx-auto max-w-[1560px]">
          <div className="grid items-end gap-x-12 gap-y-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="reveal">
              <p className="eyebrow eyebrow-light">In Zahlen</p>
              <h2 className="mt-6 max-w-[12ch] text-white h-section">
                Bewährt, nicht behauptet
              </h2>
            </div>
            <div className="reveal" data-delay="120">
              <Stats />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- REFERENZEN ---------- */}
      <section className="border-y border-line bg-white py-20">
        <div className="container-px mx-auto max-w-[1560px]">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="eyebrow reveal justify-center">Referenzen</p>
            <h2 className="reveal mt-5 h-section" data-delay="80">
              Vertraut von Kunden aus aller Welt
            </h2>
            <p className="reveal mt-4 text-ink-light" data-delay="120">
              Mit über 2.000 Installationen ist viaDuct-3D Customer das
              bewährteste Bestellprogramm der Luftkanal-Branche.
            </p>
          </div>
        </div>
        <ClientMarquee />
      </section>

      {/* ---------- CTA ---------- */}
      <section className="relative overflow-hidden bg-anthracite-900 py-24 md:py-32">
        <Image
          src="/img/cta-cutting.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="container-px relative mx-auto max-w-[1560px] text-center">
          <h2 className="reveal mx-auto max-w-3xl text-balance text-white h-section">
            Bereit für eine rationellere Fertigung?
          </h2>
          <p className="reveal mx-auto mt-6 max-w-xl text-lg text-white/75" data-delay="100">
            Sprechen Sie mit uns über die optimale Ausstattung Ihrer Werkstatt –
            von der Software bis zur Maschine.
          </p>
          <div className="reveal mt-10 flex flex-wrap justify-center gap-3" data-delay="160">
            <Link href="/kontakt" className="btn btn-primary">
              Jetzt Kontakt aufnehmen
            </Link>
            <a href={`tel:${site.contact.phoneHref}`} className="btn btn-ghost-light">
              {site.contact.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
