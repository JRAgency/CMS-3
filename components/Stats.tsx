"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/site";

function useCounter(target: number, run: boolean, duration = 1600) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!run) return;
    let raf = 0;
    let start = 0;
    const step = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(eased * target));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [run, target, duration]);
  return value;
}

function Stat({
  value,
  suffix,
  label,
  run,
}: {
  value: number;
  suffix: string;
  label: string;
  run: boolean;
}) {
  const n = useCounter(value, run);
  const display = value >= 1000 ? n.toLocaleString("de-DE") : n;
  return (
    <div>
      <div className="text-6xl font-extrabold tracking-tight text-white md:text-7xl">
        {display}
        <span className="text-brand">{suffix}</span>
      </div>
      <p className="mono mt-3 text-xs uppercase leading-relaxed tracking-wider text-white/55">
        {label}
      </p>
    </div>
  );
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [run, setRun] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setRun(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="grid grid-cols-2 gap-x-8 gap-y-12"
    >
      {site.stats.map((s) => (
        <Stat key={s.label} {...s} run={run} />
      ))}
    </div>
  );
}
