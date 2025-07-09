import Header from "@/components/header"
import Footer from "@/components/footer"
import BotoxHero from "@/components/botox-hero"
import BotoxContent from "@/components/botox-content"
import BotoxSidebar from "@/components/botox-sidebar"
import BotoxCTA from "@/components/botox-cta"

export default function BotoxPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <BotoxHero />
        <section className="py-20 lg:py-32 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 max-w-7xl mx-auto">
              <div className="lg:col-span-2">
                <BotoxContent />
              </div>
              <div className="lg:col-span-1">
                <BotoxSidebar />
              </div>
            </div>
          </div>
        </section>
        <BotoxCTA />
      </main>
      <Footer />
    </div>
  )
}
