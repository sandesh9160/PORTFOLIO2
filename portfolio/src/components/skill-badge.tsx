"use client"

import { motion } from "framer-motion"

interface SkillBadgeProps {
  skill: string
}

const skillColors = {
  Python: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20 hover:bg-blue-500/20",
  Django: "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20 hover:bg-green-500/20",
  DRF: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20 hover:bg-emerald-500/20",
  HTML: "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20 hover:bg-orange-500/20",
  CSS: "bg-blue-600/10 text-blue-700 dark:text-blue-400 border-blue-600/20 hover:bg-blue-600/20",
  Bootstrap: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20 hover:bg-purple-500/20",
  JavaScript: "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-500/20 hover:bg-yellow-500/20",
  MySQL: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20 hover:bg-cyan-500/20",
  SQLite: "bg-slate-500/10 text-slate-600 dark:text-slate-400 border-slate-500/20 hover:bg-slate-500/20",
  "AWS (EC2, S3, Route 53)": "bg-orange-600/10 text-orange-700 dark:text-orange-400 border-orange-600/20 hover:bg-orange-600/20",
  Git: "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20 hover:bg-red-500/20",
  GitHub: "bg-gray-800/10 text-gray-900 dark:text-gray-300 border-gray-800/20 hover:bg-gray-800/20",
  Postman: "bg-orange-400/10 text-orange-500 dark:text-orange-400 border-orange-400/20 hover:bg-orange-400/20",
  SMTP: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20 hover:bg-indigo-500/20",
}

export function SkillBadge({ skill }: SkillBadgeProps) {
  const colorClass = skillColors[skill as keyof typeof skillColors] || "bg-primary/10 text-primary border-primary/20 hover:bg-primary/20"

  return (
    <div
      className={`rounded-full px-4 py-2 text-sm font-medium border transition-colors duration-200 ${colorClass}`}
    >
      {skill}
    </div>
  )
}
