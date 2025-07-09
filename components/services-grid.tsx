import Image from "next/image"
import Link from "next/link"

const beautyServices = [
  {
    name: "Botox & Neurotoxins",
    icon: "✦",
    description: "Smooth fine lines and wrinkles with precision injections",
    href: "/services/botox",
  },
  {
    name: "Dermal Fillers",
    icon: "◆",
    description: "Restore volume and enhance facial contours naturally",
    href: "/services/fillers",
  },
  {
    name: "Chemical Peels",
    icon: "※",
    description: "Rejuvenate skin texture and tone with professional treatments",
    href: "/services/chemical-peels",
  },
  {
    name: "Skin Treatments",
    icon: "⬟",
    description: "Advanced skincare solutions for all skin types",
    href: "/services/skin-treatments",
  },
  {
    name: "Hair Restoration",
    icon: "◉",
    description: "Innovative treatments to restore hair growth and thickness",
    href: "/services/hair-restoration",
  },
]

const wellnessServices = [
  {
    name: "Weight Loss Programs",
    icon: "⚡",
    description: "Personalized programs to achieve your weight goals",
    href: "/services/weight-loss",
  },
  {
    name: "Peptide Therapy",
    icon: "◈",
    description: "Advanced peptide treatments for optimal health",
    href: "/services/peptide-therapy",
  },
  {
    name: "Hormone Optimization",
    icon: "⬢",
    description: "Balance hormones for improved energy and wellness",
    href: "/services/hormone-optimization",
  },
  {
    name: "IV Therapy",
    icon: "◎",
    description: "Boost energy and wellness with customized vitamin infusions",
    href: "/services/iv-therapy",
  },
  {
    name: "Blood Work Analysis",
    icon: "◐",
    description: "Comprehensive testing and analysis for optimal health",
    href: "/services/blood-work",
  },
]

export default function ServicesGrid() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 max-w-7xl mx-auto">
          {/* Beauty Clinic */}
          <div className="group">
            <div className="relative mb-8 overflow-hidden">
              <Image
                src="/placeholder.svg?width=600&height=400&text=Beauty+Clinic"
                alt="Beauty Clinic"
                width={600}
                height={400}
                className="w-full h-64 lg:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 group-hover:bg-black/10" />
              <div className="absolute bottom-6 left-6">
                <h2 className="font-serif text-3xl lg:text-4xl text-white mb-2">Beauty Clinic</h2>
                <p className="text-white/90 text-sm uppercase tracking-wider">AESTHETIC TREATMENTS</p>
              </div>
            </div>

            <div className="space-y-4">
              {beautyServices.map((service, index) => (
                <Link
                  key={index}
                  href={service.href}
                  className="block group/item bg-[#F5F2ED] p-6 transition-all duration-300 hover:bg-[#E4D096] hover:translate-x-2"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-2xl mt-1 transition-transform duration-300 group-hover/item:scale-110">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-xl mb-2 group-hover/item:text-black transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-black/70 text-sm group-hover/item:text-black/80 transition-colors">
                        {service.description}
                      </p>
                    </div>
                    <div className="text-black/40 group-hover/item:text-black transition-all duration-300 group-hover/item:translate-x-1">
                      →
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link href="/booking">
                <button className="bg-[#E4D096] text-black px-8 py-4 uppercase text-sm tracking-wider hover:opacity-80 transition-opacity">
                  BOOK BEAUTY CONSULTATION
                </button>
              </Link>
            </div>
          </div>

          {/* Wellness Clinic */}
          <div className="group">
            <div className="relative mb-8 overflow-hidden">
              <Image
                src="/placeholder.svg?width=600&height=400&text=Wellness+Clinic"
                alt="Wellness Clinic"
                width={600}
                height={400}
                className="w-full h-64 lg:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 group-hover:bg-black/10" />
              <div className="absolute bottom-6 left-6">
                <h2 className="font-serif text-3xl lg:text-4xl text-white mb-2">Wellness Clinic</h2>
                <p className="text-white/90 text-sm uppercase tracking-wider">HEALTH OPTIMIZATION</p>
              </div>
            </div>

            <div className="space-y-4">
              {wellnessServices.map((service, index) => (
                <Link
                  key={index}
                  href={service.href}
                  className="block group/item bg-[#F5F2ED] p-6 transition-all duration-300 hover:bg-[#E4D096] hover:translate-x-2"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-2xl mt-1 transition-transform duration-300 group-hover/item:scale-110">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-xl mb-2 group-hover/item:text-black transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-black/70 text-sm group-hover/item:text-black/80 transition-colors">
                        {service.description}
                      </p>
                    </div>
                    <div className="text-black/40 group-hover/item:text-black transition-all duration-300 group-hover/item:translate-x-1">
                      →
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link href="/booking">
                <button className="bg-[#E4D096] text-black px-8 py-4 uppercase text-sm tracking-wider hover:opacity-80 transition-opacity">
                  BOOK WELLNESS CONSULTATION
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 lg:mt-32 text-center max-w-3xl mx-auto">
          <h3 className="font-serif text-3xl lg:text-4xl mb-6">Not Sure Which Service Is Right for You?</h3>
          <p className="text-lg text-black/70 mb-8">
            Schedule a consultation with Bradley Hauck, PA-C to discuss your goals and create a personalized treatment
            plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking">
              <button className="bg-[#E4D096] text-black px-8 py-4 uppercase text-sm tracking-wider hover:opacity-80 flex items-center justify-center gap-2">
                BOOK CONSULTATION
                <span>→</span>
              </button>
            </Link>
            <Link href="/contact">
              <button className="border border-black/20 text-black px-8 py-4 uppercase text-sm tracking-wider hover:opacity-80">
                ASK QUESTIONS
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
