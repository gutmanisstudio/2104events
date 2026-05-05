"use client";

import { useMemo, useState, type CSSProperties, type ReactNode } from "react";
import Reveal from "@/components/primitives/Reveal";
import { COPY, type Lang } from "@/content/copy";
import { useLocale } from "@/hooks/useLocale";

type DateValue = { y: number; m: number; d: number };

const SERVICES = [
  { v: "wedding", en: "Wedding", no: "Bryllup" },
  { v: "corporate", en: "Corporate event", no: "Bedriftsarrangement" },
  { v: "milestone", en: "Birthday / Milestone", no: "Bursdag / Milepæl" },
  { v: "cultural", en: "Cultural ceremony", no: "Kulturell seremoni" },
  { v: "private", en: "Private party", no: "Privat fest" },
  { v: "production", en: "Production only", no: "Kun produksjon" },
];
const TIMES = [
  { v: "morning", en: ["Morning", "08–12"], no: ["Morgen", "08–12"] },
  { v: "afternoon", en: ["Afternoon", "12–17"], no: ["Ettermiddag", "12–17"] },
  { v: "evening", en: ["Evening", "17–22"], no: ["Kveld", "17–22"] },
  { v: "flex", en: ["Flexible", "any time"], no: ["Fleksibel", "når som helst"] },
];

const fld = (extra?: CSSProperties): CSSProperties => ({
  width: "100%",
  padding: "12px 14px",
  border: "1px solid var(--line-c)",
  borderRadius: 4,
  background: "var(--bg)",
  color: "var(--fg)",
  fontSize: 14,
  outline: "none",
  transition: "border .15s",
  ...extra,
});

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label style={{ display: "block", marginTop: 16 }}>
      <div className="mono" style={{ color: "var(--fg-mute)", marginBottom: 8 }}>
        {label}
      </div>
      {children}
    </label>
  );
}

function MiniCal({
  value,
  onChange,
  lang,
}: {
  value: DateValue;
  onChange: (v: DateValue) => void;
  lang: Lang;
}) {
  const today = useMemo(() => new Date(2026, 4, 5), []);
  const [view, setView] = useState({ y: today.getFullYear(), m: today.getMonth() });

  const monthNames =
    lang === "EN"
      ? ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
      : ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"];
  const dayNames =
    lang === "EN"
      ? ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"]
      : ["MAN", "TIR", "ONS", "TOR", "FRE", "LØR", "SØN"];

  const first = new Date(view.y, view.m, 1);
  const lead = (first.getDay() + 6) % 7;
  const days = new Date(view.y, view.m + 1, 0).getDate();
  const prevDays = new Date(view.y, view.m, 0).getDate();

  const cells: { d: number; mute: boolean }[] = [];
  for (let i = 0; i < lead; i++) cells.push({ d: prevDays - lead + 1 + i, mute: true });
  for (let d = 1; d <= days; d++) cells.push({ d, mute: false });
  while (cells.length % 7 !== 0) cells.push({ d: cells.length - lead - days + 1, mute: true });
  while (cells.length < 42) cells.push({ d: cells.length - lead - days + 1, mute: true });

  const isSelected = (c: { d: number; mute: boolean }) =>
    !c.mute && value.y === view.y && value.m === view.m && value.d === c.d;
  const isToday = (c: { d: number; mute: boolean }) =>
    !c.mute &&
    view.y === today.getFullYear() &&
    view.m === today.getMonth() &&
    c.d === today.getDate();

  return (
    <div
      style={{
        border: "1px solid var(--line-c)",
        borderRadius: 4,
        padding: 20,
        background: "var(--bg)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 18,
        }}
      >
        <button
          onClick={() =>
            setView((v) => ({ y: v.m === 0 ? v.y - 1 : v.y, m: (v.m + 11) % 12 }))
          }
          aria-label="Previous month"
          data-hover
          style={{
            width: 28,
            height: 28,
            borderRadius: 999,
            border: "none",
            background: "transparent",
            cursor: "pointer",
            color: "var(--fg-soft)",
          }}
        >
          ‹
        </button>
        <div className="serif" style={{ fontSize: 18, fontWeight: 500 }}>
          {monthNames[view.m]} {view.y}
        </div>
        <button
          onClick={() =>
            setView((v) => ({ y: v.m === 11 ? v.y + 1 : v.y, m: (v.m + 1) % 12 }))
          }
          aria-label="Next month"
          data-hover
          style={{
            width: 28,
            height: 28,
            borderRadius: 999,
            border: "none",
            background: "transparent",
            cursor: "pointer",
            color: "var(--fg-soft)",
          }}
        >
          ›
        </button>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 2 }}>
        {dayNames.map((d) => (
          <div
            key={d}
            className="mono"
            style={{
              textAlign: "center",
              color: "var(--fg-mute)",
              fontSize: 9,
              paddingBottom: 8,
            }}
          >
            {d}
          </div>
        ))}
        {cells.map((c, i) => {
          const sel = isSelected(c);
          const td = isToday(c);
          return (
            <button
              key={i}
              onClick={() => !c.mute && onChange({ y: view.y, m: view.m, d: c.d })}
              data-hover
              style={{
                aspectRatio: "1 / 1",
                minHeight: 36,
                border: "none",
                background: sel
                  ? "var(--accent)"
                  : td
                  ? "color-mix(in oklab, var(--accent) 14%, var(--bg))"
                  : "transparent",
                color: sel
                  ? "var(--bg)"
                  : c.mute
                  ? "var(--fg-mute)"
                  : "var(--fg)",
                opacity: c.mute ? 0.4 : 1,
                cursor: c.mute ? "default" : "pointer",
                borderRadius: 4,
                fontSize: 13,
                fontWeight: sel ? 600 : 400,
                transition: "background .12s",
              }}
            >
              {c.d}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function SubmitRow({ lang }: { lang: Lang }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 10,
        marginTop: 24,
      }}
    >
      <button
        data-hover
        style={{
          padding: "14px 16px",
          border: "none",
          borderRadius: 4,
          cursor: "pointer",
          background: "#25D366",
          color: "#fff",
          fontSize: 13,
          fontWeight: 500,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
        }}
      >
        WhatsApp
      </button>
      <button
        data-hover
        style={{
          padding: "14px 16px",
          border: "1px solid var(--fg)",
          borderRadius: 4,
          cursor: "pointer",
          background: "transparent",
          color: "var(--fg)",
          fontSize: 13,
          fontWeight: 500,
        }}
      >
        ✉ {lang === "EN" ? "Email" : "E-post"}
      </button>
      <button
        data-hover
        style={{
          padding: "14px 16px",
          border: "1px solid var(--fg)",
          borderRadius: 4,
          cursor: "pointer",
          background: "transparent",
          color: "var(--fg)",
          fontSize: 13,
          fontWeight: 500,
        }}
      >
        ⌑ Instagram DM
      </button>
    </div>
  );
}

export default function BookingSection() {
  const [lang] = useLocale();
  const copy = COPY[lang];
  const [date, setDate] = useState<DateValue>({ y: 2026, m: 4, d: 16 });
  const [time, setTime] = useState("evening");
  const [service, setService] = useState("wedding");

  const lab = (en: string, no: string) => (lang === "EN" ? en : no);

  return (
    <section
      id="booking"
      style={{
        padding: "160px 24px",
        background: "var(--bg)",
        borderTop: "1px solid var(--line-c)",
      }}
    >
      <div style={{ maxWidth: 1320, margin: "0 auto" }}>
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
            {copy.booking.title.split(" ").slice(0, -2).join(" ")}{" "}
            <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
              {copy.booking.title.split(" ").slice(-2).join(" ")}
            </em>
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.6,
              color: "var(--fg-soft)",
              marginTop: 24,
              marginBottom: 56,
              maxWidth: 600,
            }}
          >
            {copy.booking.lede}
          </p>
        </Reveal>

        <Reveal delay={180}>
          <div
            className="booking-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1.1fr 1fr",
              gap: 56,
              alignItems: "flex-start",
            }}
          >
            <div>
              <div
                className="mono"
                style={{ color: "var(--fg-mute)", marginBottom: 12 }}
              >
                — {lab("Pick a date", "Velg dato")}
              </div>
              <MiniCal value={date} onChange={setDate} lang={lang} />

              <div
                className="mono"
                style={{
                  color: "var(--fg-mute)",
                  marginTop: 28,
                  marginBottom: 12,
                }}
              >
                — {lab("Preferred time", "Foretrukket tid")}
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4, 1fr)",
                  gap: 8,
                }}
              >
                {TIMES.map((t) => {
                  const labels = lang === "EN" ? t.en : t.no;
                  const active = time === t.v;
                  return (
                    <button
                      key={t.v}
                      onClick={() => setTime(t.v)}
                      data-hover
                      style={{
                        padding: "14px 8px",
                        border: "1px solid",
                        borderColor: active ? "var(--fg)" : "var(--line-c)",
                        background: active ? "var(--fg)" : "var(--bg)",
                        color: active ? "var(--bg)" : "var(--fg)",
                        borderRadius: 4,
                        cursor: "pointer",
                        fontSize: 13,
                        fontWeight: 500,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 4,
                      }}
                    >
                      <span>{labels[0]}</span>
                      <span style={{ fontSize: 10, opacity: 0.7 }}>{labels[1]}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 16,
                }}
              >
                <Field label={lab("Your name", "Navn")}>
                  <input style={fld()} placeholder="Jane Smith" />
                </Field>
                <Field label={lab("Phone (optional)", "Telefon")}>
                  <input style={fld()} placeholder="+47…" />
                </Field>
              </div>
              <Field label={lab("Service", "Tjeneste")}>
                <select
                  style={fld()}
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                >
                  {SERVICES.map((s) => (
                    <option key={s.v} value={s.v}>
                      {lang === "EN" ? s.en : s.no}
                    </option>
                  ))}
                </select>
              </Field>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 16,
                }}
              >
                <Field label={lab("Guest count", "Antall gjester")}>
                  <input style={fld()} placeholder="80" type="number" />
                </Field>
                <Field label={lab("Budget (NOK)", "Budsjett (NOK)")}>
                  <select style={fld()} defaultValue="">
                    <option value="">{lab("Select…", "Velg…")}</option>
                    <option>50–150k</option>
                    <option>150–300k</option>
                    <option>300–600k</option>
                    <option>600k+</option>
                  </select>
                </Field>
              </div>
              <Field label={lab("Anything we should know?", "Noe vi bør vite?")}>
                <textarea
                  style={fld({
                    minHeight: 88,
                    resize: "vertical",
                    fontFamily: "inherit",
                  })}
                  placeholder={lab(
                    "Venue, theme, dietary needs, family logistics…",
                    "Lokale, tema, allergier, logistikk…"
                  )}
                />
              </Field>

              <div
                style={{
                  marginTop: 16,
                  padding: 14,
                  background: "var(--bg-2)",
                  borderRadius: 4,
                  fontSize: 12,
                  color: "var(--fg-soft)",
                  display: "flex",
                  gap: 10,
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    background: "#5AB67A",
                    borderRadius: 999,
                    marginTop: 6,
                    flexShrink: 0,
                  }}
                />
                <span>
                  {lab(
                    "We'll respond within one working day with availability and a starting estimate.",
                    "Vi svarer innen én arbeidsdag."
                  )}
                </span>
              </div>
              <SubmitRow lang={lang} />
            </div>
          </div>
        </Reveal>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .booking-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
        @media (max-width: 600px) {
          #booking { padding: 100px 20px !important; }
          #booking [style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; }
          #booking [style*="repeat(3, 1fr)"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
