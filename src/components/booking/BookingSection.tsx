"use client";

import Reveal from "@/components/primitives/Reveal";
import { COPY } from "@/content/copy";
import { useLocale } from "@/hooks/useLocale";

export default function BookingSection() {
  const [lang] = useLocale();
  const copy = COPY[lang];

  return (
    <section
      id="booking"
      style={{
        padding: "160px 32px",
        background: "var(--bg)",
        borderTop: "1px solid var(--line-c)",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <Reveal>
          <div className="mono" style={{ color: "var(--fg-mute)", marginBottom: 20 }}>
            — {copy.booking.eyebrow}
          </div>
        </Reveal>
        <Reveal delay={60}>
          <h2
            className="serif"
            style={{
              fontSize: "clamp(40px, 5.4vw, 88px)",
              lineHeight: 1,
              margin: 0,
              fontWeight: 300,
              letterSpacing: "-0.04em",
            }}
          >
            {copy.booking.title}
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.6,
              color: "var(--fg-soft)",
              marginTop: 24,
              maxWidth: 540,
            }}
          >
            {copy.booking.lede}
          </p>
        </Reveal>
        <Reveal delay={200}>
          <div
            style={{
              marginTop: 48,
              padding: "40px",
              background: "var(--bg-2)",
              border: "1px dashed var(--line-c)",
              borderRadius: 16,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 24,
              flexWrap: "wrap",
            }}
          >
            <span className="mono" style={{ color: "var(--fg-mute)" }}>
              [ booking form — calendar / wizard / inline variants land in prompt 06 ]
            </span>
            <a
              href={`mailto:${copy.footer.email}`}
              data-hover
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "12px 18px",
                background: "var(--fg)",
                color: "var(--bg)",
                textDecoration: "none",
                borderRadius: 999,
                fontWeight: 500,
              }}
            >
              {copy.cta} →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
