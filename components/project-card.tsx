import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"

interface ProjectProps {
  project: {
    id: number
    title: string
    description: string
    techStack: string[]
    githubUrl: string
    demoUrl?: string
    image: string
  }
}

export default function ProjectCard({ project }: ProjectProps) {
  return (
    <Card className="overflow-hidden flex flex-col h-full transition-all hover:shadow-lg border-border/50">
      <div className="relative h-48 w-full">
        <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
      </div>
      <CardHeader className="pb-2">
        <h3 className="text-xl font-bold">{project.title}</h3>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech, index) => (
            <Badge key={index} variant="secondary" className="rounded-full">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button asChild variant="outline" size="sm" className="rounded-full">
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
            <Github className="h-4 w-4 mr-2" />
            GitHub
          </a>
        </Button>
        {project.demoUrl && (
          <Button asChild size="sm" className="rounded-full">
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
              <ExternalLink className="h-4 w-4 mr-2" />
              Demo
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
