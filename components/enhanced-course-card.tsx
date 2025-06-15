import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Clock, Users, PlayCircle, BookOpen } from "lucide-react"
import { ProgressiveImage } from "./progressive-image"
import Link from "next/link"

interface EnhancedCourseCardProps {
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
    lessons?: number
    isPopular?: boolean
    isBestseller?: boolean
  }
  viewMode?: "grid" | "list"
}

export function EnhancedCourseCard({ course, viewMode = "grid" }: EnhancedCourseCardProps) {
  if (viewMode === "list") {
    return (
      <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
        <CardContent className="p-0">
          <div className="flex flex-col md:flex-row">
            <div className="relative md:w-80 h-48 md:h-auto overflow-hidden">
              <ProgressiveImage
                src={course.image}
                alt={course.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 320px"
              />

              {/* Overlay Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                <Badge className="bg-[#00c2ff] text-white shadow-lg">{course.category}</Badge>
                {course.isPopular && <Badge className="bg-[#ff6b6b] text-white shadow-lg">🔥 Popular</Badge>}
                {course.isBestseller && <Badge className="bg-[#33efa0] text-white shadow-lg">⭐ Bestseller</Badge>}
              </div>

              <Badge className="absolute top-4 right-4 bg-black/70 text-white backdrop-blur-sm">{course.level}</Badge>

              {/* Play Button Overlay */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Button size="lg" className="rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm">
                  <PlayCircle className="w-8 h-8 text-white" />
                </Button>
              </div>
            </div>

            <div className="flex-1 p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#252641] mb-2 group-hover:text-[#00c2ff] transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-[#626381] mb-3">by {course.instructor}</p>
                  {course.description && <p className="text-[#626381] mb-4 line-clamp-2">{course.description}</p>}

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
                    {course.lessons && (
                      <div className="flex items-center space-x-1 text-sm text-[#626381]">
                        <BookOpen className="w-4 h-4" />
                        <span>{course.lessons} lessons</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="text-right ml-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-2xl font-bold text-[#252641]">{course.price}</span>
                    <span className="text-sm text-[#626381] line-through">{course.originalPrice}</span>
                  </div>
                  <div className="mb-4">
                    <Badge className="bg-red-100 text-red-600">
                      {Math.round(
                        ((Number.parseFloat(course.originalPrice.slice(1)) - Number.parseFloat(course.price.slice(1))) /
                          Number.parseFloat(course.originalPrice.slice(1))) *
                          100,
                      )}
                      % OFF
                    </Badge>
                  </div>
                  <Link href={`/courses/${course.id}`}>
                    <Button className="bg-[#00c2ff] hover:bg-[#1ea4ce] text-white shadow-lg hover:shadow-xl transition-all">
                      Enroll Now
                    </Button>
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
    <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group">
      <div className="relative overflow-hidden">
        <ProgressiveImage
          src={course.image}
          alt={course.title}
          width={400}
          height={250}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          <Badge className="bg-[#00c2ff] text-white shadow-lg">{course.category}</Badge>
          {course.isPopular && <Badge className="bg-[#ff6b6b] text-white shadow-lg">🔥 Popular</Badge>}
          {course.isBestseller && <Badge className="bg-[#33efa0] text-white shadow-lg">⭐ Bestseller</Badge>}
        </div>

        <Badge className="absolute top-4 right-4 bg-black/70 text-white backdrop-blur-sm">{course.level}</Badge>

        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button size="lg" className="rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm">
            <PlayCircle className="w-8 h-8 text-white" />
          </Button>
        </div>
      </div>

      <CardContent className="p-6">
        <h3 className="text-lg font-bold text-[#252641] mb-2 line-clamp-2 group-hover:text-[#00c2ff] transition-colors">
          {course.title}
        </h3>
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
          <Badge className="bg-red-100 text-red-600">
            {Math.round(
              ((Number.parseFloat(course.originalPrice.slice(1)) - Number.parseFloat(course.price.slice(1))) /
                Number.parseFloat(course.originalPrice.slice(1))) *
                100,
            )}
            % OFF
          </Badge>
        </div>

        <Link href={`/courses/${course.id}`}>
          <Button className="w-full bg-[#00c2ff] hover:bg-[#1ea4ce] text-white shadow-lg hover:shadow-xl transition-all">
            Enroll Now
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}
