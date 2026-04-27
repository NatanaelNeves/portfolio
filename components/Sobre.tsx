"use client";

import { motion } from "framer-motion";

const facts = [
  { label: "Base", value: "Fortaleza, CE - Brasil" },
  { label: "Atual", value: "Analista de TI - O Pequeno Nazareno" },
  { label: "Anterior", value: "Dev - Cotabox" },
  { label: "Formação", value: "ADS + MBA Full Stack & DevOps" },
  { label: "GitHub", value: "github.com/natanaelneves", link: "https://github.com/natanaelneves" },
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
    <section id="sobre" className="section-shell bg-[var(--bg)]">
      <div className="grid gap-14 md:grid-cols-[1fr_1.2fr] md:gap-24">
        <motion.aside
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.12 }}
          className="md:sticky md:top-24 md:self-start"
        >
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-[var(--accent)]">
            Analista - Dev - Arquiteto
          </p>
          <h2 className="headline mt-4 text-5xl md:text-[3rem]">Natanael Neves</h2>
          <p className="mt-2 text-2xl text-[var(--muted)]">
            <em>Digital product builder</em>
          </p>

          <div className="mt-8 border-t border-[var(--border)]">
            {facts.map((fact) => (
              <div
                key={fact.label}
                className="flex items-center gap-4 border-b border-[var(--border)] py-4"
              >
                <span className="min-w-20 font-mono text-[0.65rem] uppercase tracking-[0.15em] text-[var(--muted)]">
                  {fact.label}
                </span>
                {fact.link ? (
                  <a href={fact.link} className="text-sm text-[var(--accent)]">
                    {fact.value}
                  </a>
                ) : (
                  <span className="text-sm">{fact.value}</span>
                )}
              </div>
            ))}
          </div>
        </motion.aside>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.12 }}
          className="space-y-9"
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

          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="border border-[var(--border)] px-3 py-2 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-[var(--muted)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

type BlockProps = {
  title: string;
  text: string;
};

function Block({ title, text }: BlockProps) {
  return (
    <div>
      <h3 className="headline text-[1.3rem]">{title}</h3>
      <p className="mono-muted mt-4 text-[0.85rem] leading-8">{text}</p>
    </div>
  );
}
