"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Grid, List, Filter } from "lucide-react"
import { EnhancedCourseCard } from "@/components/enhanced-course-card"

export default function CoursesPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedLevel, setSelectedLevel] = useState("all")

  const courses = [
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
      description: "Learn HTML, CSS, JavaScript, React, Node.js and more in this comprehensive bootcamp.",
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
      description: "Master SEO, social media marketing, email marketing, and paid advertising strategies.",
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
      description: "Learn design principles, user research, wireframing, and prototyping with Figma.",
    },
    {
      id: 4,
      title: "Python for Data Science",
      instructor: "Dr. Alex Kumar",
      rating: 4.7,
      students: 5400,
      price: "$109",
      originalPrice: "$159",
      image: "/images/course-python.jpg",
      category: "Data Science",
      level: "Advanced",
      duration: "50 hours",
      lessons: 150,
      description: "Master data analysis, machine learning, and visualization with Python and pandas.",
    },
    {
      id: 5,
      title: "React Native Mobile Development",
      instructor: "James Wilson",
      rating: 4.6,
      students: 4200,
      price: "$95",
      originalPrice: "$135",
      image: "/images/course-react.jpg",
      category: "Development",
      level: "Intermediate",
      duration: "35 hours",
      lessons: 110,
      description: "Build cross-platform mobile apps for iOS and Android using React Native.",
    },
    {
      id: 6,
      title: "Advanced JavaScript Concepts",
      instructor: "Sarah Johnson",
      rating: 4.8,
      students: 7800,
      price: "$75",
      originalPrice: "$115",
      image: "/images/course-javascript.jpg",
      category: "Development",
      level: "Advanced",
      duration: "28 hours",
      lessons: 90,
      isBestseller: true,
      description: "Deep dive into closures, prototypes, async programming, and modern ES6+ features.",
    },
  ]

  const categories = ["all", "Development", "Design", "Marketing", "Data Science", "Business"]
  const levels = ["all", "Beginner", "Intermediate", "Advanced"]

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || course.category === selectedCategory
    const matchesLevel = selectedLevel === "all" || course.level === selectedLevel

    return matchesSearch && matchesCategory && matchesLevel
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Enhanced Header */}
      <section className="bg-gradient-to-br from-[#252641] to-[#171b41] py-20 relative overflow-hidden">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url('/images/pattern-dots.svg')",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Explore Our Courses</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover thousands of courses taught by expert instructors from around the world
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              {[
                { number: "1,200+", label: "Courses" },
                { number: "200+", label: "Instructors" },
                { number: "50K+", label: "Students" },
                { number: "95%", label: "Success Rate" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-[#33efa0]">{stat.number}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Filters */}
      <section className="py-8 bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search courses, instructors..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 border-gray-200 focus:border-[#00c2ff] focus:ring-[#00c2ff]"
                />
              </div>

              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full sm:w-48 border-gray-200">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category === "all" ? "All Categories" : category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                <SelectTrigger className="w-full sm:w-48 border-gray-200">
                  <SelectValue placeholder="Level" />
                </SelectTrigger>
                <SelectContent>
                  {levels.map((level) => (
                    <SelectItem key={level} value={level}>
                      {level === "all" ? "All Levels" : level}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className={viewMode === "grid" ? "bg-[#00c2ff] hover:bg-[#1ea4ce]" : ""}
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
                className={viewMode === "list" ? "bg-[#00c2ff] hover:bg-[#1ea4ce]" : ""}
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl font-bold text-[#252641]">
                {filteredCourses.length} Course{filteredCourses.length !== 1 ? "s" : ""} Found
              </h2>
              <p className="text-[#626381] mt-1">
                {searchTerm && `Results for "${searchTerm}"`}
                {selectedCategory !== "all" && ` in ${selectedCategory}`}
                {selectedLevel !== "all" && ` • ${selectedLevel} level`}
              </p>
            </div>

            <Select defaultValue="popular">
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {filteredCourses.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-[#252641] mb-2">No courses found</h3>
              <p className="text-[#626381] mb-6">Try adjusting your search criteria or browse all courses</p>
              <Button
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCategory("all")
                  setSelectedLevel("all")
                }}
                className="bg-[#00c2ff] hover:bg-[#1ea4ce] text-white"
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <>
              {viewMode === "grid" ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredCourses.map((course) => (
                    <EnhancedCourseCard key={course.id} course={course} viewMode="grid" />
                  ))}
                </div>
              ) : (
                <div className="space-y-6">
                  {filteredCourses.map((course) => (
                    <EnhancedCourseCard key={course.id} course={course} viewMode="list" />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  )
}
