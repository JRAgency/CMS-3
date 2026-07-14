import type { Metadata } from "next";
import { site, serviceContacts } from "@/lib/site";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { ConsentMap } from "@/components/ConsentMap";

export const metadata: Metadata = {
  title: "Kontakt – CMS 3 GmbH in Kaiserslautern",
  description:
    "Nehmen Sie Kontakt mit CMS 3 auf: Steigerhügel 2, 67659 Kaiserslautern. Direkte Ansprechpartner für Verkauf, Service und Ersatzteile.",
};

export default function KontaktPage() {
  return (
    <>
      <PageHero
        eyebrow="Kontakt"
        title="Wir beraten Sie gerne"
        subtitle="Ob Maschine, Software oder die optimale Ausstattung Ihrer Werkstatt – schreiben Sie uns oder rufen Sie direkt den richtigen Ansprechpartner an."
        crumb="Kontakt"
      />

      <section className="container-px mx-auto max-w-[1560px] py-20 md:py-28">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr]">
          {/* ---------- Linke Spalte: Erreichbarkeit ---------- */}
          <div className="reveal">
            <p className="eyebrow">Direkt erreichbar</p>
            <h2 className="mt-5 h-section">So erreichen Sie uns</h2>

            {/* Stammdaten als editoriale Liste (keine Deko-Kreise) */}
            <dl className="mt-9 border-t border-line">
              <InfoRow label="Anschrift">
                {site.contact.company}
                <br />
                {site.contact.street}, {site.contact.zip} {site.contact.city}
              </InfoRow>
              <InfoRow label="Telefon">
                <a href={`tel:${site.contact.phoneHref}`} className="font-semibold text-ink hover:text-brand">
                  {site.contact.phone}
                </a>
                <span className="ml-3 text-sm text-ink-light">Fax {site.contact.fax}</span>
              </InfoRow>
              <InfoRow label="E-Mail">
                <a href={`mailto:${site.contact.email}`} className="font-semibold text-ink hover:text-brand">
                  {site.contact.email}
                </a>
              </InfoRow>
              <InfoRow label="Erreichbarkeit">
                Werktags telefonisch &amp; per E-Mail
                <span className="ml-3 text-sm text-ink-light">
                  Software-Hotline 8:00 – 12:00 Uhr
                </span>
              </InfoRow>
            </dl>

            {/* Direkte Ansprechpartner — echter Mehrwert */}
            <p className="eyebrow mt-14">Ihre Ansprechpartner</p>
            <h3 className="mt-4 text-2xl font-bold tracking-tight text-ink">
              Direkt zur richtigen Person
            </h3>
            <ul className="mt-7 border-t border-line">
              {serviceContacts.map((c) => (
                <li key={c.role} className="border-b border-line py-6">
                  <p className="text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-brand">
                    {c.role}
                  </p>
                  <p className="mt-2 text-lg font-bold text-ink">{c.name}</p>
                  <p className="mt-1 text-sm leading-relaxed text-ink-light">{c.desc}</p>
                  <div className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-1 text-sm">
                    <a href={`tel:${c.phoneHref}`} className="font-semibold text-ink hover:text-brand">
                      {c.phone}
                    </a>
                    {c.mobile && (
                      <span className="text-ink-light">Mobil {c.mobile}</span>
                    )}
                    <a href={`mailto:${c.email}`} className="font-medium text-brand hover:underline">
                      {c.email}
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* ---------- Rechte Spalte: Formular ---------- */}
          <div className="reveal lg:sticky lg:top-28 lg:self-start" data-delay="120">
            <p className="eyebrow">Anfrage senden</p>
            <h2 className="mt-5 h-section">Schreiben Sie uns</h2>
            <p className="mt-4 max-w-lg text-ink-light">
              Beschreiben Sie kurz Ihr Vorhaben – wir melden uns in der Regel
              innerhalb eines Werktags mit einer konkreten Einschätzung zurück.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Standort / Karte ---------- */}
      <section className="border-t border-line bg-haze py-20 md:py-24">
        <div className="container-px mx-auto max-w-[1560px]">
          <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">Standort</p>
              <h2 className="mt-5 h-section">So finden Sie uns</h2>
            </div>
            <p className="max-w-md text-ink-light">
              Unser Werk liegt am Steigerhügel in Kaiserslautern – zentral in der
              Pfalz, gut erreichbar über die A6.
            </p>
          </div>
          <div className="overflow-hidden rounded-3xl border border-line bg-white shadow-[var(--shadow-card)]">
            <ConsentMap />
          </div>
        </div>
      </section>
    </>
  );
}

function InfoRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[8rem_1fr] items-baseline gap-4 border-b border-line py-5 sm:grid-cols-[10rem_1fr]">
      <dt className="text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-ink-light">
        {label}
      </dt>
      <dd className="text-ink">{children}</dd>
    </div>
  );
}
