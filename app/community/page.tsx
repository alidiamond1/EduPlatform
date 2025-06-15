"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { MessageSquare, Users, Search, Plus, Clock, Eye, ThumbsUp, Award, Star } from "lucide-react"

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState("discussions")

  const discussions = [
    {
      id: 1,
      title: "Best practices for React state management?",
      author: {
        name: "Alex Chen",
        avatar: "/images/student-success.jpg",
        level: "Intermediate",
      },
      category: "Web Development",
      replies: 23,
      views: 156,
      likes: 12,
      timeAgo: "2 hours ago",
      isAnswered: true,
      tags: ["React", "State Management", "JavaScript"],
    },
    {
      id: 2,
      title: "How to improve website loading speed?",
      author: {
        name: "Sarah Kim",
        avatar: "/images/hero-woman-learning.jpg",
        level: "Beginner",
      },
      category: "Web Development",
      replies: 18,
      views: 89,
      likes: 8,
      timeAgo: "4 hours ago",
      isAnswered: false,
      tags: ["Performance", "Optimization", "Web"],
    },
    {
      id: 3,
      title: "Digital marketing strategy for small businesses",
      author: {
        name: "Mike Johnson",
        avatar: "/images/instructor-mike.jpg",
        level: "Advanced",
      },
      category: "Marketing",
      replies: 31,
      views: 234,
      likes: 19,
      timeAgo: "6 hours ago",
      isAnswered: true,
      tags: ["Marketing", "Strategy", "Business"],
    },
  ]

  const studyGroups = [
    {
      id: 1,
      name: "React Developers Circle",
      description: "Weekly discussions about React best practices and new features",
      members: 1247,
      category: "Web Development",
      image: "/images/course-web-dev.jpg",
      isJoined: true,
      nextMeeting: "Tomorrow 7:00 PM",
    },
    {
      id: 2,
      name: "UI/UX Design Critique",
      description: "Share your designs and get feedback from fellow designers",
      members: 892,
      category: "Design",
      image: "/images/course-design.jpg",
      isJoined: false,
      nextMeeting: "Friday 6:00 PM",
    },
    {
      id: 3,
      name: "Digital Marketing Masterminds",
      description: "Discuss strategies, share case studies, and network with marketers",
      members: 634,
      category: "Marketing",
      image: "/images/course-marketing.jpg",
      isJoined: true,
      nextMeeting: "Sunday 3:00 PM",
    },
  ]

  const topContributors = [
    {
      name: "Emma Davis",
      avatar: "/images/instructor-emma.jpg",
      points: 2847,
      badge: "Expert Helper",
      specialties: ["UI/UX", "Design"],
    },
    {
      name: "John Smith",
      avatar: "/images/student-success.jpg",
      points: 2156,
      badge: "Code Mentor",
      specialties: ["JavaScript", "React"],
    },
    {
      name: "Lisa Wang",
      avatar: "/images/hero-woman-learning.jpg",
      points: 1923,
      badge: "Marketing Guru",
      specialties: ["SEO", "Content"],
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-[#252641] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Learning Community</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect, learn, and grow together with fellow students and experts
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-[#252641] mb-2">25K+</div>
              <div className="text-[#626381]">Active Members</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#252641] mb-2">1.2K+</div>
              <div className="text-[#626381]">Discussions</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#252641] mb-2">150+</div>
              <div className="text-[#626381]">Study Groups</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#252641] mb-2">95%</div>
              <div className="text-[#626381]">Questions Answered</div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="discussions">Discussions</TabsTrigger>
            <TabsTrigger value="study-groups">Study Groups</TabsTrigger>
            <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
          </TabsList>

          <TabsContent value="discussions">
            <div className="grid lg:grid-cols-4 gap-6">
              <div className="lg:col-span-3">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-[#252641]">Recent Discussions</h2>
                  <Button className="bg-[#00c2ff] hover:bg-[#1ea4ce] text-white">
                    <Plus className="w-4 h-4 mr-2" />
                    New Discussion
                  </Button>
                </div>

                <div className="mb-6">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input placeholder="Search discussions..." className="pl-10" />
                  </div>
                </div>

                <div className="space-y-4">
                  {discussions.map((discussion) => (
                    <Card key={discussion.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <Avatar>
                            <AvatarImage src={discussion.author.avatar || "/placeholder.svg"} />
                            <AvatarFallback>
                              {discussion.author.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <Badge className="bg-[#00c2ff] text-white">{discussion.category}</Badge>
                              {discussion.isAnswered && <Badge className="bg-[#33efa0] text-white">Answered</Badge>}
                              <Badge variant="outline">{discussion.author.level}</Badge>
                            </div>
                            <h3 className="text-lg font-semibold text-[#252641] mb-2 hover:text-[#00c2ff] cursor-pointer">
                              {discussion.title}
                            </h3>
                            <div className="flex items-center space-x-4 text-sm text-[#626381] mb-3">
                              <span>by {discussion.author.name}</span>
                              <span className="flex items-center space-x-1">
                                <Clock className="w-4 h-4" />
                                <span>{discussion.timeAgo}</span>
                              </span>
                            </div>
                            <div className="flex flex-wrap gap-2 mb-4">
                              {discussion.tags.map((tag, index) => (
                                <Badge key={index} variant="secondary" className="text-xs">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                            <div className="flex items-center space-x-6 text-sm text-[#626381]">
                              <div className="flex items-center space-x-1">
                                <MessageSquare className="w-4 h-4" />
                                <span>{discussion.replies} replies</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Eye className="w-4 h-4" />
                                <span>{discussion.views} views</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <ThumbsUp className="w-4 h-4" />
                                <span>{discussion.likes} likes</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-[#252641]">Popular Categories</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { name: "Web Development", count: 342 },
                        { name: "Digital Marketing", count: 189 },
                        { name: "UI/UX Design", count: 156 },
                        { name: "Data Science", count: 98 },
                        { name: "Mobile Development", count: 76 },
                      ].map((category, index) => (
                        <div key={index} className="flex justify-between items-center">
                          <span className="text-[#252641]">{category.name}</span>
                          <Badge variant="secondary">{category.count}</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-[#252641]">Top Contributors</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {topContributors.slice(0, 3).map((contributor, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <Avatar>
                            <AvatarImage src={contributor.avatar || "/placeholder.svg"} />
                            <AvatarFallback>
                              {contributor.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <h4 className="font-medium text-[#252641]">{contributor.name}</h4>
                            <p className="text-xs text-[#626381]">{contributor.points} points</p>
                          </div>
                          <Badge className="bg-[#33efa0] text-white text-xs">{contributor.badge}</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="study-groups">
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-[#252641]">Study Groups</h2>
                <Button className="bg-[#00c2ff] hover:bg-[#1ea4ce] text-white">
                  <Plus className="w-4 h-4 mr-2" />
                  Create Group
                </Button>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {studyGroups.map((group) => (
                  <Card key={group.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <img
                          src={group.image || "/placeholder.svg"}
                          alt={group.name}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <h3 className="font-bold text-[#252641] mb-1">{group.name}</h3>
                          <Badge className="bg-[#00c2ff] text-white text-xs">{group.category}</Badge>
                        </div>
                      </div>

                      <p className="text-[#626381] mb-4 text-sm">{group.description}</p>

                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-1 text-sm text-[#626381]">
                          <Users className="w-4 h-4" />
                          <span>{group.members.toLocaleString()} members</span>
                        </div>
                        <div className="text-sm text-[#626381]">Next: {group.nextMeeting}</div>
                      </div>

                      <Button
                        className={`w-full ${
                          group.isJoined
                            ? "bg-gray-200 text-[#626381] hover:bg-gray-300"
                            : "bg-[#00c2ff] hover:bg-[#1ea4ce] text-white"
                        }`}
                      >
                        {group.isJoined ? "Joined" : "Join Group"}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="leaderboard">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-[#252641]">Community Leaderboard</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-[#252641]">Top Contributors This Month</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {topContributors.map((contributor, index) => (
                        <div key={index} className="flex items-center space-x-4">
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                              index === 0
                                ? "bg-yellow-500"
                                : index === 1
                                  ? "bg-gray-400"
                                  : index === 2
                                    ? "bg-orange-500"
                                    : "bg-[#626381]"
                            }`}
                          >
                            {index + 1}
                          </div>
                          <Avatar>
                            <AvatarImage src={contributor.avatar || "/placeholder.svg"} />
                            <AvatarFallback>
                              {contributor.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <h4 className="font-medium text-[#252641]">{contributor.name}</h4>
                            <div className="flex items-center space-x-2">
                              <Badge className="bg-[#33efa0] text-white text-xs">{contributor.badge}</Badge>
                              <div className="flex space-x-1">
                                {contributor.specialties.map((specialty, i) => (
                                  <Badge key={i} variant="secondary" className="text-xs">
                                    {specialty}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-[#252641]">{contributor.points.toLocaleString()}</div>
                            <div className="text-xs text-[#626381]">points</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-[#252641]">Your Community Stats</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-[#252641] mb-2">1,247</div>
                        <div className="text-[#626381]">Your Rank</div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-bold text-[#252641]">23</div>
                          <div className="text-sm text-[#626381]">Questions Asked</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-[#252641]">45</div>
                          <div className="text-sm text-[#626381]">Answers Given</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-[#252641]">156</div>
                          <div className="text-sm text-[#626381]">Likes Received</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-[#252641]">3</div>
                          <div className="text-sm text-[#626381]">Groups Joined</div>
                        </div>
                      </div>

                      <div className="pt-4 border-t">
                        <h4 className="font-medium text-[#252641] mb-3">Recent Badges</h4>
                        <div className="flex space-x-2">
                          <div className="w-10 h-10 bg-[#33efa0] rounded-full flex items-center justify-center">
                            <Award className="w-5 h-5 text-white" />
                          </div>
                          <div className="w-10 h-10 bg-[#00c2ff] rounded-full flex items-center justify-center">
                            <Star className="w-5 h-5 text-white" />
                          </div>
                          <div className="w-10 h-10 bg-[#49bbbd] rounded-full flex items-center justify-center">
                            <Users className="w-5 h-5 text-white" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
