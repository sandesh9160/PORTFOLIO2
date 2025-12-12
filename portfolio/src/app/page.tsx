"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Code, Database, Cloud, Sparkles, Zap, GraduationCap, BookOpen, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SkillBadge } from "@/components/skill-badge"
import { ProjectCard } from "@/components/project-card"
import { DMBanner } from "@/components/dm-banner"

const skills = {
  backend: ["Python", "Django", "DRF"],
  frontend: ["HTML", "CSS", "Bootstrap", "JavaScript"],
  database: ["MySQL", "SQLite"],
  cloud: ["AWS (EC2, S3, Route 53)"],
  tools: ["Git", "GitHub", "Postman", "SMTP"]
}

const featuredProjects = [
  {
    title: "AIS E-Bike Rental System",
    description: "A personal project exploring e-mobility solutions with bike inventory management, user bookings, and payment processing.",
    technologies: ["Django", "DRF", "MySQL", "Bootstrap", "AWS"],
    link: "/projects#ais-ebike"
  },
  {
    title: "Zomato Restaurant Insights",
    description: "Data analytics project analyzing 8.6K+ restaurants across 43 cities using official Zomato data from 2010-2018.",
    technologies: ["Python", "Pandas", "Django", "Power BI", "MySQL"],
    link: "/projects#zomato-insights"
  },
  {
    title: "Education Discovery Platform",
    description: "An EdTech platform currently under development, helping parents find quality schools through reviews and recommendations.",
    technologies: ["Python", "Django", "PostgreSQL", "React", "AWS"],
    link: "/projects#education-platform"
  }
]

export default function Home() {
  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="py-20 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto">
            {/* Profile Picture */}
            <div className="relative w-32 h-32 mx-auto mb-6">
              <img
                src="/profile.jpg"
                alt="Sandesh Kenchugundi - Profile Picture"
                className="w-full h-full rounded-full object-cover border-4 border-primary/30 shadow-lg hover:shadow-xl transition-shadow duration-300"
                onError={(e) => {
                  // Try different extensions if jpg fails
                  if (e.currentTarget.src.includes('.jpg')) {
                    e.currentTarget.src = '/profile.png';
                  } else if (e.currentTarget.src.includes('.png')) {
                    e.currentTarget.src = '/profile.jpeg';
                  }
                }}
              />
            </div>

            <div className="inline-block px-4 py-2 mb-6 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
              🚀 Available for freelance projects
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-500 to-blue-600 bg-clip-text text-transparent">
              Sandesh Kenchugundi
            </h1>
            <p className="text-xl md:text-2xl bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-8 font-semibold">
              Python Full Stack Developer
            </p>
            <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Passionate Python Full-Stack Developer based in Hyderabad, India. With expertise in Django, Django REST Framework, and MySQL, I specialize in crafting scalable web applications that deliver exceptional user experiences. My skills extend to responsive UI design, REST API development, and cloud deployment on AWS, ensuring robust and efficient solutions for businesses. As a freelancer, I'm dedicated to turning ideas into reality, providing end-to-end development services that drive results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 transition-colors">
                <Link href="/projects" className="flex items-center gap-2">
                  <span>View My Work</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
              >
                <Link href="/contact" className="flex items-center gap-2">
                  <span>Get In Touch</span>
                  <Sparkles className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 relative overflow-hidden bg-card/50 backdrop-blur-sm dark:bg-card/30">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
        <div className="container mx-auto px-4 relative">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Skills & Technologies
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for building modern, scalable web applications
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <div
                key={category}
                className="space-y-4 p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-colors"
              >
                <div className="flex items-center gap-2 mb-4">
                  {category === 'backend' && <Code className="h-6 w-6 text-blue-500" />}
                  {category === 'database' && <Database className="h-6 w-6 text-cyan-500" />}
                  {category === 'cloud' && <Cloud className="h-6 w-6 text-orange-500" />}
                  {category === 'frontend' && <div className="h-6 w-6 rounded bg-gradient-to-r from-orange-400 to-pink-400"></div>}
                  {category === 'tools' && <div className="h-6 w-6 rounded bg-gradient-to-r from-gray-600 to-gray-800"></div>}
                  <h3 className="text-lg font-semibold capitalize">{category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <SkillBadge key={skill} skill={skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 bg-white/30 dark:bg-slate-900/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Showcasing real client projects and their business impact
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Button asChild variant="outline" size="lg">
              <Link href="/projects" className="flex items-center gap-2">
                View All Projects <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* DM Collaboration Section */}
      <DMBanner />

      {/* Services & Skills Overview */}
      <section className="py-20 bg-gradient-to-br from-card/20 via-background to-muted/20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 border border-primary/30 rounded-full"></div>
          <div className="absolute top-40 right-20 w-24 h-24 border border-primary/20 rounded-lg rotate-45"></div>
          <div className="absolute bottom-20 left-1/4 w-20 h-20 border border-primary/40 rounded-full"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Code className="h-5 w-5 text-primary" />
              <span className="text-primary font-medium">What I Offer</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Professional Services & Skills
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto font-medium leading-relaxed">
              Expert Python development services with comprehensive expertise in modern web technologies and data analytics
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-center mb-12 text-foreground">🚀 Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div
                className="group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl group-hover:scale-105">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Zap className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-lg text-foreground">
                      Full-Stack Web Development
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-muted-foreground text-sm leading-relaxed">
                      Complete web applications using Django, React, and modern frameworks for scalable solutions
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                className="group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl group-hover:scale-105">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary/80 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Database className="h-8 w-8 text-secondary-foreground" />
                    </div>
                    <CardTitle className="text-lg text-foreground">
                      API Development
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-muted-foreground text-sm leading-relaxed">
                      RESTful APIs with Django REST Framework and comprehensive documentation
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                className="group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl group-hover:scale-105">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/80 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Cloud className="h-8 w-8 text-accent-foreground" />
                    </div>
                    <CardTitle className="text-lg text-foreground">
                      Database Design
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-muted-foreground text-sm leading-relaxed">
                      MySQL and PostgreSQL database architecture and performance optimization
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                className="group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl group-hover:scale-105">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-muted to-muted/80 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Code className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <CardTitle className="text-lg text-foreground">
                      Cloud Deployment
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-muted-foreground text-sm leading-relaxed">
                      AWS deployment with EC2, S3, and scalable cloud architecture solutions
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-center mb-12 text-foreground">💡 Key Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                      <Code className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-foreground">Backend Development</CardTitle>
                      <p className="text-sm text-muted-foreground">Server-side expertise</p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Python</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Django</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">DRF</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">FastAPI</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                      <Sparkles className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-foreground">Frontend Technologies</CardTitle>
                      <p className="text-sm text-muted-foreground">Client-side development</p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-secondary/20 text-secondary-foreground rounded-full text-sm font-medium">React</span>
                      <span className="px-3 py-1 bg-secondary/20 text-secondary-foreground rounded-full text-sm font-medium">JavaScript</span>
                      <span className="px-3 py-1 bg-secondary/20 text-secondary-foreground rounded-full text-sm font-medium">Tailwind</span>
                      <span className="px-3 py-1 bg-secondary/20 text-secondary-foreground rounded-full text-sm font-medium">Bootstrap</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Card className="border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center">
                      <Database className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-foreground">Database & Tools</CardTitle>
                      <p className="text-sm text-muted-foreground">Data & DevOps expertise</p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-accent/20 text-accent-foreground rounded-full text-sm font-medium">MySQL</span>
                      <span className="px-3 py-1 bg-accent/20 text-accent-foreground rounded-full text-sm font-medium">PostgreSQL</span>
                      <span className="px-3 py-1 bg-accent/20 text-accent-foreground rounded-full text-sm font-medium">AWS</span>
                      <span className="px-3 py-1 bg-accent/20 text-accent-foreground rounded-full text-sm font-medium">Docker</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Card className="border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                      <Zap className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-foreground">Data Analytics</CardTitle>
                      <p className="text-sm text-muted-foreground">Business intelligence</p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-muted/30 text-muted-foreground rounded-full text-sm font-medium">Python</span>
                      <span className="px-3 py-1 bg-muted/30 text-muted-foreground rounded-full text-sm font-medium">Pandas</span>
                      <span className="px-3 py-1 bg-muted/30 text-muted-foreground rounded-full text-sm font-medium">Power BI</span>
                      <span className="px-3 py-1 bg-muted/30 text-muted-foreground rounded-full text-sm font-medium">Tableau</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-primary/10 border border-primary/20 mb-8">
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
              <span className="text-primary font-medium">Ready to bring your ideas to life?</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                <Link href="/services" className="flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  View All Services
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 border-primary text-primary hover:bg-primary/5 hover:border-primary/80 transition-all duration-300">
                <Link href="/#skills" className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5" />
                  Explore Skills
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Preview Section */}
      <section className="py-20 bg-gradient-to-br from-secondary/10 via-background to-accent/10 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-24 h-24 border border-secondary/30 rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 border border-accent/30 rounded-lg rotate-45"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-secondary/20 border border-secondary/30 mb-6">
              <GraduationCap className="h-5 w-5 text-secondary-foreground" />
              <span className="text-secondary-foreground font-medium">Academic Journey</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Education & Certifications
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto font-medium leading-relaxed">
              Building expertise through comprehensive education and recognized certifications in technology
            </p>
          </motion.div>

          {/* Education Timeline Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.6 }}
            className="mt-16"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-purple-500 to-blue-600 bg-clip-text text-transparent">Education</h2>
              <p className="text-lg bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent font-semibold max-w-2xl mx-auto">
                My academic journey in computer science and technology
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-purple-500 to-blue-500"></div>

              {/* Education Items */}
              <div className="space-y-12">
                {/* MCA */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="relative flex items-start gap-8"
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-primary to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                    <GraduationCap className="h-8 w-8 text-white" />
                  </div>
                  <Card className="flex-1 hover:shadow-xl transition-all duration-300 border-l-4 border-l-primary">
                    <CardHeader className="pb-3">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        <CardTitle className="text-xl text-primary">Master of Computer Applications (MCA)</CardTitle>
                        <Badge variant="secondary" className="w-fit">CGPA: 8.0</Badge>
                      </div>
                      <CardDescription className="text-base font-medium text-foreground">
                        Osmania University — University College of Science, Saifabad
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>Nov 2022 – Nov 2024</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* B.Sc */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="relative flex items-start gap-8"
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                    <BookOpen className="h-8 w-8 text-white" />
                  </div>
                  <Card className="flex-1 hover:shadow-xl transition-all duration-300 border-l-4 border-l-blue-500">
                    <CardHeader className="pb-3">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        <CardTitle className="text-xl text-blue-600">Bachelor of Science (B.Sc in MPCS)</CardTitle>
                        <Badge variant="outline" className="w-fit border-blue-500 text-blue-600">CGPA: 7.96</Badge>
                      </div>
                      <CardDescription className="text-base font-medium text-foreground">
                        Osmania University — BJR Government Degree College, Narayanaguda
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>Oct 2019 – Aug 2022</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Intermediate (XII) */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="relative flex items-start gap-8"
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                    <div className="text-2xl font-bold text-white">12</div>
                  </div>
                  <Card className="flex-1 hover:shadow-xl transition-all duration-300 border-l-4 border-l-green-500">
                    <CardHeader className="pb-3">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        <CardTitle className="text-xl text-green-600">Intermediate (XII)</CardTitle>
                        <Badge variant="outline" className="w-fit border-green-500 text-green-600">Percentage: 82.3%</Badge>
                      </div>
                      <CardDescription className="text-base font-medium text-foreground">
                        Sri Hari Hara Junior College, Ieeja
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-2 text-muted-foreground mb-3">
                        <Calendar className="h-4 w-4" />
                        <span>Graduated: May 2019</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Completed higher secondary education with a focus on core subjects including Mathematics, Physics, and Chemistry, laying the foundation for advanced studies in technology and engineering.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* SSC */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="relative flex items-start gap-8"
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-lg">
                    <div className="text-2xl font-bold text-white">10</div>
                  </div>
                  <Card className="flex-1 hover:shadow-xl transition-all duration-300 border-l-4 border-l-orange-500">
                    <CardHeader className="pb-3">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        <CardTitle className="text-xl text-orange-600">Secondary School Certificate (SSC)</CardTitle>
                        <Badge variant="outline" className="w-fit border-orange-500 text-orange-600">CGPA: 7.2</Badge>
                      </div>
                      <CardDescription className="text-base font-medium text-foreground">
                        ZP High School, Ieeja
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-2 text-muted-foreground mb-3">
                        <Calendar className="h-4 w-4" />
                        <span>Graduated: March 2017</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Achieved foundational knowledge in Mathematics, Physics, and Chemistry, fostering a strong analytical and problem-solving mindset crucial for future academic and professional pursuits.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Certifications Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.0, duration: 0.6 }}
            className="mt-16"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-purple-500 to-blue-600 bg-clip-text text-transparent">Professional Certifications</h2>
              <p className="text-lg bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent font-semibold max-w-2xl mx-auto">
                Validated expertise through recognized certifications
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* SQL Certification */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-l-4 border-l-blue-500">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                        <div className="text-white font-bold">SQL</div>
                      </div>
                      <div>
                        <CardTitle className="text-lg">SQL (Basic)</CardTitle>
                        <CardDescription>Issued by: HackerRank</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Demonstrated foundational expertise in Structured Query Language (SQL), focusing on efficient data querying, manipulation, and retrieval processes.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Python Certification */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-l-4 border-l-yellow-500">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center">
                        <div className="text-white font-bold">Py</div>
                      </div>
                      <div>
                        <CardTitle className="text-lg">Python Programming</CardTitle>
                        <CardDescription>Issued by: Udemy</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Successfully completed an intensive Python development program, encompassing comprehensive object-oriented programming (OOP) principles, data structures, and algorithmic solutions.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Full Stack Certification */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-l-4 border-l-purple-500">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                        <div className="text-white font-bold">FS</div>
                      </div>
                      <div>
                        <CardTitle className="text-lg">Full Stack Web Development (Python)</CardTitle>
                        <CardDescription>Issued by: Narayana Tech House</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Achieved mastery in Python-based full stack web development, integrating advanced front-end technologies (HTML5, CSS3, JavaScript) with robust back-end frameworks (Django, Flask).
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-secondary/20 border border-secondary/30 mb-8">
              <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
              <span className="text-secondary-foreground font-medium">Explore my complete educational background</span>
            </div>
            <Button asChild size="lg" className="bg-gradient-to-r from-secondary to-accent hover:from-secondary/90 hover:to-accent/90 text-white shadow-lg hover:shadow-xl transition-all duration-300">
              <Link href="/about#education" className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5" />
                View Full Education
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
