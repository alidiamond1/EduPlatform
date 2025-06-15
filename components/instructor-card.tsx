import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, Linkedin, Twitter, Globe } from "lucide-react"
import { OptimizedImage } from "./image-optimization"
import Link from "next/link"

interface InstructorCardProps {
  instructor: {
    id: number
    name: string
    title: string
    avatar: string
    rating: number
    students: number
    courses: number
    specialties: string[]
    location: string
    bio: string
    social: {
      linkedin: string
      twitter: string
      website: string
    }
  }
}

export function InstructorCard({ instructor }: InstructorCardProps) {
  return (
    <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
      <CardContent className="p-0">
        <div className="relative bg-gradient-to-br from-[#65daff] to-[#00c2ff] p-8 text-center">
          <div className="relative w-24 h-24 mx-auto mb-4">
            <OptimizedImage
              src={instructor.avatar}
              alt={instructor.name}
              fill
              className="rounded-full border-4 border-white shadow-lg object-cover"
              sizes="96px"
            />
          </div>
          <h3 className="text-xl font-bold text-white mb-1">{instructor.name}</h3>
          <p className="text-white/90 mb-3">{instructor.title}</p>
          <div className="flex items-center justify-center space-x-1 text-white/90">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">{instructor.location}</span>
          </div>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-3 gap-4 mb-6 text-center">
            <div>
              <div className="flex items-center justify-center space-x-1 mb-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="font-bold text-[#252641]">{instructor.rating}</span>
              </div>
              <div className="text-xs text-[#626381]">Rating</div>
            </div>
            <div>
              <div className="font-bold text-[#252641] mb-1">{instructor.students.toLocaleString()}</div>
              <div className="text-xs text-[#626381]">Students</div>
            </div>
            <div>
              <div className="font-bold text-[#252641] mb-1">{instructor.courses}</div>
              <div className="text-xs text-[#626381]">Courses</div>
            </div>
          </div>

          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {instructor.specialties.map((specialty, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {specialty}
                </Badge>
              ))}
            </div>
          </div>

          <p className="text-[#626381] text-sm mb-6 line-clamp-3">{instructor.bio}</p>

          <div className="flex items-center justify-between">
            <div className="flex space-x-2">
              <Button variant="ghost" size="sm" className="p-2">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2">
                <Globe className="w-4 h-4" />
              </Button>
            </div>
            <Link href={`/instructors/${instructor.id}`}>
              <Button size="sm" className="bg-[#00c2ff] hover:bg-[#1ea4ce] text-white">
                View Profile
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
