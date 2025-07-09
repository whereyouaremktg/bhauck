import Header from "@/components/header"
import Footer from "@/components/footer"
import AboutHero from "@/components/about-hero"
import AboutBio from "@/components/about-bio"
import AboutTeam from "@/components/about-team"
import AboutCredentials from "@/components/about-credentials"
import AboutValues from "@/components/about-values"
import AboutCTA from "@/components/about-cta"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <AboutHero />
        <AboutBio />
        <AboutTeam />
        <AboutCredentials />
        <AboutValues />
        <AboutCTA />
      </main>
      <Footer />
    </div>
  )
}
