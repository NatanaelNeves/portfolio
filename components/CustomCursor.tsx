"use client";

import { useEffect, useRef } from "react";

/* Cursor em duas camadas: ponto que segue instantâneo + anel que persegue
   com lerp via rAF. Estados de hover/press via data-attributes (CSS).
   Zero re-renders do React, zero framer — só DOM direto. */
export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let tx = -100;
    let ty = -100;
    let rx = -100;
    let ry = -100;
    let visible = false;
    let raf = 0;
    let running = false;

    /* O loop só roda enquanto o anel persegue o ponto; ao convergir,
       para — cursor parado custa zero por frame */
    const loop = () => {
      rx += (tx - rx) * 0.16;
      ry += (ty - ry) * 0.16;
      if (Math.abs(tx - rx) < 0.1 && Math.abs(ty - ry) < 0.1) {
        rx = tx;
        ry = ty;
        running = false;
      }
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      if (running) raf = requestAnimationFrame(loop);
    };

    const wake = () => {
      if (!running) {
        running = true;
        raf = requestAnimationFrame(loop);
      }
    };

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      if (!visible) {
        visible = true;
        rx = tx;
        ry = ty;
        dot.style.opacity = "1";
        ring.style.opacity = "0.55";
      }
      dot.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
      wake();

      const target = e.target as Element | null;
      const interactive = !!target?.closest(
        "a, button, [role='button'], input, textarea, select, label"
      );
      dot.dataset.hover = String(interactive);
      ring.dataset.hover = String(interactive);
      if (interactive) ring.style.opacity = "1";
      else if (visible) ring.style.opacity = "0.55";
    };

    const onLeave = () => {
      visible = false;
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    };
    const onDown = () => {
      ring.dataset.down = "true";
    };
    const onUp = () => {
      ring.dataset.down = "false";
    };

    document.addEventListener("mousemove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("mouseup", onUp);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup", onUp);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden />
      <div ref={ringRef} className="cursor-ring" aria-hidden />
    </>
  );
}
