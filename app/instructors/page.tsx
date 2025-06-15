import { Button } from "@/components/ui/button"
import { InstructorCard } from "@/components/instructor-card"

export default function InstructorsPage() {
  const instructors = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "Senior Full Stack Developer",
      avatar: "/images/instructor-sarah.jpg",
      rating: 4.9,
      students: 45000,
      courses: 12,
      specialties: ["React", "Node.js", "JavaScript"],
      location: "San Francisco, CA",
      bio: "Sarah is a Senior Full Stack Developer with over 8 years of experience building scalable web applications. She's passionate about teaching modern web development.",
      social: {
        linkedin: "#",
        twitter: "#",
        website: "#",
      },
    },
    {
      id: 2,
      name: "Mike Chen",
      title: "Digital Marketing Expert",
      avatar: "/images/instructor-mike.jpg",
      rating: 4.8,
      students: 32000,
      courses: 8,
      specialties: ["SEO", "Social Media", "PPC"],
      location: "New York, NY",
      bio: "Mike has helped hundreds of businesses grow their online presence through strategic digital marketing campaigns and data-driven approaches.",
      social: {
        linkedin: "#",
        twitter: "#",
        website: "#",
      },
    },
    {
      id: 3,
      name: "Emma Davis",
      title: "UI/UX Design Lead",
      avatar: "/images/instructor-emma.jpg",
      rating: 4.9,
      students: 28000,
      courses: 10,
      specialties: ["Figma", "User Research", "Prototyping"],
      location: "London, UK",
      bio: "Emma is a design leader with 10+ years of experience creating user-centered digital experiences for Fortune 500 companies.",
      social: {
        linkedin: "#",
        twitter: "#",
        website: "#",
      },
    },
    {
      id: 4,
      name: "Dr. Alex Kumar",
      title: "Data Science Professor",
      avatar: "/images/dashboard-analytics.jpg",
      rating: 4.7,
      students: 22000,
      courses: 6,
      specialties: ["Python", "Machine Learning", "Statistics"],
      location: "Boston, MA",
      bio: "Dr. Kumar is a professor of Data Science with extensive research experience in machine learning and artificial intelligence applications.",
      social: {
        linkedin: "#",
        twitter: "#",
        website: "#",
      },
    },
    {
      id: 5,
      name: "James Wilson",
      title: "Mobile App Developer",
      avatar: "/images/online-learning.jpg",
      rating: 4.6,
      students: 18000,
      courses: 7,
      specialties: ["React Native", "Flutter", "iOS"],
      location: "Austin, TX",
      bio: "James specializes in cross-platform mobile development and has published over 20 apps on both iOS and Android app stores.",
      social: {
        linkedin: "#",
        twitter: "#",
        website: "#",
      },
    },
    {
      id: 6,
      name: "Lisa Rodriguez",
      title: "Creative Director",
      avatar: "/images/course-design.jpg",
      rating: 4.8,
      students: 25000,
      courses: 9,
      specialties: ["Adobe Creative Suite", "Branding", "Typography"],
      location: "Los Angeles, CA",
      bio: "Lisa is an award-winning creative director who has worked with major brands to create compelling visual identities and marketing campaigns.",
      social: {
        linkedin: "#",
        twitter: "#",
        website: "#",
      },
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-[#252641] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Meet Our Expert Instructors</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Learn from industry professionals with years of real-world experience
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-[#252641] mb-2">200+</div>
              <div className="text-[#626381]">Expert Instructors</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#252641] mb-2">500K+</div>
              <div className="text-[#626381]">Students Taught</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#252641] mb-2">1000+</div>
              <div className="text-[#626381]">Courses Created</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#252641] mb-2">4.8</div>
              <div className="text-[#626381]">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Instructors Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {instructors.map((instructor) => (
              <InstructorCard key={instructor.id} instructor={instructor} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#252641]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Want to Become an Instructor?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Share your expertise with thousands of students worldwide and build a rewarding teaching career.
          </p>
          <Button size="lg" className="bg-[#00c2ff] hover:bg-[#1ea4ce] text-white">
            Apply to Teach
          </Button>
        </div>
      </section>
    </div>
  )
}
