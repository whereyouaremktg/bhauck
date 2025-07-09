import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import TeamSection from "@/components/team-section"
import ServicesPreview from "@/components/services-preview"
import TestimonialsCarousel from "@/components/testimonials-carousel"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      <Header />
      <main>
        <HeroSection />
        <TeamSection />
        <ServicesPreview />
        <TestimonialsCarousel />
      </main>
      <Footer />
    </div>
  )
}
