"use client";

import Reveal from "@/components/primitives/Reveal";
import { useLocale } from "@/hooks/useLocale";

const EN =
  "We hired 2104events for a multi-day cultural wedding that crossed two languages and three timezones. Jose held the room. The week ran like clockwork — and felt nothing like it.";
const NO =
  "Vi hyret 2104events for et flerdagers kulturelt bryllup som krysset to språk og tre tidssoner. Jose holdt rommet.";

export default function Quote() {
  const [lang] = useLocale();
  return (
    <section style={{ padding: "160px 32px", background: "var(--bg-2)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
        <Reveal>
          <div style={{ fontSize: 32, color: "var(--accent)" }}>“</div>
        </Reveal>
        <Reveal delay={80}>
          <p
            className="serif"
            style={{
              fontSize: "clamp(28px, 3.2vw, 48px)",
              lineHeight: 1.25,
              fontWeight: 300,
              letterSpacing: "-0.02em",
              margin: 0,
              fontStyle: "italic",
            }}
          >
            {lang === "EN" ? EN : NO}
          </p>
        </Reveal>
        <Reveal delay={180}>
          <div
            style={{
              marginTop: 40,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 16,
            }}
          >
            <div
              className="img-ph"
              data-caption="A.S."
              style={{
                width: 48,
                height: 48,
                borderRadius: 999,
                overflow: "hidden",
              }}
            />
            <div style={{ textAlign: "left" }}>
              <div style={{ fontSize: 14, fontWeight: 500 }}>Aanya Sundaram</div>
              <div className="mono" style={{ color: "var(--fg-mute)" }}>
                {lang === "EN" ? "Wedding · 2024" : "Bryllup · 2024"}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
