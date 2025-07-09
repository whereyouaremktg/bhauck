import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Sarah M.",
    program: "Tirzepatide Program",
    weightLoss: "45 lbs in 6 months",
    quote:
      "I've tried every diet out there, but this program finally gave me the results I needed. The support from the team made all the difference.",
    before: "/placeholder.svg?width=200&height=250&text=Before",
    after: "/placeholder.svg?width=200&height=250&text=After",
  },
  {
    name: "Michael R.",
    program: "Semaglutide Program",
    weightLoss: "38 lbs in 8 months",
    quote:
      "The medication helped control my appetite, but the nutrition guidance and monthly check-ins kept me on track. Life-changing experience.",
    before: "/placeholder.svg?width=200&height=250&text=Before",
    after: "/placeholder.svg?width=200&height=250&text=After",
  },
]

const stats = [
  { number: "500+", label: "Patients Helped" },
  { number: "15,000+", label: "Pounds Lost" },
  { number: "95%", label: "Success Rate" },
  { number: "18", label: "Average Months" },
]

export default function WeightLossSuccess() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm uppercase tracking-wider text-black/60">SUCCESS STORIES</p>
          <h2 className="font-serif text-4xl lg:text-5xl mt-4 mb-6">Real Results, Real People</h2>
          <p className="text-lg text-black/70">
            See how our patients have transformed their lives with our medical weight loss programs.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-[#E4D096] mb-2">{stat.number}</div>
              <div className="text-sm uppercase tracking-wider text-black/60">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-[#F5F2ED] border-0">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="text-center">
                    <Image
                      src={testimonial.before || "/placeholder.svg"}
                      alt="Before"
                      width={200}
                      height={250}
                      className="w-full h-48 object-cover mb-2"
                    />
                    <p className="text-xs uppercase tracking-wider text-black/60">BEFORE</p>
                  </div>
                  <div className="text-center">
                    <Image
                      src={testimonial.after || "/placeholder.svg"}
                      alt="After"
                      width={200}
                      height={250}
                      className="w-full h-48 object-cover mb-2"
                    />
                    <p className="text-xs uppercase tracking-wider text-black/60">AFTER</p>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="font-serif text-xl mb-2">{testimonial.name}</h3>
                  <p className="text-[#E4D096] font-bold mb-2">{testimonial.weightLoss}</p>
                  <p className="text-sm text-black/60 uppercase tracking-wider mb-4">{testimonial.program}</p>
                  <p className="text-black/70 italic">"{testimonial.quote}"</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-black/60">Photos shown with patient consent. Individual results may vary.</p>
        </div>
      </div>
    </section>
  )
}
