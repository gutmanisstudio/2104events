// Sub-pages: Work, Services, About, Journal, Contact — with soul.
// Shared scrapbook elements: stamp, polaroid, sticky note, squiggle, handwritten margin note.

function PageHeader({ eyebrow, title, lede, stamp }) {
  return (
    <section style={{ padding: '180px 24px 60px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto', position: 'relative' }}>
        <Reveal>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 40, flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: 320 }}>
              <div className="mono" style={{ color: 'var(--fg-mute)', marginBottom: 22, display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ width: 22, height: 1, background: 'var(--accent)' }} /> {eyebrow}
              </div>
              <h1 className="serif" style={{
                fontSize: 'clamp(56px, 8.4vw, 148px)', lineHeight: 0.92, margin: 0, fontWeight: 300,
                letterSpacing: '-0.045em', whiteSpace: 'pre-line',
              }}>
                {title}
              </h1>
              {lede && <p style={{ marginTop: 32, fontSize: 17, lineHeight: 1.6, color: 'var(--fg-soft)', maxWidth: 580 }}>{lede}</p>}
            </div>
            {stamp && (
              <div style={{
                transform: 'rotate(-6deg)', flexShrink: 0,
                border: '2px solid var(--accent)', color: 'var(--accent)',
                padding: '14px 18px', textAlign: 'center', fontFamily: "'JetBrains Mono', monospace",
                fontSize: 10, lineHeight: 1.4, letterSpacing: '0.12em',
                maxWidth: 220,
              }}>
                {stamp.map((line, i) => (
                  <div key={i} style={{ fontWeight: i === 0 ? 700 : 400, fontSize: i === stamp.length - 1 ? 8 : 10, opacity: i === stamp.length - 1 ? 0.7 : 1, marginTop: i === stamp.length - 1 ? 6 : 0 }}>{line}</div>
                ))}
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ---------- Polaroid component ---------- //
function Polaroid({ src, video, label, rotate = 0, width = 240, ratio = '4 / 5', style = {} }) {
  return (
    <div style={{
      position: 'relative', width, transform: `rotate(${rotate}deg)`,
      boxShadow: '0 14px 32px -10px rgba(0,0,0,0.22)',
      background: 'var(--bg)', padding: 8, paddingBottom: 32,
      ...style,
    }}>
      <Media src={src} video={video} ratio={ratio} style={{ width: '100%' }} />
      <div style={{
        position: 'absolute', top: -10, left: '50%', transform: 'translateX(-50%) rotate(-2deg)',
        width: 70, height: 16,
        background: 'rgba(220, 200, 150, 0.5)',
        borderLeft: '1px dashed rgba(0,0,0,0.1)',
        borderRight: '1px dashed rgba(0,0,0,0.1)',
      }} />
      {label && (
        <div className="serif" style={{
          position: 'absolute', bottom: 8, left: 0, right: 0, textAlign: 'center',
          fontSize: 12, fontStyle: 'italic', color: 'var(--fg-soft)',
        }}>{label}</div>
      )}
    </div>
  );
}

function StickyNote({ children, rotate = -3, color = '#FFF8E0', style = {} }) {
  return (
    <div style={{
      transform: `rotate(${rotate}deg)`,
      background: color, color: '#1A1814',
      padding: '12px 16px', boxShadow: '0 6px 20px -6px rgba(0,0,0,0.18)',
      border: '1px solid rgba(0,0,0,0.06)',
      ...style,
    }}>
      {children}
    </div>
  );
}

function HandNote({ children, rotate = -1.5 }) {
  return (
    <span className="serif" style={{
      display: 'inline-flex', alignItems: 'center', gap: 8,
      fontStyle: 'italic', color: 'var(--accent)', fontSize: 17,
      transform: `rotate(${rotate}deg)`,
    }}>
      <svg width="22" height="14" viewBox="0 0 22 14" fill="none">
        <path d="M2,12 Q8,2 14,8 T20,4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      {children}
    </span>
  );
}

// ===================== WORK ===================== //
function WorkPage({ lang }) {
  const items = [
    { src: MEDIA.babyshower_2, k: lang === 'EN' ? 'Baby B · A nursery in beige & cocoa' : 'Baby B · Beige & kakao', cat: lang === 'EN' ? 'Baby shower' : 'Babyshower', d: 'Mar 2025', size: 'lg', note: lang === 'EN' ? 'mum cried twice ♥' : 'mor gråt to ganger ♥', loc: 'Frogner' },
    { video: MEDIA.hero_video, k: lang === 'EN' ? 'White & gold reception' : 'Hvit & gull mottakelse', cat: lang === 'EN' ? 'Wedding' : 'Bryllup', d: 'Sep 2024', size: 'md', note: lang === 'EN' ? '180 guests, 1 dog' : '180 gjester, 1 hund', loc: 'Bygdøy' },
    { src: MEDIA.foodmenu, k: lang === 'EN' ? 'Labake at 50' : 'Labake fyller 50', cat: lang === 'EN' ? 'Milestone' : 'Milepæl', d: 'Feb 2025', size: 'sm', note: lang === 'EN' ? 'purple & gold ✦' : 'lilla & gull ✦', loc: 'Tjuvholmen' },
    { src: MEDIA.babyshower_1, k: lang === 'EN' ? 'A long ivory table' : 'Et langt elfenbensbord', cat: lang === 'EN' ? 'Baby shower' : 'Babyshower', d: 'Mar 2025', size: 'md', note: lang === 'EN' ? '36 chairs, 1 row' : '36 stoler, 1 rad', loc: 'Grünerløkka' },
    { video: MEDIA.hero_video_2, k: lang === 'EN' ? 'Civil ceremony, Frogner' : 'Borgerlig seremoni, Frogner', cat: lang === 'EN' ? 'Wedding' : 'Bryllup', d: 'Jun 2024', size: 'lg', note: lang === 'EN' ? 'rain plan worked' : 'regnplan virket', loc: 'Frogner' },
    { src: MEDIA.babyshower_3, k: lang === 'EN' ? 'Balloon wall study' : 'Ballongvegg', cat: lang === 'EN' ? 'Baby shower' : 'Babyshower', d: 'Mar 2025', size: 'sm', note: lang === 'EN' ? '412 balloons' : '412 ballonger', loc: 'St. Hanshaugen' },
    { src: MEDIA.babyshower_4, k: lang === 'EN' ? 'Dessert pedestals' : 'Dessertpidestaller', cat: lang === 'EN' ? 'Baby shower' : 'Babyshower', d: 'Mar 2025', size: 'md', note: lang === 'EN' ? 'cake won, again' : 'kaken vant igjen', loc: 'Majorstuen' },
    { video: MEDIA.hero_video_3, k: lang === 'EN' ? 'Pink reception · floral' : 'Rosa mottakelse · blomster', cat: lang === 'EN' ? 'Wedding' : 'Bryllup', d: 'Aug 2024', size: 'lg', note: lang === 'EN' ? '2,400 stems' : '2 400 stilker', loc: 'Holmenkollen' },
  ];

  const filters = lang === 'EN' ? ['All', 'Wedding', 'Baby shower', 'Milestone', 'Corporate'] : ['Alle', 'Bryllup', 'Babyshower', 'Milepæl', 'Bedrift'];
  const [active, setActive] = React.useState(0);

  return (
    <div>
      <PageHeader
        eyebrow={lang === 'EN' ? 'Selected work · 2018–2026' : 'Utvalgt arbeid · 2018–2026'}
        title={lang === 'EN' ? 'Rooms\nwe’ve shaped.' : 'Rom\nvi har formet.'}
        lede={lang === 'EN' ? '230+ events. Below, a curated handful — from intimate baby showers to multi-day cultural celebrations.' : '230+ arrangementer. Et utvalg under.'}
        stamp={['230+ EVENTS', 'NORWAY · WORLDWIDE', 'EST. 2018', 'ARCHIVED WITH LOVE']} />

      {/* Filters */}
      <section style={{ padding: '0 24px 40px' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto' }}>
          <div style={{
            display: 'flex', gap: 8, flexWrap: 'wrap',
            borderTop: '1.5px solid var(--fg)', borderBottom: '1px solid var(--line-c)',
            padding: '20px 0',
          }}>
            <span className="mono" style={{ color: 'var(--fg-mute)', alignSelf: 'center', marginRight: 12 }}>
              {lang === 'EN' ? 'BROWSE BY' : 'BLA ETTER'}
            </span>
            {filters.map((f, i) => (
              <button key={f} onClick={() => setActive(i)} data-hover
                style={{
                  padding: '8px 16px', borderRadius: 999,
                  border: '1px solid', borderColor: active === i ? 'var(--fg)' : 'var(--line-c)',
                  background: active === i ? 'var(--fg)' : 'transparent', color: active === i ? 'var(--bg)' : 'var(--fg)',
                  cursor: 'pointer', fontSize: 13, fontWeight: 500,
                  transform: active === i ? 'rotate(-1deg)' : 'none',
                }}>{f}</button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid with notes & sticky details */}
      <section style={{ padding: '0 24px 100px' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 28 }}>
          {items.map((it, i) => {
            const span = it.size === 'lg' ? 8 : it.size === 'md' ? 6 : 4;
            const ratio = it.size === 'lg' ? '4 / 3' : it.size === 'md' ? '3 / 4' : '1 / 1';
            const tilt = (i % 3 - 1) * 0.6;
            return (
              <Reveal key={i} delay={(i % 3) * 60} style={{ gridColumn: `span ${span}` }}>
                <div data-hover style={{ cursor: 'pointer', position: 'relative', transform: `rotate(${tilt}deg)`, transition: 'transform .4s' }}>
                  <Media src={it.src} video={it.video} caption={it.k} ratio={ratio} />
                  {/* Floating note tag */}
                  <div style={{
                    position: 'absolute', top: 12, right: 12,
                    padding: '6px 10px', background: 'var(--bg)', color: 'var(--fg)',
                    border: '1.5px solid var(--fg)', transform: `rotate(${i % 2 ? 3 : -3}deg)`,
                  }}>
                    <span className="mono" style={{ fontWeight: 600 }}>{it.loc.toUpperCase()}</span>
                  </div>
                  <div style={{ padding: '20px 4px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 }}>
                    <div style={{ flex: 1 }}>
                      <div className="mono" style={{ color: 'var(--accent)', marginBottom: 6 }}>№ {String(i + 1).padStart(3, '0')} · {it.cat} · {it.d}</div>
                      <h3 className="serif" style={{ fontSize: it.size === 'lg' ? 28 : 22, fontWeight: 400, margin: 0, letterSpacing: '-0.02em' }}>{it.k}</h3>
                      <div style={{ marginTop: 12 }}>
                        <HandNote rotate={i % 2 ? 1 : -1}>{it.note}</HandNote>
                      </div>
                    </div>
                    <span style={{ fontSize: 18, color: 'var(--fg-mute)' }}>↗</span>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>
    </div>
  );
}

// ===================== SERVICES (page) ===================== //
function ServicesPage({ lang, copy, setPage }) {
  const flavor = [
    { img: MEDIA.babyshower_3, note: lang === 'EN' ? 'we cried at this one ♥' : 'vi gråt på denne ♥', moment: lang === 'EN' ? '“The dance floor stayed full till 03:42.”' : '«Dansegulvet var fullt til 03:42.»' },
    { img: MEDIA.foodmenu, note: lang === 'EN' ? 'pls no more PowerPoint' : 'ikke mer PowerPoint takk', moment: lang === 'EN' ? '“CFO did karaoke. We have it on tape.”' : '«CFO sang karaoke. Vi har det på film.»' },
    { img: MEDIA.babyshower_4, note: lang === 'EN' ? 'cake at midnight rule' : 'kake-ved-midnatt', moment: lang === 'EN' ? '“Grandma led the room in song.”' : '«Bestemoren ledet hele rommet i sang.»' },
    { img: MEDIA.babyshower_1, note: lang === 'EN' ? 'henna runs late' : 'henna går sent', moment: lang === 'EN' ? '“Three new languages that night.”' : '«Tre nye språk den kvelden.»' },
    { img: MEDIA.babyshower_2, note: lang === 'EN' ? 'rain plan? always' : 'regnplan? alltid', moment: lang === 'EN' ? '“Candles stayed lit. Don’t ask.”' : '«Lysene holdt seg tente.»' },
    { img: MEDIA.foodmenu, note: lang === 'EN' ? 'small details, big feels' : 'små detaljer, store følelser', moment: lang === 'EN' ? '“Napkins had names on them.”' : '«Servietter med navn.»' },
  ];

  return (
    <div>
      <PageHeader
        eyebrow={copy.services.eyebrow}
        title={lang === 'EN' ? 'Six ways\nwe throw\na great party.' : 'Seks måter\nvi lager\net godt selskap.'}
        lede={lang === 'EN' ? 'We work end-to-end — first coffee to last guest. Pick what you need; we’ll quietly handle the rest.' : 'Fra første kaffe til siste gjest.'}
        stamp={['NO. TWO OF US', 'IN THE ROOM AT', 'EVERY EVENT', '— ALWAYS']} />

      <section style={{ padding: '0 24px 100px' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto', borderTop: '1.5px solid var(--fg)' }}>
          {copy.services.items.map((it, i) => {
            const f = flavor[i] || flavor[0];
            const reverse = i % 2 === 1;
            return (
              <Reveal key={i}>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '120px 1.4fr 1fr 240px',
                  gap: 32, alignItems: 'center',
                  padding: '40px 0', borderBottom: '1px solid var(--line-c)',
                  position: 'relative',
                }}>
                  <div style={{ position: 'relative' }}>
                    <div className="serif" style={{ fontSize: 64, lineHeight: 1, fontWeight: 300, fontStyle: 'italic', color: 'var(--accent)', letterSpacing: '-0.03em' }}>{it.n}</div>
                  </div>
                  <div>
                    <h2 className="serif" style={{ fontSize: 'clamp(32px, 3.6vw, 56px)', fontWeight: 400, margin: 0, letterSpacing: '-0.025em', lineHeight: 1 }}>{it.k}</h2>
                    <p style={{ fontSize: 16, lineHeight: 1.6, color: 'var(--fg-soft)', margin: '14px 0 0', maxWidth: 460 }}>{it.d}</p>
                    <div style={{ marginTop: 18, display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
                      <HandNote rotate={reverse ? 1.5 : -1.5}>{f.note}</HandNote>
                      <button onClick={() => setPage('contact')} data-hover
                        style={{
                          padding: 0, background: 'transparent', border: 'none', cursor: 'pointer',
                          borderBottom: '1px solid var(--fg)', color: 'var(--fg)', fontSize: 13, paddingBottom: 4,
                        }}>{lang === 'EN' ? 'Enquire about this →' : 'Spør om dette →'}</button>
                    </div>
                  </div>
                  <div className="serif" style={{
                    fontSize: 18, lineHeight: 1.5, fontStyle: 'italic',
                    color: 'var(--fg)', borderLeft: '2px solid var(--accent)',
                    paddingLeft: 18, maxWidth: 320,
                  }}>
                    {f.moment}
                  </div>
                  <div style={{ justifySelf: 'end' }}>
                    <Polaroid src={f.img} width={200} rotate={reverse ? -3 : 3} label={it.k} />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>
    </div>
  );
}

// ===================== ABOUT ===================== //
function AboutPage({ lang, copy }) {
  const team = [
    { src: MEDIA.babyshower_2, n: 'Jose Ade', r: lang === 'EN' ? 'Founder · Lead planner' : 'Grunnlegger · Hovedplanlegger', q: lang === 'EN' ? '“If a guest notices the planning, we’ve failed.”' : '«Hvis en gjest legger merke til planleggingen, har vi mislyktes.»', tag: lang === 'EN' ? 'team grandma calls' : 'mormor ringer Jose' },
    { src: MEDIA.babyshower_3, n: 'Marit Holm', r: lang === 'EN' ? 'Production lead' : 'Produksjonsleder', q: lang === 'EN' ? '“Spreadsheet whisperer. Holds the run-of-show.”' : '«Regnearkets hvisker.»', tag: lang === 'EN' ? 'never panics' : 'panikk = aldri' },
    { src: MEDIA.babyshower_4, n: 'Aanya R.', r: lang === 'EN' ? 'Cultural events specialist' : 'Spesialist, kulturelle arrangementer', q: lang === 'EN' ? '“Henna timing is a science. Trust me.”' : '«Henna-timing er en vitenskap.»', tag: lang === 'EN' ? 'speaks 4 languages' : 'snakker 4 språk' },
  ];

  const principles = [
    { k: lang === 'EN' ? 'Two of us. Always.' : 'To av oss. Alltid.', d: lang === 'EN' ? 'No subcontracted day-of leads. The people you meet are the people in the room.' : 'Aldri subkontrakt på dagen. Dem du møter er dem i rommet.' },
    { k: lang === 'EN' ? 'We invent nothing.' : 'Vi finner ikke opp noe.', d: lang === 'EN' ? 'Your event isn’t our portfolio piece. We’re here to host *yours*, not stage ours.' : 'Ditt arrangement er ikke vår portefølje.' },
    { k: lang === 'EN' ? 'The 22:47 rule.' : '22:47-regelen.', d: lang === 'EN' ? 'Most events tip at the same moment. We staff and plan around it, every time.' : 'De fleste arrangementer vipper på samme øyeblikk. Vi planlegger rundt det.' },
  ];

  return (
    <div>
      <PageHeader
        eyebrow={copy.about.eyebrow}
        title={lang === 'EN' ? 'A small studio,\nin Oslo,\nsince 2018.' : 'Et lite studio,\ni Oslo,\nsiden 2018.'}
        lede={copy.about.body_1}
        stamp={['SMALL ON PURPOSE', 'OSLO · NORWAY', '3 PLANNERS', '2 PRODUCTION LEADS']} />

      {/* Story spread */}
      <section style={{ padding: '40px 24px 100px' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'flex-start', position: 'relative' }}>
          <div style={{ position: 'relative' }}>
            <Polaroid src={MEDIA.babyshower_1} width={460} ratio="4 / 5" rotate={-2} label={lang === 'EN' ? 'studio · 2024' : 'studio · 2024'} />
            <StickyNote rotate={5} style={{ position: 'absolute', bottom: -30, right: -10, maxWidth: 200 }}>
              <div className="mono" style={{ fontSize: 9, color: '#7A6A4A', letterSpacing: '0.12em' }}>FROM JOSE</div>
              <div className="serif" style={{ fontSize: 16, fontStyle: 'italic', marginTop: 4, lineHeight: 1.4 }}>
                {lang === 'EN' ? 'started w/ one wedding. now we’re still small. on purpose. ✦' : 'startet med ett bryllup. fortsatt små. med vilje. ✦'}
              </div>
            </StickyNote>
          </div>
          <div style={{ paddingTop: 40 }}>
            <p style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--fg)', margin: 0 }}>{copy.about.body_2}</p>

            {/* Principles */}
            <div style={{ marginTop: 48 }}>
              <div className="mono" style={{ color: 'var(--fg-mute)', marginBottom: 20 }}>— {lang === 'EN' ? 'THREE THINGS WE BELIEVE' : 'TRE TING VI TROR PÅ'}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                {principles.map((p, i) => (
                  <div key={i} style={{ display: 'grid', gridTemplateColumns: '36px 1fr', gap: 16, paddingTop: 16, borderTop: '1px solid var(--line-c)' }}>
                    <div className="serif" style={{ fontSize: 24, fontStyle: 'italic', color: 'var(--accent)' }}>{['I', 'II', 'III'][i]}</div>
                    <div>
                      <h3 className="serif" style={{ fontSize: 22, fontWeight: 400, margin: 0, letterSpacing: '-0.015em' }}>{p.k}</h3>
                      <p style={{ fontSize: 14, lineHeight: 1.55, color: 'var(--fg-soft)', margin: '8px 0 0' }}>{p.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div style={{ marginTop: 48, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
              {copy.about.stat.map((s, i) => (
                <div key={i} style={{ borderTop: '1.5px solid var(--fg)', paddingTop: 16 }}>
                  <div className="serif" style={{ fontSize: 56, fontWeight: 300, letterSpacing: '-0.025em', lineHeight: 1 }}>{s.n}</div>
                  <div className="mono" style={{ color: 'var(--fg-mute)', marginTop: 8 }}>{s.k}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team — polaroid wall */}
      <section style={{ padding: '40px 24px 120px', background: 'var(--bg-2)' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 60, flexWrap: 'wrap', gap: 24 }}>
            <h2 className="serif" style={{ fontSize: 'clamp(40px, 5.4vw, 80px)', fontWeight: 300, margin: 0, letterSpacing: '-0.035em', lineHeight: 1 }}>
              {lang === 'EN' ? 'The people' : 'Menneskene'} <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>{lang === 'EN' ? 'in the room.' : 'i rommet.'}</em>
            </h2>
            <span className="mono" style={{ color: 'var(--fg-soft)' }}>{lang === 'EN' ? '+ TRUSTED VENDORS · FAMILY' : '+ BETRODDE LEVERANDØRER'}</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 40 }}>
            {team.map((t, i) => (
              <Reveal key={i} delay={i * 80}>
                <div style={{ position: 'relative', paddingTop: 16 }}>
                  <Polaroid src={t.src} width="100%" ratio="3 / 4" rotate={[(-2), 1.5, -1][i]} label={t.n} />
                  <StickyNote rotate={i % 2 ? -4 : 4} style={{ position: 'absolute', top: -16, right: i % 2 ? 'auto' : 12, left: i % 2 ? 12 : 'auto', maxWidth: 160 }}>
                    <div className="serif" style={{ fontSize: 13, fontStyle: 'italic' }}>{t.tag}</div>
                  </StickyNote>
                  <div style={{ paddingTop: 24 }}>
                    <div style={{ fontSize: 13, color: 'var(--fg-soft)', marginBottom: 10 }}>{t.r}</div>
                    <p className="serif" style={{ fontSize: 17, fontStyle: 'italic', color: 'var(--fg)', margin: 0, lineHeight: 1.4, borderLeft: '2px solid var(--accent)', paddingLeft: 14 }}>
                      {t.q}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// ===================== JOURNAL ===================== //
function JournalPage({ lang }) {
  const posts = [
    { src: MEDIA.babyshower_2, t: lang === 'EN' ? 'Field notes — A winter wedding in Bergen' : 'Feltnotater — Et vinterbryllup i Bergen', d: 'Apr 2026', r: '6 min', tag: lang === 'EN' ? 'STAFF FAVOURITE' : 'PERSONAL FAVORITT' },
    { src: MEDIA.foodmenu, t: lang === 'EN' ? 'On the 22:47 moment' : 'Om 22:47-øyeblikket', d: 'Mar 2026', r: '4 min', tag: 'ESSAY' },
    { src: MEDIA.babyshower_3, t: lang === 'EN' ? 'Holding two cultures in one room' : 'To kulturer i samme rom', d: 'Feb 2026', r: '8 min', tag: lang === 'EN' ? 'LONG READ' : 'LANG LESNING' },
    { src: MEDIA.babyshower_4, t: lang === 'EN' ? 'A short defense of the seating chart' : 'Et kort forsvar av bordkartet', d: 'Jan 2026', r: '3 min', tag: 'OPINION' },
    { src: MEDIA.babyshower_1, t: lang === 'EN' ? 'Vendors we love (and why)' : 'Leverandører vi elsker', d: 'Dec 2025', r: '5 min', tag: lang === 'EN' ? 'GUIDE' : 'GUIDE' },
  ];
  return (
    <div>
      <PageHeader
        eyebrow={lang === 'EN' ? 'Journal · Field notes' : 'Journal · Feltnotater'}
        title={lang === 'EN' ? 'Notes\nfrom the\nroom.' : 'Notater\nfra\nrommet.'}
        lede={lang === 'EN' ? 'Essays, recipes, vendor recommendations and the occasional unsolicited opinion.' : 'Essays, oppskrifter og noen meninger.'}
        stamp={['12 ESSAYS', 'WRITTEN AT 02:00', 'AFTER THE LAST', 'GUEST LEAVES']} />

      {/* Featured post */}
      <section style={{ padding: '0 24px 60px' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto', borderTop: '1.5px solid var(--fg)', paddingTop: 32 }}>
          <Reveal>
            <a href="#" data-hover style={{
              display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 60, alignItems: 'center',
              textDecoration: 'none', color: 'inherit', position: 'relative',
            }}>
              <div style={{ position: 'relative' }}>
                <Media src={posts[0].src} ratio="4 / 3" />
                <div style={{
                  position: 'absolute', top: 16, left: 16,
                  padding: '6px 10px', background: 'var(--accent)', color: 'var(--bg)',
                  transform: 'rotate(-3deg)',
                }}>
                  <span className="mono" style={{ fontWeight: 600 }}>{posts[0].tag}</span>
                </div>
              </div>
              <div>
                <div className="mono" style={{ color: 'var(--fg-mute)', marginBottom: 16 }}>{posts[0].d} · {posts[0].r}</div>
                <h2 className="serif" style={{ fontSize: 'clamp(36px, 4.4vw, 64px)', fontWeight: 300, margin: 0, letterSpacing: '-0.03em', lineHeight: 1.05 }}>{posts[0].t}</h2>
                <p style={{ marginTop: 24, fontSize: 16, lineHeight: 1.6, color: 'var(--fg-soft)' }}>
                  {lang === 'EN' ? 'Snow. A late ferry. A bride who lost her bouquet to a gust of wind. What we did about it, and what we’ll never do again.' : 'Snø. Sen ferge. En brud som mistet bukett til vinden. Hva vi gjorde, og hva vi aldri vil gjøre igjen.'}
                </p>
                <div style={{ marginTop: 24, display: 'inline-block', borderBottom: '1px solid var(--fg)', paddingBottom: 4 }}>
                  {lang === 'EN' ? 'Read essay →' : 'Les essay →'}
                </div>
              </div>
            </a>
          </Reveal>
        </div>
      </section>

      {/* Rest — index list */}
      <section style={{ padding: '40px 24px 120px' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto' }}>
          <div className="mono" style={{ color: 'var(--fg-mute)', marginBottom: 20 }}>— {lang === 'EN' ? 'THE ARCHIVE' : 'ARKIVET'}</div>
          <div style={{ borderTop: '1.5px solid var(--fg)' }}>
            {posts.slice(1).map((p, i) => (
              <Reveal key={i} delay={i * 40}>
                <a href="#" data-hover style={{
                  display: 'grid', gridTemplateColumns: '60px 80px 1fr auto 60px', gap: 24, alignItems: 'center',
                  padding: '28px 0', borderBottom: '1px solid var(--line-c)',
                  textDecoration: 'none', color: 'inherit',
                }}>
                  <span className="mono" style={{ color: 'var(--accent)' }}>№ {String(i + 2).padStart(2, '0')}</span>
                  <div style={{ width: 80, aspectRatio: '1', overflow: 'hidden' }}>
                    <Media src={p.src} ratio="1 / 1" />
                  </div>
                  <div>
                    <h3 className="serif" style={{ fontSize: 24, fontWeight: 400, margin: 0, letterSpacing: '-0.015em' }}>{p.t}</h3>
                    <div className="mono" style={{ color: 'var(--fg-mute)', marginTop: 8 }}>{p.tag} · {p.d} · {p.r}</div>
                  </div>
                  <span style={{ fontSize: 18, color: 'var(--fg-mute)' }}>↗</span>
                  <span></span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// ===================== CONTACT ===================== //
function ContactPage({ lang, copy, bookingVariant }) {
  const channels = [
    { l: lang === 'EN' ? 'WhatsApp' : 'WhatsApp', v: '+47 948 25 661', tag: lang === 'EN' ? 'fastest · usually 1hr' : 'raskest · vanligvis 1t', icon: '✆' },
    { l: 'Email', v: 'studio@2104events.no', tag: lang === 'EN' ? 'we read everything' : 'vi leser alt', icon: '✉' },
    { l: 'Instagram', v: '@2104eventsbyjose', tag: lang === 'EN' ? 'DMs welcome' : 'DM-er velkommen', icon: '◎' },
  ];

  return (
    <div>
      <PageHeader
        eyebrow={copy.booking.eyebrow}
        title={lang === 'EN' ? 'Tell us\nabout your\nday.' : 'Fortell oss\nom dagen\ndin.'}
        lede={copy.booking.lede}
        stamp={['REPLY < 24H', 'OSLO · 09:00–18:00', 'WE QUOTE FAST', '— PROMISE']} />

      {/* Channels — sticky note style */}
      <section style={{ padding: '0 24px 60px' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto', borderTop: '1.5px solid var(--fg)', paddingTop: 40 }}>
          <div className="mono" style={{ color: 'var(--fg-mute)', marginBottom: 24 }}>— {lang === 'EN' ? 'PICK YOUR CHANNEL' : 'VELG KANAL'}</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {channels.map((c, i) => (
              <Reveal key={i} delay={i * 80}>
                <a href="#" data-hover style={{
                  display: 'block', padding: '28px',
                  background: i === 0 ? 'var(--accent)' : i === 1 ? 'var(--fg)' : 'var(--bg-2)',
                  color: i === 0 || i === 1 ? 'var(--bg)' : 'var(--fg)',
                  textDecoration: 'none', position: 'relative', minHeight: 200,
                  transform: `rotate(${[(-1), 1, (-0.5)][i]}deg)`,
                  boxShadow: '0 14px 32px -10px rgba(0,0,0,0.18)',
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 32 }}>
                    <span className="mono" style={{ fontWeight: 600, opacity: 0.7 }}>{c.l.toUpperCase()}</span>
                    <span style={{ fontSize: 28, opacity: 0.4 }}>{c.icon}</span>
                  </div>
                  <div className="serif" style={{ fontSize: 28, fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: 16 }}>{c.v}</div>
                  <div className="serif" style={{ fontSize: 14, fontStyle: 'italic', opacity: 0.75 }}>↳ {c.tag}</div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Booking form */}
      <BookingSection variant={bookingVariant} lang={lang} copy={copy} />

      {/* Studio details — postcard style */}
      <section style={{ padding: '40px 24px 120px' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto' }}>
          <Reveal>
            <div style={{
              display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 0,
              border: '1.5px solid var(--fg)',
            }}>
              <div style={{ padding: '40px', borderRight: '1.5px dashed var(--fg)' }}>
                <div className="mono" style={{ color: 'var(--fg-mute)', marginBottom: 20 }}>— {lang === 'EN' ? 'THE STUDIO' : 'STUDIOET'}</div>
                <h3 className="serif" style={{ fontSize: 36, fontWeight: 400, margin: 0, letterSpacing: '-0.025em', lineHeight: 1.05 }}>
                  {lang === 'EN' ? 'Come by for a coffee.' : 'Stikk innom for en kaffe.'}<br/>
                  <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>{lang === 'EN' ? 'No appointment needed.' : 'Ingen avtale nødvendig.'}</em>
                </h3>
                <div style={{ marginTop: 32, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
                  {[
                    { l: lang === 'EN' ? 'Address' : 'Adresse', v: copy.footer.addr },
                    { l: lang === 'EN' ? 'Hours' : 'Åpningstider', v: copy.footer.hours },
                    { l: lang === 'EN' ? 'Phone' : 'Telefon', v: copy.footer.tel },
                    { l: 'Email', v: copy.footer.email },
                  ].map((c, i) => (
                    <div key={i}>
                      <div className="mono" style={{ color: 'var(--fg-mute)', marginBottom: 6 }}>{c.l}</div>
                      <div style={{ fontSize: 15, color: 'var(--fg)' }}>{c.v}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ position: 'relative', minHeight: 360, background: 'var(--bg-2)' }}>
                {/* Stylised map dot */}
                <Media src={MEDIA.babyshower_2} ratio="auto" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', filter: 'grayscale(0.4) contrast(0.95)' }} />
                <div style={{
                  position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                  width: 16, height: 16, borderRadius: 999, background: 'var(--accent)',
                  boxShadow: '0 0 0 8px color-mix(in oklab, var(--accent) 30%, transparent)',
                }} />
                <div style={{
                  position: 'absolute', bottom: 16, left: 16,
                  padding: '8px 12px', background: 'var(--bg)', color: 'var(--fg)',
                  border: '1.5px solid var(--fg)',
                }}>
                  <span className="mono" style={{ fontWeight: 600 }}>LAKKEGATA 4 · 0187 OSLO</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { WorkPage, ServicesPage, AboutPage, JournalPage, ContactPage, PageHeader, Polaroid, StickyNote, HandNote });
