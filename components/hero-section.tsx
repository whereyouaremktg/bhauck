import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
        poster="/placeholder.svg?width=1920&height=1080"
      >
        {/* In a real project, you would source this video from a CDN */}
        <source
          src="https://cdn.dribbble.com/userupload/12094319/file/original-4669981a233d3a0ed97362c1b8d369a8.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black/50" />
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold font-serif leading-tight mb-4">
          Everyone here at Revive Beauty & Wellness welcomes you to experience the premium and personalized care you
          deserve.
        </h1>
        <p className="text-lg md:text-xl font-sans mb-8">
          At Revive you can find all you need for your beauty & wellness needs.
        </p>
        <div className="flex flex-col items-center gap-4">
          <Button
            size="lg"
            className="bg-yellow-500 hover:bg-yellow-600 text-black rounded-lg px-10 py-6 text-lg font-bold"
          >
            Book Now
          </Button>
          <Badge variant="secondary" className="bg-white/20 text-white backdrop-blur-sm rounded-full px-4 py-1 text-sm">
            Free consultation on all services!
          </Badge>
        </div>
      </div>
    </section>
  )
}
