import Header from "@/components/header"
import Footer from "@/components/footer"
import WeightLossLuxuryHero from "@/components/weight-loss-luxury-hero"
import WeightLossPrograms from "@/components/weight-loss-programs"
import WeightLossIncludes from "@/components/weight-loss-includes"
import WeightLossSuccess from "@/components/weight-loss-success"
import WeightLossFAQ from "@/components/weight-loss-faq"
import WeightLossCTA from "@/components/weight-loss-cta"

export default function WeightLossPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <WeightLossLuxuryHero />
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
