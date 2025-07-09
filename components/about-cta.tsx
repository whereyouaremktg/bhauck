import BookingWidget from "@/components/booking-widget"

export default function AboutCTA() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl lg:text-5xl mb-6">Ready to Begin Your Journey?</h2>
          <p className="text-lg text-black/70 mb-8 max-w-2xl mx-auto">
            Experience the difference that personalized care and medical expertise can make. Schedule your consultation
            with Bradley Hauck, PA-C today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <BookingWidget />
            <span className="text-black/40">or</span>
            <a href="tel:435-555-0123">
              <button className="border border-black/20 text-black px-8 py-4 uppercase text-sm tracking-wider hover:opacity-80 transition-opacity">
                CALL (435) 555-0123
              </button>
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="text-center">
              <h3 className="font-serif text-xl mb-4">Free Consultation</h3>
              <p className="text-black/70 text-sm">
                Comprehensive evaluation of your goals with honest recommendations and transparent pricing.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-serif text-xl mb-4">Personalized Plan</h3>
              <p className="text-black/70 text-sm">
                Custom treatment plan designed specifically for your unique needs and desired outcomes.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-serif text-xl mb-4">Ongoing Support</h3>
              <p className="text-black/70 text-sm">
                Continuous care and support throughout your aesthetic and wellness journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
