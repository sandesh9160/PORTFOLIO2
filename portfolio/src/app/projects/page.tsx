"use client"

import { motion } from "framer-motion"
import { ExternalLink, Users, Target, CheckCircle, TrendingUp } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const projects = [
  {
    id: "ais-ebike",
    title: "AIS E-Bike Rental System",
    client: "Personal Project",
    background: "A personal exploration into e-mobility solutions, focusing on sustainable transportation and modern web application development.",
    problem: "Wanted to explore building a comprehensive bike rental system with modern web technologies, payment integration, and user management features.",
    solution: "Developed a complete full-stack web application using Django and Django REST Framework for the backend, MySQL for data management, and responsive Bootstrap UI for the frontend. Integrated payment gateways and real-time location tracking.",
    role: "Full-Stack Developer (Personal Project)",
    features: [
      "User registration and authentication system",
      "Real-time bike availability and booking system",
      "Integrated payment processing (Razorpay)",
      "Admin dashboard for fleet management",
      "Maintenance scheduling and tracking",
      "Location-based bike search",
      "Mobile-responsive design",
      "Email notifications for bookings"
    ],
    technologies: ["Python", "Django", "DRF", "MySQL", "Bootstrap", "JavaScript", "AWS EC2", "Razorpay API"],
    impact: [
      "Gained deep understanding of e-commerce platforms",
      "Improved skills in payment gateway integration",
      "Enhanced knowledge of real-time systems",
      "Built scalable architecture for future projects"
    ],
    link: "#"
  },
  {
    id: "zomato-insights",
    title: "Zomato Restaurant Insights (2010–2018)",
    client: "Data Analytics Project",
    background: "A comprehensive data analysis project exploring restaurant trends and consumer behavior using official Zomato data spanning 8 years across 43 cities in India.",
    problem: "Analyze 8.6K+ restaurants to uncover insights about ratings, cuisines, delivery trends, table booking preferences, and voting patterns to understand the Indian food delivery market evolution.",
    solution: "Developed an interactive dashboard using Python, Pandas, and Django for data processing and visualization. Implemented Power BI for advanced analytics with DAX calculations and optimized report performance.",
    role: "Data Analyst & Full-Stack Developer",
    features: [
      "Interactive restaurant analysis dashboard",
      "Multi-city trend analysis (43 cities)",
      "Rating distribution and voting pattern insights",
      "Cuisine popularity and regional preferences",
      "Delivery vs dine-in trend analysis",
      "Table booking adoption metrics",
      "Time-series analysis (2010-2018)",
      "Advanced filtering and drill-down capabilities"
    ],
    technologies: ["Python", "Pandas", "Django", "MySQL", "MS Excel", "Data Modeling", "Data Visualization", "Power BI"],
    impact: [
      "Analyzed 8.6K+ restaurants across 43 cities",
      "Identified key market trends and consumer preferences",
      "Built reusable data processing pipelines",
      "Created interactive visualizations for complex datasets",
      "Demonstrated proficiency in business intelligence tools",
      "Developed data storytelling and presentation skills"
    ],
    link: "#"
  },
  {
    id: "education-platform",
    title: "Education Discovery Platform",
    client: "Personal Project - Under Development",
    background: "An ongoing personal project exploring EdTech solutions to help parents make informed decisions about their children's education.",
    problem: "Currently developing a comprehensive platform that will help parents find and compare schools with detailed reviews, comparison features, and personalized recommendations.",
    solution: "Building a modern web application using cutting-edge technologies with school listings, user reviews, advanced search filters, and comparison tools.",
    role: "Full-Stack Developer (In Progress)",
    features: [
      "Comprehensive school database with detailed profiles",
      "User review and rating system",
      "Advanced search with filters (curriculum, fees, location)",
      "School comparison tool",
      "Parent dashboard for saved schools",
      "Interactive maps for school locations",
      "Personalized recommendations",
      "Mobile-first responsive design"
    ],
    technologies: ["Python", "Django", "PostgreSQL", "React", "AWS", "Google Maps API", "Redis"],
    impact: [
      "Learning advanced EdTech development techniques",
      "Exploring recommendation algorithms",
      "Building complex user interaction systems",
      "Developing scalable database architectures"
    ],
    link: "#"
  }
]

export default function Projects() {
  return (
    <div className="min-h-screen py-16 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-purple-500 to-blue-600 bg-clip-text text-transparent">
            My Projects
          </h1>
          <p className="text-xl bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent font-semibold max-w-3xl mx-auto">
            Showcasing personal projects and work-in-progress through full-stack development
          </p>
        </motion.div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              id={project.id}
              className="max-w-6xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl md:text-3xl mb-2">{project.title}</CardTitle>
                      <p className="text-muted-foreground text-lg">{project.client}</p>
                    </div>
                    <Badge variant="secondary" className="w-fit">
                      {project.role}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="p-8 space-y-8">
                  {/* Background */}
                  <div>
                    <h3 className="text-xl font-semibold mb-3 flex items-center gap-2 text-foreground">
                      <Users className="h-5 w-5 text-primary" />
                      Client Background
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{project.background}</p>
                  </div>

                  {/* Problem */}
                  <div>
                    <h3 className="text-xl font-semibold mb-3 flex items-center gap-2 text-foreground">
                      <Target className="h-5 w-5 text-primary" />
                      Business Problem
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{project.problem}</p>
                  </div>

                  {/* Solution */}
                  <div>
                    <h3 className="text-xl font-semibold mb-3 flex items-center gap-2 text-foreground">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      Solution Provided
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
                  </div>

                  {/* Features */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-foreground">Key Features</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {project.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-foreground">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Impact */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-foreground">
                      <TrendingUp className="h-5 w-5 text-primary" />
                      Business Impact
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {project.impact.map((impact, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <TrendingUp className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{impact}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="pt-6 border-t">
                    <Button asChild>
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        View Live Demo <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">Ready to Start Your Project?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Let's discuss how I can help bring your ideas to life with scalable, high-quality web solutions.
          </p>
          <Button asChild size="lg">
            <a href="/contact" className="flex items-center gap-2">
              Get In Touch
            </a>
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
