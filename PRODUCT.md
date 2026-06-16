# CMS 3 GmbH — Website

**Register:** brand (Marketing-/Markensite; Design ist das Produkt)

## Was
B2B-Website für CMS 3 GmbH (Kaiserslautern) — Hersteller von **Maschinen, Steuerungen und Software für den Luftkanalbau** (Plasmaschneiden, Sicken/Kanten, Fertigungssoftware viaDuct-3D). Marktführend im DACH-Raum, über 2.000 Software-Installationen, über 20 Jahre Erfahrung. Alles aus einer Hand: Maschinen + Software selbst entwickelt.

## Zielgruppe
Technische Entscheider im Luftkanal-/Lüftungsbau: Werkstattleiter, Geschäftsführer kleiner/mittlerer Kanalbau-Betriebe, Einkauf. Erwarten technische Präzision, Verfügbarkeit, Vertrauen — keine Marketing-Floskeln.

## Marken-Voice (3 Worte)
Präzise · robust-industriell · ingenieurmäßig (engineered).

## Designsystem
- **Farbstrategie:** Committed — Markenrot `#CC3300` als kräftiger Akzent, Gold/Bronze `#BD9A65` sparsam, Anthrazit `#3E3E3D`/Near-Black für dunkle Sektionen, Weiß als Fläche.
- **Typografie:** Archivo (Display/Body, industrieller Grotesk) + JetBrains Mono (technische Labels, Specs, Daten = Spec-Sheet-Voice, nicht Kostüm).
- **Layout:** asymmetrisch/editorial statt Dauer-Zentrierung; Hairline-Raster; Mono-Tags als bewusstes Brand-System (nicht Eyebrow-Reflex).
- **Vorlage/Gerüst:** Layout-Struktur angelehnt an modellbau-doerr.de (Hero, Wechsel-Sektionen, Footer), eigenständig umgesetzt.

## Stack
Next.js 15 (App Router) + React 19 + Tailwind v4 (@theme in app/globals.css) + TS. Inhalte zentral in `lib/site.ts`. Bilder in `public/img/`. Preview: `npm run start` (Port 3000).

## Nicht tun
Generische zentrierte Eyebrow→Headline→Absatz-Wiederholung, uniforme Soft-Shadow-Card-Grids, Marketing-Buzzwords, Em-Dashes.
