"use client";

import {
  m,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { CountUp, EASE, Magnetic, MaskLines } from "@/components/motion";

const stack = ["React", "TypeScript", "Firebase", "Tailwind", "Node.js"];

const stats = [
  { value: 2, suffix: "", label: "apps no ar" },
  { value: 4, suffix: "+", label: "projetos entregues" },
  { value: 3, suffix: "", label: "anos em tech" },
];

/* Relógio vivo no fuso de Fortaleza — telemetria do sistema */
function useClockBRT() {
  const [time, setTime] = useState<string | null>(null);
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("pt-BR", {
      timeZone: "America/Fortaleza",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const time = useClockBRT();

  /* Parallax: o grid desce devagar, o conteúdo sobe e esmaece ao sair */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const gridY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.1]);

  /* Spotlight que segue o mouse — começa fora da tela, inerte no touch */
  const mx = useMotionValue(-600);
  const my = useMotionValue(-600);
  const spotlight = useMotionTemplate`radial-gradient(560px circle at ${mx}px ${my}px, rgba(200,255,0,0.055), transparent 65%)`;

  return (
    <section
      id="hero"
      ref={sectionRef}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        mx.set(e.clientX - r.left);
        my.set(e.clientY - r.top);
      }}
      className="relative flex min-h-screen flex-col justify-center overflow-hidden border-b border-[var(--border)] pb-24 pt-32"
    >
      {/* Grid técnico com parallax */}
      <m.div
        className="pointer-events-none absolute inset-x-0 -top-[140px] bottom-0"
        style={{
          y: gridY,
          backgroundImage:
            "linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          opacity: 0.18,
        }}
        aria-hidden
      />

      {/* Spotlight */}
      <m.div
        className="pointer-events-none absolute inset-0"
        style={{ background: spotlight }}
        aria-hidden
      />

      <m.div
        className="container relative z-10"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        {/* Linha de telemetria: identidade + coordenadas + relógio vivo */}
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.08, duration: 0.6 }}
          className="flex flex-wrap items-center gap-x-3 gap-y-1"
        >
          <span className="label" style={{ color: "var(--accent)" }}>
            {"// build-log"}
          </span>
          <span className="label">·</span>
          <span className="label">Natanael Neves</span>
          <span className="label">·</span>
          <span className="label">Fortaleza, CE</span>
          <span className="label hidden sm:inline">·</span>
          <span className="label hidden sm:inline">03°43′S 38°32′W</span>
          <span className="label">·</span>
          <span className="label tabular-nums" style={{ color: "var(--text-2)" }}>
            {time ?? "--:--:--"} BRT
          </span>
        </m.div>

        {/* Headline — revela linha a linha por trás da máscara.
            5.3vw com teto de 4.8rem: cada frase ocupa exatamente uma linha
            no container de 1120px a partir de 768px */}
        <h1
          className="display mt-8"
          style={{ fontSize: "clamp(2.5rem,5.3vw,4.8rem)" }}
        >
          <MaskLines
            mode="mount"
            delay={0.25}
            lines={[
              "Não construo telas.",
              <em key="produtos">Construo produtos.</em>,
            ]}
          />
        </h1>

        {/* Stack subtitle */}
        <m.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="label mt-6"
          style={{ color: "var(--muted)", letterSpacing: "0.12em" }}
        >
          {stack.join(" · ")}
          {" — "}Frontend Developer
        </m.p>

        {/* Body copy */}
        <m.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7, ease: EASE }}
          className="body mt-8 max-w-[48ch] text-[1.0625rem]"
        >
          Pego um problema real, entendo o que precisa ser resolvido e entrego
          software que funciona. Sem achismos, sem surpresas.
        </m.p>

        {/* CTAs magnéticos */}
        <m.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 0.6, ease: EASE }}
          className="mt-12 flex flex-wrap gap-3"
        >
          <Magnetic>
            <a href="#projetos" className="btn-primary">
              Ver projetos →
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href="https://linkedin.com/in/natanaelnevesalves"
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
              aria-label="Perfil no LinkedIn"
            >
              LinkedIn ↗
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href="/natanael-neves-cv.pdf"
              download
              className="btn-ghost"
              aria-label="Baixar currículo em PDF"
            >
              Baixar CV ↓
            </a>
          </Magnetic>
        </m.div>

        {/* Stats com count-up */}
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="mt-16 flex flex-wrap gap-x-12 gap-y-4"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-baseline gap-2.5">
              <CountUp
                value={stat.value}
                suffix={stat.suffix}
                duration={1.6}
                className="font-sans text-[2rem] font-extrabold leading-none tabular-nums"
                style={{ color: "var(--accent)" }}
              />
              <span className="label">{stat.label}</span>
            </div>
          ))}
        </m.div>

        {/* Status strip + scroll cue */}
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.25, duration: 0.7 }}
          className="mt-12 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-[var(--border)] pt-6"
        >
          <div className="flex items-center gap-2">
            <span
              className="inline-block h-[6px] w-[6px] rounded-full"
              style={{
                background: "var(--status)",
                boxShadow: "0 0 7px var(--status)",
                animation: "pulse-status 2.5s ease-in-out infinite",
              }}
              aria-hidden
            />
            <span
              className="font-mono text-[0.6rem] uppercase tracking-[0.14em]"
              style={{ color: "var(--status)" }}
            >
              Disponível para projetos
            </span>
          </div>
          <span className="label" aria-hidden>
            ·
          </span>
          {stack.map((tech) => (
            <span key={tech} className="label">
              {tech}
            </span>
          ))}

          <div className="ml-auto hidden items-center gap-3 md:flex" aria-hidden>
            <span className="label">scroll</span>
            <span className="cue-line" />
          </div>
        </m.div>
      </m.div>
    </section>
  );
}
