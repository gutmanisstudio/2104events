// Shared utilities, copy, and primitives.

const COPY = {
  EN: {
    nav: { work: "Work", services: "Services", about: "About", journal: "Journal", contact: "Contact" },
    cta: "Plan your event",
    hero: {
      eyebrow: "Oslo · Est. 2018",
      title_a: "Events composed,\nnot assembled.",
      title_b: "Your celebration,\nour quiet hands.",
      title_c: "From an idea\nto a memory.",
      lede: "We are a small Oslo studio shaping intimate weddings, milestone gatherings and corporate evenings — for clients who care about the way a room feels at 22:47.",
      meta: ["Wedding", "Corporate", "Milestone", "Cultural"],
    },
    services: {
      eyebrow: "What we do",
      title: "A practice in the art of gathering.",
      items: [
        { n: "01", k: "Weddings", d: "Civil ceremonies, multi-day cultural celebrations, and intimate elopements across Norway." },
        { n: "02", k: "Corporate", d: "Conferences, leadership offsites, product launches and seasonal staff dinners." },
        { n: "03", k: "Milestones", d: "Birthdays, anniversaries, baptisms and confirmations — events that mark the calendar." },
        { n: "04", k: "Cultural", d: "Henna nights, dohale jevan, naming ceremonies and traditions held with care." },
        { n: "05", k: "Production", d: "Lighting, florals, AV, catering and on-the-night choreography we run end-to-end." },
        { n: "06", k: "Design", d: "Tablescapes, signage, wayfinding and the small details that make a room feel composed." },
      ],
    },
    work: {
      eyebrow: "Selected work",
      title: "A few rooms we've shaped.",
      view: "View case",
    },
    process: {
      eyebrow: "How we work",
      title: "Four moments, four conversations.",
      steps: [
        { n: "I", k: "Listening", d: "A coffee, a long conversation, no slide deck. We ask what the day should feel like — not what it should look like." },
        { n: "II", k: "Composition", d: "We return with a concept, a budget and three to four references. You revise; we revise. Then we lock." },
        { n: "III", k: "Production", d: "Vendor selection, run-of-show, walkthroughs, contingency. We handle every line of the spreadsheet so you don't have to." },
        { n: "IV", k: "The day", d: "Two of us are in the room from 06:00 to last guest. You arrive, and stay, a guest." },
      ],
    },
    about: {
      eyebrow: "The studio",
      title: "Founded in Oslo, in 2018,\nby Jose and a small team.",
      body_1: "We started with one wedding in Frogner. Five years and 230 events later we are still small — three planners, two production leads, a handful of trusted vendors who feel like family.",
      body_2: "We work in Norwegian and English, and we love events that hold more than one culture in the same room.",
      stat: [
        { n: "230+", k: "Events produced" },
        { n: "12", k: "Countries represented" },
        { n: "98%", k: "Repeat or referred" },
        { n: "06:00", k: "We arrive" },
      ],
    },
    booking: {
      eyebrow: "Plan your event",
      title: "Tell us about your day.",
      lede: "We respond within one working day with availability and a starting estimate. No commitment until you've met us.",
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
    nav: { work: "Arbeid", services: "Tjenester", about: "Om oss", journal: "Journal", contact: "Kontakt" },
    cta: "Planlegg ditt arrangement",
    hero: {
      eyebrow: "Oslo · Est. 2018",
      title_a: "Arrangementer komponeres,\nikke settes sammen.",
      title_b: "Din feiring,\nvåre stille hender.",
      title_c: "Fra en idé\ntil et minne.",
      lede: "Vi er et lite Oslo-studio som former intime bryllup, milepæler og bedriftskvelder — for klienter som bryr seg om hvordan et rom føles klokken 22:47.",
      meta: ["Bryllup", "Bedrift", "Milepæl", "Kulturell"],
    },
    services: {
      eyebrow: "Hva vi gjør",
      title: "En praksis i kunsten å samle.",
      items: [
        { n: "01", k: "Bryllup", d: "Borgerlige seremonier, flerdagers kulturelle feiringer og intime elopements over hele Norge." },
        { n: "02", k: "Bedrift", d: "Konferanser, ledelses-offsites, produktlanseringer og sesongbaserte personalmiddager." },
        { n: "03", k: "Milepæler", d: "Bursdager, jubileer, dåp og konfirmasjoner — arrangementer som markerer kalenderen." },
        { n: "04", k: "Kulturell", d: "Henna-kvelder, dohale jevan, navneseremonier og tradisjoner båret med omtanke." },
        { n: "05", k: "Produksjon", d: "Lys, blomster, AV, catering og koreografi på dagen — vi tar det hele." },
        { n: "06", k: "Design", d: "Bordoppdekninger, skilting og de små detaljene som gjør et rom komponert." },
      ],
    },
    work: { eyebrow: "Utvalgt arbeid", title: "Noen rom vi har formet.", view: "Se case" },
    process: {
      eyebrow: "Hvordan vi jobber",
      title: "Fire øyeblikk, fire samtaler.",
      steps: [
        { n: "I", k: "Lytter", d: "En kaffe, en lang samtale, ingen lysbildefremvisning." },
        { n: "II", k: "Komposisjon", d: "Vi kommer tilbake med et konsept, et budsjett og tre referanser." },
        { n: "III", k: "Produksjon", d: "Leverandørvalg, kjøreplan, befaringer, beredskap." },
        { n: "IV", k: "Dagen", d: "To av oss er i rommet fra 06:00 til siste gjest." },
      ],
    },
    about: {
      eyebrow: "Studioet",
      title: "Grunnlagt i Oslo, i 2018,\nav Jose og et lite team.",
      body_1: "Vi startet med ett bryllup på Frogner. Fem år og 230 arrangementer senere er vi fortsatt små — tre planleggere, to produksjonsledere, en håndfull pålitelige leverandører som føles som familie.",
      body_2: "Vi jobber på norsk og engelsk, og vi elsker arrangementer som holder mer enn én kultur i samme rom.",
      stat: [
        { n: "230+", k: "Arrangementer produsert" },
        { n: "12", k: "Land representert" },
        { n: "98%", k: "Gjentagende eller henvist" },
        { n: "06:00", k: "Vi ankommer" },
      ],
    },
    booking: {
      eyebrow: "Planlegg arrangement",
      title: "Fortell oss om dagen din.",
      lede: "Vi svarer innen én arbeidsdag med tilgjengelighet og et utgangspunkt for estimat.",
    },
    footer: {
      addr: "Lakkegata 4, 0187 Oslo, Norge",
      hours: "Man–Fre · 09:00–17:00 CET",
      ig: "@2104eventsbyjose",
      tel: "+47 948 25 661",
      email: "hello@2104events.no",
    },
  },
};

// Real media manifest — actual event photos & videos provided by the studio.
const MEDIA = {
  hero_video: 'media/weddingwhitegold.mp4',
  hero_video_2: 'media/whitewedding.mp4',
  hero_video_3: 'media/weddingpink.mp4',
  babyshower_1: 'media/babyshower1.jpg',
  babyshower_2: 'media/babyshower2.jpg',
  babyshower_3: 'media/babyshower3.jpg',
  babyshower_4: 'media/babyshower4.jpg',
  foodmenu: 'media/foodmenu.jpg',
};

// Caption strings for placeholders — mimic real event photo captions.
const PH = {
  hero: "OSLO · WEDDING · APR 2025 · 16:9",
  hero2: "FROGNER · CIVIL CEREMONY · 14:30",
  work_1: "FROGNER WEDDING · 220 GUESTS · MAY 2024",
  work_2: "EQT NORDIC LEADERSHIP DINNER · 80 GUESTS · OCT 2024",
  work_3: "DOHALE JEVAN · GRÜNERLØKKA · MAR 2025",
  work_4: "30TH BIRTHDAY · TJUVHOLMEN · JUN 2024",
  work_5: "KING & PALMTREE LIVE · OSLO · AUG 2025",
  work_6: "NEW YEAR'S EVE GALA · 2025/26",
  about_1: "JOSE, FOUNDER · STUDIO PORTRAIT",
  about_2: "STUDIO · LAKKEGATA 4",
  about_3: "ON THE NIGHT · BTS",
  detail_1: "TABLESCAPE DETAIL · IVORY LINEN",
  detail_2: "FLORAL — GARDEN ROSE & EUCALYPTUS",
  detail_3: "CALLIGRAPHY · MENU CARD",
  journal_1: "FIELD NOTES — A WINTER WEDDING IN BERGEN",
  journal_2: "ESSAY — ON THE 22:47 MOMENT",
  journal_3: "RECIPE — JOSE'S MULLED ALMOND",
};

// Fade-in on scroll using IntersectionObserver
function useReveal() {
  const ref = React.useRef(null);
  const [seen, setSeen] = React.useState(false);
  React.useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      (es) => {
        for (const e of es) if (e.isIntersecting) { setSeen(true); io.disconnect(); }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return [ref, seen];
}

function Reveal({ children, delay = 0, as: As = 'div', style, className, ...rest }) {
  const [ref, seen] = useReveal();
  return (
    <As ref={ref} className={className} {...rest}
      style={{
        ...style,
        opacity: seen ? 1 : 0,
        transform: seen ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity .9s cubic-bezier(.2,.7,.3,1) ${delay}ms, transform .9s cubic-bezier(.2,.7,.3,1) ${delay}ms`,
      }}>
      {children}
    </As>
  );
}

// Real media block — renders <img> or <video> if src given, else falls back to placeholder.
function Media({ src, video, poster, caption, ratio = '4 / 5', style, ...rest }) {
  if (video) {
    return (
      <div style={{ position: 'relative', aspectRatio: ratio, width: '100%', overflow: 'hidden', background: '#000', ...style }} {...rest}>
        <video src={video} poster={poster} autoPlay muted loop playsInline
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        {caption && (
          <div className="mono" style={{
            position: 'absolute', bottom: 12, left: 12, padding: '4px 8px',
            background: 'rgba(24,22,15,0.55)', color: '#FAF7F2', backdropFilter: 'blur(6px)',
            fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase',
          }}>{caption}</div>
        )}
      </div>
    );
  }
  if (src) {
    return (
      <div style={{ position: 'relative', aspectRatio: ratio, width: '100%', overflow: 'hidden', ...style }} {...rest}>
        <img src={src} alt={caption || ''} loading="lazy"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        {caption && (
          <div className="mono" style={{
            position: 'absolute', bottom: 12, left: 12, padding: '4px 8px',
            background: 'rgba(24,22,15,0.55)', color: '#FAF7F2', backdropFilter: 'blur(6px)',
            fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase',
          }}>{caption}</div>
        )}
      </div>
    );
  }
  return null;
}

// Image placeholder block — uses caption + monospace text.
function ImgPh({ caption, ratio = '4 / 5', style, hue = 0, src, video, poster, ...rest }) {
  if (src || video) return <Media src={src} video={video} poster={poster} caption={caption} ratio={ratio} style={style} {...rest} />;
  const tint = `linear-gradient(${160 + hue}deg, color-mix(in oklab, var(--accent) ${4 + (hue % 8)}%, var(--bg-2)) 0%, color-mix(in oklab, var(--accent) ${10 + (hue % 5)}%, var(--bg-2)) 100%)`;
  return (
    <div className="img-ph" data-caption={caption}
      style={{ aspectRatio: ratio, width: '100%', backgroundImage: `repeating-linear-gradient(135deg, rgba(107,88,64,0.08) 0, rgba(107,88,64,0.08) 1px, transparent 1px, transparent 7px), ${tint}`, ...style }}
      {...rest} />
  );
}

// Magnetic / subtle hover-lift wrapper for cards
function Lift({ children, ...rest }) {
  return (
    <div {...rest}
      style={{
        transition: 'transform .5s cubic-bezier(.2,.7,.3,1)',
        ...rest.style,
      }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}>
      {children}
    </div>
  );
}

// Custom cursor dot
function CursorDot() {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const move = (e) => {
      el.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
    };
    const over = (e) => {
      const t = e.target.closest('a, button, [data-hover]');
      el.classList.toggle('hover', !!t);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', over);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', over);
    };
  }, []);
  return <div ref={ref} className="cursor-dot" />;
}

// Section divider — thin rule with optional label
function SectionRule({ label }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16, paddingBlock: 24 }}>
      <div style={{ height: 1, flex: 1, background: 'var(--line-c)' }} />
      {label && <span className="mono" style={{ color: 'var(--fg-mute)' }}>{label}</span>}
      <div style={{ height: 1, flex: 1, background: 'var(--line-c)' }} />
    </div>
  );
}

Object.assign(window, { COPY, PH, MEDIA, useReveal, Reveal, ImgPh, Media, Lift, CursorDot, SectionRule });
