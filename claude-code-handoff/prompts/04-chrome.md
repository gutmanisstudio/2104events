# Prompt 04 — Chrome (Nav, Footer, layout)

> Read `COMPONENTS.md` § Chrome. Reference: `reference/src/chrome.jsx`.

---

## Task

Build the Nav and Footer, lock layout shell, port the `COPY` constant.

## Steps

1. Create `src/content/copy.ts` containing the full bilingual `COPY` from
   `COPY_EN_NO.md`. Export the type:

```ts
export type Locale = (typeof COPY)[keyof typeof COPY];
export type Lang = "EN" | "NO";
```

2. Create `src/content/media.ts` from `MEDIA.md`. Copy all files in
   `reference/media/` into `public/media/`.

3. Build `src/components/chrome/Nav.tsx`:
   - Sticky top, full-width, z-50.
   - Initial state transparent. Scroll past 80px → bg becomes
     `var(--bg)` with bottom hairline `var(--line-c)` and reduces height
     (use `framer-motion`'s `useScroll` or a plain scroll listener throttled
     to rAF).
   - Left: `<Link href="/">` brand mark — text `2104events` in serif,
     followed by an italic accent ✦.
   - Center: 5 links (Work · Services · About · Journal · Contact), 13px,
     `gap-9`, with active underline (route match via `usePathname`).
   - Right: lang toggle (EN | NO with vertical divider, accent on active),
     theme toggle (sun ☼ / moon ☾ glyph in mono), CTA `<Link>` to `/contact`
     with arrow `↗` and accent border-bottom.
   - Mobile (`<md`): collapse to a hamburger that opens a full-bleed
     overlay (animate with framer-motion). Links stack centered, italic
     Fraunces, large.

4. Build `src/components/chrome/Footer.tsx`:
   - 3-column grid on desktop, single col on mobile. `bg-fg text-bg` (dark
     reverse-out), `pt-24 pb-16`.
   - Col 1: huge italic mark `2104events ✦`, tagline beneath
     ("Events composed, not assembled. — Oslo, since 2018."), italic.
   - Col 2 — Studio: address, hours, phone, email (from `COPY.footer`).
   - Col 3 — Practices: Wedding, Corporate, Milestone, Cultural (links).
   - Col 4 — Connect: IG, WhatsApp, Email, Newsletter inline form (just
     a text input + "→" submit).
   - Bottom row: hairline divider, then mono row with `© 2026 2104events ·
     Oslo, Norway · Org. nr. ___` and a hand-signed `Made with ♥ in Oslo`.

5. Wire layout shell in `src/app/layout.tsx`:

```tsx
<html className={`${fraunces.variable} ${geist.variable} ${mono.variable}`}>
  <body>
    <LenisRoot>
      <CursorDot />
      <Nav />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </LenisRoot>
  </body>
</html>
```

6. Create stub pages so all 5 nav links route somewhere:

```
src/app/work/page.tsx       → <h1>Work — coming next</h1>
src/app/services/page.tsx   → <h1>Services — coming next</h1>
src/app/about/page.tsx      → <h1>About — coming next</h1>
src/app/journal/page.tsx    → <h1>Journal — coming next</h1>
src/app/contact/page.tsx    → <h1>Contact — coming next</h1>
```

## Verification

- All 5 nav links work and `usePathname` underlines the active one.
- Lang toggle updates COPY across the chrome (Nav CTA + Footer text).
- Theme toggle works and persists.
- Mobile nav opens/closes smoothly.
- Footer mark is editorial italic; tagline is short and on-brand.
- No console errors.

→ `05-pages.md`
