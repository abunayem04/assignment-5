import bannerStack from '../assets/banner-stack.png';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-layout">
          
          <div className="hero-content">
            <h1 className="hero-title">
              Build Your Ideal <br className="hidden sm:inline" />
              <span className="gradient-text">
                Development Stack
              </span>
            </h1>
            
            <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
              Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a href="#technologies" className="btn-gradient">
                Explore Technologies
              </a>
              <button type="button" className="btn-outline">
                Learn More
              </button>
            </div>
          </div>

          {/* banner image */}
          <div className="w-full lg:w-auto flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm lg:max-w-md">
              <img
                src={bannerStack}
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
