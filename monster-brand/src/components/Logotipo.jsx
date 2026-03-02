import MonsterM from './MonsterM'

/* ── Logo + wordmark reutilizable ── */
const LogoLockup = ({ mColor = '#95D600', textColor = '#fff', bgColor = '#000', mSize = 80 }) => (
  <div style={{ background: bgColor, padding: '2rem', textAlign: 'center' }}>
    <MonsterM size={mSize} color={mColor} />
    <div style={{
      fontFamily: "'Bebas Neue', sans-serif",
      fontSize: '1.6rem',
      color: textColor,
      letterSpacing: '.12em',
      marginTop: '.5rem',
    }}>
      MONSTER ENERGY
    </div>
  </div>
)

const INFO_CARDS = [
  {
    label: 'El símbolo "M"',
    text: 'Tres trazos verticales que simulan las garras de una bestia rasgando una superficie. Diseñado por McLean Design en 2002, permanece sin modificaciones.',
  },
  {
    label: 'El wordmark',
    text: 'Tipografía custom con caracteres únicos. "ENERGY" en estilo geométrico contrasta con la agresividad del símbolo principal.',
  },
  {
    label: 'El conjunto',
    text: 'Símbolo y wordmark funcionan de forma independiente en aplicaciones reducidas, pero el conjunto completo es la expresión más poderosa.',
  },
]

const Logotipo = () => (
  <section className="brand-section" id="logo">
    <div className="container">

      {/* ── Encabezado ── */}
      <div className="row mb-5">
        <div className="col-12">
          <span className="section-label">03 · El Logotipo</span>
          <div className="divider-line" />
          <h2 style={{ fontSize: '4rem' }}>EL LOGOTIPO</h2>
        </div>
      </div>

      {/* ── Versiones del logo ── */}
      <div className="row g-4 mb-5">

        {/* Principal */}
        <div className="col-lg-8">
          <div className="logo-display" style={{ height: 360, background: '#000', border: '1px solid #222' }}>
            <div style={{ textAlign: 'center' }}>
              <MonsterM size={120} color="#95D600" />
              <div style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: '2.8rem', color: '#fff',
                letterSpacing: '.12em', marginTop: '.5rem',
              }}>
                MONSTER ENERGY
              </div>
            </div>
          </div>
          <div style={{ background: 'var(--card-bg)', padding: '.75rem 1.25rem' }}>
            <span className="section-label" style={{ fontSize: '.7rem', marginBottom: 0 }}>
              Versión Principal — Fondo Negro
            </span>
          </div>
        </div>

        {/* Secundarias */}
        <div className="col-lg-4">
          <div className="row g-3">
            <div className="col-12">
              <div style={{ background: 'var(--green)', padding: '1.5rem', textAlign: 'center' }}>
                <MonsterM size={55} color="#000" />
                <div style={{ fontFamily: "'Bebas Neue'", fontSize: '1.1rem', color: '#000', letterSpacing: '.1em' }}>
                  MONSTER ENERGY
                </div>
              </div>
              <div style={{ background: 'var(--card-bg)', padding: '.5rem 1rem' }}>
                <span className="section-label" style={{ fontSize: '.65rem', marginBottom: 0 }}>Versión Fondo Verde</span>
              </div>
            </div>
            <div className="col-12">
              <div style={{ background: '#fff', padding: '1.5rem', textAlign: 'center' }}>
                <MonsterM size={55} color="#95D600" />
                <div style={{ fontFamily: "'Bebas Neue'", fontSize: '1.1rem', color: '#111', letterSpacing: '.1em' }}>
                  MONSTER ENERGY
                </div>
              </div>
              <div style={{ background: 'var(--card-bg)', padding: '.5rem 1rem' }}>
                <span className="section-label" style={{ fontSize: '.65rem', marginBottom: 0 }}>Versión Fondo Blanco</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Info cards ── */}
      <hr style={{ border: 0, height: '1px', background: '#222', margin: '2rem 0' }} />
      <div className="row g-4">
        {INFO_CARDS.map(({ label, text }) => (
          <div className="col-md-4" key={label}>
            <span className="section-label" style={{ fontSize: '.7rem' }}>{label}</span>
            <p>{text}</p>
          </div>
        ))}
      </div>

    </div>
  </section>
)

export default Logotipo
