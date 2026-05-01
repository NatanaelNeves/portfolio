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
    text: "Interface bonita que confunde é produto ruim. Eu projeto para quem vai usar — não para quem vai ver o screenshot.",
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
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ComoEuPenso() {
  return (
    <section className="section bg-[var(--surface)]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.15 }}
        >
          <p className="label-accent">Como eu penso</p>
          <h2 className="heading mt-4 text-[clamp(2rem,4vw,3.25rem)]">
            Estratégia antes
            <br />
            de <em>execução.</em>
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="divide-grid mt-12 grid grid-cols-1 md:grid-cols-3"
        >
          {cards.map((card) => (
            <motion.article
              key={card.number}
              variants={item}
              className="group relative min-h-[280px] p-8 transition-colors duration-200 hover:bg-[var(--surface-2)] md:p-10"
            >
              <span
                className="pointer-events-none absolute right-5 top-4 select-none font-sans text-[3.5rem] font-extrabold leading-none text-white/[0.04]"
                aria-hidden
              >
                {card.number}
              </span>

              <div
                className="mb-6 inline-flex h-10 w-10 items-center justify-center border border-[var(--border)] text-lg"
                style={{ color: "var(--accent)" }}
              >
                {card.icon}
              </div>

              <h3 className="heading text-[1.125rem]">
                {card.title}
                <span style={{ color: "var(--accent)" }}>{card.accent}</span>
              </h3>
              <p className="body mt-4 text-[1rem]">{card.text}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
