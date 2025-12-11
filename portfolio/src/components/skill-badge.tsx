"use client"

import { motion } from "framer-motion"

interface SkillBadgeProps {
  skill: string
}

const skillColors = {
  Python: "text-foreground",
  Django: "text-foreground",
  DRF: "text-foreground",
  HTML: "text-foreground",
  CSS: "text-foreground",
  Bootstrap: "text-foreground",
  JavaScript: "text-foreground",
  MySQL: "text-foreground",
  SQLite: "text-foreground",
  "AWS (EC2, S3, Route 53)": "text-foreground",
  Git: "text-foreground",
  GitHub: "text-foreground",
  Postman: "text-foreground",
  SMTP: "text-foreground",
}

export function SkillBadge({ skill }: SkillBadgeProps) {
  const colorClass = skillColors[skill as keyof typeof skillColors] || "text-white"

  return (
    <div
      className={`rounded-full px-4 py-2 text-sm font-medium border transition-colors duration-200 ${colorClass}`}
    >
      {skill}
    </div>
  )
}
