import { Github, Linkedin, Trophy, Mail, Phone, MapPin, Heart, Code, Briefcase, GraduationCap } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-card border-t border-border">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-purple-500/5 to-pink-500/5"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(255,119,198,0.1),transparent_50%)]"></div>

      <div className="relative container mx-auto py-12 md:py-16 px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 md:gap-12 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-purple-600 rounded-lg flex items-center justify-center">
                <Code className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">
                  Sandesh Kenchugundi
                </h3>
                <p className="text-sm text-muted-foreground">Python Full Stack Developer</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Crafting scalable web applications with modern technologies.
              Passionate about clean code and exceptional user experiences.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Heart className="h-4 w-4 text-foreground" />
              <span>Building the future, one line of code at a time</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
              <h4 className="text-lg font-semibold mb-6 text-foreground">
              Quick Links
            </h4>
            <nav className="space-y-3">
              <Link
                href="/"
                className="block text-foreground hover:text-primary transition-colors duration-200 text-sm hover:translate-x-1 transform"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block text-foreground hover:text-primary transition-colors duration-200 text-sm hover:translate-x-1 transform"
              >
                About
              </Link>
              <Link
                href="/#skills"
                className="block text-foreground hover:text-primary transition-colors duration-200 text-sm hover:translate-x-1 transform"
              >
                Skills
              </Link>
              <Link
                href="/projects"
                className="block text-foreground hover:text-primary transition-colors duration-200 text-sm hover:translate-x-1 transform"
              >
                Projects
              </Link>
              <Link
                href="/services"
                className="block text-foreground hover:text-primary transition-colors duration-200 text-sm hover:translate-x-1 transform"
              >
                Services
              </Link>
              <Link
                href="/about#education"
                className="block text-foreground hover:text-primary transition-colors duration-200 text-sm hover:translate-x-1 transform"
              >
                Education
              </Link>
              <Link
                href="/contact"
                className="block text-foreground hover:text-primary transition-colors duration-200 text-sm hover:translate-x-1 transform"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-foreground">
              Services
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Briefcase className="h-4 w-4 text-primary" />
                <span className="text-foreground text-sm">Web Development</span>
              </div>
              <div className="flex items-center gap-3">
                <Code className="h-4 w-4 text-primary" />
                <span className="text-foreground text-sm">Full-Stack Solutions</span>
              </div>
              <div className="flex items-center gap-3">
                <GraduationCap className="h-4 w-4 text-primary" />
                <span className="text-foreground text-sm">Technical Consulting</span>
              </div>
              <div className="flex items-center gap-3">
                <Trophy className="h-4 w-4 text-primary" />
                <span className="text-foreground text-sm">Code Reviews</span>
              </div>
            </div>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-foreground">
              Get In Touch
            </h4>
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Email</p>
                  <p className="text-xs text-muted-foreground">sandeshkenchugundi01@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Phone</p>
                  <p className="text-xs text-muted-foreground">+91 9160903500</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Location</p>
                  <p className="text-xs text-muted-foreground">Hyderabad, India</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="https://github.com/sandeshkenchugundi"
                className="w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="https://linkedin.com/in/sandeshkenchugundi"
                className="w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="https://hackerrank.com/sandeshkenchugundi01"
                className="w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Trophy className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-primary/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© 2025 Sandesh Kenchugundi. Made with</span>
              <Heart className="h-4 w-4 text-foreground animate-pulse" />
              <span>using Next.js & Tailwind CSS</span>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
              <Link href="/projects" className="text-muted-foreground hover:text-primary transition-colors">
                Projects
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-purple-500 to-pink-500"></div>
    </footer>
  )
}
