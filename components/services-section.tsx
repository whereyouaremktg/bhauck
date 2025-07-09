export default function ServicesSection() {
  const services = [
    {
      title: "Botox & Dysport",
      description: "Smooth fine lines and wrinkles with precision injections",
      price: "Starting at $12/unit",
    },
    {
      title: "Dermal Fillers",
      description: "Restore volume and enhance facial contours naturally",
      price: "Starting at $650",
    },
    {
      title: "IV Therapy",
      description: "Boost energy and wellness with customized vitamin infusions",
      price: "Starting at $150",
    },
    {
      title: "Chemical Peels",
      description: "Rejuvenate skin texture and tone with professional treatments",
      price: "Starting at $125",
    },
  ]

  return (
    <section className="py-20 lg:py-32 bg-[#F5F2ED]">
      <div className="container mx-auto px-6">
        <p className="text-sm uppercase tracking-wider text-black/60 text-center">SERVICES</p>
        <h2 className="font-serif text-4xl lg:text-5xl text-center mt-4">Our Treatments</h2>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mt-20 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 lg:p-12">
              <h3 className="font-serif text-2xl mb-4">{service.title}</h3>
              <p className="text-black/70 mb-6">{service.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm uppercase tracking-wider text-black/60">{service.price}</span>
                <button className="bg-[#E4D096] text-black px-6 py-3 uppercase text-sm tracking-wider hover:opacity-80">
                  LEARN MORE
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
