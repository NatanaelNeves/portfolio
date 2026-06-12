"use client";

import { m } from "framer-motion";
import { FormEvent, useState } from "react";
import { EASE, Magnetic, Reveal } from "@/components/motion";

const tipos = [
  { id: "site", label: "Site" },
  { id: "sistema", label: "Sistema" },
  { id: "app", label: "App" },
  { id: "outro", label: "Outro" },
];

const problemasResolvidos = [
  "Gestão financeira pessoal",
  "Controle interno de TI",
  "Presença digital com CMS",
  "Diário compartilhado para casais",
  "Plataforma B2B de compras",
  "Acompanhamento de treinos",
];

export default function CTAFinal() {
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
    <section id="cta" className="section bg-[var(--bg)]">
      <div className="container">
        {/* Proof of work */}
        <div className="mb-16 border-b border-[var(--border)] pb-16">
          <Reveal y={12}>
            <p className="label mb-6">Problemas que já resolvi</p>
          </Reveal>
          <m.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.06 } },
            }}
            className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 md:grid-cols-3"
          >
            {problemasResolvidos.map((item) => (
              <m.div
                key={item}
                variants={{
                  hidden: { opacity: 0, x: -12 },
                  show: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
                className="flex items-center gap-2.5"
              >
                <span
                  className="font-mono text-[0.75rem] font-bold"
                  style={{ color: "var(--accent)" }}
                >
                  ✓
                </span>
                <span className="body text-[0.875rem]">{item}</span>
              </m.div>
            ))}
          </m.div>
        </div>

        {/* Two-column CTA */}
        <div className="grid gap-14 md:grid-cols-[1fr_1fr] md:gap-20">
          {/* Left — copy */}
          <m.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col justify-center"
          >
            <div className="flex items-baseline justify-between">
              <p className="label-accent">Próximo passo</p>
              <span className="label">05 / 05</span>
            </div>
            <h2 className="heading mt-5" style={{ fontSize: "clamp(2rem,4vw,3.5rem)" }}>
              Tem um problema que <em>vale resolver?</em>
            </h2>
            <p className="body mt-5 max-w-[400px]">
              Me descreve o contexto — mesmo que ainda esteja bagunçado.
              Respondo com clareza sobre o que é possível, o que faz sentido
              construir e por onde começar.
            </p>

            <div className="mt-8 flex flex-col gap-2.5 border-t border-[var(--border)] pt-8">
              <a
                href="https://wa.me/5585999597883"
                target="_blank"
                rel="noreferrer"
                className="label transition-colors hover:text-[var(--text)]"
              >
                WhatsApp → (85) 99959-7883
              </a>
              <a
                href="mailto:natanaelnevesalves@gmail.com"
                className="label transition-colors hover:text-[var(--text)]"
              >
                Email → natanaelnevesalves@gmail.com
              </a>
              <a
                href="https://linkedin.com/in/natanaelnevesalves"
                target="_blank"
                rel="noreferrer"
                className="label transition-colors hover:text-[var(--text)]"
              >
                LinkedIn → natanaelnevesalves
              </a>
              <a
                href="https://github.com/natanaelneves"
                target="_blank"
                rel="noreferrer"
                className="label transition-colors hover:text-[var(--text)]"
              >
                GitHub → github.com/natanaelneves
              </a>
            </div>
          </m.div>

          {/* Right — form em painel */}
          <m.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <form
              onSubmit={onSubmit}
              className="flex flex-col gap-5 border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8"
            >
              <div className="flex items-center justify-between border-b border-[var(--border)] pb-4">
                <span className="label-accent">Novo projeto</span>
                <span className="flex items-center gap-1.5">
                  <span
                    className="inline-block h-[5px] w-[5px] rounded-full"
                    style={{
                      background: "var(--status)",
                      animation: "pulse-status 2.5s ease-in-out infinite",
                    }}
                    aria-hidden
                  />
                  <span
                    className="font-mono text-[0.6rem] uppercase tracking-[0.14em]"
                    style={{ color: "var(--status)" }}
                  >
                    Aceitando briefings
                  </span>
                </span>
              </div>

              <div>
                <p className="label mb-3">Tipo de projeto</p>
                <div className="flex flex-wrap gap-2">
                  {tipos.map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setTipo(tipo === t.id ? "" : t.id)}
                      aria-pressed={tipo === t.id}
                      className="border px-4 py-2 font-mono text-[0.6875rem] uppercase tracking-[0.1em] transition-colors duration-150"
                      style={{
                        borderColor: tipo === t.id ? "var(--accent)" : "var(--border-strong)",
                        color: tipo === t.id ? "var(--accent)" : "var(--muted)",
                        background: tipo === t.id ? "var(--accent-bg)" : "transparent",
                      }}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="contexto" className="label mb-3 block">
                  Descreve o contexto
                </label>
                <textarea
                  id="contexto"
                  value={texto}
                  onChange={(e) => setTexto(e.target.value)}
                  placeholder="Ex: Tenho uma clínica e perco muito tempo marcando consulta pelo WhatsApp. Queria algo mais organizado, mas não sei por onde começar..."
                  rows={6}
                  className="field"
                />
              </div>

              <Magnetic strength={0.12} className="w-full">
                <button
                  type="submit"
                  disabled={!texto.trim()}
                  className="btn-primary w-full justify-center py-4 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Enviar pelo WhatsApp →
                </button>
              </Magnetic>

              <p className="body text-center text-[0.75rem]" style={{ color: "var(--muted)" }}>
                Abre o WhatsApp com a mensagem pronta. Sem formulários, sem espera.
              </p>
            </form>
          </m.div>
        </div>
      </div>
    </section>
  );
}
