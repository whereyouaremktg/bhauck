import Image from "next/image"

export default function BotoxHero() {
  return (
    <section className="relative h-96 lg:h-[500px] flex items-center justify-center">
      <Image
        src="/placeholder.svg?width=1920&height=500&text=Botox+Treatment"
        alt="Botox Treatment"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
        <nav className="text-sm uppercase tracking-wider text-white/80 mb-6">
          <a href="/" className="hover:opacity-70">
            HOME
          </a>
          <span className="mx-2">•</span>
          <a href="/services" className="hover:opacity-70">
            SERVICES
          </a>
          <span className="mx-2">•</span>
          <a href="/services#beauty" className="hover:opacity-70">
            BEAUTY
          </a>
          <span className="mx-2">•</span>
          <span>BOTOX</span>
        </nav>
        <h1 className="font-serif text-4xl lg:text-6xl">Botox & Neurotoxins</h1>
        <p className="text-lg lg:text-xl mt-4 text-white/90">
          Smooth fine lines and wrinkles with precision injections
        </p>
      </div>
    </section>
  )
}
