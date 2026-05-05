// Booking — three variants. Calendar (single-pane, like ref but on-brand),
// Wizard (multi-step), and Inline (calendar + side service cards).

const SERVICES = [
  { v: 'wedding', en: 'Wedding', no: 'Bryllup' },
  { v: 'corporate', en: 'Corporate event', no: 'Bedriftsarrangement' },
  { v: 'milestone', en: 'Birthday / Milestone', no: 'Bursdag / Milepæl' },
  { v: 'cultural', en: 'Cultural ceremony', no: 'Kulturell seremoni' },
  { v: 'private', en: 'Private party', no: 'Privat fest' },
  { v: 'production', en: 'Production only', no: 'Kun produksjon' },
];
const TIMES = [
  { v: 'morning', en: ['Morning', '08–12'], no: ['Morgen', '08–12'] },
  { v: 'afternoon', en: ['Afternoon', '12–17'], no: ['Ettermiddag', '12–17'] },
  { v: 'evening', en: ['Evening', '17–22'], no: ['Kveld', '17–22'] },
  { v: 'flex', en: ['Flexible', 'any time'], no: ['Fleksibel', 'når som helst'] },
];

// Mini calendar
function MiniCal({ value, onChange, lang }) {
  const today = React.useMemo(() => new Date(2026, 4, 5), []); // anchor
  const [view, setView] = React.useState({ y: today.getFullYear(), m: today.getMonth() });

  const monthNames = lang === 'EN'
    ? ['January','February','March','April','May','June','July','August','September','October','November','December']
    : ['Januar','Februar','Mars','April','Mai','Juni','Juli','August','September','Oktober','November','Desember'];
  const dayNames = lang === 'EN' ? ['MON','TUE','WED','THU','FRI','SAT','SUN'] : ['MAN','TIR','ONS','TOR','FRE','LØR','SØN'];

  const first = new Date(view.y, view.m, 1);
  const lead = (first.getDay() + 6) % 7;
  const days = new Date(view.y, view.m + 1, 0).getDate();
  const prevDays = new Date(view.y, view.m, 0).getDate();

  const cells = [];
  for (let i = 0; i < lead; i++) cells.push({ d: prevDays - lead + 1 + i, mute: true });
  for (let d = 1; d <= days; d++) cells.push({ d, mute: false });
  while (cells.length % 7 !== 0) cells.push({ d: cells.length - lead - days + 1, mute: true });
  while (cells.length < 42) cells.push({ d: cells.length - lead - days + 1, mute: true });

  const isSelected = (c) => !c.mute && value && value.y === view.y && value.m === view.m && value.d === c.d;
  const isToday = (c) => !c.mute && view.y === today.getFullYear() && view.m === today.getMonth() && c.d === today.getDate();

  return (
    <div style={{ border: '1px solid var(--line-c)', borderRadius: 4, padding: 20, background: 'var(--bg)' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
        <button onClick={() => setView(v => ({ y: v.m === 0 ? v.y - 1 : v.y, m: (v.m + 11) % 12 }))}
          style={{ width: 28, height: 28, borderRadius: 999, border: 'none', background: 'transparent', cursor: 'pointer', color: 'var(--fg-soft)' }}>‹</button>
        <div className="serif" style={{ fontSize: 18, fontWeight: 500 }}>{monthNames[view.m]} {view.y}</div>
        <button onClick={() => setView(v => ({ y: v.m === 11 ? v.y + 1 : v.y, m: (v.m + 1) % 12 }))}
          style={{ width: 28, height: 28, borderRadius: 999, border: 'none', background: 'transparent', cursor: 'pointer', color: 'var(--fg-soft)' }}>›</button>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 2 }}>
        {dayNames.map(d => <div key={d} className="mono" style={{ textAlign: 'center', color: 'var(--fg-mute)', fontSize: 9, paddingBottom: 8 }}>{d}</div>)}
        {cells.map((c, i) => {
          const sel = isSelected(c);
          const td = isToday(c);
          return (
            <button key={i}
              onClick={() => !c.mute && onChange({ y: view.y, m: view.m, d: c.d })}
              style={{
                aspectRatio: '1 / 1', minHeight: 36, border: 'none',
                background: sel ? 'var(--accent)' : (td ? 'color-mix(in oklab, var(--accent) 14%, var(--bg))' : 'transparent'),
                color: sel ? 'var(--bg)' : (c.mute ? 'var(--fg-mute)' : 'var(--fg)'),
                opacity: c.mute ? 0.4 : 1, cursor: c.mute ? 'default' : 'pointer',
                borderRadius: 4, fontSize: 13, fontWeight: sel ? 600 : 400,
                transition: 'background .12s',
              }}
              onMouseEnter={(e) => { if (!c.mute && !sel) e.currentTarget.style.background = 'var(--bg-2)'; }}
              onMouseLeave={(e) => { if (!c.mute && !sel) e.currentTarget.style.background = td ? 'color-mix(in oklab, var(--accent) 14%, var(--bg))' : 'transparent'; }}>
              {c.d}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// Submit channels row
function SubmitRow({ lang }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10, marginTop: 24 }}>
      <button data-hover style={{
        padding: '14px 16px', border: 'none', borderRadius: 4, cursor: 'pointer',
        background: '#25D366', color: '#fff', fontSize: 13, fontWeight: 500,
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
      }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l-.999 3.648 3.978-1.607z"/></svg>
        WhatsApp
      </button>
      <button data-hover style={{
        padding: '14px 16px', border: '1px solid var(--fg)', borderRadius: 4, cursor: 'pointer',
        background: 'transparent', color: 'var(--fg)', fontSize: 13, fontWeight: 500,
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
      }}>
        ✉ {lang === 'EN' ? 'Email' : 'E-post'}
      </button>
      <button data-hover style={{
        padding: '14px 16px', border: '1px solid var(--fg)', borderRadius: 4, cursor: 'pointer',
        background: 'transparent', color: 'var(--fg)', fontSize: 13, fontWeight: 500,
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
      }}>
        ⌑ Instagram DM
      </button>
    </div>
  );
}

const fld = (extra) => ({
  width: '100%', padding: '12px 14px', border: '1px solid var(--line-c)',
  borderRadius: 4, background: 'var(--bg)', color: 'var(--fg)', fontSize: 14,
  outline: 'none', transition: 'border .15s',
  ...(extra || {}),
});

// VARIANT A: Single-pane "calendar" form (refined version of the reference)
function BookingCalendar({ lang, copy }) {
  const [date, setDate] = React.useState({ y: 2026, m: 4, d: 16 });
  const [time, setTime] = React.useState('evening');
  const [service, setService] = React.useState('wedding');
  const lab = (k, alt) => lang === 'EN' ? k : alt;

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 56, alignItems: 'flex-start' }}>
      <div>
        <div className="mono" style={{ color: 'var(--fg-mute)', marginBottom: 12 }}>— {lab('Pick a date', 'Velg dato')}</div>
        <MiniCal value={date} onChange={setDate} lang={lang} />

        <div className="mono" style={{ color: 'var(--fg-mute)', marginTop: 28, marginBottom: 12 }}>— {lab('Preferred time', 'Foretrukket tid')}</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8 }}>
          {TIMES.map(t => (
            <button key={t.v} onClick={() => setTime(t.v)} data-hover
              style={{
                padding: '14px 8px', border: '1px solid', borderColor: time === t.v ? 'var(--fg)' : 'var(--line-c)',
                background: time === t.v ? 'var(--fg)' : 'var(--bg)', color: time === t.v ? 'var(--bg)' : 'var(--fg)',
                borderRadius: 4, cursor: 'pointer', fontSize: 13, fontWeight: 500,
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
              }}>
              <span>{t[lang === 'EN' ? 'en' : 'no'][0]}</span>
              <span style={{ fontSize: 10, opacity: 0.7 }}>{t[lang === 'EN' ? 'en' : 'no'][1]}</span>
            </button>
          ))}
        </div>
      </div>

      <div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <Field label={lab('Your name', 'Navn')}><input style={fld()} placeholder="Jane Smith" /></Field>
          <Field label={lab('Phone (optional)', 'Telefon')}><input style={fld()} placeholder="+47…" /></Field>
        </div>
        <Field label={lab('Service', 'Tjeneste')}>
          <select style={fld()} value={service} onChange={e => setService(e.target.value)}>
            {SERVICES.map(s => <option key={s.v} value={s.v}>{s[lang === 'EN' ? 'en' : 'no']}</option>)}
          </select>
        </Field>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <Field label={lab('Guest count', 'Antall gjester')}>
            <input style={fld()} placeholder="80" type="number" />
          </Field>
          <Field label={lab('Budget (NOK)', 'Budsjett (NOK)')}>
            <select style={fld()} defaultValue="">
              <option value="">{lab('Select…', 'Velg…')}</option>
              <option>50–150k</option><option>150–300k</option><option>300–600k</option><option>600k+</option>
            </select>
          </Field>
        </div>
        <Field label={lab('Anything we should know?', 'Noe vi bør vite?')}>
          <textarea style={fld({ minHeight: 88, resize: 'vertical', fontFamily: 'inherit' })}
            placeholder={lab('Venue, theme, dietary needs, family logistics…', 'Lokale, tema, allergier, logistikk…')} />
        </Field>

        <div style={{ marginTop: 16, padding: 14, background: 'var(--bg-2)', borderRadius: 4, fontSize: 12, color: 'var(--fg-soft)', display: 'flex', gap: 10, alignItems: 'flex-start' }}>
          <span style={{ width: 6, height: 6, background: '#5AB67A', borderRadius: 999, marginTop: 6, flexShrink: 0 }} />
          <span>{lab('We\u2019ll respond within one working day with availability and a starting estimate.', 'Vi svarer innen én arbeidsdag.')}</span>
        </div>
        <SubmitRow lang={lang} />
      </div>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <label style={{ display: 'block', marginTop: 16 }}>
      <div className="mono" style={{ color: 'var(--fg-mute)', marginBottom: 8 }}>{label}</div>
      {children}
    </label>
  );
}

// VARIANT B: Multi-step wizard
function BookingWizard({ lang, copy }) {
  const [step, setStep] = React.useState(0);
  const [state, setState] = React.useState({ service: '', date: { y: 2026, m: 4, d: 16 }, time: 'evening', name: '', email: '', phone: '', notes: '', guests: '' });
  const lab = (k, alt) => lang === 'EN' ? k : alt;

  const steps = [
    { k: lab('Event type', 'Type'), n: '01' },
    { k: lab('Date & time', 'Dato'), n: '02' },
    { k: lab('Details', 'Detaljer'), n: '03' },
    { k: lab('Contact', 'Kontakt'), n: '04' },
  ];

  return (
    <div>
      {/* Progress */}
      <div style={{ display: 'grid', gridTemplateColumns: `repeat(${steps.length}, 1fr)`, gap: 0, marginBottom: 48, borderTop: '1px solid var(--line-c)', borderBottom: '1px solid var(--line-c)' }}>
        {steps.map((s, i) => (
          <div key={i} onClick={() => setStep(i)} data-hover
            style={{
              padding: '20px 24px', cursor: 'pointer',
              borderRight: i < steps.length - 1 ? '1px solid var(--line-c)' : 'none',
              background: step === i ? 'var(--bg-2)' : 'transparent',
              transition: 'background .2s',
            }}>
            <div className="mono" style={{ color: step >= i ? 'var(--accent)' : 'var(--fg-mute)' }}>{s.n}</div>
            <div className="serif" style={{ fontSize: 22, marginTop: 6, fontWeight: 400, color: step === i ? 'var(--fg)' : 'var(--fg-soft)' }}>{s.k}</div>
          </div>
        ))}
      </div>

      <div style={{ minHeight: 360 }}>
        {step === 0 && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
            {SERVICES.map(s => (
              <button key={s.v} onClick={() => { setState({ ...state, service: s.v }); setStep(1); }} data-hover
                style={{
                  padding: '40px 24px', border: '1px solid', borderColor: state.service === s.v ? 'var(--fg)' : 'var(--line-c)',
                  background: state.service === s.v ? 'var(--bg-2)' : 'var(--bg)',
                  color: 'var(--fg)', borderRadius: 4, cursor: 'pointer', textAlign: 'left',
                  transition: 'all .2s',
                }}>
                <div className="serif" style={{ fontSize: 24, fontWeight: 400 }}>{s[lang === 'EN' ? 'en' : 'no']}</div>
                <div className="mono" style={{ color: 'var(--fg-mute)', marginTop: 12 }}>→</div>
              </button>
            ))}
          </div>
        )}

        {step === 1 && (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
            <MiniCal value={state.date} onChange={d => setState({ ...state, date: d })} lang={lang} />
            <div>
              <div className="mono" style={{ color: 'var(--fg-mute)', marginBottom: 12 }}>— {lab('Time of day', 'Tidspunkt')}</div>
              <div style={{ display: 'grid', gap: 8 }}>
                {TIMES.map(t => (
                  <button key={t.v} onClick={() => setState({ ...state, time: t.v })} data-hover
                    style={{
                      padding: 16, border: '1px solid', borderColor: state.time === t.v ? 'var(--fg)' : 'var(--line-c)',
                      background: state.time === t.v ? 'var(--fg)' : 'var(--bg)', color: state.time === t.v ? 'var(--bg)' : 'var(--fg)',
                      borderRadius: 4, cursor: 'pointer', textAlign: 'left',
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    }}>
                    <span style={{ fontWeight: 500 }}>{t[lang === 'EN' ? 'en' : 'no'][0]}</span>
                    <span className="mono" style={{ opacity: 0.7 }}>{t[lang === 'EN' ? 'en' : 'no'][1]}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div style={{ maxWidth: 680 }}>
            <Field label={lab('Approx. guest count', 'Omtrentlig antall gjester')}>
              <input style={fld()} placeholder="80" />
            </Field>
            <Field label={lab('Venue or location', 'Lokale eller sted')}>
              <input style={fld()} placeholder={lab('Frogner, Tjuvholmen, TBD…', 'Frogner, Tjuvholmen, TBD…')} />
            </Field>
            <Field label={lab('Tell us a little about the day', 'Fortell litt om dagen')}>
              <textarea style={fld({ minHeight: 140, resize: 'vertical', fontFamily: 'inherit' })}
                placeholder={lab('Theme, traditions, must-haves, deal-breakers…', 'Tema, tradisjoner, must-haves…')} />
            </Field>
          </div>
        )}

        {step === 3 && (
          <div style={{ maxWidth: 680 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <Field label={lab('Full name', 'Fullt navn')}><input style={fld()} /></Field>
              <Field label={lab('Phone', 'Telefon')}><input style={fld()} placeholder="+47…" /></Field>
            </div>
            <Field label={lab('Email', 'E-post')}><input style={fld()} type="email" /></Field>
            <SubmitRow lang={lang} />
          </div>
        )}
      </div>

      <div style={{ marginTop: 48, display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--line-c)', paddingTop: 24 }}>
        <button onClick={() => setStep(Math.max(0, step - 1))} data-hover
          disabled={step === 0}
          style={{ background: 'transparent', border: 'none', cursor: step === 0 ? 'default' : 'pointer', color: step === 0 ? 'var(--fg-mute)' : 'var(--fg)', fontSize: 13 }}>
          ← {lab('Back', 'Tilbake')}
        </button>
        {step < steps.length - 1 ? (
          <button onClick={() => setStep(step + 1)} data-hover
            style={{ padding: '12px 24px', borderRadius: 999, background: 'var(--fg)', color: 'var(--bg)', border: 'none', cursor: 'pointer', fontSize: 13, fontWeight: 500 }}>
            {lab('Continue', 'Fortsett')} →
          </button>
        ) : (
          <button data-hover style={{ padding: '12px 24px', borderRadius: 999, background: 'var(--accent)', color: 'var(--bg)', border: 'none', cursor: 'pointer', fontSize: 13, fontWeight: 500 }}>
            {lab('Send enquiry', 'Send forespørsel')} ✓
          </button>
        )}
      </div>
    </div>
  );
}

// VARIANT C: Inline — calendar + service cards on right
function BookingInline({ lang, copy }) {
  const [date, setDate] = React.useState({ y: 2026, m: 4, d: 22 });
  const [service, setService] = React.useState('wedding');
  const lab = (k, alt) => lang === 'EN' ? k : alt;

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: 56, alignItems: 'flex-start' }}>
      <div>
        <div className="mono" style={{ color: 'var(--fg-mute)', marginBottom: 12 }}>— {lab('Choose your event type', 'Velg arrangement')}</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 10, marginBottom: 32 }}>
          {SERVICES.map(s => (
            <button key={s.v} onClick={() => setService(s.v)} data-hover
              style={{
                padding: '20px 18px', border: '1px solid', borderColor: service === s.v ? 'var(--fg)' : 'var(--line-c)',
                background: service === s.v ? 'var(--bg-2)' : 'var(--bg)',
                color: 'var(--fg)', borderRadius: 4, cursor: 'pointer', textAlign: 'left',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              }}>
              <span className="serif" style={{ fontSize: 20, fontWeight: 400 }}>{s[lang === 'EN' ? 'en' : 'no']}</span>
              <span style={{ width: 10, height: 10, borderRadius: 999, border: '1px solid var(--fg)', background: service === s.v ? 'var(--fg)' : 'transparent' }} />
            </button>
          ))}
        </div>

        <div className="mono" style={{ color: 'var(--fg-mute)', marginBottom: 12 }}>— {lab('Pick a date', 'Velg dato')}</div>
        <MiniCal value={date} onChange={setDate} lang={lang} />
      </div>

      <aside style={{ position: 'sticky', top: 100, padding: 24, background: 'var(--bg-2)', borderRadius: 4 }}>
        <div className="mono" style={{ color: 'var(--fg-mute)' }}>— {lab('Your enquiry', 'Din forespørsel')}</div>
        <div style={{ marginTop: 20, paddingBottom: 20, borderBottom: '1px solid var(--line-c)' }}>
          <div className="mono" style={{ color: 'var(--fg-mute)', fontSize: 9 }}>{lab('Event', 'Arrangement')}</div>
          <div className="serif" style={{ fontSize: 22, fontWeight: 400, marginTop: 4 }}>
            {SERVICES.find(s => s.v === service)?.[lang === 'EN' ? 'en' : 'no']}
          </div>
        </div>
        <div style={{ paddingTop: 20 }}>
          <div className="mono" style={{ color: 'var(--fg-mute)', fontSize: 9 }}>{lab('Date', 'Dato')}</div>
          <div className="serif" style={{ fontSize: 22, fontWeight: 400, marginTop: 4 }}>
            {date.d} · {['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][date.m]} {date.y}
          </div>
        </div>

        <Field label={lab('Name', 'Navn')}><input style={fld()} placeholder="Jane S." /></Field>
        <Field label={lab('Email', 'E-post')}><input style={fld()} type="email" /></Field>

        <button data-hover style={{
          marginTop: 24, padding: 14, width: '100%', border: 'none', borderRadius: 4,
          background: 'var(--fg)', color: 'var(--bg)', cursor: 'pointer', fontSize: 13, fontWeight: 500,
        }}>
          {lab('Continue →', 'Fortsett →')}
        </button>
        <div style={{ marginTop: 12, fontSize: 11, color: 'var(--fg-mute)', textAlign: 'center' }}>
          {lab('We reply within 1 working day', 'Vi svarer innen 1 arbeidsdag')}
        </div>
      </aside>
    </div>
  );
}

function BookingSection({ variant, lang, copy }) {
  return (
    <section id="booking" style={{ padding: '160px 32px 80px' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto' }}>
        <Reveal>
          <div style={{ marginBottom: 64, maxWidth: 720 }}>
            <div className="mono" style={{ color: 'var(--fg-mute)', marginBottom: 20 }}>— {copy.booking.eyebrow}</div>
            <h2 className="serif" style={{ fontSize: 'clamp(40px, 5.4vw, 88px)', lineHeight: 1, margin: 0, fontWeight: 300, letterSpacing: '-0.035em' }}>
              {copy.booking.title}
            </h2>
            <p style={{ marginTop: 24, fontSize: 16, lineHeight: 1.6, color: 'var(--fg-soft)', maxWidth: 540 }}>{copy.booking.lede}</p>
          </div>
        </Reveal>
        <Reveal delay={120}>
          {variant === 'wizard' && <BookingWizard lang={lang} copy={copy} />}
          {variant === 'inline' && <BookingInline lang={lang} copy={copy} />}
          {variant === 'calendar' && <BookingCalendar lang={lang} copy={copy} />}
        </Reveal>
      </div>
    </section>
  );
}

Object.assign(window, { BookingSection, BookingCalendar, BookingWizard, BookingInline });
