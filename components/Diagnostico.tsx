"use client";

import { motion } from "framer-motion";
import { FormEvent, useState } from "react";

const tipos = [
  { id: "site", label: "Site" },
  { id: "sistema", label: "Sistema" },
  { id: "app", label: "App" },
  { id: "outro", label: "Outro" },
];

export default function Diagnostico() {
  const [tipo, setTipo] = useState("");
  const [texto, setTexto] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!texto.trim()) return;

    const header = tipo
      ? `Olá Natanael! Tenho um projeto de *${tipo}*.\n\n`
      : `Olá Natanael!\n\n`;

    const msg = `${header}${texto.trim()}\n\nPodemos conversar?`;
    window.open(
      `https://wa.me/5585999597883?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  };

  return (
    <section id="diagnostico" className="section bg-[var(--bg)]">
      <div className="container">
        <div style={{ maxWidth: "660px", marginLeft: "auto", marginRight: "auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.15 }}
            style={{ textAlign: "center" }}
          >
            <p className="label-accent">Diagnóstico inicial</p>
            <h2 className="heading mt-4 text-[clamp(2rem,4vw,3.25rem)]">
              Me conta sua ideia.
              <br />
              Eu digo <em>por onde começar.</em>
            </h2>
            <p
              className="body mt-5"
              style={{ maxWidth: "520px", marginLeft: "auto", marginRight: "auto" }}
            >
              Descreve o que você quer construir — mesmo que ainda esteja
              bagunçado. Respondo direto no WhatsApp com os próximos passos.
            </p>
          </motion.div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            viewport={{ once: true, amount: 0.1 }}
            className="mt-10 space-y-4"
          >
            {/* Tipo de projeto */}
            <div>
              <p className="label mb-3">Tipo de projeto</p>
              <div className="flex flex-wrap gap-2">
                {tipos.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setTipo(tipo === t.id ? "" : t.id)}
                    className="border px-4 py-2 font-mono text-[0.6875rem] uppercase tracking-[0.1em] transition-colors duration-150"
                    style={{
                      borderColor:
                        tipo === t.id ? "var(--accent)" : "var(--border-strong)",
                      color: tipo === t.id ? "var(--accent)" : "var(--muted)",
                      background: tipo === t.id ? "var(--accent-bg)" : "transparent",
                      cursor: "none",
                    }}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Descrição */}
            <textarea
              value={texto}
              onChange={(e) => setTexto(e.target.value)}
              placeholder="Ex: Tenho uma clínica e perco muito tempo marcando consulta pelo WhatsApp. Queria algo mais organizado, mas não sei por onde começar..."
              rows={5}
              className="w-full border border-[var(--border)] bg-[var(--bg)] p-4 font-mono text-[0.875rem] leading-7 text-[var(--text)] outline-none transition-colors duration-150 focus:border-[var(--accent)] resize-none"
            />

            <button
              type="submit"
              disabled={!texto.trim()}
              className="btn-primary w-full justify-center py-4 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Enviar pelo WhatsApp →
            </button>
          </motion.form>

          {/* Nota de rodapé */}
          <p className="mono mt-4 text-center text-xs">
            Abre o WhatsApp com a mensagem pronta. Sem formulários, sem espera.
          </p>
        </div>
      </div>
    </section>
  );
}
