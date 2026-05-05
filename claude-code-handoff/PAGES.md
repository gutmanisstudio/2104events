# PAGES — 2104events

Six routes. Each section below: route, purpose, structure, copy keys, reference
file. **Open the reference file before building** — port, don't paraphrase.

---

## `/` — Home

**Reference:** `reference/src/app.jsx` (`HomePage`) +
`reference/src/hero.jsx` + `reference/src/sections.jsx`

Order:

1. `<Hero layout={t.heroLayout} />` — split | centered | fullbleed
2. `<Services />` — six numbered practices in an asymmetric grid
3. `<WorkScrub />` — horizontal-ish gallery of selected work
4. `<Process />` — four roman-numeral conversations
5. `<DetailStrip />` — close-up detail shots, very tight crop
6. `<Quote />` — italic Fraunces pull-quote
7. `<AboutBlock />` — the studio in 4 lines + stat row
8. `<BookingSection variant={t.bookingVariant} />`
9. `<Footer />`

Copy comes from `COPY[lang]` (see COPY_EN_NO.md).

---

## `/work` — Selected work

**Reference:** `reference/src/pages.jsx` (`WorkPage`)

- `<PageHeader>` with eyebrow "Selected work · 2018–2026", title "Rooms\nwe've
  shaped.", and a 4-line stamp.
- Filter row: All / Wedding / Baby shower / Milestone / Corporate, pill
  buttons, active state filled.
- 12-col grid of work items. Each item:
  - Tilted (±0.6°)
  - Floating location stamp top-right (rotated 3°/-3°)
  - № NNN · category · date in mono accent
  - Serif h3/h4 title
  - HandNote with anecdote ("we cried at this one ♥")

Items (copy verbatim, both langs):

| # | EN title | NO title | Cat | Date | Loc | Note |
|---|----------|----------|-----|------|-----|------|
| 1 | Baby B · A nursery in beige & cocoa | Baby B · Beige & kakao | Baby shower / Babyshower | Mar 2025 | Frogner | mum cried twice ♥ / mor gråt to ganger ♥ |
| 2 | White & gold reception | Hvit & gull mottakelse | Wedding / Bryllup | Sep 2024 | Bygdøy | 180 guests, 1 dog / 180 gjester, 1 hund |
| 3 | Labake at 50 | Labake fyller 50 | Milestone / Milepæl | Feb 2025 | Tjuvholmen | purple & gold ✦ / lilla & gull ✦ |
| 4 | A long ivory table | Et langt elfenbensbord | Baby shower | Mar 2025 | Grünerløkka | 36 chairs, 1 row / 36 stoler, 1 rad |
| 5 | Civil ceremony, Frogner | Borgerlig seremoni, Frogner | Wedding | Jun 2024 | Frogner | rain plan worked / regnplan virket |
| 6 | Balloon wall study | Ballongvegg | Baby shower | Mar 2025 | St. Hanshaugen | 412 balloons / 412 ballonger |
| 7 | Dessert pedestals | Dessertpidestaller | Baby shower | Mar 2025 | Majorstuen | cake won, again / kaken vant igjen |
| 8 | Pink reception · floral | Rosa mottakelse · blomster | Wedding | Aug 2024 | Holmenkollen | 2,400 stems / 2 400 stilker |

Sizes: lg (col-span-8, 4/3), md (col-span-6, 3/4), sm (col-span-4, 1/1).

---

## `/services` — Practices

**Reference:** `reference/src/pages.jsx` (`ServicesPage`)

- `<PageHeader>` "Six ways\nwe throw\na great party." (EN) /
  "Seks måter\nvi lager\net godt selskap." (NO)
  Stamp: TWO OF US · IN THE ROOM AT · EVERY EVENT · — ALWAYS
- Grid rows (4-col on each row): italic numeral / serif title + lede / italic
  pull-quote moment / right-edge polaroid (alternating tilt).

Six items pulled from `COPY[lang].services.items` (Weddings, Corporate,
Milestones, Cultural, Production, Design). For each, an additional "moment"
quote:

| # | EN moment | NO moment | Hand-note (EN) | Hand-note (NO) |
|---|-----------|-----------|----------------|----------------|
| 1 | "The dance floor stayed full till 03:42." | «Dansegulvet var fullt til 03:42.» | we cried at this one ♥ | vi gråt på denne ♥ |
| 2 | "CFO did karaoke. We have it on tape." | «CFO sang karaoke. Vi har det på film.» | pls no more PowerPoint | ikke mer PowerPoint takk |
| 3 | "Grandma led the room in song." | «Bestemoren ledet hele rommet i sang.» | cake at midnight rule | kake-ved-midnatt |
| 4 | "Three new languages that night." | «Tre nye språk den kvelden.» | henna runs late | henna går sent |
| 5 | "Candles stayed lit. Don't ask." | «Lysene holdt seg tente.» | rain plan? always | regnplan? alltid |
| 6 | "Napkins had names on them." | «Servietter med navn.» | small details, big feels | små detaljer, store følelser |

Each row's CTA: "Enquire about this →" / "Spør om dette →" → routes to `/contact`.

---

## `/about` — The studio

**Reference:** `reference/src/pages.jsx` (`AboutPage`)

- `<PageHeader>` "A small studio,\nin Oslo,\nsince 2018." Stamp: SMALL ON
  PURPOSE · OSLO · NORWAY · 3 PLANNERS · 2 PRODUCTION LEADS
- Story spread (2-col): big polaroid (rotate -2°) + sticky note overlay
  "FROM JOSE — started w/ one wedding. now we're still small. on purpose. ✦"
  // body text + Three Things We Believe (I, II, III) + 4 stats grid
- Team — polaroid wall on `bg-2` background. 3 members, each with sticky
  note tag, pull quote (italic Fraunces, accent left-border).

Three principles (verbatim):

| Roman | EN title | NO title | EN body | NO body |
|---|---|---|---|---|
| I | Two of us. Always. | To av oss. Alltid. | No subcontracted day-of leads. The people you meet are the people in the room. | Aldri subkontrakt på dagen. Dem du møter er dem i rommet. |
| II | We invent nothing. | Vi finner ikke opp noe. | Your event isn't our portfolio piece. We're here to host *yours*, not stage ours. | Ditt arrangement er ikke vår portefølje. |
| III | The 22:47 rule. | 22:47-regelen. | Most events tip at the same moment. We staff and plan around it, every time. | De fleste arrangementer vipper på samme øyeblikk. Vi planlegger rundt det. |

Team:

| Name | Role (EN) | Role (NO) | Quote (EN) | Quote (NO) | Tag (EN) | Tag (NO) |
|---|---|---|---|---|---|---|
| Jose Ade | Founder · Lead planner | Grunnlegger · Hovedplanlegger | "If a guest notices the planning, we've failed." | «Hvis en gjest legger merke til planleggingen, har vi mislyktes.» | team grandma calls | mormor ringer Jose |
| Marit Holm | Production lead | Produksjonsleder | "Spreadsheet whisperer. Holds the run-of-show." | «Regnearkets hvisker.» | never panics | panikk = aldri |
| Aanya R. | Cultural events specialist | Spesialist, kulturelle arrangementer | "Henna timing is a science. Trust me." | «Henna-timing er en vitenskap.» | speaks 4 languages | snakker 4 språk |

---

## `/journal` — Field notes

**Reference:** `reference/src/pages.jsx` (`JournalPage`)

- `<PageHeader>` "Notes\nfrom the\nroom." Stamp: 12 ESSAYS · WRITTEN AT 02:00 ·
  AFTER THE LAST · GUEST LEAVES
- Featured post (2-col): big image with rotated tag "STAFF FAVOURITE", date ·
  read-time, large serif title, snowflake-and-ferry preview text.
- Archive list (the rest): № · 80×80 thumb · serif title + tag · ↗

Posts:

| # | EN title | NO title | Date | Read | Tag |
|---|---|---|---|---|---|
| 1 (featured) | Field notes — A winter wedding in Bergen | Feltnotater — Et vinterbryllup i Bergen | Apr 2026 | 6 min | STAFF FAVOURITE / PERSONAL FAVORITT |
| 2 | On the 22:47 moment | Om 22:47-øyeblikket | Mar 2026 | 4 min | ESSAY |
| 3 | Holding two cultures in one room | To kulturer i samme rom | Feb 2026 | 8 min | LONG READ / LANG LESNING |
| 4 | A short defense of the seating chart | Et kort forsvar av bordkartet | Jan 2026 | 3 min | OPINION |
| 5 | Vendors we love (and why) | Leverandører vi elsker | Dec 2025 | 5 min | GUIDE |

For v1 these can route to placeholder essay pages (`/journal/[slug]`) — the
content can be MDX. Fine to ship featured + archive list only on v1.

---

## `/contact` — Plan your event

**Reference:** `reference/src/pages.jsx` (`ContactPage`)

- `<PageHeader>` "Tell us\nabout your\nday." Stamp: REPLY < 24H ·
  OSLO · 09:00–18:00 · WE QUOTE FAST · — PROMISE
- Pick a channel — three tilted cards (WhatsApp, Email, Instagram), each in
  a different bg color, with a HandNote tag below the value.
- `<BookingSection variant>` — full booking form.
- Studio postcard — 2-col, dashed vertical divider. Left: address + hours +
  phone + email. Right: studio image with location dot pin + accent halo.

Channels:

| # | Label | Value | Tag (EN) | Tag (NO) | Icon |
|---|---|---|---|---|---|
| 1 | WhatsApp | +47 948 25 661 | fastest · usually 1hr | raskest · vanligvis 1t | ✆ |
| 2 | Email | studio@2104events.no | we read everything | vi leser alt | ✉ |
| 3 | Instagram | @2104eventsbyjose | DMs welcome | DM-er velkommen | ◎ |

Studio details (from `COPY.footer`):
Lakkegata 4, 0187 Oslo, Norway · Mon–Fri · 09:00–17:00 CET · +47 948 25 661 ·
hello@2104events.no
