"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float, Text3D, Sphere, Ring, Torus } from "@react-three/drei"
import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles, Code, Palette, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TypingAnimation } from "@/components/typing-animation"
import type { Section } from "@/app/page"

function FloatingText3D() {
  const textRef = useRef<any>(null)

  useFrame((state) => {
    if (textRef.current) {
      textRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }
  })

  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.3}>
      <Text3D ref={textRef} font="/fonts/Geist_Bold.json" size={0.5} height={0.1} position={[0, 2, -2]}>
        DEVELOPER
        <meshStandardMaterial color="#a855f7" />
      </Text3D>
    </Float>
  )
}

function Floating3DElements() {
  return (
    <>
      <Float speed={2} rotationIntensity={0.3} floatIntensity={0.5}>
        <Sphere args={[0.3]} position={[-3, 1, -1]}>
          <meshStandardMaterial color="#ec4899" transparent opacity={0.7} />
        </Sphere>
      </Float>

      <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.3}>
        <Ring args={[0.5, 0.8, 32]} position={[3, -1, -2]} rotation={[0.5, 0, 0]}>
          <meshStandardMaterial color="#3b82f6" transparent opacity={0.6} />
        </Ring>
      </Float>

      <Float speed={2.5} rotationIntensity={0.2} floatIntensity={0.4}>
        <Torus args={[0.4, 0.1, 16, 32]} position={[2, 2, -3]}>
          <meshStandardMaterial color="#10b981" transparent opacity={0.8} />
        </Torus>
      </Float>
    </>
  )
}

interface HeroSectionProps {
  setActiveSection: (section: Section) => void
  scrollY: number
  isDarkMode: boolean
}

export function HeroSection({ setActiveSection, scrollY, isDarkMode }: HeroSectionProps) {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-20 relative overflow-hidden">
      {/* 3D Background Canvas */}
      <div className="absolute inset-0 -z-10">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#a855f7" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ec4899" />
          <pointLight position={[0, 10, -10]} intensity={0.8} color="#3b82f6" />

          <FloatingText3D />
          <Floating3DElements />
        </Canvas>
      </div>

      {/* Parallax Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div style={{ y: scrollY * 0.5 }} className="absolute inset-0">
          <motion.div
            animate={{
              x: [0, 100, -50, 0],
              y: [0, -100, 50, 0],
              scale: [1, 1.2, 0.8, 1],
              rotateZ: [0, 180, 360],
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
              rotateZ: [0, -180, -360],
            }}
            transition={{
              duration: 25,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className={`absolute top-1/2 right-1/4 w-80 h-80 ${isDarkMode ? "bg-gradient-to-r from-blue-600/15 to-cyan-600/15" : "bg-gradient-to-r from-blue-400/25 to-cyan-400/25"} rounded-full blur-3xl`}
          />
        </motion.div>
      </div>

      <div className="container mx-auto text-center relative z-10">
        {/* Enhanced Avatar with 3D Effects */}
        <motion.div
          initial={{ scale: 0, rotate: -180, rotateY: -180 }}
          animate={{ scale: 1, rotate: 0, rotateY: 0 }}
          transition={{ type: "spring", bounce: 0.6, duration: 1.5 }}
          className="relative w-72 h-72 mx-auto mb-8"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Multiple 3D Rings */}
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                rotateY: 360,
                rotateX: i % 2 === 0 ? 360 : -360,
              }}
              transition={{
                duration: 15 + i * 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              className={`absolute inset-${i * 2} rounded-full bg-gradient-to-r ${
                i === 0
                  ? "from-purple-500 via-pink-500 to-blue-500"
                  : i === 1
                    ? "from-yellow-400 via-orange-500 to-red-500"
                    : i === 2
                      ? "from-green-400 via-blue-500 to-purple-500"
                      : "from-pink-400 via-purple-500 to-indigo-500"
              } p-${i === 0 ? 2 : 1}`}
              style={{
                transform: `rotateX(${i * 15}deg) rotateY(${i * 30}deg)`,
                opacity: 0.8 - i * 0.1,
              }}
            >
              <div
                className={`w-full h-full rounded-full ${isDarkMode ? "bg-gradient-to-br from-gray-900 via-black to-gray-800" : "bg-gradient-to-br from-white via-blue-50 to-purple-50"}`}
              />
            </motion.div>
          ))}

          {/* Photo container with 3D effects */}
          <motion.div
            animate={{
              boxShadow: [
                "0 0 40px rgba(168, 85, 247, 0.6)",
                "0 0 80px rgba(236, 72, 153, 0.8)",
                "0 0 120px rgba(59, 130, 246, 0.6)",
                "0 0 40px rgba(168, 85, 247, 0.6)",
              ],
              rotateY: [0, 5, -5, 0],
            }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
            className="absolute inset-6 rounded-full overflow-hidden bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 p-2"
            style={{ transform: "translateZ(20px)" }}
          >
            <div
              className={`w-full h-full rounded-full overflow-hidden ${isDarkMode ? "bg-gray-800" : "bg-gray-100"} relative`}
            >
              <motion.img
                src="/images/saniya-profile.png"
                alt="Saniya Khandelwal"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1, rotateZ: 5 }}
                transition={{ duration: 0.3 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 via-transparent to-pink-500/20 rounded-full" />
            </div>
          </motion.div>

          {/* 3D Floating icons */}
          <motion.div
            animate={{ rotateY: 360, rotateZ: 180 }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="absolute inset-0"
            style={{ transformStyle: "preserve-3d" }}
          >
            {[
              { Icon: Code, position: "top-0 left-1/2 -translate-x-1/2", color: "text-purple-400", delay: 0 },
              { Icon: Palette, position: "top-1/2 right-0 -translate-y-1/2", color: "text-pink-400", delay: 0.5 },
              { Icon: Sparkles, position: "bottom-0 left-1/2 -translate-x-1/2", color: "text-blue-400", delay: 1 },
              { Icon: Star, position: "top-1/2 left-0 -translate-y-1/2", color: "text-yellow-400", delay: 1.5 },
            ].map(({ Icon, position, color, delay }, index) => (
              <motion.div
                key={index}
                className={`absolute ${position}`}
                initial={{ scale: 0, rotateY: -180 }}
                animate={{ scale: 1, rotateY: 0 }}
                transition={{ delay, duration: 0.8, type: "spring" }}
                style={{ transform: `translateZ(${30 + index * 10}px)` }}
              >
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                    rotateZ: [0, 360],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 3 + index,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <Icon className={`w-12 h-12 ${color} drop-shadow-2xl`} />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* 3D Professional badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0, rotateX: -90 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ delay: 2, duration: 0.8, type: "spring" }}
            className="absolute -bottom-4 -right-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-2xl"
            style={{ transform: "translateZ(40px)" }}
            whileHover={{ scale: 1.1, rotateY: 10 }}
          >
            Available for Hire
          </motion.div>
        </motion.div>

        {/* 3D Enhanced Title */}
        <motion.div
          initial={{ opacity: 0, y: 100, rotateX: -30 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ delay: 0.5, duration: 1, type: "spring" }}
          className="mb-6"
          style={{ transformStyle: "preserve-3d" }}
        >
          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-bold mb-4 font-heading"
            style={{
              background: "linear-gradient(45deg, #a855f7, #ec4899, #3b82f6, #10b981)",
              backgroundSize: "400% 400%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              transform: "translateZ(30px)",
            }}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              rotateY: [0, 2, -2, 0],
            }}
            transition={{
              backgroundPosition: {
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              },
              rotateY: {
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              },
            }}
            whileHover={{ scale: 1.05, rotateX: 5 }}
          >
            Saniya Khandelwal
          </motion.h1>

          {/* 3D Animated underline */}
          <motion.div
            initial={{ width: 0, rotateY: -90 }}
            animate={{ width: "100%", rotateY: 0 }}
            transition={{ delay: 1.2, duration: 1.5, type: "spring" }}
            className="h-2 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 mx-auto max-w-md rounded-full"
            style={{ transform: "translateZ(20px)" }}
          />
        </motion.div>

        {/* Rest of the component remains similar but with added 3D transforms */}
        <motion.div
          initial={{ opacity: 0, y: 50, rotateX: -20 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mb-4"
          style={{ transform: "translateZ(15px)" }}
        >
          <TypingAnimation
            text="Aspiring Software Developer & Web Development Enthusiast"
            className={`text-xl md:text-3xl font-light ${isDarkMode ? "text-white/90" : "text-gray-800"} font-body`}
            delay={2500}
          />
          <motion.p
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 4.5 }}
            className={`text-lg md:text-xl ${isDarkMode ? "text-white/70" : "text-gray-600"} mt-2 font-body`}
          >
            MERN Stack Developer | UI/UX Enthusiast
          </motion.p>
        </motion.div>

        {/* 3D Enhanced CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 50, rotateX: -30 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          style={{ transformStyle: "preserve-3d" }}
        >
          <motion.div
            whileHover={{ scale: 1.1, rotateY: 5, rotateX: 5 }}
            whileTap={{ scale: 0.95 }}
            style={{ transform: "translateZ(20px)" }}
          >
            <Button
              onClick={() => setActiveSection("projects")}
              size="lg"
              className="group relative px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-full shadow-2xl shadow-purple-500/25 transition-all duration-300 border-2 border-white/20 cursor-none font-body"
            >
              <span className="relative z-10 flex items-center text-lg">
                View My Work
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1, rotateY: -5, rotateX: 5 }}
            whileTap={{ scale: 0.95 }}
            style={{ transform: "translateZ(15px)" }}
          >
            <Button
              onClick={() => setActiveSection("contact")}
              variant="outline"
              size="lg"
              className={`group relative px-10 py-5 ${isDarkMode ? "bg-white/10 border-white/30 text-white hover:bg-white/20" : "bg-black/10 border-black/30 text-gray-900 hover:bg-black/20"} backdrop-blur-sm font-semibold rounded-full shadow-xl transition-all duration-300 cursor-none font-body`}
            >
              <span className="relative z-10 flex items-center text-lg">
                Get In Touch
                <Mail className="ml-3 h-6 w-6 group-hover:rotate-12 transition-transform" />
              </span>
            </Button>
          </motion.div>
        </motion.div>

        {/* 3D Enhanced social links */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="flex justify-center space-x-8"
          style={{ transformStyle: "preserve-3d" }}
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
            { icon: Download, href: "/Resume.pdf", color: "from-green-600 to-emerald-700", label: "Resume" },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
              download={social.href.includes("resume") ? true : undefined}
              whileHover={{
                scale: 1.3,
                rotateY: 15,
                rotateX: 10,
                z: 50,
              }}
              whileTap={{ scale: 0.9 }}
              className={`group relative p-5 rounded-2xl bg-gradient-to-r ${social.color} shadow-xl hover:shadow-2xl transition-all duration-300 cursor-none`}
              title={social.label}
              style={{ transform: `translateZ(${10 + index * 5}px)` }}
            >
              <social.icon className="h-7 w-7 text-white group-hover:scale-110 transition-transform" />
              <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
