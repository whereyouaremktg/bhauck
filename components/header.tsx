"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SpadeIcon as Spa } from "lucide-react"

export default function Header() {
  const [isSticky, setSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const navLinks = [
    { href: "#", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#specials", label: "Specials" },
    { href: "#contact", label: "Contact Us" },
    { href: "#testimonials", label: "Testimonials & Reviews" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isSticky ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2">
            <Spa className="h-8 w-8 text-yellow-500" />
            <span className="text-xl font-bold font-serif tracking-tight">Revive</span>
          </Link>
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center">
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black rounded-lg px-6 py-2.5">Book Now</Button>
          </div>
        </div>
      </div>
    </header>
  )
}
