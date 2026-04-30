"use client";

import { motion } from "framer-motion";

export default function CTAFinal() {
  return (
    <section id="cta" className="section-shell bg-[var(--surface)] text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.12 }}
        className="mx-auto max-w-4xl"
      >
        <h2 className="headline text-[clamp(2.5rem,6vw,5rem)]">
          Vamos tirar sua ideia <em>do papel?</em>
        </h2>
        <p className="body-text mx-auto mt-6 max-w-[520px] text-center">
          Me chama. A primeira conversa é sem compromisso.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            href="https://wa.me/5585999597883"
            className="btn-primary rounded-[2px] px-8 py-3"
          >
            Falar no WhatsApp →
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            href="mailto:natanaelnevesalves@gmail.com"
            className="btn-ghost rounded-[2px] px-8 py-3"
          >
            Enviar email
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
