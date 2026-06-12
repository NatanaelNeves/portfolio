"use client";

import { m, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { EASE, Reveal, SectionHeader } from "@/components/motion";

/* ─── Career Timeline ────────────────────────────────────────────── */

type TimelineEntry = {
  period: string;
  role: string;
  org: string;
  highlights: string[];
  stack?: string[];
  current?: boolean;
};

const career: TimelineEntry[] = [
  {
    period: "Jan 2026 — presente",
    role: "Analista de TI Pleno",
    org: "Pequeno Nazareno",
    current: true,
    highlights: [
      "Infraestrutura, suporte e continuidade dos serviços de TI de toda a organização",
      "Administração do Microsoft 365 (Exchange, Teams, SharePoint) e Azure AD",
      "Desenvolveu do zero plataforma de chamados usada diariamente por 3+ setores e dezenas de colaboradores",
      "Gestão de fornecedores, backups periódicos e segurança da informação",
    ],
    stack: ["React", "Node.js", "TypeScript", "PostgreSQL", "Azure", "Microsoft 365"],
  },
  {
    period: "Ago 2025 — Jan 2026",
    role: "Estagiário de Desenvolvimento",
    org: "Cotabox",
    highlights: [
      "Suporte técnico a sistemas web corporativos B2B de gestão de compras",
      "Diagnóstico e correção de falhas em aplicações e integrações entre serviços",
      "Consulta e validação de dados em bancos relacionais e não relacionais",
    ],
    stack: ["React", "TypeScript"],
  },
  {
    period: "Mai 2025 — Jul 2025",
    role: "Estagiário de Suporte de TI",
    org: "TRT 7ª Região",
    highlights: [
      "Atendimento e resolução de chamados presenciais e remotos em ambiente institucional",
      "Criou sistema de pontuação para acompanhamento de produtividade, substituindo controle manual",
    ],
  },
  {
    period: "Jan 2023 — Mai 2024",
    role: "Suporte Técnico de Internet",
    org: "Smart Soluções",
    highlights: [
      "Diagnóstico de falhas de rede, configuração de equipamentos e atendimento técnico a clientes",
      "Reduziu 30% o tempo médio de atendimento criando guia interno adotado por toda a equipe",
    ],
  },
];

const education = [
  {
    period: "Dez 2025 — Em andamento",
    degree: "MBA em Fullstack e DevOps",
    school: "Unifametro · Fortaleza, CE",
    current: true,
  },
  {
    period: "Ago 2022 — Dez 2025",
    degree: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
    school: "Unifametro · Fortaleza, CE",
  },
  {
    period: "Mai 2024 — Ago 2024",
    degree: "Curso Fullstack",
    school: "Digital College · 200h",
  },
];

const certifications = [
  { name: "Desenvolvimento Fullstack", issuer: "Digital College · 2024 · 200h" },
  { name: "JavaScript e React", issuer: "Udemy · 2023 · 40h" },
  { name: "Banco de Dados SQL", issuer: "Coursera · 2023 · 30h" },
];

/* ─── Philosophy Blocks ──────────────────────────────────────────── */

const blocks = [
  {
    title: "Infra que eu mantenho. Sistemas que eu construo.",
    text: "Sou o Analista de TI responsável pela infraestrutura, suporte e continuidade dos serviços de tecnologia de uma organização inteira. Mas meu diferencial é que também coloco em produção sistemas internos que automatizam o que antes era feito manualmente.",
  },
  {
    title: "Penso como arquiteto, executo como dev.",
    text: "Antes de abrir o editor, entendo o problema. Em todos os sistemas que entreguei, a primeira pergunta foi: qual é o problema de verdade? A resposta muda tudo que vem depois.",
  },
  {
    title: "Clareza como padrão, não exceção.",
    text: "Cada etapa tem critério de aceite. Cada decisão tem razão documentada. Você não vai receber um produto pronto sem entender o que está recebendo.",
  },
];

const facts = [
  { label: "Base", value: "Fortaleza, CE — Brasil" },
  { label: "Atual", value: "Analista de TI Pleno · Pequeno Nazareno" },
  { label: "Inglês", value: "Intermediário — leitura técnica fluente" },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/natanaelnevesalves",
    href: "https://linkedin.com/in/natanaelnevesalves",
  },
  {
    label: "GitHub",
    value: "github.com/natanaelneves",
    href: "https://github.com/natanaelneves",
  },
];

/* Linha da timeline que desenha conforme o scroll percorre a coluna */
function TimelineSpine({ containerRef }: { containerRef: React.RefObject<HTMLDivElement> }) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "end 0.55"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 25 });

  return (
    <>
      <div
        className="absolute left-[5px] top-2 h-full w-px"
        style={{ background: "var(--border)" }}
        aria-hidden
      />
      <m.div
        className="absolute left-[5px] top-2 h-full w-px origin-top"
        style={{ scaleY, background: "var(--accent)", opacity: 0.6 }}
        aria-hidden
      />
    </>
  );
}

function TimelineDot({ current }: { current?: boolean }) {
  return (
    <span
      className="absolute left-0 top-[5px] h-[11px] w-[11px] rounded-full border-2"
      style={{
        background: current ? "var(--accent)" : "var(--surface)",
        borderColor: current ? "var(--accent)" : "var(--border-strong)",
        boxShadow: current ? "0 0 8px var(--accent)" : "none",
      }}
      aria-hidden
    />
  );
}

export default function Sobre() {
  const careerRef = useRef<HTMLDivElement | null>(null);
  const eduRef = useRef<HTMLDivElement | null>(null);

  return (
    <section id="sobre" className="section bg-[var(--surface)]">
      <div className="container">
        <SectionHeader index="04 / 05" label="Sobre" title="Natanael Neves." />
        <Reveal delay={0.2} y={8}>
          <p className="label mt-3">
            Analista de TI Pleno · Frontend Developer · Fortaleza, CE
          </p>
        </Reveal>

        <div className="mt-14 grid gap-14 md:grid-cols-[1fr_1.15fr] md:gap-20">
          {/* Left — Philosophy + Facts */}
          <m.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-8"
          >
            {blocks.map((block) => (
              <div key={block.title} className="border-l-2 border-[var(--border)] pl-5">
                <h3 className="heading text-[1.0625rem]">{block.title}</h3>
                <p className="body mt-3 text-[0.9375rem]">{block.text}</p>
              </div>
            ))}

            {/* Quick facts */}
            <div className="border-t border-[var(--border)] pt-6">
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  className="flex items-start gap-4 border-b border-[var(--border)] py-3"
                >
                  <span className="label min-w-[5rem] shrink-0 pt-px">{fact.label}</span>
                  {fact.href ? (
                    <a
                      href={fact.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[0.875rem] underline-offset-4 transition-all hover:underline"
                      style={{ color: "var(--accent)", fontFamily: "var(--font-body)" }}
                    >
                      {fact.value}
                    </a>
                  ) : (
                    <span
                      className="text-[0.875rem] leading-snug"
                      style={{ color: "var(--text-2)", fontFamily: "var(--font-body)" }}
                    >
                      {fact.value}
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div>
              <p className="label mb-4">Certificados</p>
              <div className="space-y-3">
                {certifications.map((cert) => (
                  <div key={cert.name} className="flex items-start gap-3">
                    <span
                      className="mt-[2px] font-mono text-[0.65rem]"
                      style={{ color: "var(--accent)" }}
                    >
                      ◆
                    </span>
                    <div>
                      <p className="font-sans text-[0.875rem]" style={{ color: "var(--text)" }}>
                        {cert.name}
                      </p>
                      <p className="mono text-[0.7rem]">{cert.issuer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </m.div>

          {/* Right — Career + Education timeline */}
          <div>
            <p className="label mb-6">Experiência</p>
            <div ref={careerRef} className="relative mb-12 space-y-0">
              <TimelineSpine containerRef={careerRef} />

              {career.map((entry, i) => (
                <m.div
                  key={i}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.55, delay: i * 0.07, ease: EASE }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="relative pb-12 pl-8"
                >
                  <TimelineDot current={entry.current} />

                  <p
                    className="label mb-1.5"
                    style={{ color: entry.current ? "var(--accent)" : undefined }}
                  >
                    {entry.period}
                    {entry.current && (
                      <span
                        className="ml-2 inline-block h-[5px] w-[5px] rounded-full align-middle"
                        style={{
                          background: "var(--status)",
                          animation: "pulse-status 2.5s ease-in-out infinite",
                        }}
                      />
                    )}
                  </p>

                  <p className="heading text-[0.9375rem]">{entry.role}</p>
                  <p className="mono text-[0.75rem]" style={{ color: "var(--muted)" }}>
                    {entry.org}
                  </p>

                  <ul className="mt-3 space-y-1.5">
                    {entry.highlights.map((h) => (
                      <li
                        key={h}
                        className="body flex items-start gap-2 text-[0.8125rem] leading-[1.6]"
                      >
                        <span
                          style={{ color: "var(--border-strong)", marginTop: "3px", flexShrink: 0 }}
                        >
                          +
                        </span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  {entry.stack && (
                    <div className="mt-3 flex flex-wrap gap-1">
                      {entry.stack.map((tag) => (
                        <span key={tag} className="stack-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </m.div>
              ))}
            </div>

            {/* Education */}
            <p className="label mb-6">Educação</p>
            <div ref={eduRef} className="relative space-y-0">
              <TimelineSpine containerRef={eduRef} />

              {education.map((entry, i) => (
                <m.div
                  key={i}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.06, ease: EASE }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="relative pb-7 pl-8"
                >
                  <TimelineDot current={entry.current} />

                  <p
                    className="label mb-1.5"
                    style={{ color: entry.current ? "var(--accent)" : undefined }}
                  >
                    {entry.period}
                  </p>
                  <p className="heading text-[0.9375rem]">{entry.degree}</p>
                  <p className="mono text-[0.75rem]" style={{ color: "var(--muted)" }}>
                    {entry.school}
                  </p>
                </m.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
