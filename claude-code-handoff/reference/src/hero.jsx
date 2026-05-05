// Hero variants: split (immersive feature), centered, full-bleed gallery.

function CircularText({ text, size = 120, duration = 22 }) {
  const id = React.useId();
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" style={{ animation: `spin ${duration}s linear infinite` }}>
      <defs>
        <path id={id} d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
      </defs>
      <text fontFamily="'JetBrains Mono', monospace" fontSize="10" fontWeight="600" letterSpacing="4" fill="currentColor">
        <textPath href={`#${id}`}>{text}</textPath>
      </text>
    </svg>
  );
}

function HeroSplit({ copy, lang }) {
  const [bookings, setBookings] = React.useState(7);
  React.useEffect(() => {
    const i = setInterval(() => setBookings((b) => b + 1), 8000);
    return () => clearInterval(i);
  }, []);

  return (
    <section style={{ minHeight: '100vh', padding: '96px 24px 24px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1480, margin: '0 auto', width: '100%', position: 'relative' }}>

        {/* Top utility bar */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '10px 0 32px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <span className="mono" style={{
              padding: '6px 10px', background: 'var(--accent)', color: 'var(--bg)',
              fontWeight: 600, letterSpacing: '0.08em',
            }}>● {lang === 'EN' ? 'BOOKING 2026' : 'BESTILLER 2026'}</span>
            <span className="mono" style={{ color: 'var(--fg-soft)' }}>{lang === 'EN' ? 'OSLO · WORLDWIDE' : 'OSLO · VERDEN OVER'}</span>
          </div>
          <span className="mono" style={{ color: 'var(--fg-soft)' }}>EST. 2104 · VOL. 07</span>
        </div>

        {/* HERO STAGE — title left, collage right */}
        <div style={{
          display: 'grid', gridTemplateColumns: '1.05fr 1fr', gap: 32,
          alignItems: 'stretch', position: 'relative',
        }}>

          {/* LEFT — title block */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', minHeight: 600 }}>
            <Reveal>
              <div className="mono" style={{ color: 'var(--fg-mute)', marginBottom: 24, display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ width: 24, height: 1, background: 'var(--accent)' }} /> {copy.hero.eyebrow}
              </div>
            </Reveal>

            <Reveal delay={60}>
              <h1 className="serif" style={{
                fontSize: 'clamp(72px, 9.5vw, 168px)', lineHeight: 0.88, margin: 0, fontWeight: 300,
                letterSpacing: '-0.045em', whiteSpace: 'pre-line', position: 'relative',
              }}>
                {copy.hero.title_a.split('\n').map((l, i) => (
                  <span key={i} style={{ display: 'block', position: 'relative' }}>
                    {i === 1 ? (
                      <span style={{ position: 'relative', display: 'inline-block', color: 'var(--accent)' }}>
                        <em style={{ fontStyle: 'italic' }}>{l}</em>
                        <svg viewBox="0 0 400 18" preserveAspectRatio="none" style={{
                          position: 'absolute', left: 0, right: 0, bottom: '-0.02em', width: '100%', height: '0.16em',
                          pointerEvents: 'none',
                        }}>
                          <path d="M2,12 Q40,2 80,9 T160,9 T240,9 T320,9 T398,9" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                        </svg>
                      </span>
                    ) : l}
                  </span>
                ))}
              </h1>
            </Reveal>

            <Reveal delay={140}>
              <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 460 }}>
                <p style={{ fontSize: 17, lineHeight: 1.55, color: 'var(--fg-soft)', margin: 0 }}>
                  {copy.hero.lede}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
                  <a href="#booking" className="hero-cta" style={{
                    display: 'inline-flex', alignItems: 'center', gap: 10,
                    background: 'var(--fg)', color: 'var(--bg)',
                    padding: '14px 18px 14px 22px', textDecoration: 'none',
                    borderRadius: 999, fontWeight: 500,
                  }}>
                    <span>{lang === 'EN' ? 'Book your date' : 'Bestill datoen din'}</span>
                    <span className="hero-cta-arrow" style={{
                      width: 32, height: 32, borderRadius: 999, background: 'var(--accent)', color: 'var(--bg)',
                      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                      transition: 'transform 0.4s cubic-bezier(0.5,0,0.2,1)',
                    }}>↗</span>
                  </a>
                  <span className="mono" style={{ color: 'var(--fg-soft)' }}>
                    <span style={{ display: 'inline-block', width: 6, height: 6, background: '#5AB67A', borderRadius: 999, marginRight: 6, animation: 'pulse 1.4s infinite' }} />
                    {bookings} {lang === 'EN' ? 'booked this week' : 'bestilt denne uken'}
                  </span>
                </div>
              </div>
            </Reveal>

            {/* Sticker note — bottom left */}
            <div style={{
              transform: 'rotate(-3deg)', alignSelf: 'flex-start',
              background: '#FFF8E0', color: '#1A1814',
              padding: '10px 14px', boxShadow: '0 6px 20px -6px rgba(0,0,0,0.18)',
              border: '1px solid rgba(0,0,0,0.06)', marginTop: 28,
            }}>
              <div className="mono" style={{ fontSize: 9, color: '#7A6A4A', letterSpacing: '0.12em' }}>P.S.</div>
              <div className="serif" style={{ fontSize: 16, fontStyle: 'italic', marginTop: 2 }}>we love wild ideas ✦</div>
            </div>
          </div>

          {/* RIGHT — asymmetric collage */}
          <Reveal delay={120}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(6, 1fr)',
              gridTemplateRows: 'repeat(8, 1fr)',
              gap: 10,
              minHeight: 600,
              position: 'relative',
            }}>
              {/* Big tile — top */}
              <div style={{ gridColumn: '1 / 5', gridRow: '1 / 6', overflow: 'hidden', transform: 'rotate(-1deg)' }}>
                <Media src={MEDIA.babyshower_3} ratio="auto" style={{ width: '100%', height: '100%' }} />
              </div>
              {/* Tall tile — top right */}
              <div style={{ gridColumn: '5 / 7', gridRow: '1 / 5', overflow: 'hidden', transform: 'rotate(1.5deg)' }}>
                <Media src={MEDIA.foodmenu} ratio="auto" style={{ width: '100%', height: '100%' }} />
              </div>
              {/* Mid right square */}
              <div style={{ gridColumn: '5 / 7', gridRow: '5 / 9', overflow: 'hidden', transform: 'rotate(-2deg)' }}>
                <Media src={MEDIA.babyshower_1} ratio="auto" style={{ width: '100%', height: '100%' }} />
              </div>
              {/* Bottom-left wide */}
              <div style={{ gridColumn: '1 / 5', gridRow: '6 / 9', overflow: 'hidden', transform: 'rotate(1deg)' }}>
                <Media src={MEDIA.babyshower_4} ratio="auto" style={{ width: '100%', height: '100%' }} />
              </div>

              {/* Spinning sticker badge */}
              <div style={{
                position: 'absolute', top: '40%', left: -28, zIndex: 5,
                width: 110, height: 110, borderRadius: 999,
                background: 'var(--accent)', color: 'var(--bg)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transform: 'rotate(-8deg)',
                boxShadow: '0 12px 32px -8px rgba(0,0,0,0.3)',
              }}>
                <CircularText text="● 2104 EVENTS · OSLO · 2104 EVENTS · OSLO · " size={110} />
                <span className="serif" style={{ position: 'absolute', fontSize: 26, fontStyle: 'italic', fontWeight: 300 }}>♥</span>
              </div>

              {/* Floating tag */}
              <div style={{
                position: 'absolute', top: -10, right: 24, zIndex: 5,
                transform: 'rotate(6deg)',
                background: 'var(--bg)', color: 'var(--fg)',
                padding: '6px 12px',
                border: '1.5px solid var(--fg)',
              }}>
                <span className="mono" style={{ fontWeight: 600 }}>FROGNER · 09.24</span>
              </div>
              {/* Floating tag 2 */}
              <div style={{
                position: 'absolute', bottom: -14, left: '38%', zIndex: 5,
                transform: 'rotate(-4deg)',
                background: 'var(--fg)', color: 'var(--bg)',
                padding: '6px 12px',
              }}>
                <span className="mono" style={{ fontWeight: 600 }}>{lang === 'EN' ? '+ 226 MORE' : '+ 226 TIL'}</span>
              </div>
            </div>
          </Reveal>
        </div>

      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes floaty { 0%,100% { transform: rotate(14deg) translateY(0); } 50% { transform: rotate(20deg) translateY(-6px); } }
        @keyframes pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.4; } }
        .hero-cta:hover .hero-cta-arrow { transform: rotate(45deg) scale(1.15); }
      `}</style>
    </section>
  );
}

function HeroCentered({ copy, lang }) {
  // Editorial centered — title masked by image on scroll.
  const [scroll, setScroll] = React.useState(0);
  React.useEffect(() => {
    const onScroll = () => setScroll(Math.min(1, window.scrollY / 600));
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section style={{ minHeight: '100vh', padding: '140px 32px 60px', position: 'relative' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto' }}>
        <Reveal>
          <div className="mono" style={{ textAlign: 'center', color: 'var(--fg-mute)', marginBottom: 40 }}>
            {copy.hero.eyebrow} · {lang === 'EN' ? 'Event planners & producers' : 'Arrangementsplanleggere'}
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="serif" style={{
            fontSize: 'clamp(64px, 11vw, 200px)', lineHeight: 0.92, margin: 0, fontWeight: 300,
            letterSpacing: '-0.045em', textAlign: 'center', whiteSpace: 'pre-line',
          }}>
            {copy.hero.title_b.split('\n').map((l, i) => (
              <span key={i} style={{ display: 'block' }}>
                {i === 1 ? <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>{l}</em> : l}
              </span>
            ))}
          </h1>
        </Reveal>

        {/* Image strip below */}
        <div style={{
          marginTop: 80,
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16,
          transform: `translateY(${-scroll * 80}px)`,
        }}>
          <Media src={MEDIA.babyshower_1} ratio="3 / 4" style={{ marginTop: 80 }} />
          <Media video={MEDIA.hero_video_2} ratio="3 / 4" style={{ marginTop: 20 }} />
          <Media src={MEDIA.foodmenu} ratio="3 / 4" style={{ marginTop: 60 }} />
          <Media src={MEDIA.babyshower_4} ratio="3 / 4" />
        </div>

        <Reveal delay={200}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: 60 }}>
            <p style={{ maxWidth: 380, fontSize: 15, lineHeight: 1.6, color: 'var(--fg-soft)', margin: 0 }}>{copy.hero.lede}</p>
            <div style={{ textAlign: 'right' }}>
              <div className="mono" style={{ color: 'var(--fg-mute)' }}>{lang === 'EN' ? 'Scroll to explore' : 'Scroll for å utforske'}</div>
              <div style={{ marginTop: 8, fontSize: 24 }}>↓</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function HeroFullBleed({ copy, lang }) {
  return (
    <section style={{
      height: '100vh', minHeight: 720, position: 'relative', overflow: 'hidden',
    }}>
      <Media video={MEDIA.hero_video_3} ratio="auto"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} />

      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, rgba(24,22,15,0.35) 0%, rgba(24,22,15,0.05) 30%, rgba(24,22,15,0.65) 100%)',
      }} />

      {/* Side rail thumbnails */}
      <div style={{ position: 'absolute', top: 120, right: 32, display: 'flex', flexDirection: 'column', gap: 8, width: 120, zIndex: 3 }}>
        {[MEDIA.hero_video, MEDIA.hero_video_2, MEDIA.babyshower_2, MEDIA.foodmenu].map((m, i) => (
          <div key={i} style={{ border: '1px solid rgba(250,247,242,0.3)' }}>
            {m.endsWith('.mp4') ? <Media video={m} ratio="1 / 1" /> : <Media src={m} ratio="1 / 1" />}
          </div>
        ))}
      </div>

      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, padding: '120px 32px 0',
        color: 'var(--cream)',
      }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', display: 'flex', justifyContent: 'space-between' }}>
          <Reveal>
            <div className="mono" style={{ color: 'rgba(250,247,242,0.7)' }}>{copy.hero.eyebrow}</div>
          </Reveal>
          <Reveal delay={80}>
            <div className="mono" style={{ color: 'rgba(250,247,242,0.7)' }}>{lang === 'EN' ? '04 reels playing' : '04 reels spiller'} · 2025</div>
          </Reveal>
        </div>
      </div>

      <div style={{
        position: 'absolute', bottom: 60, left: 0, right: 0, padding: '0 32px',
        color: 'var(--cream)',
      }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 60, alignItems: 'flex-end' }}>
          <Reveal delay={120}>
            <h1 className="serif" style={{
              fontSize: 'clamp(56px, 8vw, 132px)', lineHeight: 0.92, margin: 0, fontWeight: 300,
              letterSpacing: '-0.04em', whiteSpace: 'pre-line', color: '#FAF7F2',
            }}>
              {copy.hero.title_c.split('\n').map((l, i) => (
                <span key={i} style={{ display: 'block' }}>
                  {i === 1 ? <em style={{ fontStyle: 'italic', color: '#E6C99B' }}>{l}</em> : l}
                </span>
              ))}
            </h1>
          </Reveal>
          <Reveal delay={220}>
            <div>
              <p style={{ fontSize: 15, lineHeight: 1.6, margin: 0, color: 'rgba(250,247,242,0.85)' }}>{copy.hero.lede}</p>
              <div style={{ marginTop: 24, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {copy.hero.meta.map((m) => (
                  <span key={m} className="mono" style={{
                    padding: '6px 12px', border: '1px solid rgba(250,247,242,0.3)', borderRadius: 999,
                    color: 'rgba(250,247,242,0.85)',
                  }}>{m}</span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Hero({ layout, ...rest }) {
  if (layout === 'centered') return <HeroCentered {...rest} />;
  if (layout === 'fullbleed') return <HeroFullBleed {...rest} />;
  return <HeroSplit {...rest} />;
}

Object.assign(window, { Hero, HeroSplit, HeroCentered, HeroFullBleed });
