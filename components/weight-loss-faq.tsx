"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

const faqs = [
  {
    question: "Are these medications safe?",
    answer:
      "Yes, all medications we prescribe are FDA-approved and have been extensively studied. Semaglutide and Tirzepatide are proven safe and effective for weight loss when used under medical supervision. We monitor all patients closely with regular check-ins and bloodwork.",
  },
  {
    question: "How quickly will I see results?",
    answer:
      "Most patients begin to see weight loss within the first 2-4 weeks. Significant results typically occur within 3-6 months. The medication works by reducing appetite and slowing digestion, making it easier to maintain a caloric deficit.",
  },
  {
    question: "What happens when I stop the medication?",
    answer:
      "Weight maintenance requires ongoing lifestyle changes. We work with you to develop sustainable habits during treatment. Some patients choose to continue medication long-term, while others transition to maintenance with lifestyle modifications alone.",
  },
  {
    question: "Do I need to follow a specific diet?",
    answer:
      "While there's no required diet, we provide nutrition guidance to maximize your results. The medication naturally reduces appetite, making it easier to make healthier food choices and control portions.",
  },
  {
    question: "What are the side effects?",
    answer:
      "Common side effects include nausea, vomiting, diarrhea, and constipation, especially when starting treatment. These typically improve over time. We start with low doses and gradually increase to minimize side effects.",
  },
  {
    question: "Am I a good candidate for weight loss medication?",
    answer:
      "Candidates typically have a BMI of 30+ or 27+ with weight-related health conditions. We'll review your medical history, current medications, and health goals during your consultation to determine the best program for you.",
  },
  {
    question: "How much does the program cost?",
    answer:
      "Program costs vary by medication and dosage, ranging from $125-700/month. This includes medication, supplies, monthly check-ins, nutrition guidance, and B12 injections. We'll discuss pricing during your consultation.",
  },
  {
    question: "Will insurance cover the cost?",
    answer:
      "Some insurance plans may cover Semaglutide for weight loss, though coverage varies. We can help verify your benefits and explore options. Many patients find the investment worthwhile for the health benefits achieved.",
  },
]

export default function WeightLossFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 lg:py-32 bg-[#F5F2ED]">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm uppercase tracking-wider text-black/60">FAQ</p>
          <h2 className="font-serif text-4xl lg:text-5xl mt-4 mb-6">Frequently Asked Questions</h2>
          <p className="text-lg text-black/70">
            Get answers to common questions about our medical weight loss programs.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="bg-white border-0">
              <CardContent className="p-0">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-6 hover:bg-[#F5F2ED] transition-colors"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="font-serif text-lg lg:text-xl pr-4">{faq.question}</h3>
                    <span
                      className="text-2xl transition-transform duration-300 flex-shrink-0"
                      style={{
                        transform: openIndex === index ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                    >
                      ↓
                    </span>
                  </div>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-black/70 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
