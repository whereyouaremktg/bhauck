export default function AboutBio() {
  const education = [
    {
      degree: "Master of Physician Assistant Studies",
      school: "University of Utah",
      year: "2014",
    },
    {
      degree: "Master of Public Administration",
      school: "University of Utah",
      year: "2012",
    },
    {
      degree: "Bachelor of Science in Health Promotion",
      school: "Utah State University",
      year: "2010",
    },
  ]

  const experience = [
    {
      year: "2019 - Present",
      role: "Founder & Medical Director",
      location: "Revive Beauty & Wellness",
      description: "Established comprehensive medical spa offering aesthetic and wellness services",
    },
    {
      year: "2017 - 2019",
      role: "Aesthetic Physician Assistant",
      location: "Premier Plastic Surgery",
      description: "Specialized in advanced aesthetic procedures and post-surgical care",
    },
    {
      year: "2015 - 2017",
      role: "Emergency Medicine PA",
      location: "Dixie Regional Medical Center",
      description: "Provided acute care in high-volume emergency department setting",
    },
    {
      year: "2014 - 2015",
      role: "Family Medicine PA",
      location: "Intermountain Healthcare",
      description: "Comprehensive primary care for patients of all ages",
    },
  ]

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Full Bio */}
          <div className="mb-16">
            <h2 className="font-serif text-3xl lg:text-4xl mb-8 text-center">About Bradley</h2>
            <div className="prose prose-lg max-w-none text-black/70 space-y-6">
              <p>
                Bradley Hauck has been a Physician Assistant for over 10 years, bringing a wealth of medical knowledge
                and experience to the field of aesthetic medicine. His journey began in family medicine, where he
                developed a strong foundation in comprehensive patient care, before expanding into urgent care and
                emergency medicine.
              </p>
              <p>
                Throughout his career, Bradley has always maintained a passion for helping people feel their best. This
                passion naturally led him to aesthetics, where he discovered his true calling in helping patients feel
                confident and beautiful in their own skin. For the past 5 years, he has dedicated himself to mastering
                the art and science of aesthetic medicine.
              </p>
              <p>
                Bradley's approach combines medical expertise with an artistic eye, ensuring that every treatment not
                only achieves excellent results but also looks completely natural. He believes in taking the time to
                understand each patient's unique goals and concerns, creating personalized treatment plans that enhance
                natural beauty rather than changing it.
              </p>
              <p>
                Now established in the St. George area, Bradley is excited to bring his expertise and passion to the
                community, helping local residents achieve their aesthetic and wellness goals in a safe, comfortable,
                and professional environment.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Education */}
            <div>
              <h3 className="font-serif text-2xl lg:text-3xl mb-8">Education</h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-[#E4D096] pl-6">
                    <div className="text-sm uppercase tracking-wider text-black/60 mb-1">{edu.year}</div>
                    <h4 className="font-bold text-lg mb-1">{edu.degree}</h4>
                    <p className="text-black/70">{edu.school}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience Timeline */}
            <div>
              <h3 className="font-serif text-2xl lg:text-3xl mb-8">Experience</h3>
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <div key={index} className="border-l-2 border-[#E4D096] pl-6">
                    <div className="text-sm uppercase tracking-wider text-black/60 mb-1">{exp.year}</div>
                    <h4 className="font-bold text-lg mb-1">{exp.role}</h4>
                    <p className="text-[#E4D096] font-semibold mb-2">{exp.location}</p>
                    <p className="text-black/70 text-sm">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Philosophy */}
          <div className="mt-16 bg-[#F5F2ED] p-8 lg:p-12 text-center">
            <h3 className="font-serif text-2xl lg:text-3xl mb-6">Personal Approach & Philosophy</h3>
            <blockquote className="text-lg lg:text-xl text-black/80 italic leading-relaxed max-w-3xl mx-auto">
              "I believe that true beauty comes from feeling confident and comfortable in your own skin. My role is not
              to change who you are, but to help you become the best version of yourself. Every treatment is approached
              with artistry, precision, and genuine care for each patient's unique journey."
            </blockquote>
            <div className="mt-6 text-sm uppercase tracking-wider text-black/60">— Bradley Hauck, PA-C</div>
          </div>
        </div>
      </div>
    </section>
  )
}
