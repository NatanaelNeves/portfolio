"use client";

import { motion } from "framer-motion";

export default function CTAFinal() {
  return (
    <section id="cta" className="section-shell bg-[var(--surface)] py-32 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.12 }}
      >
        <h2 className="headline text-[clamp(2.5rem,6vw,5rem)]">
          Se você tem uma ideia travada,
          <br />
          vamos destravar e <em>colocar no ar.</em>
        </h2>
        <p className="mono-muted mx-auto mt-6 max-w-[560px] text-sm">
          Me chama. A primeira conversa é sem compromisso.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            href="https://wa.me/5585999597883"
            className="btn-primary rounded-[2px] px-8 py-3"
          >
            Falar no WhatsApp
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            href="mailto:natanaelnevesalves@gmail.com"
            className="btn-ghost rounded-[2px] px-8 py-3"
          >
            Enviar e-mail
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
