"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const KEY = "cms3-consent";

export function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setShow(true);
    } catch {
      /* localStorage nicht verfügbar */
    }
  }, []);

  function decide(value: "all" | "essential") {
    try {
      localStorage.setItem(KEY, value);
    } catch {
      /* ignore */
    }
    setShow(false);
  }

  if (!show) return null;

  return (
    <div className="fixed inset-x-3 bottom-3 z-[60] mx-auto max-w-2xl rounded-2xl border border-line bg-white p-6 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] sm:inset-x-6">
      <p className="text-sm leading-relaxed text-ink-light">
        Wir verwenden nur technisch notwendige Cookies. Externe Inhalte (z. B.
        Karten) werden erst nach Ihrer Zustimmung geladen. Mehr in der{" "}
        <Link href="/datenschutz" className="text-brand underline">
          Datenschutzerklärung
        </Link>
        .
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <button onClick={() => decide("all")} className="btn btn-primary">
          Alle akzeptieren
        </button>
        <button onClick={() => decide("essential")} className="btn btn-outline text-ink">
          Nur essenzielle
        </button>
      </div>
    </div>
  );
}
