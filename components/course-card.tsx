import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Clock, Users } from "lucide-react"
import { OptimizedImage } from "./image-optimization"
import Link from "next/link"

interface CourseCardProps {
  course: {
    id: number
    title: string
    instructor: string
    rating: number
    students: number
    price: string
    originalPrice: string
    image: string
    category: string
    level: string
    duration: string
    description?: string
  }
  viewMode?: "grid" | "list"
}

export function CourseCard({ course, viewMode = "grid" }: CourseCardProps) {
  if (viewMode === "list") {
    return (
      <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
        <CardContent className="p-0">
          <div className="flex flex-col md:flex-row">
            <div className="relative md:w-80 h-48 md:h-auto">
              <OptimizedImage
                src={course.image}
                alt={course.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 320px"
              />
              <Badge className="absolute top-4 left-4 bg-[#00c2ff] text-white">{course.category}</Badge>
              <Badge className="absolute top-4 right-4 bg-black/50 text-white">{course.level}</Badge>
            </div>
            <div className="flex-1 p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#252641] mb-2">{course.title}</h3>
                  <p className="text-[#626381] mb-3">by {course.instructor}</p>
                  {course.description && <p className="text-[#626381] mb-4">{course.description}</p>}
                  <div className="flex items-center space-x-6 mb-4">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{course.rating}</span>
                      <span className="text-sm text-[#626381]">({course.students.toLocaleString()})</span>
                    </div>
                    <div className="flex items-center space-x-1 text-sm text-[#626381]">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-sm text-[#626381]">
                      <Users className="w-4 h-4" />
                      <span>{course.students.toLocaleString()} students</span>
                    </div>
                  </div>
                </div>
                <div className="text-right ml-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-2xl font-bold text-[#252641]">{course.price}</span>
                    <span className="text-sm text-[#626381] line-through">{course.originalPrice}</span>
                  </div>
                  <Link href={`/courses/${course.id}`}>
                    <Button className="bg-[#00c2ff] hover:bg-[#1ea4ce] text-white">Enroll Now</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group">
      <div className="relative">
        <OptimizedImage
          src={course.image}
          alt={course.title}
          width={300}
          height={200}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <Badge className="absolute top-4 left-4 bg-[#00c2ff] text-white">{course.category}</Badge>
        <Badge className="absolute top-4 right-4 bg-black/50 text-white">{course.level}</Badge>
      </div>
      <CardContent className="p-6">
        <h3 className="text-lg font-bold text-[#252641] mb-2 line-clamp-2">{course.title}</h3>
        <p className="text-[#626381] mb-3">by {course.instructor}</p>
        {course.description && <p className="text-sm text-[#626381] mb-4 line-clamp-2">{course.description}</p>}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{course.rating}</span>
            <span className="text-sm text-[#626381]">({course.students.toLocaleString()})</span>
          </div>
          <div className="flex items-center space-x-1 text-sm text-[#626381]">
            <Clock className="w-4 h-4" />
            <span>{course.duration}</span>
          </div>
        </div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-[#252641]">{course.price}</span>
            <span className="text-sm text-[#626381] line-through">{course.originalPrice}</span>
          </div>
        </div>
        <Link href={`/courses/${course.id}`}>
          <Button className="w-full bg-[#00c2ff] hover:bg-[#1ea4ce] text-white">Enroll Now</Button>
        </Link>
      </CardContent>
    </Card>
  )
}
