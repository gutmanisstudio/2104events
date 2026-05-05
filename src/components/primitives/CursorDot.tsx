"use client";
import { useEffect, useRef, useState } from "react";

export default function CursorDot() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia?.("(pointer: fine)").matches;
    setEnabled(!!fine);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const el = ref.current;
    if (!el) return;

    const move = (e: MouseEvent) => {
      el.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
    };
    const over = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const hit = target?.closest("a, button, [data-hover]");
      el.classList.toggle("hover", !!hit);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [enabled]);

  if (!enabled) return null;
  return <div ref={ref} className="cursor-dot" aria-hidden />;
}
