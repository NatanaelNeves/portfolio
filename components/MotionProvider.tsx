"use client";

import { LazyMotion, MotionConfig, domAnimation } from "framer-motion";

/* LazyMotion + `m` reduz o bundle do framer-motion (~34kb → ~21kb gzip).
   `strict` quebra em runtime se algum componente usar `motion.` direto. */
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
