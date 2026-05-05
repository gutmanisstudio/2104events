"use client";

import Link from "next/link";
import PageHeader from "@/components/pages/PageHeader";
import Media from "@/components/primitives/Media";
import Reveal from "@/components/primitives/Reveal";
import { MEDIA } from "@/content/media";
import { useLocale } from "@/hooks/useLocale";

const POSTS_EN = [
  { slug: "winter-bergen", title: "Field notes — a winter wedding in Bergen", k: "Field notes", d: "Apr 2026" },
  { slug: "22-47-moment", title: "Essay — on the 22:47 moment", k: "Essay", d: "Mar 2026" },
  { slug: "mulled-almond", title: "Recipe — Jose's mulled almond", k: "Recipe", d: "Feb 2026" },
  { slug: "henna-night", title: "Field notes — a henna night that ran till 04:00", k: "Field notes", d: "Jan 2026" },
];
const POSTS_NO = [
  { slug: "winter-bergen", title: "Feltnotater — et vinterbryllup i Bergen", k: "Feltnotater", d: "Apr 2026" },
  { slug: "22-47-moment", title: "Essay — om 22:47-øyeblikket", k: "Essay", d: "Mar 2026" },
  { slug: "mulled-almond", title: "Oppskrift — Joses gløgg med mandel", k: "Oppskrift", d: "Feb 2026" },
  { slug: "henna-night", title: "Feltnotater — en henna-kveld til 04:00", k: "Feltnotater", d: "Jan 2026" },
];

export default function JournalPage() {
  const [lang] = useLocale();
  const posts = lang === "EN" ? POSTS_EN : POSTS_NO;
  const featured = posts[0];

  return (
    <>
      <PageHeader
        eyebrow={lang === "EN" ? "Journal · Field notes & essays" : "Journal · Feltnotater & essays"}
        title={lang === "EN" ? "What we wrote\nbetween events." : "Hva vi skrev\nmellom arrangementer."}
        lede={
          lang === "EN"
            ? "Slow notes from the studio: lessons from the floor, recipes, the small ideas behind big rooms."
            : "Sakte notater fra studioet: lærdom fra gulvet, oppskrifter, små idéer bak store rom."
        }
      />

      {/* Featured post */}
      <section style={{ padding: "20px 24px 80px" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto" }}>
          <Reveal>
            <Link
              href={`/journal/${featured.slug}`}
              data-hover
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 60,
                textDecoration: "none",
                color: "var(--fg)",
                alignItems: "center",
              }}
              className="featured-post"
            >
              <Media src={MEDIA.babyshower_3} caption={featured.k.toUpperCase()} ratio="4 / 5" />
              <div>
                <div className="mono" style={{ color: "var(--accent)", marginBottom: 16 }}>
                  ● {lang === "EN" ? "FEATURED" : "FREMHEVET"} · {featured.d}
                </div>
                <h2
                  className="serif"
                  style={{
                    fontSize: "clamp(36px, 4.4vw, 64px)",
                    lineHeight: 1.05,
                    margin: 0,
                    fontWeight: 300,
                    letterSpacing: "-0.035em",
                  }}
                >
                  {featured.title}
                </h2>
                <p style={{ marginTop: 24, color: "var(--fg-soft)", fontSize: 16, lineHeight: 1.6, maxWidth: 480 }}>
                  {lang === "EN"
                    ? "Two days, three vendors, one storm. The bride wanted candles outdoors. We made it work — and learned something about wind."
                    : "To dager, tre leverandører, én storm. Bruden ville ha lys utendørs. Vi løste det — og lærte noe om vind."}
                </p>
                <span className="mono" style={{ marginTop: 24, display: "inline-block", color: "var(--fg)", borderBottom: "1px solid var(--fg)", paddingBottom: 4 }}>
                  {lang === "EN" ? "READ →" : "LES →"}
                </span>
              </div>
            </Link>
          </Reveal>
        </div>
        <style>{`
          @media (max-width: 900px) { .featured-post { grid-template-columns: 1fr !important; gap: 32px !important; } }
        `}</style>
      </section>

      {/* Archive */}
      <section style={{ padding: "0 24px 100px", borderTop: "1.5px solid var(--fg)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto" }}>
          <div className="mono" style={{ color: "var(--fg-mute)", padding: "32px 0 16px" }}>
            {lang === "EN" ? "ARCHIVE" : "ARKIV"}
          </div>
          {posts.slice(1).map((p) => (
            <Link
              key={p.slug}
              href={`/journal/${p.slug}`}
              data-hover
              style={{
                display: "grid",
                gridTemplateColumns: "100px 1fr auto",
                gap: 24,
                alignItems: "center",
                padding: "28px 0",
                borderBottom: "1px solid var(--line-c)",
                textDecoration: "none",
                color: "var(--fg)",
              }}
            >
              <span className="mono" style={{ color: "var(--accent)" }}>{p.k.toUpperCase()}</span>
              <span className="serif" style={{ fontSize: "clamp(20px, 2.4vw, 32px)", letterSpacing: "-0.02em" }}>
                {p.title}
              </span>
              <span className="mono" style={{ color: "var(--fg-mute)" }}>{p.d}</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
