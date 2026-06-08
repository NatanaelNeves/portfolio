"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;
const stack = ["React", "TypeScript", "Firebase", "Tailwind", "Node.js"];

const stats = [
  { value: "2", label: "apps no ar" },
  { value: "4+", label: "projetos entregues" },
  { value: "3", label: "anos em tech" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden border-b border-[var(--border)] pb-28 pt-32"
    >
      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          opacity: 0.18,
        }}
        aria-hidden
      />

      <div className="container relative z-10">
        {/* System label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="flex flex-wrap items-center gap-x-3 gap-y-1"
        >
          <span className="label" style={{ color: "var(--accent)" }}>
            {"// build-log"}
          </span>
          <span className="label">·</span>
          <span className="label">Natanael Neves</span>
          <span className="label">·</span>
          <span className="label">Fortaleza, CE</span>
        </motion.div>

        {/* Headline — o elemento mais importante */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.28, duration: 0.9, ease }}
          className="display mt-8 max-w-[940px]"
          style={{ fontSize: "clamp(3rem,7.5vw,7.5rem)" }}
        >
          Não construo telas.
          <br />
          <em>Construo produtos.</em>
        </motion.h1>

        {/* Stack subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55, duration: 0.7 }}
          className="label mt-6"
          style={{ color: "var(--muted)", letterSpacing: "0.12em" }}
        >
          {stack.join(" · ")}
          {" — "}Frontend Developer
        </motion.p>

        {/* Body copy — espaço generoso antes */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.7, ease }}
          className="mt-8 max-w-[48ch]"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "1.0625rem",
            lineHeight: "1.75",
            color: "var(--text-2)",
          }}
        >
          Pego um problema real, entendo o que precisa ser resolvido e entrego
          software que funciona. Sem achismos, sem surpresas.
        </motion.p>

        {/* CTAs — espaço ainda mais generoso */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6, ease }}
          className="mt-12 flex flex-wrap gap-3"
        >
          <a href="#projetos" className="btn-primary">
            Ver projetos →
          </a>
          <a
            href="https://linkedin.com/in/natanaelnevesalves"
            target="_blank"
            rel="noreferrer"
            className="btn-ghost"
            aria-label="Perfil no LinkedIn"
          >
            LinkedIn ↗
          </a>
          <a
            href="/natanael-neves-cv.pdf"
            download
            className="btn-ghost"
            aria-label="Baixar currículo em PDF"
          >
            Baixar CV ↓
          </a>
        </motion.div>

        {/* Stats — respiração antes deles */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="mt-16 flex flex-wrap gap-x-12 gap-y-4"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-baseline gap-2.5">
              <span
                className="font-sans text-[2rem] font-extrabold leading-none"
                style={{ color: "var(--accent)" }}
              >
                {stat.value}
              </span>
              <span className="label">{stat.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Status strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.15, duration: 0.7 }}
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
          <span className="label" aria-hidden>·</span>
          {stack.map((tech) => (
            <span key={tech} className="label">{tech}</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
