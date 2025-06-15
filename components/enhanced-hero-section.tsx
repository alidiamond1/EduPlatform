import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { PlayCircle, Award, TrendingUp, Users } from "lucide-react"
import { ProgressiveImage } from "./progressive-image"
import Link from "next/link"

export function EnhancedHeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-[#65daff] via-[#00c2ff] to-[#1ea4ce] py-20 overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "url('/images/pattern-dots.svg')",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-[#33efa0]/20 rounded-full blur-xl animate-pulse delay-1000" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="z-10">
            <Badge className="bg-white/20 text-white border-white/30 mb-6 backdrop-blur-sm">
              🎉 New courses available now
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Learn Skills That Matter for Your{" "}
              <span className="text-[#33efa0] relative">
                Future
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-[#33efa0]/30"
                  viewBox="0 0 200 12"
                  fill="currentColor"
                >
                  <path d="M0 8c40-4 80-4 120 0s80 4 80 0v4H0z" />
                </svg>
              </span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Join thousands of learners advancing their careers with our expert-led courses and vibrant community.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="/courses">
                <Button size="lg" className="bg-white text-[#00c2ff] hover:bg-gray-50 shadow-lg group">
                  <PlayCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Start Learning
                </Button>
              </Link>
              <Link href="/courses">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 backdrop-blur-sm"
                >
                  Browse Courses
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-8">
              {[
                { number: "50K+", label: "Active Learners", icon: Users },
                { number: "200+", label: "Expert Instructors", icon: Award },
                { number: "95%", label: "Success Rate", icon: TrendingUp },
              ].map((stat, index) => (
                <div key={index} className="text-white">
                  <div className="flex items-center space-x-2 mb-2">
                    <stat.icon className="w-5 h-5 text-[#33efa0]" />
                    <div className="text-3xl font-bold">{stat.number}</div>
                  </div>
                  <div className="text-sm opacity-90">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <ProgressiveImage
                src="/images/hero-coding-workspace.jpg"
                alt="Modern coding workspace with multiple monitors"
                width={600}
                height={700}
                className="rounded-2xl shadow-2xl w-full transform hover:scale-105 transition-transform duration-500"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={90}
              />
            </div>

            {/* Floating Cards */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-2xl z-20 animate-bounce-slow">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-[#33efa0] rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-[#252641]">Certificate Ready</div>
                  <div className="text-sm text-[#626381]">Complete courses & earn certificates</div>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-white rounded-xl p-4 shadow-2xl z-20 animate-float">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  {[
                    "/images/testimonial-john.jpg",
                    "/images/testimonial-sarah.jpg",
                    "/images/testimonial-mike.jpg",
                  ].map((src, i) => (
                    <ProgressiveImage
                      key={i}
                      src={src}
                      alt={`Student ${i + 1}`}
                      width={32}
                      height={32}
                      className="w-8 h-8 rounded-full border-2 border-white object-cover"
                    />
                  ))}
                </div>
                <div className="text-sm font-medium text-[#252641]">+12K Students</div>
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#33efa0]/20 to-[#00c2ff]/20 rounded-3xl blur-xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
