import Header from "@/components/header"
import Footer from "@/components/footer"
import WeightLossHero from "@/components/weight-loss-hero"
import WeightLossPrograms from "@/components/weight-loss-programs"
import WeightLossIncludes from "@/components/weight-loss-includes"
import WeightLossSuccess from "@/components/weight-loss-success"
import WeightLossFAQ from "@/components/weight-loss-faq"
import WeightLossCTA from "@/components/weight-loss-cta"

export default function WeightLossPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <WeightLossHero />
        <WeightLossPrograms />
        <WeightLossIncludes />
        <WeightLossSuccess />
        <WeightLossFAQ />
        <WeightLossCTA />
      </main>
      <Footer />
    </div>
  )
}
