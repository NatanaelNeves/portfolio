"use client";

import { AnimatePresence, motion } from "framer-motion";
import { FormEvent, useState } from "react";
import { analisarIdeia, type DiagnosticoResultado } from "@/lib/diagnostico";

export default function Diagnostico() {
  const [texto, setTexto] = useState("");
  const [loading, setLoading] = useState(false);
  const [resultado, setResultado] = useState<DiagnosticoResultado | null>(null);
  const [erro, setErro] = useState<string | null>(null);

  const hora = new Date().toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!texto.trim()) return;

    setLoading(true);
    setErro(null);
    try {
      const data = await analisarIdeia(texto);
      setResultado(data);
    } catch {
      setErro("Nao foi possivel analisar agora. Tente novamente em instantes.");
      setResultado(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="diagnostico" className="section-shell bg-[var(--bg)]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.12 }}
        className="mx-auto max-w-[700px] text-center"
      >
        <p className="section-label">Diagnóstico inicial</p>
        <h2 className="headline mt-4 text-4xl md:text-6xl">
          Me conta sua ideia.
          <br />
          Eu digo <em>por onde começar.</em>
        </h2>
        <p className="body-text mx-auto mt-6 max-w-[640px] text-center">
          Descreve o que você quer construir — mesmo que ainda esteja bagunçado.
          Retorno um diagnóstico com o problema real, estrutura sugerida e próximos passos concretos.
        </p>

        <form onSubmit={onSubmit} className="mt-10 space-y-4 text-left">
          <textarea
            value={texto}
            onChange={(event) => setTexto(event.target.value)}
            placeholder="Ex: Tenho uma clínica e perco muito tempo marcando consulta por WhatsApp. Queria algo mais organizado, mas não sei por onde começar..."
            className="min-h-[140px] w-full border border-[var(--border)] bg-[var(--bg)] p-4 font-mono text-sm leading-7 outline-none transition-colors focus:border-[var(--accent)]"
          />

          <motion.button
            whileHover={{ scale: loading ? 1 : 1.02 }}
            whileTap={{ scale: loading ? 1 : 0.99 }}
            disabled={loading}
            className="w-full py-4 font-mono text-sm font-bold uppercase tracking-[0.12em] text-black disabled:cursor-not-allowed disabled:opacity-70"
            style={{ background: "var(--accent)" }}
            type="submit"
          >
            {loading ? "Analisando seu cenário..." : "Receber diagnóstico inicial →"}
          </motion.button>
        </form>

        {erro ? <p className="mt-4 font-mono text-xs text-[var(--accent2)]">{erro}</p> : null}

        <AnimatePresence>
          {(loading || resultado) && (
            <motion.div
              key="result-container"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 border border-[var(--border)] p-6 text-left"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-[var(--accent)]">
                  Diagnóstico - Natanael Neves
                </p>
                <p className="font-mono text-xs text-[var(--muted)]">{hora}</p>
              </div>

              {loading ? (
                <div className="mt-8 flex gap-2">
                  {[0, 1, 2].map((dot) => (
                    <span
                      key={dot}
                      className="h-2 w-2 rounded-full"
                      style={{
                        background: "var(--accent)",
                        animation: `pulse 1.2s ease infinite`,
                        animationDelay: `${dot * 0.2}s`,
                      }}
                    />
                  ))}
                </div>
              ) : null}

              {resultado ? (
                <motion.div
                  className="mt-6 space-y-5"
                  initial="hidden"
                  animate="show"
                  variants={{
                    hidden: {},
                    show: { transition: { staggerChildren: 0.08 } },
                  }}
                >
                  <ResultItem title="Problema identificado" value={resultado.problema} />
                  <ResultItem title="Estrutura sugerida" value={resultado.estrutura} />
                  <ResultItem title="Stack recomendada" value={resultado.stack} />
                  <ResultItem title="Próximos passos" value={resultado.proximos_passos} />
                  <ResultItem title="Ponto de atenção" value={resultado.aviso} danger />
                </motion.div>
              ) : null}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

type ResultItemProps = {
  title: string;
  value: string;
  danger?: boolean;
};

function ResultItem({ title, value, danger = false }: ResultItemProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 12 },
        show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
      }}
    >
      <p
        className="font-mono text-[0.65rem] uppercase tracking-[0.18em]"
        style={{ color: danger ? "var(--accent2)" : "var(--accent)" }}
      >
        {title}
      </p>
      <p className="mono-muted mt-2 text-sm leading-7">{value}</p>
    </motion.div>
  );
}
