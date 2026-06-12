"use client";

import { m, useScroll, useSpring } from "framer-motion";

/* Linha de progresso do log — 2px no topo, desenha conforme o scroll. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 36,
    restDelta: 0.001,
  });

  return (
    <m.div
      className="fixed inset-x-0 top-0 z-[70] h-[2px] origin-left"
      style={{ scaleX, background: "var(--accent)" }}
      aria-hidden
    />
  );
}
