# COMPONENTS — 2104events

> Each component below mirrors the existing implementation in `reference/src/`.
> Open the corresponding file before writing the React/TS version — copy the
> structure, port styles to Tailwind v4 + CSS variables.

---

## Primitives (`src/components/primitives/`)

### `<Reveal>`

Fades + lifts children on scroll into view, once.

```tsx
type RevealProps = {
  children: React.ReactNode;
  delay?: number;        // ms, default 0
  as?: keyof JSX.IntrinsicElements;  // default "div"
  className?: string;
  style?: React.CSSProperties;
};
```

Behaviour: `IntersectionObserver` with `threshold: 0.12`,
`rootMargin: '0px 0px -8% 0px'`. Once visible, sets opacity 0→1 and translates
`translateY(24px)` → `translateY(0)` over `.9s cubic-bezier(.2,.7,.3,1)` with
the supplied delay. Disconnects after first hit.

Source: `reference/src/utils.jsx` lines ~190-210.

### `<Media>`

Polymorphic image / video / placeholder block.

```tsx
type MediaProps = {
  src?: string;          // image path
  video?: string;        // video path (overrides src)
  poster?: string;
  caption?: string;
  ratio?: string;        // aspect-ratio, default "4 / 5"
  style?: React.CSSProperties;
};
```

- If `video` → `<video autoplay muted loop playsInline>` cover-fitted.
- Else if `src` → Next.js `<Image fill objectFit="cover">` inside an
  `aspectRatio`-bounded wrapper.
- Else → striped warm placeholder (`.img-ph` from DESIGN_TOKENS).
- Optional caption is monospace overlay, bottom-left, blurred bg.

Source: `reference/src/utils.jsx` lines ~225-260.

### `<Polaroid>`

The hero scrapbook element. A media block in a paper frame with masking-tape
header and italic Fraunces caption below.

```tsx
type PolaroidProps = {
  src?: string;
  video?: string;
  label?: string;        // italic caption inside the frame
  rotate?: number;       // degrees, default 0
  width?: number | string;  // default 240
  ratio?: string;        // default "4 / 5"
  style?: React.CSSProperties;
};
```

Visual structure (from `reference/src/pages.jsx` lines ~33-58):

```
<div style={{
  background: var(--bg),
  padding: '8px 8px 32px 8px',
  boxShadow: '0 14px 32px -10px rgba(0,0,0,0.22)',
  transform: rotate(${rotate}deg),
}}>
  ┌─ tape strip (translucent yellow, top-center, 70×16, dashed L/R borders) ─┐
  ├─ <Media ratio={ratio} src={src} video={video} />                          ┤
  └─ <div italic serif 12px text-fg-soft centered>{label}</div>              ─┘
</div>
```

### `<StickyNote>`

Folded note, slight rotation, paper colors, soft shadow.

```tsx
type StickyNoteProps = {
  children: React.ReactNode;
  rotate?: number;       // degrees, default -3
  color?: string;        // default '#FFF8E0'
  className?: string;
  style?: React.CSSProperties;
};
```

Defaults: `padding: 12px 16px`, dark text always (`#1A1814`),
`box-shadow: 0 6px 20px -6px rgba(0,0,0,0.18)`,
`border: 1px solid rgba(0,0,0,0.06)`.

Used absolute-positioned over polaroids and inside cards. **Always rotated**
(±3–5°). Pair with a tiny mono uppercase `FROM JOSE` label inside.

### `<HandNote>`

Inline italic-serif handwritten note with squiggle SVG underline.

```tsx
type HandNoteProps = {
  children: React.ReactNode;
  rotate?: number;       // degrees, default -1.5
};
```

Renders an inline-flex span:
- The squiggle SVG (22×14, `M2,12 Q8,2 14,8 T20,4`, stroke 1.5).
- Italic Fraunces 17px, color `var(--accent)`.

Used for "we cried at this one ♥", "180 guests, 1 dog", "rain plan worked".

### `<CursorDot>`

Custom cursor — 8px accent dot that grows to 36px translucent on hover over
`a`, `button`, or `[data-hover]`. `mix-blend-mode: difference`. Mount once at
the root.

### `<SectionRule label?>`

Flex row: thin hairline — optional mono label — thin hairline. Vertical
breathing room of 24px each side.

---

## Chrome (`src/components/chrome/`)

### `<Nav>`

```tsx
type NavProps = {
  lang: 'EN' | 'NO';
  setLang: (l: 'EN' | 'NO') => void;
  page: PageKey;
  setPage: (p: PageKey) => void;
  theme: 'light' | 'dark';
  setTheme: (t: 'light' | 'dark') => void;
};
```

Sticky top, 24px padding, transparent until scrolled (then bg + border-bottom).
Left: brand mark `2104events ✦`. Center: nav links (Work · Services · About
· Journal · Contact). Right: lang toggle (EN/NO), theme toggle (sun/moon
glyphs in mono), CTA link to `/contact` ("Plan your event").

Mobile: collapse to a hamburger that opens a full-bleed overlay, links stacked
in italic Fraunces.

Source: `reference/src/chrome.jsx`.

### `<Footer>`

Three-column: brand block (italic mark + tagline), three column nav (Studio,
Practices, Connect), and a final hand-signed line. Bottom: legal row with
year, address, tax id placeholder.

---

## Home sections (`src/components/home/`)

### `<Hero layout>`

`layout: 'split' | 'centered' | 'fullbleed'` — three distinct compositions.

- **split (default):** Title left, hero video right, ticker pill ("47 BOOKED
  THIS WEEK"), CTA card with arrow icon. Asymmetric grid.
- **centered:** Editorial centered title, scroll-masked image fade-in.
- **fullbleed:** Full-bleed hero video, title overlay bottom-left, eyebrow
  top-right.

All three pull copy from `COPY[lang].hero` (title_a/title_b/title_c +
eyebrow + lede + meta).

Source: `reference/src/hero.jsx`.

### `<Services>`, `<WorkScrub>`, `<Process>`, `<DetailStrip>`, `<Quote>`, `<AboutBlock>`

See `reference/src/sections.jsx`. Each is a self-contained section. Pull copy
from `COPY[lang]`.

---

## Booking (`src/components/booking/`)

### `<BookingSection variant>`

`variant: 'calendar' | 'wizard' | 'inline'` — three fully different forms.

- **calendar:** Single-pane like the original screenshot (date grid, time
  chips, name/phone/service/postcode, message, dual submit WhatsApp + email).
- **wizard:** Four-step (date → service → details → contact) with step pills,
  back/next buttons, progress dots.
- **inline:** Conversational fill-in-the-blanks ("My name is ___ and I'm
  planning a ___ for ___ guests on ___").

Source: `reference/src/booking.jsx`. **Lift the calendar logic verbatim** —
month grid, weekday headers (Mon-first, Norwegian convention), today
highlighted, past dates muted.

---

## Sub-pages (`src/components/pages/`)

### `<PageHeader eyebrow title lede stamp>`

```tsx
type PageHeaderProps = {
  eyebrow: string;
  title: string;          // supports \n line breaks
  lede?: string;
  stamp?: string[];       // e.g. ['230+ EVENTS', 'NORWAY · WORLDWIDE', ...]
};
```

`pt-[180px] pb-[60px]`. H1 is `display-xxl`, mono eyebrow with a 22-px accent
hairline preceding it. Optional 4-line vintage-stamp box on the right
(`border: 2px solid var(--accent)`, mono, rotated -6°).

Source: `reference/src/pages.jsx` lines ~3-29.

### `<WorkPage>`, `<ServicesPage>`, `<AboutPage>`, `<JournalPage>`, `<ContactPage>`

See `reference/src/pages.jsx`. Each composes the primitives above with copy
from `COPY[lang]`. **Don't redesign — port.**

---

## Tweaks (optional, dev-only)

`<TweaksPanel>` is a dev-only floating control panel. Wrap with a runtime
flag (`process.env.NEXT_PUBLIC_TWEAKS === 'true'` or `?tweaks=1` query param)
so it doesn't ship to production.

It exposes:
- Hero layout (split / centered / fullbleed)
- Palette (warm / sage / ink)
- Dark mode (on / off)
- Booking variant (calendar / wizard / inline)
- Locale (EN / NO)

Persist selections in `localStorage` keyed `2104events:tweaks`.

Source: `reference/tweaks-panel.jsx` + `reference/src/app.jsx` lines ~70-85.
