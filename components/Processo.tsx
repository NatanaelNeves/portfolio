"use client";

import { m, useScroll, useSpring } from "framer-motion";
import { useRef, useState } from "react";
import { EASE, SectionHeader } from "@/components/motion";

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

/* Cada etapa acende quando o scroll passa por ela */
function Step({ step }: { step: (typeof steps)[number] }) {
  const [seen, setSeen] = useState(false);

  return (
    <m.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      onViewportEnter={() => setSeen(true)}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.65, ease: EASE }}
      className="relative pb-14 pl-10 last:pb-0 md:pl-14"
    >
      {/* Node diamante na espinha */}
      <span className="step-node" data-active={seen} aria-hidden />

      <div className="flex items-baseline gap-4">
        <span
          className="mono text-xs tracking-[0.15em]"
          style={{ color: seen ? "var(--accent)" : "var(--muted)", transition: "color 0.4s ease" }}
        >
          {step.num}
        </span>
        <h3 className="heading text-[1.25rem]">{step.label}</h3>
      </div>

      <div className="mt-3 gap-10 md:grid md:grid-cols-[1fr_220px]">
        <p className="body max-w-[480px] text-[0.9375rem] leading-[1.7]">{step.text}</p>
        <p
          className="mt-3 font-mono text-[0.75rem] leading-[1.5] md:mt-1 md:text-right"
          style={{ color: "var(--accent)", opacity: 0.7 }}
        >
          {step.detail}
        </p>
      </div>
    </m.div>
  );
}

export default function Processo() {
  const listRef = useRef<HTMLDivElement | null>(null);

  /* A espinha desenha conforme o scroll percorre a pipeline */
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 0.75", "end 0.45"],
  });
  const spine = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });

  return (
    <section id="processo" className="section bg-[var(--bg)]">
      <div className="container">
        <SectionHeader
          index="03 / 05"
          label="Processo"
          title="Sem surpresas, sem achismos."
          lead="Cada etapa tem critério de aceite. Cada decisão tem razão documentada. Você não recebe um produto pronto sem entender o que está recebendo."
        />

        {/* Pipeline com espinha scroll-linked */}
        <div ref={listRef} className="relative mt-16">
          <div
            className="absolute left-[5px] top-1 h-[calc(100%-8px)] w-px"
            style={{ background: "var(--border)" }}
            aria-hidden
          />
          <m.div
            className="absolute left-[5px] top-1 h-[calc(100%-8px)] w-px origin-top"
            style={{ scaleY: spine, background: "var(--accent)" }}
            aria-hidden
          />

          {steps.map((step) => (
            <Step key={step.num} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
}
