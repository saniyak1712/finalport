"use client"

import { motion } from "framer-motion"

interface FloatingElementsProps {
  scrollY: number
}

export function FloatingElements({ scrollY }: FloatingElementsProps) {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Parallax floating geometric shapes */}
      <motion.div
        style={{ y: scrollY * 0.3 }}
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -100, 50, 0],
          rotate: [0, 180, 360],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{
          duration: 25,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/4 w-6 h-6 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-sm"
      />

      <motion.div
        style={{ y: scrollY * 0.2 }}
        animate={{
          x: [0, -150, 100, 0],
          y: [0, 100, -80, 0],
          rotate: [0, -180, -360],
          scale: [1, 0.8, 1.3, 1],
        }}
        transition={{
          duration: 30,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute top-1/3 right-1/4 w-8 h-8 bg-gradient-to-r from-blue-400/15 to-cyan-400/15 rounded-full blur-sm"
      />

      <motion.div
        style={{ y: scrollY * 0.4 }}
        animate={{
          x: [0, 80, -120, 0],
          y: [0, -80, 120, 0],
          rotate: [0, 90, 180],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-gradient-to-r from-emerald-400/10 to-teal-400/10 rounded-full blur-sm"
      />

      {/* Enhanced floating particles with parallax */}
      {Array.from({ length: 25 }).map((_, i) => (
        <motion.div
          key={i}
          style={{ y: scrollY * (0.1 + Math.random() * 0.3) }}
          animate={{
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, 0],
            opacity: [0.1, 0.6, 0.1],
            scale: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 8 + Math.random() * 12,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 5,
            ease: "easeInOut",
          }}
          className="absolute w-1 h-1 bg-white/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* Enhanced gradient orbs with parallax */}
      <motion.div
        style={{ y: scrollY * 0.1 }}
        animate={{
          scale: [1, 1.3, 0.8, 1],
          opacity: [0.05, 0.15, 0.05],
          x: [0, 50, -30, 0],
          y: [0, -30, 20, 0],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/8 via-pink-500/8 to-blue-500/8 rounded-full blur-3xl"
      />

      <motion.div
        style={{ y: scrollY * 0.15 }}
        animate={{
          scale: [1.2, 0.8, 1.4, 1.2],
          opacity: [0.04, 0.12, 0.04],
          x: [0, -40, 60, 0],
          y: [0, 40, -20, 0],
        }}
        transition={{
          duration: 18,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/6 via-blue-500/6 to-purple-500/6 rounded-full blur-3xl"
      />
    </div>
  )
}
