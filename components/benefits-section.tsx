export default function BenefitsSection() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-6">
        <p className="text-sm uppercase tracking-wider text-black/60 text-center">BENEFITS</p>
        <h2 className="font-serif text-4xl lg:text-5xl text-center mt-4">Why Choose Revive</h2>
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16 mt-20 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="text-4xl mb-6">✦</div>
            <h3 className="font-serif text-2xl mb-4">Expert Care</h3>
            <p className="text-black/70">Led by a PA-C with extensive plastic surgery experience</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-6">※</div>
            <h3 className="font-serif text-2xl mb-4">Personalized</h3>
            <p className="text-black/70">Customized treatments tailored to your unique goals</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-6">＋</div>
            <h3 className="font-serif text-2xl mb-4">Results-Driven</h3>
            <p className="text-black/70">FDA-approved treatments with proven, natural results</p>
          </div>
        </div>
      </div>
    </section>
  )
}
