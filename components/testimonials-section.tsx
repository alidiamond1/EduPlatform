import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import { ProgressiveImage } from "./progressive-image"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "John Martinez",
      role: "Full Stack Developer",
      company: "Tech Startup",
      image: "/images/testimonial-john.jpg",
      rating: 5,
      text: "This platform completely transformed my career. The courses are practical, engaging, and taught by industry experts. I landed my dream job just 3 months after completing the web development bootcamp!",
      course: "Complete Web Development Bootcamp",
    },
    {
      name: "Sarah Chen",
      role: "UX Designer",
      company: "Design Agency",
      image: "/images/testimonial-sarah.jpg",
      rating: 5,
      text: "The UI/UX design course exceeded my expectations. The hands-on projects and real-world case studies helped me build a portfolio that impressed employers. Highly recommend!",
      course: "UI/UX Design Fundamentals",
    },
    {
      name: "Mike Thompson",
      role: "Marketing Manager",
      company: "E-commerce Company",
      image: "/images/testimonial-mike.jpg",
      rating: 5,
      text: "The digital marketing course gave me the skills and confidence to lead marketing campaigns. The ROI strategies I learned increased our conversion rate by 40%!",
      course: "Digital Marketing Mastery",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-[#f9f9f9] to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "url('/images/pattern-grid.svg')",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#252641] mb-4">What Our Students Say</h2>
          <p className="text-xl text-[#626381] max-w-3xl mx-auto">
            Join thousands of successful learners who have transformed their careers
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden group"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-[#00c2ff]/20 group-hover:text-[#00c2ff]/40 transition-colors">
                <Quote className="w-8 h-8" />
              </div>

              <CardContent className="p-8">
                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-[#626381] mb-6 italic leading-relaxed">"{testimonial.text}"</blockquote>

                {/* Course Badge */}
                <div className="mb-6">
                  <span className="inline-block bg-[#00c2ff]/10 text-[#00c2ff] px-3 py-1 rounded-full text-sm font-medium">
                    {testimonial.course}
                  </span>
                </div>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <ProgressiveImage
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="w-15 h-15 rounded-full object-cover border-2 border-[#00c2ff]/20"
                  />
                  <div>
                    <h4 className="font-semibold text-[#252641]">{testimonial.name}</h4>
                    <p className="text-sm text-[#626381]">{testimonial.role}</p>
                    <p className="text-xs text-[#626381]">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
