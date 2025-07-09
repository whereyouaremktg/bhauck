import { Card, CardContent } from "@/components/ui/card"

const includes = [
  {
    icon: "🩸",
    title: "Comprehensive Bloodwork",
    description: "Complete metabolic panel, thyroid function, and vitamin levels to optimize your program",
  },
  {
    icon: "📅",
    title: "Monthly Check-ins",
    description: "Regular appointments with Bradley Hauck, PA-C to monitor progress and adjust treatment",
  },
  {
    icon: "🥗",
    title: "Nutrition Guidance",
    description: "Personalized meal plans and dietary recommendations to maximize your results",
  },
  {
    icon: "💪",
    title: "Exercise Recommendations",
    description: "Customized fitness plans appropriate for your current fitness level and goals",
  },
  {
    icon: "💉",
    title: "B12 Injections",
    description: "Weekly vitamin B12 shots to boost energy and support your weight loss journey",
  },
]

export default function WeightLossIncludes() {
  return (
    <section className="py-20 lg:py-32 bg-[#F5F2ED]">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm uppercase tracking-wider text-black/60">INCLUDED</p>
          <h2 className="font-serif text-4xl lg:text-5xl mt-4 mb-6">Complete Support System</h2>
          <p className="text-lg text-black/70">
            Every program includes comprehensive support to ensure your success beyond just medication.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {includes.map((item, index) => (
            <Card key={index} className="bg-white border-0 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-serif text-xl mb-4">{item.title}</h3>
                <p className="text-black/70">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white p-8 max-w-2xl mx-auto">
            <h3 className="font-serif text-2xl mb-4">Program Investment</h3>
            <p className="text-black/70 mb-6">
              All programs include medication, supplies, comprehensive support, and unlimited access to our team.
            </p>
            <button className="bg-[#E4D096] text-black px-8 py-4 uppercase text-sm tracking-wider hover:opacity-80">
              SCHEDULE CONSULTATION
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
