import type { CSSProperties } from "react";

type StickyNoteProps = {
  children: React.ReactNode;
  rotate?: number;
  color?: string;
  className?: string;
  style?: CSSProperties;
};

export default function StickyNote({
  children,
  rotate = -3,
  color = "#FFF8E0",
  className,
  style,
}: StickyNoteProps) {
  return (
    <div
      className={className}
      style={{
        transform: `rotate(${rotate}deg)`,
        background: color,
        color: "#1A1814",
        padding: "12px 16px",
        boxShadow: "0 6px 20px -6px rgba(0,0,0,0.18)",
        border: "1px solid rgba(0,0,0,0.06)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
