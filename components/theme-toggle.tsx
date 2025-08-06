"use client"

import { motion } from "framer-motion"
import { Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ThemeToggleProps {
  isDarkMode: boolean
  setIsDarkMode: (isDark: boolean) => void
}

export function ThemeToggle({ isDarkMode, setIsDarkMode }: ThemeToggleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1 }}
      className="fixed top-24 right-6 z-50"
    >
      <Button
        onClick={() => setIsDarkMode(!isDarkMode)}
        size="lg"
        className={`relative p-4 rounded-full ${
          isDarkMode
            ? "bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600"
            : "bg-gradient-to-r from-purple-600 to-indigo-700 hover:from-purple-700 hover:to-indigo-800"
        } shadow-2xl transition-all duration-300 hover:scale-110 cursor-none border-2 border-white/20`}
      >
        <motion.div animate={{ rotate: isDarkMode ? 0 : 180 }} transition={{ duration: 0.5 }}>
          {isDarkMode ? <Sun className="h-6 w-6 text-white" /> : <Moon className="h-6 w-6 text-white" />}
        </motion.div>
      </Button>
    </motion.div>
  )
}
