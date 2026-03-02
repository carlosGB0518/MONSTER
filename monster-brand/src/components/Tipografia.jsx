const TYPE_SCALE = [
  { style: { fontFamily: "'Bebas Neue', sans-serif", fontSize: '4rem', color: 'var(--white)', lineHeight: 1.1 }, label: 'H1 · 64px Bebas Neue' },
  { style: { fontFamily: "'Bebas Neue', sans-serif", fontSize: '2.5rem', color: 'var(--white)', lineHeight: 1.2 }, label: 'H2 · 40px Bebas Neue' },
  { style: { fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '1.5rem', color: 'var(--green)', letterSpacing: '.06em' }, label: 'H3 · 24px Barlow Condensed 700' },
  { style: { fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: '1rem', color: 'var(--light-gray)', maxWidth: 600 }, label: 'Body · 16px Barlow Light — Texto corrido legible y cómodo para lectura en párrafos.' },
  { style: { fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: '.78rem', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--gray)' }, label: 'LABEL · 12px Barlow Condensed · ALL CAPS' },
]

const Tipografia = () => (
  <section className="brand-section-alt pattern-bg" id="tipografia">
    <div className="container">

      {/* ── Encabezado ── */}
      <div className="row mb-5">
        <div className="col-12">
          <span className="section-label">06 · Tipografía</span>
          <div className="divider-line" />
          <h2 style={{ fontSize: '4rem' }}>TIPOGRAFÍA</h2>
        </div>
      </div>

      {/* ── Muestra gigante ── */}
      <div className="row mb-5">
        <div className="col-12" style={{ borderLeft: '4px solid var(--green)', paddingLeft: '2rem' }}>
          <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(4rem, 10vw, 8rem)', lineHeight: 1, color: 'var(--white)' }}>
            Aa Bb
          </div>
          <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: '2rem', color: 'var(--green)' }}>
            MONSTER ENERGY — Bold &amp; Condensed
          </div>
        </div>
      </div>

      {/* ── Tarjetas de fuentes ── */}
      <div className="row g-4 mb-5">
        <div className="col-md-6">
          <div className="font-card" style={{ borderColor: 'var(--green)' }}>
            <span className="section-label" style={{ fontSize: '.7rem' }}>Titulares y Display</span>
            <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '3.5rem', color: 'var(--white)', marginBottom: '.25rem' }}>
              Bebas Neue
            </h3>
            <p style={{ fontSize: '.85rem' }}>
              Fuente display de peso único, con trazos anchos y alto impacto visual.
              Usada para titulares, encabezados y cualquier texto de gran escala.
            </p>
            <div className="alphabet-row mt-3">A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</div>
            <div className="alphabet-row mt-1">0 1 2 3 4 5 6 7 8 9</div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="font-card" style={{ borderColor: '#444' }}>
            <span className="section-label" style={{ fontSize: '.7rem' }}>Cuerpo de Texto</span>
            <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '3.5rem', color: 'var(--white)', marginBottom: '.25rem' }}>
              Barlow
            </h3>
            <p style={{ fontSize: '.85rem' }}>
              Familia tipográfica versátil en sus variantes Condensed y Regular.
              Para párrafos, etiquetas, descripciones y textos de apoyo.
            </p>
            <div className="alphabet-row secondary mt-3">A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</div>
            <div className="alphabet-row secondary mt-1">a b c d e f g h i j k l m n o p q r s t u v w x y z</div>
          </div>
        </div>
      </div>

      {/* ── Escala tipográfica ── */}
      <div className="row">
        <div className="col-12">
          <span className="section-label" style={{ fontSize: '.7rem' }}>Jerarquía Tipográfica</span>
        </div>
        <div className="col-12" style={{ background: 'var(--card-bg)', padding: '2rem' }}>
          {TYPE_SCALE.map(({ style, label }) => (
            <div key={label} style={{ ...style, marginTop: '.75rem' }}>{label}</div>
          ))}
        </div>
      </div>

    </div>
  </section>
)

export default Tipografia
