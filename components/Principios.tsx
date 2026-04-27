"use client";

import { motion } from "framer-motion";

const principles = [
  {
    id: "01",
    title: "Clareza",
    text: "Se você não entendeu o que foi entregue, o projeto não está pronto. Clareza não é opcional - é o produto.",
  },
  {
    id: "02",
    title: "Responsabilidade",
    text: "Assumi, entrego. Se algo mudar no caminho, você é o primeiro a saber - não o último.",
  },
  {
    id: "03",
    title: "Excelencia",
    text: "'Funciona no meu computador' não é critério de entrega. O padrão é: funciona, performa e resiste ao uso real.",
  },
  {
    id: "04",
    title: "Simplicidade",
    text: "Código complexo sem necessidade é dívida técnica disfarçada de esforço. A solução certa é a mais simples que resolve o problema.",
  },
];

export default function Principios() {
  return (
    <section className="section-shell bg-[var(--bg)]">
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
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.12 }}
        className="grid-divider mt-14 grid grid-cols-1 md:grid-cols-2"
      >
        {principles.map((principle) => (
          <article key={principle.id} className="bg-[var(--surface)] px-8 py-12 md:px-10">
            <p className="font-mono text-xs tracking-[0.16em] text-[var(--muted)]">{principle.id}</p>
            <h3 className="headline mt-5 text-4xl md:text-[2rem]">
              <em>{principle.title}</em>
            </h3>
            <p className="mono-muted mt-6 max-w-[320px] text-[0.8rem] leading-7">{principle.text}</p>
          </article>
        ))}
      </motion.div>
    </section>
  );
}
