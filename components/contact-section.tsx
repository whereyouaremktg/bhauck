export default function ContactSection() {
  return (
    <section className="py-20 lg:py-32 bg-[#2C2C2C] text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm uppercase tracking-wider text-white/60">CONTACT</p>
          <h2 className="font-serif text-4xl lg:text-5xl mt-4">Ready to Begin?</h2>
          <p className="text-lg text-white/70 mt-6 leading-relaxed max-w-2xl mx-auto">
            Schedule your consultation today and discover how we can help you achieve your aesthetic and wellness goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <a href="/booking">
              <button className="bg-[#E4D096] text-black px-8 py-4 uppercase text-sm tracking-wider hover:opacity-80 flex items-center justify-center gap-2">
                BOOK CONSULTATION
                <span>→</span>
              </button>
            </a>
            <button className="border border-white/20 text-white px-8 py-4 uppercase text-sm tracking-wider hover:opacity-80">
              CALL (435) 555-0123
            </button>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mt-20 text-left">
            <div>
              <h3 className="font-serif text-xl mb-4">Location</h3>
              <p className="text-white/70">
                123 Wellness Way
                <br />
                St. George, UT 84770
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl mb-4">Hours</h3>
              <p className="text-white/70">
                Mon - Fri: 9am - 6pm
                <br />
                Sat: 10am - 4pm
                <br />
                Sun: Closed
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl mb-4">Contact</h3>
              <p className="text-white/70">
                (435) 555-0123
                <br />
                hello@revivehealth.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
