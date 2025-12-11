"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  link: string
}

export function ProjectCard({ title, description, technologies, link }: ProjectCardProps) {
  const isBikeProject = title.includes("E-Bike")
  const isEduProject = title.includes("Education")
  const isZomatoProject = title.includes("Zomato")

  return (
    <div className="h-full transition-all duration-300 hover:shadow-lg">
      <Card className="h-full bg-card/50 backdrop-blur border-border/50 hover:border-primary/30 overflow-hidden">
        {/* Project Image */}
        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 flex items-center justify-center">
          {isBikeProject && (
            <>
              <img
                src="/bike-project.png"
                alt="Bike Rental System Project"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 hidden"
                onLoad={(e) => {
                  e.currentTarget.classList.remove('hidden');
                  e.currentTarget.previousElementSibling?.classList.add('hidden');
                }}
                onError={(e) => {
                  // Try jpeg if png fails
                  const img = e.currentTarget;
                  img.src = '/bike-project.jpeg';
                }}
              />
              <div className="text-center">
                <div className="text-4xl mb-2">🚲</div>
                <p className="text-sm text-muted-foreground">Bike Project</p>
              </div>
            </>
          )}
          {isEduProject && (
            <>
              <img
                src="/education-project.png"
                alt="Education Discovery Platform"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 hidden"
                onLoad={(e) => {
                  e.currentTarget.classList.remove('hidden');
                  e.currentTarget.previousElementSibling?.classList.add('hidden');
                }}
                onError={(e) => {
                  const img = e.currentTarget;
                  img.src = '/education-project.jpeg';
                }}
              />
              <div className="text-center">
                <div className="text-4xl mb-2">🎓</div>
                <p className="text-sm text-muted-foreground">Education Project</p>
              </div>
            </>
          )}
          {isZomatoProject && (
            <>
              <img
                src="/zomato-project.png"
                alt="Zomato Restaurant Insights"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 hidden"
                onLoad={(e) => {
                  e.currentTarget.classList.remove('hidden');
                  e.currentTarget.previousElementSibling?.classList.add('hidden');
                }}
                onError={(e) => {
                  const img = e.currentTarget;
                  img.src = '/zomato-project.jpeg';
                }}
              />
              <div className="text-center">
                <div className="text-4xl mb-2">🍽️</div>
                <p className="text-sm text-muted-foreground">Zomato Project</p>
              </div>
            </>
          )}
        </div>

        <CardHeader>
          <CardTitle className="text-xl hover:text-primary transition-colors duration-300">
            {title}
          </CardTitle>
          <CardDescription>
            {description}
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs bg-secondary/80 text-secondary-foreground rounded-full border border-border/50"
              >
                {tech}
              </span>
            ))}
          </div>

          <Button
            asChild
            variant="outline"
            size="sm"
            className="border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
          >
            <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <span>View Project</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
