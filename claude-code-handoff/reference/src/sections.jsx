// Mid-page sections: services, work showcase, process, about, journal, marquee-of-detail (no marquee — instead, scroll-driven horizontal scrub).

// Services — what we do, with soul. Personal anecdotes, handwritten asides, photo decals.
function Services({ copy, lang }) {
  const items = copy.services.items;

  // Per-row flavor: photo decal, handwritten note, small icon hint, signature moment
  const flavor = [
    {
      img: MEDIA.babyshower_3,
      note: lang === 'EN' ? 'we cried at this one' : 'vi gråt på denne',
      moment: lang === 'EN' ? '“The dance floor stayed full till 03:42.”' : '«Dansegulvet var fullt til 03:42.»',
      mark: '♥',
    },
    {
      img: MEDIA.foodmenu,
      note: lang === 'EN' ? 'pls no more PowerPoint' : 'ikke mer PowerPoint takk',
      moment: lang === 'EN' ? '“CFO did karaoke. We have it on tape.”' : '«CFO sang karaoke. Vi har det på film.»',
      mark: '✦',
    },
    {
      img: MEDIA.babyshower_4,
      note: lang === 'EN' ? 'cake at midnight rule' : 'kake-ved-midnatt-regelen',
      moment: lang === 'EN' ? '“His grandma led the whole room in song.”' : '«Bestemoren ledet hele rommet i sang.»',
      mark: '✿',
    },
    {
      img: MEDIA.babyshower_1,
      note: lang === 'EN' ? 'henna runs late, always' : 'henna går alltid sent',
      moment: lang === 'EN' ? '“We learned three new languages that night.”' : '«Vi lærte tre nye språk den kvelden.»',
      mark: '✺',
    },
    {
      img: MEDIA.babyshower_2,
      note: lang === 'EN' ? 'rain plan? always' : 'regnplan? alltid',
      moment: lang === 'EN' ? '“The candles stayed lit. Don’t ask how.”' : '«Lysene holdt seg tente. Ikke spør oss hvordan.»',
      mark: '✸',
    },
    {
      img: MEDIA.foodmenu,
      note: lang === 'EN' ? 'small details, big feels' : 'små detaljer, store følelser',
      moment: lang === 'EN' ? '“The napkin folds had names on them.”' : '«Servietter med navn på.»',
      mark: '✧',
    },
  ];

  return (
    <section id="services" style={{ padding: '160px 24px 100px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>

        {/* Header */}
        <Reveal>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 60, gap: 40, flexWrap: 'wrap', position: 'relative' }}>
            <div style={{ position: 'relative' }}>
              <div className="mono" style={{ color: 'var(--fg-mute)', marginBottom: 18, display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ width: 22, height: 1, background: 'var(--accent)' }} /> {copy.services.eyebrow}
              </div>
              <h2 className="serif" style={{ fontSize: 'clamp(48px, 6.4vw, 104px)', lineHeight: 0.96, margin: 0, fontWeight: 300, letterSpacing: '-0.04em', maxWidth: 880 }}>
                {lang === 'EN' ? 'Six ways' : 'Seks måter'} <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>{lang === 'EN' ? 'we throw a' : 'vi lager et'}</em><br/>
                {lang === 'EN' ? 'great party.' : 'godt selskap.'}
              </h2>
            </div>
            {/* Stamp */}
            <div style={{
              transform: 'rotate(-8deg)',
              border: '2px solid var(--accent)', color: 'var(--accent)',
              padding: '14px 18px', textAlign: 'center', fontFamily: "'JetBrains Mono', monospace",
              fontSize: 10, lineHeight: 1.4, letterSpacing: '0.12em',
              boxShadow: 'inset 0 0 0 1px var(--bg)',
              maxWidth: 200,
            }}>
              <div style={{ fontWeight: 700 }}>NO. TWO OF US</div>
              <div>IN THE ROOM AT</div>
              <div>EVERY EVENT.</div>
              <div style={{ marginTop: 6, fontSize: 8, opacity: 0.7 }}>— ALWAYS</div>
            </div>
          </div>
        </Reveal>

        {/* Item rows */}
        <div style={{ borderTop: '1.5px solid var(--fg)' }}>
          {items.map((it, i) => {
            const f = flavor[i] || flavor[0];
            const reverse = i % 2 === 1;
            return (
              <Reveal key={it.n} delay={i * 40}>
                <div className="svc-row" style={{
                  display: 'grid',
                  gridTemplateColumns: reverse
                    ? '120px 1fr 1.4fr 280px'
                    : '120px 1.4fr 1fr 280px',
                  gap: 32, alignItems: 'center',
                  padding: '36px 0',
                  borderBottom: '1px solid var(--line-c)',
                  position: 'relative',
                  cursor: 'pointer',
                }}>
                  {/* Number + mark */}
                  <div style={{ position: 'relative' }}>
                    <div className="serif" style={{ fontSize: 56, lineHeight: 1, fontWeight: 300, letterSpacing: '-0.03em' }}>{it.n}</div>
                    <span className="serif" style={{
                      position: 'absolute', top: -8, right: 0,
                      fontSize: 22, color: 'var(--accent)', transform: `rotate(${i * 7 - 10}deg)`,
                    }}>{f.mark}</span>
                  </div>

                  {/* Title + description (or photo, depending on row direction) */}
                  {!reverse ? (
                    <>
                      <div>
                        <h3 className="serif" style={{ fontSize: 'clamp(32px, 3.4vw, 52px)', lineHeight: 1, margin: 0, fontWeight: 400, letterSpacing: '-0.025em' }}>
                          {it.k}
                        </h3>
                        <p style={{ fontSize: 15, lineHeight: 1.55, color: 'var(--fg-soft)', margin: '14px 0 0', maxWidth: 440 }}>{it.d}</p>
                        {/* Handwritten margin note */}
                        <div className="serif" style={{
                          marginTop: 18, fontStyle: 'italic', color: 'var(--accent)',
                          display: 'inline-flex', alignItems: 'center', gap: 8,
                          transform: 'rotate(-1.5deg)', fontSize: 17,
                        }}>
                          <svg width="22" height="14" viewBox="0 0 22 14" fill="none">
                            <path d="M2,12 Q8,2 14,8 T20,4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                          </svg>
                          {f.note}
                        </div>
                      </div>
                      <div style={{ position: 'relative' }}>
                        <div className="serif" style={{
                          fontSize: 18, lineHeight: 1.5, fontStyle: 'italic',
                          color: 'var(--fg)', borderLeft: '2px solid var(--accent)',
                          paddingLeft: 18, maxWidth: 360,
                        }}>
                          {f.moment}
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div style={{ position: 'relative' }}>
                        <div className="serif" style={{
                          fontSize: 18, lineHeight: 1.5, fontStyle: 'italic',
                          color: 'var(--fg)', borderLeft: '2px solid var(--accent)',
                          paddingLeft: 18, maxWidth: 360,
                        }}>
                          {f.moment}
                        </div>
                      </div>
                      <div>
                        <h3 className="serif" style={{ fontSize: 'clamp(32px, 3.4vw, 52px)', lineHeight: 1, margin: 0, fontWeight: 400, letterSpacing: '-0.025em' }}>
                          {it.k}
                        </h3>
                        <p style={{ fontSize: 15, lineHeight: 1.55, color: 'var(--fg-soft)', margin: '14px 0 0', maxWidth: 440 }}>{it.d}</p>
                        <div className="serif" style={{
                          marginTop: 18, fontStyle: 'italic', color: 'var(--accent)',
                          display: 'inline-flex', alignItems: 'center', gap: 8,
                          transform: 'rotate(1.5deg)', fontSize: 17,
                        }}>
                          <svg width="22" height="14" viewBox="0 0 22 14" fill="none">
                            <path d="M2,8 Q8,12 14,4 T20,10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                          </svg>
                          {f.note}
                        </div>
                      </div>
                    </>
                  )}

                  {/* Photo decal — taped to corner */}
                  <div style={{
                    position: 'relative', justifySelf: 'end',
                    width: 220, aspectRatio: '4 / 5',
                    transform: `rotate(${i % 2 === 0 ? 2.5 : -2.5}deg)`,
                    boxShadow: '0 12px 28px -10px rgba(0,0,0,0.22)',
                    background: 'var(--bg)', padding: 8, paddingBottom: 28,
                  }}>
                    <Media src={f.img} ratio="auto" style={{ width: '100%', height: '100%' }} />
                    <div style={{
                      position: 'absolute', top: -10, left: '50%', transform: 'translateX(-50%) rotate(-2deg)',
                      width: 70, height: 16,
                      background: 'rgba(220, 200, 150, 0.5)',
                      borderLeft: '1px dashed rgba(0,0,0,0.1)',
                      borderRight: '1px dashed rgba(0,0,0,0.1)',
                    }} />
                    <div className="mono" style={{
                      position: 'absolute', bottom: 8, left: 12, fontSize: 9, color: 'var(--fg-mute)',
                    }}>{it.k.toUpperCase()} · {String(i + 1).padStart(2, '0')}</div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Footer aside */}
        <Reveal>
          <div style={{
            marginTop: 80, padding: '28px 32px',
            background: 'var(--bg-2)',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            gap: 24, flexWrap: 'wrap', position: 'relative',
          }}>
            <div className="serif" style={{ fontSize: 22, fontStyle: 'italic', maxWidth: 720, lineHeight: 1.4 }}>
              {lang === 'EN'
                ? <>Don't see your kind of party? <span style={{ color: 'var(--accent)' }}>We've also done a divorce party, a goodbye-to-Oslo dinner, and one very good cat birthday.</span></>
                : <>Ikke ditt arrangement? <span style={{ color: 'var(--accent)' }}>Vi har også gjort skilsmissefest, farvel-til-Oslo middag, og én svært god katte-bursdag.</span></>}
            </div>
            <a href="#booking" style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: 'var(--fg)', color: 'var(--bg)',
              padding: '12px 16px 12px 20px', textDecoration: 'none', fontWeight: 500,
              borderRadius: 999, whiteSpace: 'nowrap',
            }}>
              {lang === 'EN' ? 'Tell us about it' : 'Fortell oss om det'}
              <span style={{
                width: 28, height: 28, borderRadius: 999, background: 'var(--accent)', color: 'var(--bg)',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              }}>↗</span>
            </a>
          </div>
        </Reveal>

      </div>

      <style>{`
        .svc-row:hover { background: var(--bg-2); }
        .svc-row { transition: background .35s; }
      `}</style>
    </section>
  );
}

// Selected work — horizontal scrub gallery driven by vertical scroll
function WorkScrub({ copy, lang }) {
  const wrapRef = React.useRef(null);
  const trackRef = React.useRef(null);
  const [progress, setProgress] = React.useState(0);

  const projects = [
    { src: MEDIA.babyshower_2, k: lang === 'EN' ? 'A baby shower in beige & cocoa' : 'Babyshower i beige & kakao', m: '60 guests · Mar 2025', cat: lang === 'EN' ? 'Milestone' : 'Milepæl' },
    { video: MEDIA.hero_video, k: lang === 'EN' ? 'White & gold wedding reception' : 'Hvit & gull bryllupsmottakelse', m: '180 guests · Sep 2024', cat: lang === 'EN' ? 'Wedding' : 'Bryllup' },
    { src: MEDIA.foodmenu, k: lang === 'EN' ? 'Labake at 50 — purple & gold dinner' : 'Labake 50 — lilla & gull middag', m: '120 guests · Feb 2025', cat: lang === 'EN' ? 'Milestone' : 'Milepæl' },
    { src: MEDIA.babyshower_4, k: lang === 'EN' ? 'Baby B — teddy bear shower' : 'Baby B — bamse-shower', m: '45 guests · Jan 2025', cat: lang === 'EN' ? 'Cultural' : 'Kulturell' },
    { video: MEDIA.hero_video_2, k: lang === 'EN' ? 'Civil ceremony in ivory' : 'Borgerlig seremoni i elfenben', m: '80 guests · Jun 2024', cat: lang === 'EN' ? 'Wedding' : 'Bryllup' },
    { video: MEDIA.hero_video_3, k: lang === 'EN' ? 'Pink reception · floral tablescape' : 'Rosa mottakelse · blomster', m: '220 guests · Aug 2024', cat: lang === 'EN' ? 'Wedding' : 'Bryllup' },
  ];

  React.useEffect(() => {
    const onScroll = () => {
      const el = wrapRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      const scrolled = Math.min(Math.max(-r.top, 0), total);
      setProgress(total > 0 ? scrolled / total : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // calc translate
  const cardW = 520;
  const gap = 32;
  const totalW = projects.length * (cardW + gap);
  const maxTranslate = totalW - (typeof window !== 'undefined' ? window.innerWidth : 1440) + 160;
  const tx = -progress * Math.max(0, maxTranslate);

  return (
    <section id="work" ref={wrapRef} style={{ height: `${projects.length * 70}vh`, position: 'relative', background: 'var(--bg)' }}>
      <div style={{ position: 'sticky', top: 0, height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', overflow: 'hidden', paddingTop: 60 }}>
        <div style={{ padding: '0 32px', marginBottom: 48, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', maxWidth: 1440, marginInline: 'auto', width: '100%' }}>
          <div>
            <div className="mono" style={{ color: 'var(--fg-mute)', marginBottom: 16 }}>— {copy.work.eyebrow}</div>
            <h2 className="serif" style={{ fontSize: 'clamp(40px, 5.4vw, 88px)', lineHeight: 1, margin: 0, fontWeight: 300, letterSpacing: '-0.035em' }}>
              {copy.work.title.split(' ').slice(0, -2).join(' ')} <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>{copy.work.title.split(' ').slice(-2).join(' ')}</em>
            </h2>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div className="mono" style={{ color: 'var(--fg-mute)' }}>{String(Math.min(projects.length, Math.floor(progress * projects.length) + 1)).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}</div>
            <div style={{ marginTop: 8, width: 120, height: 1, background: 'var(--line-c)', position: 'relative' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, height: 1, width: `${progress * 100}%`, background: 'var(--accent)' }} />
            </div>
          </div>
        </div>

        <div ref={trackRef} style={{
          display: 'flex', gap, padding: '0 80px',
          transform: `translate3d(${tx}px,0,0)`, willChange: 'transform',
          transition: 'transform .05s linear',
        }}>
          {projects.map((p, i) => (
            <div key={i} style={{ width: cardW, flexShrink: 0, cursor: 'pointer' }} data-hover>
              <Media src={p.src} video={p.video} caption={p.k} ratio="3 / 4" style={{ width: '100%' }} />
              <div style={{ padding: '20px 4px 0' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
                  <span className="mono" style={{ color: 'var(--accent)' }}>{String(i + 1).padStart(2, '0')} · {p.cat}</span>
                  <span className="mono" style={{ color: 'var(--fg-mute)' }}>{p.m}</span>
                </div>
                <h3 className="serif" style={{ fontSize: 28, fontWeight: 400, margin: 0, letterSpacing: '-0.02em' }}>{p.k}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Process
function Process({ copy, lang }) {
  return (
    <section style={{ padding: '160px 32px', background: 'var(--bg-2)' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80 }}>
        <div style={{ position: 'sticky', top: 120, alignSelf: 'flex-start' }}>
          <Reveal>
            <div className="mono" style={{ color: 'var(--fg-mute)', marginBottom: 20 }}>— {copy.process.eyebrow}</div>
            <h2 className="serif" style={{ fontSize: 'clamp(36px, 4.6vw, 72px)', lineHeight: 1.02, margin: 0, fontWeight: 300, letterSpacing: '-0.035em' }}>
              {copy.process.title.split(',')[0]},<br /><em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>{copy.process.title.split(',')[1].trim()}</em>
            </h2>
          </Reveal>
        </div>
        <div>
          {copy.process.steps.map((s, i) => (
            <Reveal key={i} delay={i * 80}>
              <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: 32, padding: '40px 0', borderBottom: '1px solid var(--line-c)', alignItems: 'flex-start' }}>
                <div className="serif" style={{ fontSize: 56, fontWeight: 300, color: 'var(--accent)', fontStyle: 'italic', letterSpacing: '-0.02em', lineHeight: 1 }}>{s.n}</div>
                <div>
                  <h3 className="serif" style={{ fontSize: 28, margin: '0 0 12px', fontWeight: 400 }}>{s.k}</h3>
                  <p style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--fg-soft)', margin: 0, maxWidth: 540 }}>{s.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// About preview block — image left, text right with stats
function AboutBlock({ copy, lang, setPage }) {
  return (
    <section id="about" style={{ padding: '160px 32px' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 80, alignItems: 'center' }}>
        <Reveal>
          <div style={{ position: 'relative' }}>
            <Media src={MEDIA.babyshower_2} caption={PH.about_1} ratio="4 / 5" />
            <div style={{ position: 'absolute', bottom: -24, right: -24, width: '50%', boxShadow: '0 24px 48px -16px rgba(0,0,0,0.18)' }}>
              <Media src={MEDIA.babyshower_4} caption={PH.about_2} ratio="1 / 1" />
            </div>
          </div>
        </Reveal>
        <div>
          <Reveal>
            <div className="mono" style={{ color: 'var(--fg-mute)', marginBottom: 20 }}>— {copy.about.eyebrow}</div>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="serif" style={{ fontSize: 'clamp(36px, 4.6vw, 72px)', lineHeight: 1.02, margin: 0, fontWeight: 300, letterSpacing: '-0.035em', whiteSpace: 'pre-line' }}>
              {copy.about.title.split('\n').map((l, i) => (
                <span key={i} style={{ display: 'block' }}>
                  {i === 1 ? <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>{l}</em> : l}
                </span>
              ))}
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p style={{ fontSize: 16, lineHeight: 1.65, color: 'var(--fg-soft)', marginTop: 32, maxWidth: 520 }}>{copy.about.body_1}</p>
            <p style={{ fontSize: 16, lineHeight: 1.65, color: 'var(--fg-soft)', marginTop: 16, maxWidth: 520 }}>{copy.about.body_2}</p>
          </Reveal>

          <Reveal delay={220}>
            <div style={{ marginTop: 56, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', borderTop: '1px solid var(--line-c)', paddingTop: 32 }}>
              {copy.about.stat.map((s, i) => (
                <div key={i}>
                  <div className="serif" style={{ fontSize: 36, fontWeight: 300, letterSpacing: '-0.02em' }}>{s.n}</div>
                  <div className="mono" style={{ color: 'var(--fg-mute)', marginTop: 8 }}>{s.k}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={280}>
            <button onClick={() => setPage('about')} data-hover
              style={{
                marginTop: 40, padding: '14px 24px', borderRadius: 999,
                background: 'transparent', color: 'var(--fg)', border: '1px solid var(--fg)', cursor: 'pointer',
                fontSize: 14, fontWeight: 500,
              }}>
              {lang === 'EN' ? 'Read about the studio' : 'Les om studioet'} →
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// Detail strip — three large detail images, image-grid that reorganizes on scroll
function DetailStrip({ lang }) {
  const wrapRef = React.useRef(null);
  const [t, setT] = React.useState(0);

  React.useEffect(() => {
    const onScroll = () => {
      const el = wrapRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const center = r.top + r.height / 2 - window.innerHeight / 2;
      setT(Math.max(-1, Math.min(1, -center / window.innerHeight)));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section ref={wrapRef} style={{ padding: '80px 32px', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1600, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
        <div style={{ transform: `translateY(${-t * 60}px)` }}>
          <Media src={MEDIA.babyshower_3} caption={PH.detail_1} ratio="3 / 4" />
        </div>
        <div style={{ transform: `translateY(${t * 30}px)`, marginTop: 60 }}>
          <Media src={MEDIA.foodmenu} caption={PH.detail_2} ratio="3 / 4" />
        </div>
        <div style={{ transform: `translateY(${-t * 80}px)` }}>
          <Media src={MEDIA.babyshower_1} caption={PH.detail_3} ratio="3 / 4" />
        </div>
      </div>
    </section>
  );
}

// Quote — large pull quote
function Quote({ lang }) {
  const en = "We hired 2104events for a multi-day cultural wedding that crossed two languages and three timezones. Jose held the room. The week ran like clockwork — and felt nothing like it.";
  const no = "Vi hyret 2104events for et flerdagers kulturelt bryllup som krysset to språk og tre tidssoner. Jose holdt rommet.";
  return (
    <section style={{ padding: '160px 32px', background: 'var(--bg-2)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', textAlign: 'center' }}>
        <Reveal>
          <div style={{ fontSize: 32, color: 'var(--accent)' }}>“</div>
        </Reveal>
        <Reveal delay={80}>
          <p className="serif" style={{
            fontSize: 'clamp(28px, 3.2vw, 48px)', lineHeight: 1.25, fontWeight: 300, letterSpacing: '-0.02em',
            margin: 0, fontStyle: 'italic',
          }}>{lang === 'EN' ? en : no}</p>
        </Reveal>
        <Reveal delay={180}>
          <div style={{ marginTop: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
            <div style={{ width: 48, height: 48, borderRadius: 999, overflow: 'hidden' }}>
              <ImgPh caption="A.S." ratio="1 / 1" hue={20} />
            </div>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: 14, fontWeight: 500 }}>Aanya Sundaram</div>
              <div className="mono" style={{ color: 'var(--fg-mute)' }}>{lang === 'EN' ? 'Wedding · 2024' : 'Bryllup · 2024'}</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

Object.assign(window, { Services, WorkScrub, Process, AboutBlock, DetailStrip, Quote });
