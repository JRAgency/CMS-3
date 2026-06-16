// Zentrale Inhalts- & Konfigurationsdatei für die CMS 3 GmbH Website.
// Alle Texte/Daten stammen aus der Analyse der alten Seite cms3.com (siehe website-analyse/ANALYSE.md).

export const site = {
  name: "CMS 3 GmbH",
  legalName: "CMS 3 GmbH",
  domain: "cms3.com",
  url: "https://cms3.com",
  tagline: "Maschinen & Software für den Luftkanalbau",
  claim: "Das komplette System – vom Auftrag bis zum LKW.",
  description:
    "CMS 3 GmbH entwickelt und baut seit über 20 Jahren Maschinen, Steuerungen und Software für die Blechbearbeitung und den Luftkanalbau. Maschinen und Software aus einer Hand.",
  founded: "Über 20 Jahre Erfahrung",

  contact: {
    company: "CMS 3 GmbH",
    street: "Steigerhügel 2",
    zip: "67659",
    city: "Kaiserslautern",
    country: "Deutschland",
    phone: "+49 (0)631 7501103",
    phoneHref: "+496317501103",
    fax: "+49 (0)631 7501104",
    email: "info@cms3.com",
    salesEmail: "sales@cms3.com",
    serviceEmail: "service@cms3.com",
    partsEmail: "parts@cms3.com",
    codeEmail: "code@cms3.com",
  },

  impressum: {
    company: "CMS 3 GmbH",
    ceo: "Dipl. Ing. (FH) Hermann J. Buser",
    street: "Steigerhügel 2",
    zip: "D-67659",
    city: "Kaiserslautern",
    hrb: "HRB 3456",
    phone: "+49 (0)631 7501103",
    fax: "+49 (0)631 7501104",
    email: "info@cms3.com",
  },

  // Kennzahlen / Trust
  stats: [
    { value: 20, suffix: "+", label: "Jahre Erfahrung im Luftkanalbau" },
    { value: 2000, suffix: "", label: "Installationen von viaDuct-3D Customer" },
    { value: 8, suffix: "", label: "Sprachen in unserer Software" },
    { value: 30, suffix: "+", label: "Referenzkunden weltweit" },
  ],
} as const;

export type Product = {
  slug: string;
  name: string;
  category: "Maschine" | "Software";
  short: string;
  headline: string;
  intro: string;
  image: string;
  gallery?: string[];
  features: string[];
  specs?: { label: string; value: string }[];
};

export const products: Product[] = [
  {
    slug: "plasmawasp",
    name: "plasmaWASP",
    category: "Maschine",
    short: "Die schnellste Plasma-Schneidanlage mit Beschriftung der Teile.",
    headline: "Die ideale Maschine für den Luftkanalbau",
    intro:
      "Zuverlässiges, kostengünstiges und vor allem sehr schnelles Zuschneiden von dünnen Blechen bis 10 mm Stärke. Eine moderne CNC-Steuerung und Plasma-Stromquelle liefern qualitativ hochwertige Schnitte, die nicht nachbearbeitet werden müssen. Serienmäßig mit Markierungsstift zum fehlerfreien Beschriften der Teile.",
    image: "/img/wasp.jpg",
    features: [
      "Schneiden dünner Bleche bis 10 mm – ohne Nachbearbeitung",
      "Integrierter Markierungsstift für fehlerfreien Zusammenbau",
      "Wartungsfreier Zahnriemen für lange Lebensdauer",
      "Mitfahrendes Absaugsystem mit optionalem Umweltfilter",
    ],
    specs: [
      { label: "Arbeitsbereich", value: "1,5 m × 3 m" },
      { label: "Verfahrgeschwindigkeit", value: "max. 25 m/min" },
      { label: "Wiederholgenauigkeit", value: "ca. ±0,2 mm/m" },
      { label: "Blechstärke", value: "bis max. 12 mm Stahl St37" },
      { label: "Antrieb", value: "beidseitige Führung, Zahnriemen, bürstenlose Motoren" },
      { label: "Steuerung", value: "moderne CNC-Steuerung, 19-Zoll-Einschub" },
      { label: "Bedieneinheit", value: "PC mit 17″ Anzeige, Edelstahl-Tastatur, Ethernet" },
      { label: "Datenformate", value: "CMS, G-Code, ESSI, DXF/EXF, HPGL, SGV, DWG" },
    ],
  },
  {
    slug: "plasmadragon",
    name: "plasmaDragon",
    category: "Maschine",
    short: "Noch mehr Produktivität durch zwei Arbeitsbereiche in einer Maschine.",
    headline: "Noch mehr Produktivität durch zwei Tische in einem",
    intro:
      "Zwei Arbeitsbereiche von je 3 × 1,5 m, die auch als ein großer Bereich von 6 × 1,5 m für größere Teile nutzbar sind – für deutlich höhere Produktivität. Robuste Ausführung mit spielfreien Zahnstangen und neuem, patentiertem Absaugsystem mit seitlich mitfahrendem Absaugstutzen.",
    image: "/img/dragon.jpg",
    features: [
      "Zwei Arbeitsbereiche – kombinierbar zu 6 × 1,5 m",
      "Spielfreie Zahnstangen in X-Richtung",
      "Patentiertes Absaugsystem mit integriertem Absaugkanal",
      "Beidseitiges Auflegen der Bleche",
    ],
    specs: [
      { label: "Arbeitsbereich", value: "1,5 m × 6 m (doppelt) oder 1,5 m × 3 m" },
      { label: "Verfahrgeschwindigkeit", value: "max. 25 m/min" },
      { label: "Wiederholgenauigkeit", value: "ca. ±0,2 mm/m" },
      { label: "Blechstärke", value: "bis max. 18 mm Stahl St37" },
      { label: "Antrieb", value: "Zahnstangen X-Achse, Zahnriemen Y-Achse, bürstenlos" },
      { label: "Absaugung", value: "patentiertes Kammernsystem, mitfahrender Stutzen" },
      { label: "Datenformate", value: "CMS, G-Code, ESSI, DXF/EXF, HPGL, SGV, DWG" },
    ],
  },
  {
    slug: "varioformer",
    name: "varioFormer",
    category: "Maschine",
    short: "Schneiden, Sicken und Kanten – mit einer einzigen Maschine.",
    headline: "Schneiden, Sicken und Kanten – mit einer Maschine",
    intro:
      "Der varioFormer schließt die Lücke zwischen Coil-Fertigungsmaschinen und der manuellen Fertigung von Blechkanälen. Ein patentiertes Kombinationswerkzeug ermöglicht die rationelle Fertigung von Luftkanälen mit unterschiedlichen Längenmaßen – drei Arbeitsgänge an einer Maschine.",
    image: "/img/vario.jpg",
    gallery: ["/img/vario.jpg", "/img/vario_schema.jpg"],
    features: [
      "Patentiertes Kombinationswerkzeug: Schneiden, Sicken, Kanten",
      "Automatisches Anschlagsystem für alle Maße",
      "Kompakte Bauweise, wenig Aufstellfläche",
      "Ein Kanal 400×400×1200 in nur 1–2 Minuten",
    ],
    specs: [
      { label: "Breite Schere & Kantbank", value: "2500 mm" },
      { label: "Schnittleistung", value: "1,25 mm Stahl / 1,0 mm V2A" },
      { label: "Biegewinkel", value: "7–90° ±3° (parametrierbar)" },
      { label: "Positioniergenauigkeit", value: "±1 mm" },
      { label: "Querschnitte", value: "100 bis 2500 mm" },
      { label: "Kanalformen", value: "1-teilig, L-Typ, U-Typ, 4-teilig" },
      { label: "Abmessungen", value: "4050 × 3280 × 1070 mm (L×B×H)" },
      { label: "Elektro-Anschluss", value: "3×400 V, 50 Hz, 16 A, 4 kW" },
    ],
  },
  {
    slug: "viaduct-3d",
    name: "viaDuct-3D",
    category: "Software",
    short: "Die umfassendste Software, speziell auf den Luftkanalbau zugeschnitten.",
    headline: "Die Fertigungssoftware für den Luftkanalbau",
    intro:
      "viaDuct-3D verwaltet den kompletten Fertigungsablauf – von der Bestellung über die Arbeitsvorbereitung und Rechnungsstellung bis zur Erstellung der Werkstattpapiere und CNC-Daten für jede Maschine in der Werkstatt. Effiziente Fertigung beginnt schon bei der Auftragserfassung.",
    image: "/img/viaduct.jpg",
    gallery: ["/img/viaduct.jpg", "/img/nesting.jpg"],
    features: [
      "Auftragserfassung mit automatischen Fertigungszugaben",
      "Sofortige 2D-, 3D- und Abwicklungs-Darstellung",
      "Kunden bestellen selbst mit viaDuct-3D Customer",
      "Automatische Verschachtelung & Teilebeschriftung",
      "Offene Architektur mit BASIC-ähnlicher Skriptsprache",
      "Import aus PitCUP, RUKON, CATS, Klima2000 u. a.",
    ],
    specs: [
      { label: "Editionen", value: "Customer · Economy · Factory · Expert" },
      { label: "Sprachen", value: "8 Sprachen (DE, FR, EN, NL, ES, PL, CS, RU)" },
      { label: "Plattform", value: "alle Windows-Rechner" },
      { label: "Aufmaßnormen", value: "ÖNORM, DIN, LUKA" },
      { label: "Schnittstellen", value: "ODBC, Import/Export von Fremddaten" },
      { label: "Verschachtelung", value: "Rechteck- oder optimierende Konturenverschachtelung" },
    ],
  },
  {
    slug: "viascanner",
    name: "viaScanner",
    category: "Software",
    short: "Sichere LKW-Ladekontrolle beim Verladen Ihrer Kanäle.",
    headline: "Sichere und bedienerfreundliche Erfassung beim Verladen",
    intro:
      "Die Software viaScanner zusammen mit dem robusten Industrie-Scanner Dragon Mobile von Datalogic gewährleistet ein sicheres und einfaches Erfassen Ihrer Kanalteile beim Verladen – und verhindert falsch geladene oder liegengebliebene Teile. Jedes Teil erhält ein eindeutiges Etikett und wird beim Verladen quittiert; der Lieferschein wird automatisch gedruckt.",
    image: "/img/scanner.jpg",
    gallery: ["/img/scanner.jpg", "/img/scanner2.jpg", "/img/etikett.gif"],
    features: [
      "Eindeutige Etiketten aus viaDuct-3D – kein Doppelerfassen",
      "Optische (grüner Laserpunkt) & akustische Rückmeldung",
      "Storno-Funktion beim Entladen",
      "Automatischer Lieferschein-Druck nach Abschluss",
    ],
    specs: [
      { label: "Scanner", value: "Datalogic Dragon Mobile, IP64" },
      { label: "Anzeige", value: "4 Zeilen, grafisch hinterbeleuchtet" },
      { label: "Funk", value: "433,92 MHz, Reichweite bis 50 m" },
      { label: "Robustheit", value: "Fall aus 2 m Höhe, −20 bis 50 °C" },
      { label: "Akku", value: "Li-Ion 2150 mAh, > 60.000 Operationen" },
      { label: "Barcodes", value: "Code 39/93/128, EAN/UPC, Codabar u. v. m." },
    ],
  },
  {
    slug: "profilierer",
    name: "Profilierer ZPM / TPM 2500",
    category: "Maschine",
    short: "Maschine zum Versteifen von Blechkanalteilen durch Z- bzw. T-Profile.",
    headline: "Versteifen von Blechkanalteilen",
    intro:
      "Diese Maschine eignet sich zum Versteifen von Blechzuschnitten bei der Fertigung von Blechkanälen. Das Z-Sicken-Profil ergibt eine gute Versteifung der Kanalteile. Lieferbar in zwei Ausführungen: ZPM 2500 (Z-Profil) oder TPM 2500 (T-Profil).",
    image: "/img/profile.jpg",
    gallery: ["/img/profile.jpg", "/img/pleater.jpg"],
    features: [
      "Z-Sicken-Profil zur Versteifung der Kanalteile",
      "Für Stahl, INOX/Edelstahl und Aluminium",
      "Zwei Ausführungen: ZPM 2500 und TPM 2500",
      "Hoher Durchlauf von 15–20 m/min",
    ],
    specs: [
      { label: "Blechstärken Stahl", value: "0,5 – 1,5 mm" },
      { label: "Blechstärken INOX / Alu", value: "0,4 – 1,0 mm" },
      { label: "Tafelbreite", value: "2500 mm" },
      { label: "Z-Profil / T-Profil", value: "160 × 7–12 mm / 50 × 1 mm" },
      { label: "Durchlaufgeschwindigkeit", value: "15 – 20 m/min" },
      { label: "Arbeitshöhe / Gewicht", value: "900 mm / 850 kg" },
      { label: "Anschluss", value: "3 × 400 V / 50 Hz, 2,2 kVA" },
    ],
  },
  {
    slug: "sdk-34",
    name: "SDK 34",
    category: "Maschine",
    short: "Vollautomatische Fertigung von Schalldämpferkulissen.",
    headline: "Vollautomatische Fertigung von Schalldämpferkulissen",
    intro:
      "Die SDK 34 stellt vollautomatisch Schalldämpferkulissen in drei verschiedenen Breiten her. Alle Ausklinkungen und Stanzungen werden hochpräzise gefertigt, damit das Befüllen und Vernieten der Kulisse ohne Kraftaufwand möglich ist – alle Nietlöcher passen genau aufeinander.",
    image: "/img/kulisse.jpg",
    gallery: ["/img/kulisse.jpg", "/img/sdk_steuerung.gif"],
    features: [
      "Vollautomatische Fertigung in 3 Breiten",
      "Hochpräzise Ausklinkungen und Stanzungen",
      "Kulissen als geschlossen, L-, U-Form oder 4 Einzelteile",
      "Steuerung mit Klartextanzeige, bis 1000 Kulissen vorprogrammierbar",
    ],
    specs: [
      { label: "Fertigung", value: "vollautomatisch, 3 Breiten" },
      { label: "Kulissenformen", value: "geschlossen, L-Form, U-Form, 4 Einzelteile" },
      { label: "Länge", value: "jede beliebige Länge" },
      { label: "Steuerung", value: "8-zeilige Klartextanzeige" },
      { label: "Speicher", value: "bis zu 1000 Kulissen programmierbar" },
    ],
  },
];

export const nav = [
  { label: "Start", href: "/" },
  {
    label: "Produkte",
    href: "/produkte",
    children: products.map((p) => ({ label: p.name, href: `/produkte/${p.slug}` })),
  },
  { label: "Unternehmen", href: "/unternehmen" },
  { label: "Referenzen", href: "/referenzen" },
  { label: "Service", href: "/service" },
  { label: "Kontakt", href: "/kontakt" },
];

// 30 Referenzkunden aus der ganzen Welt (Logos unter /img/clients/)
export const clients: { name: string; file: string }[] = [
  { name: "BerlinerLuft", file: "blt.gif" },
  { name: "DJW Belgium", file: "djw.gif" },
  { name: "S&W Lufttechnik GmbH", file: "suw.gif" },
  { name: "ALS GmbH", file: "als.gif" },
  { name: "ADZ Lüftungsbau Leipzig GmbH", file: "adz.gif" },
  { name: "Koberger", file: "koberger.gif" },
  { name: "Siegle + Epple", file: "sue.gif" },
  { name: "Kraft GmbH", file: "kraft.gif" },
  { name: "Kranz Klimatechnik", file: "kranz.gif" },
  { name: "R. Neuberger GmbH", file: "Neuberger.gif" },
  { name: "Simco", file: "simco.gif" },
  { name: "Smay", file: "smay.gif" },
  { name: "Airtechnic", file: "airtechnic.gif" },
  { name: "Lindab GmbH", file: "lindab.gif" },
  { name: "GSP Lüftungstechnik", file: "gsp.gif" },
  { name: "Artelt GmbH", file: "artelt.gif" },
  { name: "Schmidlin AG", file: "schmidlin.gif" },
  { name: "Insven", file: "insven.gif" },
  { name: "Kuban GmbH", file: "kuban.gif" },
  { name: "Kühn Klimatechnik", file: "kuehn.gif" },
  { name: "Fischer & Würfel GmbH", file: "fuw.gif" },
  { name: "Lang Spenglerei", file: "lang.gif" },
  { name: "Lufttechnik Treptow", file: "ltt.gif" },
  { name: "Skanska EMV AS", file: "skanska.gif" },
  { name: "TROGES Ges.m.b.H.", file: "troges.gif" },
  { name: "Achenbach GmbH", file: "achenbach.gif" },
  { name: "Ing. Pischulti", file: "pischulti.gif" },
  { name: "tinfor ee", file: "tinfor.gif" },
  { name: "Weger Air Solutions", file: "weger.gif" },
  { name: "V & S Blechtechnik GmbH", file: "vus.gif" },
];

// Service-Kontakte
export const serviceContacts = [
  {
    role: "Maschinen-Service & Ersatzteile",
    desc: "Maschinenwartung, Ersatzteile, Elektroden und Düsen.",
    name: "Hubert Buser",
    phone: "+49 (0)6803 981690",
    phoneHref: "+496803981690",
    mobile: "+49 (0)171 2704017",
    fax: "+49 (0)6803 981691",
    email: "parts@cms3.com",
  },
  {
    role: "Software-Hotline",
    desc: "Werktags von 8:00 bis 12:00 Uhr, je nach Wartungsvertrag.",
    name: "Support-Team",
    phone: "+49 (0)631 7501103",
    phoneHref: "+496317501103",
    fax: "+49 (0)631 7501104",
    email: "service@cms3.com",
  },
  {
    role: "Verkauf & Finanzierung",
    desc: "Verkaufs- und Finanzierungsfragen, Planung Ihrer Fertigung.",
    name: "Hermann Buser (Geschäftsführer)",
    phone: "+49 (0)631 7501103",
    phoneHref: "+496317501103",
    fax: "+49 (0)631 7501104",
    email: "sales@cms3.com",
  },
];

// viaDuct-3D Software-Editionen für die Service/Download-Seite
export const softwareEditions = [
  {
    name: "viaDuct-3D Customer",
    desc: "Kundenversion zur Erfassung von Aufträgen mit Aufmaß- und Isolieroberflächenberechnung nach DIN.",
  },
  {
    name: "viaDuct-3D Economy",
    desc: "Gleicher Funktionsumfang wie Customer, zusätzlich selbst konfigurierbar (Regeln, Normen, Berichte).",
  },
  {
    name: "viaDuct-3D Factory",
    desc: "Fertigungsversion mit Abwicklungen, Verschachtelung, CAD-Daten-Erzeugung und Rechnungsstellung.",
  },
  {
    name: "viaDuct-3D Expert",
    desc: "Experten-Version der Fertigungssoftware mit vielen Funktionen für flexibles, einfaches Arbeiten.",
  },
];
