import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { clients } from "@/lib/site";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Referenzen – Kunden von CMS 3 aus aller Welt",
  description:
    "Über 30 Referenzkunden aus aller Welt vertrauen auf die Maschinen und Software von CMS 3. viaDuct-3D Customer ist mit 2.000 Installationen marktführend.",
};

export default function ReferenzenPage() {
  return (
    <>
      <PageHero
        eyebrow="Referenzen"
        title="Vertraut von Kunden aus aller Welt"
        subtitle="Vor allem in den deutschsprachigen Ländern sind unsere Produkte marktführend. Schließen auch Sie sich der Gruppe an, die sich für den Erfolg entschieden hat."
        crumb="Referenzen"
      />

      <section className="container-px mx-auto max-w-[1400px] py-20 md:py-28">
        <div className="reveal mx-auto mb-14 max-w-3xl text-center">
          <p className="text-lg leading-relaxed text-ink-light">
            viaDuct-3D Customer ist bereits seit rund 10 Jahren auf dem Markt und
            mit <span className="font-bold text-brand">2.000 Installationen</span> das
            wohl weitverbreiteste und bewährteste Eingabe- und Bestellprogramm der
            Luftkanal-Branche.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {clients.map((c, i) => (
            <div
              key={c.file}
              className="reveal flex h-28 items-center justify-center rounded-2xl border border-line bg-white p-6 transition-shadow duration-500 hover:shadow-[var(--shadow-card)]"
              data-delay={(i % 5) * 60}
              title={c.name}
            >
              <Image
                src={`/img/clients/${c.file}`}
                alt={c.name}
                width={150}
                height={70}
                unoptimized
                className="max-h-14 w-auto object-contain opacity-80 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0"
              />
            </div>
          ))}
        </div>

        <div className="reveal mt-16 rounded-3xl bg-haze p-10 text-center">
          <h2 className="text-2xl font-extrabold text-ink">
            Werden Sie Teil unserer Erfolgsgeschichte
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-ink-light">
            Erfahren Sie, wie unser System Ihre Fertigung im Luftkanalbau
            rationeller und sicherer macht.
          </p>
          <Link href="/kontakt" className="btn btn-primary mt-7">
            Jetzt anfragen
          </Link>
        </div>
      </section>
    </>
  );
}
