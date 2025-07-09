"use client"

import { useState } from "react"
import Image from "next/image"

const benefits = [
  "Reduces fine lines and wrinkles",
  "Prevents new wrinkles from forming",
  "Non-surgical treatment",
  "Quick 15-20 minute procedure",
  "Minimal downtime required",
  "Natural-looking results",
  "FDA-approved and safe",
  "Long-lasting effects (3-6 months)",
]

const timeline = [
  { time: "Day 1", event: "Treatment completed, minor redness may occur" },
  { time: "Day 3-5", event: "Initial effects begin to appear" },
  { time: "Day 7-14", event: "Full results visible" },
  { time: "Month 3-6", event: "Effects gradually fade, retreatment recommended" },
]

const treatments = [
  {
    name: "Botox",
    description: "The original and most well-known neurotoxin",
    duration: "3-4 months",
    onset: "3-7 days",
    price: "$10/unit",
  },
  {
    name: "Daxxify",
    description: "Newest long-lasting neurotoxin",
    duration: "6+ months",
    onset: "2-3 days",
    price: "$6/unit",
  },
  {
    name: "Xeomin",
    description: "Pure neurotoxin without additives",
    duration: "3-4 months",
    onset: "3-7 days",
    price: "$10/unit",
  },
  {
    name: "Dysport",
    description: "Fast-acting with natural diffusion",
    duration: "3-4 months",
    onset: "2-3 days",
    price: "$3/unit",
  },
]

export default function BotoxContent() {
  const [isAftercareOpen, setIsAftercareOpen] = useState(false)

  return (
    <div className="space-y-12">
      {/* What is Botox */}
      <section>
        <h2 className="font-serif text-3xl lg:text-4xl mb-6">What is Botox?</h2>
        <div className="prose prose-lg max-w-none text-black/70 space-y-4">
          <p>
            Botox is a purified protein derived from Clostridium botulinum that temporarily relaxes facial muscles
            responsible for dynamic wrinkles. When injected by our experienced PA-C, Bradley Hauck, it blocks nerve
            signals to targeted muscles, resulting in smoother, younger-looking skin.
          </p>
          <p>
            This FDA-approved treatment is highly effective for treating crow's feet, forehead lines, frown lines, and
            other expression-related wrinkles. The procedure is minimally invasive with virtually no downtime, making it
            one of the most popular cosmetic treatments worldwide.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section>
        <h2 className="font-serif text-3xl lg:text-4xl mb-6">Benefits of Botox Treatment</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-5 h-5 bg-green-500 text-white flex items-center justify-center text-xs font-bold">
                ✓
              </div>
              <span className="text-black/70">{benefit}</span>
            </div>
          ))}
        </div>
      </section>

      {/* What to Expect */}
      <section>
        <h2 className="font-serif text-3xl lg:text-4xl mb-6">What to Expect</h2>
        <div className="space-y-6">
          {timeline.map((item, index) => (
            <div key={index} className="flex gap-4">
              <div className="w-20 text-sm font-bold uppercase tracking-wider text-black/60 flex-shrink-0">
                {item.time}
              </div>
              <div className="text-black/70">{item.event}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Treatment Options */}
      <section>
        <h2 className="font-serif text-3xl lg:text-4xl mb-6">Treatment Options</h2>
        <div className="grid gap-6">
          {treatments.map((treatment, index) => (
            <div key={index} className="bg-[#F5F2ED] p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-serif text-xl">{treatment.name}</h3>
                <span className="text-lg font-bold">{treatment.price}</span>
              </div>
              <p className="text-black/70 mb-4">{treatment.description}</p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-bold">Duration: </span>
                  <span className="text-black/70">{treatment.duration}</span>
                </div>
                <div>
                  <span className="font-bold">Results visible: </span>
                  <span className="text-black/70">{treatment.onset}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Before/After Gallery */}
      <section>
        <h2 className="font-serif text-3xl lg:text-4xl mb-6">Before & After Gallery</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[#F5F2ED] p-8 text-center">
            <Image
              src="/placeholder.svg?width=400&height=300&text=Before+Photo"
              alt="Before Treatment"
              width={400}
              height={300}
              className="w-full h-48 object-cover mb-4"
            />
            <p className="text-sm uppercase tracking-wider text-black/60">BEFORE</p>
          </div>
          <div className="bg-[#F5F2ED] p-8 text-center">
            <Image
              src="/placeholder.svg?width=400&height=300&text=After+Photo"
              alt="After Treatment"
              width={400}
              height={300}
              className="w-full h-48 object-cover mb-4"
            />
            <p className="text-sm uppercase tracking-wider text-black/60">AFTER - 2 WEEKS</p>
          </div>
        </div>
        <p className="text-sm text-black/60 mt-4 text-center">
          Individual results may vary. Photos shown with patient consent.
        </p>
      </section>

      {/* Aftercare Instructions */}
      <section>
        <button
          onClick={() => setIsAftercareOpen(!isAftercareOpen)}
          className="w-full text-left bg-[#F5F2ED] p-6 hover:bg-[#E4D096] transition-colors"
        >
          <div className="flex justify-between items-center">
            <h2 className="font-serif text-2xl lg:text-3xl">Aftercare Instructions</h2>
            <span
              className="text-2xl transition-transform duration-300"
              style={{
                transform: isAftercareOpen ? "rotate(180deg)" : "rotate(0deg)",
              }}
            >
              ↓
            </span>
          </div>
        </button>
        {isAftercareOpen && (
          <div className="bg-[#F5F2ED] px-6 pb-6 space-y-4">
            <div>
              <h3 className="font-bold mb-2">First 24 Hours:</h3>
              <ul className="space-y-1 text-black/70 ml-4">
                <li>• Avoid lying down for 4 hours after treatment</li>
                <li>• Do not massage or rub the treated area</li>
                <li>• Avoid strenuous exercise</li>
                <li>• Stay upright and avoid bending over</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">First Week:</h3>
              <ul className="space-y-1 text-black/70 ml-4">
                <li>• Avoid facials, saunas, or hot tubs</li>
                <li>• Sleep on your back if possible</li>
                <li>• Avoid excessive sun exposure</li>
                <li>• Do not consume alcohol for 24 hours</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">Follow-up:</h3>
              <ul className="space-y-1 text-black/70 ml-4">
                <li>• Schedule follow-up appointment in 2 weeks</li>
                <li>• Contact us with any concerns</li>
                <li>• Results typically last 3-6 months</li>
              </ul>
            </div>
          </div>
        )}
      </section>
    </div>
  )
}
