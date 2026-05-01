"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    label: "Entendimento",
    text: "Conversa real sobre o problema, o usuário e o contexto. Sem essa etapa, tudo que vem depois é chute.",
  },
  {
    num: "02",
    label: "Estruturação",
    text: "Fluxos, arquitetura e decisões técnicas documentadas antes de escrever código. O que parece perda de tempo aqui evita retrabalho depois.",
  },
  {
    num: "03",
    label: "Desenvolvimento",
    text: "Entregas parciais funcionais, não um big bang no final. Você acompanha, testa e valida junto enquanto o produto cresce.",
  },
  {
    num: "04",
    label: "Entrega",
    text: "Deploy feito, documentação escrita, você sabe usar o que foi construído. Sem dependência eterna de suporte.",
  },
];

export default function Processo() {
  return (
    <section id="processo" className="section bg-[var(--surface)]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.15 }}
        >
          <p className="label-accent">Processo</p>
          <h2 className="heading mt-4 text-[clamp(2rem,4vw,3.25rem)]">
            Sem surpresas,
            <br />
            sem <em>achismos.</em>
          </h2>
        </motion.div>

        <div className="divide-grid-surface divide-grid mt-12 grid grid-cols-1 md:grid-cols-4">
          {steps.map((step, i) => (
            <motion.article
              key={step.num}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
                delay: i * 0.08,
              }}
              viewport={{ once: true, amount: 0.15 }}
              className="flex flex-col p-7 md:p-8"
            >
              {/* Barra de progresso animada */}
              <div className="h-[2px] w-full bg-[var(--border)]">
                <motion.div
                  className="h-full"
                  style={{ background: "var(--accent)" }}
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.9, ease: "easeOut", delay: i * 0.1 }}
                  viewport={{ once: true, amount: 0.8 }}
                />
              </div>

              <p className="label-accent mt-6">
                {step.num} — {step.label}
              </p>
              <h3 className="heading mt-3 text-[1.125rem]">{step.label}</h3>
              <p className="body mt-3 text-[0.9375rem] leading-[1.7]">
                {step.text}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
