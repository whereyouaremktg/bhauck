import Header from "@/components/header"
import Footer from "@/components/footer"
import BookingWidget from "@/components/booking-widget"

export default function BookingPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="py-20 lg:py-32 bg-[#F5F2ED]">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-sm uppercase tracking-wider text-black/60">BOOKING</p>
              <h1 className="font-serif text-4xl lg:text-5xl mt-4">Schedule Your Appointment</h1>
              <p className="text-lg text-black/70 mt-6 leading-relaxed max-w-2xl mx-auto">
                Ready to begin your journey? Book your consultation with Bradley Hauck, PA-C and discover personalized
                treatments designed just for you.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-32 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl lg:text-4xl mb-4">Book Your Consultation</h2>
                <p className="text-black/70">
                  Click below to access our secure booking system and select your preferred appointment time.
                </p>
              </div>

              <BookingWidget />

              <div className="mt-16 grid md:grid-cols-2 gap-8">
                <div className="bg-[#F5F2ED] p-8">
                  <h3 className="font-serif text-xl mb-4">What to Expect</h3>
                  <ul className="space-y-3 text-black/70">
                    <li>• Comprehensive consultation</li>
                    <li>• Personalized treatment plan</li>
                    <li>• Questions and concerns addressed</li>
                    <li>• No pressure, just education</li>
                  </ul>
                </div>
                <div className="bg-[#F5F2ED] p-8">
                  <h3 className="font-serif text-xl mb-4">Consultation Details</h3>
                  <ul className="space-y-3 text-black/70">
                    <li>• Duration: 30-45 minutes</li>
                    <li>• Free consultation available</li>
                    <li>• Flexible scheduling options</li>
                    <li>• Same-day treatments possible</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-32 bg-[#2C2C2C] text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-serif text-3xl lg:text-4xl mb-6">Questions Before Booking?</h2>
              <p className="text-lg text-white/70 mb-8">
                Our team is here to help you feel confident about your appointment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-[#E4D096] text-black px-8 py-4 uppercase text-sm tracking-wider hover:opacity-80 flex items-center justify-center gap-2">
                  CALL (435) 555-0123
                  <span>→</span>
                </button>
                <button className="border border-white/20 text-white px-8 py-4 uppercase text-sm tracking-wider hover:opacity-80">
                  EMAIL US
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
