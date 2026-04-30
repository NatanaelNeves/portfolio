"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let ringX = targetX;
    let ringY = targetY;
    let raf = 0;

    const onMove = (event: MouseEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      dot.style.transform = `translate(${targetX}px, ${targetY}px)`;
      dot.style.opacity = "1";
      ring.style.opacity = "1";
    };

    const animate = () => {
      ringX += (targetX - ringX) * 0.1;
      ringY += (targetY - ringY) * 0.1;
      ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
      raf = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        id="cursor"
        className="pointer-events-none fixed left-0 top-0 z-[100] hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full md:block"
        style={{
          background: "var(--accent)",
          mixBlendMode: "difference",
          opacity: 0,
        }}
      />
      <div
        ref={ringRef}
        id="cursor-ring"
        className="pointer-events-none fixed left-0 top-0 z-[99] hidden h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full border md:block"
        style={{
          borderColor: "rgba(200, 255, 0, 0.35)",
          opacity: 0,
        }}
      />
    </>
  );
}
