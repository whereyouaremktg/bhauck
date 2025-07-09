"use client"

import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Jessica M.",
    quote:
      "Brad is absolutely amazing! He is so knowledgeable and made me feel completely at ease. My results are fantastic and so natural. I can't recommend Revive enough!",
    rating: 5,
    image: "/placeholder.svg?width=100&height=100",
  },
  {
    name: "David L.",
    quote:
      "The wellness clinic has been a game-changer for my energy levels. The IV therapy is top-notch and the staff is incredibly professional. Finally feeling like myself again.",
    rating: 5,
    image: "/placeholder.svg?width=100&height=100",
  },
  {
    name: "Samantha P.",
    quote:
      "I had a facial with Bre and my skin has never looked better. The atmosphere is so relaxing and luxurious. It's my new go-to spot for self-care in St. George.",
    rating: 5,
    image: "/placeholder.svg?width=100&height=100",
  },
  {
    name: "Michael B.",
    quote:
      "From the moment I walked in, I felt welcomed. The consultation was thorough, and they really listened to my concerns. The results exceeded my expectations. Highly recommend!",
    rating: 5,
    image: "/placeholder.svg?width=100&height=100",
  },
]

export default function TestimonialsCarousel() {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 font-sans">
            Real stories from real clients. Discover why our community trusts us with their beauty and wellness.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="h-full rounded-lg shadow-md">
                    <CardContent className="flex flex-col items-center text-center p-6">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={80}
                        height={80}
                        className="rounded-full mb-4"
                      />
                      <div className="flex items-center mb-2">
                        {Array(testimonial.rating)
                          .fill(0)
                          .map((_, i) => (
                            <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                          ))}
                      </div>
                      <p className="text-gray-600 italic mb-4 font-sans">"{testimonial.quote}"</p>
                      <p className="font-bold text-gray-800">- {testimonial.name}</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  )
}
