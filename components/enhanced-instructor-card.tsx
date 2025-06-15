import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, Linkedin, Twitter, Globe, Award, Users, BookOpen } from "lucide-react"
import { ProgressiveImage } from "./progressive-image"
import Link from "next/link"

interface EnhancedInstructorCardProps {
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
    isVerified?: boolean
    yearsExperience?: number
  }
}

export function EnhancedInstructorCard({ instructor }: EnhancedInstructorCardProps) {
  return (
    <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group">
      <CardContent className="p-0">
        {/* Header with Gradient Background */}
        <div className="relative bg-gradient-to-br from-[#65daff] to-[#00c2ff] p-8 text-center overflow-hidden">
          {/* Background Pattern */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: "url('/images/pattern-dots.svg')",
              backgroundSize: "30px 30px",
            }}
          />

          {/* Profile Image */}
          <div className="relative z-10">
            <div className="relative w-24 h-24 mx-auto mb-4">
              <ProgressiveImage
                src={instructor.avatar}
                alt={instructor.name}
                fill
                className="rounded-full border-4 border-white shadow-xl object-cover group-hover:scale-110 transition-transform duration-300"
                sizes="96px"
              />
              {instructor.isVerified && (
                <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-[#33efa0] rounded-full flex items-center justify-center border-2 border-white">
                  <Award className="w-4 h-4 text-white" />
                </div>
              )}
            </div>

            <h3 className="text-xl font-bold text-white mb-1">{instructor.name}</h3>
            <p className="text-white/90 mb-3">{instructor.title}</p>

            <div className="flex items-center justify-center space-x-1 text-white/90">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">{instructor.location}</span>
            </div>

            {instructor.yearsExperience && (
              <div className="mt-2">
                <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                  {instructor.yearsExperience}+ years experience
                </Badge>
              </div>
            )}
          </div>
        </div>

        <div className="p-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-4 mb-6 text-center">
            <div className="group-hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-center space-x-1 mb-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="font-bold text-[#252641]">{instructor.rating}</span>
              </div>
              <div className="text-xs text-[#626381]">Rating</div>
            </div>
            <div className="group-hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-center space-x-1 mb-1">
                <Users className="w-4 h-4 text-[#00c2ff]" />
                <span className="font-bold text-[#252641]">{instructor.students.toLocaleString()}</span>
              </div>
              <div className="text-xs text-[#626381]">Students</div>
            </div>
            <div className="group-hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-center space-x-1 mb-1">
                <BookOpen className="w-4 h-4 text-[#33efa0]" />
                <span className="font-bold text-[#252641]">{instructor.courses}</span>
              </div>
              <div className="text-xs text-[#626381]">Courses</div>
            </div>
          </div>

          {/* Specialties */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {instructor.specialties.map((specialty, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="text-xs hover:bg-[#00c2ff] hover:text-white transition-colors cursor-default"
                >
                  {specialty}
                </Badge>
              ))}
            </div>
          </div>

          {/* Bio */}
          <p className="text-[#626381] text-sm mb-6 line-clamp-3 leading-relaxed">{instructor.bio}</p>

          {/* Actions */}
          <div className="flex items-center justify-between">
            <div className="flex space-x-2">
              <Button
                variant="ghost"
                size="sm"
                className="p-2 hover:bg-[#00c2ff]/10 hover:text-[#00c2ff] transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="p-2 hover:bg-[#00c2ff]/10 hover:text-[#00c2ff] transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="p-2 hover:bg-[#00c2ff]/10 hover:text-[#00c2ff] transition-colors"
              >
                <Globe className="w-4 h-4" />
              </Button>
            </div>
            <Link href={`/instructors/${instructor.id}`}>
              <Button
                size="sm"
                className="bg-[#00c2ff] hover:bg-[#1ea4ce] text-white shadow-lg hover:shadow-xl transition-all"
              >
                View Profile
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
