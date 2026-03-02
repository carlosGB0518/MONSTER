import MonsterM from './MonsterM'

const SIZES = [
  {
    width: 200, height: 60, mSize: null, label: '200px+ · Uso completo',
    description: 'Logotipo completo con símbolo y wordmark',
    wordmark: true,
  },
  {
    width: 100, height: 50, mSize: 30, label: '100–199px · Solo símbolo',
    description: 'Redes sociales, avatares e iconos pequeños',
  },
  {
    width: 48, height: 48, mSize: 20, label: '<100px · Favicon',
    description: 'Favicon, app icon, miniaturas',
  },
]

const TamanoReserva = () => (
  <section className="brand-section" id="tamano">
    <div className="container">

      {/* ── Encabezado ── */}
      <div className="row mb-5">
        <div className="col-12">
          <span className="section-label">07 · Tamaño y Área de Reserva</span>
          <div className="divider-line" />
          <h2 style={{ fontSize: '4rem' }}>TAMAÑO &amp; ÁREA DE RESERVA</h2>
        </div>
      </div>

      <div className="row g-5">

        {/* ── Texto + tamaños ── */}
        <div className="col-lg-5">
          <p>
            El área de reserva garantiza que el logotipo no sea comprometido por otros elementos
            visuales. Se define como la anchura de la "M" del símbolo en cada lado del conjunto.
          </p>
          <p>
            El tamaño mínimo recomendado es{' '}
            <strong style={{ color: 'var(--green)' }}>200px de ancho</strong> para aplicaciones
            digitales y <strong style={{ color: 'var(--green)' }}>40mm</strong> para impresión.
          </p>

          <div style={{ marginTop: '2rem' }}>
            {SIZES.map(({ width, height, mSize, label, description, wordmark }) => (
              <div className="size-row" key={label}>
                <div className="size-logo-wrap" style={{ width, height }}>
                  {wordmark ? (
                    <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.1rem', color: 'var(--green)', letterSpacing: '.06em' }}>
                      MONSTER ENERGY
                    </div>
                  ) : (
                    <MonsterM size={mSize} color="#95D600" />
                  )}
                </div>
                <div>
                  <div className="size-tag">{label}</div>
                  <div style={{ color: 'var(--light-gray)', fontSize: '.9rem' }}>{description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Diagrama de área de reserva ── */}
        <div className="col-lg-7 d-flex align-items-center justify-content-center">
          <div style={{ padding: '3rem', width: '100%' }}>
            <div className="clearzone-box">
              <span className="clearzone-label" style={{ top: '.5rem', left: '50%', transform: 'translateX(-50%)' }}>
                Área de Reserva = 1X
              </span>
              <span className="clearzone-label" style={{ bottom: '.5rem', left: '50%', transform: 'translateX(-50%)' }}>
                Área de Reserva = 1X
              </span>
              <span className="clearzone-label" style={{ left: '.5rem', top: '50%', transform: 'translateY(-50%) rotate(-90deg)' }}>
                1X
              </span>
              <span className="clearzone-label" style={{ right: '.5rem', top: '50%', transform: 'translateY(-50%) rotate(90deg)' }}>
                1X
              </span>
              <div style={{ background: '#000', padding: '2rem 3rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <MonsterM size={80} color="#95D600" />
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.6rem', color: '#fff', letterSpacing: '.12em', marginTop: '.5rem' }}>
                  MONSTER ENERGY
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
)

export default TamanoReserva
