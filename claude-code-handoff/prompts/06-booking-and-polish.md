# Prompt 06 — Booking, Tweaks, polish, ship

> Last leg. Reference: `reference/src/booking.jsx`, `reference/src/hero.jsx`,
> `reference/src/app.jsx`.

---

## Task

1. Build all 3 booking variants and wire the variant selector.
2. Build all 3 hero layouts and wire the layout selector.
3. Add an optional dev-only `<TweaksPanel>` (gated by env / query param).
4. Final perf + a11y polish pass.
5. Ship.

---

## Steps

### 1. Booking variants (`src/components/booking/`)

Three components, each a self-contained section:

- **`VariantCalendar.tsx`** — Single-pane like the original screenshot. Date
  grid (Mon-first), preferred time chips (Morning · Afternoon · Evening ·
  Flexible), name + phone, service select, property size + postcode, "Anything
  we should know?" textarea, dual submit (WhatsApp green, Email outline).
  Show a confirmation ribbon: "We'll reply with a quote and confirm
  availability for your preferred slot."
- **`VariantWizard.tsx`** — 4 steps: Date → Service → Details → Contact.
  Each step is a fade-in. Top progress: 4 dots, current dot accent-filled.
  Back / Next buttons at bottom. Final step has the dual submit.
- **`VariantInline.tsx`** — Conversational: "My name is `[___]` and I'm
  planning a `[service ▾]` for `[__]` guests on `[date]`. The space is
  `[__]` and ideally we'd like an `[time ▾]` event. You can reach me at
  `[___]`." Below: send buttons. Inputs are inline, underlined-only, italic
  Fraunces.

Wrap them with:

```tsx
// src/components/booking/BookingSection.tsx
type Variant = "calendar" | "wizard" | "inline";
export default function BookingSection({ variant }: { variant: Variant }) {
  const map = { calendar: VariantCalendar, wizard: VariantWizard, inline: VariantInline };
  const C = map[variant] ?? VariantCalendar;
  return <C />;
}
```

Default variant: read from a `useTweaks()` value (see step 3) or fall back
to `"calendar"`.

### 2. Hero layouts (`src/components/home/Hero.tsx`)

Three components: `HeroSplit` (default), `HeroCentered`, `HeroFullBleed`.
Source: `reference/src/hero.jsx`. Port faithfully.

```tsx
type Layout = "split" | "centered" | "fullbleed";
export default function Hero({ layout }: { layout: Layout }) { ... }
```

### 3. Optional Tweaks panel

`reference/tweaks-panel.jsx` is the source. Port to TS. Gate by:

```tsx
const tweaksEnabled =
  process.env.NEXT_PUBLIC_TWEAKS === "true" ||
  (typeof window !== "undefined" && new URLSearchParams(window.location.search).has("tweaks"));
```

Mount only if `tweaksEnabled`. Persist all values to `localStorage`
under `2104events:tweaks`.

Exposes: hero layout, palette, dark, booking variant, locale.

### 4. Polish pass

- **Images:** every `<img>` is `next/image` with explicit width/height or
  `fill` + sizes. No CLS.
- **Videos:** `preload="metadata"`. Add `poster` attributes (use a
  blur-rendered first frame if you can; ok to skip if not).
- **Fonts:** confirm `next/font` is the only font loader; remove any stray
  `<link>` to fonts.googleapis.com.
- **Focus rings:** every `a, button` has a visible focus state — accent
  outline 2px, offset 3px.
- **Skip link:** add a `Skip to content` link at the top of `layout.tsx`,
  visible on focus.
- **Reduced motion:** wrap `Lenis` init and `Reveal` transitions in a
  `(prefers-reduced-motion: reduce)` check — disable Lenis and shorten
  reveals to 0ms when set.
- **SEO:** `metadata` per page (title, description, openGraph). Use the
  hero copy for the home page.

### 5. Build & verify

```bash
npm run build
```

Final checks:
- [ ] Zero TS errors
- [ ] Zero console warnings on every route
- [ ] First-load JS for `/` ≤ 200 KB (push the booking forms behind dynamic
      imports if needed)
- [ ] Lighthouse: Performance ≥ 85, Accessibility ≥ 95, Best Practices ≥ 95
- [ ] Tab through every page — focus order is logical, no traps
- [ ] Refresh on every page — no flash of wrong palette/locale
- [ ] All 3 hero layouts visually correct
- [ ] All 3 booking variants visually correct
- [ ] EN ↔ NO toggle, light ↔ dark, palette swap all work everywhere

### 6. Deploy

- Push to GitHub.
- Connect to Vercel (Next.js preset, no env vars required for v1).
- Add custom domain: `2104events.no` (apex + `www`).
- Enable Vercel Analytics + Speed Insights.

---

## Done.

If everything checks, you have a faithful production rebuild of the
prototype. Hand the URL to the user and the keys to Jose.
