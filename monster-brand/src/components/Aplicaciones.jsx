import MonsterM from './MonsterM'

const TONE_VERSIONS = [
  {
    bg: '#000', border: '1px solid #222',
    mColor: '#95D600', textColor: '#fff',
    title: 'NEGATIVO',
    desc: 'Logo en verde y blanco sobre fondo negro absoluto. Versión principal y de mayor impacto visual. Preferida para medios digitales, cartelería y comunicación oficial.',
  },
  {
    bg: '#f5f5f5', border: '1px solid #ddd',
    mColor: '#000', textColor: '#111',
    title: 'POSITIVO',
    desc: 'Logo en negro sobre fondo claro. Versión de alto contraste para impresión en blanco y negro, merchandising monocromático o contextos donde no es posible el color.',
  },
]

const VOICE_ATTRS = [
  { word: 'AUDAZ',      sub: 'Sin rodeos ni medias tintas' },
  { word: 'DIRECTO',    sub: 'Mensajes concisos y poderosos' },
  { word: 'AUTÉNTICO',  sub: 'Arraigado en la cultura real' },
  { word: 'INTENSO',    sub: 'Máxima energía en cada mensaje' },
]

const Aplicaciones = () => (
  <section className="brand-section" id="tono">
    <div className="container">

      {/* ── Encabezado ── */}
      <div className="row mb-5">
        <div className="col-12">
          <span className="section-label">09 · Tono Continuo y Alto Contraste</span>
          <div className="divider-line" />
          <h2 style={{ fontSize: '4rem' }}>TONO CONTINUO</h2>
        </div>
      </div>

      {/* ── Versiones Negativo / Positivo ── */}
      <div className="row g-4 mb-5">
        {TONE_VERSIONS.map(({ bg, border, mColor, textColor, title, desc }) => (
          <div className="col-lg-6" key={title}>
            <div className="tone-card">
              <div style={{ background: bg, border, padding: '2.5rem', textAlign: 'center', marginBottom: '1.5rem' }}>
                <MonsterM size={70} color={mColor} />
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.6rem', color: textColor, letterSpacing: '.12em', marginTop: '.5rem' }}>
                  MONSTER ENERGY
                </div>
              </div>
              <h4 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '2rem', color: 'var(--green)', marginBottom: '.75rem' }}>
                {title}
              </h4>
              <p style={{ marginBottom: 0 }}>{desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ── Voz de marca ── */}
      <div className="row mb-5">
        <div className="col-12 mb-4">
          <span className="section-label" style={{ fontSize: '.7rem' }}>Voz y Tono de Marca</span>
        </div>
        {VOICE_ATTRS.map(({ word, sub }) => (
          <div className="col-md-3 col-6 mb-3" key={word}>
            <div style={{ borderLeft: '3px solid var(--green)', paddingLeft: '1rem' }}>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.8rem', color: 'var(--white)' }}>
                {word}
              </div>
              <div style={{ fontSize: '.8rem', color: 'var(--gray)' }}>{sub}</div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Ticker ── */}
      <div className="row mb-5">
        <div className="col-12">
          <div style={{ background: 'var(--green)', padding: '1.5rem 2rem', overflow: 'hidden', whiteSpace: 'nowrap' }}>
            <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.5rem', color: '#000', letterSpacing: '.08em', display: 'inline-block', animation: 'marquee 20s linear infinite' }}>
              UNLEASH THE BEAST &nbsp;·&nbsp; MONSTER ENERGY &nbsp;·&nbsp; UNLEASH THE BEAST &nbsp;·&nbsp; MONSTER ENERGY &nbsp;·&nbsp; UNLEASH THE BEAST &nbsp;·&nbsp; MONSTER ENERGY &nbsp;·&nbsp; UNLEASH THE BEAST &nbsp;·&nbsp; MONSTER ENERGY &nbsp;·&nbsp;
            </span>
          </div>
        </div>
      </div>

      {/* ── Sección 10: Aplicaciones ── */}
      <div className="row mt-5 mb-4">
        <div className="col-12">
          <span className="section-label">10 · Aplicaciones de Marca</span>
          <div className="divider-line" />
          <h2 style={{ fontSize: '4rem' }}>APLICACIONES</h2>
        </div>
      </div>

      <div className="row g-4">

        {/* Lata */}
        <div className="col-md-4">
          <div className="card-dark" style={{ padding: '2rem' }}>
            <span className="section-label" style={{ fontSize: '.7rem' }}>Packaging — Lata</span>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 220 }}>
              <div style={{
                width: 90, height: 200,
                background: 'linear-gradient(180deg, #111 0%, #000 100%)',
                borderRadius: 12,
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center',
                border: '2px solid #333', position: 'relative', overflow: 'hidden',
                boxShadow: '0 0 40px rgba(149,214,0,.2)',
              }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: 'var(--green)' }} />
                <MonsterM size={50} color="#95D600" />
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '.85rem', color: '#fff', letterSpacing: '.1em', textAlign: 'center', lineHeight: 1.2 }}>
                  MONSTER<br /><span style={{ color: 'var(--green)', fontSize: '.7rem' }}>ENERGY</span>
                </div>
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 4, background: 'var(--green)' }} />
              </div>
            </div>
            <p style={{ fontSize: '.85rem', marginBottom: 0, marginTop: '1rem' }}>
              El fondo negro es el canvas primario. Los colores de acento diferencian las variantes sin comprometer la identidad central.
            </p>
          </div>
        </div>

        {/* Digital */}
        <div className="col-md-4">
          <div className="card-dark" style={{ padding: '2rem' }}>
            <span className="section-label" style={{ fontSize: '.7rem' }}>Digital — Redes Sociales</span>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-end', justifyContent: 'center', minHeight: 220 }}>
              {/* Avatar */}
              <div style={{ width: 70, height: 70, background: '#000', borderRadius: '50%', border: '2.5px solid var(--green)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <MonsterM size={38} color="#95D600" />
              </div>
              {/* Story */}
              <div style={{ width: 100, height: 170, background: '#000', borderRadius: 8, border: '1px solid #333', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end', padding: '1rem', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 40%, rgba(0,0,0,.8) 100%)' }} />
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}>
                  <MonsterM size={60} color="rgba(149,214,0,0.3)" />
                </div>
                <div style={{ position: 'relative', zIndex: 1, fontFamily: "'Bebas Neue', sans-serif", fontSize: '.7rem', color: 'var(--green)', letterSpacing: '.12em', textAlign: 'center' }}>
                  UNLEASH<br />THE BEAST
                </div>
              </div>
            </div>
            <p style={{ fontSize: '.85rem', marginBottom: 0, marginTop: '1rem' }}>
              En redes sociales el símbolo M se usa como avatar. Posts y Stories siguen la paleta verde-negro con tipografía Bebas Neue.
            </p>
          </div>
        </div>

        {/* Merch */}
        <div className="col-md-4">
          <div className="card-dark" style={{ padding: '2rem' }}>
            <span className="section-label" style={{ fontSize: '.7rem' }}>Merchandising</span>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 220 }}>
              <div style={{ position: 'relative', width: 160 }}>
                <svg viewBox="0 0 160 140" width="160" fill="#111" stroke="#333" strokeWidth="1.5">
                  <path d="M55 10 L20 40 L35 50 L30 130 L130 130 L125 50 L140 40 L105 10 Q95 25 80 25 Q65 25 55 10Z" />
                </svg>
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-55%)' }}>
                  <MonsterM size={55} color="#95D600" />
                </div>
              </div>
            </div>
            <p style={{ fontSize: '.85rem', marginBottom: 0, marginTop: '1rem' }}>
              En merchandising la versión en una sola tinta es prioritaria para garantizar reproducción fiel en cualquier soporte.
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>
)

export default Aplicaciones
