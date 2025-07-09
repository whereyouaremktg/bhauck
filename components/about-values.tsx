export default function AboutValues() {
  const values = [
    {
      icon: "✦",
      title: "Artistic Approach to Beauty",
      description:
        "We believe beauty is an art form. Every treatment is carefully planned and executed with an artistic eye, ensuring results that enhance your natural features while maintaining perfect balance and proportion.",
    },
    {
      icon: "🛡️",
      title: "Uncompromising Safety",
      description:
        "Your safety is our highest priority. We use only FDA-approved products, maintain the strictest sterile protocols, and continuously update our safety procedures to exceed industry standards.",
    },
    {
      icon: "👤",
      title: "Personalized Care Promise",
      description:
        "No two patients are alike, and neither should their treatments be. We take time to understand your unique goals, concerns, and anatomy to create a completely personalized treatment plan.",
    },
  ]

  const principles = [
    "Natural-looking results that enhance, never change",
    "Comprehensive consultations with honest recommendations",
    "Transparent pricing with no hidden fees",
    "Ongoing support throughout your aesthetic journey",
    "Comfortable, welcoming environment for all patients",
    "Continuous education to provide cutting-edge treatments",
  ]

  return (
    <section className="py-20 lg:py-32 bg-[#F5F2ED]">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm uppercase tracking-wider text-black/60">VALUES</p>
          <h2 className="font-serif text-4xl lg:text-5xl mt-4 mb-6">Our Philosophy</h2>
          <p className="text-lg text-black/70">
            At Revive Beauty & Wellness, our values guide every interaction, treatment, and decision we make.
          </p>
        </div>

        {/* Core Values */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <div key={index} className="bg-white p-8 text-center transition-all duration-300 hover:scale-105">
              <div className="text-4xl mb-6">{value.icon}</div>
              <h3 className="font-serif text-xl mb-4">{value.title}</h3>
              <p className="text-black/70 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Our Principles */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 lg:p-12">
            <h3 className="font-serif text-3xl mb-8 text-center">Our Treatment Principles</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {principles.map((principle, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-[#E4D096] text-black flex items-center justify-center text-xs font-bold mt-1 flex-shrink-0">
                    ✓
                  </div>
                  <span className="text-black/70">{principle}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-16 text-center max-w-4xl mx-auto">
          <div className="bg-[#2C2C2C] text-white p-8 lg:p-12">
            <h3 className="font-serif text-2xl lg:text-3xl mb-6">Our Mission</h3>
            <blockquote className="text-lg lg:text-xl text-white/90 italic leading-relaxed">
              "To provide exceptional aesthetic and wellness treatments in a safe, comfortable environment where every
              patient feels valued, heard, and confident in their care. We are committed to helping you achieve your
              goals while maintaining the highest standards of medical practice and personalized attention."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
