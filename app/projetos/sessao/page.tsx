import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sessão — Estudo de Caso | Natanael Neves",
  description:
    "Como construí um diário de filmes para casais com React, Vite e Firebase — resolvendo o problema de sincronização em tempo real entre dois usuários.",
};

const stack = ["React", "Vite", "Firebase", "Firestore", "PWA"];

const features = [
  { label: "Busca via TMDB", desc: "Busca em tempo real na base do The Movie Database. Poster, sinopse e metadados automaticamente preenchidos." },
  { label: "Watchlist compartilhada", desc: "Os dois adicionam filmes à mesma lista. Sincronização em tempo real — sem precisar atualizar a página." },
  { label: "Registro de sessões", desc: "Assistiram juntos? Um clique registra a sessão com data e hora." },
  { label: "Avaliações individuais", desc: "Cada um dá a sua nota. Notas diferentes, perspectivas diferentes. O sistema preserva ambas." },
  { label: "Séries em andamento", desc: "Controle de qual temporada e episódio estão assistindo. Não mais 'qual era o episódio mesmo?'" },
  { label: "Estatísticas do casal", desc: "Quantos filmes assistiram juntos. Gêneros favoritos. Avaliação média. Uma história em dados." },
];

export default function SessaoCaseStudy() {
  return (
    <div className="pb-32">
      {/* Hero */}
      <section className="border-b border-[var(--border)] pb-16 pt-16">
        <div className="container">
          <p className="label-accent">Estudo de caso · P02</p>

          <h1
            className="display mt-5"
            style={{ fontSize: "clamp(2.75rem,6vw,6rem)" }}
          >
            Sessão
          </h1>
          <p
            className="mt-3 text-[1.25rem]"
            style={{
              fontFamily: "var(--font-instrument-serif)",
              color: "var(--accent)",
              fontStyle: "italic",
            }}
          >
            Porque memórias se perdem.
          </p>

          <p className="body mt-7 max-w-[600px]">
            Casais que assistem muitos filmes e séries juntos não têm como
            registrar essa jornada de forma organizada — e emocional. Os apps
            existentes são para listas individuais. Sessão é para dois.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="https://sess-80b2c.web.app/"
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
              Minha namorada e eu assistimos muitos filmes juntos. Com o tempo,
              começamos a perder o controle: o que já assistimos? O que
              queríamos assistir? Qual era a nota dela para aquele filme que eu
              achei incrível?
            </p>

            <p className="body mt-5 max-w-[640px]">
              Tentamos alternativas. O Letterboxd é individual — não tem
              watchlist compartilhada para dois usuários. Planilhas são
              funcionais mas emocionalmente mortas. Listas no Notes não têm
              busca, avaliações, histórico.
            </p>

            <div
              className="mt-8 border border-[var(--border)] p-5"
              style={{ background: "var(--surface)" }}
            >
              <p className="mono text-[0.75rem] mb-2" style={{ color: "var(--muted)" }}>
                O insight
              </p>
              <p className="body">
                O problema não é tecnológico — é emocional. Casais que
                assistem juntos estão construindo uma memória compartilhada. O
                produto precisa respeitar isso: não apenas registrar, mas
                preservar a perspectiva de cada um.
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
              O maior desafio de design: como estruturar dados compartilhados
              entre dois usuários distintos, sem violar a privacidade de cada
              um, sem conflitos de escrita, com sincronização em tempo real.
            </p>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {[
                {
                  title: "Espaço compartilhado no Firestore",
                  text: "Criei o conceito de 'casal' como entidade própria no banco. Cada casal tem um ID único. Os dois usuários referenciam esse ID — os dados vivem no espaço do casal, não de nenhum deles individualmente.",
                },
                {
                  title: "Permissões por casal",
                  text: "As regras de segurança do Firestore verificam se o usuário autenticado pertence ao casal que está tentando acessar. Nenhum usuário acessa dados de outro casal — mesmo que saiba o ID.",
                },
                {
                  title: "Avaliações independentes",
                  text: "Cada usuário tem sua própria subcoleção de avaliações dentro do espaço compartilhado. Os dois podem ver as notas um do outro, mas só podem editar as próprias.",
                },
                {
                  title: "TMDB como fonte de verdade",
                  text: "Metadados de filmes (poster, sinopse, elenco, gênero) não são armazenados — são buscados via API no momento do uso. Evita dados desatualizados e reduz tamanho do banco.",
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

      {/* 03 — Desafio técnico */}
      <section className="section">
        <div className="container">
          <Block number="03" title="Desafio Técnico Principal">
            <h3 className="heading text-[1.25rem]">
              Sincronização sem colisão
            </h3>
            <p className="body mt-4 max-w-[640px]">
              Quando dois usuários estão usando o app ao mesmo tempo e um deles
              adiciona um filme à watchlist, o outro precisa ver essa atualização
              imediatamente — sem recarregar a página, sem conflitos.
            </p>

            <p className="body mt-4 max-w-[640px]">
              O risco: se os dois adicionam um filme ao mesmo tempo, a última
              escrita sobrescreve a anterior — e um registro se perde.
            </p>

            <div
              className="mt-6 border border-[var(--border)] p-5"
              style={{ background: "var(--surface)" }}
            >
              <p className="label-accent mb-3">Solução implementada</p>
              <p className="body text-[0.9375rem]">
                Operações de escrita na watchlist usam transações do Firestore
                em vez de escritas diretas. A transação lê o estado atual,
                verifica se o filme já existe e só então adiciona — tudo em uma
                operação atômica. Colisões são impossíveis.
              </p>
              <pre
                className="mt-4 overflow-x-auto font-mono text-[0.8rem] leading-[1.7]"
                style={{ color: "var(--text-2)" }}
              >
{`await runTransaction(db, async (transaction) => {
  const watchlistRef = doc(db, 'casais', casalId, 'watchlist', movieId);
  const snap = await transaction.get(watchlistRef);

  if (snap.exists()) return; // já existe, ignora

  transaction.set(watchlistRef, {
    addedBy: currentUser.uid,
    addedAt: serverTimestamp(),
    ...movieData,
  });
});`}
              </pre>
            </div>
          </Block>
        </div>
      </section>

      {/* 04 — Features */}
      <section className="section bg-[var(--surface)]">
        <div className="container">
          <Block number="04" title="O que foi construído">
            <div className="grid gap-3 sm:grid-cols-2">
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
                  title: "Dados compartilhados exigem modelo de propriedade explícito",
                  text: "Quem é dono do quê? No Sessão, o casal é dono da watchlist. Cada usuário é dono das próprias avaliações. Essa distinção tem que estar na estrutura de dados — não só na UI.",
                },
                {
                  title: "Transações são a única forma confiável de evitar colisões",
                  text: "Verificar antes de escrever sem transações é uma race condition esperando para acontecer. Se dois requests chegam ao mesmo tempo, a verificação passa nos dois — e ambos escrevem.",
                },
                {
                  title: "Produto para dois usuários tem UX diferente de produto individual",
                  text: "Cada ação tem um autor. 'Você adicionou' vs 'Ela adicionou' muda completamente a percepção. Atribuição de ações é um requisito de produto, não um detalhe de implementação.",
                },
              ].map((item) => (
                <div key={item.title} className="border-l-2 border-[var(--border)] pl-5">
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
                Sessão está rodando.
                <br />
                <em>Pode explorar agora.</em>
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://sess-80b2c.web.app/"
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
