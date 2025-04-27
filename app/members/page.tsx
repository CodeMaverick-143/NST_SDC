import MemberCard from "@/components/member-card"
const members = [
  {
    id: 1,
    name: "Arohi Jadav",
    role: "Club President",
    year: "2nd Year",
    image: "/placeholder.svg?height=200&width=200",
    linkedinUrl: "https://linkedin.com/in/alexjohnson",
    githubUrl: "https://github.com/alexjohnson",
  },
  {
    id: 2,
    name: "Daksh Saini",
    role: "Vice-President",
    year: "2nd Year",
    image: "/placeholder.svg?height=200&width=200",
    linkedinUrl: "https://linkedin.com/in/samanthalee",
    githubUrl: "https://github.com/samanthalee",
  },
  {
    id: 3,
    name: "Ayush Pandey",
    role: "Secretary",
    year: "2nd Year",
    image: "/placeholder.svg?height=200&width=200",
    linkedinUrl: "https://linkedin.com/in/michaelchen",
    githubUrl: "https://github.com/michaelchen",
  },
  {
    id: 4,
    name: "Vipul Yadav",
    role: "Event Lead",
    year: "2nd Year",
    image: "/placeholder.svg?height=200&width=200",
    linkedinUrl: "https://linkedin.com/in/emilyrodriguez",
    githubUrl: "https://github.com/emilyrodriguez",
  },
  {
    id: 5,
    name: "Aditya Prakash",
    role: "Sessions Lead",
    year: "2nd Year",
    image: "/placeholder.svg?height=200&width=200",
    linkedinUrl: "https://linkedin.com/in/davidkim",
    githubUrl: "https://github.com/davidkim",
  },
  {
    id: 6,
    name: "Birajit Saikia",
    role: "Project Lead",
    year: "2nd Year",
    image: "/placeholder.svg?height=200&width=200",
    linkedinUrl: "https://linkedin.com/in/jessicawang",
    githubUrl: "https://github.com/jessicawang",
  },
  {
    id: 7,
    name: "Arpit Sarang",
    role: "Marketing Lead",
    year: "2nd Year",
    image: "/placeholder.svg?height=200&width=200",
    linkedinUrl: "https://linkedin.com/in/ryanpatel",
    githubUrl: "https://github.com/ryanpatel",
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
