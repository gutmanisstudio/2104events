# COPY — EN + NO

> This is the verbatim `COPY` constant. Mirror this into `src/content/copy.ts`
> as a typed object: `export const COPY: Record<'EN'|'NO', Locale> = { ... }`.
> **Don't paraphrase.** The voice is the brand.

```ts
export const COPY = {
  EN: {
    nav: {
      work: "Work", services: "Services", about: "About",
      journal: "Journal", contact: "Contact",
    },
    cta: "Plan your event",
    hero: {
      eyebrow: "Oslo · Est. 2018",
      title_a: "Events composed,\nnot assembled.",
      title_b: "Your celebration,\nour quiet hands.",
      title_c: "From an idea\nto a memory.",
      lede:
        "We are a small Oslo studio shaping intimate weddings, milestone " +
        "gatherings and corporate evenings — for clients who care about the " +
        "way a room feels at 22:47.",
      meta: ["Wedding", "Corporate", "Milestone", "Cultural"],
    },
    services: {
      eyebrow: "What we do",
      title: "A practice in the art of gathering.",
      items: [
        { n: "01", k: "Weddings",     d: "Civil ceremonies, multi-day cultural celebrations, and intimate elopements across Norway." },
        { n: "02", k: "Corporate",    d: "Conferences, leadership offsites, product launches and seasonal staff dinners." },
        { n: "03", k: "Milestones",   d: "Birthdays, anniversaries, baptisms and confirmations — events that mark the calendar." },
        { n: "04", k: "Cultural",     d: "Henna nights, dohale jevan, naming ceremonies and traditions held with care." },
        { n: "05", k: "Production",   d: "Lighting, florals, AV, catering and on-the-night choreography we run end-to-end." },
        { n: "06", k: "Design",       d: "Tablescapes, signage, wayfinding and the small details that make a room feel composed." },
      ],
    },
    work: { eyebrow: "Selected work", title: "A few rooms we've shaped.", view: "View case" },
    process: {
      eyebrow: "How we work",
      title: "Four moments, four conversations.",
      steps: [
        { n: "I",   k: "Listening",    d: "A coffee, a long conversation, no slide deck. We ask what the day should feel like — not what it should look like." },
        { n: "II",  k: "Composition",  d: "We return with a concept, a budget and three to four references. You revise; we revise. Then we lock." },
        { n: "III", k: "Production",   d: "Vendor selection, run-of-show, walkthroughs, contingency. We handle every line of the spreadsheet so you don't have to." },
        { n: "IV",  k: "The day",      d: "Two of us are in the room from 06:00 to last guest. You arrive, and stay, a guest." },
      ],
    },
    about: {
      eyebrow: "The studio",
      title: "Founded in Oslo, in 2018,\nby Jose and a small team.",
      body_1:
        "We started with one wedding in Frogner. Five years and 230 events " +
        "later we are still small — three planners, two production leads, a " +
        "handful of trusted vendors who feel like family.",
      body_2:
        "We work in Norwegian and English, and we love events that hold " +
        "more than one culture in the same room.",
      stat: [
        { n: "230+", k: "Events produced" },
        { n: "12",   k: "Countries represented" },
        { n: "98%",  k: "Repeat or referred" },
        { n: "06:00", k: "We arrive" },
      ],
    },
    booking: {
      eyebrow: "Plan your event",
      title: "Tell us about your day.",
      lede:
        "We respond within one working day with availability and a starting " +
        "estimate. No commitment until you've met us.",
    },
    footer: {
      addr: "Lakkegata 4, 0187 Oslo, Norway",
      hours: "Mon–Fri · 09:00–17:00 CET",
      ig: "@2104eventsbyjose",
      tel: "+47 948 25 661",
      email: "hello@2104events.no",
    },
  },

  NO: {
    nav: {
      work: "Arbeid", services: "Tjenester", about: "Om oss",
      journal: "Journal", contact: "Kontakt",
    },
    cta: "Planlegg ditt arrangement",
    hero: {
      eyebrow: "Oslo · Est. 2018",
      title_a: "Arrangementer komponeres,\nikke settes sammen.",
      title_b: "Din feiring,\nvåre stille hender.",
      title_c: "Fra en idé\ntil et minne.",
      lede:
        "Vi er et lite Oslo-studio som former intime bryllup, milepæler og " +
        "bedriftskvelder — for klienter som bryr seg om hvordan et rom føles " +
        "klokken 22:47.",
      meta: ["Bryllup", "Bedrift", "Milepæl", "Kulturell"],
    },
    services: {
      eyebrow: "Hva vi gjør",
      title: "En praksis i kunsten å samle.",
      items: [
        { n: "01", k: "Bryllup",     d: "Borgerlige seremonier, flerdagers kulturelle feiringer og intime elopements over hele Norge." },
        { n: "02", k: "Bedrift",     d: "Konferanser, ledelses-offsites, produktlanseringer og sesongbaserte personalmiddager." },
        { n: "03", k: "Milepæler",   d: "Bursdager, jubileer, dåp og konfirmasjoner — arrangementer som markerer kalenderen." },
        { n: "04", k: "Kulturell",   d: "Henna-kvelder, dohale jevan, navneseremonier og tradisjoner båret med omtanke." },
        { n: "05", k: "Produksjon",  d: "Lys, blomster, AV, catering og koreografi på dagen — vi tar det hele." },
        { n: "06", k: "Design",      d: "Bordoppdekninger, skilting og de små detaljene som gjør et rom komponert." },
      ],
    },
    work: { eyebrow: "Utvalgt arbeid", title: "Noen rom vi har formet.", view: "Se case" },
    process: {
      eyebrow: "Hvordan vi jobber",
      title: "Fire øyeblikk, fire samtaler.",
      steps: [
        { n: "I",   k: "Lytter",       d: "En kaffe, en lang samtale, ingen lysbildefremvisning." },
        { n: "II",  k: "Komposisjon",  d: "Vi kommer tilbake med et konsept, et budsjett og tre referanser." },
        { n: "III", k: "Produksjon",   d: "Leverandørvalg, kjøreplan, befaringer, beredskap." },
        { n: "IV",  k: "Dagen",        d: "To av oss er i rommet fra 06:00 til siste gjest." },
      ],
    },
    about: {
      eyebrow: "Studioet",
      title: "Grunnlagt i Oslo, i 2018,\nav Jose og et lite team.",
      body_1:
        "Vi startet med ett bryllup på Frogner. Fem år og 230 arrangementer " +
        "senere er vi fortsatt små — tre planleggere, to produksjonsledere, " +
        "en håndfull pålitelige leverandører som føles som familie.",
      body_2:
        "Vi jobber på norsk og engelsk, og vi elsker arrangementer som " +
        "holder mer enn én kultur i samme rom.",
      stat: [
        { n: "230+", k: "Arrangementer produsert" },
        { n: "12",   k: "Land representert" },
        { n: "98%",  k: "Gjentagende eller henvist" },
        { n: "06:00", k: "Vi ankommer" },
      ],
    },
    booking: {
      eyebrow: "Planlegg arrangement",
      title: "Fortell oss om dagen din.",
      lede:
        "Vi svarer innen én arbeidsdag med tilgjengelighet og et utgangspunkt " +
        "for estimat.",
    },
    footer: {
      addr: "Lakkegata 4, 0187 Oslo, Norge",
      hours: "Man–Fre · 09:00–17:00 CET",
      ig: "@2104eventsbyjose",
      tel: "+47 948 25 661",
      email: "hello@2104events.no",
    },
  },
} as const;
```

Page-specific copy that lives outside `COPY` (work items, services moments,
about principles, journal posts, contact channels) is documented in
`PAGES.md` — port those into separate exported constants
(`WORK_ITEMS`, `SERVICE_FLAVOR`, `PRINCIPLES`, `TEAM`, `JOURNAL_POSTS`,
`CHANNELS`) keyed by language the same way.
