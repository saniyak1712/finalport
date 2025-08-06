"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { EducationSection } from "@/components/education-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { CertificatesSection } from "@/components/certificates-section"
import { AchievementsSection } from "@/components/achievements-section"
import { ContactSection } from "@/components/contact-section"
import { FloatingElements } from "@/components/floating-elements"
import { ProjectModal } from "@/components/project-modal"
import { CertificateModal } from "@/components/certificate-modal"
import { CustomCursor } from "@/components/custom-cursor"
import { SoundEffects } from "@/components/sound-effects"
import { ThemeToggle } from "@/components/theme-toggle"
import { ParticleSystem } from "@/components/particle-system"
import { LoadingTransitions } from "@/components/loading-transitions"

export type Section =
  | "home"
  | "about"
  | "skills"
  | "education"
  | "experience"
  | "projects"
  | "certificates"
  | "achievements"
  | "contact"

export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  technologies: string[]
  features: string[]
  demoUrl?: string
  githubUrl?: string
  category: string
}

export interface Certificate {
  id: string
  title: string
  issuer: string
  date: string
  description: string
  image: string
  credentialUrl?: string
  skills: string[]
}

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState<Section>("home")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [scrollY, setScrollY] = useState(0)
  const [isDarkMode, setIsDarkMode] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode)
  }, [isDarkMode])

  if (isLoading) {
    return (
      <div
        className={`min-h-screen ${isDarkMode ? "bg-gradient-to-br from-gray-900 via-black to-gray-900" : "bg-gradient-to-br from-blue-50 via-white to-purple-50"} flex items-center justify-center font-body`}
      >
        <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="w-20 h-20 border-4 border-purple-500 border-t-transparent rounded-full mx-auto mb-6"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-2"
          >
            <h2
              className={`text-3xl font-bold font-heading bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent`}
            >
              Loading Portfolio...
            </h2>
            <p className={`${isDarkMode ? "text-white/60" : "text-gray-600"} font-body`}>Preparing something amazing</p>
          </motion.div>
        </motion.div>
      </div>
    )
  }

  return (
    <div
      className={`min-h-screen font-body ${isDarkMode ? "bg-gradient-to-br from-gray-900 via-black to-gray-800" : "bg-gradient-to-br from-blue-50 via-white to-purple-50"} relative overflow-x-hidden transition-all duration-500`}
    >
      <CustomCursor isDarkMode={isDarkMode} />
      <SoundEffects />
      <ParticleSystem isDarkMode={isDarkMode} />
      <FloatingElements scrollY={scrollY} isDarkMode={isDarkMode} />
      <LoadingTransitions />

      <ThemeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      <Header activeSection={activeSection} setActiveSection={setActiveSection} isDarkMode={isDarkMode} />

      <main className="relative z-10">
        <AnimatePresence mode="wait">
          {activeSection === "home" && (
            <motion.div
              key="home"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <HeroSection setActiveSection={setActiveSection} scrollY={scrollY} isDarkMode={isDarkMode} />
            </motion.div>
          )}

          {activeSection === "about" && (
            <motion.div
              key="about"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <AboutSection isDarkMode={isDarkMode} />
            </motion.div>
          )}

          {activeSection === "skills" && (
            <motion.div
              key="skills"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <SkillsSection isDarkMode={isDarkMode} />
            </motion.div>
          )}

          {activeSection === "education" && (
            <motion.div
              key="education"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <EducationSection isDarkMode={isDarkMode} />
            </motion.div>
          )}

          {activeSection === "experience" && (
            <motion.div
              key="experience"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <ExperienceSection isDarkMode={isDarkMode} />
            </motion.div>
          )}

          {activeSection === "projects" && (
            <motion.div
              key="projects"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <ProjectsSection setSelectedProject={setSelectedProject} isDarkMode={isDarkMode} />
            </motion.div>
          )}

          {activeSection === "certificates" && (
            <motion.div
              key="certificates"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <CertificatesSection setSelectedCertificate={setSelectedCertificate} isDarkMode={isDarkMode} />
            </motion.div>
          )}

          {activeSection === "achievements" && (
            <motion.div
              key="achievements"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <AchievementsSection isDarkMode={isDarkMode} />
            </motion.div>
          )}

          {activeSection === "contact" && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <ContactSection isDarkMode={isDarkMode} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} isDarkMode={isDarkMode} />
      <CertificateModal
        certificate={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
        isDarkMode={isDarkMode}
      />
    </div>
  )
}
