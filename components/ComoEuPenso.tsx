"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const cards = [
  {
    number: "01",
    icon: "◈",
    title: "Problema ",
    accent: "primeiro",
    text: "Antes de abrir o editor, eu entendo o que realmente precisa ser resolvido. A maioria dos bugs começa no briefing, não no código.",
  },
  {
    number: "02",
    icon: "◉",
    title: "Usuário no ",
    accent: "centro",
    text: "Interface bonita que confunde é produto ruim. Eu projeto para quem vai usar - não para quem vai ver o screenshot.",
  },
  {
    number: "03",
    icon: "◌",
    title: "Código como ",
    accent: "ferramenta",
    text: "Stack não é identidade. Escolho tecnologia pelo contexto, não pelo hype. O critério é sempre: resolve bem, mantém fácil, escala quando precisar.",
  },
];

const container: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.16 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ComoEuPenso() {
  return (
    <section className="section-shell bg-[var(--surface)]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.12 }}
      >
        <p className="section-label">Como eu penso</p>
        <h2 className="headline mt-4 text-4xl md:text-6xl">
          Estratégia antes
          <br />
          de <em>execução.</em>
        </h2>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.12 }}
        className="grid-divider mt-14 grid grid-cols-1 md:grid-cols-3"
      >
        {cards.map((card) => (
          <motion.article
            key={card.number}
            variants={item}
            className="group relative min-h-[290px] p-8 transition-colors hover:bg-[var(--surface)]"
          >
            <span className="pointer-events-none absolute right-6 top-4 select-none text-6xl text-white/5">
              {card.number}
            </span>

            <div className="mb-6 inline-flex h-11 w-11 items-center justify-center border border-[var(--border)] text-xl">
              {card.icon}
            </div>

            <h3 className="headline text-[1.4rem]">
              {card.title}
              <span style={{ color: "var(--accent)" }}>{card.accent}</span>
            </h3>
            <p className="mono-muted mt-5 text-[0.8rem] leading-7">{card.text}</p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
