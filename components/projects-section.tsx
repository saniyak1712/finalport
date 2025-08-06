"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { Project } from "@/app/page"

interface ProjectsSectionProps {
  setSelectedProject: (project: Project) => void
  isDarkMode: boolean
}

const projects: Project[] = [
  {
    id: "1",
    title: "Coffee Shop Website",
    description: "A modern, responsive coffee shop website with beautiful animations and interactive features.",
    longDescription:
      "A fully responsive coffee shop website built with HTML, CSS, and JavaScript. Features include smooth scrolling, interactive menu cards, contact forms, and beautiful animations. The design focuses on creating an inviting atmosphere that reflects the warmth and comfort of a coffee shop experience.",
    image:
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Animations"],
    features: [
      "Responsive design that works on all devices",
      "Interactive menu with hover effects",
      "Smooth scrolling navigation",
      "Contact form with validation",
      "Beautiful animations and transitions",
      "Modern and clean design aesthetic",
    ],
    demoUrl: "https://saniyak1712.github.io/coffee-shop/",
    githubUrl: "https://github.com/saniyak1712/coffee-shop",
    category: "Web Development",
  },
  {
    id: "2",
    title: "Personal Portfolio Website",
    description: "My personal portfolio showcasing my skills, projects, and achievements with modern design.",
    longDescription:
      "A comprehensive personal portfolio website built with modern web technologies. This portfolio showcases my skills, projects, education, and professional experience. It features a clean, professional design with smooth animations and interactive elements that create an engaging user experience.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    features: [
      "Modern and professional design",
      "Smooth animations and transitions",
      "Responsive layout for all devices",
      "Interactive project showcases",
      "Skills and experience sections",
      "Contact form integration",
    ],
    demoUrl: "https://v0-portfolio-website-upgrade-liart.vercel.app/",
    githubUrl: "https://github.com/saniyak1712/portfolio",
    category: "Portfolio",
  },
  {
    id: "3",
    title: "Task Management System",
    description:
      "A collaborative task management application for teams with real-time updates and intuitive interface.",
    longDescription:
      "A comprehensive task management system designed for team collaboration. Built with modern web technologies, it allows teams to create, assign, and track tasks efficiently. The application features real-time updates, user authentication, and an intuitive drag-and-drop interface for better productivity.",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Socket.io"],
    features: [
      "Real-time task updates and notifications",
      "Drag-and-drop task management",
      "User authentication and authorization",
      "Team collaboration features",
      "Progress tracking and analytics",
      "Responsive design for mobile and desktop",
    ],
    demoUrl: "https://task-manager-demo.vercel.app",
    githubUrl: "https://github.com/saniyak1712/task-manager",
    category: "Full Stack",
  },
  {
    id: "4",
    title: "Multi-Utility Dashboard",
    description: "Web App integrating tools like photo capture, video recording, file conversion, and legal/guidance support into a single interactive platform..",
    longDescription:
      "A versatile web application that combines multiple utilities into one platform. Features include photo capture, video recording, geolocation access, email sending, weather information, and WhatsApp messaging. Built with modern web technologies, it provides a seamless user experience with a focus on utility and functionality.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    technologies: ["HTML", "Css", "JavaScript", "Open weather API", "Whatsapp web API"],
    features: [
      " Camera Integration:	Capture photos from your webcam and download them",
      "Video Recording:	Record and preview video using the MediaRecorder API",
      "Send Photo/Video via Email:	Send captured media to any email address using a backend API",
      " Geolocation Access:	Detect and display user's current latitude and longitude",
      "Live Google Map: Launch	Open current location or nearby stores in Google Maps",
      "WhatsApp Messaging: Send a pre-filled message to any WhatsApp number",
      "Email Sender	Send custom emails from the UI via API",
      "Weather Information:	Display current weather data for any location using OpenWeatherMap API",
    ],
    demoUrl: "https://saniyak1712.github.io/utility-hub/",
    githubUrl: "https://saniyak1712.github.io/utility-hub/",
    category: "Full-Stack Utility Web Application",
  },
  {
    id: "5",
    title: "Weather Dashboard",
    description: "A comprehensive weather dashboard with real-time data, forecasts, and interactive maps.",
    longDescription:
      "A modern weather dashboard that provides real-time weather information, 7-day forecasts, and interactive weather maps. Built with React and integrated with multiple weather APIs, it offers detailed weather analytics, location-based services, and customizable dashboard widgets for a personalized experience.",
    image:
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "Weather API", "Chart.js", "Geolocation API", "CSS3"],
    features: [
      "Real-time weather data and updates",
      "7-day weather forecast",
      "Interactive weather maps",
      "Location-based weather services",
      "Weather alerts and notifications",
      "Customizable dashboard widgets",
    ],
    demoUrl: "https://saniyak1712.github.io/weather/",
    githubUrl: "https://saniyak1712.github.io/weather/",
    category: "Data Visualization",
  },
  // {
  //   id: "6",
  //   title: "Social Media Dashboard",
  //   description: "A comprehensive social media management dashboard with analytics and scheduling features.",
  //   longDescription:
  //     "A powerful social media management dashboard that helps businesses and individuals manage their social media presence across multiple platforms. Features include post scheduling, analytics tracking, engagement monitoring, and comprehensive reporting tools for better social media strategy.",
  //   image:
  //     "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  //   technologies: ["React", "Node.js", "MongoDB", "Social Media APIs", "Chart.js"],
  //   features: [
  //     "Multi-platform social media management",
  //     "Post scheduling and automation",
  //     "Analytics and engagement tracking",
  //     "Comprehensive reporting dashboard",
  //     "Content calendar management",
  //     "Team collaboration features",
  //   ],
  //   demoUrl: "https://social-dashboard-demo.vercel.app",
  //   githubUrl: "https://github.com/saniyak1712/social-media-dashboard",
  //   category: "Social Media",
  // },
]

export function ProjectsSection({ setSelectedProject, isDarkMode }: ProjectsSectionProps) {
  return (
    <section className="min-h-screen py-20 px-4">
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-heading">
            My Projects
          </h2>
          <p className={`text-xl ${isDarkMode ? "text-white/70" : "text-gray-600"} max-w-2xl mx-auto font-body`}>
            Showcasing my development skills through practical applications and innovative solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6, type: "spring" }}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.3 },
              }}
              className="group relative"
            >
              <div
                className={`${isDarkMode ? "bg-white/5 border-white/10 hover:bg-white/10" : "bg-black/5 border-black/10 hover:bg-black/10"} backdrop-blur-xl border rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20`}
              >
                <div className="relative overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-700"
                    whileHover={{ scale: 1.1 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Badge className="bg-purple-500/80 text-white">{project.category}</Badge>
                  </div>

                  {/* Floating elements */}
                  <motion.div
                    className="absolute top-2 left-2 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                    animate={{
                      y: [0, -10, 0],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  />
                </div>

                <div className="p-6">
                  <h3
                    className={`text-xl font-bold ${isDarkMode ? "text-white group-hover:text-purple-300" : "text-gray-900 group-hover:text-purple-600"} mb-3 transition-colors font-heading`}
                  >
                    {project.title}
                  </h3>
                  <p className={`${isDarkMode ? "text-white/70" : "text-gray-600"} mb-4 line-clamp-2 font-body`}>
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <motion.div
                        key={tech}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: index * 0.1 + techIndex * 0.1 }}
                        whileHover={{ scale: 1.1 }}
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
                  </div>

                  <div className="flex gap-3">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        onClick={() => setSelectedProject(project)}
                        size="sm"
                        className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white cursor-none font-body"
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                    </motion.div>

                    {project.demoUrl && (
                      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
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
                      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
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
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
