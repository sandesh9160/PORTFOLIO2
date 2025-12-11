"use client"

import { motion } from "framer-motion"
import { MessageCircle, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export function DMBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4" />
            Available for freelance work
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Let's Collaborate
          </h2>

          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ready to bring your ideas to life with scalable Python web applications.
            Open for collaborations, long-term projects, and exciting opportunities in 2025.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <a
                href="https://linkedin.com/in/sandeshkenchugundi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle className="h-5 w-5" />
                DM me on LinkedIn
              </a>
            </Button>

            <div className="text-sm text-muted-foreground px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-border/50">
              🚀 Open for 2025 Projects
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
