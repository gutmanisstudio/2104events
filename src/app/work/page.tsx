"use client";

import PageHeader from "@/components/pages/PageHeader";
import Polaroid from "@/components/primitives/Polaroid";
import Reveal from "@/components/primitives/Reveal";
import { COPY } from "@/content/copy";
import { MEDIA } from "@/content/media";
import { useLocale } from "@/hooks/useLocale";

const PIECES = [
  { src: MEDIA.babyshower_2, k_en: "Baby B · A nursery in beige & cocoa", k_no: "Baby B · Beige & kakao", note_en: "mum cried twice ♥", note_no: "mor gråt to ganger ♥", loc: "Frogner · 03.25" },
  { video: MEDIA.hero_video, k_en: "White & gold reception", k_no: "Hvit & gull mottakelse", note_en: "180 guests, 1 dog", note_no: "180 gjester, 1 hund", loc: "Bygdøy · 09.24" },
  { src: MEDIA.foodmenu, k_en: "Labake at 50", k_no: "Labake fyller 50", note_en: "purple & gold ✦", note_no: "lilla & gull ✦", loc: "Tjuvholmen · 02.25" },
  { src: MEDIA.babyshower_1, k_en: "A long ivory table", k_no: "Et langt elfenbensbord", note_en: "36 chairs, 1 row", note_no: "36 stoler, 1 rad", loc: "Grünerløkka · 03.25" },
  { video: MEDIA.hero_video_2, k_en: "Civil ceremony, Frogner", k_no: "Borgerlig seremoni, Frogner", note_en: "rain plan worked", note_no: "regnplan virket", loc: "Frogner · 06.24" },
  { src: MEDIA.babyshower_3, k_en: "Balloon wall study", k_no: "Ballongvegg", note_en: "412 balloons", note_no: "412 ballonger", loc: "St. Hanshaugen · 03.25" },
  { src: MEDIA.babyshower_4, k_en: "Dessert pedestals", k_no: "Dessertpidestaller", note_en: "cake won, again", note_no: "kaken vant igjen", loc: "Majorstuen · 03.25" },
  { video: MEDIA.hero_video_3, k_en: "Pink reception · floral", k_no: "Rosa mottakelse · blomster", note_en: "2,400 stems", note_no: "2 400 stilker", loc: "Holmenkollen · 08.24" },
];

export default function WorkPage() {
  const [lang] = useLocale();
  const copy = COPY[lang];

  return (
    <>
      <PageHeader
        eyebrow={lang === "EN" ? "Selected work · 2018–2026" : "Utvalgt arbeid · 2018–2026"}
        title={lang === "EN" ? "Rooms\nwe've shaped." : "Rom\nvi har formet."}
        lede={
          lang === "EN"
            ? "230+ events. Below, a curated handful — from intimate baby showers to multi-day cultural celebrations."
            : "230+ arrangementer. Et utvalg under."
        }
        stamp={
          lang === "EN"
            ? ["230+ EVENTS", "NORWAY · WORLDWIDE", "EST. 2018", "ARCHIVED WITH LOVE"]
            : ["230+ ARRANGEMENTER", "NORGE · VERDEN", "EST. 2018", "ARKIVERT MED OMTANKE"]
        }
      />

      <section style={{ padding: "20px 24px 100px" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto" }}>
          <div
            className="work-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 48,
            }}
          >
            {PIECES.map((p, i) => (
              <Reveal key={i} delay={(i % 3) * 60}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
                  <Polaroid
                    src={p.src}
                    video={p.video}
                    label={lang === "EN" ? p.k_en : p.k_no}
                    rotate={i % 2 === 0 ? -2 : 3}
                    width="100%"
                  />
                  <div className="mono" style={{ color: "var(--fg-mute)" }}>
                    № {String(i + 1).padStart(3, "0")} · {p.loc}
                  </div>
                  <div
                    className="serif"
                    style={{
                      fontStyle: "italic",
                      color: "var(--accent)",
                      fontSize: 17,
                      transform: `rotate(${i % 2 === 0 ? -1.5 : 1.5}deg)`,
                    }}
                  >
                    {lang === "EN" ? p.note_en : p.note_no}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div
            className="serif"
            style={{
              marginTop: 80,
              fontStyle: "italic",
              fontSize: 22,
              textAlign: "center",
              color: "var(--fg-soft)",
            }}
          >
            {lang === "EN" ? "And " : "Og "}
            <span style={{ color: "var(--accent)" }}>+ 222 {lang === "EN" ? "more" : "til"}</span>
            {lang === "EN" ? " in the archive." : " i arkivet."}
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) { .work-grid { grid-template-columns: 1fr 1fr !important; gap: 24px !important; } }
          @media (max-width: 600px) { .work-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>
    </>
  );
}
