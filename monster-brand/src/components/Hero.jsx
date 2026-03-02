import MonsterM from './MonsterM'

const Hero = () => (
  <section className="hero-section" id="hero">
    <div className="hero-grid" />
    <div className="hero-glow" />

    <div className="container" style={{ position: 'relative', zIndex: 2 }}>
      <div className="row align-items-center min-vh-100">

        {/* ── Texto ── */}
        <div className="col-lg-8">
          <p className="hero-eyebrow fade-up">Manual de Marca · 2024</p>

          <h1 className="hero-title fade-up delay-1">
            MONSTER<br />
            <span className="outline">ENERGY</span>
          </h1>

          <p className="hero-subtitle fade-up delay-2">
            Lineamientos de Identidad Visual
          </p>

          <span className="hero-badge fade-up delay-3">
            Unleash The Beast
          </span>
        </div>

        {/* ── SVG solo desktop ── */}
        <div className="col-lg-4 d-none d-lg-flex align-items-center justify-content-center">
          <MonsterM size={260} color="#95D600" />
        </div>

      </div>
    </div>

    <div className="hero-year">2002</div>
  </section>
)

export default Hero
