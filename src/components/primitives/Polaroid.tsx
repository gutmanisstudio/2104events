"use client";
import { useState, type CSSProperties } from "react";
import Media from "./Media";

type PolaroidProps = {
  src?: string;
  video?: string;
  label?: string;
  rotate?: number;
  width?: number | string;
  ratio?: string;
  style?: CSSProperties;
};

export default function Polaroid({
  src,
  video,
  label,
  rotate = 0,
  width = 240,
  ratio = "4 / 5",
  style,
}: PolaroidProps) {
  const [hovered, setHovered] = useState(false);
  const supportsHover =
    typeof window !== "undefined" && window.matchMedia?.("(hover: hover)").matches;

  const restingTransform = `rotate(${rotate}deg)`;
  const hoverTransform = `rotate(0deg) scale(1.03)`;

  return (
    <div
      onMouseEnter={() => supportsHover && setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        width,
        background: "var(--bg)",
        padding: "8px 8px 32px 8px",
        boxShadow: "0 14px 32px -10px rgba(0,0,0,0.22)",
        transform: hovered ? hoverTransform : restingTransform,
        transition: "transform .4s cubic-bezier(.5, 0, .2, 1)",
        ...style,
      }}
    >
      <Media src={src} video={video} ratio={ratio} />
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: -10,
          left: "50%",
          transform: "translateX(-50%) rotate(-2deg)",
          width: 70,
          height: 16,
          background: "rgba(220, 200, 150, 0.5)",
          borderLeft: "1px dashed rgba(0,0,0,0.1)",
          borderRight: "1px dashed rgba(0,0,0,0.1)",
        }}
      />
      {label && (
        <div
          className="serif"
          style={{
            position: "absolute",
            bottom: 8,
            left: 0,
            right: 0,
            textAlign: "center",
            fontSize: 12,
            fontStyle: "italic",
            color: "var(--fg-soft)",
          }}
        >
          {label}
        </div>
      )}
    </div>
  );
}
