"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { Canvas, useFrame } from "@react-three/fiber"
import { Box, Float } from "@react-three/drei"
import { ExternalLink, Github, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { Project } from "@/app/page"

function Floating3DCard() {
  const meshRef = useRef<any>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.05
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.1} floatIntensity={0.2}>
      <Box ref={meshRef} args={[2, 1.2, 0.1]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#a855f7" transparent opacity={0.1} />
      </Box>
    </Float>
  )
}

interface ProjectCard3DProps {
  project: Project
  index: number
  setSelectedProject: (project: Project) => void
  isDarkMode: boolean
}

export function ProjectCard3D({ project, index, setSelectedProject, isDarkMode }: ProjectCard3DProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100, rotateX: -30 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ delay: index * 0.2, duration: 0.8, type: "spring" }}
      whileHover={{
        scale: 1.05,
        rotateY: 5,
        rotateX: 5,
        transition: { duration: 0.3 },
      }}
      className="group relative perspective-1000"
    >
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden">
        <Canvas camera={{ position: [0, 0, 3] }}>
          <ambientLight intensity={0.3} />
          <pointLight position={[2, 2, 2]} intensity={0.8} color="#a855f7" />
          <Floating3DCard />
        </Canvas>
      </div>

      <div
        className={`relative ${isDarkMode ? "bg-black/20" : "bg-white/20"} backdrop-blur-xl border ${isDarkMode ? "border-white/10" : "border-black/10"} rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/30 transform-gpu`}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        <div className="relative overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover transition-transform duration-700"
            whileHover={{ scale: 1.1, rotateZ: 2 }}
          />

          {/* 3D Overlay Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-purple-500/30 via-transparent to-pink-500/30"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />

          <motion.div
            className="absolute top-4 right-4"
            initial={{ rotateY: -90, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.5 }}
          >
            <Badge className="bg-purple-500/80 text-white backdrop-blur-sm">{project.category}</Badge>
          </motion.div>

          {/* Floating 3D Elements */}
          <motion.div
            className="absolute top-2 left-2 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
            animate={{
              y: [0, -10, 0],
              rotateZ: [0, 180, 360],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </div>

        <motion.div className="p-6" style={{ transform: "translateZ(20px)" }}>
          <motion.h3
            className={`text-xl font-bold ${isDarkMode ? "text-white group-hover:text-purple-300" : "text-gray-900 group-hover:text-purple-600"} mb-3 transition-colors font-heading`}
            whileHover={{ scale: 1.05, rotateX: 5 }}
          >
            {project.title}
          </motion.h3>

          <motion.p
            className={`${isDarkMode ? "text-white/70" : "text-gray-600"} mb-4 line-clamp-2 font-body`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.3 }}
          >
            {project.description}
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-2 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.4 }}
          >
            {project.technologies.slice(0, 3).map((tech, techIndex) => (
              <motion.div
                key={tech}
                initial={{ scale: 0, rotateZ: -180 }}
                animate={{ scale: 1, rotateZ: 0 }}
                transition={{ delay: index * 0.1 + techIndex * 0.1 + 0.5 }}
                whileHover={{ scale: 1.1, rotateZ: 5 }}
              >
                <Badge
                  variant="secondary"
                  className={`${isDarkMode ? "bg-white/10 text-white/80 hover:bg-white/20" : "bg-black/10 text-gray-700 hover:bg-black/20"} font-body cursor-pointer`}
                >
                  {tech}
                </Badge>
              </motion.div>
            ))}
            {project.technologies.length > 3 && (
              <Badge
                variant="secondary"
                className={`${isDarkMode ? "bg-white/10 text-white/80" : "bg-black/10 text-gray-700"} font-body`}
              >
                +{project.technologies.length - 3} more
              </Badge>
            )}
          </motion.div>

          <motion.div
            className="flex gap-3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.6 }}
          >
            <motion.div whileHover={{ scale: 1.05, rotateZ: 2 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => setSelectedProject(project)}
                size="sm"
                className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white cursor-none font-body shadow-lg hover:shadow-purple-500/25"
              >
                <Eye className="w-4 h-4 mr-2" />
                View Details
              </Button>
            </motion.div>

            {project.demoUrl && (
              <motion.div whileHover={{ scale: 1.1, rotateY: 10 }} whileTap={{ scale: 0.9 }}>
                <Button
                  asChild
                  size="sm"
                  variant="outline"
                  className={`${isDarkMode ? "border-white/20 text-white hover:bg-white/10" : "border-black/20 text-gray-900 hover:bg-black/10"} bg-transparent cursor-none`}
                >
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </motion.div>
            )}

            {project.githubUrl && (
              <motion.div whileHover={{ scale: 1.1, rotateY: -10 }} whileTap={{ scale: 0.9 }}>
                <Button
                  asChild
                  size="sm"
                  variant="outline"
                  className={`${isDarkMode ? "border-white/20 text-white hover:bg-white/10" : "border-black/20 text-gray-900 hover:bg-black/10"} bg-transparent cursor-none`}
                >
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4" />
                  </a>
                </Button>
              </motion.div>
            )}
          </motion.div>
        </motion.div>

        {/* 3D Glow Effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ transform: "translateZ(-10px)" }}
        />
      </div>
    </motion.div>
  )
}
