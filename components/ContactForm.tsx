"use client";

import { useState } from "react";

const field =
  "w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink-light/60 focus:border-brand";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  // Demo: kein Backend angebunden. Für den Livebetrieb hier eine
  // Server-Action / API-Route (z. B. Resend, Formspree) einsetzen.  // TODO Kunde
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center rounded-3xl border border-line bg-haze px-8 py-16 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand text-white">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
        </div>
        <h3 className="mt-6 text-2xl font-extrabold text-ink">Vielen Dank!</h3>
        <p className="mt-3 max-w-md text-sm text-ink-light">
          Ihre Anfrage ist bei uns eingegangen. Wir melden uns schnellstmöglich
          bei Ihnen zurück.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-line bg-white p-7 shadow-[var(--shadow-card)] sm:p-9"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-ink-light">
            Vorname
          </label>
          <input name="vorname" required className={field} placeholder="Max" />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-ink-light">
            Name
          </label>
          <input name="name" required className={field} placeholder="Mustermann" />
        </div>
        <div className="sm:col-span-2">
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-ink-light">
            Unternehmen
          </label>
          <input name="firma" className={field} placeholder="Musterfirma GmbH" />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-ink-light">
            E-Mail
          </label>
          <input type="email" name="email" required className={field} placeholder="max@firma.de" />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-ink-light">
            Telefon
          </label>
          <input name="telefon" className={field} placeholder="+49 …" />
        </div>
        <div className="sm:col-span-2">
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-ink-light">
            Ihre Nachricht
          </label>
          <textarea
            name="nachricht"
            required
            rows={5}
            className={`${field} resize-none`}
            placeholder="Wie können wir Ihnen helfen?"
          />
        </div>
      </div>

      <label className="mt-5 flex items-start gap-3 text-xs text-ink-light">
        <input type="checkbox" required className="mt-0.5 h-4 w-4 shrink-0 accent-[var(--color-brand)]" />
        <span>
          Ich habe die <a href="/datenschutz" className="text-brand underline">Datenschutzerklärung</a> gelesen
          und stimme der Verarbeitung meiner Daten zur Bearbeitung der Anfrage zu.
        </span>
      </label>

      <button type="submit" className="btn btn-primary mt-7 w-full sm:w-auto">
        Anfrage senden
      </button>
    </form>
  );
}
