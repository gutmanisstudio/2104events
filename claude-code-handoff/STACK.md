# STACK — 2104events

## Versions (pinned)

```jsonc
// package.json (excerpt)
{
  "dependencies": {
    "next": "15.1.6",
    "react": "19.0.0",
    "react-dom": "19.0.0",
    "lenis": "1.1.13",
    "framer-motion": "11.15.0",
    "clsx": "2.1.1"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "4.0.0",
    "tailwindcss": "4.0.0",
    "postcss": "8.4.49",
    "typescript": "5.7.2",
    "@types/node": "22.10.5",
    "@types/react": "19.0.7",
    "@types/react-dom": "19.0.3"
  }
}
```

## Create

```bash
npx create-next-app@15.1.6 2104events \
  --typescript --tailwind --app --src-dir --no-eslint --import-alias "@/*"
cd 2104events
npm i lenis@1.1.13 framer-motion@11.15.0 clsx@2.1.1
```

## Fonts

Use `next/font/google` — no `<link>` tags.

```ts
// src/app/fonts.ts
import { Fraunces, Geist, JetBrains_Mono } from "next/font/google";

export const fraunces = Fraunces({
  subsets: ["latin"], variable: "--font-serif",
  axes: ["opsz", "SOFT", "WONK"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
});
export const geist = Geist({
  subsets: ["latin"], variable: "--font-sans",
  weight: ["300", "400", "500", "600"],
});
export const mono = JetBrains_Mono({
  subsets: ["latin"], variable: "--font-mono",
  weight: ["400", "500"],
});
```

In `src/app/layout.tsx`:

```tsx
<html lang="en" className={`${fraunces.variable} ${geist.variable} ${mono.variable}`}>
```

## File structure

```
src/
  app/
    layout.tsx
    page.tsx                      → home
    work/page.tsx
    services/page.tsx
    about/page.tsx
    journal/page.tsx
    contact/page.tsx
    globals.css                   → tokens + base + lenis CSS
    fonts.ts
  components/
    chrome/
      Nav.tsx
      Footer.tsx
      LangToggle.tsx
    primitives/
      Reveal.tsx
      Media.tsx
      Polaroid.tsx
      StickyNote.tsx
      HandNote.tsx
      CursorDot.tsx
      SectionRule.tsx
    home/
      Hero.tsx                    → three layouts
      Services.tsx
      WorkScrub.tsx
      Process.tsx
      DetailStrip.tsx
      Quote.tsx
      AboutBlock.tsx
    booking/
      BookingSection.tsx
      VariantCalendar.tsx
      VariantWizard.tsx
      VariantInline.tsx
    pages/
      PageHeader.tsx
      WorkPage.tsx
      ServicesPage.tsx
      AboutPage.tsx
      JournalPage.tsx
      ContactPage.tsx
    tweaks/
      TweaksPanel.tsx              → optional, dev-only
  content/
    copy.ts                        → COPY constant (EN + NO)
    media.ts                       → MEDIA manifest
  hooks/
    useLenis.ts
    useReveal.ts
    useTweaks.ts
    useLocale.ts
  lib/
    cn.ts
public/
  media/                           → copy of reference/media/*
```

## Tailwind v4 setup

`globals.css`:

```css
@import "tailwindcss";

@theme inline {
  --color-bg: var(--bg);
  --color-fg: var(--fg);
  --color-fg-soft: var(--fg-soft);
  --color-fg-mute: var(--fg-mute);
  --color-accent: var(--accent);
  --color-line: var(--line-c);
  --font-serif: var(--font-serif), "Times New Roman", serif;
  --font-sans: var(--font-sans), ui-sans-serif, system-ui;
  --font-mono: var(--font-mono), ui-monospace, monospace;
}

/* Token blocks live in DESIGN_TOKENS.md — paste them here */
```

## Lenis

```ts
// src/hooks/useLenis.ts
"use client";
import Lenis from "lenis";
import { useEffect } from "react";

export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (x: number) => Math.min(1, 1.001 - Math.pow(2, -10 * x)),
    });
    let id: number;
    const raf = (t: number) => { lenis.raf(t); id = requestAnimationFrame(raf); };
    id = requestAnimationFrame(raf);
    return () => { cancelAnimationFrame(id); lenis.destroy(); };
  }, []);
}
```

Wire it once in `app/layout.tsx` via a small client component (`<LenisRoot>`)
that wraps `{children}`.

## Routing

App Router. Each page is a server component by default; flip to `"use client"`
only where you need state (booking forms, tweaks, hero scroll-watch, language
toggle).

## Locale

A simple cookie-backed locale (no full i18n routing needed for v1):

```ts
// src/hooks/useLocale.ts — client
// Reads/writes `locale` cookie, defaults "EN", exposes `[lang, setLang]`.
```

The user can upgrade to Next.js i18n routing later if they want NO subpaths.

## Build

```bash
npm run build && npm start
```

Aim for: bundle ≤ 200 KB JS first-load, all images `next/image` with explicit
`width`/`height`, videos lazy-loaded with `preload="metadata"`.
