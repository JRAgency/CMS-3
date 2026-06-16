import type { Metadata } from "next";
import { site } from "@/lib/site";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { ConsentMap } from "@/components/ConsentMap";

export const metadata: Metadata = {
  title: "Kontakt – CMS 3 GmbH in Kaiserslautern",
  description:
    "Nehmen Sie Kontakt mit CMS 3 auf: Steigerhügel 2, 67659 Kaiserslautern. Wir beraten Sie gerne zu Maschinen und Software für den Luftkanalbau.",
};

export default function KontaktPage() {
  return (
    <>
      <PageHero
        eyebrow="Kontakt"
        title="Wir beraten Sie gerne"
        subtitle="Ob Maschine, Software oder die optimale Ausstattung Ihrer Werkstatt – schreiben Sie uns oder rufen Sie direkt an."
        crumb="Kontakt"
      />

      <section className="container-px mx-auto max-w-[1400px] py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          {/* Kontaktdaten */}
          <div className="reveal">
            <p className="eyebrow">Direkt erreichbar</p>
            <h2 className="mt-5 text-3xl font-extrabold text-ink">{site.contact.company}</h2>

            <div className="mt-8 space-y-6">
              <ContactRow
                label="Adresse"
                icon={<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />}
                extraIcon={<circle cx="12" cy="10" r="3" />}
              >
                {site.contact.street}
                <br />
                {site.contact.zip} {site.contact.city}
              </ContactRow>

              <ContactRow
                label="Telefon"
                icon={<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />}
              >
                <a href={`tel:${site.contact.phoneHref}`} className="hover:text-brand">
                  {site.contact.phone}
                </a>
                <br />
                <span className="text-sm text-ink-light">Fax {site.contact.fax}</span>
              </ContactRow>

              <ContactRow
                label="E-Mail"
                icon={<><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 5L2 7" /></>}
              >
                <a href={`mailto:${site.contact.email}`} className="hover:text-brand">
                  {site.contact.email}
                </a>
                <br />
                <a href={`mailto:${site.contact.salesEmail}`} className="text-sm text-ink-light hover:text-brand">
                  {site.contact.salesEmail} (Verkauf)
                </a>
              </ContactRow>
            </div>

            <div className="mt-10 overflow-hidden rounded-3xl border border-line">
              <ConsentMap />
            </div>
          </div>

          {/* Formular */}
          <div className="reveal" data-delay="120">
            <p className="eyebrow">Anfrage senden</p>
            <h2 className="mt-5 text-3xl font-extrabold text-ink">Schreiben Sie uns</h2>
            <p className="mt-3 text-ink-light">
              Wir melden uns schnellstmöglich bei Ihnen zurück.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactRow({
  label,
  icon,
  extraIcon,
  children,
}: {
  label: string;
  icon: React.ReactNode;
  extraIcon?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand/10 text-brand">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {icon}
          {extraIcon}
        </svg>
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-ink-light">{label}</p>
        <p className="mt-1 font-medium text-ink">{children}</p>
      </div>
    </div>
  );
}
