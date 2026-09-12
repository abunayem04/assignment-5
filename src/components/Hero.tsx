export const Hero = () => {
  return (
    <section className="relative pt-12 pb-16 md:pt-16 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          <div className="w-full lg:max-w-2xl space-y-6 text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Build Your Ideal <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-brand-orange via-brand-pink to-brand-purple bg-clip-text text-transparent">
                Development Stack
              </span>
            </h1>
            
            <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
              Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#technologies"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-white font-medium bg-gradient-to-r from-brand-orange via-brand-pink to-brand-purple hover:opacity-95 shadow-sm transition-all duration-200 active:scale-95 text-sm sm:text-base"
              >
                Explore Technologies
              </a>
              <button
                type="button"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-slate-700 font-medium bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-all duration-200 text-sm sm:text-base"
              >
                Learn More
              </button>
            </div>
          </div>

          <div className="w-full lg:w-auto flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm lg:max-w-md">
              <img
                src="/assets/banner-stack.png"
                alt="DevStack Banner"
                className="w-full h-auto object-contain drop-shadow-xl transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

