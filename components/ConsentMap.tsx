"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";

/**
 * Google-Maps-Karte, DSGVO/TTDSG-konform: lädt erst nach aktiver Zustimmung.
 * Bis dahin kein externer Request an Google. Zustimmung wird in localStorage
 * gemerkt, damit sie beim nächsten Besuch nicht erneut abgefragt wird.
 */
const CONSENT_KEY = "cms3_maps_consent";

const query = encodeURIComponent(
  `${site.contact.company}, ${site.contact.street}, ${site.contact.zip} ${site.contact.city}`,
);
const embedSrc = `https://www.google.com/maps?q=${query}&z=15&output=embed`;
const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${query}`;

export function ConsentMap() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.getItem(CONSENT_KEY) === "1") {
      setLoaded(true);
    }
  }, []);

  function accept() {
    try {
      localStorage.setItem(CONSENT_KEY, "1");
    } catch {}
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div>
        <iframe
          title={`Standort ${site.contact.company}, ${site.contact.city}`}
          src={embedSrc}
          className="h-80 w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="flex items-center justify-between gap-4 border-t border-line bg-white px-5 py-3">
          <span className="text-sm text-ink-light">
            {site.contact.street}, {site.contact.zip} {site.contact.city}
          </span>
          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:underline"
          >
            Route planen
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex h-80 flex-col items-center justify-center gap-5 overflow-hidden px-6 text-center">
      {/* dezentes Karten-Raster als Hintergrund statt Deko-Kreis */}
      <div
        aria-hidden
        className="bg-grid absolute inset-0 bg-haze opacity-70"
        style={{ backgroundSize: "40px 40px" }}
      />
      <div className="relative">
        <p className="mx-auto max-w-sm text-sm leading-relaxed text-ink-light">
          Aus Datenschutzgründen wird die Karte erst nach Ihrer Zustimmung
          geladen. Dabei werden Daten an Google Maps übertragen.
        </p>
        <button onClick={accept} className="btn btn-primary mt-5">
          Google Maps laden
        </button>
        <p className="mt-4 text-xs text-ink-light/70">
          Alternativ:{" "}
          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-ink underline underline-offset-2 hover:text-brand"
          >
            direkt in Google Maps öffnen
          </a>
        </p>
      </div>
    </div>
  );
}
