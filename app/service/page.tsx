import type { Metadata } from "next";
import { serviceContacts, softwareEditions, site } from "@/lib/site";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Service & Downloads – Support für Ihre CMS-3-Produkte",
  description:
    "Maschinen-Service, Software-Hotline, Fernwartung und Software-Downloads für viaDuct-3D. Schneller Support für Ihre CMS-3-Maschinen und -Software.",
};

export default function ServicePage() {
  return (
    <>
      <PageHero
        eyebrow="Service & Support"
        title="Schnelle Hilfe für Maschine & Software"
        subtitle="Hohe Verfügbarkeit durch integrierte Service- und Diagnosefunktionen – und persönlichen Support, wenn Sie ihn brauchen."
        crumb="Service"
      />

      {/* Service-Kontakte */}
      <section className="container-px mx-auto max-w-[1400px] py-20 md:py-28">
        <p className="eyebrow reveal">Ihre Ansprechpartner</p>
        <h2 className="reveal mt-5 h-section" data-delay="80">
          Service-Kontakte
        </h2>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {serviceContacts.map((c, i) => (
            <div
              key={c.role}
              className="reveal flex flex-col rounded-3xl border border-line bg-white p-8 shadow-[var(--shadow-card)]"
              data-delay={i * 90}
            >
              <h3 className="text-lg font-extrabold text-brand">{c.role}</h3>
              <p className="mt-2 text-sm text-ink-light">{c.desc}</p>
              <div className="mt-5 border-t border-line pt-5">
                <p className="font-semibold text-ink">{c.name}</p>
                <dl className="mt-3 space-y-1.5 text-sm text-ink-light">
                  <div className="flex gap-2">
                    <dt className="w-12 shrink-0 text-ink-light/70">Tel</dt>
                    <dd>
                      <a href={`tel:${c.phoneHref}`} className="font-medium text-ink hover:text-brand">
                        {c.phone}
                      </a>
                    </dd>
                  </div>
                  {c.mobile && (
                    <div className="flex gap-2">
                      <dt className="w-12 shrink-0 text-ink-light/70">Mobil</dt>
                      <dd className="font-medium text-ink">{c.mobile}</dd>
                    </div>
                  )}
                  <div className="flex gap-2">
                    <dt className="w-12 shrink-0 text-ink-light/70">Fax</dt>
                    <dd>{c.fax}</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="w-12 shrink-0 text-ink-light/70">Mail</dt>
                    <dd>
                      <a href={`mailto:${c.email}`} className="font-medium text-brand hover:underline">
                        {c.email}
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          ))}
        </div>

        <p className="reveal mt-8 rounded-2xl bg-haze p-5 text-sm text-ink-light">
          <span className="font-semibold text-ink">Hinweis:</span> Code-Anfragen für
          Programmaktivierungen bitte ausschließlich an{" "}
          <a href={`mailto:${site.contact.codeEmail}`} className="text-brand hover:underline">
            {site.contact.codeEmail}
          </a>
          . Mit einem Servicevertrag erhalten Sie eine VIP-Rufnummer, unter der Sie
          jederzeit einen unserer Techniker erreichen.
        </p>
      </section>

      {/* Downloads */}
      <section className="bg-haze py-20 md:py-28">
        <div className="container-px mx-auto max-w-[1400px]">
          <p className="eyebrow reveal">Software</p>
          <h2 className="reveal mt-5 h-section" data-delay="80">
            viaDuct-3D Downloads
          </h2>
          <p className="reveal mt-5 max-w-2xl text-ink-light" data-delay="120">
            Alle Versionen sind Vollversionen mit 30 Tagen Laufzeit. Danach erwerben
            Sie einen Freigabeschlüssel zur dauerhaften Aktivierung.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {softwareEditions.map((e, i) => (
              <div
                key={e.name}
                className="reveal flex items-start gap-5 rounded-3xl border border-line bg-white p-7"
                data-delay={(i % 2) * 80}
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
                </span>
                <div>
                  <h3 className="text-lg font-bold text-ink">{e.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-light">{e.desc}</p>
                  <a
                    href={`mailto:${site.contact.salesEmail}?subject=Download-Anfrage ${encodeURIComponent(e.name)}`}
                    className="mt-4 inline-flex items-center gap-1.5 text-[0.78rem] font-bold uppercase tracking-wider text-brand hover:underline"
                  >
                    Download anfragen
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fernwartung */}
      <section className="container-px mx-auto max-w-[1400px] py-20 md:py-28">
        <div className="reveal grid items-center gap-10 rounded-3xl bg-anthracite-900 p-10 text-white md:grid-cols-[1.5fr_1fr] md:p-14">
          <div>
            <p className="eyebrow eyebrow-light">Fernwartung · HelpDesk</p>
            <h2 className="mt-5 text-3xl font-extrabold">Direkte Hilfe per Fernzugriff</h2>
            <p className="mt-4 text-white/75">
              Mit unserer HelpDesk-Software lösen wir Software-Probleme schnell per
              Fernsteuerung Ihres PCs. Nehmen Sie telefonisch Kontakt mit unserem
              Support auf, starten Sie das Programm und teilen Sie uns Ihre
              Ident-Nummer mit – werktags von 8:00 bis 12:00 Uhr.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <a href={`tel:${site.contact.phoneHref}`} className="btn btn-gold w-full">
              Support: {site.contact.phone}
            </a>
            <a
              href={`mailto:${site.contact.serviceEmail}?subject=Fernwartung HelpDesk`}
              className="btn btn-ghost-light w-full"
            >
              {site.contact.serviceEmail}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
