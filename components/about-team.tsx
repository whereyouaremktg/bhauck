"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const teamMembers = [
  {
    name: "Bre Murphy",
    title: "Licensed Aesthetician",
    image: "/placeholder.svg?width=300&height=300&text=Bre+Murphy",
    services: ["Facials", "Chemical Peels", "Waxing", "Skincare Consultations", "Dermaplaning"],
    bio: "Bre brings over 8 years of experience in skincare and aesthetics. She specializes in customized facial treatments and has a passion for helping clients achieve healthy, glowing skin. Her gentle approach and extensive knowledge of skincare products make her a favorite among clients seeking comprehensive skin solutions.",
    certifications: ["Licensed Aesthetician - Utah", "Chemical Peel Certification", "Dermaplaning Specialist"],
  },
  {
    name: "Cera Oligio",
    title: "Licensed Massage Therapist",
    image: "/placeholder.svg?width=300&height=300&text=Cera+Oligio",
    services: ["Deep Tissue Massage", "Swedish Massage", "Hot Stone Therapy", "Lymphatic Drainage", "Prenatal Massage"],
    bio: "Cera is a skilled massage therapist with 6 years of experience in therapeutic and relaxation massage. She combines various techniques to provide personalized treatments that address each client's specific needs, whether for stress relief, pain management, or overall wellness.",
    certifications: ["Licensed Massage Therapist - Utah", "Deep Tissue Specialist", "Prenatal Massage Certified"],
  },
  {
    name: "Emilee Hauck",
    title: "Wellness Coach & Nutritionist",
    image: "/placeholder.svg?width=300&height=300&text=Emilee+Hauck",
    services: [
      "Nutrition Counseling",
      "Wellness Coaching",
      "Weight Management",
      "Lifestyle Planning",
      "Supplement Guidance",
    ],
    bio: "Emilee holds a degree in Nutrition Science and is passionate about helping clients achieve optimal health through personalized nutrition and lifestyle strategies. She works closely with our medical team to provide comprehensive wellness support for all our patients.",
    certifications: ["Certified Nutrition Specialist", "Wellness Coach Certification", "Weight Management Specialist"],
  },
]

export default function AboutTeam() {
  const [expandedMember, setExpandedMember] = useState<number | null>(null)

  const toggleMember = (index: number) => {
    setExpandedMember(expandedMember === index ? null : index)
  }

  return (
    <section className="py-20 lg:py-32 bg-[#F5F2ED]">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm uppercase tracking-wider text-black/60">TEAM</p>
          <h2 className="font-serif text-4xl lg:text-5xl mt-4 mb-6">Meet Our Professionals</h2>
          <p className="text-lg text-black/70">
            Our experienced team of licensed professionals is dedicated to providing exceptional care and helping you
            achieve your beauty and wellness goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card key={index} className="bg-white border-0 overflow-hidden transition-all duration-300 hover:scale-105">
              <CardContent className="p-0">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-serif text-xl mb-2">{member.name}</h3>
                  <p className="text-[#E4D096] font-semibold mb-4">{member.title}</p>

                  {/* Services Preview */}
                  <div className="mb-4">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-black/60 mb-2">SPECIALTIES</h4>
                    <div className="flex flex-wrap gap-1">
                      {member.services.slice(0, 3).map((service, serviceIndex) => (
                        <span key={serviceIndex} className="text-xs bg-[#F5F2ED] px-2 py-1 text-black/70">
                          {service}
                        </span>
                      ))}
                      {member.services.length > 3 && (
                        <span className="text-xs text-black/60">+{member.services.length - 3} more</span>
                      )}
                    </div>
                  </div>

                  <button
                    onClick={() => toggleMember(index)}
                    className="w-full bg-[#E4D096] text-black py-3 uppercase text-sm tracking-wider hover:opacity-80 transition-opacity"
                  >
                    {expandedMember === index ? "SHOW LESS" : "LEARN MORE"}
                  </button>

                  {/* Expanded Bio */}
                  {expandedMember === index && (
                    <div className="mt-6 pt-6 border-t border-black/10 space-y-4">
                      <div>
                        <h4 className="text-sm font-bold uppercase tracking-wider text-black/60 mb-2">ABOUT</h4>
                        <p className="text-black/70 text-sm leading-relaxed">{member.bio}</p>
                      </div>

                      <div>
                        <h4 className="text-sm font-bold uppercase tracking-wider text-black/60 mb-2">ALL SERVICES</h4>
                        <div className="flex flex-wrap gap-1">
                          {member.services.map((service, serviceIndex) => (
                            <span key={serviceIndex} className="text-xs bg-[#F5F2ED] px-2 py-1 text-black/70">
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-bold uppercase tracking-wider text-black/60 mb-2">
                          CERTIFICATIONS
                        </h4>
                        <ul className="space-y-1">
                          {member.certifications.map((cert, certIndex) => (
                            <li key={certIndex} className="text-xs text-black/70 flex items-center gap-2">
                              <div className="w-1 h-1 bg-[#E4D096] rounded-full"></div>
                              {cert}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
