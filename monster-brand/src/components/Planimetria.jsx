import MonsterM from './MonsterM'

const MEASURES = [
  { opacity: 1,   label: 'X = Alto del símbolo M' },
  { opacity: 0.6, label: '1.3X = Altura mayúsculas wordmark' },
  { opacity: 0.4, label: '2.3X = Espacio de reserva lateral' },
  { opacity: 0.2, label: '0.5X = Separación símbolo / wordmark' },
]

const Planimetria = () => (
  <section className="brand-section-alt pattern-bg" id="planimetria">
    <div className="container">

      {/* ── Encabezado ── */}
      <div className="row mb-5">
        <div className="col-12">
          <span className="section-label">04 · Planimetría</span>
          <div className="divider-line" />
          <h2 style={{ fontSize: '4rem' }}>PLANIMETRÍA</h2>
        </div>
      </div>

      <div className="row g-5 align-items-center">

        {/* ── Texto e indicadores ── */}
        <div className="col-lg-5">
          <p>
            El logo utiliza una tipografía custom desarrollada por McLean Design. Las letras tienen
            tamaños ligeramente variables para crear un efecto visual único. La X de referencia es
            el cuerpo de la letra "M" del símbolo central.
          </p>
          <div style={{ marginTop: '2rem' }}>
            {MEASURES.map(({ opacity, label }) => (
              <div key={label} style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
                <div style={{
                  width: 12, height: 12,
                  background: `rgba(149,214,0,${opacity})`,
                  borderRadius: '50%', flexShrink: 0,
                }} />
                <span style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: '.85rem', letterSpacing: '.1em',
                  color: 'var(--light-gray)',
                }}>
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Diagrama ── */}
        <div className="col-lg-7">
          <div style={{
            background: 'var(--card-bg)',
            padding: '2.5rem',
            border: '1px solid #222',
            position: 'relative',
          }}>
            {/* Líneas de construcción horizontales */}
            <div style={{ position: 'absolute', top: '15%', left: 0, right: 0, height: 1, background: 'rgba(149,214,0,.25)' }} />
            <div style={{ position: 'absolute', top: '85%', left: 0, right: 0, height: 1, background: 'rgba(149,214,0,.25)' }} />
            {/* Líneas verticales */}
            <div style={{ position: 'absolute', top: 0, bottom: 0, left: '5%', width: 1, background: 'rgba(149,214,0,.25)' }} />
            <div style={{ position: 'absolute', top: 0, bottom: 0, right: '5%', width: 1, background: 'rgba(149,214,0,.25)' }} />

            {/* Logo centrado */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '3rem 2rem' }}>
              <MonsterM size={100} color="#95D600" />
              <div style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: '2rem', color: '#fff',
                letterSpacing: '.12em', marginTop: '.5rem',
              }}>
                MONSTER ENERGY
              </div>
            </div>

            {/* Etiquetas de medidas */}
            <div style={{ position: 'absolute', top: '.5rem', right: '.75rem', fontFamily: "'Barlow Condensed'", fontSize: '.65rem', letterSpacing: '.12em', color: 'var(--green)' }}>
              2.3X →
            </div>
            <div style={{ position: 'absolute', bottom: '.5rem', left: '.75rem', fontFamily: "'Barlow Condensed'", fontSize: '.65rem', letterSpacing: '.12em', color: 'var(--green)' }}>
              ← 2.3X
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
)

export default Planimetria
