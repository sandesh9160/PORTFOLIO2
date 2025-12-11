"use client"

import { motion } from "framer-motion"

interface SkillBadgeProps {
  skill: string
}

const skillColors = {
  Python: "text-white",
  Django: "text-white",
  DRF: "text-white",
  HTML: "text-white",
  CSS: "text-white",
  Bootstrap: "text-white",
  JavaScript: "text-white",
  MySQL: "text-white",
  SQLite: "text-white",
  "AWS (EC2, S3, Route 53)": "text-white",
  Git: "text-white",
  GitHub: "text-white",
  Postman: "text-white",
  SMTP: "text-white",
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
