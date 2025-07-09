export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Bradley's expertise and attention to detail are unmatched. I feel more confident than ever.",
      author: "Sarah M.",
      treatment: "Botox & Fillers",
    },
    {
      quote: "The IV therapy has completely transformed my energy levels. Highly recommend!",
      author: "Michael R.",
      treatment: "IV Therapy",
    },
    {
      quote: "Professional, caring, and results that look completely natural. Thank you, Revive!",
      author: "Jennifer L.",
      treatment: "Chemical Peel",
    },
  ]

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-6">
        <p className="text-sm uppercase tracking-wider text-black/60 text-center">TESTIMONIALS</p>
        <h2 className="font-serif text-4xl lg:text-5xl text-center mt-4">Client Stories</h2>
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mt-20 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="text-center">
              <p className="text-lg text-black/70 italic mb-6">"{testimonial.quote}"</p>
              <div className="text-sm uppercase tracking-wider text-black/60">{testimonial.author}</div>
              <div className="text-sm text-black/40 mt-1">{testimonial.treatment}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
