"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { products, type Product } from "@/lib/site";

// Gruppen-Zuordnung für die Filter-Tabs (aus Slug/Kategorie abgeleitet).
function groupOf(p: Product): "plasma" | "umformen" | "software" {
  if (p.category === "Software") return "software";
  if (p.slug === "plasmawasp" || p.slug === "plasmadragon") return "plasma";
  return "umformen";
}

const tabs = [
  { id: "alle", label: "Alle" },
  { id: "plasma", label: "Plasmaschneiden" },
  { id: "umformen", label: "Umformen & Kanten" },
  { id: "software", label: "Software" },
] as const;

export function MachineFinder() {
  const [active, setActive] = useState<string>("alle");

  const list =
    active === "alle" ? products : products.filter((p) => groupOf(p) === active);

  return (
    <div>
      {/* Filter-Tabs */}
      <div className="scrollbar-none -mx-1 flex gap-1 overflow-x-auto pb-1">
        {tabs.map((t) => {
          const isActive = active === t.id;
          const count =
            t.id === "alle"
              ? products.length
              : products.filter((p) => groupOf(p) === t.id).length;
          return (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={`relative shrink-0 whitespace-nowrap px-5 py-3 text-[0.95rem] font-medium transition-colors duration-300 ${
                isActive ? "text-ink" : "text-ink-light hover:text-ink"
              }`}
              style={{ transitionTimingFunction: "var(--ease-signature)" }}
            >
              {t.label}
              <span className="ml-1.5 text-[0.75rem] text-ink-light/60">{count}</span>
              <span
                className={`absolute inset-x-3 -bottom-px h-0.5 bg-brand transition-transform duration-300 ${
                  isActive ? "scale-x-100" : "scale-x-0"
                }`}
                style={{
                  transformOrigin: "center",
                  transitionTimingFunction: "var(--ease-signature)",
                }}
              />
            </button>
          );
        })}
      </div>
      <div className="h-px w-full bg-line" />

      {/* Raster */}
      <div className="mt-10 grid gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p) => (
          <Link
            key={p.slug}
            href={`/produkte/${p.slug}`}
            className="group flex flex-col"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-haze">
              <Image
                src={p.image}
                alt={p.name}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-contain p-8 transition-transform duration-[900ms] group-hover:scale-[1.05]"
                style={{ transitionTimingFunction: "var(--ease-signature)" }}
              />
              <span className="absolute left-5 top-5 text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-ink-light/70">
                {p.category}
              </span>
            </div>

            <div className="mt-5 flex items-start justify-between gap-4">
              <div>
                <h3 className="text-[1.35rem] font-bold tracking-tight text-ink">
                  {p.name}
                </h3>
                <p className="mt-1.5 max-w-[34ch] text-[0.95rem] leading-relaxed text-ink-light">
                  {p.short}
                </p>
              </div>
              <span className="mt-1.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-ink transition-all duration-300 group-hover:border-brand group-hover:bg-brand group-hover:text-white">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
