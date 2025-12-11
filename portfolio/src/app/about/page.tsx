"use client"

import { motion } from "framer-motion"
import { MapPin, Mail, Phone, Github, Linkedin, Trophy, GraduationCap, BookOpen, Calendar } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const achievements = [
  "Built scalable web applications for startups",
  "Expertise in Django and REST API development",
  "AWS cloud deployment specialist",
  "Full-stack development with modern UI/UX",
  "Freelance developer with proven track record"
]

export default function About() {
  return (
    <div className="min-h-screen py-16 bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
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

            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-purple-500 to-blue-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              About Me
            </motion.h1>

            <p className="text-lg bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent font-semibold max-w-2xl mx-auto">
              Passionate Python Full-Stack Developer
            </p>
          </motion.div>

          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Sandesh Kenchugundi</CardTitle>
                <p className="text-muted-foreground">Python Full Stack Developer</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-lg leading-relaxed">
                  I'm Sandesh Kenchugundi, a passionate Python Full-Stack Developer based in Hyderabad, India. With expertise in Django, Django REST Framework, and MySQL, I specialize in crafting scalable web applications that deliver exceptional user experiences. My skills extend to responsive UI design, REST API development, and cloud deployment on AWS, ensuring robust and efficient solutions for businesses.
                </p>
                <p className="text-lg leading-relaxed">
                  As a freelancer, I'm dedicated to turning ideas into reality, providing end-to-end development services that drive results. Whether it's building a complete e-commerce platform, a content management system, or a custom web application, I bring technical excellence and creative problem-solving to every project.
                </p>
                <p className="text-lg leading-relaxed">
                  My approach combines technical proficiency with business acumen, ensuring that every solution not only works flawlessly but also contributes to your bottom line. I'm committed to delivering high-quality, maintainable code that stands the test of time.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    Location
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Hyderabad, Telangana, India</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="h-5 w-5" />
                    Contact
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-muted-foreground">
                    <Mail className="h-4 w-4 inline mr-2" />
                    sandeshkenchugundi01@gmail.com
                  </p>
                  <p className="text-muted-foreground">
                    <Phone className="h-4 w-4 inline mr-2" />
                    +91 9160903500
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5" />
                  Key Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.2 + index * 0.1, duration: 0.4 }}
                    >
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span>{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.6 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Connect With Me</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://github.com/sandeshkenchugundi"
                    className="flex items-center gap-2 px-4 py-2 bg-secondary hover:bg-secondary/80 rounded-md transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                  <a
                    href="https://linkedin.com/in/sandeshkenchugundi"
                    className="flex items-center gap-2 px-4 py-2 bg-secondary hover:bg-secondary/80 rounded-md transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </a>
                  <a
                    href="https://hackerrank.com/sandeshkenchugundi01"
                    className="flex items-center gap-2 px-4 py-2 bg-secondary hover:bg-secondary/80 rounded-md transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Trophy className="h-4 w-4" />
                    HackerRank
                  </a>
                </div>
              </CardContent>
            </Card>
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
                        <CardTitle className="text-xl text-blue-600 dark:text-blue-400">Bachelor of Science (B.Sc in MPCS)</CardTitle>
                        <Badge variant="outline" className="w-fit border-blue-500 text-blue-600 dark:text-blue-400">CGPA: 7.96</Badge>
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
                        <CardTitle className="text-xl text-green-600 dark:text-green-400">Intermediate (XII)</CardTitle>
                        <Badge variant="outline" className="w-fit border-green-500 text-green-600 dark:text-green-400">Percentage: 82.3%</Badge>
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
                        <CardTitle className="text-xl text-orange-600 dark:text-orange-400">Secondary School Certificate (SSC)</CardTitle>
                        <Badge variant="outline" className="w-fit border-orange-500 text-orange-600 dark:text-orange-400">CGPA: 7.2</Badge>
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
                      <div className="w-12 h-12 bg-blue-500/10 dark:bg-blue-900/20 rounded-full flex items-center justify-center">
                        <div className="text-blue-500 dark:text-blue-400 font-bold">SQL</div>
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
                      <div className="w-12 h-12 bg-yellow-500/10 dark:bg-yellow-900/20 rounded-full flex items-center justify-center">
                        <div className="text-yellow-500 dark:text-yellow-400 font-bold">Py</div>
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
                      <div className="w-12 h-12 bg-purple-500/10 dark:bg-purple-900/20 rounded-full flex items-center justify-center">
                        <div className="text-purple-500 dark:text-purple-400 font-bold">FS</div>
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
        </motion.div>
      </div>
    </div>
  )
}
