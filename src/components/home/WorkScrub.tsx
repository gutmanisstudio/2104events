"use client";

import { useEffect, useRef, useState } from "react";
import Media from "@/components/primitives/Media";
import { COPY } from "@/content/copy";
import { MEDIA } from "@/content/media";
import { useLocale } from "@/hooks/useLocale";

type Project = {
  src?: string;
  video?: string;
  k: string;
  m: string;
  cat: string;
};

const PROJECTS_EN: Project[] = [
  { src: MEDIA.babyshower_2, k: "A baby shower in beige & cocoa", m: "60 guests · Mar 2025", cat: "Milestone" },
  { video: MEDIA.hero_video, k: "White & gold wedding reception", m: "180 guests · Sep 2024", cat: "Wedding" },
  { src: MEDIA.foodmenu, k: "Labake at 50 — purple & gold dinner", m: "120 guests · Feb 2025", cat: "Milestone" },
  { src: MEDIA.babyshower_4, k: "Baby B — teddy bear shower", m: "45 guests · Jan 2025", cat: "Cultural" },
  { video: MEDIA.hero_video_2, k: "Civil ceremony in ivory", m: "80 guests · Jun 2024", cat: "Wedding" },
  { video: MEDIA.hero_video_3, k: "Pink reception · floral tablescape", m: "220 guests · Aug 2024", cat: "Wedding" },
];

const PROJECTS_NO: Project[] = [
  { src: MEDIA.babyshower_2, k: "Babyshower i beige & kakao", m: "60 gjester · Mar 2025", cat: "Milepæl" },
  { video: MEDIA.hero_video, k: "Hvit & gull bryllupsmottakelse", m: "180 gjester · Sep 2024", cat: "Bryllup" },
  { src: MEDIA.foodmenu, k: "Labake 50 — lilla & gull middag", m: "120 gjester · Feb 2025", cat: "Milepæl" },
  { src: MEDIA.babyshower_4, k: "Baby B — bamse-shower", m: "45 gjester · Jan 2025", cat: "Kulturell" },
  { video: MEDIA.hero_video_2, k: "Borgerlig seremoni i elfenben", m: "80 gjester · Jun 2024", cat: "Bryllup" },
  { video: MEDIA.hero_video_3, k: "Rosa mottakelse · blomster", m: "220 gjester · Aug 2024", cat: "Bryllup" },
];

export default function WorkScrub() {
  const [lang] = useLocale();
  const copy = COPY[lang];
  const projects = lang === "EN" ? PROJECTS_EN : PROJECTS_NO;

  const wrapRef = useRef<HTMLElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = wrapRef.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        const total = el.offsetHeight - window.innerHeight;
        const scrolled = Math.min(Math.max(-r.top, 0), total);
        setProgress(total > 0 ? scrolled / total : 0);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const cardW = 520;
  const gap = 32;
  const totalW = projects.length * (cardW + gap);
  const viewportW = typeof window !== "undefined" ? window.innerWidth : 1440;
  const maxTranslate = totalW - viewportW + 160;
  const tx = -progress * Math.max(0, maxTranslate);

  const titleParts = copy.work.title.split(" ");
  const titleHead = titleParts.slice(0, -2).join(" ");
  const titleTail = titleParts.slice(-2).join(" ");

  return (
    <section
      id="work"
      ref={wrapRef as never}
      style={{
        height: `${projects.length * 70}vh`,
        position: "relative",
        background: "var(--bg)",
      }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          overflow: "hidden",
          paddingTop: 60,
        }}
      >
        <div
          style={{
            padding: "0 32px",
            marginBottom: 48,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            maxWidth: 1440,
            marginInline: "auto",
            width: "100%",
            gap: 32,
            flexWrap: "wrap",
          }}
        >
          <div>
            <div className="mono" style={{ color: "var(--fg-mute)", marginBottom: 16 }}>
              — {copy.work.eyebrow}
            </div>
            <h2
              className="serif"
              style={{
                fontSize: "clamp(40px, 5.4vw, 88px)",
                lineHeight: 1,
                margin: 0,
                fontWeight: 300,
                letterSpacing: "-0.035em",
              }}
            >
              {titleHead}{" "}
              <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
                {titleTail}
              </em>
            </h2>
          </div>
          <div style={{ textAlign: "right" }}>
            <div className="mono" style={{ color: "var(--fg-mute)" }}>
              {String(Math.min(projects.length, Math.floor(progress * projects.length) + 1)).padStart(2, "0")}{" "}
              / {String(projects.length).padStart(2, "0")}
            </div>
            <div
              style={{
                marginTop: 8,
                width: 120,
                height: 1,
                background: "var(--line-c)",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  height: 1,
                  width: `${progress * 100}%`,
                  background: "var(--accent)",
                }}
              />
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap,
            padding: "0 80px",
            transform: `translate3d(${tx}px,0,0)`,
            willChange: "transform",
            transition: "transform .05s linear",
          }}
        >
          {projects.map((p, i) => (
            <div
              key={i}
              style={{ width: cardW, flexShrink: 0, cursor: "pointer" }}
              data-hover
            >
              <Media
                src={p.src}
                video={p.video}
                caption={p.k}
                ratio="3 / 4"
                style={{ width: "100%" }}
              />
              <div style={{ padding: "20px 4px 0" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: 10,
                  }}
                >
                  <span className="mono" style={{ color: "var(--accent)" }}>
                    {String(i + 1).padStart(2, "0")} · {p.cat}
                  </span>
                  <span className="mono" style={{ color: "var(--fg-mute)" }}>
                    {p.m}
                  </span>
                </div>
                <h3
                  className="serif"
                  style={{
                    fontSize: 28,
                    fontWeight: 400,
                    margin: 0,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {p.k}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
