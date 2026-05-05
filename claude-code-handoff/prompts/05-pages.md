# Prompt 05 — Pages

> Read `PAGES.md`. Open each corresponding `reference/src/*.jsx` before
> writing.

---

## Task

Build all six routes: Home + 5 sub-pages. Use the primitives from prompt 03,
chrome from prompt 04, copy from `src/content/copy.ts`.

## Order

Build in this order — each builds on the last.

1. **`PageHeader`** component (`src/components/pages/PageHeader.tsx`) —
   used by 5 sub-pages. Source: `reference/src/pages.jsx`.

2. **`/about` AboutPage** — easiest to verify the polaroid wall, principles,
   stats. Port copy verbatim from PAGES.md tables.

3. **`/services` ServicesPage** — 6 items in alternating-tilt rows, each
   with HandNote + pull-quote + side polaroid.

4. **`/journal` JournalPage** — featured post + archive list.

5. **`/work` WorkPage** — 12-col grid, filter pills, 8 work items with
   anecdotes from PAGES.md.

6. **`/contact` ContactPage** — three channel cards (different bg colors,
   tilted), booking section (placeholder until prompt 06), studio postcard
   spread.

7. **`/` Home** — hero (use `split` layout for v1; we'll add the other two
   in prompt 06), Services preview, WorkScrub, Process, DetailStrip,
   Quote, AboutBlock, BookingSection placeholder, Footer.

## Key per-page rules

- **All page padding:** `px-6 md:px-8`, max-width 1320px.
- **Page header:** `pt-[180px] pb-[60px]`, h1 uses `clamp(56px, 8.4vw,
  148px)`, weight 300, `letter-spacing: -0.045em`.
- **Section breaks:** start most sub-page sections with a 1.5px solid
  `var(--fg)` rule, then a mono eyebrow, then content.
- **Polaroid tilt:** alternate ±2-3° per item; 0° is wrong.
- **Work card hover:** entire card lifts -4px, polaroid de-rotates to 0°,
  cursor dot grows.
- **HandNotes:** at least one per page, in italic Fraunces accent color.

## Routing

For Journal v1, the archive items can link to `/journal/[slug]` as
placeholder pages with a single MDX import. Don't block on rich essay
templates — just stubs that say "Essay coming soon" for now.

## Verification

- All 6 pages render, no 404s.
- EN ↔ NO toggle changes copy on every page.
- Light ↔ dark works on every page (sticky notes still legible).
- Sage and Ink palettes don't break any layout.
- Work filter pills toggle the active state.
- Polaroids tilt on hover (desktop only).
- Mobile: every page reflows to a single column gracefully.
- No layout shift on font load (use `next/font` properly, no FOUT).

## Performance check

```bash
npm run build
```

First-load JS for `/` should be < 250 KB. If it's blowing up, you've left
client components where server components would do — flip everything that
doesn't need state to a server component.

→ `06-booking-and-polish.md`
