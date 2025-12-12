"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 border-border/50">
      <div className="container mx-auto flex h-16 max-w-screen-2xl items-center px-4">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold text-primary text-lg">
              Sandesh Kenchugundi
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="flex flex-1 items-center justify-end">
          <ThemeToggle />
          <nav className="hidden sm:flex items-center space-x-6 text-sm font-semibold">
            <Link
              href="/"
              className="relative transition-all duration-300 hover:text-primary text-foreground py-2 px-3 rounded-md hover:bg-primary/5 after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-1/2 hover:after:left-1/4"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="relative transition-all duration-300 hover:text-primary text-foreground py-2 px-3 rounded-md hover:bg-primary/5 after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-1/2 hover:after:left-1/4"
            >
              About
            </Link>
            <Link
              href="/#skills"
              className="relative transition-all duration-300 hover:text-primary text-foreground py-2 px-3 rounded-md hover:bg-primary/5 after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-1/2 hover:after:left-1/4"
            >
              Skills
            </Link>
            <Link
              href="/projects"
              className="relative transition-all duration-300 hover:text-primary text-foreground py-2 px-3 rounded-md hover:bg-primary/5 after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-1/2 hover:after:left-1/4"
            >
              Projects
            </Link>
            <Link
              href="/services"
              className="relative transition-all duration-300 hover:text-primary text-foreground py-2 px-3 rounded-md hover:bg-primary/5 after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-1/2 hover:after:left-1/4"
            >
              Services
            </Link>
            <Link
              href="/about#education"
              className="relative transition-all duration-300 hover:text-primary text-foreground py-2 px-3 rounded-md hover:bg-primary/5 after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-1/2 hover:after:left-1/4"
            >
              Education
            </Link>
            <Link
              href="/contact"
              className="relative transition-all duration-300 hover:text-primary text-foreground py-2 px-3 rounded-md hover:bg-primary/5 after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-1/2 hover:after:left-1/4"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="ml-2 sm:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="sm:hidden border-t bg-background/95 backdrop-blur-md">
          <div className="flex justify-center px-4 py-2">
            <ThemeToggle />
          </div>
          <nav className="flex flex-col space-y-4 px-4 py-6">
            <Link
              href="/"
              className="text-foreground/80 hover:text-primary transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-foreground/80 hover:text-primary transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/#skills"
              className="text-foreground/80 hover:text-primary transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Skills
            </Link>
            <Link
              href="/projects"
              className="text-foreground/80 hover:text-primary transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="/services"
              className="text-foreground/80 hover:text-primary transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/about#education"
              className="text-foreground/80 hover:text-primary transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Education
            </Link>
            <Link
              href="/contact"
              className="text-foreground/80 hover:text-primary transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </nav>
  )
}
