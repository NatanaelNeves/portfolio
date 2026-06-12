"use client";

import { AnimatePresence, m, useMotionValue, useSpring } from "framer-motion";
import type { Variants } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { CountUp, EASE, SectionHeader } from "@/components/motion";

/* ─── Variants compartilhados dos cards ─────────────────────────── */

const colVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

/* ─── Tilt 3D ───────────────────────────────────────────────────────
   O mockup inclina sutilmente seguindo o mouse — sensação de objeto
   físico. Inerte no touch (mousemove não dispara). */
function TiltPreview({ children }: { children: React.ReactNode }) {
  const mvX = useMotionValue(0);
  const mvY = useMotionValue(0);
  const rotateX = useSpring(mvX, { stiffness: 180, damping: 22, mass: 0.6 });
  const rotateY = useSpring(mvY, { stiffness: 180, damping: 22, mass: 0.6 });

  return (
    <m.div
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      whileHover={{ scale: 1.015 }}
      transition={{ duration: 0.3, ease: EASE }}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        mvX.set(py * -7);
        mvY.set(px * 9);
      }}
      onMouseLeave={() => {
        mvX.set(0);
        mvY.set(0);
      }}
      className="will-change-transform"
    >
      {children}
    </m.div>
  );
}

/* ─── Browser Mockup ────────────────────────────────────────────── */

function BrowserBar({ url }: { url: string }) {
  return (
    <div className="flex items-center gap-2 border-b border-[var(--border)] bg-[var(--surface-2)] px-3 py-2">
      <span className="h-[5px] w-[5px] rounded-full bg-[var(--border-strong)]" />
      <span className="h-[5px] w-[5px] rounded-full bg-[var(--border-strong)]" />
      <span className="h-[5px] w-[5px] rounded-full bg-[var(--border-strong)]" />
      <div className="ml-1.5 flex flex-1 items-center rounded-sm border border-[var(--border)] bg-[var(--bg)] px-2 py-0.5">
        <span className="font-mono text-[0.5rem] leading-none" style={{ color: "var(--muted)" }}>
          {url}
        </span>
      </div>
    </div>
  );
}

function MinhasContasPreview() {
  return (
    <div
      className="overflow-hidden border border-[var(--border)]"
      role="img"
      aria-label="Interface do Minhas Contas: saldo total e barras de saldo por banco"
    >
      <BrowserBar url="minhas-contas-831fb.web.app" />
      <div className="space-y-3 bg-[var(--bg)] p-5">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-mono text-[0.5rem] uppercase tracking-widest" style={{ color: "var(--muted)" }}>
              Saldo total
            </p>
            <p className="font-sans text-2xl font-extrabold leading-tight" style={{ color: "var(--text)" }}>
              R${" "}
              <CountUp
                value={12847}
                duration={1.8}
                formatter={(n) => n.toLocaleString("pt-BR")}
                className="tabular-nums"
              />
              <span className="text-base font-normal" style={{ color: "var(--text-2)" }}>,00</span>
            </p>
          </div>
          <span className="flex items-center gap-1.5 font-mono text-[0.5rem]" style={{ color: "var(--status)" }}>
            <span
              className="inline-block h-[4px] w-[4px] rounded-full"
              style={{ background: "var(--status)", animation: "pulse-status 2.5s ease-in-out infinite" }}
            />
            Em dia
          </span>
        </div>

        <div className="space-y-2.5">
          {[
            { label: "Nubank", pct: 62, value: "R$ 7.960" },
            { label: "C6 Bank", pct: 35, value: "R$ 4.497" },
            { label: "Caixa", pct: 3, value: "R$ 390" },
          ].map((bank, i) => (
            <div key={bank.label}>
              <div className="mb-1 flex justify-between">
                <span className="font-mono text-[0.5rem]" style={{ color: "var(--muted)" }}>{bank.label}</span>
                <span className="font-mono text-[0.5rem]" style={{ color: "var(--text-2)" }}>{bank.value}</span>
              </div>
              <div className="h-[2px] w-full" style={{ background: "var(--border)" }}>
                <m.div
                  className="h-full"
                  style={{ background: "var(--accent)", opacity: 0.55 }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${bank.pct}%` }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 1.1, ease: EASE, delay: 0.2 + i * 0.15 }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-2 pt-1">
          {["Faturas", "Cartões", "Investimentos"].map((tab) => (
            <span key={tab} className="border px-2 py-0.5 font-mono text-[0.5rem] uppercase tracking-widest" style={{ borderColor: "var(--border)", color: "var(--muted)" }}>
              {tab}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function SessaoPreview() {
  const posters = ["#1a1a2e", "#16213e", "#0f3460", "#533483", "#e94560", "#1b1b2f", "#162447", "#1f4068"];

  return (
    <div
      className="overflow-hidden border border-[var(--border)]"
      role="img"
      aria-label="Interface do Sessão: watchlist compartilhada com pôsteres de filmes"
    >
      <BrowserBar url="sess-80b2c.web.app" />
      <div className="space-y-4 bg-[var(--bg)] p-5">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[0.5rem] uppercase tracking-widest" style={{ color: "var(--muted)" }}>
            Watchlist do casal
          </span>
          <span className="font-mono text-[0.5rem] tabular-nums" style={{ color: "var(--accent)", opacity: 0.7 }}>
            <CountUp value={47} duration={1.6} /> filmes
          </span>
        </div>

        <div className="grid grid-cols-4 gap-1.5">
          {posters.map((color, i) => (
            <m.div
              key={i}
              className="aspect-[2/3] rounded-sm"
              style={{ background: color, border: "1px solid var(--border)" }}
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, ease: EASE, delay: 0.1 + i * 0.05 }}
            />
          ))}
        </div>

        <div className="flex items-center justify-between border-t pt-3" style={{ borderColor: "var(--border)" }}>
          <div className="flex gap-0.5">
            {[1, 2, 3, 4].map((s, i) => (
              <m.span
                key={s}
                className="text-[0.65rem]"
                style={{ color: "var(--accent)" }}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.35, ease: EASE, delay: 0.5 + i * 0.09 }}
              >
                ★
              </m.span>
            ))}
            <span className="text-[0.65rem]" style={{ color: "var(--border-strong)" }}>★</span>
          </div>
          <span className="font-mono text-[0.5rem]" style={{ color: "var(--muted)" }}>Avaliação média</span>
        </div>
      </div>
    </div>
  );
}

/* ─── Data ──────────────────────────────────────────────────────── */

type PersonalProject = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  challenge: string;
  features: string[];
  stack: string[];
  status: string;
  projetoUrl: string;
  codigoUrl?: string;
  caseStudyUrl: string;
  Preview: () => React.JSX.Element;
};

const personalProjects: PersonalProject[] = [
  {
    id: "P01",
    name: "Minhas Contas",
    tagline: "Comecei com uma planilha.",
    description:
      "Sistema financeiro pessoal completo. Nenhuma ferramenta existente controlava o que eu precisava: múltiplos bancos, parcelamentos com propagação automática, benefícios corporativos e investimentos — tudo no mesmo lugar.",
    challenge:
      "Race conditions ao atualizar saldos via onSnapshot simultâneo. Resolvi com mutex usando useRef — garantindo consistência dos cálculos sem travar a UI.",
    features: [
      "Múltiplos bancos e contas",
      "Saldo propagado entre meses",
      "Cartões com limite e parcelamentos",
      "Faturas automáticas",
      "Controle de benefícios VA/VR",
      "Investimentos e gastos recorrentes",
      "Sincronização em tempo real",
    ],
    stack: ["React", "TypeScript", "Firebase", "Tailwind", "Framer Motion", "PWA"],
    status: "No ar",
    projetoUrl: "https://minhas-contas-831fb.web.app/",
    caseStudyUrl: "/projetos/minhas-contas",
    Preview: MinhasContasPreview,
  },
  {
    id: "P02",
    name: "Sessão",
    tagline: "Porque memórias se perdem.",
    description:
      "Diário de filmes e séries para casais. Casais que assistem muito juntos não têm como registrar essa jornada de forma organizada — e emocional. Sessão resolve isso.",
    challenge:
      "Dados compartilhados em tempo real entre dois usuários distintos. Modelei um 'espaço compartilhado' no Firestore com permissões isoladas por casal, evitando colisões de escrita.",
    features: [
      "Busca de filmes via TMDB",
      "Watchlist compartilhada",
      "Registro de sessões",
      "Avaliações individuais",
      "Séries em andamento",
      "Estatísticas do casal",
    ],
    stack: ["React", "Vite", "Firebase", "PWA"],
    status: "No ar",
    projetoUrl: "https://sess-80b2c.web.app/",
    caseStudyUrl: "/projetos/sessao",
    Preview: SessaoPreview,
  },
];

type ClientProject = {
  id: string;
  name: string;
  stack: string[];
  problema?: string;
  diagnostico?: string;
  solucao?: string;
  responsabilidade?: string;
  contexto?: string;
  entrega?: string;
  resultado: string;
  metric: string;
  projetoUrl?: string;
  codigoUrl?: string;
};

const clientProjects: ClientProject[] = [
  {
    id: "C01",
    name: "Plataforma Corporativa de Chamados — O Pequeno Nazareno",
    stack: ["TypeScript", "React", "Node.js", "PostgreSQL", "WebSocket", "Azure"],
    problema:
      "A ONG gerenciava demandas de TI, Administrativo e RH por e-mail, papel e mensagens informais — sem rastreamento, sem SLA, sem histórico, sem confidencialidade entre setores.",
    diagnostico:
      "Além da falta de visibilidade, o sistema precisava de fluxos independentes por setor: chamados de RH não podem ser visíveis para TI. Nenhuma ferramenta genérica resolvia isso sem customização cara.",
    solucao:
      "Plataforma interna criada do zero: fluxos independentes por setor, permissões por função, confidencialidade configurável, notificações automáticas via WebSocket, upload de documentos e painel em tempo real.",
    responsabilidade:
      "Levantamento de requisitos com gestores, arquitetura full stack, design system institucional, backend Node.js + PostgreSQL, WebSocket para notificações em tempo real, controle de acesso por perfil e deploy Azure. Do briefing ao treinamento dos usuários finais.",
    resultado:
      "Plataforma em produção, usada diariamente por 3+ setores e dezenas de colaboradores — eliminando o controle manual por e-mail e papel.",
    metric: "3+ setores",
    projetoUrl: "https://green-ocean-096bd050f.2.azurestaticapps.net/admin/chamados",
    codigoUrl: "https://github.com/NatanaelNeves/portal-ti",
  },
  {
    id: "C02",
    name: "Site Profissional — Psicóloga Vitória Dandara",
    stack: ["Next.js", "TypeScript", "Sanity.io", "Vercel", "CSS Modules"],
    problema:
      "Sem presença digital, a psicóloga perdia autoridade no mercado e dependia de indicações informais para captar pacientes.",
    diagnostico:
      "Precisava de um canal de contato confiável, com conteúdo gerenciável de forma autônoma e estrutura para conversão.",
    solucao:
      "Site com páginas institucionais, blog gerenciado via Sanity.io, formulário de contato, botão de WhatsApp e SEO estruturado.",
    responsabilidade:
      "Next.js App Router, integração com Sanity.io para autonomia da cliente, deploy na Vercel, configuração de CORS e variáveis de ambiente.",
    resultado:
      "A psicóloga publica conteúdo de forma autônoma, sem depender de suporte técnico para atualizações.",
    metric: "Autônoma",
    projetoUrl: "https://site-vitoria-dandara.vercel.app",
    codigoUrl: "https://github.com/NatanaelNeves/site-vitoria-dandara",
  },
  {
    id: "C03",
    name: "FitTrack Pro — Controle de Treinos",
    stack: ["React", "Firebase", "Framer Motion", "React Router"],
    contexto:
      "Transformar a planilha de treino de um amigo em uma plataforma digital com registro de cargas e visualização de evolução.",
    entrega:
      "SPA completa: autenticação Firebase, planejamento de ciclos de treino, registro por série, detector de PRs pessoais, dashboard de evolução e timer de descanso integrado.",
    resultado:
      "Substitui planilhas manuais por uma plataforma com feedback inteligente e acompanhamento visual de progresso.",
    metric: "Produção",
    projetoUrl: "https://controle-de-treinos-8cwo.vercel.app",
    codigoUrl: "https://github.com/NatanaelNeves/controle-de-treinos",
  },
];

/* ─── Personal Project Card ─────────────────────────────────────── */

function PersonalCard({ project }: { project: PersonalProject }) {
  const { Preview } = project;

  return (
    <m.article
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: EASE }}
      viewport={{ once: true, amount: 0.05 }}
      className="border border-[var(--border)] bg-[var(--surface)] transition-colors duration-300 hover:border-[var(--border-strong)]"
    >
      {/* Header bar — id, status e links */}
      <div className="flex items-center justify-between gap-4 border-b border-[var(--border)] px-8 py-4 md:px-12">
        <div className="flex items-center gap-5">
          <span className="mono text-xs tracking-[0.15em]">{project.id}</span>
          <span className="flex items-center gap-1.5 font-mono text-[0.6rem] uppercase tracking-[0.12em]" style={{ color: "var(--status)" }}>
            <span
              className="inline-block h-[5px] w-[5px] rounded-full"
              style={{ background: "var(--status)", animation: "pulse-status 2.5s ease-in-out infinite" }}
              aria-hidden
            />
            {project.status}
          </span>
        </div>
        <div className="flex items-center gap-5">
          <a
            href={project.projetoUrl}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-[0.6rem] uppercase tracking-[0.12em] transition-colors hover:text-[var(--accent)]"
            style={{ color: "var(--muted)" }}
            aria-label={`Ver ${project.name} ao vivo`}
          >
            Ver ao vivo ↗
          </a>
          {project.codigoUrl && (
            <a
              href={project.codigoUrl}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-[0.6rem] uppercase tracking-[0.12em] transition-colors hover:text-[var(--accent)]"
              style={{ color: "var(--muted)" }}
              aria-label={`Código de ${project.name} no GitHub`}
            >
              GitHub ↗
            </a>
          )}
        </div>
      </div>

      {/* Main: narrativa à esquerda, mockup vivo à direita */}
      <div className="grid gap-10 p-8 md:grid-cols-[1fr_360px] md:gap-16 md:p-14">
        <m.div
          variants={colVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col"
        >
          <m.h3 variants={itemVariants} className="heading" style={{ fontSize: "clamp(1.75rem,2.8vw,2.25rem)" }}>
            {project.name}
          </m.h3>
          <m.p
            variants={itemVariants}
            className="mt-3"
            style={{
              fontFamily: "var(--font-instrument-serif)",
              fontSize: "1.125rem",
              color: "var(--accent)",
              fontStyle: "italic",
            }}
          >
            {project.tagline}
          </m.p>

          <m.p variants={itemVariants} className="body mt-8 max-w-[52ch] text-[0.9375rem]">
            {project.description}
          </m.p>

          <m.div
            variants={itemVariants}
            className="mt-10 border border-[var(--border)] border-l-2 border-l-[var(--accent)] p-6"
            style={{ background: "var(--accent-bg)" }}
          >
            <p className="label-accent mb-3">Desafio técnico</p>
            <p className="body text-[0.875rem]">{project.challenge}</p>
          </m.div>

          <m.div variants={itemVariants} className="mt-10 flex flex-wrap gap-3">
            <a href={project.projetoUrl} target="_blank" rel="noreferrer" className="btn-primary">
              Ver produto ↗
            </a>
            <Link href={project.caseStudyUrl} className="btn-ghost">
              Estudo de caso →
            </Link>
          </m.div>
        </m.div>

        <div className="flex flex-col gap-8">
          <TiltPreview>
            <Preview />
          </TiltPreview>

          <div>
            <p className="label mb-3">Stack</p>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tag) => (
                <span key={tag} className="stack-tag">{tag}</span>
              ))}
            </div>
          </div>

          <div>
            <p className="label mb-3">Features</p>
            <ul className="space-y-2.5">
              {project.features.map((f) => (
                <li key={f} className="body flex items-start gap-2.5 text-[0.875rem] leading-[1.6]">
                  <span style={{ color: "var(--accent)", marginTop: "2px", flexShrink: 0 }}>→</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </m.article>
  );
}

/* ─── Client Accordion ──────────────────────────────────────────── */

function ClientAccordion({ project }: { project: ClientProject }) {
  const [open, setOpen] = useState(false);

  return (
    <article className="relative border-b border-[var(--border)]">
      {/* Barra accent que desenha quando o caso abre */}
      <m.span
        className="absolute left-0 top-0 z-10 h-full w-[2px] origin-top"
        style={{ background: "var(--accent)" }}
        initial={false}
        animate={{ scaleY: open ? 1 : 0 }}
        transition={{ duration: 0.45, ease: EASE }}
        aria-hidden
      />

      <button
        onClick={() => setOpen(!open)}
        className="group flex w-full items-start justify-between gap-4 p-6 text-left transition-colors hover:bg-[var(--surface)] md:items-center md:p-7"
        type="button"
        aria-expanded={open}
      >
        <div className="flex items-center gap-5">
          <span className="mono text-xs tracking-[0.15em]">{project.id}</span>
          <h3
            className="heading text-[1.05rem] transition-[color,transform] duration-300 group-hover:translate-x-1 md:text-[1.2rem]"
            style={{ color: open ? "var(--accent)" : undefined }}
          >
            {project.name}
          </h3>
        </div>
        <div
          className="flex shrink-0 items-center gap-2 font-mono text-[0.6875rem] uppercase tracking-[0.12em]"
          style={{ color: "var(--muted)" }}
        >
          <m.span
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ duration: 0.25, ease: EASE }}
            className="text-base leading-none"
            style={{ color: open ? "var(--accent)" : undefined }}
          >
            +
          </m.span>
          {open ? "Fechar" : "Abrir caso"}
        </div>
      </button>

      {/* Meta row — stack + links sempre visíveis */}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-[var(--border)] px-6 py-3.5 md:px-7">
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tag) => (
            <span key={tag} className="stack-tag">{tag}</span>
          ))}
        </div>
        <div className="ml-auto flex flex-wrap gap-5">
          {project.projetoUrl && (
            <a
              href={project.projetoUrl}
              target="_blank"
              rel="noreferrer"
              className="label transition-colors hover:text-[var(--accent)]"
              aria-label={`Acessar ${project.name} ao vivo`}
            >
              Ver ao vivo ↗
            </a>
          )}
          {project.codigoUrl && (
            <a
              href={project.codigoUrl}
              target="_blank"
              rel="noreferrer"
              className="label transition-colors hover:text-[var(--accent)]"
              aria-label={`Código de ${project.name} no GitHub`}
            >
              GitHub ↗
            </a>
          )}
        </div>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <m.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="grid gap-8 border-t border-[var(--border)] p-6 md:grid-cols-2 md:p-10">
              <div className="space-y-6">
                {project.problema && <Field title="Problema" text={project.problema} />}
                {project.diagnostico && <Field title="Diagnóstico" text={project.diagnostico} />}
                {project.solucao && <Field title="Solução" text={project.solucao} />}
                {project.responsabilidade && <Field title="Responsabilidade" text={project.responsabilidade} />}
                {project.contexto && <Field title="Contexto" text={project.contexto} />}
                {project.entrega && <Field title="Entrega" text={project.entrega} />}
              </div>

              <m.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.18, duration: 0.5, ease: EASE }}
                className="h-fit border border-[var(--border)] p-8"
              >
                <p className="label-accent">Resultado</p>
                <p className="mt-2 font-sans text-5xl font-extrabold" style={{ color: "var(--accent)" }}>
                  {project.metric}
                </p>
                <p className="body mt-5">{project.resultado}</p>
              </m.div>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </article>
  );
}

function Field({ title, text }: { title: string; text: string }) {
  return (
    <div>
      <p className="label-accent">{title}</p>
      <p className="body mt-2 text-[0.9375rem]">{text}</p>
    </div>
  );
}

/* ─── Section ───────────────────────────────────────────────────── */

export default function Projetos() {
  return (
    <section id="projetos" className="section bg-[var(--bg)]">
      <div className="container">
        <SectionHeader
          index="01 / 05"
          label="Produtos"
          title="O que eu construo quando tenho um problema."
          lead="Antes de qualquer cliente, construo para mim. Os produtos abaixo nasceram de necessidades reais — e mostram como eu penso quando tenho total autonomia de decisão."
        />

        <div className="mt-14 flex flex-col gap-px bg-[var(--border)]">
          {personalProjects.map((project) => (
            <PersonalCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-24">
          <SectionHeader
            index="02 / 05"
            label="Trabalhos para clientes"
            title="Casos reais, impacto mensurável."
          />
        </div>

        <div className="mt-10 border border-[var(--border)] border-b-0">
          {clientProjects.map((project) => (
            <ClientAccordion key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
