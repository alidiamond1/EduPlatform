"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BookOpen,
  Clock,
  Award,
  TrendingUp,
  PlayCircle,
  Calendar,
  Bell,
  Users,
  Target,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")

  const enrolledCourses = [
    {
      id: 1,
      title: "Complete Web Development Bootcamp",
      instructor: "Sarah Johnson",
      progress: 65,
      totalLessons: 120,
      completedLessons: 78,
      image: "/images/course-web-dev.jpg",
      nextLesson: "React State Management",
      timeSpent: "24 hours",
    },
    {
      id: 2,
      title: "Digital Marketing Mastery",
      instructor: "Mike Chen",
      progress: 40,
      totalLessons: 85,
      completedLessons: 34,
      image: "/images/course-marketing.jpg",
      nextLesson: "Social Media Strategy",
      timeSpent: "12 hours",
    },
    {
      id: 3,
      title: "UI/UX Design Fundamentals",
      instructor: "Emma Davis",
      progress: 85,
      totalLessons: 95,
      completedLessons: 81,
      image: "/images/course-design.jpg",
      nextLesson: "Final Project Review",
      timeSpent: "32 hours",
    },
  ]

  const achievements = [
    {
      title: "First Course Completed",
      description: "Completed your first course",
      icon: Award,
      earned: true,
      date: "Dec 15, 2024",
    },
    {
      title: "Week Streak",
      description: "Learned for 7 days in a row",
      icon: Target,
      earned: true,
      date: "Dec 10, 2024",
    },
    {
      title: "Quick Learner",
      description: "Completed 10 lessons in one day",
      icon: TrendingUp,
      earned: false,
      date: null,
    },
    {
      title: "Community Helper",
      description: "Helped 5 fellow students",
      icon: Users,
      earned: false,
      date: null,
    },
  ]

  const recentActivity = [
    {
      type: "lesson_completed",
      title: "Completed: React Components",
      course: "Web Development Bootcamp",
      time: "2 hours ago",
    },
    {
      type: "achievement",
      title: "Earned: Week Streak badge",
      course: null,
      time: "1 day ago",
    },
    {
      type: "course_started",
      title: "Started: Digital Marketing Mastery",
      course: "Digital Marketing Mastery",
      time: "3 days ago",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-[#252641]">Welcome back, John!</h1>
              <p className="text-[#626381] mt-2">Continue your learning journey</p>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Calendar className="w-4 h-4 mr-2" />
                Schedule
              </Button>
              <Button variant="outline" size="sm">
                <Bell className="w-4 h-4 mr-2" />
                Notifications
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="courses">My Courses</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid lg:grid-cols-4 gap-6 mb-8">
              {/* Stats Cards */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-[#626381] mb-1">Courses Enrolled</p>
                      <p className="text-2xl font-bold text-[#252641]">3</p>
                    </div>
                    <div className="w-12 h-12 bg-[#00c2ff] rounded-full flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-[#626381] mb-1">Hours Learned</p>
                      <p className="text-2xl font-bold text-[#252641]">68</p>
                    </div>
                    <div className="w-12 h-12 bg-[#49bbbd] rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-[#626381] mb-1">Certificates</p>
                      <p className="text-2xl font-bold text-[#252641]">1</p>
                    </div>
                    <div className="w-12 h-12 bg-[#33efa0] rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-[#626381] mb-1">Current Streak</p>
                      <p className="text-2xl font-bold text-[#252641]">7 days</p>
                    </div>
                    <div className="w-12 h-12 bg-[#ff6b6b] rounded-full flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {/* Continue Learning */}
              <div className="lg:col-span-2">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-[#252641]">Continue Learning</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {enrolledCourses.slice(0, 2).map((course) => (
                        <div key={course.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                          <img
                            src={course.image || "/placeholder.svg"}
                            alt={course.title}
                            className="w-20 h-14 object-cover rounded"
                          />
                          <div className="flex-1">
                            <h4 className="font-semibold text-[#252641] mb-1">{course.title}</h4>
                            <p className="text-sm text-[#626381] mb-2">by {course.instructor}</p>
                            <div className="flex items-center space-x-4">
                              <div className="flex-1">
                                <div className="flex justify-between text-sm mb-1">
                                  <span className="text-[#626381]">Progress</span>
                                  <span className="text-[#252641] font-medium">{course.progress}%</span>
                                </div>
                                <Progress value={course.progress} className="h-2" />
                              </div>
                            </div>
                          </div>
                          <Link href={`/courses/${course.id}`}>
                            <Button size="sm" className="bg-[#00c2ff] hover:bg-[#1ea4ce] text-white">
                              <PlayCircle className="w-4 h-4 mr-2" />
                              Continue
                            </Button>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Recent Achievements */}
              <div>
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-[#252641]">Recent Achievements</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {achievements
                        .filter((a) => a.earned)
                        .slice(0, 3)
                        .map((achievement, index) => (
                          <div key={index} className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-[#33efa0] rounded-full flex items-center justify-center">
                              <achievement.icon className="w-5 h-5 text-white" />
                            </div>
                            <div className="flex-1">
                              <h5 className="font-medium text-[#252641]">{achievement.title}</h5>
                              <p className="text-xs text-[#626381]">{achievement.date}</p>
                            </div>
                          </div>
                        ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="courses">
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-[#252641]">My Courses</h2>
                <Link href="/courses">
                  <Button className="bg-[#00c2ff] hover:bg-[#1ea4ce] text-white">Browse More Courses</Button>
                </Link>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {enrolledCourses.map((course) => (
                  <Card key={course.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-0">
                      <div className="relative">
                        <img
                          src={course.image || "/placeholder.svg"}
                          alt={course.title}
                          className="w-full h-40 object-cover rounded-t-lg"
                        />
                        <Badge className="absolute top-4 right-4 bg-[#00c2ff] text-white">
                          {course.progress}% Complete
                        </Badge>
                      </div>
                      <div className="p-6">
                        <h3 className="font-bold text-[#252641] mb-2">{course.title}</h3>
                        <p className="text-[#626381] mb-4">by {course.instructor}</p>

                        <div className="space-y-3 mb-4">
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span className="text-[#626381]">Progress</span>
                              <span className="text-[#252641] font-medium">{course.progress}%</span>
                            </div>
                            <Progress value={course.progress} className="h-2" />
                          </div>

                          <div className="flex justify-between text-sm">
                            <span className="text-[#626381]">Lessons</span>
                            <span className="text-[#252641]">
                              {course.completedLessons}/{course.totalLessons}
                            </span>
                          </div>

                          <div className="flex justify-between text-sm">
                            <span className="text-[#626381]">Time Spent</span>
                            <span className="text-[#252641]">{course.timeSpent}</span>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <p className="text-sm text-[#626381]">Next: {course.nextLesson}</p>
                          <Link href={`/courses/${course.id}`}>
                            <Button className="w-full bg-[#00c2ff] hover:bg-[#1ea4ce] text-white">
                              <PlayCircle className="w-4 h-4 mr-2" />
                              Continue Learning
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="achievements">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-[#252641]">Achievements</h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {achievements.map((achievement, index) => (
                  <Card
                    key={index}
                    className={`border-0 shadow-lg ${achievement.earned ? "bg-gradient-to-br from-[#33efa0]/10 to-[#00c2ff]/10" : "opacity-60"}`}
                  >
                    <CardContent className="p-6 text-center">
                      <div
                        className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                          achievement.earned ? "bg-[#33efa0]" : "bg-gray-300"
                        }`}
                      >
                        <achievement.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-bold text-[#252641] mb-2">{achievement.title}</h3>
                      <p className="text-[#626381] mb-4">{achievement.description}</p>
                      {achievement.earned ? (
                        <div className="flex items-center justify-center space-x-2 text-[#33efa0]">
                          <CheckCircle className="w-4 h-4" />
                          <span className="text-sm font-medium">Earned {achievement.date}</span>
                        </div>
                      ) : (
                        <Badge variant="outline" className="text-[#626381]">
                          Not Earned
                        </Badge>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="activity">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-[#252641]">Recent Activity</h2>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="space-y-6">
                    {recentActivity.map((activity, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            activity.type === "lesson_completed"
                              ? "bg-[#00c2ff]"
                              : activity.type === "achievement"
                                ? "bg-[#33efa0]"
                                : "bg-[#49bbbd]"
                          }`}
                        >
                          {activity.type === "lesson_completed" && <CheckCircle className="w-5 h-5 text-white" />}
                          {activity.type === "achievement" && <Award className="w-5 h-5 text-white" />}
                          {activity.type === "course_started" && <PlayCircle className="w-5 h-5 text-white" />}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-[#252641]">{activity.title}</h4>
                          {activity.course && <p className="text-sm text-[#626381]">{activity.course}</p>}
                          <p className="text-xs text-[#626381] mt-1">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
