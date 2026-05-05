"use client";
import { useEffect, useRef, useState, type CSSProperties, type JSX } from "react";

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  style?: CSSProperties;
};

export default function Reveal({
  children,
  delay = 0,
  as: As = "div",
  className,
  style,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setSeen(true);
            io.disconnect();
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  const Tag = As as keyof JSX.IntrinsicElements;

  return (
    <Tag
      ref={ref as React.RefObject<HTMLElement> as never}
      className={className}
      style={{
        ...style,
        opacity: seen ? 1 : 0,
        transform: seen ? "translateY(0)" : "translateY(24px)",
        transition: `opacity .9s cubic-bezier(.2,.7,.3,1) ${delay}ms, transform .9s cubic-bezier(.2,.7,.3,1) ${delay}ms`,
      }}
    >
      {children}
    </Tag>
  );
}
