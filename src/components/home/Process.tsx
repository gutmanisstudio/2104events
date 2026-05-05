"use client";

import Reveal from "@/components/primitives/Reveal";
import { COPY } from "@/content/copy";
import { useLocale } from "@/hooks/useLocale";

export default function Process() {
  const [lang] = useLocale();
  const copy = COPY[lang];
  const [head, tail] = copy.process.title.split(",");

  return (
    <section style={{ padding: "160px 32px", background: "var(--bg-2)" }}>
      <div
        className="process-grid"
        style={{
          maxWidth: 1440,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1.4fr",
          gap: 80,
        }}
      >
        <div style={{ position: "sticky", top: 120, alignSelf: "flex-start" }}>
          <Reveal>
            <div className="mono" style={{ color: "var(--fg-mute)", marginBottom: 20 }}>
              — {copy.process.eyebrow}
            </div>
            <h2
              className="serif"
              style={{
                fontSize: "clamp(36px, 4.6vw, 72px)",
                lineHeight: 1.02,
                margin: 0,
                fontWeight: 300,
                letterSpacing: "-0.035em",
              }}
            >
              {head},<br />
              <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
                {tail.trim()}
              </em>
            </h2>
          </Reveal>
        </div>
        <div>
          {copy.process.steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 80}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "80px 1fr",
                  gap: 32,
                  padding: "40px 0",
                  borderBottom: "1px solid var(--line-c)",
                  alignItems: "flex-start",
                }}
              >
                <div
                  className="serif"
                  style={{
                    fontSize: 56,
                    fontWeight: 300,
                    color: "var(--accent)",
                    fontStyle: "italic",
                    letterSpacing: "-0.02em",
                    lineHeight: 1,
                  }}
                >
                  {s.n}
                </div>
                <div>
                  <h3
                    className="serif"
                    style={{ fontSize: 28, margin: "0 0 12px", fontWeight: 400 }}
                  >
                    {s.k}
                  </h3>
                  <p
                    style={{
                      fontSize: 15,
                      lineHeight: 1.6,
                      color: "var(--fg-soft)",
                      margin: 0,
                      maxWidth: 540,
                    }}
                  >
                    {s.d}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .process-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </section>
  );
}
