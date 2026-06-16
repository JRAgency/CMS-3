import Link from "next/link";
import Image from "next/image";
import { products, site } from "@/lib/site";
import { ProductCard } from "@/components/ProductCard";
import { Stats } from "@/components/Stats";
import { ClientMarquee } from "@/components/ClientMarquee";

const workflow = [
  { n: "01", title: "Auftragserfassung", desc: "Ihre Kunden bestellen selbst mit viaDuct-3D Customer – die Bestellung kommt direkt in die Fertigung." },
  { n: "02", title: "Arbeitsvorbereitung", desc: "Auf Knopfdruck entstehen Werkstattpapiere, Etiketten und CNC-Daten für jede Maschine." },
  { n: "03", title: "Fertigung", desc: "Daten stehen über das Firmennetzwerk an plasmaWASP, plasmaDragon & varioFormer bereit." },
  { n: "04", title: "Verladekontrolle", desc: "Mit viaScanner wird jedes Teil beim Verladen erfasst – kein Teil bleibt liegen." },
  { n: "05", title: "Rechnung", desc: "Nach Rückmeldung ins Büro erstellen Sie die Rechnung auf Knopfdruck." },
];

const ticker = [
  "Plasmaschneiden",
  "Luftkanalbau",
  "Blechbearbeitung",
  "CNC-Steuerungen",
  "Fertigungssoftware",
  "Schalldämpferkulissen",
  "Made in Kaiserslautern",
];

export default function HomePage() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-anthracite-900">
        <Image
          src="/img/hero-sparks.jpg"
          alt="Funkenflug bei der Blechbearbeitung für den Luftkanalbau"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-anthracite-900 via-anthracite-900/55 to-anthracite-900/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-anthracite-900/80 to-transparent" />

        <div className="container-px relative mx-auto w-full max-w-[1400px] pb-12 pt-44 md:pb-16">
          <p className="eyebrow tag-light reveal">Luftkanalbau-Systeme</p>
          <h1 className="reveal mt-7 max-w-[16ch] text-white h-display" data-delay="80">
            Maschinen &amp; Software für den{" "}
            <span className="text-brand">Luftkanalbau</span>
          </h1>
          <p className="reveal mt-7 max-w-lg text-lg leading-relaxed text-white/85" data-delay="160">
            {site.claim} Maschinen, Steuerungen und Software – entwickelt und
            gebaut aus einer Hand.
          </p>
          <div className="reveal mt-9 flex flex-wrap gap-4" data-delay="240">
            <Link href="/produkte" className="btn btn-primary">
              Produkte entdecken
            </Link>
            <Link href="/kontakt" className="btn btn-ghost-light">
              Beratung anfragen
            </Link>
          </div>
        </div>

        {/* Technische Spec-Leiste */}
        <div className="reveal relative w-full border-t border-white/15" data-delay="320">
          <div className="container-px mx-auto grid max-w-[1400px] grid-cols-1 divide-white/15 sm:grid-cols-3 sm:divide-x">
            {[
              { k: "Standort", v: "Kaiserslautern, DE" },
              { k: "Erfahrung", v: "20+ Jahre Luftkanalbau" },
              { k: "System", v: "viaDuct-3D · 8 Sprachen" },
            ].map((d) => (
              <div key={d.k} className="flex items-baseline gap-3 py-5 sm:px-7 sm:first:pl-0">
                <span className="mono text-[0.7rem] uppercase tracking-wider text-gold-light">
                  {d.k}
                </span>
                <span className="text-sm font-semibold text-white/90">{d.v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- TICKER ---------- */}
      <div className="border-b border-line bg-anthracite py-4 text-white">
        <div className="flex items-center gap-3 overflow-hidden">
          <div className="marquee-track flex w-max animate-marquee items-center">
            {[...ticker, ...ticker].map((t, i) => (
              <span key={i} className="flex items-center text-sm font-semibold uppercase tracking-wider text-white/70">
                <span className="px-7">{t}</span>
                <span className="text-gold">◆</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ---------- SYSTEM / USP ---------- */}
      <section className="container-px mx-auto max-w-[1400px] py-24 md:py-32">
        <div className="grid items-end gap-x-12 gap-y-6 border-b border-line pb-12 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <p className="eyebrow reveal">Durchgängiges System</p>
            <h2 className="reveal mt-6 max-w-[18ch] h-section" data-delay="80">
              Vom Auftrag bis zum LKW, alles greift ineinander
            </h2>
          </div>
          <p className="reveal text-lg leading-relaxed text-ink-light lg:pb-2" data-delay="140">
            Unsere Software deckt jeden Schritt ab, von der Auftragserfassung bis
            zur Fertigung in der Werkshalle. So sind alle Produktionsschritte
            aufeinander abgestimmt.
          </p>
        </div>

        {/* Desktop: horizontaler Prozesspfad */}
        <div className="reveal relative mt-24 hidden lg:block">
          {/* Schiene */}
          <div className="absolute left-[10%] right-[10%] top-[38px] h-px -translate-y-1/2 bg-ink/12" />
          <div className="absolute left-[10%] right-[10%] top-[38px] h-px -translate-y-1/2 bg-gradient-to-r from-gold/70 to-brand" />
          {/* Terminal-Markierungen */}
          <div className="absolute left-[10%] top-[38px] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold ring-4 ring-white" />
          <div className="absolute right-[10%] top-[38px] h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand ring-4 ring-white" />
          <span className="mono absolute right-[10%] top-0 -translate-x-1/2 -translate-y-8 whitespace-nowrap text-[0.62rem] uppercase tracking-wider text-brand">
            → Versand
          </span>

          <div className="grid grid-cols-5">
            {workflow.map((step) => (
              <div key={step.n} className="group flex flex-col items-center px-5 text-center">
                <div
                  className="relative z-10 grid h-[76px] w-[76px] place-items-center rounded-full bg-white shadow-[0_16px_36px_-14px_rgba(28,27,26,0.35)] transition-transform duration-500 group-hover:-translate-y-1.5"
                  style={{ transitionTimingFunction: "var(--ease-signature)" }}
                >
                  <span className="absolute inset-0 rounded-full ring-1 ring-ink/12 transition-colors duration-500 group-hover:ring-brand" />
                  <span className="absolute inset-[8px] rounded-full border border-dashed border-ink/15" />
                  <span className="mono text-lg font-bold tracking-tight text-ink transition-colors duration-500 group-hover:text-brand">
                    {step.n}
                  </span>
                </div>
                <h3 className="mt-7 text-lg font-bold tracking-tight text-ink">
                  {step.title}
                </h3>
                <p className="mt-2.5 max-w-[22ch] text-sm leading-relaxed text-ink-light">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile / Tablet: vertikaler Prozesspfad */}
        <ol className="relative mt-16 lg:hidden">
          <div className="absolute bottom-10 left-[38px] top-4 w-px -translate-x-1/2 bg-gradient-to-b from-gold/70 to-brand" />
          {workflow.map((step, i) => (
            <li
              key={step.n}
              className="reveal group flex gap-6 pb-10 last:pb-0"
              data-delay={i * 70}
            >
              <div className="relative z-10 grid h-[76px] w-[76px] shrink-0 place-items-center rounded-full bg-white shadow-[0_16px_36px_-14px_rgba(28,27,26,0.3)]">
                <span className="absolute inset-0 rounded-full ring-1 ring-ink/12 transition-colors duration-500 group-hover:ring-brand" />
                <span className="absolute inset-[8px] rounded-full border border-dashed border-ink/15" />
                <span className="mono text-lg font-bold text-ink transition-colors duration-500 group-hover:text-brand">
                  {step.n}
                </span>
              </div>
              <div className="pt-3.5">
                <h3 className="text-lg font-bold tracking-tight text-ink">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-light">{step.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* ---------- PRODUKTE ---------- */}
      <section className="bg-haze py-24 md:py-32">
        <div className="container-px mx-auto max-w-[1400px]">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="eyebrow reveal">Unsere Produkte</p>
              <h2 className="reveal mt-5 h-section" data-delay="80">
                Innovative Maschinen &amp; Software
              </h2>
            </div>
            <Link href="/produkte" className="btn btn-outline text-brand reveal" data-delay="120">
              Alle Produkte
            </Link>
          </div>

          <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p, i) => (
              <div key={p.slug} className="reveal" data-delay={(i % 3) * 90}>
                <ProductCard product={p} index={i} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- ÜBER UNS + STATS ---------- */}
      <section className="container-px mx-auto max-w-[1400px] py-24 md:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="reveal relative aspect-[5/6] overflow-hidden rounded-3xl">
            <Image
              src="/img/about-coil.jpg"
              alt="Blechbearbeitung – galvanisiertes Blech in der Fertigung"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-anthracite-900/70 to-transparent p-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-gold-light">
                Rationelle Fertigung
              </p>
              <p className="mt-1 text-xl font-bold text-white">
                Einfach &amp; intuitiv zu bedienen
              </p>
            </div>
          </div>

          <div>
            <p className="eyebrow reveal">Über CMS 3</p>
            <h2 className="reveal mt-5 h-section" data-delay="80">
              Maschinen höchster Qualität – aus einer Hand
            </h2>
            <div className="reveal mt-6 space-y-4 text-ink-light" data-delay="140">
              <p>
                Seit über 20 Jahren sind wir darauf spezialisiert, Maschinen,
                Steuerungen und Software für den Produktionsbereich – insbesondere
                den Luftkanalbau – herzustellen. Weil wir alles selbst entwickeln
                und bauen, können wir uns an Ihre Kundenwünsche anpassen.
              </p>
              <p>
                Während andere Hersteller mit großen Service-Teams prahlen,
                überzeugen unsere Produkte durch sehr hohe Verfügbarkeit:
                integrierte Service- und Diagnosefunktionen sowie ein modularer
                Aufbau sorgen im seltenen Störungsfall für die schnellste
                Wiederaufnahme der Produktion.
              </p>
            </div>
            <Link href="/unternehmen" className="btn btn-primary reveal mt-8" data-delay="200">
              Mehr über uns
            </Link>
          </div>
        </div>

      </section>

      {/* ---------- KENNZAHLEN (dunkles Band) ---------- */}
      <section className="bg-grid-dark relative overflow-hidden bg-anthracite-900 py-20 md:py-24">
        <div className="container-px relative mx-auto max-w-[1400px]">
          <div className="grid items-end gap-x-12 gap-y-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="reveal">
              <p className="eyebrow tag-light">In Zahlen</p>
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
        <div className="container-px mx-auto max-w-[1400px]">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="eyebrow reveal justify-center">Referenzen</p>
            <h2 className="reveal mt-5 text-3xl font-extrabold tracking-tight md:text-4xl" data-delay="80">
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
        <div className="container-px relative mx-auto max-w-[1400px] text-center">
          <h2 className="reveal mx-auto max-w-3xl text-balance text-white h-section">
            Bereit für eine rationellere Fertigung?
          </h2>
          <p className="reveal mx-auto mt-6 max-w-xl text-lg text-white/75" data-delay="100">
            Sprechen Sie mit uns über die optimale Ausstattung Ihrer Werkstatt –
            von der Software bis zur Maschine.
          </p>
          <div className="reveal mt-10 flex flex-wrap justify-center gap-4" data-delay="160">
            <Link href="/kontakt" className="btn btn-gold">
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
