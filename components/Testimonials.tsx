"use client";

import { motion } from "framer-motion";

// TODO: Substitua os placeholders abaixo por depoimentos reais.
// Solicite ao gestor do Pequeno Nazareno e à Vitória Dandara.
// Depois descomente o <Testimonials /> em app/page.tsx.

type TestimonialData = {
  quote: string;
  name: string;
  role: string;
  org: string;
};

const testimonials: TestimonialData[] = [
  {
    quote:
      "A plataforma de chamados mudou completamente nossa rotina de TI. Antes tudo era resolvido por e-mail e papel — hoje temos rastreamento, histórico e SLA definido.",
    name: "[Gestor — substituir pelo nome real]",
    role: "Gestão de TI",
    org: "O Pequeno Nazareno",
  },
  {
    quote:
      "Entregou exatamente o que eu precisava: posso publicar meus artigos sozinha, sem depender de suporte. O processo foi claro e sem surpresas.",
    name: "Vitória Dandara",
    role: "Psicóloga",
    org: "Vitória Dandara Psicologia",
  },
];

export default function Testimonials() {
  return (
    <section className="section bg-[var(--bg)]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <p className="label-accent mb-10">O que dizem</p>
          <div className="grid gap-px bg-[var(--border)] md:grid-cols-2">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="flex flex-col justify-between gap-8 bg-[var(--bg)] p-8"
              >
                <p
                  className="font-sans text-[1rem] leading-[1.7]"
                  style={{ color: "var(--text-2)" }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="font-sans text-[0.875rem] font-700" style={{ color: "var(--text)", fontWeight: 700 }}>
                    {t.name}
                  </p>
                  <p className="label mt-0.5">
                    {t.role} · {t.org}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
