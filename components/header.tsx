"use client"

import { useState, useEffect } from "react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white" : "bg-white/0"}`}>
      <div className="container mx-auto px-6 py-6 flex justify-between items-center">
        <div className="font-serif text-2xl">REVIVE HEALTH</div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="/" className="uppercase text-sm tracking-wider hover:opacity-70">
            HOME
          </a>
          <a href="/about" className="uppercase text-sm tracking-wider hover:opacity-70">
            ABOUT
          </a>
          <a href="/services" className="uppercase text-sm tracking-wider hover:opacity-70">
            SERVICES
          </a>
          <a href="/booking" className="uppercase text-sm tracking-wider hover:opacity-70">
            BOOKING
          </a>
          <a href="/contact" className="uppercase text-sm tracking-wider hover:opacity-70">
            CONTACT
          </a>
          <a href="/booking">
            <button className="bg-[#E4D096] text-black px-6 py-3 uppercase text-sm tracking-wider hover:opacity-80 flex items-center gap-2">
              GET IN TOUCH
              <span>→</span>
            </button>
          </a>
        </nav>
      </div>
    </header>
  )
}
