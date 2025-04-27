import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin } from "lucide-react"

interface EventProps {
  event: {
    id: number
    title: string
    date: string
    description: string
    location: string
    registerLink?: string
    image: string
  }
  isUpcoming: boolean
}

export default function EventCard({ event, isUpcoming }: EventProps) {
  return (
    <Card className="overflow-hidden flex flex-col h-full transition-all hover:shadow-lg border-border/50">
      <div className="relative h-48 w-full overflow-hidden">
        <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
        {isUpcoming && (
          <div className="absolute top-3 right-3">
            <span className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
              Upcoming
            </span>
          </div>
        )}
      </div>
      <CardHeader className="pb-2">
        <h3 className="text-xl font-bold">{event.title}</h3>
      </CardHeader>
      <CardContent className="flex-grow space-y-3">
        <div className="flex items-center text-sm text-muted-foreground">
          <Calendar className="h-4 w-4 mr-2 text-primary" />
          {event.date}
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 mr-2 text-primary" />
          {event.location}
        </div>
        <p className="text-muted-foreground">{event.description}</p>
      </CardContent>
      {isUpcoming && event.registerLink && (
        <CardFooter>
          <Button asChild className="w-full rounded-full">
            <a href={event.registerLink} target="_blank" rel="noopener noreferrer">
              Register Now
            </a>
          </Button>
        </CardFooter>
      )}
    </Card>
  )
}
