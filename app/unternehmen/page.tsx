import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { Stats } from "@/components/Stats";

export const metadata: Metadata = {
  title: "Unternehmen – CMS 3 GmbH aus Kaiserslautern",
  description:
    "Seit über 20 Jahren entwickelt und baut CMS 3 Maschinen, Steuerungen und Software für den Luftkanalbau – alles aus einer Hand, in Kaiserslautern.",
};

const values = [
  {
    title: "Alles aus einer Hand",
    desc: "Maschinen und Software entwickeln und bauen wir selbst – so passen wir uns flexibel an Ihre Kundenwünsche an.",
  },
  {
    title: "Höchste Verfügbarkeit",
    desc: "Integrierte Service- und Diagnosefunktionen sowie modularer Aufbau sorgen für die schnellste Wiederaufnahme der Produktion.",
  },
  {
    title: "Durchgängiges System",
    desc: "Von der Auftragserfassung bis zur Rechnung sind alle Produktionsschritte optimal aufeinander abgestimmt.",
  },
  {
    title: "Marktführend im DACH-Raum",
    desc: "Mit über 2.000 Installationen ist viaDuct-3D das bewährteste Bestellprogramm der Luftkanal-Branche.",
  },
];

export default function UnternehmenPage() {
  return (
    <>
      <PageHero
        eyebrow="Über CMS 3"
        title="Maschinen höchster Qualität – aus einer Hand"
        subtitle="Seit über 20 Jahren spezialisiert auf Maschinen, Steuerungen und Software für die Blechbearbeitung und den Luftkanalbau."
        crumb="Unternehmen"
      />

      <section className="container-px mx-auto max-w-[1400px] py-20 md:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="reveal">
            <p className="eyebrow">Unsere Geschichte</p>
            <h2 className="mt-5 h-section">Spezialisiert auf den Luftkanalbau</h2>
            <div className="mt-6 space-y-4 text-ink-light">
              <p>
                Seit über 20 Jahren sind wir darauf spezialisiert, Maschinen,
                Steuerungen und Software für den Produktionsbereich – insbesondere
                den Luftkanalbau – herzustellen. Wir entwickeln und bauen unsere
                Maschinen und Software selbst. Dadurch können wir uns an Ihre
                Kundenwünsche anpassen.
              </p>
              <p>
                Unsere Software deckt die Bereiche von der Auftragserfassung bis zur
                Fertigung in der Werkshalle ab. So sind alle Produktionsschritte
                optimal aufeinander abgestimmt – das garantiert schnelles Einlernen
                und einfaches Arbeiten mit unseren Produkten.
              </p>
              <p>
                Während andere Hersteller mit großen Service-Teams prahlen,
                überzeugen unsere Produkte durch eine sehr hohe Verfügbarkeit.
                Rationelle Fertigung – einfach und intuitiv zu bedienen.
              </p>
            </div>
          </div>
          <div className="reveal relative aspect-[4/5] overflow-hidden rounded-3xl" data-delay="100">
            <Image
              src="/img/cta-cutting.jpg"
              alt="Plasmaschneiden in der Fertigung"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-20 grid gap-6 sm:grid-cols-2">
          {values.map((v, i) => (
            <div
              key={v.title}
              className="reveal rounded-2xl border border-line bg-white p-7 transition-colors duration-500 hover:border-brand"
              data-delay={(i % 2) * 80}
            >
              <h3 className="text-lg font-bold text-ink">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-light">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

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

      <section className="container-px mx-auto max-w-[1400px] py-20">
        <div className="reveal flex flex-col items-center justify-between gap-6 rounded-3xl bg-anthracite-900 p-10 text-center text-white sm:flex-row sm:text-left md:p-14">
          <div>
            <h3 className="text-2xl font-extrabold">Lernen Sie uns kennen</h3>
            <p className="mt-2 text-white/70">
              Wir beraten Sie gerne bei der Planung Ihrer Fertigung.
            </p>
          </div>
          <Link href="/kontakt" className="btn btn-gold shrink-0">
            Kontakt aufnehmen
          </Link>
        </div>
      </section>
    </>
  );
}
