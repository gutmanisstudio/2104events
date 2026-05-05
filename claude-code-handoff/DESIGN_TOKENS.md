# DESIGN TOKENS — 2104events

> Lifted verbatim from `reference/2104events.html` `<style>` block.
> **Do not invent new values.** If a value isn't here, check the reference HTML.

---

## Colors

### Base palette (warm — default)

```css
--cream:       #FAF7F2;   /* bg */
--cream-2:     #F2EDE3;   /* bg-2 (alt sections) */
--ink:         #2B2A28;   /* fg */
--ink-soft:    #524F49;   /* fg-soft (body copy) */
--ink-mute:    #8B8780;   /* fg-mute (eyebrow, meta) */
--bronze:      #6B5840;   /* accent */
--bronze-soft: #A08868;   /* accent-soft */
--line:        rgba(43, 42, 40, 0.12);
--line-soft:   rgba(43, 42, 40, 0.06);
```

### Dark variant (warm-toned, NOT inverted)

```css
--d-bg:     #18160F;
--d-bg-2:   #221F18;
--d-fg:     #EDE7DA;
--d-fg-soft:#B8B0A0;
--d-fg-mute:#8B8270;
--d-bronze: #B8945F;
--d-line:   rgba(237, 231, 218, 0.12);
```

### Sage palette

```css
--s-bg:     #F5F2EA;
--s-bg-2:   #EBE6D8;
--s-fg:     #1F2620;
--s-fg-soft:#3A4239;
--s-fg-mute:#6B7268;
--s-accent: #6B7F5C;
```

### Ink palette (high-contrast, monochrome)

```css
--i-bg:     #FFFFFF;
--i-bg-2:   #F4F2EE;
--i-fg:     #0A0A0A;
--i-fg-soft:#2A2A2A;
--i-fg-mute:#767574;
--i-accent: #0A0A0A;     /* same as fg — accent reads as bold black */
```

### Semantic mapping

The body element gets `data-theme` (light|dark) and `data-palette` (warm|sage|ink),
and CSS variables resolve to the right block:

```css
body { /* warm, light */
  --bg: var(--cream);
  --bg-2: var(--cream-2);
  --fg: var(--ink);
  --fg-soft: var(--ink-soft);
  --fg-mute: var(--ink-mute);
  --accent: var(--bronze);
  --line-c: var(--line);
}
body[data-theme="dark"] {
  --bg: var(--d-bg); --bg-2: var(--d-bg-2);
  --fg: var(--d-fg); --fg-soft: var(--d-fg-soft); --fg-mute: var(--d-fg-mute);
  --accent: var(--d-bronze); --line-c: var(--d-line);
}
body[data-palette="sage"] {
  --bg: var(--s-bg); --bg-2: var(--s-bg-2);
  --fg: var(--s-fg); --fg-soft: var(--s-fg-soft); --fg-mute: var(--s-fg-mute);
  --accent: var(--s-accent);
}
body[data-palette="ink"] {
  --bg: var(--i-bg); --bg-2: var(--i-bg-2);
  --fg: var(--i-fg); --fg-soft: var(--i-fg-soft); --fg-mute: var(--i-fg-mute);
  --accent: var(--i-accent);
}
```

### Sticky-note paper colors (used in StickyNote primitive)

```
#FFF8E0   /* default cream paper */
#F8E5C8   /* warm tan */
#E8E1F4   /* lavender */
#D9E8D5   /* mint */
```

---

## Typography

### Stack

```
serif:  'Fraunces', 'Times New Roman', serif       // display, italics, pull-quotes
sans:   'Geist', ui-sans-serif, system-ui          // body, UI
mono:   'JetBrains Mono', ui-monospace             // eyebrows, meta, captions
```

Fraunces is loaded with full optical-size + SOFT + WONK axes for editorial weight.
**Do not substitute Inter, Roboto, or any system serif.** The italic Fraunces
italic at 300 weight is the brand.

### Scale (raw values from prototype)

| Token              | Size                              | Use |
|--------------------|-----------------------------------|-----|
| display-xxl        | `clamp(56px, 8.4vw, 148px)`       | Page H1 (sub-pages) |
| display-xl         | `clamp(56px, 8vw, 140px)`         | Hero title |
| display-l          | `clamp(40px, 5.4vw, 80px)`        | Section titles |
| display-m          | `clamp(36px, 4.4vw, 64px)`        | Featured journal post |
| display-s          | `clamp(32px, 3.6vw, 56px)`        | Service item title |
| serif-h2           | 36 px                             | Card titles, contact |
| serif-h3           | 28 px                             | Polaroid card title |
| serif-h3-sm        | 24 px                             | Team member name |
| serif-h4           | 22 px                             | Work card title |
| serif-pull         | 18 px (italic)                    | Pull quote |
| body-l             | 18 px / 1.7                       | Lede / about body |
| body               | 16 px / 1.5                       | Default copy |
| body-s             | 14 px / 1.55                      | Captions, fine print |
| meta               | 13 px                             | Buttons, links |
| mono               | 11 px / 0.08em / uppercase        | Eyebrow, meta, ticker |
| mono-xs            | 10 px / 0.1em / uppercase         | Image captions |
| mono-xxs           | 9 px / 0.12em / uppercase         | Sticky-note label |

Always weight 300 for serif display. Fraunces ≥ 56 px should set
`letter-spacing: -0.04em` ish. Smaller serifs use `-0.02em` to `-0.025em`.

### Italics rule

Italic Fraunces is **always** the accent color (`--accent`), not the fg color.
This is brand-critical.

```tsx
<h1 className="font-serif">
  Events composed,{" "}
  <em className="italic text-accent">not assembled.</em>
</h1>
```

---

## Spacing & layout

```
Page padding (sides):  24px desktop, 16px mobile
Page max-width:        1320px (subpages), 1440px (some grids)
Section padding:       py-[100px] desktop, py-[60px] mobile
Page header padding:   pt-[180px] pb-[60px]
Card gap (work grid):  28px
Polaroid inner pad:    8px (top + sides), 32px (bottom — for caption)
Polaroid shadow:       0 14px 32px -10px rgba(0,0,0,0.22)
StickyNote shadow:     0 6px 20px -6px rgba(0,0,0,0.18)
StickyNote border:     1px solid rgba(0,0,0,0.06)
```

Grids: 12-col with `gap: 28px` for work. Most sections use 1fr 1fr split or
1.2fr 1fr (asymmetric — feature + body).

---

## Borders & rules

```
--line:      rgba(43, 42, 40, 0.12)    // hairline, between rows
--line-soft: rgba(43, 42, 40, 0.06)    // even subtler
1.5px solid var(--fg)                  // hard rule above section breaks
1px dashed var(--fg)                   // postcard divider in contact
```

---

## Motion

```ts
// Reveal on scroll
transition: opacity .9s cubic-bezier(.2,.7,.3,1), transform .9s same
transform: translateY(24px) → translateY(0)
threshold: 0.12 (IntersectionObserver), rootMargin '0px 0px -8% 0px'

// Lenis smooth-scroll
duration: 1.15
easing:   x => Math.min(1, 1.001 - Math.pow(2, -10 * x))   // exp-out

// Polaroid hover tilt
transform: rotate(-3deg → 0deg) on hover
transition: transform .4s cubic-bezier(.5, 0, .2, 1)

// Magnetic CTA arrow
transform: rotate(45deg) scale(1.15) on hover
transition: transform .4s cubic-bezier(.5, 0, .2, 1)

// Cursor dot
8px default → 36px on [data-hover] / a / button
mix-blend-mode: difference
transition: width .25s, height .25s, opacity .2s
```

Scroll-driven hero parallax: title's `translateY` interpolates against
`window.scrollY / 600` clamped to [0, 1].

---

## Iconography rules

- **No icon libraries.** No Lucide, no Heroicons, no Phosphor.
- Inline SVG only, hand-drawn squiggles. See `HandNote` for the squiggle path:
  `M2,12 Q8,2 14,8 T20,4`.
- Arrows are unicode `↗ ↘ → ↳`.
- Roman numerals (`I II III IV`) for process steps.
- `№ 001` for work items, italic Fraunces numerals (`01 02 03`) for services.

---

## Image treatment

```css
.img-ph {
  background:
    repeating-linear-gradient(135deg,
      rgba(107, 88, 64, 0.08) 0,
      rgba(107, 88, 64, 0.08) 1px,
      transparent 1px,
      transparent 7px),
    linear-gradient(160deg, var(--bg-2) 0%,
      color-mix(in oklab, var(--accent) 8%, var(--bg-2)) 100%);
}
```

Caption is monospace, 10 px, uppercase, on a translucent backdrop:
`background: rgba(24,22,15,0.55); backdrop-filter: blur(6px); color: #FAF7F2;`
positioned bottom-left with 12 px inset.
