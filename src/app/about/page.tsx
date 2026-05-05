"use client";

import PageHeader from "@/components/pages/PageHeader";
import AboutBlock from "@/components/home/AboutBlock";
import StickyNote from "@/components/primitives/StickyNote";
import Polaroid from "@/components/primitives/Polaroid";
import Reveal from "@/components/primitives/Reveal";
import { COPY } from "@/content/copy";
import { MEDIA } from "@/content/media";
import { useLocale } from "@/hooks/useLocale";

export default function AboutPage() {
  const [lang] = useLocale();
  const copy = COPY[lang];

  return (
    <>
      <PageHeader
        eyebrow={lang === "EN" ? "The studio · since 2018" : "Studioet · siden 2018"}
        title={
          lang === "EN"
            ? "A small Oslo studio,\nbig on care."
            : "Et lite Oslo-studio,\nstort på omtanke."
        }
        lede={copy.about.body_1}
      />

      {/* Polaroid wall */}
      <section style={{ padding: "20px 24px 60px" }}>
        <div
          style={{
            maxWidth: 1320,
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            gap: 32,
            justifyContent: "center",
          }}
        >
          {[
            { src: MEDIA.babyshower_1, en: "Studio · Lakkegata", no: "Studio · Lakkegata", rot: -3 },
            { src: MEDIA.babyshower_2, en: "Jose, founder", no: "Jose, grunnlegger", rot: 2 },
            { src: MEDIA.foodmenu, en: "On the night · BTS", no: "På kvelden · BTS", rot: -1 },
            { src: MEDIA.babyshower_4, en: "Setup · 06:00", no: "Oppsett · 06:00", rot: 4 },
          ].map((p, i) => (
            <Reveal key={i} delay={i * 80}>
              <Polaroid src={p.src} label={lang === "EN" ? p.en : p.no} rotate={p.rot} width={240} />
            </Reveal>
          ))}
        </div>
      </section>

      <AboutBlock />

      {/* Principles */}
      <section style={{ padding: "100px 24px" }}>
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            gap: 24,
            justifyContent: "center",
          }}
        >
          <StickyNote rotate={-3} color="#FFF8E0">
            <div className="mono" style={{ fontSize: 9, opacity: 0.55 }}>PRINCIPLE 01</div>
            <div className="serif" style={{ fontSize: 18, fontStyle: "italic", marginTop: 4, maxWidth: 220 }}>
              {lang === "EN" ? "Two of us in the room. Always." : "To av oss i rommet. Alltid."}
            </div>
          </StickyNote>
          <StickyNote rotate={2} color="#D9E8D5">
            <div className="mono" style={{ fontSize: 9, opacity: 0.55 }}>PRINCIPLE 02</div>
            <div className="serif" style={{ fontSize: 18, fontStyle: "italic", marginTop: 4, maxWidth: 220 }}>
              {lang === "EN" ? "We arrive at 06:00." : "Vi ankommer 06:00."}
            </div>
          </StickyNote>
          <StickyNote rotate={-1} color="#F8E5C8">
            <div className="mono" style={{ fontSize: 9, opacity: 0.55 }}>PRINCIPLE 03</div>
            <div className="serif" style={{ fontSize: 18, fontStyle: "italic", marginTop: 4, maxWidth: 220 }}>
              {lang === "EN" ? "Every culture in the room is welcome." : "Hver kultur i rommet er velkommen."}
            </div>
          </StickyNote>
          <StickyNote rotate={3} color="#E8E1F4">
            <div className="mono" style={{ fontSize: 9, opacity: 0.55 }}>PRINCIPLE 04</div>
            <div className="serif" style={{ fontSize: 18, fontStyle: "italic", marginTop: 4, maxWidth: 220 }}>
              {lang === "EN" ? "The 22:47 rule: it has to feel like something." : "22:47-regelen: det må føles som noe."}
            </div>
          </StickyNote>
        </div>
      </section>
    </>
  );
}
