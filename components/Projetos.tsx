"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

type Project = {
  id: string;
  name: string;
  stack: string[];
  problema?: string;
  diagnostico?: string;
  solucao?: string;
  responsabilidade?: string;
  resultado: string;
  projetoUrl?: string;
  codigoUrl?: string;
  contexto?: string;
  entrega?: string;
  metric?: string;
};

const projects: Project[] = [
  {
    id: "001",
    name: "Central de Apoio — O Pequeno Nazareno",
    stack: ["TypeScript", "React", "Node.js", "Express", "PostgreSQL", "Azure"],
    problema:
      "A ONG não tinha sistema centralizado para demandas de TI. Tudo era resolvido por planilhas, e-mails e mensagens, sem rastreamento, sem SLA e sem histórico.",
    diagnostico:
      "Sem visibilidade do volume de chamados, sem métricas de atendimento e sem controle de ativos. A equipe de TI trabalhava no escuro e a gestão não tinha como acompanhar indicadores.",
    solucao:
      "Portal helpdesk completo com módulos de chamados, inventário de ativos, movimentações, compras, central de conhecimento e dashboards estratégicos.",
    responsabilidade:
      "Arquitetura full stack, design system institucional, backend com Node.js + PostgreSQL, frontend React com Zustand, controle de acesso por perfil (usuário, TI, gestão, admin) e deploy no Azure.",
    resultado:
      "100% das demandas de TI passaram a ser registradas, rastreadas e mensuradas — substituindo controles informais por um ambiente único e auditável.",
    metric: "100%",
    codigoUrl: "https://github.com/NatanaelNeves/portal-ti",
  },
  {
    id: "002",
    name: "Site Profissional — Psicóloga Vitória Dandara",
    stack: ["Next.js", "TypeScript", "Sanity.io", "Vercel", "CSS Modules"],
    problema:
      "A psicóloga não tinha presença digital profissional. Sem site, perdia autoridade no mercado e dependia de indicações informais para captar pacientes.",
    diagnostico:
      "Necessidade de um canal de contato confiável, com conteúdo gerenciável de forma autônoma e otimizado para conversão.",
    solucao:
      "Site completo com páginas institucionais (Home, Sobre, Serviços), blog com CMS headless via Sanity.io, formulário de contato via Formspree, botão de WhatsApp e estrutura de SEO.",
    responsabilidade:
      "Desenvolvimento full stack com Next.js App Router, integração com Sanity.io para autonomia da cliente, deploy contínuo na Vercel e configuração de CORS e variáveis de ambiente.",
    resultado:
      "Site publicado e no ar — a psicóloga publica conteúdo de forma autônoma, sem depender de suporte técnico para atualizações.",
    metric: "Autônoma",
    projetoUrl: "https://site-vitoria-dandara.vercel.app",
    codigoUrl: "https://github.com/NatanaelNeves/site-vitoria-dandara",
  },
  {
    id: "003",
    name: "FitTrack Pro — Controle de Treinos",
    stack: ["React", "Firebase", "Framer Motion", "React Router", "Vercel"],
    contexto:
      "Projeto pessoal criado para transformar a planilha de treino de um amigo em uma plataforma digital completa — com registro de cargas, visualização de evolução e feedback motivacional.",
    entrega:
      "SPA completa com autenticação Firebase, planejamento de ciclos de treino, registro por série, detector de recordes pessoais (PRs), dashboard de evolução, histórico com filtros e timer de descanso integrado.",
    resultado:
      "Aplicação publicada em produção — substitui planilhas manuais por uma plataforma interativa com feedback inteligente e acompanhamento visual de progresso.",
    metric: "Produção",
    projetoUrl: "https://controle-de-treinos-8cwo.vercel.app",
    codigoUrl: "https://github.com/NatanaelNeves/controle-de-treinos",
  },
];

export default function Projetos() {
  const [openId, setOpenId] = useState<string>(projects[0].id);

  return (
    <section id="projetos" className="section bg-[var(--bg)]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.15 }}
        >
          <p className="label-accent">Projetos</p>
          <h2 className="heading mt-4 text-[clamp(2rem,4vw,3.25rem)]">
            Casos reais, impacto
            <br />
            <em>mensurável.</em>
          </h2>
        </motion.div>

        <div className="mt-12 border border-[var(--border)] border-b-0">
          {projects.map((project) => {
            const isOpen = openId === project.id;

            return (
              <article key={project.id} className="border-b border-[var(--border)]">
                <button
                  onClick={() => setOpenId(isOpen ? "" : project.id)}
                  className="flex w-full flex-col gap-4 p-6 text-left transition-colors hover:bg-[var(--surface)] md:flex-row md:items-center md:justify-between md:p-7"
                  type="button"
                >
                  <div className="flex items-center gap-5">
                    <span className="mono text-xs tracking-[0.15em]">
                      {project.id}
                    </span>
                    <h3 className="heading text-[1.1rem] md:text-[1.25rem]">
                      {project.name}
                    </h3>
                  </div>

                  <div className="flex flex-wrap items-center gap-1.5">
                    {project.stack.map((tag) => (
                      <span
                        key={tag}
                        className="border border-[var(--border)] px-2 py-[0.2rem] font-mono text-[0.6rem] uppercase tracking-[0.14em] text-[var(--muted)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex shrink-0 items-center gap-2 font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-[var(--muted)]">
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-base leading-none"
                      style={{ color: isOpen ? "var(--accent)" : undefined }}
                    >
                      +
                    </motion.span>
                    {isOpen ? "Fechar" : "Abrir caso"}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.32, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="grid gap-8 border-t border-[var(--border)] p-6 md:grid-cols-2 md:p-7">
                        <div className="space-y-6">
                          {project.problema && (
                            <Field title="Problema" text={project.problema} />
                          )}
                          {project.diagnostico && (
                            <Field title="Diagnóstico" text={project.diagnostico} />
                          )}
                          {project.solucao && (
                            <Field title="Solução" text={project.solucao} />
                          )}
                          {project.responsabilidade && (
                            <Field
                              title="Responsabilidade"
                              text={project.responsabilidade}
                            />
                          )}
                          {project.contexto && (
                            <Field title="Contexto" text={project.contexto} />
                          )}
                          {project.entrega && (
                            <Field title="Entrega" text={project.entrega} />
                          )}
                        </div>

                        <div className="border border-[var(--border)] p-6">
                          <p className="label-accent">Resultado</p>
                          <p
                            className="mt-2 font-sans text-5xl font-extrabold"
                            style={{ color: "var(--accent)" }}
                          >
                            {project.metric}
                          </p>
                          <p className="body mt-4 text-[0.9375rem]">
                            {project.resultado}
                          </p>

                          <div className="mt-8 flex flex-wrap gap-5">
                            {project.projetoUrl && (
                              <a
                                className="label transition-colors hover:text-[var(--accent)]"
                                href={project.projetoUrl}
                                target="_blank"
                                rel="noreferrer"
                              >
                                Acessar projeto ↗
                              </a>
                            )}
                            {project.codigoUrl && (
                              <a
                                className="label transition-colors hover:text-[var(--accent)]"
                                href={project.codigoUrl}
                                target="_blank"
                                rel="noreferrer"
                              >
                                Ver código ↗
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

type FieldProps = { title: string; text: string };

function Field({ title, text }: FieldProps) {
  return (
    <div>
      <p className="label-accent">{title}</p>
      <p className="body mt-2 text-[0.9375rem]">{text}</p>
    </div>
  );
}
