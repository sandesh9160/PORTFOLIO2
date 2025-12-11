"use client"

import { motion } from "framer-motion"
import { Check, Star, Zap, Crown } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const packages = [
  {
    name: "Static Website Package",
    subtitle: "STARTER",
    price: "₹3,999",
    icon: Star,
    color: "from-blue-500 to-blue-600",
    bgColor: "from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/20",
    description: "Perfect for small businesses and personal brands looking to establish an online presence.",
    features: [
      "1-3 pages (Home, About, Contact)",
      "Responsive design for all devices",
      "Fast loading optimization",
      "Basic animations and transitions",
      "Contact form with email integration",
      "SEO optimized structure",
      "Free deployment on Vercel/Netlify",
      "1 month support"
    ],
    popular: false
  },
  {
    name: "Dynamic Website Package",
    subtitle: "BUSINESS",
    price: "₹9,999",
    icon: Zap,
    color: "from-purple-500 to-purple-600",
    bgColor: "from-purple-50 to-purple-100 dark:from-purple-950/20 dark:to-purple-900/20",
    description: "Ideal for startups, shops, and institutions needing interactive features and data management.",
    features: [
      "Everything in Static Package",
      "Admin dashboard for content management",
      "Dynamic content with database integration",
      "User authentication system",
      "Search and filtering capabilities",
      "Database integration (MySQL)",
      "Email notifications via SMTP",
      "Modern UI with smooth animations",
      "2 months support"
    ],
    popular: true
  },
  {
    name: "Premium Full-Stack Project",
    subtitle: "PRO",
    price: "₹14,999+",
    icon: Crown,
    color: "from-gold-500 to-yellow-600",
    bgColor: "from-yellow-50 to-orange-100 dark:from-yellow-950/20 dark:to-orange-900/20",
    description: "Advanced applications with custom backend, APIs, and cloud deployment for serious businesses.",
    features: [
      "Everything in Dynamic Package",
      "Custom backend with Django + DRF",
      "RESTful API development",
      "Payment gateway integration",
      "Real-time notifications",
      "Analytics dashboard",
      "Cloud deployment on AWS",
      "Advanced security features",
      "3 months support",
      "Performance optimization"
    ],
    popular: false
  }
]

export default function Services() {
  return (
    <div className="min-h-screen py-16 bg-gradient-to-br from-purple-50/50 via-white to-pink-50/50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Freelance Services
          </h1>
          <p className="text-xl bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent font-semibold max-w-3xl mx-auto">
            Professional web development packages designed to bring your vision to life with quality, speed, and reliability.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => {
            const Icon = pkg.icon
            return (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-primary text-primary-foreground px-3 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}

                <Card className={`h-full relative overflow-hidden transition-all duration-300 hover:shadow-2xl ${
                  pkg.popular ? 'ring-2 ring-primary/50 shadow-lg' : 'hover:shadow-lg'
                }`}>
                  <CardHeader className={`bg-gradient-to-br ${pkg.bgColor} pb-8`}>
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${pkg.color} flex items-center justify-center mb-4 mx-auto`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-center">
                      <div className="text-2xl font-bold">{pkg.name}</div>
                      <div className={`text-lg bg-gradient-to-r ${pkg.color} bg-clip-text text-transparent font-semibold`}>
                        {pkg.subtitle}
                      </div>
                    </CardTitle>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary">{pkg.price}</div>
                    </div>
                    <p className="text-center text-muted-foreground text-sm mt-2">
                      {pkg.description}
                    </p>
                  </CardHeader>

                  <CardContent className="pt-6">
                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-foreground mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground leading-relaxed">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      className={`w-full ${pkg.popular ? 'bg-primary hover:bg-primary/90' : ''}`}
                      variant={pkg.popular ? 'default' : 'outline'}
                      size="lg"
                      asChild
                    >
                      <a href="/contact" className="flex items-center justify-center gap-2">
                        Get Started
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Additional Info */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Choose My Services?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality First</h3>
              <p className="text-muted-foreground">
                Clean, maintainable code with modern best practices and thorough testing.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-muted-foreground">
                Efficient development process with regular updates and timely delivery.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Crown className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Full Support</h3>
              <p className="text-muted-foreground">
                Comprehensive support during and after development for your peace of mind.
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Let's discuss your project requirements and find the perfect package for your needs.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <a href="/contact" className="flex items-center gap-2">
              Contact Me Today
            </a>
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
