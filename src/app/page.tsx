import HandNote from "@/components/primitives/HandNote";
import Media from "@/components/primitives/Media";
import Polaroid from "@/components/primitives/Polaroid";
import Reveal from "@/components/primitives/Reveal";
import SectionRule from "@/components/primitives/SectionRule";
import StickyNote from "@/components/primitives/StickyNote";
import { MEDIA } from "@/content/media";

export default function Home() {
  return (
    <main
      className="min-h-screen px-6 py-20 mx-auto"
      style={{ maxWidth: 1200 }}
    >
      <header className="mb-16">
        <p className="mono mb-4" style={{ color: "var(--fg-mute)" }}>
          primitives gallery · prompt 03
        </p>
        <h1
          className="font-serif text-6xl"
          style={{ letterSpacing: "-0.04em", fontWeight: 300 }}
        >
          Events composed,{" "}
          <em
            className="italic"
            style={{ color: "var(--accent)", fontWeight: 300 }}
          >
            not assembled.
          </em>
        </h1>
        <p className="mt-4 max-w-prose" style={{ color: "var(--fg-soft)" }}>
          A paragraph that contains a <HandNote>we cried at this one ♥</HandNote>{" "}
          inline note, to demonstrate the squiggle underline and italic accent
          rendering at body-text scale.
        </p>
      </header>

      <SectionRule label="POLAROIDS" />
      <section
        className="grid gap-8 my-12 items-end"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}
      >
        <Reveal delay={0}>
          <Polaroid
            src={MEDIA.babyshower_1}
            label="Frogner · 03.25"
            rotate={-3}
            width={240}
          />
        </Reveal>
        <Reveal delay={120}>
          <Polaroid
            src={MEDIA.babyshower_2}
            label="A long ivory table"
            rotate={0}
            width={240}
          />
        </Reveal>
        <Reveal delay={240}>
          <Polaroid
            video={MEDIA.hero_video_3}
            label="Pink reception · 08.24"
            rotate={4}
            width={240}
          />
        </Reveal>
      </section>

      <SectionRule label="STICKY NOTES" />
      <section className="flex flex-wrap gap-6 my-12">
        <StickyNote rotate={-3} color="#FFF8E0">
          <p className="mono" style={{ fontSize: 9, opacity: 0.55 }}>
            FROM JOSE
          </p>
          <p className="serif" style={{ fontSize: 14, marginTop: 4 }}>
            we love wild ideas ✦
          </p>
        </StickyNote>
        <StickyNote rotate={2} color="#F8E5C8">
          <p className="mono" style={{ fontSize: 9, opacity: 0.55 }}>
            REMINDER
          </p>
          <p className="serif" style={{ fontSize: 14, marginTop: 4 }}>
            check the 22:47 light
          </p>
        </StickyNote>
        <StickyNote rotate={-1} color="#D9E8D5">
          <p className="mono" style={{ fontSize: 9, opacity: 0.55 }}>
            DETAIL
          </p>
          <p className="serif" style={{ fontSize: 14, marginTop: 4 }}>
            ivory linen + sage runner
          </p>
        </StickyNote>
        <StickyNote rotate={3} color="#E8E1F4">
          <p className="mono" style={{ fontSize: 9, opacity: 0.55 }}>
            VENUE
          </p>
          <p className="serif" style={{ fontSize: 14, marginTop: 4 }}>
            Lakkegata 4 — back room
          </p>
        </StickyNote>
      </section>

      <SectionRule label="MEDIA" />
      <section
        className="grid gap-6 my-12"
        style={{ gridTemplateColumns: "1fr 1fr" }}
      >
        <Media
          src={MEDIA.babyshower_1}
          caption="STUDIO · BABY B · MAR 2025"
          ratio="4 / 5"
        />
        <Media
          video={MEDIA.hero_video}
          caption="WHITE & GOLD RECEPTION · LIVE"
          ratio="4 / 5"
        />
      </section>

      <SectionRule label="REVEAL DEMO" />
      <Reveal delay={200}>
        <h2
          className="font-serif text-5xl my-12"
          style={{ letterSpacing: "-0.03em", fontWeight: 300, color: "var(--fg)" }}
        >
          Scroll-revealed{" "}
          <em className="italic" style={{ color: "var(--accent)" }}>
            heading
          </em>
          .
        </h2>
      </Reveal>

      <SectionRule label="HOVER DOTS" />
      <section className="my-12 flex flex-wrap gap-4">
        <button
          className="mono px-4 py-2"
          style={{
            background: "var(--accent)",
            color: "var(--bg)",
            border: "none",
            cursor: "pointer",
          }}
        >
          a button
        </button>
        <a
          href="#"
          className="mono px-4 py-2"
          style={{
            border: "1px solid var(--line-c)",
            color: "var(--fg)",
            textDecoration: "none",
          }}
        >
          a link
        </a>
        <span
          data-hover
          className="mono px-4 py-2"
          style={{
            border: "1px solid var(--line-c)",
            color: "var(--fg-soft)",
            cursor: "pointer",
          }}
        >
          a [data-hover] span
        </span>
      </section>

      <SectionRule />
    </main>
  );
}
