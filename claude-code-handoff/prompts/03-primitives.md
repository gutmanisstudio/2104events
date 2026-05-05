# Prompt 03 — Primitives

> Read `COMPONENTS.md`. Open each `reference/src/*.jsx` file the prompt
> mentions before writing the React/TS version.

---

## Task

Port the 7 design primitives from the prototype into typed React components
under `src/components/primitives/`.

## Components (build in this order)

### 1. `Reveal.tsx`

Source: `reference/src/utils.jsx` `Reveal` + `useReveal`.

Port verbatim. TypeScript-ify the props per `COMPONENTS.md`. Convert inline
styles to a single `style` prop (keep the transitions inline — easier than
a Tailwind keyframe).

### 2. `Media.tsx`

Source: `reference/src/utils.jsx` `Media` + `ImgPh`.

- Accept `src` OR `video` OR neither (placeholder).
- For `src` use `next/image` with `fill` and `sizes="(max-width: 768px) 100vw, 50vw"`.
- For `video` use a plain `<video>` with `autoPlay muted loop playsInline
  preload="metadata"`.
- Caption renders as a mono pill bottom-left, styled per DESIGN_TOKENS.md.
- Wrap in an `aspect-ratio`-bounded div.

### 3. `Polaroid.tsx`

Source: `reference/src/pages.jsx` `Polaroid` (lines ~33-58).

Faithful port. The masking-tape strip is an absolutely-positioned div with:

```css
top: -10px; left: 50%;
transform: translateX(-50%) rotate(-2deg);
width: 70px; height: 16px;
background: rgba(220, 200, 150, 0.5);
border-left: 1px dashed rgba(0,0,0,0.1);
border-right: 1px dashed rgba(0,0,0,0.1);
```

Add a hover affordance: rotate(0deg) + slight scale on hover (only desktop —
gate with `@media (hover: hover)`).

### 4. `StickyNote.tsx`

Source: `reference/src/pages.jsx` `StickyNote`.

Always rotated, paper bg, soft shadow. Default color `#FFF8E0`. Children
wrapped in dark text (`#1A1814`).

### 5. `HandNote.tsx`

Source: `reference/src/pages.jsx` `HandNote`.

Inline-flex span. The squiggle SVG is `M2,12 Q8,2 14,8 T20,4` stroked at
1.5. Italic Fraunces 17px in `var(--accent)`. The whole element is rotated
slightly.

### 6. `CursorDot.tsx`

Source: `reference/src/utils.jsx` `CursorDot`.

Mount once. Listens to `mousemove` and `mouseover`. Adds `.hover` class when
the target matches `a, button, [data-hover]`. **Disable on touch devices**
— use a `(pointer: fine)` matchMedia check, return `null` if not.

### 7. `SectionRule.tsx`

Source: `reference/src/utils.jsx` `SectionRule`.

Trivial flex-row component. Optional `label` prop renders mono uppercase.

## Smoke test

Replace `src/app/page.tsx` with a primitives gallery:

- A `<Polaroid>` in three rotations (`-3°`, `0°`, `4°`).
- Three `<StickyNote>` in three colors.
- A paragraph containing `<HandNote>we cried at this one ♥</HandNote>` inline.
- A `<Media src={MEDIA.babyshower_1} caption="STUDIO" />` block.
- A `<Reveal delay={200}>` wrapping a heading — confirm fade-up on scroll.
- The `<CursorDot />` mounted in `layout.tsx` so it's global.
- A `<SectionRule label="DETAILS" />`.

## Done when

- All 7 primitives compile under `npm run build` with no TS errors.
- The gallery page demonstrates each working.
- Cursor dot grows over `[data-hover]` elements (add a few to test).

→ `04-chrome.md`
