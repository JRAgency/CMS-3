import type { Metadata } from "next";
import { site } from "@/lib/site";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung der CMS 3 GmbH.",
  robots: { index: false, follow: true },
};

export default function DatenschutzPage() {
  return (
    <>
      <PageHero eyebrow="Rechtliches" title="Datenschutz" crumb="Datenschutz" />
      <section className="container-px mx-auto max-w-3xl py-20 md:py-28">
        <div className="space-y-8 leading-relaxed text-ink-light">
          <p className="rounded-2xl bg-haze p-5 text-sm">
            <span className="font-semibold text-ink">Hinweis (Demo):</span> Dies ist
            eine Muster-Datenschutzerklärung für die Demo. Vor dem Livegang ist sie
            durch eine rechtssichere, auf den tatsächlichen Datenverarbeitungs-
            betrieb abgestimmte Fassung zu ersetzen (z. B. anwaltlich geprüft).
          </p>

          <Block title="1. Verantwortlicher">
            <p>
              {site.impressum.company}, {site.impressum.street},{" "}
              {site.impressum.zip} {site.impressum.city}. <br />
              E-Mail:{" "}
              <a href={`mailto:${site.contact.email}`} className="text-brand hover:underline">
                {site.contact.email}
              </a>
            </p>
          </Block>

          <Block title="2. Erhebung und Speicherung personenbezogener Daten">
            <p>
              Beim Aufrufen unserer Website werden durch den Browser automatisch
              Informationen an den Server gesendet und temporär in Logfiles
              gespeichert (IP-Adresse, Datum/Uhrzeit, aufgerufene Seite, Browsertyp).
              Diese Daten dienen der technischen Bereitstellung und Sicherheit und
              werden nicht mit anderen Datenquellen zusammengeführt.
            </p>
          </Block>

          <Block title="3. Kontaktformular">
            <p>
              Wenn Sie uns über das Kontaktformular Anfragen zukommen lassen, werden
              Ihre Angaben zur Bearbeitung der Anfrage und für mögliche
              Anschlussfragen gespeichert. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b
              bzw. f DSGVO.
            </p>
          </Block>

          <Block title="4. Schriften & externe Inhalte">
            <p>
              Schriftarten werden lokal eingebunden (kein externer Google-Fonts-
              Request). Externe Inhalte wie Kartenmaterial werden erst nach Ihrer
              ausdrücklichen Zustimmung geladen.
            </p>
          </Block>

          <Block title="5. Ihre Rechte">
            <p>
              Sie haben das Recht auf Auskunft, Berichtigung, Löschung,
              Einschränkung der Verarbeitung, Datenübertragbarkeit sowie Widerspruch.
              Zudem steht Ihnen ein Beschwerderecht bei einer Aufsichtsbehörde zu.
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
      <h2 className="mb-2 text-lg font-bold text-ink">{title}</h2>
      {children}
    </div>
  );
}
