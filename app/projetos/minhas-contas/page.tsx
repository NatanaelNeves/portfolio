import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Minhas Contas — Estudo de Caso | Natanael Neves",
  description:
    "Como transformei uma planilha em um sistema financeiro pessoal completo com React, TypeScript e Firebase.",
};

const stack = ["React", "TypeScript", "Firebase", "Firestore", "Tailwind CSS", "Framer Motion", "PWA"];

const features = [
  { label: "Múltiplos bancos", desc: "Saldos independentes por conta, propagados automaticamente entre meses." },
  { label: "Parcelamentos", desc: "Cartões com limite real. Parcelas que aparecem nos meses corretos sem configuração manual." },
  { label: "Faturas automáticas", desc: "A fatura fecha, os lançamentos se consolidam. Nenhuma soma manual." },
  { label: "Benefícios VA/VR", desc: "Saldo separado do dinheiro pessoal, com controle de uso diário." },
  { label: "Investimentos", desc: "Não misturado com conta corrente. Visão clara de patrimônio vs. liquidez." },
  { label: "Sync em tempo real", desc: "onSnapshot do Firestore. Abrir em dois dispositivos mostra o mesmo estado." },
  { label: "PWA", desc: "Instalável no celular. Funciona offline para leituras. Ícone na tela inicial." },
];

export default function MinhasContasCaseStudy() {
  return (
    <div className="pb-32">
      {/* Hero */}
      <section className="border-b border-[var(--border)] pb-16 pt-16">
        <div className="container">
          <p className="label-accent">Estudo de caso · P01</p>

          <h1
            className="display mt-5"
            style={{ fontSize: "clamp(2.75rem,6vw,6rem)" }}
          >
            Minhas Contas
          </h1>
          <p
            className="mt-3 text-[1.25rem]"
            style={{
              fontFamily: "var(--font-instrument-serif)",
              color: "var(--accent)",
              fontStyle: "italic",
            }}
          >
            Sistema financeiro pessoal. Construído porque eu precisava.
          </p>

          <p className="body mt-7 max-w-[600px]">
            Comecei com uma planilha que eu usava há anos para controlar meu
            dinheiro. Ela cresceu, ficou complexa, cheia de fórmulas frágeis — e
            um dia corrompeu. Então eu decidi construir o produto que eu
            realmente precisava.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="https://minhas-contas-831fb.web.app/"
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              Ver produto ao vivo ↗
            </a>
            <Link href="/#projetos" className="btn-ghost">
              ← Voltar
            </Link>
          </div>

          {/* Meta strip */}
          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-[var(--border)] pt-6">
            <div>
              <p className="label mb-1">Status</p>
              <p className="font-mono text-[0.8125rem]" style={{ color: "var(--accent)" }}>
                Em desenvolvimento
              </p>
            </div>
            <div>
              <p className="label mb-1">Stack</p>
              <div className="flex flex-wrap gap-1.5">
                {stack.map((t) => (
                  <span
                    key={t}
                    className="border border-[var(--border)] px-2 py-[0.2rem] font-mono text-[0.6rem] uppercase tracking-[0.1em]"
                    style={{ color: "var(--muted)" }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 01 — Problema */}
      <section className="section">
        <div className="container">
          <Block number="01" title="O Problema">
            <p className="body max-w-[640px]">
              Planilhas para controle financeiro pessoal têm um problema
              fundamental: elas são estáticas. Cada mês era uma aba nova. O saldo
              de fevereiro não sabia o que havia acontecido em janeiro.
              Parcelamentos precisavam ser atualizados manualmente. Cartões de
              crédito eram um pesadelo.
            </p>

            <p className="body mt-5 max-w-[640px]">
              Tentei apps de mercado. Nenhum controlava o que eu precisava:
            </p>

            <ul className="mt-4 space-y-2">
              {[
                "Múltiplos bancos com saldos independentes",
                "Parcelamentos que se propagam automaticamente pelos meses seguintes",
                "Benefícios VA/VR separados do dinheiro pessoal",
                "Investimentos sem misturar com conta corrente",
                "Sincronização entre dispositivos sem precisar abrir o computador",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 font-mono text-[0.875rem]"
                  style={{ color: "var(--text-2)" }}
                >
                  <span style={{ color: "var(--border-strong)", marginTop: "2px" }}>→</span>
                  {item}
                </li>
              ))}
            </ul>

            <div
              className="mt-8 border border-[var(--border)] p-5"
              style={{ background: "var(--surface)" }}
            >
              <p className="mono text-[0.75rem]" style={{ color: "var(--muted)" }}>
                Decisão
              </p>
              <p className="body mt-2">
                Construir exatamente o que eu precisava. Sem tentar criar um
                produto genérico para todo mundo. Otimizado para o meu fluxo
                financeiro específico — e suficientemente estruturado para que
                qualquer pessoa com as mesmas necessidades possa usar.
              </p>
            </div>
          </Block>
        </div>
      </section>

      {/* 02 — Arquitetura */}
      <section className="section bg-[var(--surface)]">
        <div className="container">
          <Block number="02" title="Arquitetura e Decisões">
            <p className="body max-w-[640px]">
              A decisão mais crítica foi como modelar o banco de dados para que
              o saldo se propague entre meses automaticamente, sem recalcular
              tudo toda vez que um lançamento é adicionado.
            </p>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {[
                {
                  title: "Propagação de saldo",
                  text: "Cada mês armazena o saldo inicial (herdado do mês anterior) e os lançamentos do período. Ao atualizar um lançamento em março, apenas os meses posteriores são recalculados — não o histórico inteiro.",
                },
                {
                  title: "Firebase como backend",
                  text: "Escolha consciente: autenticação, banco de dados e hospedagem num único SDK. Para um projeto pessoal sem servidor dedicado, Firebase reduz fricção sem sacrificar consistência.",
                },
                {
                  title: "Firestore vs. SQL",
                  text: "Dados financeiros são hierárquicos por natureza (conta → mês → lançamento). Documentos aninhados no Firestore representam essa hierarquia melhor do que tabelas relacionais para esse caso específico.",
                },
                {
                  title: "Arquitetura reativa",
                  text: "onSnapshot em vez de chamadas pontuais. O estado da UI reflete sempre o estado do banco de dados — sem polling, sem cache manual.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="border border-[var(--border)] p-5"
                  style={{ background: "var(--bg)" }}
                >
                  <p className="label-accent mb-2">{item.title}</p>
                  <p className="body text-[0.9375rem]">{item.text}</p>
                </div>
              ))}
            </div>
          </Block>
        </div>
      </section>

      {/* 03 — Desafios */}
      <section className="section">
        <div className="container">
          <Block number="03" title="Desafios Técnicos">
            {/* Race Conditions */}
            <div className="mb-12">
              <h3 className="heading text-[1.25rem]">Race Conditions no Firestore</h3>
              <p className="body mt-4 max-w-[640px]">
                Quando o usuário adiciona vários lançamentos rapidamente, múltiplos
                callbacks <code className="font-mono text-[0.875em]" style={{ color: "var(--accent)" }}>onSnapshot</code> disparam quase
                ao mesmo tempo. Cada um lê o estado atual, calcula o novo saldo e
                tenta escrever de volta — resultando em estado inconsistente.
              </p>

              <p className="body mt-4 max-w-[640px]">
                <strong style={{ color: "var(--text)" }}>Solução:</strong> Mutex
                usando <code className="font-mono text-[0.875em]" style={{ color: "var(--accent)" }}>useRef</code> para
                serializar operações de escrita. A fila garante que apenas uma
                operação acontece por vez, sem bloquear a UI.
              </p>

              <div
                className="mt-6 overflow-x-auto border border-[var(--border)] p-5"
                style={{ background: "var(--surface)" }}
              >
                <pre className="font-mono text-[0.8rem] leading-[1.7]" style={{ color: "var(--text-2)" }}>
{`const writeLock = useRef(false);
const writeQueue = useRef<(() => Promise<void>)[]>([]);

const enqueue = (op: () => Promise<void>) => {
  writeQueue.current.push(op);
  processQueue();
};

const processQueue = async () => {
  if (writeLock.current) return;
  writeLock.current = true;
  while (writeQueue.current.length > 0) {
    const op = writeQueue.current.shift()!;
    await op();
  }
  writeLock.current = false;
};`}
                </pre>
              </div>
            </div>

            {/* Modelagem */}
            <div>
              <h3 className="heading text-[1.25rem]">Modelagem de parcelamentos</h3>
              <p className="body mt-4 max-w-[640px]">
                Parcelamentos precisam aparecer nos meses corretos sem que o
                usuário configure cada parcela manualmente. A solução foi
                armazenar a parcela original com metadados (total de parcelas,
                data de início) e gerar as ocorrências em runtime — nunca
                duplicando dados no banco.
              </p>
              <p className="body mt-3 max-w-[640px]">
                Isso significa que alterar o valor de um parcelamento atualiza
                todas as parcelas automaticamente, sem precisar editar cada mês
                individualmente.
              </p>
            </div>
          </Block>
        </div>
      </section>

      {/* 04 — Features */}
      <section className="section bg-[var(--surface)]">
        <div className="container">
          <Block number="04" title="O que foi construído">
            <div className="mt-0 grid gap-3 sm:grid-cols-2">
              {features.map((f) => (
                <div
                  key={f.label}
                  className="border border-[var(--border)] p-5 transition-colors hover:border-[var(--border-strong)]"
                  style={{ background: "var(--bg)" }}
                >
                  <p className="heading text-[1rem]">{f.label}</p>
                  <p className="body mt-2 text-[0.875rem]">{f.desc}</p>
                </div>
              ))}
            </div>
          </Block>
        </div>
      </section>

      {/* 05 — Aprendizados */}
      <section className="section">
        <div className="container">
          <Block number="05" title="O que aprendi">
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Modelagem no Firestore é diferente de SQL",
                  text: "Pensar em documentos ao invés de tabelas muda como você estrutura dados. A hierarquia natural dos dados financeiros se encaixa melhor em documentos aninhados do que em joins.",
                },
                {
                  title: "Race conditions são invisíveis até serem devastadoras",
                  text: "Aprendi a identificar operações potencialmente concorrentes antes de escrever. Qualquer operação que lê e escreve estado assincronamente é suspeita.",
                },
                {
                  title: "PWA é subestimado",
                  text: "A diferença entre abrir um link e ter um ícone na tela inicial muda o comportamento de uso completamente. Instalação é retenção.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="border-l-2 border-[var(--border)] pl-5"
                >
                  <h3 className="heading text-[1rem]">{item.title}</h3>
                  <p className="body mt-3 text-[0.9375rem]">{item.text}</p>
                </div>
              ))}
            </div>
          </Block>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section bg-[var(--surface)]">
        <div className="container">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="label-accent">Produto ao vivo</p>
              <h2
                className="heading mt-3"
                style={{ fontSize: "clamp(1.5rem,3vw,2.5rem)" }}
              >
                Minhas Contas está rodando.
                <br />
                <em>Pode testar agora.</em>
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://minhas-contas-831fb.web.app/"
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                Abrir produto ↗
              </a>
              <Link href="/#projetos" className="btn-ghost">
                ← Todos os projetos
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Block({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-baseline gap-4 border-b border-[var(--border)] pb-6">
        <span className="mono text-[0.75rem] tracking-[0.15em]">{number}</span>
        <h2 className="heading" style={{ fontSize: "clamp(1.75rem,3vw,2.5rem)" }}>
          {title}
        </h2>
      </div>
      <div className="mt-8">{children}</div>
    </div>
  );
}
