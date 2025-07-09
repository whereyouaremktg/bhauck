export default function Footer() {
  return (
    <footer className="py-12 bg-[#F5F2ED]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="font-serif text-2xl mb-4 md:mb-0">REVIVE HEALTH</div>
          <nav className="flex items-center gap-8">
            <a href="/" className="uppercase text-sm tracking-wider hover:opacity-70">
              HOME
            </a>
            <a href="/about" className="uppercase text-sm tracking-wider hover:opacity-70">
              ABOUT
            </a>
            <a href="/services" className="uppercase text-sm tracking-wider hover:opacity-70">
              SERVICES
            </a>
            <a href="/contact" className="uppercase text-sm tracking-wider hover:opacity-70">
              CONTACT
            </a>
          </nav>
        </div>
        <div className="border-t border-black/10 mt-8 pt-8 text-center">
          <p className="text-sm text-black/60">© {new Date().getFullYear()} Revive Health. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
