const PRIMARY_COLORS = [
  {
    bg: '#95D600',
    name: 'Monster Green',
    codes: [
      { label: 'HEX', value: '#95D600' },
      { label: 'RGB', value: '149 · 214 · 0' },
      { label: 'CMYK', value: '54 · 0 · 100 · 0' },
      { label: 'Pantone', value: 'PMS 376 C' },
    ],
  },
  {
    bg: '#000000',
    name: 'Monster Black',
    border: '1px solid #222',
    codes: [
      { label: 'HEX', value: '#000000' },
      { label: 'RGB', value: '0 · 0 · 0' },
      { label: 'CMYK', value: '0 · 0 · 0 · 100' },
      { label: 'Pantone', value: 'Process Black C' },
    ],
  },
]

const SECONDARY_COLORS = [
  {
    bg: '#ffffff',
    name: 'Monster White',
    border: '1px solid #ddd',
    nameColor: '#111',
    codes: [
      { label: 'HEX', value: '#FFFFFF', labelColor: '#555', valueColor: '#333' },
      { label: 'RGB', value: '255 · 255 · 255', labelColor: '#555', valueColor: '#333' },
    ],
  },
  {
    bg: '#919296',
    name: 'Monster Silver',
    codes: [
      { label: 'HEX', value: '#919296' },
      { label: 'RGB', value: '145 · 146 · 150' },
    ],
  },
  {
    bg: '#161616',
    border: '1px solid #333',
    name: 'Monster Dark',
    codes: [
      { label: 'HEX', value: '#161616' },
      { label: 'Uso', value: 'Fondos secundarios' },
    ],
  },
]

const Swatch = ({ color }) => (
  <div>
    <div
      className="color-swatch"
      style={{ background: color.bg, border: color.border || 'none' }}
    />
    <div className="color-info-block">
      <div className="color-name" style={{ color: color.nameColor || 'var(--white)' }}>
        {color.name}
      </div>
      <div className="color-code-row">
        {color.codes.map(({ label, value, labelColor, valueColor }) => (
          <div
            key={label}
            className="color-code-item"
            style={{ color: labelColor || 'var(--gray)' }}
          >
            {label}{' '}
            <strong style={{ color: valueColor || 'var(--white)' }}>{value}</strong>
          </div>
        ))}
      </div>
    </div>
  </div>
)

const GamaCromatica = () => (
  <section className="brand-section" id="colores">
    <div className="container">

      {/* ── Encabezado ── */}
      <div className="row mb-5">
        <div className="col-12">
          <span className="section-label">05 · Gama Cromática</span>
          <div className="divider-line" />
          <h2 style={{ fontSize: '4rem' }}>GAMA CROMÁTICA</h2>
        </div>
      </div>

      {/* ── Primarios ── */}
      <div className="row g-0 mb-2">
        {PRIMARY_COLORS.map((c) => (
          <div className="col-md-6" key={c.name}>
            <Swatch color={c} />
          </div>
        ))}
      </div>

      {/* ── Secundarios ── */}
      <div className="row g-0 mb-5">
        {SECONDARY_COLORS.map((c) => (
          <div className="col-md-4" key={c.name}>
            <Swatch color={c} />
          </div>
        ))}
      </div>

      {/* ── Nota de uso ── */}
      <div className="row">
        <div className="col-lg-8">
          <div style={{ background: 'var(--card-bg)', borderLeft: '4px solid var(--green)', padding: '2rem' }}>
            <span className="section-label" style={{ fontSize: '.7rem' }}>Nota de Uso</span>
            <p style={{ marginBottom: 0 }}>
              El verde Monster (#95D600) debe usarse como color de acento y énfasis, nunca como
              fondo de texto corrido. El negro es el fondo primario. Las variantes de producto
              pueden incorporar paletas extendidas, pero siempre manteniendo al menos uno de los
              colores de la paleta principal.
            </p>
          </div>
        </div>
      </div>

    </div>
  </section>
)

export default GamaCromatica
