import BookingWidget from "@/components/booking-widget"

export default function BotoxCTA() {
  return (
    <section className="py-20 lg:py-32 bg-[#2C2C2C] text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl lg:text-5xl mb-6">Ready to Reduce Wrinkles?</h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Take the first step towards smoother, younger-looking skin. Schedule your free consultation with Bradley
            Hauck, PA-C today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <BookingWidget />
            <span className="text-white/60">or</span>
            <a href="tel:435-555-0123">
              <button className="border border-white/20 text-white px-8 py-4 uppercase text-sm tracking-wider hover:opacity-80 transition-opacity">
                CALL (435) 555-0123
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
