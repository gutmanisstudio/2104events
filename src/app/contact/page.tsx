"use client";

import PageHeader from "@/components/pages/PageHeader";
import StickyNote from "@/components/primitives/StickyNote";
import Reveal from "@/components/primitives/Reveal";
import BookingSection from "@/components/booking/BookingSection";
import { COPY } from "@/content/copy";
import { useLocale } from "@/hooks/useLocale";

const CHANNELS_EN = [
  { k: "Phone", v: "+47 948 25 661", note: "We answer Mon–Fri, 09:00–17:00 CET.", color: "#FFF8E0", rot: -2 },
  { k: "Email", v: "hello@2104events.no", note: "Reply within one working day.", color: "#D9E8D5", rot: 1.5 },
  { k: "Instagram", v: "@2104eventsbyjose", note: "DM us — we read every one.", color: "#E8E1F4", rot: -1 },
];
const CHANNELS_NO = [
  { k: "Telefon", v: "+47 948 25 661", note: "Vi svarer Man–Fre, 09:00–17:00.", color: "#FFF8E0", rot: -2 },
  { k: "E-post", v: "hello@2104events.no", note: "Svar innen én arbeidsdag.", color: "#D9E8D5", rot: 1.5 },
  { k: "Instagram", v: "@2104eventsbyjose", note: "Send DM — vi leser alt.", color: "#E8E1F4", rot: -1 },
];

export default function ContactPage() {
  const [lang] = useLocale();
  const copy = COPY[lang];
  const channels = lang === "EN" ? CHANNELS_EN : CHANNELS_NO;

  return (
    <>
      <PageHeader
        eyebrow={lang === "EN" ? "Contact · always reachable" : "Kontakt · alltid tilgjengelig"}
        title={lang === "EN" ? "Tell us\nabout your day." : "Fortell oss\nom dagen din."}
        lede={copy.booking.lede}
      />

      {/* Channel cards */}
      <section style={{ padding: "20px 24px 80px" }}>
        <div
          className="channels"
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 32,
          }}
        >
          {channels.map((c, i) => (
            <Reveal key={c.k} delay={i * 80}>
              <StickyNote rotate={c.rot} color={c.color} style={{ minHeight: 200, padding: "28px 24px" }}>
                <div className="mono" style={{ fontSize: 9, opacity: 0.55, letterSpacing: "0.14em" }}>
                  {c.k.toUpperCase()}
                </div>
                <div
                  className="serif"
                  style={{
                    fontSize: 24,
                    fontWeight: 400,
                    marginTop: 12,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {c.v}
                </div>
                <p style={{ marginTop: 16, fontSize: 14, lineHeight: 1.5, opacity: 0.7 }}>
                  {c.note}
                </p>
              </StickyNote>
            </Reveal>
          ))}
        </div>
        <style>{`
          @media (max-width: 800px) { .channels { grid-template-columns: 1fr !important; gap: 24px !important; } }
        `}</style>
      </section>

      <BookingSection />

      {/* Studio postcard */}
      <section style={{ padding: "60px 24px 120px" }}>
        <div
          style={{
            maxWidth: 800,
            margin: "0 auto",
            border: "1px dashed var(--fg)",
            padding: "40px",
            background: "var(--bg-2)",
          }}
        >
          <div className="mono" style={{ color: "var(--accent)", marginBottom: 16 }}>
            ✦ {lang === "EN" ? "STUDIO" : "STUDIO"}
          </div>
          <div
            className="serif"
            style={{
              fontSize: 28,
              fontStyle: "italic",
              fontWeight: 300,
              letterSpacing: "-0.02em",
            }}
          >
            {copy.footer.addr}
          </div>
          <div style={{ marginTop: 12, color: "var(--fg-soft)" }}>
            {copy.footer.hours}
          </div>
          <div style={{ marginTop: 24, color: "var(--fg-soft)" }}>
            {lang === "EN"
              ? "Drop by with a coffee. We're always rearranging the studio for the next event — bring something to sit on."
              : "Stikk innom med en kaffe. Vi flytter alltid på ting — ta med noe å sitte på."}
          </div>
        </div>
      </section>
    </>
  );
}
