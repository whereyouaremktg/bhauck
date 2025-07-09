import Image from "next/image"
import Link from "next/link"

export default function WeightLossHero() {
  return (
    <section className="min-h-screen flex">
      <div className="w-full lg:w-3/5 bg-[#F5F2ED] flex items-center">
        <div className="container mx-auto px-6 lg:px-12 py-20">
          <div className="max-w-2xl">
            <nav className="text-sm uppercase tracking-wider text-black/60 mb-6">
              <a href="/" className="hover:opacity-70">
                HOME
              </a>
              <span className="mx-2">•</span>
              <a href="/services" className="hover:opacity-70">
                SERVICES
              </a>
              <span className="mx-2">•</span>
              <a href="/services#wellness" className="hover:opacity-70">
                WELLNESS
              </a>
              <span className="mx-2">•</span>
              <span>WEIGHT LOSS</span>
            </nav>
            <span className="text-sm uppercase tracking-wider text-black/60">• TRANSFORM YOUR LIFE</span>
            <h1 className="font-serif text-5xl lg:text-7xl mt-6 leading-tight">Medical Weight Loss Programs</h1>
            <p className="text-2xl lg:text-3xl font-serif text-black/80 mt-6 italic">Lose Weight, Feel Great</p>
            <p className="text-lg text-black/70 mt-6 leading-relaxed">
              Achieve sustainable weight loss with our physician-supervised programs featuring the latest FDA-approved
              medications and comprehensive support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link href="/booking">
                <button className="bg-[#E4D096] text-black px-8 py-4 uppercase text-sm tracking-wider hover:opacity-80 flex items-center gap-2">
                  START YOUR JOURNEY
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
      </div>
      <div className="hidden lg:block lg:w-2/5 relative">
        <Image
          src="/placeholder.svg?width=800&height=1000&text=Weight+Loss+Success"
          alt="Weight Loss Success"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>
    </section>
  )
}
