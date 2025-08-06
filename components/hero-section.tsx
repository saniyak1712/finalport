"use client"

import { motion } from "framer-motion"
import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles, Code, Palette, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TypingAnimation } from "@/components/typing-animation"
import type { Section } from "@/app/page"

interface HeroSectionProps {
  setActiveSection: (section: Section) => void
  scrollY: number
  isDarkMode: boolean
}

export function HeroSection({ setActiveSection, scrollY, isDarkMode }: HeroSectionProps) {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-20 relative overflow-hidden">
      {/* Parallax Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div style={{ y: scrollY * 0.5 }} className="absolute inset-0">
          {/* Enhanced Dynamic Background with Parallax */}
          <motion.div
            animate={{
              x: [0, 100, -50, 0],
              y: [0, -100, 50, 0],
              scale: [1, 1.2, 0.8, 1],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className={`absolute top-1/4 left-1/4 w-96 h-96 ${isDarkMode ? "bg-gradient-to-r from-purple-600/20 to-pink-600/20" : "bg-gradient-to-r from-purple-400/30 to-pink-400/30"} rounded-full blur-3xl`}
          />

          <motion.div
            animate={{
              x: [0, -150, 100, 0],
              y: [0, 100, -50, 0],
              scale: [1, 0.8, 1.3, 1],
            }}
            transition={{
              duration: 25,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className={`absolute top-1/2 right-1/4 w-80 h-80 ${isDarkMode ? "bg-gradient-to-r from-blue-600/15 to-cyan-600/15" : "bg-gradient-to-r from-blue-400/25 to-cyan-400/25"} rounded-full blur-3xl`}
          />
        </motion.div>

        {/* Grid pattern overlay with parallax */}
        <motion.div
          style={{ y: scrollY * 0.2 }}
          className={`absolute inset-0 ${isDarkMode ? "bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)]" : "bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)]"} bg-[size:50px_50px]`}
        />
      </div>

      <div className="container mx-auto text-center relative z-10">
        {/* Enhanced Avatar with Static Photo - Made Bigger and More Attractive */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", bounce: 0.6, duration: 1.2 }}
          className="relative w-72 h-72 mx-auto mb-8"
        >
          {/* Outer animated ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 via-blue-500 to-emerald-500 p-2"
          >
            <div
              className={`w-full h-full rounded-full ${isDarkMode ? "bg-gradient-to-br from-gray-900 via-black to-gray-800" : "bg-gradient-to-br from-white via-blue-50 to-purple-50"}`}
            />
          </motion.div>

          {/* Middle decorative ring */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="absolute inset-4 rounded-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 p-1 opacity-80"
          >
            <div
              className={`w-full h-full rounded-full ${isDarkMode ? "bg-gradient-to-br from-gray-800 via-black to-gray-900" : "bg-gradient-to-br from-blue-50 via-white to-purple-50"}`}
            />
          </motion.div>

          {/* Photo container with enhanced styling */}
          <motion.div
            animate={{
              boxShadow: [
                "0 0 40px rgba(168, 85, 247, 0.6)",
                "0 0 80px rgba(236, 72, 153, 0.8)",
                "0 0 40px rgba(168, 85, 247, 0.6)",
              ],
            }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            className="absolute inset-6 rounded-full overflow-hidden bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 p-2"
          >
            <div
              className={`w-full h-full rounded-full overflow-hidden ${isDarkMode ? "bg-gray-800" : "bg-gray-100"} relative`}
            >
             <img src="/profile.jpg" alt="Saniya Khandelwal" className="w-full h-full object-cover" />

              {/* Overlay gradient for better integration */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 via-transparent to-pink-500/20 rounded-full" />
            </div>
          </motion.div>

          {/* Floating icons around avatar - More and Better Positioned */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="absolute inset-0"
          >
            <Code className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 text-purple-400 drop-shadow-lg" />
            <Palette className="absolute top-1/2 -right-6 transform -translate-y-1/2 w-12 h-12 text-pink-400 drop-shadow-lg" />
            <Sparkles className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-12 h-12 text-blue-400 drop-shadow-lg" />
            <Star className="absolute top-1/2 -left-6 transform -translate-y-1/2 w-10 h-10 text-yellow-400 drop-shadow-lg" />
          </motion.div>

          {/* Additional decorative elements */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="absolute inset-0"
          >
            <div className="absolute top-12 right-12 w-4 h-4 bg-emerald-400 rounded-full animate-pulse" />
            <div className="absolute bottom-12 left-12 w-4 h-4 bg-cyan-400 rounded-full animate-pulse" />
            <div className="absolute top-12 left-12 w-3 h-3 bg-yellow-400 rounded-full animate-pulse" />
            <div className="absolute bottom-12 right-12 w-3 h-3 bg-red-400 rounded-full animate-pulse" />
          </motion.div>

          {/* Professional badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="absolute -bottom-4 -right-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg"
          >
           
          </motion.div>
        </motion.div>

        {/* Enhanced Title with better animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-6"
        >
          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-bold mb-4 font-heading"
            style={{
              background: "linear-gradient(45deg, #a855f7, #ec4899, #3b82f6, #10b981)",
              backgroundSize: "300% 300%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            Saniya Khandelwal
          </motion.h1>

          {/* Animated underline */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 1, duration: 1 }}
            className="h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto max-w-md rounded-full"
          />
        </motion.div>

        {/* Typing Animation for subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mb-4"
        >
          <TypingAnimation
            text="Aspiring Software Developer & Web Development Enthusiast"
            className={`text-xl md:text-3xl font-light ${isDarkMode ? "text-white/90" : "text-gray-800"} font-body`}
            delay={2000}
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4 }}
            className={`text-lg md:text-xl ${isDarkMode ? "text-white/70" : "text-gray-600"} mt-2 font-body`}
          >
            MERN Stack Developer | UI/UX Enthusiast
          </motion.p>
        </motion.div>

        {/* Enhanced description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mb-12"
        >
          <p
            className={`text-lg md:text-xl ${isDarkMode ? "text-white/80" : "text-gray-700"} max-w-4xl mx-auto leading-relaxed mb-4 font-body`}
          >
            Passionate about creating <span className="text-purple-400 font-medium">beautiful</span>,{" "}
            <span className="text-pink-400 font-medium">functional</span>, and{" "}
            <span className="text-blue-400 font-medium">user-friendly</span> web applications with modern technologies.
          </p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5 }}
            className={`inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-500/30 backdrop-blur-sm`}
          >
            <span className={`text-sm md:text-base ${isDarkMode ? "text-white/80" : "text-gray-700"} font-body`}>
              🎓 B.Tech IT Student | CGPA: 8.99 | Currently Interning at Linux World Informatics
            </span>
          </motion.div>
        </motion.div>

        {/* Enhanced CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
        >
          <Button
            onClick={() => setActiveSection("projects")}
            size="lg"
            className="group relative px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-full shadow-2xl shadow-purple-500/25 transition-all duration-300 hover:scale-105 hover:shadow-purple-500/40 border-2 border-white/20 cursor-none font-body"
          >
            <span className="relative z-10 flex items-center text-lg">
              View My Work
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-20 transition-opacity" />
          </Button>

          <Button
            onClick={() => setActiveSection("contact")}
            variant="outline"
            size="lg"
            className={`group relative px-10 py-5 ${isDarkMode ? "bg-white/10 border-white/30 text-white hover:bg-white/20 hover:border-white/50" : "bg-black/10 border-black/30 text-gray-900 hover:bg-black/20 hover:border-black/50"} backdrop-blur-sm font-semibold rounded-full shadow-xl transition-all duration-300 hover:scale-105 cursor-none font-body`}
          >
            <span className="relative z-10 flex items-center text-lg">
              Get In Touch
              <Mail className="ml-3 h-6 w-6 group-hover:rotate-12 transition-transform" />
            </span>
            <div
              className={`absolute inset-0 rounded-full ${isDarkMode ? "bg-white/5" : "bg-black/5"} opacity-0 group-hover:opacity-100 transition-opacity`}
            />
          </Button>
        </motion.div>

        {/* Enhanced social links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex justify-center space-x-8"
        >
          {[
            {
              icon: Github,
              href: "https://github.com/saniyak1712",
              color: "from-gray-600 to-gray-800",
              label: "GitHub",
            },
            {
              icon: Linkedin,
              href: "https://www.linkedin.com/in/saniya-khandelwal-26127b295/",
              color: "from-blue-600 to-blue-800",
              label: "LinkedIn",
            },
            { icon: Download, href: "/resume.pdf", color: "from-green-600 to-emerald-700", label: "Resume" },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
              download={social.href.includes("resume") ? true : undefined}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className={`group relative p-5 rounded-2xl bg-gradient-to-r ${social.color} shadow-xl hover:shadow-2xl transition-all duration-300 cursor-none`}
              title={social.label}
            >
              <social.icon className="h-7 w-7 text-white group-hover:scale-110 transition-transform" />
              <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className={`w-6 h-10 border-2 ${isDarkMode ? "border-white/30" : "border-black/30"} rounded-full flex justify-center cursor-none`}
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className={`w-1 h-3 ${isDarkMode ? "bg-white/50" : "bg-black/50"} rounded-full mt-2`}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
