import Header from "@/components/header"
import Footer from "@/components/footer"

export default function BotoxPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="py-20 lg:py-32 bg-[#F5F2ED]">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <nav className="text-sm uppercase tracking-wider text-black/60 mb-6">
                <a href="/" className="hover:opacity-70">
                  HOME
                </a>
                <span className="mx-2">•</span>
                <a href="/services" className="hover:opacity-70">
                  SERVICES
                </a>
                <span className="mx-2">•</span>
                <span>BOTOX & NEUROTOXINS</span>
              </nav>
              <h1 className="font-serif text-4xl lg:text-6xl mb-6">Botox & Neurotoxins</h1>
              <p className="text-lg text-black/70 leading-relaxed">
                Smooth fine lines and wrinkles with precision injections administered by Bradley Hauck, PA-C.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-32 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-3xl mb-8">Coming Soon</h2>
              <p className="text-black/70 mb-8">Detailed service information will be available soon.</p>
              <a href="/booking">
                <button className="bg-[#E4D096] text-black px-8 py-4 uppercase text-sm tracking-wider hover:opacity-80">
                  BOOK CONSULTATION
                </button>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
