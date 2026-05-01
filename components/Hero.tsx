"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden border-b border-[var(--border)] pb-24 pt-28"
    >
      {/* Marca d'água estrutural */}
      <span
        className="pointer-events-none absolute right-0 top-12 select-none font-sans text-[clamp(8rem,18vw,20rem)] font-extrabold leading-none text-white/[0.022]"
        aria-hidden
      >
        01
      </span>

      <div className="container relative z-10">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="label-accent"
        >
          Full Stack Developer · Fortaleza, CE
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="display mt-5 max-w-[920px] text-[clamp(2.75rem,6.5vw,6.5rem)]"
        >
          Ideias confusas se tornam
          <br />
          produtos digitais <em>que funcionam.</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.7 }}
          className="body mt-7 max-w-[540px]"
        >
          Desenvolvo sistemas e sites com foco no problema real — não na
          tecnologia pela tecnologia. Do diagnóstico ao deploy, com clareza em
          cada etapa.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.6 }}
          className="mt-10 flex flex-col gap-3 sm:flex-row"
        >
          <a href="#diagnostico" className="btn-primary">
            Diagnosticar ideia →
          </a>
          <a href="#projetos" className="btn-ghost">
            Ver projetos
          </a>
        </motion.div>

        {/* Metadados técnicos — identidade de sistema */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-16 flex flex-wrap items-center gap-x-6 gap-y-2"
        >
          {["TypeScript", "React", "Node.js", "Azure", "PostgreSQL"].map(
            (tag) => (
              <span key={tag} className="label">
                {tag}
              </span>
            )
          )}
        </motion.div>
      </div>

      {/* Indicador de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 right-[clamp(1.25rem,4vw,2.5rem)] flex flex-col items-center gap-3"
      >
        <div className="h-12 w-px bg-[var(--border)]" />
        <span className="label" style={{ writingMode: "vertical-rl" }}>
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
