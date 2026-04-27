"use client";

import { motion } from "framer-motion";

const steps = [
  {
    label: "01 - Entendimento",
    title: "Entendimento",
    text: "Conversa real sobre o problema, o usuário e o contexto. Sem essa etapa, tudo que vem depois é chute.",
  },
  {
    label: "02 - Estruturação",
    title: "Estruturação",
    text: "Fluxos, arquitetura e decisões técnicas documentadas antes de escrever código. O que parece perda de tempo aqui evita retrabalho depois.",
  },
  {
    label: "03 - Desenvolvimento",
    title: "Desenvolvimento",
    text: "Entregas parciais funcionais, não um big bang no final. Você acompanha, testa e valida junto enquanto o produto cresce.",
  },
  {
    label: "04 - Entrega",
    title: "Entrega",
    text: "Deploy feito, documentação escrita, você sabe usar o que foi construído. Sem dependência eterna de suporte.",
  },
];

export default function Processo() {
  return (
    <section id="processo" className="section-shell bg-[var(--surface)]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.12 }}
      >
        <p className="section-label">Processo</p>
        <h2 className="headline mt-4 text-4xl md:text-6xl">
          Sem surpresas,
          <br />
          sem <em>achismos.</em>
        </h2>
      </motion.div>

      <div className="grid-divider mt-14 grid grid-cols-1 md:grid-cols-4">
        {steps.map((step) => (
          <motion.article
            key={step.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.12 }}
            className="p-7"
          >
            <div className="h-[2px] w-full bg-[var(--border)]">
              <motion.div
                className="h-full"
                style={{ background: "var(--accent)" }}
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.8 }}
              />
            </div>
            <p className="mt-6 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-[var(--accent)]">
              {step.label}
            </p>
            <h3 className="headline mt-4 text-[1.2rem]">{step.title}</h3>
            <p className="mono-muted mt-4 text-[0.8rem] leading-7">{step.text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
