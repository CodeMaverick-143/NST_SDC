"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Github, Linkedin, Instagram, MessageSquare } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function ContactPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    // In a real app, you would send this data to a form handling service
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      })
      setFormData({ name: "", email: "", message: "" })
      setIsSubmitting(false)
    }, 1500)
  }

  return (
    <div className="container mx-auto py-16 px-4">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center px-3 py-1 mb-3 text-sm font-medium rounded-full bg-primary/10 text-primary">
          Get In Touch
        </div>
        <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Have questions or want to join our club? We'd love to hear from you!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Contact Form */}
        <div className="bg-card p-8 rounded-xl shadow-md border border-border/50">
          <div className="flex items-center mb-6">
            <div className="p-3 rounded-full bg-primary/10 mr-4">
              <MessageSquare className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl font-bold">Send a Message</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="rounded-md"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                className="rounded-md"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
                rows={6}
                className="rounded-md"
                required
              />
            </div>

            <Button type="submit" className="w-full rounded-full" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="bg-muted rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-8">Connect With Us</h2>

          <div className="space-y-8">
            <div className="flex items-start">
              <div className="p-3 rounded-full bg-primary/10 mr-4">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-lg">Email</h3>
                <p className="text-muted-foreground">support@nstsdc.org</p>
                <p className="text-sm text-muted-foreground mt-1">We'll respond within 24-48 hours</p>
              </div>
            </div>

            <div>
              <h3 className="font-medium text-lg mb-3">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/nst-sdc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-card rounded-full hover:bg-primary/10 transition-colors"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/company/nst-sdc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-card rounded-full hover:bg-primary/10 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a
                  href="https://instagram.com/nst_sdc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-card rounded-full hover:bg-primary/10 transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-medium text-lg mb-3">Club Meetings</h3>
              <p className="text-muted-foreground">
                We meet every Monday at 6:00 PM in the Tech Building, Room 101.
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                New members are always welcome to join our weekly sessions!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
