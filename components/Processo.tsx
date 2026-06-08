"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    label: "Entender",
    text: "Conversa real sobre o problema, o usuário e o contexto. Sem essa etapa, tudo que vem depois é chute.",
    detail: "Briefing estruturado, não reunião informal.",
  },
  {
    num: "02",
    label: "Diagnosticar",
    text: "Identificar a causa raiz — não o sintoma. A maioria dos pedidos de 'site novo' esconde um problema de processo.",
    detail: "Pergunto por que antes de perguntar o quê.",
  },
  {
    num: "03",
    label: "Arquitetar",
    text: "Fluxos, estrutura e decisões técnicas documentadas antes de escrever código. O que parece perda de tempo aqui evita retrabalho depois.",
    detail: "Critério de aceite definido por etapa.",
  },
  {
    num: "04",
    label: "Construir",
    text: "Entregas parciais funcionais, não um big bang no final. Você acompanha, testa e valida enquanto o produto cresce.",
    detail: "Sem surpresas no final do projeto.",
  },
  {
    num: "05",
    label: "Entregar",
    text: "Deploy feito, documentação escrita, você sabe usar o que foi construído. Sem dependência eterna de suporte.",
    detail: "Autonomia total após a entrega.",
  },
];

export default function Processo() {
  return (
    <section id="processo" className="section bg-[var(--bg)]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.15 }}
        >
          <p className="label-accent">Processo</p>
          <h2 className="heading mt-4" style={{ fontSize: "clamp(2rem,4vw,3.25rem)" }}>
            Sem surpresas, sem achismos.
          </h2>
          <p className="body mt-4 max-w-[480px]">
            Cada etapa tem critério de aceite. Cada decisão tem razão documentada.
            Você não recebe um produto pronto sem entender o que está recebendo.
          </p>
        </motion.div>

        {/* Pipeline */}
        <div className="mt-14">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
                delay: i * 0.07,
              }}
              viewport={{ once: true, amount: 0.3 }}
              className="group relative flex gap-6 border-b border-[var(--border)] py-7 md:gap-10"
            >
              {/* Accent bar on hover */}
              <div
                className="pointer-events-none absolute left-0 top-0 h-full w-[2px] origin-top scale-y-0 transition-transform duration-300 group-hover:scale-y-100"
                style={{ background: "var(--accent)" }}
              />

              {/* Number */}
              <div className="flex w-10 shrink-0 flex-col items-end pt-0.5">
                <span className="mono text-xs tracking-[0.15em]">{step.num}</span>
              </div>

              {/* Content */}
              <div className="grid flex-1 gap-2 md:grid-cols-[1fr_auto] md:items-start md:gap-10">
                <div>
                  <h3 className="heading text-[1.125rem]">{step.label}</h3>
                  <p className="body mt-2.5 max-w-[480px] text-[0.9375rem] leading-[1.7]">
                    {step.text}
                  </p>
                </div>
                <p
                  className="font-mono text-[0.75rem] leading-[1.5] md:mt-0.5 md:max-w-[200px] md:text-right"
                  style={{ color: "var(--accent)", opacity: 0.7 }}
                >
                  {step.detail}
                </p>
              </div>

              {/* Progress bar */}
              <div className="absolute bottom-0 left-0 h-[1px] w-full bg-[var(--border)]">
                <motion.div
                  className="h-full"
                  style={{ background: "var(--accent)", opacity: 0.4 }}
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1.1, ease: "easeOut", delay: i * 0.1 + 0.3 }}
                  viewport={{ once: true, amount: 0.8 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
