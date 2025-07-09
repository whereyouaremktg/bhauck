export default function HeroSection() {
  return (
    <section className="min-h-screen flex">
      <div className="w-full lg:w-3/5 bg-[#F5F2ED] flex items-center">
        <div className="container mx-auto px-6 lg:px-12 py-20">
          <div className="max-w-2xl">
            <span className="text-sm uppercase tracking-wider text-black/60">• 5 SLOTS AVAILABLE</span>
            <h1 className="font-serif text-5xl lg:text-7xl mt-6 leading-tight">
              Premium medical aesthetics & wellness
            </h1>
            <p className="text-lg text-black/70 mt-6 leading-relaxed">
              Bradley Hauck, PA-C combines years of plastic surgery experience with personalized care to help you
              achieve your beauty and wellness goals
            </p>
            <button className="bg-[#E4D096] text-black px-8 py-4 uppercase text-sm tracking-wider hover:opacity-80 flex items-center gap-2 mt-8">
              GET IN TOUCH
              <span>→</span>
            </button>
          </div>
        </div>
      </div>
      <div className="hidden lg:block lg:w-2/5 bg-[#2C2C2C] relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white/20 text-6xl font-serif">REVIVE</div>
        </div>
      </div>
    </section>
  )
}
