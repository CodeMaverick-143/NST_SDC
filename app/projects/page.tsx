import ProjectCard from "@/components/project-card"

// Sample project data - in a real app, this would come from an API or database
const projects = [
  {
    id: 1,
    title: "Club Website",
    description: "The official website for NST Software Development Club built with Next.js and Tailwind CSS.",
    techStack: ["React", "Next.js", "Tailwind CSS"],
    githubUrl: "https://github.com/nst-sdc/website",
    demoUrl: "#",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    title: "Student Portal",
    description: "A comprehensive portal for students to manage courses, assignments, and grades.",
    techStack: ["React", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/nst-sdc/student-portal",
    demoUrl: "#",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    title: "Event Management System",
    description: "A platform to organize and manage club events, workshops, and hackathons.",
    techStack: ["Vue.js", "Firebase", "Tailwind CSS"],
    githubUrl: "https://github.com/nst-sdc/event-system",
    demoUrl: "#",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    title: "Attendance Tracker",
    description: "An app to track attendance for club meetings and events using QR codes.",
    techStack: ["React Native", "Express", "PostgreSQL"],
    githubUrl: "https://github.com/nst-sdc/attendance-tracker",
    demoUrl: "#",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 5,
    title: "Learning Resources Hub",
    description: "A collection of curated learning resources for various programming languages and technologies.",
    techStack: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/nst-sdc/learning-hub",
    demoUrl: "#",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 6,
    title: "Club Chat App",
    description: "A real-time chat application for club members to communicate and collaborate.",
    techStack: ["React", "Socket.io", "Express"],
    githubUrl: "https://github.com/nst-sdc/chat-app",
    demoUrl: "#",
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function ProjectsPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-2">Our Projects</h1>
      <p className="text-muted-foreground mb-8">Explore the projects built by our club members</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}
