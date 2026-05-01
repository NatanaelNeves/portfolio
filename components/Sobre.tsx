"use client";

import { motion } from "framer-motion";

const facts = [
  { label: "Base", value: "Fortaleza, CE — Brasil" },
  { label: "Atual", value: "Analista de TI — O Pequeno Nazareno" },
  { label: "Anterior", value: "Dev — Cotabox" },
  { label: "Formação", value: "ADS + MBA Full Stack & DevOps" },
  {
    label: "GitHub",
    value: "github.com/natanaelneves",
    link: "https://github.com/natanaelneves",
  },
];

const skills = [
  "TypeScript",
  "React",
  "Node.js",
  "Azure",
  "Tailwind CSS",
  "SQL",
  "REST API",
  "Git",
  "DevOps",
  "UX/UI",
  "Microsoft 365",
];

export default function Sobre() {
  return (
    <section id="sobre" className="section bg-[var(--surface)]">
      <div className="container">
        <div className="grid gap-12 md:grid-cols-[1fr_1.3fr] md:gap-20">
          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.1 }}
            className="md:sticky md:top-28 md:self-start"
          >
            <p className="label-accent">Analista · Dev · Arquiteto</p>
            <h2 className="heading mt-4 text-[clamp(1.75rem,3.5vw,2.75rem)]">
              Natanael Neves
            </h2>
            <p className="mt-1.5 text-[1.0625rem]" style={{ color: "var(--muted)" }}>
              <em>Digital product builder</em>
            </p>

            <div className="mt-8 border-t border-[var(--border)]">
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  className="flex items-start gap-4 border-b border-[var(--border)] py-3.5"
                >
                  <span className="label min-w-[5rem] shrink-0 pt-[1px]">
                    {fact.label}
                  </span>
                  {fact.link ? (
                    <a
                      href={fact.link}
                      className="text-[0.875rem] transition-colors hover:text-[var(--accent)]"
                      style={{ color: "var(--accent)" }}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {fact.value}
                    </a>
                  ) : (
                    <span className="text-[0.875rem] leading-snug text-[var(--text-2)]">
                      {fact.value}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </motion.aside>

          {/* Conteúdo */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-8"
          >
            <Block
              title="Penso como arquiteto, executo como dev."
              text="Já entreguei sistemas pra ONG com dezenas de usuários, site com CMS pra cliente não-técnica gerenciar sozinha e app de treino com feedback em tempo real. Em todos, a primeira pergunta foi a mesma: qual é o problema de verdade?"
            />
            <Block
              title="Stack muda. Raciocínio, não."
              text="Trabalho com TypeScript, React, Node.js e Azure no dia a dia. Mas já escolhi Firebase quando fazia mais sentido, Sanity quando o cliente precisava de autonomia e SQL quando consistência era inegociável. Contexto define ferramenta."
            />
            <Block
              title="Clareza como padrão, não exceção."
              text="Cada etapa tem critério de aceite. Cada decisão tem razão documentada. Você não vai receber um produto pronto sem entender o que está recebendo."
            />

            <div className="flex flex-wrap gap-2 pt-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="border border-[var(--border)] px-3 py-[0.35rem] font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-[var(--muted)] transition-colors duration-150 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

type BlockProps = { title: string; text: string };

function Block({ title, text }: BlockProps) {
  return (
    <div className="border-l-2 border-[var(--border)] pl-5">
      <h3 className="heading text-[1.125rem]">{title}</h3>
      <p className="body mt-3 text-[1rem]">{text}</p>
    </div>
  );
}
