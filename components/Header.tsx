"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { nav, site } from "@/lib/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [prodOpen, setProdOpen] = useState(false);
  const pathname = usePathname();

  // Dropdown: kleine Schließverzögerung, damit der Weg zum Menü nicht abbricht
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const openProd = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setProdOpen(true);
  };
  const closeProd = () => {
    closeTimer.current = setTimeout(() => setProdOpen(false), 140);
  };

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
      <div
        className={`border-b bg-white/90 backdrop-blur-xl transition-all duration-500 ${
          scrolled ? "border-line shadow-[0_1px_0_0_rgba(22,17,15,0.04)]" : "border-transparent"
        }`}
        style={{ transitionTimingFunction: "var(--ease-signature)" }}
      >
        <div
          className={`container-px mx-auto flex max-w-[1560px] items-center gap-10 transition-all duration-500 ${
            scrolled ? "h-[62px]" : "h-[76px]"
          }`}
          style={{ transitionTimingFunction: "var(--ease-signature)" }}
        >
          <Logo className={scrolled ? "h-8" : "h-9"} />

          {/* Desktop-Navigation */}
          <nav className="hidden items-center gap-1 lg:flex">
            {nav.map((item) =>
              item.children ? (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={openProd}
                  onMouseLeave={closeProd}
                >
                  <Link
                    href={item.href}
                    className={`relative flex items-center gap-1 px-3 py-2 text-[0.95rem] font-medium transition-colors ${
                      isActive(item.href) ? "text-ink" : "text-ink-light hover:text-ink"
                    }`}
                  >
                    {item.label}
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><polyline points="6 9 12 15 18 9" /></svg>
                    <span
                      className={`absolute inset-x-3 -bottom-px h-0.5 bg-brand transition-transform duration-300 ${
                        isActive(item.href) ? "scale-x-100" : "scale-x-0"
                      }`}
                      style={{ transformOrigin: "center", transitionTimingFunction: "var(--ease-signature)" }}
                    />
                  </Link>
                  {/* pt-2 bildet eine unsichtbare Hover-Brücke über die Lücke.
                      Sichtbarkeit bewusst per Inline-Style (robust, unabhängig von Utilities). */}
                  <div
                    className="absolute left-0 top-full w-64 pt-2"
                    style={{
                      opacity: prodOpen ? 1 : 0,
                      pointerEvents: prodOpen ? "auto" : "none",
                      transition: "opacity 0.28s var(--ease-signature)",
                    }}
                  >
                    <div
                      className="overflow-hidden rounded-2xl border border-line bg-white shadow-2xl"
                      style={{
                        transform: prodOpen ? "translateY(0)" : "translateY(-6px)",
                        transition: "transform 0.28s var(--ease-signature)",
                      }}
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block border-b border-line-soft px-5 py-3 text-[0.92rem] font-medium text-ink-light transition-colors last:border-0 hover:bg-haze hover:text-brand"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group relative px-3 py-2 text-[0.95rem] font-medium transition-colors ${
                    isActive(item.href) ? "text-ink" : "text-ink-light hover:text-ink"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute inset-x-3 -bottom-px h-0.5 bg-brand transition-transform duration-300 group-hover:scale-x-100 ${
                      isActive(item.href) ? "scale-x-100" : "scale-x-0"
                    }`}
                    style={{ transformOrigin: "center", transitionTimingFunction: "var(--ease-signature)" }}
                  />
                </Link>
              )
            )}
          </nav>

          {/* Utility rechts */}
          <div className="ml-auto flex items-center gap-2">
            <a
              href={`tel:${site.contact.phoneHref}`}
              className="group hidden items-center gap-2 rounded-full px-3 py-2 text-[0.92rem] font-medium text-ink-light transition-colors hover:text-ink lg:flex"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
              {site.contact.phone}
            </a>
            <Link href="/kontakt" className="hidden rounded-full bg-ink px-5 py-2.5 text-[0.9rem] font-semibold text-white transition-all duration-300 hover:bg-brand lg:inline-flex" style={{ transitionTimingFunction: "var(--ease-signature)" }}>
              Beratung
            </Link>

            {/* Mobile toggle */}
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Menü öffnen"
              aria-expanded={open}
              className="flex h-10 w-10 items-center justify-center rounded-full text-ink lg:hidden"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                {open ? (
                  <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>
                ) : (
                  <><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 top-0 z-40 bg-anthracite-900/98 backdrop-blur transition-all duration-500 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
        style={{ transitionTimingFunction: "var(--ease-signature)" }}
      >
        <div className="flex h-full flex-col overflow-y-auto px-8 pb-10 pt-28">
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
          <a href={`tel:${site.contact.phoneHref}`} className="btn btn-primary mt-8 w-full">
            {site.contact.phone}
          </a>
        </div>
      </div>
    </header>
  );
}
