# Prompt 01 — Scaffold

> Paste this into Claude Code as a single task. **Read** `STACK.md` and
> `README.md` before running.

---

## Task

Scaffold a fresh Next.js 15 project for **2104events** with Tailwind v4,
TypeScript, App Router, Lenis smooth scroll, and Google Fonts wired through
`next/font/google`.

## Steps

1. Run:

```bash
npx create-next-app@15.1.6 2104events \
  --typescript --tailwind --app --src-dir --no-eslint --import-alias "@/*"
cd 2104events
npm i lenis@1.1.13 framer-motion@11.15.0 clsx@2.1.1
```

2. Create `src/app/fonts.ts` exactly as specified in `STACK.md` — Fraunces
   (with opsz, SOFT, WONK axes), Geist, JetBrains Mono. Each as a CSS
   variable.

3. In `src/app/layout.tsx`:
   - Import the three font instances and concatenate their `.variable`
     classNames onto `<html>`.
   - Page `<title>`: "2104events — Oslo · Event Planning & Management".
   - `<meta name="description">`: short brand sentence.
   - Lock `lang="en"` for now (we'll handle locale via cookie + client toggle).

4. Replace the boilerplate `globals.css` with a minimal shell:

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

* { box-sizing: border-box; }
html, body {
  margin: 0; padding: 0;
  background: var(--bg); color: var(--fg);
  font-family: var(--font-sans);
  font-size: 16px; line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

(Do not add token blocks yet — that's prompt 02.)

5. Create `src/hooks/useLenis.ts` with the implementation from `STACK.md`.

6. Create a tiny client wrapper `src/components/chrome/LenisRoot.tsx`:

```tsx
"use client";
import { useLenis } from "@/hooks/useLenis";
export default function LenisRoot({ children }: { children: React.ReactNode }) {
  useLenis();
  return <>{children}</>;
}
```

Wrap `{children}` in `layout.tsx` with `<LenisRoot>`.

7. Replace `src/app/page.tsx` with a placeholder that reads:

```tsx
export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <h1 className="font-serif text-6xl italic" style={{ color: "var(--accent)" }}>
        2104events
      </h1>
    </main>
  );
}
```

8. Verify:
   - `npm run dev` boots clean, no errors.
   - The page shows "2104events" in italic Fraunces (you should see the
     editorial italic, not a fallback). If it falls back to Times, fonts
     aren't wired right — fix.
   - Mousewheel scrolling feels smooth (Lenis is doing its job).

## Done when

- Project boots, fonts load, Lenis is alive, placeholder renders.
- File structure matches `STACK.md` (just the folders; not all files
  populated yet).

→ Move to `02-tokens.md`.
