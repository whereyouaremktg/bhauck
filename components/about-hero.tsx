import Image from "next/image"

export default function AboutHero() {
  return (
    <section className="py-20 lg:py-32 bg-[#F5F2ED]">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          <div className="relative">
            <Image
              src="/placeholder.svg?width=600&height=700&text=Bradley+Hauck+Professional+Photo"
              alt="Bradley Hauck, PA-C"
              width={600}
              height={700}
              className="w-full h-96 lg:h-[500px] object-cover rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-6 -right-6 bg-[#E4D096] p-6 text-center">
              <div className="text-2xl font-bold">10+</div>
              <div className="text-sm uppercase tracking-wider">Years Experience</div>
            </div>
          </div>

          <div>
            <nav className="text-sm uppercase tracking-wider text-black/60 mb-6">
              <a href="/" className="hover:opacity-70">
                HOME
              </a>
              <span className="mx-2">•</span>
              <span>ABOUT</span>
            </nav>
            <h1 className="font-serif text-4xl lg:text-6xl mb-6">Meet Bradley Hauck, PA-C</h1>
            <p className="text-xl lg:text-2xl text-black/80 mb-6 font-serif italic">Founder & Medical Director</p>
            <p className="text-lg text-black/70 leading-relaxed mb-8">
              With over a decade of experience in medicine and a passion for helping people feel confident in their own
              skin, Bradley brings expertise, artistry, and genuine care to every treatment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/booking">
                <button className="bg-[#E4D096] text-black px-8 py-4 uppercase text-sm tracking-wider hover:opacity-80 flex items-center gap-2">
                  SCHEDULE CONSULTATION
                  <span>→</span>
                </button>
              </a>
              <a href="/contact">
                <button className="border border-black/20 text-black px-8 py-4 uppercase text-sm tracking-wider hover:opacity-80">
                  GET IN TOUCH
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
