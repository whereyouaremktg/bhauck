import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const teamMembers = [
  {
    name: "Bre Murphy",
    title: "Aesthetician",
    services: "Facials, Waxing, Skincare",
    image: "/placeholder.svg?width=300&height=300",
  },
  {
    name: "Cera Oligio",
    title: "Massage Therapist",
    services: "Deep Tissue, Swedish, Hot Stone",
    image: "/placeholder.svg?width=300&height=300",
  },
  {
    name: "Emilee Hauck",
    title: "Wellness Coach",
    services: "Nutrition, Lifestyle, Fitness",
    image: "/placeholder.svg?width=300&height=300",
  },
]

export default function TeamSection() {
  return (
    <section id="team" className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center mb-20">
          <div className="relative w-full max-w-md mx-auto">
            <Image
              src="/placeholder.svg?width=500&height=600"
              alt="Bradley Hauck"
              width={500}
              height={600}
              className="rounded-lg object-cover shadow-lg"
            />
          </div>
          <div className="text-left">
            <h2 className="text-4xl font-bold mb-4">Meet Our Founder</h2>
            <p className="text-lg font-semibold text-gray-700 mb-4">Bradley Hauck, MPA, PA-C</p>
            <p className="text-gray-600 leading-relaxed font-sans">
              Bradley has been a Physician Assistant for over 10 years. He has worked in family medicine, urgent care,
              and emergency medicine. He has always had a passion for helping people feel their best. He has been doing
              aesthetics for the last 5 years and has found that he loves helping people feel confident in their own
              skin. He is excited to bring his expertise to the St. George area and help people feel and look their
              best.
            </p>
          </div>
        </div>

        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold">Our Professionals</h3>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <Card key={member.name} className="text-center border-0 shadow-none bg-transparent">
              <CardContent className="p-0">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="rounded-lg object-cover w-full aspect-square mb-4"
                />
                <h4 className="text-xl font-bold">{member.name}</h4>
                <p className="text-yellow-600 font-semibold mb-2">{member.title}</p>
                <p className="text-sm text-gray-500 font-sans">{member.services}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
