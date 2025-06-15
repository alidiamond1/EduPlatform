import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Clock, BookOpen, TrendingUp, ArrowRight } from "lucide-react"
import Link from "next/link"
import { EnhancedHeroSection } from "@/components/enhanced-hero-section"
import { EnhancedCourseCard } from "@/components/enhanced-course-card"
import { TestimonialsSection } from "@/components/testimonials-section"
import { StatsSection } from "@/components/stats-section"

export default function HomePage() {
  const featuredCourses = [
    {
      id: 1,
      title: "Complete Web Development Bootcamp",
      instructor: "Sarah Johnson",
      rating: 4.9,
      students: 12500,
      price: "$89",
      originalPrice: "$129",
      image: "/images/course-web-dev.jpg",
      category: "Development",
      level: "Beginner",
      duration: "40 hours",
      lessons: 120,
      isPopular: true,
      description: "Master HTML, CSS, JavaScript, React, and Node.js in this comprehensive bootcamp.",
    },
    {
      id: 2,
      title: "Digital Marketing Mastery",
      instructor: "Mike Chen",
      rating: 4.8,
      students: 8900,
      price: "$79",
      originalPrice: "$119",
      image: "/images/course-marketing.jpg",
      category: "Marketing",
      level: "Intermediate",
      duration: "25 hours",
      lessons: 85,
      isBestseller: true,
      description: "Learn SEO, social media marketing, email campaigns, and paid advertising.",
    },
    {
      id: 3,
      title: "UI/UX Design Fundamentals",
      instructor: "Emma Davis",
      rating: 4.9,
      students: 6700,
      price: "$99",
      originalPrice: "$149",
      image: "/images/course-design.jpg",
      category: "Design",
      level: "Beginner",
      duration: "30 hours",
      lessons: 95,
      isPopular: true,
      description: "Design beautiful, user-friendly interfaces with Figma and modern design principles.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Hero Section */}
      <EnhancedHeroSection />

      {/* Features Section */}
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
            <h2 className="text-3xl lg:text-4xl font-bold text-[#252641] mb-4">Why Choose Our Platform?</h2>
            <p className="text-xl text-[#626381] max-w-3xl mx-auto">
              We provide everything you need to succeed in your learning journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Expert Instructors",
                description: "Learn from industry professionals with years of real-world experience",
                color: "#65daff",
                image: "/images/instructor-teaching.jpg",
              },
              {
                icon: Clock,
                title: "Flexible Learning",
                description: "Study at your own pace with lifetime access to course materials",
                color: "#49bbbd",
                image: "/images/online-classroom.jpg",
              },
              {
                icon: TrendingUp,
                title: "Career Growth",
                description: "Advance your career with in-demand skills and industry certifications",
                color: "#33efa0",
                image: "/images/success-celebration.jpg",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group"
              >
                <CardContent className="p-0">
                  {/* Feature Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={feature.image || "/placeholder.svg"}
                      alt={feature.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div
                      className="absolute bottom-4 left-4 w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: feature.color }}
                    >
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#252641] mb-3 group-hover:text-[#00c2ff] transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-[#626381] leading-relaxed">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Courses */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#252641] mb-4">Popular Courses</h2>
              <p className="text-xl text-[#626381]">Discover our most loved courses by the community</p>
            </div>
            <Link href="/courses">
              <Button
                variant="outline"
                className="border-[#00c2ff] text-[#00c2ff] hover:bg-[#00c2ff] hover:text-white shadow-lg hover:shadow-xl transition-all"
              >
                View All Courses
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <EnhancedCourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Community Section */}
      <section className="py-20 bg-[#252641] relative overflow-hidden">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url('/images/pattern-dots.svg')",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Join Our Learning Community</h2>
              <p className="text-xl text-gray-300 mb-8">
                Connect with fellow learners, share knowledge, and grow together in our supportive community.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Discussion forums for every course",
                  "Live Q&A sessions with instructors",
                  "Peer-to-peer learning opportunities",
                  "Study groups and project collaborations",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-[#33efa0] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <Link href="/community">
                <Button
                  size="lg"
                  className="bg-[#00c2ff] hover:bg-[#1ea4ce] text-white shadow-lg hover:shadow-xl transition-all btn-glow"
                >
                  Join Community
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>

            <div className="relative">
              <img
                src="/images/team-collaboration.jpg"
                alt="Learning community discussion"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />

              {/* Floating Stats */}
              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#252641]">25K+</div>
                  <div className="text-sm text-[#626381]">Active Members</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Footer */}
      <footer className="bg-[#171b41] text-white py-16 relative overflow-hidden">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "url('/images/pattern-grid.svg')",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-[#00c2ff] rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <span className="ml-2 text-xl font-bold">EduPlatform</span>
              </div>
              <p className="text-gray-400 mb-4">
                Empowering learners worldwide with quality education and community support.
              </p>
              <div className="flex space-x-4">
                {["facebook", "twitter", "linkedin", "instagram"].map((social) => (
                  <div
                    key={social}
                    className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-[#00c2ff] transition-colors cursor-pointer"
                  >
                    <span className="text-xs">{social[0].toUpperCase()}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Courses</h4>
              <ul className="space-y-2 text-gray-400">
                {["Web Development", "Digital Marketing", "UI/UX Design", "Data Science", "Mobile Development"].map(
                  (item) => (
                    <li key={item}>
                      <Link href="/courses" className="hover:text-white transition-colors">
                        {item}
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                {["About Us", "Careers", "Contact", "Blog", "Press"].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                {["Help Center", "Community", "Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 EduPlatform. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
