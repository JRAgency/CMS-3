import Image from "next/image";
import { clients } from "@/lib/site";

export function ClientMarquee() {
  const row = [...clients, ...clients];
  return (
    <div className="relative overflow-hidden py-2">
      {/* Fade-Kanten */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />
      <div className="marquee-track flex w-max animate-marquee items-center gap-6">
        {row.map((c, i) => (
          <div
            key={`${c.file}-${i}`}
            className="flex h-24 w-44 shrink-0 items-center justify-center rounded-2xl border border-line bg-white px-6"
            title={c.name}
          >
            <Image
              src={`/img/clients/${c.file}`}
              alt={c.name}
              width={140}
              height={64}
              unoptimized
              className="max-h-12 w-auto object-contain opacity-70 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
