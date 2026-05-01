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
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

export default function Principios() {
  return (
    <section className="section bg-[var(--bg)]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.15 }}
        >
          <p className="label-accent">Princípios</p>
          <h2 className="heading mt-4 text-[clamp(2rem,4vw,3.25rem)]">
            O que não negocio
            <br />
            em nenhum <em>projeto.</em>
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="divide-grid-surface divide-grid mt-12 grid grid-cols-1 md:grid-cols-2"
        >
          {principles.map((p) => (
            <motion.article
              key={p.id}
              variants={item}
              className="group flex flex-col bg-[var(--surface)] p-8 transition-colors hover:bg-[var(--surface-2)] md:p-10"
            >
              <p className="mono text-[0.6875rem] tracking-[0.16em]">{p.id}</p>
              <h3 className="heading mt-5 text-[clamp(1.5rem,2.5vw,2rem)]">
                <em>{p.title}</em>
              </h3>
              <p className="body mt-4 max-w-[400px] text-[1rem]">{p.text}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
