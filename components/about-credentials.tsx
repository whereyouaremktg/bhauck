export default function AboutCredentials() {
  const certifications = [
    "Certified Physician Assistant - NCCPA",
    "Utah State Medical License",
    "Advanced Aesthetic Injector Certification",
    "Botox & Dysport Training Certification",
    "Dermal Filler Advanced Training",
    "Chemical Peel Certification",
    "Laser Safety Officer Training",
  ]

  const memberships = [
    "American Academy of Physician Assistants (AAPA)",
    "Utah Academy of Physician Assistants (UAPA)",
    "American Society for Aesthetic Plastic Surgery (ASAPS)",
    "International Association for Physicians in Aesthetic Medicine (IAPAM)",
    "American Med Spa Association (AmSpa)",
  ]

  const training = [
    {
      title: "Advanced Injection Techniques",
      provider: "Allergan Medical Institute",
      year: "2023",
    },
    {
      title: "Facial Anatomy & Safety",
      provider: "American Board of Cosmetic Surgery",
      year: "2022",
    },
    {
      title: "Aesthetic Medicine Masterclass",
      provider: "International Association of Aesthetic Medicine",
      year: "2022",
    },
    {
      title: "Emergency Management in Aesthetics",
      provider: "Aesthetic Complications Expert Group",
      year: "2021",
    },
  ]

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm uppercase tracking-wider text-black/60">CREDENTIALS</p>
          <h2 className="font-serif text-4xl lg:text-5xl mt-4 mb-6">Qualifications & Training</h2>
          <p className="text-lg text-black/70">
            Bradley maintains the highest standards of medical practice through continuous education and professional
            development.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Certifications */}
          <div className="bg-[#F5F2ED] p-8">
            <h3 className="font-serif text-2xl mb-6 text-center">Certifications</h3>
            <ul className="space-y-3">
              {certifications.map((cert, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-green-500 text-white flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0">
                    ✓
                  </div>
                  <span className="text-black/70 text-sm">{cert}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Professional Memberships */}
          <div className="bg-[#F5F2ED] p-8">
            <h3 className="font-serif text-2xl mb-6 text-center">Professional Memberships</h3>
            <ul className="space-y-3">
              {memberships.map((membership, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-[#E4D096] text-black flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0">
                    ★
                  </div>
                  <span className="text-black/70 text-sm">{membership}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Continuing Education */}
          <div className="bg-[#F5F2ED] p-8">
            <h3 className="font-serif text-2xl mb-6 text-center">Recent Training</h3>
            <div className="space-y-4">
              {training.map((course, index) => (
                <div key={index} className="border-l-2 border-[#E4D096] pl-4">
                  <div className="text-sm uppercase tracking-wider text-black/60 mb-1">{course.year}</div>
                  <h4 className="font-bold text-sm mb-1">{course.title}</h4>
                  <p className="text-black/70 text-xs">{course.provider}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Safety Statement */}
        <div className="mt-16 bg-[#2C2C2C] text-white p-8 lg:p-12 text-center max-w-4xl mx-auto">
          <h3 className="font-serif text-2xl lg:text-3xl mb-6">Commitment to Excellence</h3>
          <p className="text-lg text-white/90 leading-relaxed">
            Bradley stays current with the latest techniques, safety protocols, and industry standards through ongoing
            education and training. This commitment ensures that every patient receives the highest quality care with
            the most advanced and proven treatment methods available.
          </p>
        </div>
      </div>
    </section>
  )
}
