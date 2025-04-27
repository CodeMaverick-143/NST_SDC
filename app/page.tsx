import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Code, Users, Calendar, ArrowRight, Terminal, Database, Globe } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-28 px-4 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center justify-center px-3 py-1 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary">
            Software Development Club
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
            NST Software Development Club
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground italic">
            "Building with purpose, learning by doing."
          </p>
          <p className="max-w-2xl mx-auto text-lg mb-12 text-muted-foreground">
            We are a community of passionate developers, designers, and innovators working together to build impactful
            projects and develop valuable skills.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="rounded-full px-8">
              <Link href="/contact">Join Us</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8">
              <Link href="/projects">Explore Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center px-3 py-1 mb-3 text-sm font-medium rounded-full bg-secondary/10 text-secondary">
              What We Do
            </div>
            <h2 className="text-3xl font-bold">Explore Our Activities</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Projects */}
            <div className="bg-card rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow border border-border/50">
              <div className="mb-6 p-4 bg-primary/10 rounded-full w-fit">
                <Terminal className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Explore Projects</h3>
              <p className="text-muted-foreground mb-6">
                Discover our innovative projects built by club members using various technologies and frameworks.
              </p>
              <Link href="/projects" className="text-primary font-medium inline-flex items-center hover:underline">
                View Projects <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* Team */}
            <div className="bg-card rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow border border-border/50">
              <div className="mb-6 p-4 bg-secondary/10 rounded-full w-fit">
                <Users className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Meet the Team</h3>
              <p className="text-muted-foreground mb-6">
                Get to know our talented members who make up our diverse and skilled development community.
              </p>
              <Link href="/members" className="text-primary font-medium inline-flex items-center hover:underline">
                Meet Members <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* Events */}
            <div className="bg-card rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow border border-border/50">
              <div className="mb-6 p-4 bg-accent/10 rounded-full w-fit">
                <Calendar className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">View Events</h3>
              <p className="text-muted-foreground mb-6">
                Stay updated with our workshops, hackathons, and other exciting technical events.
              </p>
              <Link href="/events" className="text-primary font-medium inline-flex items-center hover:underline">
                See Events <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center px-3 py-1 mb-3 text-sm font-medium rounded-full bg-primary/10 text-primary">
              Technologies
            </div>
            <h2 className="text-3xl font-bold">What We Work With</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-card border border-border/50">
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-full bg-primary/10 mr-4">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Frontend</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                We build modern user interfaces using React, Next.js, Vue, and other cutting-edge frontend technologies.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-muted rounded text-xs font-medium">React</span>
                <span className="px-2 py-1 bg-muted rounded text-xs font-medium">Next.js</span>
                <span className="px-2 py-1 bg-muted rounded text-xs font-medium">TypeScript</span>
                <span className="px-2 py-1 bg-muted rounded text-xs font-medium">Tailwind CSS</span>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-card border border-border/50">
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-full bg-secondary/10 mr-4">
                  <Database className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold">Backend</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                We develop robust server-side applications with Node.js, Python, and various database technologies.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-muted rounded text-xs font-medium">Node.js</span>
                <span className="px-2 py-1 bg-muted rounded text-xs font-medium">Python</span>
                <span className="px-2 py-1 bg-muted rounded text-xs font-medium">MongoDB</span>
                <span className="px-2 py-1 bg-muted rounded text-xs font-medium">PostgreSQL</span>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-card border border-border/50">
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-full bg-accent/10 mr-4">
                  <Globe className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold">DevOps</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                We implement CI/CD pipelines and deploy applications using modern cloud infrastructure.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-muted rounded text-xs font-medium">Docker</span>
                <span className="px-2 py-1 bg-muted rounded text-xs font-medium">AWS</span>
                <span className="px-2 py-1 bg-muted rounded text-xs font-medium">GitHub Actions</span>
                <span className="px-2 py-1 bg-muted rounded text-xs font-medium">Vercel</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to Join Us?</h2>
            <p className="text-lg mb-8 text-muted-foreground">
              Whether you're a beginner or an experienced developer, we welcome everyone who is passionate about
              learning and building together. Join our community today!
            </p>
            <Button asChild size="lg" className="rounded-full px-8">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
