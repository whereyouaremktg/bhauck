import BookingWidget from "@/components/booking-widget"

const pricingOptions = [
  { name: "Botox", price: "$10/unit", popular: true },
  { name: "Daxxify", price: "$6/unit", popular: false },
  { name: "Xeomin", price: "$10/unit", popular: false },
  { name: "Dysport", price: "$3/unit", popular: false },
]

export default function BotoxSidebar() {
  return (
    <div className="lg:sticky lg:top-24 space-y-8">
      {/* Pricing Box */}
      <div className="bg-[#F5F2ED] p-6">
        <h3 className="font-serif text-2xl mb-6 text-center">Treatment Pricing</h3>
        <div className="space-y-4">
          {pricingOptions.map((option, index) => (
            <div
              key={index}
              className={`flex justify-between items-center p-4 ${option.popular ? "bg-[#E4D096]" : "bg-white"}`}
            >
              <div>
                <span className="font-bold">{option.name}</span>
                {option.popular && <span className="ml-2 text-xs uppercase tracking-wider text-black/60">POPULAR</span>}
              </div>
              <span className="font-bold">{option.price}</span>
            </div>
          ))}
        </div>
        <p className="text-xs text-black/60 mt-4 text-center">
          *Average treatment uses 20-60 units. Final cost determined during consultation.
        </p>
      </div>

      {/* Book Consultation */}
      <div className="bg-[#2C2C2C] text-white p-6 text-center">
        <h3 className="font-serif text-xl mb-4">Free Consultation</h3>
        <p className="text-white/80 text-sm mb-6">Discuss your goals and get a personalized treatment plan</p>
        <div className="mb-4">
          <BookingWidget />
        </div>
      </div>

      {/* Contact Info */}
      <div className="bg-white border border-black/10 p-6">
        <h3 className="font-serif text-xl mb-4 text-center">Questions? Call Us</h3>
        <div className="text-center mb-6">
          <a href="tel:435-555-0123" className="text-2xl font-bold hover:opacity-70 transition-opacity">
            (435) 555-0123
          </a>
        </div>
        <div className="space-y-2 text-sm text-black/70">
          <h4 className="font-bold text-black">Office Hours:</h4>
          <div className="space-y-1">
            <div className="flex justify-between">
              <span>Mon - Fri:</span>
              <span>9am - 6pm</span>
            </div>
            <div className="flex justify-between">
              <span>Saturday:</span>
              <span>10am - 4pm</span>
            </div>
            <div className="flex justify-between">
              <span>Sunday:</span>
              <span>Closed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
