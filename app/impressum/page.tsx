import type { Metadata } from "next";
import { site } from "@/lib/site";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum der CMS 3 GmbH, Kaiserslautern.",
  robots: { index: false, follow: true },
};

export default function ImpressumPage() {
  const i = site.impressum;
  return (
    <>
      <PageHero eyebrow="Rechtliches" title="Impressum" crumb="Impressum" />
      <section className="container-px mx-auto max-w-3xl py-20 md:py-28">
        <div className="space-y-8 text-ink-light">
          <Block title="Herausgeber">
            <p className="font-semibold text-ink">{i.company}</p>
            <p>
              {i.street}
              <br />
              {i.zip} {i.city}
            </p>
          </Block>

          <Block title="Geschäftsführer">
            <p>{i.ceo}</p>
          </Block>

          <Block title="Kontakt">
            <p>
              Telefon: {i.phone}
              <br />
              Fax: {i.fax}
              <br />
              E-Mail:{" "}
              <a href={`mailto:${i.email}`} className="text-brand hover:underline">
                {i.email}
              </a>
            </p>
          </Block>

          <Block title="Registereintrag">
            <p>Handelsregister: {i.hrb}</p>
          </Block>

          <Block title="Haftung für Inhalte">
            <p>
              Alle Rechte vorbehalten. Texte, Bilder, Grafiken, Sound, Animationen
              und Videos unterliegen dem Schutz des Urheberrechts und anderer
              Schutzgesetze. Der Inhalt dieser Website darf nicht zu kommerziellen
              Zwecken kopiert, verbreitet oder Dritten zugänglich gemacht werden.
              Irrtümer und Änderungen vorbehalten.
            </p>
          </Block>

          <Block title="Haftung für Links">
            <p>
              Sofern wir auf diesen Seiten Verknüpfungen zu anderen Seiten im
              Internet angelegt haben, haben wir auf deren Inhalte keinerlei
              Einfluss. Deshalb distanzieren wir uns hiermit ausdrücklich von allen
              Inhalten der verknüpften Seiten. Diese Erklärung gilt für alle auf
              dieser Website ausgebrachten Links.
            </p>
          </Block>
        </div>
      </section>
    </>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="mb-2 text-sm font-bold uppercase tracking-wider text-brand">
        {title}
      </h2>
      <div className="leading-relaxed">{children}</div>
    </div>
  );
}
