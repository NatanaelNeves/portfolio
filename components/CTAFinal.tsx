"use client";

import { motion } from "framer-motion";

export default function CTAFinal() {
  return (
    <section id="cta" className="section bg-[var(--surface)]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.2 }}
          style={{ maxWidth: "680px", marginLeft: "auto", marginRight: "auto", textAlign: "center" }}
        >
          <p className="label-accent">Próximo passo</p>
          <h2 className="heading mt-5 text-[clamp(2.25rem,5vw,4.5rem)]">
            Vamos tirar sua ideia <em>do papel?</em>
          </h2>
          <p className="body mt-5" style={{ maxWidth: "480px", marginLeft: "auto", marginRight: "auto" }}>
            Me chama. A primeira conversa é sem compromisso.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="https://wa.me/5585999597883"
              className="btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Falar no WhatsApp →
            </a>
            <a
              href="mailto:natanaelnevesalves@gmail.com"
              className="btn-ghost"
            >
              Enviar email
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
