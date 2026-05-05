"use client";

import Link from "next/link";
import Media from "@/components/primitives/Media";
import Reveal from "@/components/primitives/Reveal";
import { COPY } from "@/content/copy";
import { MEDIA } from "@/content/media";
import { useLocale } from "@/hooks/useLocale";

export default function AboutBlock() {
  const [lang] = useLocale();
  const copy = COPY[lang];

  return (
    <section id="about" style={{ padding: "160px 32px" }}>
      <div
        className="about-grid"
        style={{
          maxWidth: 1440,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1.1fr",
          gap: 80,
          alignItems: "center",
        }}
      >
        <Reveal>
          <div style={{ position: "relative" }}>
            <Media
              src={MEDIA.babyshower_2}
              caption="JOSE, FOUNDER · STUDIO PORTRAIT"
              ratio="4 / 5"
            />
            <div
              style={{
                position: "absolute",
                bottom: -24,
                right: -24,
                width: "50%",
                boxShadow: "0 24px 48px -16px rgba(0,0,0,0.18)",
              }}
            >
              <Media
                src={MEDIA.babyshower_4}
                caption="STUDIO · LAKKEGATA 4"
                ratio="1 / 1"
              />
            </div>
          </div>
        </Reveal>
        <div>
          <Reveal>
            <div className="mono" style={{ color: "var(--fg-mute)", marginBottom: 20 }}>
              — {copy.about.eyebrow}
            </div>
          </Reveal>
          <Reveal delay={60}>
            <h2
              className="serif"
              style={{
                fontSize: "clamp(36px, 4.6vw, 72px)",
                lineHeight: 1.02,
                margin: 0,
                fontWeight: 300,
                letterSpacing: "-0.035em",
                whiteSpace: "pre-line",
              }}
            >
              {copy.about.title.split("\n").map((l, i) => (
                <span key={i} style={{ display: "block" }}>
                  {i === 1 ? (
                    <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
                      {l}
                    </em>
                  ) : (
                    l
                  )}
                </span>
              ))}
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.65,
                color: "var(--fg-soft)",
                marginTop: 32,
                maxWidth: 520,
              }}
            >
              {copy.about.body_1}
            </p>
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.65,
                color: "var(--fg-soft)",
                marginTop: 16,
                maxWidth: 520,
              }}
            >
              {copy.about.body_2}
            </p>
          </Reveal>

          <Reveal delay={220}>
            <div
              style={{
                marginTop: 56,
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                borderTop: "1px solid var(--line-c)",
                paddingTop: 32,
                gap: 16,
              }}
            >
              {copy.about.stat.map((s) => (
                <div key={s.n}>
                  <div
                    className="serif"
                    style={{
                      fontSize: 36,
                      fontWeight: 300,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {s.n}
                  </div>
                  <div
                    className="mono"
                    style={{ color: "var(--fg-mute)", marginTop: 8 }}
                  >
                    {s.k}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={280}>
            <Link
              href="/about"
              data-hover
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                marginTop: 40,
                padding: "14px 24px",
                borderRadius: 999,
                background: "transparent",
                color: "var(--fg)",
                border: "1px solid var(--fg)",
                textDecoration: "none",
                fontSize: 14,
                fontWeight: 500,
              }}
            >
              {lang === "EN" ? "Read about the studio" : "Les om studioet"} →
            </Link>
          </Reveal>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 60px !important; }
        }
      `}</style>
    </section>
  );
}
