import Header from "@/components/header"
import LuxuryHeroSection from "@/components/luxury-hero-section"
import BenefitsSection from "@/components/benefits-section"
import ServicesSection from "@/components/services-section"
import TestimonialsSection from "@/components/testimonials-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <LuxuryHeroSection />
        <BenefitsSection />
        <ServicesSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
