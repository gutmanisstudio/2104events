"use client";

import Link from "next/link";
import { COPY } from "@/content/copy";
import { useLocale } from "@/hooks/useLocale";

export default function Footer() {
  const [lang] = useLocale();
  const copy = COPY[lang];

  const cols = [
    {
      h: copy.footer.col_studio,
      items: [copy.footer.addr, copy.footer.hours],
    },
    {
      h: copy.footer.col_contact,
      items: [copy.footer.tel, copy.footer.email, copy.footer.ig],
    },
  ];

  return (
    <footer
      className="footer-root"
      style={{
        background: "var(--bg-2)",
        color: "var(--fg)",
        padding: "120px 32px 32px",
        borderTop: "1px solid var(--line-c)",
        marginTop: 80,
      }}
    >
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        <div
          className="footer-cols grid gap-10 mb-20"
          style={{ gridTemplateColumns: "1.4fr 1fr 1fr 1fr" }}
        >
          <div>
            <h2
              className="serif"
              style={{
                fontSize: "clamp(40px, 5vw, 80px)",
                lineHeight: 0.95,
                margin: 0,
                fontWeight: 300,
                letterSpacing: "-0.03em",
              }}
            >
              {copy.footer.mark_a}
              <br />
              <em
                style={{ fontStyle: "italic", color: "var(--accent)" }}
              >
                {copy.footer.mark_b}
              </em>
            </h2>
            <Link
              href="/contact"
              data-hover
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                marginTop: 32,
                padding: "14px 24px",
                borderRadius: 999,
                background: "var(--fg)",
                color: "var(--bg)",
                textDecoration: "none",
                fontSize: 14,
                fontWeight: 500,
              }}
            >
              {copy.cta} →
            </Link>
          </div>

          {cols.map((c, i) => (
            <div key={i}>
              <div className="mono mb-4" style={{ color: "var(--fg-mute)" }}>
                {c.h}
              </div>
              {c.items.map((t, j) => (
                <div
                  key={j}
                  style={{
                    fontSize: 14,
                    color: "var(--fg-soft)",
                    marginBottom: 6,
                  }}
                >
                  {t}
                </div>
              ))}
            </div>
          ))}

          <div>
            <div className="mono mb-4" style={{ color: "var(--fg-mute)" }}>
              {copy.footer.col_follow}
            </div>
            {(["Instagram", "Pinterest", "LinkedIn"] as const).map((s) => (
              <a
                key={s}
                href="#"
                data-hover
                style={{
                  display: "block",
                  fontSize: 14,
                  color: "var(--fg)",
                  marginBottom: 6,
                  textDecoration: "none",
                }}
              >
                {s} ↗
              </a>
            ))}
          </div>
        </div>

        {/* Massive 2104 wordmark */}
        <div
          style={{
            borderTop: "1px solid var(--line-c)",
            paddingTop: 40,
            overflow: "hidden",
          }}
        >
          <div
            className="serif"
            style={{
              fontSize: "clamp(120px, 22vw, 360px)",
              lineHeight: 0.85,
              fontWeight: 300,
              letterSpacing: "-0.05em",
              color: "var(--fg)",
              whiteSpace: "nowrap",
            }}
          >
            2104
            <span style={{ fontStyle: "italic", color: "var(--accent)" }}>
              events
            </span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingTop: 24,
            color: "var(--fg-mute)",
            fontSize: 12,
            flexWrap: "wrap",
            gap: 8,
          }}
        >
          <span>{copy.footer.legal}</span>
          <span>{copy.footer.built}</span>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-root { padding: 80px 20px 28px !important; }
          .footer-cols { grid-template-columns: 1fr 1fr !important; gap: 32px !important; margin-bottom: 56px !important; }
          .footer-cols > div:first-child { grid-column: 1 / -1; }
        }
        @media (max-width: 520px) {
          .footer-cols { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
