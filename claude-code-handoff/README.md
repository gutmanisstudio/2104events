# 2104events — Claude Code Handoff Package

You are being asked to rebuild a **fully designed and approved** event-planner website
for **2104events** (Oslo) as a production **Next.js 15 + Tailwind v4 + Lenis** project.

> **CRITICAL — read this first.**
> A full HTML/JSX prototype already exists in `reference/`. It is the source of truth
> for layout, copy, motion, color, typography and component behaviour.
> **You are not designing — you are translating.**
> When in doubt, open the reference file and lift values verbatim.

---

## How to use this package

Work through the prompts in `prompts/` **in order**. Each prompt is a self-contained
instruction you paste into Claude Code (or run as a single task) that produces a
specific slice of the site. Do not skip ahead — later prompts assume earlier ones
are done.

```
prompts/
  01-scaffold.md         → Next.js project + Tailwind + Lenis + fonts
  02-tokens.md           → Design tokens, palettes (warm/sage/ink + dark)
  03-primitives.md       → Reveal, Media, Polaroid, StickyNote, HandNote, CursorDot
  04-chrome.md           → Nav, Footer, language toggle, page transitions
  05-pages.md            → Home, Work, Services, About, Journal, Contact
  06-booking-and-polish.md → Booking variants, Tweaks panel, perf polish
```

Reference docs (read these alongside the prompts):

```
STACK.md                 → Exact dependencies, versions, file structure
DESIGN_TOKENS.md         → Every color, font, spacing, motion value
COMPONENTS.md            → Component contracts (props, behaviour) — verbatim
PAGES.md                 → Page-by-page spec + EN/NO copy
COPY_EN_NO.md            → Bilingual content (mirrors COPY constant)
MEDIA.md                 → Image/video manifest
reference/               → The actual prototype source — open and read
```

---

## Project at a glance

- **Brand:** 2104events — small Oslo studio, founded 2018, ~230 events produced.
- **Voice:** Editorial, warm, slightly handwritten. Norwegian + English.
- **Aesthetic:** "Scrapbook editorial" — Fraunces serif display, polaroids, sticky
  notes, handwritten margin notes, location stamps, asymmetric grids. Nothing
  AI-default. **No** marquees, **no** generic dark mode, **no** Inter, **no**
  glossy gradients, **no** stock-iconography trust bars.
- **Palettes (3 + dark):** warm cream, sage, ink. Dark mode is a *separate*
  warm-toned theme, not just inverted colors.
- **Motion:** Lenis smooth scroll. Subtle scroll reveals, polaroid tilt on hover,
  parallax on hero. Restraint over flash.
- **Languages:** EN + NO with a single `lang` toggle. Every string lives in a
  `COPY` object keyed by locale.
- **Booking:** Three variants (calendar, wizard, inline) — switchable via Tweaks.
- **Pages:** Home, Work, Services, About, Journal, Contact (6 total).

---

## Non-negotiables (the user explicitly called these out)

1. **No basic-AI tropes.** No marquee strips, no generic trust bars, no Inter,
   no default Tailwind gradients, no centered-everything dark-mode landing.
2. **The scrapbook personality is the design.** Polaroids, sticky notes,
   handwritten "we cried at this one ♥" margin notes, location stamps
   ("FROGNER", "180 GUESTS"), №-numbered work pieces, italic Fraunces pull-quotes.
   If you remove these, you've broken the design.
3. **Real anecdotes, real numbers, real moments.** The prototype contains
   verbatim copy like "180 guests, 1 dog", "412 balloons", "rain plan worked",
   "The 22:47 rule". Keep them. Do not paraphrase.
4. **Bilingual EN/NO.** Both locales must be complete and toggleable.
5. **Type stack is fixed:** Fraunces (serif display), Geist (sans), JetBrains
   Mono (mono accents). Do not substitute.

---

## Verification checklist (run after each phase)

- [ ] `npm run dev` boots clean, no console errors.
- [ ] All 6 pages routable, no 404s.
- [ ] Lenis smooth-scroll active (test with mousewheel — should feel inertial).
- [ ] EN ↔ NO toggle works on every page.
- [ ] Light ↔ dark toggle works; both modes are warm-toned, not stark.
- [ ] Three palette options selectable (warm/sage/ink).
- [ ] Three booking variants selectable.
- [ ] Polaroids tilt on hover. Sticky notes have shadow + paper texture feel.
- [ ] Handwritten notes appear in italic Fraunces with the squiggle SVG underline.
- [ ] Real photos/videos load (not placeholders).
- [ ] Mobile: nav collapses, grids reflow to single column, polaroids scale down.
- [ ] Lighthouse: Performance ≥ 85, Accessibility ≥ 95.

---

## What lives where in `reference/`

- `2104events.html` — the prototype shell. Read the `<style>` block for tokens,
  the script tag order for component dependency, and the `TWEAK_DEFAULTS` for
  initial state.
- `src/utils.jsx` — `COPY` (full bilingual content), `MEDIA` manifest, `Reveal`,
  `Media`, `ImgPh`, `Lift`, `CursorDot`, `SectionRule`. **The single most
  important file to read.**
- `src/chrome.jsx` — Nav and Footer.
- `src/hero.jsx` — three hero layouts (split, centered, fullbleed).
- `src/sections.jsx` — Services, WorkScrub, Process, DetailStrip, Quote, AboutBlock.
- `src/booking.jsx` — three booking variants (calendar/wizard/inline).
- `src/pages.jsx` — sub-pages with Polaroid, StickyNote, HandNote, PageHeader.
- `src/app.jsx` — routing + Lenis + Tweaks wiring.
- `tweaks-panel.jsx` — the Tweaks UI primitive.
- `media/` — real event photos and videos.

When in doubt: **open the corresponding reference file and copy the values**.
Do not invent new ones.

---

Start with `prompts/01-scaffold.md`.
