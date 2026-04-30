"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden border-b border-[var(--border)] bg-[var(--bg)] pb-16 pt-32"
    >
      <span className="pointer-events-none absolute right-6 top-24 select-none font-sans text-[4rem] text-white/5 md:right-12 md:text-[5rem]">
        01
      </span>

      <div className="mx-auto w-full max-w-7xl px-6 md:px-12">
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="font-mono text-[0.75rem] uppercase tracking-[0.15em] text-[var(--accent)]"
        >
          Desenvolvedor Full Stack · Fortaleza, CE
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="headline mt-6 max-w-5xl text-[clamp(2.6rem,7vw,7rem)]"
        >
          Ideias confusas se tornam
          <br />
          produtos digitais <em>que funcionam.</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="body-text mt-8 max-w-[560px]"
        >
          Desenvolvo sistemas e sites com foco no problema real — não na tecnologia pela tecnologia.
          Do diagnóstico ao deploy, com clareza em cada etapa.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap"
        >
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            href="#diagnostico"
            className="btn-primary rounded-[2px] px-6 py-3"
          >
            Diagnosticar ideia
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            href="#projetos"
            className="btn-ghost rounded-[2px] px-6 py-3"
          >
            Ver projetos
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-6 right-6 flex flex-col items-center gap-3 md:right-12"
      >
        <div className="h-10 w-px bg-[var(--border)]" />
        <span
          className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-[var(--muted)]"
          style={{ writingMode: "vertical-rl" }}
        >
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
