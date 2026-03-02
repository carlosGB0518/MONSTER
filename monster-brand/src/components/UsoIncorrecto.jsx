const RULES = [
  {
    num: '01',
    title: 'NO DISTORSIONAR EL LOGO',
    preview: (
      <div style={{ textAlign: 'center', padding: '1rem 0', opacity: .6 }}>
        <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '2rem', color: 'var(--green)', display: 'inline-block', transform: 'scaleX(1.8)', letterSpacing: '.1em' }}>M</span>
      </div>
    ),
    text: 'No estirar, comprimir ni deformar el logotipo en ningún eje.',
  },
  {
    num: '02',
    title: 'NO CAMBIAR LOS COLORES',
    preview: (
      <div style={{ textAlign: 'center', padding: '1rem 0', opacity: .6 }}>
        <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '2rem', color: '#f00', letterSpacing: '.1em' }}>MONSTER ENERGY</span>
      </div>
    ),
    text: 'Solo se permiten las paletas aprobadas: verde/negro, negro/blanco y verde/blanco.',
  },
  {
    num: '03',
    title: 'NO AGREGAR EFECTOS',
    preview: (
      <div style={{ textAlign: 'center', padding: '1rem 0', opacity: .6 }}>
        <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '2rem', color: 'var(--green)', textShadow: '0 0 20px #f0f, 5px 5px 0 red', letterSpacing: '.1em' }}>M</span>
      </div>
    ),
    text: 'No aplicar sombras, brillos, degradados ni efectos no aprobados sobre el logotipo.',
  },
  {
    num: '04',
    title: 'NO ROTAR EL LOGO',
    preview: (
      <div style={{ textAlign: 'center', padding: '1rem 0', opacity: .6 }}>
        <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '2rem', color: 'var(--green)', display: 'inline-block', transform: 'rotate(45deg)', letterSpacing: '.1em' }}>MONSTER</span>
      </div>
    ),
    text: 'El logotipo siempre se presenta en posición horizontal estándar.',
  },
  {
    num: '05',
    title: 'NO INVADIR EL ÁREA DE RESERVA',
    preview: (
      <div style={{ textAlign: 'center', padding: '1rem 0', position: 'relative' }}>
        <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.6rem', color: 'var(--green)', letterSpacing: '.1em', opacity: .6 }}>MONSTER</span>
        <span style={{ position: 'absolute', top: '50%', right: 0, transform: 'translateY(-50%)', fontFamily: "'Barlow Condensed'", fontSize: '1rem', color: 'red', fontWeight: 700 }}>TEXTO</span>
      </div>
    ),
    text: 'Ningún elemento puede invadir el área de reserva definida alrededor del logotipo.',
  },
  {
    num: '06',
    title: 'NO USAR FONDOS ILEGIBLES',
    preview: (
      <div style={{ textAlign: 'center', padding: '1rem', background: 'linear-gradient(135deg,#f00,#ff0,#0f0,#00f)', borderRadius: 4 }}>
        <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.6rem', color: 'var(--green)', letterSpacing: '.1em', opacity: .7 }}>MONSTER ENERGY</span>
      </div>
    ),
    text: 'No colocar el logo sobre fondos con patrones o colores que comprometan su legibilidad.',
  },
]

const UsoIncorrecto = () => (
  <section className="brand-section pattern-bg" id="uso">
    <div className="container">

      {/* ── Encabezado ── */}
      <div className="row mb-5">
        <div className="col-12">
          <span className="section-label">08 · Uso Incorrecto</span>
          <div className="divider-line" />
          <h2 style={{ fontSize: '4rem' }}>USO INCORRECTO</h2>
        </div>
      </div>

      <div className="row g-4">
        {RULES.map(({ num, title, preview, text }) => (
          <div className="col-md-6 col-lg-4" key={num}>
            <div className="incorrect-card">
              <div className="no-badge">✕</div>
              <div className="rule-number">{num}</div>
              <h5 style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700, fontSize: '1.1rem',
                letterSpacing: '.08em', color: 'var(--white)',
                marginBottom: '.75rem',
              }}>
                {title}
              </h5>
              {preview}
              <p style={{ fontSize: '.85rem', marginBottom: 0, marginTop: '.75rem' }}>{text}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  </section>
)

export default UsoIncorrecto
