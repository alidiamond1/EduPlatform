"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import {
  Star,
  Clock,
  Users,
  PlayCircle,
  Download,
  Award,
  CheckCircle,
  Globe,
  Smartphone,
  Monitor,
  Share2,
  Heart,
} from "lucide-react"

export default function CourseDetailPage({ params }: { params: { id: string } }) {
  const [isEnrolled, setIsEnrolled] = useState(false)
  const [activeTab, setActiveTab] = useState("overview")

  // Mock course data - in real app, fetch based on params.id
  const course = {
    id: 1,
    title: "Complete Web Development Bootcamp",
    subtitle: "Learn HTML, CSS, JavaScript, React, Node.js and more in this comprehensive bootcamp",
    instructor: {
      name: "Sarah Johnson",
      title: "Senior Full Stack Developer",
      avatar: "/images/instructor-sarah.jpg",
      rating: 4.9,
      students: 45000,
      courses: 12,
    },
    rating: 4.9,
    totalRatings: 12500,
    students: 45000,
    price: "$89",
    originalPrice: "$129",
    image: "/images/course-web-dev.jpg",
    category: "Development",
    level: "Beginner",
    duration: "40 hours",
    lastUpdated: "December 2024",
    language: "English",
    features: [
      "40 hours on-demand video",
      "15 articles",
      "25 downloadable resources",
      "Full lifetime access",
      "Access on mobile and TV",
      "Certificate of completion",
    ],
    whatYouLearn: [
      "Build responsive websites with HTML, CSS, and JavaScript",
      "Master React.js and build modern web applications",
      "Learn Node.js and Express.js for backend development",
      "Work with databases using MongoDB",
      "Deploy applications to production",
      "Understand modern development workflows",
    ],
    curriculum: [
      {
        title: "Introduction to Web Development",
        lessons: 8,
        duration: "2 hours",
        lectures: [
          { title: "Course Introduction", duration: "5:30", preview: true },
          { title: "Setting up Development Environment", duration: "12:45" },
          { title: "HTML Fundamentals", duration: "18:20" },
          { title: "CSS Basics", duration: "22:15" },
        ],
      },
      {
        title: "JavaScript Fundamentals",
        lessons: 12,
        duration: "4 hours",
        lectures: [
          { title: "Variables and Data Types", duration: "15:30" },
          { title: "Functions and Scope", duration: "20:45" },
          { title: "DOM Manipulation", duration: "25:20" },
        ],
      },
      {
        title: "React.js Development",
        lessons: 15,
        duration: "6 hours",
        lectures: [
          { title: "Introduction to React", duration: "18:30" },
          { title: "Components and Props", duration: "22:45" },
          { title: "State Management", duration: "28:20" },
        ],
      },
    ],
    reviews: [
      {
        name: "John Doe",
        avatar: "/images/student-success.jpg",
        rating: 5,
        date: "2 weeks ago",
        comment: "Excellent course! Sarah explains everything clearly and the projects are very practical.",
      },
      {
        name: "Jane Smith",
        avatar: "/images/hero-woman-learning.jpg",
        rating: 5,
        date: "1 month ago",
        comment: "This course helped me land my first developer job. Highly recommended!",
      },
    ],
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#252641] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="mb-4">
                <Badge className="bg-[#00c2ff] text-white mb-4">{course.category}</Badge>
                <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">{course.title}</h1>
                <p className="text-xl text-gray-300 mb-6">{course.subtitle}</p>
              </div>

              <div className="flex flex-wrap items-center gap-6 mb-6">
                <div className="flex items-center space-x-1">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="text-white font-medium">{course.rating}</span>
                  <span className="text-gray-300">({course.totalRatings.toLocaleString()} ratings)</span>
                </div>
                <div className="flex items-center space-x-1 text-gray-300">
                  <Users className="w-5 h-5" />
                  <span>{course.students.toLocaleString()} students</span>
                </div>
                <div className="flex items-center space-x-1 text-gray-300">
                  <Clock className="w-5 h-5" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center space-x-1 text-gray-300">
                  <Globe className="w-5 h-5" />
                  <span>{course.language}</span>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Avatar className="w-12 h-12">
                  <AvatarImage src={course.instructor.avatar || "/placeholder.svg"} />
                  <AvatarFallback>SJ</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-white font-medium">{course.instructor.name}</p>
                  <p className="text-gray-300 text-sm">{course.instructor.title}</p>
                </div>
              </div>
            </div>

            {/* Course Card */}
            <div className="lg:col-span-1">
              <Card className="sticky top-4 shadow-2xl">
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <Button
                      size="lg"
                      className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm"
                    >
                      <PlayCircle className="w-8 h-8 text-white" />
                    </Button>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-3xl font-bold text-[#252641]">{course.price}</span>
                        <span className="text-lg text-[#626381] line-through">{course.originalPrice}</span>
                      </div>
                      <Badge className="bg-red-100 text-red-600">30% OFF</Badge>
                    </div>

                    <div className="space-y-3 mb-6">
                      <Button
                        className="w-full bg-[#00c2ff] hover:bg-[#1ea4ce] text-white text-lg py-3"
                        onClick={() => setIsEnrolled(true)}
                      >
                        {isEnrolled ? "Go to Course" : "Enroll Now"}
                      </Button>
                      <Button variant="outline" className="w-full">
                        Add to Wishlist
                        <Heart className="w-4 h-4 ml-2" />
                      </Button>
                    </div>

                    <div className="space-y-3 text-sm">
                      <p className="font-medium text-[#252641]">This course includes:</p>
                      {course.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-[#33efa0]" />
                          <span className="text-[#626381]">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 pt-6 border-t">
                      <div className="flex items-center justify-between text-sm text-[#626381]">
                        <span>Share this course</span>
                        <Button variant="ghost" size="sm">
                          <Share2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                  <TabsTrigger value="instructor">Instructor</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="mt-8">
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-2xl font-bold text-[#252641] mb-4">What you'll learn</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {course.whatYouLearn.map((item, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-[#33efa0] mt-0.5 flex-shrink-0" />
                            <span className="text-[#626381]">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-[#252641] mb-4">Course Description</h3>
                      <div className="prose max-w-none text-[#626381]">
                        <p>
                          This comprehensive web development bootcamp will take you from complete beginner to job-ready
                          developer. You'll learn the most in-demand skills including HTML, CSS, JavaScript, React,
                          Node.js, and much more.
                        </p>
                        <p>
                          The course is designed with hands-on projects that you'll build throughout the journey. By the
                          end, you'll have a portfolio of real-world applications that you can show to potential
                          employers.
                        </p>
                        <p>
                          Whether you're looking to start a new career, enhance your current skills, or build your own
                          projects, this course provides everything you need to succeed in web development.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-[#252641] mb-4">Requirements</h3>
                      <ul className="space-y-2 text-[#626381]">
                        <li>• No programming experience needed - we'll teach you everything</li>
                        <li>• A computer with internet connection</li>
                        <li>• Willingness to learn and practice</li>
                        <li>• Basic computer skills (using a web browser, downloading files)</li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="curriculum" className="mt-8">
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <h3 className="text-2xl font-bold text-[#252641]">Course Curriculum</h3>
                      <div className="text-sm text-[#626381]">
                        {course.curriculum.length} sections •{" "}
                        {course.curriculum.reduce((acc, section) => acc + section.lessons, 0)} lectures •{" "}
                        {course.duration} total
                      </div>
                    </div>

                    {course.curriculum.map((section, index) => (
                      <Card key={index} className="border shadow-sm">
                        <CardContent className="p-0">
                          <div className="p-4 bg-gray-50 border-b">
                            <div className="flex justify-between items-center">
                              <h4 className="font-semibold text-[#252641]">{section.title}</h4>
                              <div className="text-sm text-[#626381]">
                                {section.lessons} lectures • {section.duration}
                              </div>
                            </div>
                          </div>
                          <div className="divide-y">
                            {section.lectures.map((lecture, lectureIndex) => (
                              <div
                                key={lectureIndex}
                                className="p-4 flex items-center justify-between hover:bg-gray-50"
                              >
                                <div className="flex items-center space-x-3">
                                  <PlayCircle className="w-4 h-4 text-[#626381]" />
                                  <span className="text-[#252641]">{lecture.title}</span>
                                  {lecture.preview && (
                                    <Badge variant="outline" className="text-xs">
                                      Preview
                                    </Badge>
                                  )}
                                </div>
                                <span className="text-sm text-[#626381]">{lecture.duration}</span>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="instructor" className="mt-8">
                  <Card className="border shadow-sm">
                    <CardContent className="p-8">
                      <div className="flex items-start space-x-6">
                        <Avatar className="w-24 h-24">
                          <AvatarImage src={course.instructor.avatar || "/placeholder.svg"} />
                          <AvatarFallback>SJ</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-[#252641] mb-2">{course.instructor.name}</h3>
                          <p className="text-[#626381] mb-4">{course.instructor.title}</p>

                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                            <div className="text-center">
                              <div className="text-2xl font-bold text-[#252641]">{course.instructor.rating}</div>
                              <div className="text-sm text-[#626381]">Instructor Rating</div>
                            </div>
                            <div className="text-center">
                              <div className="text-2xl font-bold text-[#252641]">
                                {course.instructor.students.toLocaleString()}
                              </div>
                              <div className="text-sm text-[#626381]">Students</div>
                            </div>
                            <div className="text-center">
                              <div className="text-2xl font-bold text-[#252641]">{course.instructor.courses}</div>
                              <div className="text-sm text-[#626381]">Courses</div>
                            </div>
                            <div className="text-center">
                              <div className="text-2xl font-bold text-[#252641]">5+</div>
                              <div className="text-sm text-[#626381]">Years Experience</div>
                            </div>
                          </div>

                          <div className="prose max-w-none text-[#626381]">
                            <p>
                              Sarah is a Senior Full Stack Developer with over 5 years of experience building web
                              applications for startups and Fortune 500 companies. She specializes in React, Node.js,
                              and modern web technologies.
                            </p>
                            <p>
                              She's passionate about teaching and has helped thousands of students transition into tech
                              careers. Her courses focus on practical, real-world skills that employers are looking for.
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="reviews" className="mt-8">
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-2xl font-bold text-[#252641] mb-6">Student Reviews</h3>
                      <div className="grid md:grid-cols-2 gap-8 mb-8">
                        <div>
                          <div className="flex items-center space-x-4 mb-4">
                            <div className="text-6xl font-bold text-[#252641]">{course.rating}</div>
                            <div>
                              <div className="flex items-center space-x-1 mb-2">
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                ))}
                              </div>
                              <div className="text-[#626381]">Course Rating</div>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          {[5, 4, 3, 2, 1].map((rating) => (
                            <div key={rating} className="flex items-center space-x-3">
                              <div className="flex items-center space-x-1">
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <Star
                                    key={star}
                                    className={`w-4 h-4 ${star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                                  />
                                ))}
                              </div>
                              <Progress value={rating === 5 ? 85 : rating === 4 ? 12 : 2} className="flex-1" />
                              <span className="text-sm text-[#626381] w-8">
                                {rating === 5 ? "85%" : rating === 4 ? "12%" : "2%"}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      {course.reviews.map((review, index) => (
                        <Card key={index} className="border shadow-sm">
                          <CardContent className="p-6">
                            <div className="flex items-start space-x-4">
                              <Avatar>
                                <AvatarImage src={review.avatar || "/placeholder.svg"} />
                                <AvatarFallback>
                                  {review.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                              <div className="flex-1">
                                <div className="flex items-center justify-between mb-2">
                                  <h4 className="font-semibold text-[#252641]">{review.name}</h4>
                                  <span className="text-sm text-[#626381]">{review.date}</span>
                                </div>
                                <div className="flex items-center space-x-1 mb-3">
                                  {[1, 2, 3, 4, 5].map((star) => (
                                    <Star
                                      key={star}
                                      className={`w-4 h-4 ${star <= review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                                    />
                                  ))}
                                </div>
                                <p className="text-[#626381]">{review.comment}</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="space-y-6">
                <Card className="border shadow-sm">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-[#252641] mb-4">Course Features</h4>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Monitor className="w-5 h-5 text-[#626381]" />
                        <span className="text-sm text-[#626381]">Access on desktop</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Smartphone className="w-5 h-5 text-[#626381]" />
                        <span className="text-sm text-[#626381]">Access on mobile</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Download className="w-5 h-5 text-[#626381]" />
                        <span className="text-sm text-[#626381]">Downloadable resources</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Award className="w-5 h-5 text-[#626381]" />
                        <span className="text-sm text-[#626381]">Certificate of completion</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border shadow-sm">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-[#252641] mb-4">Related Courses</h4>
                    <div className="space-y-4">
                      {[
                        {
                          title: "Advanced React Development",
                          price: "$79",
                          rating: 4.8,
                          image: "/images/course-web-dev.jpg",
                        },
                        {
                          title: "Node.js Backend Development",
                          price: "$69",
                          rating: 4.7,
                          image: "/images/online-learning.jpg",
                        },
                      ].map((relatedCourse, index) => (
                        <div key={index} className="flex space-x-3">
                          <img
                            src={relatedCourse.image || "/placeholder.svg"}
                            alt={relatedCourse.title}
                            className="w-20 h-15 object-cover rounded"
                          />
                          <div className="flex-1">
                            <h5 className="text-sm font-medium text-[#252641] mb-1">{relatedCourse.title}</h5>
                            <div className="flex items-center space-x-1 mb-1">
                              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                              <span className="text-xs text-[#626381]">{relatedCourse.rating}</span>
                            </div>
                            <div className="text-sm font-bold text-[#252641]">{relatedCourse.price}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
