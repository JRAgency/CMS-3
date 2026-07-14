import Link from "next/link";
import { Logo } from "./Logo";
import { site, products } from "@/lib/site";

export function Footer() {
  const year = 2026;
  return (
    <footer className="relative overflow-hidden bg-anthracite text-white/70">
      {/* große Wordmark-Watermark */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-10 right-0 select-none text-[22vw] font-extrabold italic leading-none text-white/[0.03]"
      >
        CMS 3
      </div>

      <div className="container-px relative mx-auto max-w-[1400px] py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Spalte 1: Logo + Claim */}
          <div>
            <Logo variant="light" className="h-16" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed">
              Maschinen, Steuerungen und Software für die Blechbearbeitung und den
              Luftkanalbau – seit über 20 Jahren aus einer Hand.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={`tel:${site.contact.phoneHref}`}
                aria-label="Anrufen"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-brand/45 text-brand transition-colors hover:bg-brand hover:text-white"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
              </a>
              <a
                href={`mailto:${site.contact.email}`}
                aria-label="E-Mail"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-brand/45 text-brand transition-colors hover:bg-brand hover:text-white"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 5L2 7" /></svg>
              </a>
            </div>
          </div>

          {/* Spalte 2: Produkte */}
          <div>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-wider text-white">
              Produkte
            </h3>
            <ul className="space-y-2.5 text-sm">
              {products.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/produkte/${p.slug}`}
                    className="transition-colors hover:text-brand"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Spalte 3: Navigation */}
          <div>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-wider text-white">
              Unternehmen
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: "Über uns", href: "/unternehmen" },
                { label: "Referenzen", href: "/referenzen" },
                { label: "Service & Downloads", href: "/service" },
                { label: "Kontakt", href: "/kontakt" },
                { label: "Impressum", href: "/impressum" },
                { label: "Datenschutz", href: "/datenschutz" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="transition-colors hover:text-brand">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Spalte 4: Kontakt */}
          <div>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-wider text-white">
              Kontakt
            </h3>
            <address className="space-y-2 text-sm not-italic leading-relaxed">
              <p className="font-semibold text-white">{site.contact.company}</p>
              <p>
                {site.contact.street}
                <br />
                {site.contact.zip} {site.contact.city}
              </p>
              <p className="pt-2">
                <span className="text-white/50">Tel </span>
                <a href={`tel:${site.contact.phoneHref}`} className="text-brand hover:underline">
                  {site.contact.phone}
                </a>
              </p>
              <p>
                <span className="text-white/50">Fax </span>
                {site.contact.fax}
              </p>
              <p>
                <a href={`mailto:${site.contact.email}`} className="text-brand hover:underline">
                  {site.contact.email}
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/45 md:flex-row">
          <p>
            © {year} {site.legalName}. Alle Rechte vorbehalten.
          </p>
          <p>
            Gestaltung &amp; Umsetzung:{" "}
            <span className="text-white/70">JR Agency Services</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
