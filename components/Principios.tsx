"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const principles = [
  {
    id: "01",
    title: "Clareza",
    text: "Se você não entendeu o que foi entregue, o projeto não está pronto. Clareza não é opcional — é o produto.",
  },
  {
    id: "02",
    title: "Responsabilidade",
    text: "Assumi, entrego. Se algo mudar no caminho, você é o primeiro a saber — não o último.",
  },
  {
    id: "03",
    title: "Excelência",
    text: "'Funciona no meu computador' não é critério de entrega. O padrão é: funciona, performa e resiste ao uso real.",
  },
  {
    id: "04",
    title: "Simplicidade",
    text: "Código complexo sem necessidade é dívida técnica disfarçada de esforço. A solução certa é a mais simples que resolve o problema.",
  },
];

const container: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.14 },
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

export default function Principios() {
  return (
    <section className="section-shell bg-[var(--bg)]">
      <div className="mx-auto max-w-7xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.12 }}
      >
        <p className="section-label">Princípios</p>
        <h2 className="headline mt-4 text-4xl md:text-6xl">
          O que não negocio
          <br />
          em nenhum <em>projeto.</em>
        </h2>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.12 }}
        className="grid-divider mt-14 grid grid-cols-1 md:grid-cols-2"
      >
        {principles.map((principle) => (
          <motion.article
            key={principle.id}
            variants={item}
            whileHover={{ y: -4 }}
            className="bg-[var(--surface)] px-10 py-14 md:px-12"
          >
            <p className="font-mono text-xs tracking-[0.16em] text-[var(--muted)]">{principle.id}</p>
            <h3 className="headline mt-5 text-4xl md:text-[2rem]">
              <em>{principle.title}</em>
            </h3>
            <p className="body-text mt-5 max-w-[380px]">{principle.text}</p>
          </motion.article>
        ))}
      </motion.div>
      </div>
    </section>
  );
}
