import BookingWidget from "@/components/booking-widget"

export default function WeightLossCTA() {
  return (
    <section className="py-20 lg:py-32 bg-[#2C2C2C] text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl lg:text-5xl mb-6">Ready to Transform Your Life?</h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Take the first step towards sustainable weight loss. Schedule your consultation with Bradley Hauck, PA-C to
            discuss which program is right for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <BookingWidget />
            <span className="text-white/60">or</span>
            <a href="tel:435-555-0123">
              <button className="border border-white/20 text-white px-8 py-4 uppercase text-sm tracking-wider hover:opacity-80 transition-opacity">
                CALL (435) 555-0123
              </button>
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div>
              <h3 className="font-serif text-xl mb-4">Free Consultation</h3>
              <p className="text-white/70">
                Comprehensive evaluation to determine the best program for your goals and medical history.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl mb-4">Personalized Plan</h3>
              <p className="text-white/70">
                Customized treatment plan with medication, nutrition guidance, and ongoing support.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl mb-4">Proven Results</h3>
              <p className="text-white/70">
                Join hundreds of patients who have successfully achieved their weight loss goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
