"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface TypingAnimationProps {
  text: string
  className?: string
  delay?: number
  speed?: number
}

export function TypingAnimation({ text, className = "", delay = 0, speed = 100 }: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const timer = setTimeout(
      () => {
        if (currentIndex < text.length) {
          setDisplayedText(text.slice(0, currentIndex + 1))
          setCurrentIndex(currentIndex + 1)
        }
      },
      delay + currentIndex * speed,
    )

    return () => clearTimeout(timer)
  }, [currentIndex, text, delay, speed])

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => clearInterval(cursorTimer)
  }, [])

  return (
    <motion.div className={className}>
      {displayedText}
      <motion.span animate={{ opacity: showCursor ? 1 : 0 }} className="text-purple-400">
        |
      </motion.span>
    </motion.div>
  )
}
