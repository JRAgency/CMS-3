"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { nav, site } from "@/lib/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [prodOpen, setProdOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Tier 1: Logo-Leiste */}
      <div
        className={`bg-white transition-all duration-500 ${
          scrolled ? "py-2" : "py-3"
        }`}
        style={{ transitionTimingFunction: "var(--ease-signature)" }}
      >
        <div className="container-px mx-auto flex max-w-[1400px] items-center justify-between gap-4">
          <Logo className={scrolled ? "h-11" : "h-14"} />

          <div className="hidden items-center gap-8 md:flex">
            <a
              href={`tel:${site.contact.phoneHref}`}
              className="group flex items-center gap-2.5 text-sm"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
              </span>
              <span className="leading-tight">
                <span className="block text-[0.7rem] uppercase tracking-wider text-ink-light">
                  Direkt anrufen
                </span>
                <span className="font-bold text-ink">{site.contact.phone}</span>
              </span>
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menü öffnen"
            aria-expanded={open}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-brand text-white md:hidden"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              {open ? (
                <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>
              ) : (
                <><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Gold-Trennband */}
      <div className="h-1 w-full bg-gold" />

      {/* Tier 2: Navigation (Desktop) */}
      <nav
        className={`hidden bg-brand text-white transition-shadow duration-500 md:block ${
          scrolled ? "shadow-lg" : ""
        }`}
      >
        <div className="container-px mx-auto flex max-w-[1400px] items-stretch justify-center">
          {nav.map((item) =>
            item.children ? (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setProdOpen(true)}
                onMouseLeave={() => setProdOpen(false)}
              >
                <Link
                  href={item.href}
                  className={`relative flex items-center gap-1.5 px-5 py-4 text-[0.82rem] font-bold uppercase tracking-wider transition-colors hover:bg-brand-700 ${
                    isActive(item.href) ? "bg-brand-700" : ""
                  }`}
                >
                  {item.label}
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="6 9 12 15 18 9" /></svg>
                  {isActive(item.href) && (
                    <span className="absolute inset-x-3 top-0 h-1 bg-gold" />
                  )}
                </Link>
                <div
                  className={`absolute left-1/2 top-full w-64 -translate-x-1/2 overflow-hidden rounded-b-xl bg-white text-ink shadow-2xl transition-all duration-300 ${
                    prodOpen
                      ? "pointer-events-auto translate-y-0 opacity-100"
                      : "pointer-events-none -translate-y-2 opacity-0"
                  }`}
                  style={{ transitionTimingFunction: "var(--ease-signature)" }}
                >
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block border-b border-line px-5 py-3 text-sm font-semibold transition-colors last:border-0 hover:bg-haze hover:text-brand"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-5 py-4 text-[0.82rem] font-bold uppercase tracking-wider transition-colors hover:bg-brand-700 ${
                  isActive(item.href) ? "bg-brand-700" : ""
                }`}
              >
                {item.label}
                {isActive(item.href) && (
                  <span className="absolute inset-x-3 top-0 h-1 bg-gold" />
                )}
              </Link>
            )
          )}
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 top-0 z-40 bg-anthracite-900/98 backdrop-blur transition-all duration-500 md:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
        style={{ transitionTimingFunction: "var(--ease-signature)" }}
      >
        <div className="flex h-full flex-col overflow-y-auto px-8 pb-10 pt-32">
          {nav.map((item) => (
            <div key={item.href} className="border-b border-white/10">
              <Link
                href={item.href}
                className="block py-4 text-lg font-bold uppercase tracking-wide text-white"
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="-mt-1 grid grid-cols-2 gap-x-4 gap-y-1 pb-4">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="py-1 text-sm text-gold-light"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a
            href={`tel:${site.contact.phoneHref}`}
            className="btn btn-gold mt-8 w-full"
          >
            {site.contact.phone}
          </a>
        </div>
      </div>
    </header>
  );
}
