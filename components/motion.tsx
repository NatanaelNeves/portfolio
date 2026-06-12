"use client";

import { m, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/* Curva única de easing do site — toda animação compartilha a mesma assinatura
   de movimento, como um sistema com uma física só. */
export const EASE = [0.22, 1, 0.36, 1] as const;

/* ─── Reveal ─────────────────────────────────────────────────────────
   Fade-up padrão ao entrar na viewport. */
export function Reveal({
  children,
  delay = 0,
  y = 24,
  amount = 0.25,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  amount?: number;
  className?: string;
}) {
  return (
    <m.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.8, ease: EASE, delay }}
      className={className}
    >
      {children}
    </m.div>
  );
}

/* ─── MaskLines ──────────────────────────────────────────────────────
   Revela texto linha a linha por trás de uma máscara (overflow hidden).
   mode "mount" anima no carregamento (hero); "view" anima ao entrar na tela. */
export function MaskLines({
  lines,
  delay = 0,
  stagger = 0.12,
  duration = 0.9,
  mode = "view",
}: {
  lines: React.ReactNode[];
  delay?: number;
  stagger?: number;
  duration?: number;
  mode?: "mount" | "view";
}) {
  const target = { y: "0%" };
  return (
    <>
      {lines.map((line, i) => (
        /* pb/-mb dão espaço para descendentes (g, p, ç) não cortarem na máscara */
        <span key={i} className="block overflow-hidden pb-[0.1em] -mb-[0.1em]">
          <m.span
            className="block will-change-transform"
            initial={{ y: "115%" }}
            {...(mode === "mount"
              ? { animate: target }
              : { whileInView: target, viewport: { once: true, amount: 0.6 } })}
            transition={{ duration, ease: EASE, delay: delay + i * stagger }}
          >
            {line}
          </m.span>
        </span>
      ))}
    </>
  );
}

/* ─── SectionHeader ──────────────────────────────────────────────────
   Cabeçalho padrão de seção no formato de entrada de log:
   régua superior com label à esquerda e índice à direita. */
export function SectionHeader({
  index,
  label,
  title,
  lead,
}: {
  index: string;
  label: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
}) {
  return (
    <div>
      <Reveal y={0}>
        <div className="flex items-baseline justify-between border-b border-[var(--border)] pb-4">
          <span className="label-accent">{label}</span>
          <span className="label">{index}</span>
        </div>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="heading mt-8" style={{ fontSize: "clamp(2rem,4vw,3.25rem)" }}>
          {title}
        </h2>
      </Reveal>
      {lead && (
        <Reveal delay={0.16}>
          <p className="body mt-5 max-w-[52ch]">{lead}</p>
        </Reveal>
      )}
    </div>
  );
}

/* ─── Magnetic ───────────────────────────────────────────────────────
   O elemento é atraído suavemente pelo cursor dentro da própria área.
   Inerte em telas touch. */
export function Magnetic({
  children,
  strength = 0.25,
  className,
}: {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const fine = useRef(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 16, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 220, damping: 16, mass: 0.5 });

  useEffect(() => {
    fine.current = window.matchMedia("(pointer: fine)").matches;
  }, []);

  return (
    <m.div
      ref={ref}
      className={`inline-block ${className ?? ""}`}
      style={{ x: sx, y: sy }}
      onMouseMove={(e) => {
        if (!fine.current || !ref.current) return;
        const r = ref.current.getBoundingClientRect();
        x.set((e.clientX - (r.left + r.width / 2)) * strength);
        y.set((e.clientY - (r.top + r.height / 2)) * strength);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </m.div>
  );
}

/* ─── CountUp ────────────────────────────────────────────────────────
   Número que conta do zero até o valor quando entra na viewport.
   Respeita prefers-reduced-motion mostrando o valor final direto. */
export function CountUp({
  value,
  prefix = "",
  suffix = "",
  duration = 1.4,
  formatter,
  className,
  style,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  formatter?: (n: number) => string;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(value);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - p, 4);
      setDisplay(Math.round(value * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);

  return (
    <span ref={ref} className={className} style={style}>
      {prefix}
      {formatter ? formatter(display) : display}
      {suffix}
    </span>
  );
}
