const VALUES = [
  {
    icon: '⚡',
    title: 'ENERGÍA',
    text: 'Cada elemento visual transmite dinamismo. El verde neón (#95D600) es el color de mayor vibración en el espectro visible, elegido por su impacto inmediato.',
  },
  {
    icon: '🖤',
    title: 'REBELIÓN',
    text: 'El negro dominante no es solo fondo: es actitud. Representa la oscuridad que precede a la descarga de energía, el poder contenido antes de explotar.',
  },
  {
    icon: '🎯',
    title: 'AUTENTICIDAD',
    text: 'El logotipo no ha cambiado desde 2002. Esta consistencia es una declaración: Monster no sigue tendencias, las define.',
  },
]

const Concepto = () => (
  <section className="brand-section pattern-bg" id="concepto">
    <div className="container">

      {/* ── Encabezado ── */}
      <div className="row mb-5">
        <div className="col-12">
          <span className="section-label">02 · Concepto y Simbología</span>
          <div className="divider-line" />
          <h2 style={{ fontSize: '4rem' }}>CONCEPTO &amp; SIMBOLOGÍA</h2>
        </div>
      </div>

      {/* ── Intro texto ── */}
      <div className="row g-4 mb-5">
        <div className="col-lg-6">
          <p>
            El concepto central gira en torno a la dualidad{' '}
            <strong style={{ color: 'var(--green)' }}>poder / libertad</strong>. El logotipo
            representa tres garras rasgando el metal de la lata, como si una bestia intentara
            salir desde adentro. Este símbolo evoca energía desbordante, fuerza bruta y un
            espíritu que no puede ser contenido.
          </p>
          <p>
            El diseño fue desarrollado por{' '}
            <strong style={{ color: 'var(--white)' }}>McLean Design</strong>, estudio con sede
            en California, con la intención de que cada elemento visual comunique la promesa de
            marca sin necesidad de palabras: intensidad, autenticidad y pertenencia.
          </p>
        </div>
        <div className="col-lg-6">
          <p>
            Los valores fundamentales que se manifiestan a través de su identidad visual son:{' '}
            <strong style={{ color: 'var(--green)' }}>energía</strong>,{' '}
            <strong style={{ color: 'var(--green)' }}>rebelión</strong> y{' '}
            <strong style={{ color: 'var(--green)' }}>autenticidad</strong>. Estos no son
            conceptos decorativos, sino el núcleo de cada decisión de diseño: desde el verde
            neón que casi parece eléctrico, hasta el negro absoluto que actúa como un vacío
            de poder.
          </p>
        </div>
      </div>

      {/* ── Cards de valores ── */}
      <div className="row g-4">
        {VALUES.map(({ icon, title, text }) => (
          <div className="col-md-4" key={title}>
            <div className="concept-card">
              <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '1rem' }}>
                {icon}
              </span>
              <h4 style={{ fontSize: '2rem', color: 'var(--green)', marginBottom: '.75rem' }}>
                {title}
              </h4>
              <p style={{ marginBottom: 0 }}>{text}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  </section>
)

export default Concepto
