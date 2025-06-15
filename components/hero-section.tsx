import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { PlayCircle, Award } from "lucide-react"
import { OptimizedImage } from "./image-optimization"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-[#65daff] to-[#00c2ff] py-20 overflow-hidden">
      <div className="absolute inset-0 bg-black/5"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="bg-white/20 text-white border-white/30 mb-6">🎉 New courses available now</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Learn Skills That Matter for Your <span className="text-[#33efa0]">Future</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Join thousands of learners advancing their careers with our expert-led courses and vibrant community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="/courses">
                <Button size="lg" className="bg-white text-[#00c2ff] hover:bg-gray-50 shadow-lg">
                  <PlayCircle className="w-5 h-5 mr-2" />
                  Start Learning
                </Button>
              </Link>
              <Link href="/courses">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Browse Courses
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-8">
              <div className="text-white">
                <div className="text-3xl font-bold">50K+</div>
                <div className="text-sm opacity-90">Active Learners</div>
              </div>
              <div className="text-white">
                <div className="text-3xl font-bold">200+</div>
                <div className="text-sm opacity-90">Expert Instructors</div>
              </div>
              <div className="text-white">
                <div className="text-3xl font-bold">1000+</div>
                <div className="text-sm opacity-90">Courses</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative z-10">
              <OptimizedImage
                src="/images/hero-woman-learning.jpg"
                alt="Professional woman learning online"
                width={500}
                height={600}
                className="rounded-2xl shadow-2xl w-full"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg z-20">
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
            <div className="absolute -top-6 -right-6 bg-white rounded-xl p-4 shadow-lg z-20">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-8 h-8 bg-gray-300 rounded-full border-2 border-white"></div>
                  ))}
                </div>
                <div className="text-sm font-medium text-[#252641]">+12K Students</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
