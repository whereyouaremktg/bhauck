import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SpadeIcon as Spa, Twitter, Instagram, Facebook } from "lucide-react"

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Spa className="h-8 w-8 text-yellow-500" />
              <span className="text-xl font-bold font-serif tracking-tight">Revive</span>
            </Link>
            <p className="text-gray-400 text-sm font-sans">Premium beauty & wellness in St. George, UT.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm font-sans">
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-300 hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#specials" className="text-gray-300 hover:text-white">
                  Specials
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-gray-300 hover:text-white">
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <address className="not-italic text-sm text-gray-300 space-y-2 font-sans">
              <p>123 Wellness Way</p>
              <p>St. George, UT 84770</p>
              <p>
                <a href="tel:435-555-1234" className="hover:text-white">
                  (435) 555-1234
                </a>
              </p>
            </address>
          </div>
          <div>
            <h4 className="font-bold mb-4">Ready to Revive?</h4>
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black rounded-lg w-full mb-4">Book Now</Button>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <Twitter />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Instagram />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Facebook />
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500 font-sans">
          <p>&copy; {new Date().getFullYear()} Revive Beauty & Wellness. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
