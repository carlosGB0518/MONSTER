const STATS = [
  { number: '100+', label: 'Países con presencia' },
  { number: '34+',  label: 'Variedades de producto' },
  { number: '2002', label: 'Año de fundación' },
]

const LaMarca = () => (
  <section className="brand-section-alt" id="la-marca">
    <div className="container">

      {/* ── Encabezado ── */}
      <div className="row mb-5">
        <div className="col-12">
          <span className="section-label">01 · La Marca</span>
          <div className="divider-line" />
          <h2 style={{ fontSize: '4rem' }}>LA MARCA</h2>
        </div>
      </div>

      {/* ── Contenido ── */}
      <div className="row g-4">

        {/* Texto */}
        <div className="col-lg-8">
          <div style={{
            background: 'var(--card-bg)',
            borderLeft: '4px solid var(--green)',
            padding: '2.5rem',
            height: '100%',
          }}>
            <p style={{ fontSize: '1.05rem' }}>
              Monster Energy es una marca de bebidas energéticas producida por Monster Beverage
              Corporation, lanzada en abril de 2002. Desde su origen, se ha posicionado como un
              símbolo de energía, rebelión y cultura extrema, asociada con deportes de alto
              rendimiento, música y el estilo de vida de nuevas generaciones.
            </p>
            <p>
              La marca opera en más de 100 países y cuenta con más de 34 variedades de producto.
              Su identidad visual es una de las más reconocidas del mundo en la industria de
              bebidas: el icónico símbolo de la "M" —tres trazos como garras— sobre fondo negro,
              combinado con el verde neón que evoca energía, vitalidad e intensidad.
            </p>
            <p style={{ marginBottom: 0 }}>
              Su posicionamiento no vende una bebida, vende un estilo de vida: agresivo,
              auténtico y sin límites.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="col-lg-4">
          <div className="row g-3">
            {STATS.map(({ number, label }) => (
              <div className="col-6 col-lg-12" key={label}>
                <div className="stat-box">
                  <div className="stat-number">{number}</div>
                  <div className="stat-label">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  </section>
)

export default LaMarca
