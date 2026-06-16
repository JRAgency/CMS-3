import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-px mx-auto flex min-h-[70vh] max-w-[1400px] flex-col items-center justify-center py-32 text-center">
      <p className="text-7xl font-extrabold text-brand">404</p>
      <h1 className="mt-4 text-2xl font-extrabold text-ink">Seite nicht gefunden</h1>
      <p className="mt-3 max-w-md text-ink-light">
        Die aufgerufene Seite existiert nicht oder wurde verschoben.
      </p>
      <Link href="/" className="btn btn-primary mt-8">
        Zur Startseite
      </Link>
    </section>
  );
}
