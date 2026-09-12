export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-layout">
          
          <div className="hero-content">
            <h1 className="hero-title">
              Build Your Ideal <br className="desktop-break" />
              <span className="gradient-text">
                Development Stack
              </span>
            </h1>
            
            <p className="hero-desc">
              Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
            </p>

            <div className="hero-cta">
              <a href="#technologies" className="btn-gradient">
                Explore Technologies
              </a>
              <button type="button" className="btn-outline">
                Learn More
              </button>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-img-box">
              <img
                src="/assets/banner-stack.png"
                alt="DevStack Banner"
                className="banner-img"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
