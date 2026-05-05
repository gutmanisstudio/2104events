"use client";

import Media from "@/components/primitives/Media";
import Reveal from "@/components/primitives/Reveal";
import { COPY } from "@/content/copy";
import { MEDIA } from "@/content/media";
import { useLocale } from "@/hooks/useLocale";

const FLAVOR_EN = [
  { img: MEDIA.babyshower_3, note: "we cried at this one", moment: "“The dance floor stayed full till 03:42.”", mark: "♥" },
  { img: MEDIA.foodmenu, note: "pls no more PowerPoint", moment: "“CFO did karaoke. We have it on tape.”", mark: "✦" },
  { img: MEDIA.babyshower_4, note: "cake at midnight rule", moment: "“His grandma led the whole room in song.”", mark: "✿" },
  { img: MEDIA.babyshower_1, note: "henna runs late, always", moment: "“We learned three new languages that night.”", mark: "✺" },
  { img: MEDIA.babyshower_2, note: "rain plan? always", moment: "“The candles stayed lit. Don’t ask how.”", mark: "✸" },
  { img: MEDIA.foodmenu, note: "small details, big feels", moment: "“The napkin folds had names on them.”", mark: "✧" },
];

const FLAVOR_NO = [
  { img: MEDIA.babyshower_3, note: "vi gråt på denne", moment: "«Dansegulvet var fullt til 03:42.»", mark: "♥" },
  { img: MEDIA.foodmenu, note: "ikke mer PowerPoint takk", moment: "«CFO sang karaoke. Vi har det på film.»", mark: "✦" },
  { img: MEDIA.babyshower_4, note: "kake-ved-midnatt-regelen", moment: "«Bestemoren ledet hele rommet i sang.»", mark: "✿" },
  { img: MEDIA.babyshower_1, note: "henna går alltid sent", moment: "«Vi lærte tre nye språk den kvelden.»", mark: "✺" },
  { img: MEDIA.babyshower_2, note: "regnplan? alltid", moment: "«Lysene holdt seg tente. Ikke spør oss hvordan.»", mark: "✸" },
  { img: MEDIA.foodmenu, note: "små detaljer, store følelser", moment: "«Servietter med navn på.»", mark: "✧" },
];

export default function Services() {
  const [lang] = useLocale();
  const copy = COPY[lang];
  const flavor = lang === "EN" ? FLAVOR_EN : FLAVOR_NO;

  return (
    <section
      id="services"
      style={{ padding: "160px 24px 100px", position: "relative", overflow: "hidden" }}
    >
      <div style={{ maxWidth: 1320, margin: "0 auto" }}>
        <Reveal>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: 60,
              gap: 40,
              flexWrap: "wrap",
            }}
          >
            <div style={{ position: "relative" }}>
              <div
                className="mono"
                style={{
                  color: "var(--fg-mute)",
                  marginBottom: 18,
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <span style={{ width: 22, height: 1, background: "var(--accent)" }} />
                {copy.services.eyebrow}
              </div>
              <h2
                className="serif"
                style={{
                  fontSize: "clamp(48px, 6.4vw, 104px)",
                  lineHeight: 0.96,
                  margin: 0,
                  fontWeight: 300,
                  letterSpacing: "-0.04em",
                  maxWidth: 880,
                }}
              >
                {lang === "EN" ? "Six ways" : "Seks måter"}{" "}
                <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
                  {lang === "EN" ? "we throw a" : "vi lager et"}
                </em>
                <br />
                {lang === "EN" ? "great party." : "godt selskap."}
              </h2>
            </div>
            <div
              style={{
                transform: "rotate(-8deg)",
                border: "2px solid var(--accent)",
                color: "var(--accent)",
                padding: "14px 18px",
                textAlign: "center",
                fontFamily: "var(--font-mono), monospace",
                fontSize: 10,
                lineHeight: 1.4,
                letterSpacing: "0.12em",
                boxShadow: "inset 0 0 0 1px var(--bg)",
                maxWidth: 200,
              }}
            >
              <div style={{ fontWeight: 700 }}>NO. TWO OF US</div>
              <div>IN THE ROOM AT</div>
              <div>EVERY EVENT.</div>
              <div style={{ marginTop: 6, fontSize: 8, opacity: 0.7 }}>— ALWAYS</div>
            </div>
          </div>
        </Reveal>

        <div style={{ borderTop: "1.5px solid var(--fg)" }}>
          {copy.services.items.map((it, i) => {
            const f = flavor[i] || flavor[0];
            const reverse = i % 2 === 1;
            return (
              <Reveal key={it.n} delay={i * 40}>
                <div
                  className="svc-row"
                  style={{
                    display: "grid",
                    gridTemplateColumns: reverse
                      ? "120px 1fr 1.4fr 280px"
                      : "120px 1.4fr 1fr 280px",
                    gap: 32,
                    alignItems: "center",
                    padding: "36px 0",
                    borderBottom: "1px solid var(--line-c)",
                    cursor: "pointer",
                  }}
                  data-hover
                >
                  {/* Number + mark */}
                  <div style={{ position: "relative" }}>
                    <div
                      className="serif"
                      style={{
                        fontSize: 56,
                        lineHeight: 1,
                        fontWeight: 300,
                        letterSpacing: "-0.03em",
                      }}
                    >
                      {it.n}
                    </div>
                    <span
                      className="serif"
                      style={{
                        position: "absolute",
                        top: -8,
                        right: 0,
                        fontSize: 22,
                        color: "var(--accent)",
                        transform: `rotate(${i * 7 - 10}deg)`,
                      }}
                    >
                      {f.mark}
                    </span>
                  </div>

                  {!reverse ? (
                    <>
                      <ServiceTitle it={it} f={f} reverse={false} />
                      <ServiceMoment moment={f.moment} />
                    </>
                  ) : (
                    <>
                      <ServiceMoment moment={f.moment} />
                      <ServiceTitle it={it} f={f} reverse />
                    </>
                  )}

                  {/* Photo decal */}
                  <div
                    style={{
                      position: "relative",
                      justifySelf: "end",
                      width: 220,
                      aspectRatio: "4 / 5",
                      transform: `rotate(${i % 2 === 0 ? 2.5 : -2.5}deg)`,
                      boxShadow: "0 12px 28px -10px rgba(0,0,0,0.22)",
                      background: "var(--bg)",
                      padding: 8,
                      paddingBottom: 28,
                    }}
                  >
                    <Media src={f.img} ratio="auto" style={{ width: "100%", height: "100%" }} />
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
                    <div
                      className="mono"
                      style={{
                        position: "absolute",
                        bottom: 8,
                        left: 12,
                        fontSize: 9,
                        color: "var(--fg-mute)",
                      }}
                    >
                      {it.k.toUpperCase()} · {String(i + 1).padStart(2, "0")}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <div
            style={{
              marginTop: 80,
              padding: "28px 32px",
              background: "var(--bg-2)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 24,
              flexWrap: "wrap",
            }}
          >
            <div
              className="serif"
              style={{
                fontSize: 22,
                fontStyle: "italic",
                maxWidth: 720,
                lineHeight: 1.4,
              }}
            >
              {lang === "EN" ? (
                <>
                  Don&apos;t see your kind of party?{" "}
                  <span style={{ color: "var(--accent)" }}>
                    We&apos;ve also done a divorce party, a goodbye-to-Oslo dinner,
                    and one very good cat birthday.
                  </span>
                </>
              ) : (
                <>
                  Ikke ditt arrangement?{" "}
                  <span style={{ color: "var(--accent)" }}>
                    Vi har også gjort skilsmissefest, farvel-til-Oslo middag, og én
                    svært god katte-bursdag.
                  </span>
                </>
              )}
            </div>
            <a
              href="#booking"
              data-hover
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                background: "var(--fg)",
                color: "var(--bg)",
                padding: "12px 16px 12px 20px",
                textDecoration: "none",
                fontWeight: 500,
                borderRadius: 999,
                whiteSpace: "nowrap",
              }}
            >
              {lang === "EN" ? "Tell us about it" : "Fortell oss om det"}
              <span
                aria-hidden
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: 999,
                  background: "var(--accent)",
                  color: "var(--bg)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                ↗
              </span>
            </a>
          </div>
        </Reveal>
      </div>

      <style>{`
        .svc-row { transition: background .35s; }
        .svc-row:hover { background: var(--bg-2); }
        @media (max-width: 900px) {
          .svc-row { grid-template-columns: 60px 1fr !important; }
          .svc-row > *:nth-child(n+3) { grid-column: 1 / -1; }
        }
      `}</style>
    </section>
  );
}

function ServiceTitle({
  it,
  f,
  reverse,
}: {
  it: { k: string; d: string };
  f: { note: string };
  reverse: boolean;
}) {
  return (
    <div>
      <h3
        className="serif"
        style={{
          fontSize: "clamp(32px, 3.4vw, 52px)",
          lineHeight: 1,
          margin: 0,
          fontWeight: 400,
          letterSpacing: "-0.025em",
        }}
      >
        {it.k}
      </h3>
      <p
        style={{
          fontSize: 15,
          lineHeight: 1.55,
          color: "var(--fg-soft)",
          margin: "14px 0 0",
          maxWidth: 440,
        }}
      >
        {it.d}
      </p>
      <div
        className="serif"
        style={{
          marginTop: 18,
          fontStyle: "italic",
          color: "var(--accent)",
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          transform: `rotate(${reverse ? 1.5 : -1.5}deg)`,
          fontSize: 17,
        }}
      >
        <svg width="22" height="14" viewBox="0 0 22 14" fill="none">
          <path
            d={reverse ? "M2,8 Q8,12 14,4 T20,10" : "M2,12 Q8,2 14,8 T20,4"}
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
        {f.note}
      </div>
    </div>
  );
}

function ServiceMoment({ moment }: { moment: string }) {
  return (
    <div
      className="serif"
      style={{
        fontSize: 18,
        lineHeight: 1.5,
        fontStyle: "italic",
        color: "var(--fg)",
        borderLeft: "2px solid var(--accent)",
        paddingLeft: 18,
        maxWidth: 360,
      }}
    >
      {moment}
    </div>
  );
}
