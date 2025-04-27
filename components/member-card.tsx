import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Github, Linkedin } from "lucide-react"

interface MemberProps {
  member: {
    id: number
    name: string
    role: string
    year: string
    image: string
    linkedinUrl: string
    githubUrl: string
  }
}

export default function MemberCard({ member }: MemberProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg border-border/50 group">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={member.image || "/placeholder.svg"}
          alt={member.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <CardContent className="pt-4">
        <h3 className="text-lg font-bold">{member.name}</h3>
        <p className="text-primary font-medium">{member.role}</p>
        <p className="text-sm text-muted-foreground">{member.year}</p>
      </CardContent>
      <CardFooter className="flex justify-start gap-3">
        <a
          href={member.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-muted hover:bg-primary/10 transition-colors"
          aria-label={`${member.name}'s GitHub`}
        >
          <Github className="h-4 w-4" />
        </a>
        <a
          href={member.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-muted hover:bg-primary/10 transition-colors"
          aria-label={`${member.name}'s LinkedIn`}
        >
          <Linkedin className="h-4 w-4" />
        </a>
      </CardFooter>
    </Card>
  )
}
