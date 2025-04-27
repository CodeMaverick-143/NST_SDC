import MemberCard from "@/components/member-card"

// Sample member data - in a real app, this would come from an API or database
const members = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Club President",
    year: "Senior",
    image: "/placeholder.svg?height=200&width=200",
    linkedinUrl: "https://linkedin.com/in/alexjohnson",
    githubUrl: "https://github.com/alexjohnson",
  },
  {
    id: 2,
    name: "Samantha Lee",
    role: "Vice President",
    year: "Junior",
    image: "/placeholder.svg?height=200&width=200",
    linkedinUrl: "https://linkedin.com/in/samanthalee",
    githubUrl: "https://github.com/samanthalee",
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Technical Lead",
    year: "Senior",
    image: "/placeholder.svg?height=200&width=200",
    linkedinUrl: "https://linkedin.com/in/michaelchen",
    githubUrl: "https://github.com/michaelchen",
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    role: "Design Lead",
    year: "Junior",
    image: "/placeholder.svg?height=200&width=200",
    linkedinUrl: "https://linkedin.com/in/emilyrodriguez",
    githubUrl: "https://github.com/emilyrodriguez",
  },
  {
    id: 5,
    name: "David Kim",
    role: "Backend Developer",
    year: "Sophomore",
    image: "/placeholder.svg?height=200&width=200",
    linkedinUrl: "https://linkedin.com/in/davidkim",
    githubUrl: "https://github.com/davidkim",
  },
  {
    id: 6,
    name: "Jessica Wang",
    role: "Frontend Developer",
    year: "Sophomore",
    image: "/placeholder.svg?height=200&width=200",
    linkedinUrl: "https://linkedin.com/in/jessicawang",
    githubUrl: "https://github.com/jessicawang",
  },
  {
    id: 7,
    name: "Ryan Patel",
    role: "Mobile Developer",
    year: "Junior",
    image: "/placeholder.svg?height=200&width=200",
    linkedinUrl: "https://linkedin.com/in/ryanpatel",
    githubUrl: "https://github.com/ryanpatel",
  },
  {
    id: 8,
    name: "Olivia Martinez",
    role: "Content Creator",
    year: "Freshman",
    image: "/placeholder.svg?height=200&width=200",
    linkedinUrl: "https://linkedin.com/in/oliviamartinez",
    githubUrl: "https://github.com/oliviamartinez",
  },
]

export default function MembersPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-2">Our Team</h1>
      <p className="text-muted-foreground mb-8">Meet the talented members of our club</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {members.map((member) => (
          <MemberCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  )
}
