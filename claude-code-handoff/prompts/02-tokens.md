# Prompt 02 — Design tokens & palettes

> Read `DESIGN_TOKENS.md` first. **Lift values verbatim — do not invent.**

---

## Task

Define every color, type, motion and spacing token from `DESIGN_TOKENS.md`
in `globals.css` and a small Tailwind utility layer.

## Steps

1. Append to `src/app/globals.css` the **full token blocks** from
   `DESIGN_TOKENS.md`:
   - Base palette (warm/cream/ink/bronze)
   - Dark variant
   - Sage variant
   - Ink variant
   - The semantic mapping (`body { ... }`, `body[data-theme="dark"] { ... }`,
     `body[data-palette="sage"] { ... }`, `body[data-palette="ink"] { ... }`).
   - The `.serif`, `.mono` utility classes.
   - The `.img-ph` placeholder rule.
   - Selection rule: `::selection { background: var(--accent); color: var(--bg); }`.
   - Lenis CSS lines from the reference HTML.

2. Add a paper-shadow + sticky-note utility set (Tailwind v4 lets you write
   custom utilities inside `@layer utilities`):

```css
@layer utilities {
  .shadow-polaroid { box-shadow: 0 14px 32px -10px rgba(0,0,0,0.22); }
  .shadow-sticky   { box-shadow: 0 6px 20px -6px rgba(0,0,0,0.18); }
  .border-paper    { border: 1px solid rgba(0,0,0,0.06); }
}
```

3. Create `src/hooks/useTheme.ts` (client) — manages two pieces of state
   bound to `document.body.dataset`:
   - `theme: 'light' | 'dark'` → `data-theme`
   - `palette: 'warm' | 'sage' | 'ink'` → `data-palette`

   Persist both in `localStorage` (key `2104events:theme`). Default
   `light` + `warm`. Expose `[theme, setTheme, palette, setPalette]`.

4. Create `src/hooks/useLocale.ts` (client) — manages `lang: 'EN' | 'NO'`,
   reads/writes the `locale` cookie. Default `EN`. Expose `[lang, setLang]`.

5. Wire a tiny smoke-test on `src/app/page.tsx`:
   - Replace placeholder with a row of color swatches showing all 4 palettes
     against the body bg.
   - Add three buttons: Light/Dark, Warm/Sage/Ink, EN/NO. Click them and
     confirm the body data-attrs flip and the swatches restyle.

## Verification

- Toggling theme/palette reskins instantly with no flicker.
- Refreshing the page preserves the choice (localStorage).
- The italic Fraunces title is in `var(--accent)` — accent color shifts when
  palette changes.
- Selection highlight uses the accent.

## Done when

- All token blocks present, all 4 palettes work, theme + locale state hooks
  exist and persist.
- Smoke test page demonstrates all variants visually.

→ `03-primitives.md`
