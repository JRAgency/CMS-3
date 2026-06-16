"use client";

import { useState } from "react";

/**
 * Karte lädt erst nach aktiver Zustimmung (DSGVO/TTDSG).
 * Bis dahin nur ein Platzhalter ohne externe Requests.
 */
export function ConsentMap() {
  const [loaded, setLoaded] = useState(false);

  // OpenStreetMap-Embed rund um Steigerhügel 2, Kaiserslautern
  const src =
    "https://www.openstreetmap.org/export/embed.html?bbox=7.72%2C49.42%2C7.80%2C49.46&layer=mapnik&marker=49.4401%2C7.7491";

  if (loaded) {
    return (
      <iframe
        title="Standort CMS 3 GmbH, Kaiserslautern"
        src={src}
        className="h-72 w-full border-0"
        loading="lazy"
      />
    );
  }

  return (
    <div className="flex h-72 flex-col items-center justify-center gap-4 bg-haze px-6 text-center">
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 text-brand">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
      </span>
      <p className="max-w-xs text-sm text-ink-light">
        Aus Datenschutzgründen wird die Karte erst nach Ihrer Zustimmung geladen
        (externe Inhalte von OpenStreetMap).
      </p>
      <button onClick={() => setLoaded(true)} className="btn btn-primary">
        Karte laden
      </button>
    </div>
  );
}
