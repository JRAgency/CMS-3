export function SpecTable({
  specs,
}: {
  specs: { label: string; value: string }[];
}) {
  return (
    <dl className="divide-y divide-line overflow-hidden rounded-md border border-line bg-white">
      {specs.map((s) => (
        <div
          key={s.label}
          className="grid grid-cols-1 gap-1 px-6 py-4 sm:grid-cols-[42%_1fr] sm:items-baseline sm:gap-6"
        >
          <dt className="mono text-[0.72rem] uppercase tracking-wider text-ink-light/70">
            {s.label}
          </dt>
          <dd className="mono text-sm font-medium text-ink">{s.value}</dd>
        </div>
      ))}
    </dl>
  );
}
