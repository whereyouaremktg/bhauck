import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const programs = [
  {
    name: "Semaglutide Program",
    price: "$125-250/month",
    weightLoss: "Average 15-20% weight loss",
    frequency: "Weekly injections",
    description: "FDA-approved GLP-1 medication that reduces appetite and slows digestion",
    features: ["Proven results", "Well-studied", "Insurance may cover"],
    popular: false,
  },
  {
    name: "Tirzepatide Program",
    price: "$250-550/month",
    weightLoss: "Average 20-25% weight loss",
    frequency: "Weekly injections",
    description: "Dual-action GLP-1/GIP medication for enhanced weight loss results",
    features: ["Superior results", "Dual mechanism", "Latest technology"],
    popular: true,
  },
  {
    name: "Retatrutide Program",
    price: "$250-700/month",
    weightLoss: "Up to 24% weight loss",
    frequency: "Weekly injections",
    description: "Triple-action medication currently in clinical trials",
    features: ["Cutting-edge", "Triple mechanism", "Maximum results"],
    popular: false,
  },
]

export default function WeightLossPrograms() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm uppercase tracking-wider text-black/60">PROGRAMS</p>
          <h2 className="font-serif text-4xl lg:text-5xl mt-4 mb-6">Choose Your Path to Success</h2>
          <p className="text-lg text-black/70">
            Our physician-supervised weight loss programs are tailored to your individual needs and goals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {programs.map((program, index) => (
            <Card
              key={index}
              className={`relative transition-all duration-300 hover:scale-105 ${
                program.popular ? "border-[#E4D096] border-2" : "border-gray-200"
              }`}
            >
              {program.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#E4D096] text-black">
                  MOST POPULAR
                </Badge>
              )}
              <CardHeader className="text-center pb-4">
                <CardTitle className="font-serif text-2xl">{program.name}</CardTitle>
                <div className="text-3xl font-bold text-[#E4D096] mt-2">{program.price}</div>
                <div className="text-lg font-semibold text-green-600">{program.weightLoss}</div>
                <div className="text-sm text-black/60 uppercase tracking-wider">{program.frequency}</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-black/70 text-center">{program.description}</p>
                <ul className="space-y-2">
                  {program.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-green-500 text-white flex items-center justify-center text-xs">✓</div>
                      <span className="text-sm text-black/70">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-[#E4D096] text-black py-3 uppercase text-sm tracking-wider hover:opacity-80 transition-opacity mt-6">
                  LEARN MORE
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-black/60">
            *Results may vary. Individual weight loss depends on various factors including starting weight, adherence to
            program, and lifestyle changes.
          </p>
        </div>
      </div>
    </section>
  )
}
