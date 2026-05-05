// Top nav + footer chrome.

function Nav({ lang, setLang, page, setPage, theme, setTheme, copy }) {
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { id: 'work', label: copy.nav.work },
    { id: 'services', label: copy.nav.services },
    { id: 'about', label: copy.nav.about },
    { id: 'journal', label: copy.nav.journal },
    { id: 'contact', label: copy.nav.contact },
  ];

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: scrolled ? '14px 32px' : '24px 32px',
      transition: 'padding .35s cubic-bezier(.2,.7,.3,1), background .35s, backdrop-filter .35s',
      background: scrolled ? 'color-mix(in oklab, var(--bg) 85%, transparent)' : 'transparent',
      backdropFilter: scrolled ? 'blur(14px) saturate(140%)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(14px) saturate(140%)' : 'none',
      borderBottom: scrolled ? '1px solid var(--line-c)' : '1px solid transparent',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: 1440, margin: '0 auto' }}>
        {/* Wordmark */}
        <a onClick={() => setPage('home')} data-hover
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'baseline', gap: 8, color: 'var(--fg)', textDecoration: 'none' }}>
          <span className="serif" style={{ fontSize: 22, fontWeight: 400, letterSpacing: '-0.02em' }}>2104</span>
          <span className="mono" style={{ fontSize: 10, color: 'var(--fg-mute)', marginLeft: -2 }}>events</span>
          <span className="mono" style={{ fontSize: 10, color: 'var(--fg-mute)', marginLeft: 6 }}>· OSL</span>
        </a>

        {/* Center links */}
        <nav style={{ display: 'flex', gap: 36 }}>
          {links.map((l) => (
            <a key={l.id} onClick={() => setPage(l.id)} data-hover
              style={{
                cursor: 'pointer', position: 'relative',
                fontSize: 13, fontWeight: 500, color: page === l.id ? 'var(--fg)' : 'var(--fg-soft)',
                textDecoration: 'none', letterSpacing: '0.01em',
              }}>
              {l.label}
              {page === l.id && (
                <span style={{
                  position: 'absolute', left: 0, right: 0, bottom: -6, height: 1,
                  background: 'var(--accent)',
                }} />
              )}
            </a>
          ))}
        </nav>

        {/* Right cluster */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          {/* Lang toggle */}
          <button onClick={() => setLang(lang === 'EN' ? 'NO' : 'EN')} data-hover
            className="mono"
            style={{
              border: '1px solid var(--line-c)', background: 'transparent',
              color: 'var(--fg-soft)', padding: '6px 10px', borderRadius: 999, cursor: 'pointer',
              fontSize: 10, letterSpacing: '0.12em',
            }}>
            <span style={{ color: lang === 'NO' ? 'var(--fg)' : 'var(--fg-mute)' }}>NO</span>
            <span style={{ color: 'var(--fg-mute)', margin: '0 4px' }}>/</span>
            <span style={{ color: lang === 'EN' ? 'var(--fg)' : 'var(--fg-mute)' }}>EN</span>
          </button>

          {/* Theme toggle */}
          <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} data-hover
            title="Toggle theme"
            style={{
              width: 32, height: 32, borderRadius: 999, border: '1px solid var(--line-c)',
              background: 'transparent', color: 'var(--fg-soft)', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
            {theme === 'dark' ? (
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.4"><circle cx="7" cy="7" r="3" /><path d="M7 1v1.5M7 11.5V13M1 7h1.5M11.5 7H13M2.5 2.5l1 1M10.5 10.5l1 1M2.5 11.5l1-1M10.5 3.5l1-1" strokeLinecap="round" /></svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M11 8.5A4.5 4.5 0 1 1 5.5 3a3.5 3.5 0 0 0 5.5 5.5z" strokeLinejoin="round" /></svg>
            )}
          </button>

          <button onClick={() => setPage('contact')} data-hover
            style={{
              padding: '10px 18px', borderRadius: 999,
              background: 'var(--fg)', color: 'var(--bg)', border: 'none', cursor: 'pointer',
              fontSize: 13, fontWeight: 500, letterSpacing: '0.01em',
            }}>
            {copy.cta} →
          </button>
        </div>
      </div>
    </header>
  );
}

function Footer({ copy, setPage, lang }) {
  const cols = [
    { h: lang === 'EN' ? 'Studio' : 'Studio', items: [copy.footer.addr, copy.footer.hours] },
    { h: lang === 'EN' ? 'Contact' : 'Kontakt', items: [copy.footer.tel, copy.footer.email, copy.footer.ig] },
  ];
  return (
    <footer style={{
      background: 'var(--bg-2)',
      color: 'var(--fg)',
      padding: '120px 32px 32px',
      borderTop: '1px solid var(--line-c)',
      marginTop: 80,
    }}>
      <div style={{ maxWidth: 1440, margin: '0 auto' }}>
        {/* Big wordmark */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 40, marginBottom: 80 }}>
          <div>
            <h2 className="serif" style={{ fontSize: 'clamp(40px, 5vw, 80px)', lineHeight: 0.95, margin: 0, fontWeight: 300, letterSpacing: '-0.03em' }}>
              {lang === 'EN' ? 'Let\u2019s plan' : 'La oss planlegge'}<br />
              <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>{lang === 'EN' ? 'something quiet.' : 'noe stille.'}</em>
            </h2>
            <button onClick={() => setPage('contact')} data-hover
              style={{
                marginTop: 32, padding: '14px 24px', borderRadius: 999,
                background: 'var(--fg)', color: 'var(--bg)', border: 'none', cursor: 'pointer',
                fontSize: 14, fontWeight: 500,
              }}>
              {copy.cta} →
            </button>
          </div>
          {cols.map((c, i) => (
            <div key={i}>
              <div className="mono" style={{ color: 'var(--fg-mute)', marginBottom: 16 }}>{c.h}</div>
              {c.items.map((t, j) => (
                <div key={j} style={{ fontSize: 14, color: 'var(--fg-soft)', marginBottom: 6 }}>{t}</div>
              ))}
            </div>
          ))}
          <div>
            <div className="mono" style={{ color: 'var(--fg-mute)', marginBottom: 16 }}>{lang === 'EN' ? 'Follow' : 'Følg'}</div>
            {['Instagram', 'Pinterest', 'LinkedIn'].map((s, i) => (
              <a key={i} data-hover style={{ display: 'block', cursor: 'pointer', fontSize: 14, color: 'var(--fg)', marginBottom: 6, textDecoration: 'none' }}>{s} ↗</a>
            ))}
          </div>
        </div>

        {/* Massive 2104 */}
        <div style={{ borderTop: '1px solid var(--line-c)', paddingTop: 40, overflow: 'hidden' }}>
          <div className="serif" style={{
            fontSize: 'clamp(120px, 22vw, 360px)', lineHeight: 0.85, fontWeight: 300, letterSpacing: '-0.05em',
            color: 'var(--fg)', whiteSpace: 'nowrap',
          }}>
            2104<span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>events</span>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 24, color: 'var(--fg-mute)', fontSize: 12 }}>
          <span>© 2018–2026 2104events AS · Org.nr 921 845 612</span>
          <span>{lang === 'EN' ? 'Designed in Oslo · Built with care' : 'Designet i Oslo · Bygget med omtanke'}</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Nav, Footer });
