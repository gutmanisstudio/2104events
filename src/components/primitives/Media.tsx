import Image from "next/image";
import type { CSSProperties } from "react";

type MediaProps = {
  src?: string;
  video?: string;
  poster?: string;
  caption?: string;
  ratio?: string;
  alt?: string;
  style?: CSSProperties;
};

const captionStyle: CSSProperties = {
  position: "absolute",
  bottom: 12,
  left: 12,
  padding: "4px 8px",
  background: "rgba(24,22,15,0.55)",
  color: "#FAF7F2",
  backdropFilter: "blur(6px)",
  fontSize: 10,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
};

function Caption({ caption }: { caption?: string }) {
  if (!caption) return null;
  return (
    <div className="mono" style={captionStyle}>
      {caption}
    </div>
  );
}

export default function Media({
  src,
  video,
  poster,
  caption,
  ratio = "4 / 5",
  alt,
  style,
}: MediaProps) {
  const wrapperStyle: CSSProperties = {
    position: "relative",
    aspectRatio: ratio,
    width: "100%",
    overflow: "hidden",
    ...style,
  };

  if (video) {
    return (
      <div style={{ ...wrapperStyle, background: "#000" }}>
        <video
          src={video}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <Caption caption={caption} />
      </div>
    );
  }

  if (src) {
    return (
      <div style={wrapperStyle}>
        <Image
          src={src}
          alt={alt ?? caption ?? ""}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          style={{ objectFit: "cover" }}
        />
        <Caption caption={caption} />
      </div>
    );
  }

  return (
    <div className="img-ph" data-caption={caption} style={wrapperStyle} />
  );
}
