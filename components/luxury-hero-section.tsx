"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

const LuxuryHeroSection = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/10 z-10" />
        <img
          src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Luxury spa treatment"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 flex items-center justify-center min-h-screen">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div
              className={`text-white transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <div className="mb-6">
                <span className="inline-block px-4 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm font-light tracking-[0.2em] uppercase text-white/90 border border-white/20">
                  Revive Health
                </span>
              </div>

              <h1 className="font-light text-5xl lg:text-7xl leading-[0.9] mb-8 tracking-tight">
                Redefine
                <br />
                <span className="italic font-light">Your Beauty</span>
              </h1>

              <p className="text-xl lg:text-2xl font-light leading-relaxed text-white/80 mb-12 max-w-lg">
                Experience premium medical aesthetics with Bradley Hauck, PA-C. Where science meets artistry in St.
                George.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/booking">
                  <button className="group relative overflow-hidden bg-white text-black px-10 py-4 font-medium tracking-[0.1em] uppercase text-sm transition-all duration-300 hover:shadow-2xl">
                    <span className="relative z-10">Book Consultation</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#E4D096] to-[#F5E6B8] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
                  </button>
                </Link>

                <Link href="/services">
                  <button className="group border border-white/30 text-white px-10 py-4 font-light tracking-[0.1em] uppercase text-sm backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-300">
                    View Services
                    <span className="inline-block ml-2 transform group-hover:translate-x-1 transition-transform duration-200">
                      →
                    </span>
                  </button>
                </Link>
              </div>
            </div>

            {/* Right Content - Feature Cards */}
            <div
              className={`transform transition-all duration-1000 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <div className="space-y-6">
                {[
                  { title: "Expert Care", desc: "Bradley Hauck, PA-C brings years of medical expertise" },
                  { title: "Premium Results", desc: "State-of-the-art treatments for natural-looking results" },
                  { title: "Personalized Plans", desc: "Customized treatment plans for your unique goals" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="group bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-none hover:bg-white/15 transition-all duration-300"
                  >
                    <h3 className="text-white font-light text-lg mb-2 tracking-wide">{item.title}</h3>
                    <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center text-white/60">
          <span className="text-xs tracking-[0.2em] uppercase mb-4 font-light">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent" />
        </div>
      </div>
    </div>
  )
}

export default LuxuryHeroSection
