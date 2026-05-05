// Main app — hub, routing, lenis, tweaks panel.

function HomePage({ lang, copy, heroLayout, bookingVariant, setPage }) {
  return (
    <>
      <Hero layout={heroLayout} copy={copy} lang={lang} />
      <Services copy={copy} lang={lang} />
      <WorkScrub copy={copy} lang={lang} />
      <Process copy={copy} lang={lang} />
      <DetailStrip lang={lang} />
      <Quote lang={lang} />
      <AboutBlock copy={copy} lang={lang} setPage={setPage} />
      <BookingSection variant={bookingVariant} lang={lang} copy={copy} />
    </>
  );
}

function App() {
  const [t, setTweak] = useTweaks(window.TWEAK_DEFAULTS);
  const [page, _setPage] = React.useState('home');
  const setPage = (p) => { _setPage(p); window.scrollTo({ top: 0, behavior: 'instant' }); };

  // Apply theme + palette to body
  React.useEffect(() => {
    document.body.dataset.theme = t.dark ? 'dark' : 'light';
    document.body.dataset.palette = t.palette;
  }, [t.dark, t.palette]);

  // Sync tweak language with internal lang state if user toggles in nav
  const setLang = (l) => setTweak('lang', l);

  // Lenis smooth scroll
  React.useEffect(() => {
    if (typeof Lenis === 'undefined') return;
    const lenis = new Lenis({ duration: 1.15, easing: (x) => Math.min(1, 1.001 - Math.pow(2, -10 * x)) });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  const copy = COPY[t.lang] || COPY.EN;

  return (
    <>
      <CursorDot />
      <Nav lang={t.lang} setLang={setLang} page={page} setPage={setPage}
        theme={t.dark ? 'dark' : 'light'} setTheme={(v) => setTweak('dark', v === 'dark')} copy={copy} />

      <main style={{ minHeight: '100vh' }}>
        {page === 'home' && <HomePage lang={t.lang} copy={copy} heroLayout={t.heroLayout} bookingVariant={t.bookingVariant} setPage={setPage} />}
        {page === 'work' && <WorkPage lang={t.lang} />}
        {page === 'services' && <ServicesPage lang={t.lang} copy={copy} setPage={setPage} />}
        {page === 'about' && <AboutPage lang={t.lang} copy={copy} />}
        {page === 'journal' && <JournalPage lang={t.lang} />}
        {page === 'contact' && <ContactPage lang={t.lang} copy={copy} bookingVariant={t.bookingVariant} />}
      </main>

      <Footer copy={copy} setPage={setPage} lang={t.lang} />

      <TweaksPanel title="2104events · Tweaks">
        <TweakSection label="Hero">
          <TweakRadio label="Layout" value={t.heroLayout}
            options={[{ value: 'split', label: 'Split' }, { value: 'centered', label: 'Centered' }, { value: 'fullbleed', label: 'Full bleed' }]}
            onChange={(v) => setTweak('heroLayout', v)} />
        </TweakSection>
        <TweakSection label="Theme">
          <TweakRadio label="Palette" value={t.palette}
            options={[{ value: 'warm', label: 'Warm' }, { value: 'sage', label: 'Sage' }, { value: 'ink', label: 'Ink' }]}
            onChange={(v) => setTweak('palette', v)} />
          <TweakToggle label="Dark mode" value={t.dark} onChange={(v) => setTweak('dark', v)} />
        </TweakSection>
        <TweakSection label="Booking">
          <TweakRadio label="Variant" value={t.bookingVariant}
            options={[{ value: 'calendar', label: 'Calendar' }, { value: 'wizard', label: 'Wizard' }, { value: 'inline', label: 'Inline' }]}
            onChange={(v) => setTweak('bookingVariant', v)} />
        </TweakSection>
        <TweakSection label="Language">
          <TweakRadio label="Locale" value={t.lang}
            options={[{ value: 'EN', label: 'EN' }, { value: 'NO', label: 'NO' }]}
            onChange={(v) => setTweak('lang', v)} />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('app')).render(<App />);
