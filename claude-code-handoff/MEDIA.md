# MEDIA

Real photo + video assets, all in `reference/media/`. Copy them all into
`public/media/` of the Next.js project.

```ts
// src/content/media.ts
export const MEDIA = {
  hero_video:    "/media/weddingwhitegold.mp4",
  hero_video_2:  "/media/whitewedding.mp4",
  hero_video_3:  "/media/weddingpink.mp4",
  babyshower_1:  "/media/babyshower1.jpg",
  babyshower_2:  "/media/babyshower2.jpg",
  babyshower_3:  "/media/babyshower3.jpg",
  babyshower_4:  "/media/babyshower4.jpg",
  foodmenu:      "/media/foodmenu.jpg",
} as const;
```

## Treatment rules

- Videos: `autoplay muted loop playsinline preload="metadata"`. Use
  `<video>` directly, not `<Image>`. Always letterbox-cover.
- Images: Next.js `<Image fill sizes="..." />` inside aspect-ratio wrapper.
  Cover-fit, no cropping in CSS beyond that.
- Captions (mono, 10px, uppercase, blurred backdrop) on bottom-left when
  shown. Optional.
- Polaroid frame **does not** crop — it always shows the full image at the
  declared `ratio`.

## Caption strings (for placeholders during development)

```ts
export const PH = {
  hero:      "OSLO · WEDDING · APR 2025 · 16:9",
  hero2:     "FROGNER · CIVIL CEREMONY · 14:30",
  work_1:    "FROGNER WEDDING · 220 GUESTS · MAY 2024",
  work_2:    "EQT NORDIC LEADERSHIP DINNER · 80 GUESTS · OCT 2024",
  work_3:    "DOHALE JEVAN · GRÜNERLØKKA · MAR 2025",
  work_4:    "30TH BIRTHDAY · TJUVHOLMEN · JUN 2024",
  work_5:    "KING & PALMTREE LIVE · OSLO · AUG 2025",
  work_6:    "NEW YEAR'S EVE GALA · 2025/26",
  about_1:   "JOSE, FOUNDER · STUDIO PORTRAIT",
  about_2:   "STUDIO · LAKKEGATA 4",
  about_3:   "ON THE NIGHT · BTS",
  detail_1:  "TABLESCAPE DETAIL · IVORY LINEN",
  detail_2:  "FLORAL — GARDEN ROSE & EUCALYPTUS",
  detail_3:  "CALLIGRAPHY · MENU CARD",
  journal_1: "FIELD NOTES — A WINTER WEDDING IN BERGEN",
  journal_2: "ESSAY — ON THE 22:47 MOMENT",
  journal_3: "RECIPE — JOSE'S MULLED ALMOND",
} as const;
```

## Adding more later

The site is built around 8 working assets. Once Jose delivers more
photography, drop into `public/media/`, add to `MEDIA`, and reference by key.
Don't hardcode paths in components.
