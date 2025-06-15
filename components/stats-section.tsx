import { Card, CardContent } from "@/components/ui/card"
import { Users, BookOpen, Award, TrendingUp, Globe, Clock } from "lucide-react"

export function StatsSection() {
  const stats = [
    {
      number: "50,000+",
      label: "Active Students",
      icon: Users,
      color: "#00c2ff",
      description: "Learning worldwide",
    },
    {
      number: "1,200+",
      label: "Courses Available",
      icon: BookOpen,
      color: "#33efa0",
      description: "Across all categories",
    },
    {
      number: "200+",
      label: "Expert Instructors",
      icon: Award,
      color: "#49bbbd",
      description: "Industry professionals",
    },
    {
      number: "95%",
      label: "Success Rate",
      icon: TrendingUp,
      color: "#ff6b6b",
      description: "Course completion",
    },
    {
      number: "150+",
      label: "Countries",
      icon: Globe,
      color: "#ffa726",
      description: "Global reach",
    },
    {
      number: "24/7",
      label: "Support",
      icon: Clock,
      color: "#ab47bc",
      description: "Always available",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-[#f9f9f9] to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#00c2ff]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#33efa0]/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#252641] mb-4">Trusted by Learners Worldwide</h2>
          <p className="text-xl text-[#626381] max-w-3xl mx-auto">
            Join a global community of learners and achieve your goals with our proven platform
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <CardContent className="p-8 text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: stat.color }}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-[#252641] mb-2 group-hover:scale-105 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-[#252641] mb-1">{stat.label}</div>
                <div className="text-sm text-[#626381]">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
