"use client";

import { useEffect, useId, useState } from "react";
import Media from "@/components/primitives/Media";
import Reveal from "@/components/primitives/Reveal";
import { COPY } from "@/content/copy";
import { MEDIA } from "@/content/media";
import { useLocale } from "@/hooks/useLocale";

function CircularText({ text, size = 110, duration = 22 }: { text: string; size?: number; duration?: number }) {
  const id = useId();
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      style={{ animation: `spin ${duration}s linear infinite` }}
    >
      <defs>
        <path
          id={id}
          d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0"
        />
      </defs>
      <text
        fontFamily="var(--font-mono), monospace"
        fontSize="10"
        fontWeight="600"
        letterSpacing="4"
        fill="currentColor"
      >
        <textPath href={`#${id}`}>{text}</textPath>
      </text>
    </svg>
  );
}

export default function Hero() {
  const [lang] = useLocale();
  const copy = COPY[lang];

  const [bookings, setBookings] = useState(32);
  useEffect(() => {
    const i = setInterval(() => setBookings((b) => b + 1), 8000);
    return () => clearInterval(i);
  }, []);

  const titleLines = copy.hero.title_a.split("\n");

  return (
    <section
      className="hero-section"
      style={{
        minHeight: "100vh",
        padding: "96px 24px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: 1480, margin: "0 auto", width: "100%" }}>
        {/* Top utility bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px 0 32px",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <span
              className="mono"
              style={{
                padding: "6px 10px",
                background: "var(--accent)",
                color: "var(--bg)",
                fontWeight: 600,
                letterSpacing: "0.08em",
              }}
            >
              ● {copy.hero.stamp_top}
            </span>
            <span className="mono" style={{ color: "var(--fg-soft)" }}>
              {copy.hero.stamp_loc}
            </span>
          </div>
          <span className="mono" style={{ color: "var(--fg-soft)" }}>
            {copy.hero.stamp_right}
          </span>
        </div>

        {/* Hero stage — title left, collage right */}
        <div
          className="hero-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.05fr 1fr",
            gap: 32,
            alignItems: "stretch",
            position: "relative",
          }}
        >
          {/* LEFT — title block */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              minHeight: 600,
              gap: 32,
            }}
          >
            <Reveal>
              <div
                className="mono"
                style={{
                  color: "var(--fg-mute)",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <span
                  style={{
                    width: 24,
                    height: 1,
                    background: "var(--accent)",
                  }}
                />
                {copy.hero.stamp_small}
              </div>
            </Reveal>

            <Reveal delay={60}>
              <h1
                className="serif hero-title"
                style={{
                  fontSize: "clamp(72px, 9.5vw, 168px)",
                  lineHeight: 0.88,
                  margin: 0,
                  fontWeight: 300,
                  letterSpacing: "-0.045em",
                  whiteSpace: "pre-line",
                }}
              >
                {titleLines.map((l, i) => (
                  <span key={i} style={{ display: "block", position: "relative" }}>
                    {i === 1 ? (
                      <span
                        style={{
                          position: "relative",
                          display: "inline-block",
                          color: "var(--accent)",
                        }}
                      >
                        <em style={{ fontStyle: "italic" }}>{l}</em>
                        <svg
                          viewBox="0 0 400 18"
                          preserveAspectRatio="none"
                          style={{
                            position: "absolute",
                            left: 0,
                            right: 0,
                            bottom: "-0.02em",
                            width: "100%",
                            height: "0.16em",
                            pointerEvents: "none",
                          }}
                        >
                          <path
                            d="M2,12 Q40,2 80,9 T160,9 T240,9 T320,9 T398,9"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                          />
                        </svg>
                      </span>
                    ) : (
                      l
                    )}
                  </span>
                ))}
              </h1>
            </Reveal>

            <Reveal delay={140}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 24,
                  maxWidth: 460,
                }}
              >
                <p
                  style={{
                    fontSize: 17,
                    lineHeight: 1.55,
                    color: "var(--fg-soft)",
                    margin: 0,
                  }}
                >
                  {copy.hero.lede}
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    flexWrap: "wrap",
                  }}
                >
                  <a
                    href="#booking"
                    className="hero-cta"
                    data-hover
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 10,
                      background: "var(--fg)",
                      color: "var(--bg)",
                      padding: "14px 18px 14px 22px",
                      textDecoration: "none",
                      borderRadius: 999,
                      fontWeight: 500,
                    }}
                  >
                    <span>{copy.book}</span>
                    <span
                      className="hero-cta-arrow"
                      aria-hidden
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: 999,
                        background: "var(--accent)",
                        color: "var(--bg)",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "transform .4s cubic-bezier(.5,0,.2,1)",
                      }}
                    >
                      ↗
                    </span>
                  </a>
                  <span className="mono" style={{ color: "var(--fg-soft)" }}>
                    <span
                      style={{
                        display: "inline-block",
                        width: 6,
                        height: 6,
                        background: "#5AB67A",
                        borderRadius: 999,
                        marginRight: 6,
                        animation: "pulse 1.4s infinite",
                      }}
                    />
                    {bookings} {copy.hero.booked_this_week.replace(/^\d+\s/, "")}
                  </span>
                </div>
              </div>
            </Reveal>

            <div
              style={{
                transform: "rotate(-3deg)",
                alignSelf: "flex-start",
                background: "#FFF8E0",
                color: "#1A1814",
                padding: "10px 14px",
                boxShadow: "0 6px 20px -6px rgba(0,0,0,0.18)",
                border: "1px solid rgba(0,0,0,0.06)",
                marginTop: 4,
              }}
            >
              <div
                className="mono"
                style={{ fontSize: 9, color: "#7A6A4A", letterSpacing: "0.12em" }}
              >
                P.S.
              </div>
              <div
                className="serif"
                style={{ fontSize: 16, fontStyle: "italic", marginTop: 2 }}
              >
                {copy.hero.ps} ✦
              </div>
            </div>
          </div>

          {/* RIGHT — asymmetric collage */}
          <Reveal delay={120}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(6, 1fr)",
                gridTemplateRows: "repeat(8, 1fr)",
                gap: 10,
                minHeight: 600,
                position: "relative",
              }}
            >
              <div
                style={{
                  gridColumn: "1 / 5",
                  gridRow: "1 / 6",
                  overflow: "hidden",
                  transform: "rotate(-1deg)",
                }}
              >
                <Media
                  src={MEDIA.babyshower_3}
                  ratio="auto"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <div
                style={{
                  gridColumn: "5 / 7",
                  gridRow: "1 / 5",
                  overflow: "hidden",
                  transform: "rotate(1.5deg)",
                }}
              >
                <Media
                  src={MEDIA.foodmenu}
                  ratio="auto"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <div
                style={{
                  gridColumn: "5 / 7",
                  gridRow: "5 / 9",
                  overflow: "hidden",
                  transform: "rotate(-2deg)",
                }}
              >
                <Media
                  src={MEDIA.babyshower_1}
                  ratio="auto"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <div
                style={{
                  gridColumn: "1 / 5",
                  gridRow: "6 / 9",
                  overflow: "hidden",
                  transform: "rotate(1deg)",
                }}
              >
                <Media
                  src={MEDIA.babyshower_4}
                  ratio="auto"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>

              {/* Spinning sticker */}
              <div
                className="hero-collage-sticker"
                style={{
                  position: "absolute",
                  top: "40%",
                  left: -28,
                  zIndex: 5,
                  width: 110,
                  height: 110,
                  borderRadius: 999,
                  background: "var(--accent)",
                  color: "var(--bg)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transform: "rotate(-8deg)",
                  boxShadow: "0 12px 32px -8px rgba(0,0,0,0.3)",
                }}
              >
                <CircularText text="● 2104 EVENTS · OSLO · 2104 EVENTS · OSLO · " size={110} />
                <span
                  className="serif"
                  style={{
                    position: "absolute",
                    fontSize: 26,
                    fontStyle: "italic",
                    fontWeight: 300,
                  }}
                >
                  ♥
                </span>
              </div>

              <div
                style={{
                  position: "absolute",
                  top: -10,
                  right: 24,
                  zIndex: 5,
                  transform: "rotate(6deg)",
                  background: "var(--bg)",
                  color: "var(--fg)",
                  padding: "6px 12px",
                  border: "1.5px solid var(--fg)",
                }}
              >
                <span className="mono" style={{ fontWeight: 600 }}>
                  FROGNER · 09.24
                </span>
              </div>
              <div
                style={{
                  position: "absolute",
                  bottom: -14,
                  left: "38%",
                  zIndex: 5,
                  transform: "rotate(-4deg)",
                  background: "var(--fg)",
                  color: "var(--bg)",
                  padding: "6px 12px",
                }}
              >
                <span className="mono" style={{ fontWeight: 600 }}>
                  {lang === "EN" ? "+ 226 MORE" : "+ 226 TIL"}
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.4; } }
        .hero-cta:hover .hero-cta-arrow { transform: rotate(45deg) scale(1.15); }
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
        }
        @media (max-width: 600px) {
          .hero-section { padding: 88px 16px 16px !important; }
          .hero-title { font-size: clamp(44px, 13vw, 64px) !important; }
          .hero-grid > div:first-child { min-height: 0 !important; gap: 24px !important; }
          .hero-grid > div:last-child { min-height: 460px !important; }
          .hero-collage-sticker { left: 8px !important; width: 84px !important; height: 84px !important; }
        }
      `}</style>
    </section>
  );
}
