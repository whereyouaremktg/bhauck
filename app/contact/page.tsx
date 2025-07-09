import Header from "@/components/header"
import Footer from "@/components/footer"
import BookingWidget from "@/components/booking-widget"
import ContactWidget from "@/components/contact-widget"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="py-20 lg:py-32 bg-[#F5F2ED]">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-sm uppercase tracking-wider text-black/60">CONTACT</p>
              <h1 className="font-serif text-4xl lg:text-5xl mt-4">Get In Touch</h1>
              <p className="text-lg text-black/70 mt-6 leading-relaxed max-w-2xl mx-auto">
                Ready to start your journey or have questions about our treatments? We're here to help you every step of
                the way.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-32 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
                <div className="text-center">
                  <h2 className="font-serif text-2xl lg:text-3xl mb-6">Book Appointment</h2>
                  <p className="text-black/70 mb-8">
                    Ready to schedule your consultation or treatment? Use our secure booking system to find your perfect
                    appointment time.
                  </p>
                  <BookingWidget />
                </div>

                <div className="text-center">
                  <h2 className="font-serif text-2xl lg:text-3xl mb-6">Ask Questions</h2>
                  <p className="text-black/70 mb-8">
                    Have questions about treatments, pricing, or want to learn more? Send us a message and we'll get
                    back to you promptly.
                  </p>
                  <ContactWidget />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-32 bg-[#F5F2ED]">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-serif text-3xl lg:text-4xl mb-4">Visit Our Clinic</h2>
                <p className="text-black/70">
                  Located in the heart of St. George, our modern facility provides a comfortable and welcoming
                  environment.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                <div className="text-center">
                  <h3 className="font-serif text-xl mb-4">Location</h3>
                  <p className="text-black/70">
                    123 Wellness Way
                    <br />
                    St. George, UT 84770
                  </p>
                </div>

                <div className="text-center">
                  <h3 className="font-serif text-xl mb-4">Hours</h3>
                  <p className="text-black/70">
                    Mon - Fri: 9am - 6pm
                    <br />
                    Sat: 10am - 4pm
                    <br />
                    Sun: Closed
                  </p>
                </div>

                <div className="text-center">
                  <h3 className="font-serif text-xl mb-4">Contact Info</h3>
                  <p className="text-black/70">
                    <a href="tel:435-555-0123" className="hover:opacity-70">
                      (435) 555-0123
                    </a>
                    <br />
                    <a href="mailto:hello@revivehealth.com" className="hover:opacity-70">
                      hello@revivehealth.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-32 bg-[#2C2C2C] text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-serif text-3xl lg:text-4xl mb-6">Prefer to Call?</h2>
              <p className="text-lg text-white/70 mb-8">
                Our friendly team is standing by to answer your questions and help schedule your appointment.
              </p>
              <button className="bg-[#E4D096] text-black px-8 py-4 uppercase text-sm tracking-wider hover:opacity-80 flex items-center justify-center gap-2 mx-auto">
                <a href="tel:435-555-0123" className="flex items-center gap-2">
                  CALL (435) 555-0123
                  <span>→</span>
                </a>
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
