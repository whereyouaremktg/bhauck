"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

const beautyServices = [
  { name: "Botox & Neurotoxins", href: "/services/botox" },
  { name: "Dermal Fillers", href: "/services/fillers" },
  { name: "Chemical Peels", href: "/services/chemical-peels" },
  { name: "Skin Treatments", href: "/services/skin-treatments" },
  { name: "Hair Restoration", href: "/services/hair-restoration" },
]

const wellnessServices = [
  { name: "Weight Loss Programs", href: "/services/weight-loss" },
  { name: "Peptide Therapy", href: "/services/peptide-therapy" },
  { name: "Hormone Optimization", href: "/services/hormone-optimization" },
  { name: "IV Therapy", href: "/services/iv-therapy" },
  { name: "Blood Work Analysis", href: "/services/blood-work" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-sm" : "bg-white/0"}`}
    >
      <div className="container mx-auto px-6 py-6 flex justify-between items-center">
        <Link href="/" className="font-serif text-2xl">
          REVIVE HEALTH
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="uppercase text-sm tracking-wider hover:opacity-70 transition-opacity">
            HOME
          </Link>
          <Link href="/about" className="uppercase text-sm tracking-wider hover:opacity-70 transition-opacity">
            ABOUT
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <Link
              href="/services"
              className="uppercase text-sm tracking-wider hover:opacity-70 transition-opacity flex items-center gap-1"
            >
              SERVICES
              <span className={`text-xs transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`}>
                ▼
              </span>
            </Link>

            {/* Dropdown Menu */}
            <div
              className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 transition-all duration-300 ${
                isServicesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-2"
              }`}
            >
              <div className="bg-white border border-black/10 shadow-lg p-8 w-96">
                <div className="grid grid-cols-2 gap-8">
                  {/* Beauty Services */}
                  <div>
                    <h3 className="font-serif text-lg mb-4 text-[#E4D096] border-b border-[#E4D096]/20 pb-2">
                      Beauty Clinic
                    </h3>
                    <ul className="space-y-3">
                      {beautyServices.map((service, index) => (
                        <li key={index}>
                          <Link
                            href={service.href}
                            className="text-sm text-black/70 hover:text-black hover:translate-x-1 transition-all duration-200 block"
                          >
                            {service.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Wellness Services */}
                  <div>
                    <h3 className="font-serif text-lg mb-4 text-[#E4D096] border-b border-[#E4D096]/20 pb-2">
                      Wellness Clinic
                    </h3>
                    <ul className="space-y-3">
                      {wellnessServices.map((service, index) => (
                        <li key={index}>
                          <Link
                            href={service.href}
                            className="text-sm text-black/70 hover:text-black hover:translate-x-1 transition-all duration-200 block"
                          >
                            {service.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* View All Services Link */}
                <div className="mt-6 pt-4 border-t border-black/10 text-center">
                  <Link
                    href="/services"
                    className="bg-[#E4D096] text-black px-6 py-2 uppercase text-xs tracking-wider hover:opacity-80 transition-opacity inline-block"
                  >
                    View All Services
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <Link href="/booking" className="uppercase text-sm tracking-wider hover:opacity-70 transition-opacity">
            BOOKING
          </Link>
          <Link href="/contact" className="uppercase text-sm tracking-wider hover:opacity-70 transition-opacity">
            CONTACT
          </Link>
          <Link href="/booking">
            <button className="bg-[#E4D096] text-black px-6 py-3 uppercase text-sm tracking-wider hover:opacity-80 flex items-center gap-2 transition-opacity">
              GET IN TOUCH
              <span>→</span>
            </button>
          </Link>
        </nav>
      </div>
    </header>
  )
}
