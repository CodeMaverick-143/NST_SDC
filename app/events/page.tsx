import EventCard from "@/components/event-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Sample event data - in a real app, this would come from an API or database
const upcomingEvents = [
  {
    id: 1,
    title: "Web Development Workshop",
    date: "June 15, 2025",
    description: "Learn the fundamentals of web development with HTML, CSS, and JavaScript. Perfect for beginners!",
    location: "Tech Building, Room 101",
    registerLink: "#",
    image: "/placeholder.svg?height=200&width=350",
  },
  {
    id: 2,
    title: "Summer Hackathon",
    date: "July 10-12, 2025",
    description: "A 48-hour hackathon where teams compete to build innovative solutions to real-world problems.",
    location: "Innovation Center",
    registerLink: "#",
    image: "/placeholder.svg?height=200&width=350",
  },
  {
    id: 3,
    title: "React Deep Dive",
    date: "August 5, 2025",
    description: "An advanced workshop on React hooks, context API, and performance optimization techniques.",
    location: "Online (Zoom)",
    registerLink: "#",
    image: "/placeholder.svg?height=200&width=350",
  },
]

const pastEvents = [
  {
    id: 4,
    title: "Introduction to Git & GitHub",
    date: "April 26, 2025",
    description: "A beginner-friendly workshop on version control using Git and collaboration with GitHub.",
    location: "SOE 4th floor Lab2",
    image: "/placeholder.svg?height=200&width=350",
  },
  {
    id: 5,
    title: "Spring Code Jam",
    date: "April 8, 2025",
    description: "A one-day coding competition where participants solved algorithmic challenges.",
    location: "Computer Science Building",
    image: "/placeholder.svg?height=200&width=350",
  },
  {
    id: 6,
    title: "Tech Industry Panel",
    date: "March 15, 2025",
    description: "A panel discussion with industry professionals sharing insights about careers in tech.",
    location: "Student Center Auditorium",
    image: "/placeholder.svg?height=200&width=350",
  },
  {
    id: 7,
    title: "Mobile App Development Workshop",
    date: "February 22, 2025",
    description: "An introduction to building mobile applications using React Native.",
    location: "Tech Building, Room 101",
    image: "/placeholder.svg?height=200&width=350",
  },
]

export default function EventsPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-2">Events</h1>
      <p className="text-muted-foreground mb-8">
        Stay updated with our workshops, hackathons, and other exciting events
      </p>

      <Tabs defaultValue="upcoming" className="mb-12">
        <TabsList className="mb-8">
          <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
          <TabsTrigger value="past">Past Events</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} isUpcoming={true} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="past">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastEvents.map((event) => (
              <EventCard key={event.id} event={event} isUpcoming={false} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
