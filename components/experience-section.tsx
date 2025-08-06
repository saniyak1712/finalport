"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, CheckCircle, Code, Database, Globe } from "lucide-react"

const experiences = [
  {
    title: "MERN Stack Developer Intern",
    company: "Linux World Informatics Pvt Ltd",
    location: "Jaipur, Rajasthan",
    period: "16 June 2025 - 31 July 2025",
    type: "Current Internship",
    status: "ongoing",
    responsibilities: [
      "Developing full-stack web applications using MongoDB, Express.js, React, and Node.js",
      "Building responsive user interfaces with React and modern CSS frameworks",
      "Implementing RESTful APIs and database integration with MongoDB",
      "Collaborating with senior developers on real-world projects",
      "Learning industry best practices for code quality and deployment",
      "Working with version control systems and agile development methodologies",
    ],
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "JavaScript", "Git"],
    icon: Code,
  },
  {
    title: "Web Development Intern",
    company: "Tech Solutions Pvt. Ltd.",
    location: "Jaipur, Rajasthan",
    period: "Jun 2024 - Aug 2024",
    type: "Completed Internship",
    status: "completed",
    responsibilities: [
      "Developed responsive web applications using HTML5, CSS3, and JavaScript",
      "Collaborated with senior developers to implement user interface designs",
      "Participated in code reviews and learned best practices in web development",
      "Gained hands-on experience with version control systems and team collaboration",
      "Contributed to improving website performance and user experience",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Git", "Responsive Design"],
    icon: Globe,
  },
  {
    title: "Student Developer",
    company: "Personal Projects",
    location: "Remote",
    period: "2023 - Present",
    type: "Self-Employed",
    status: "ongoing",
    responsibilities: [
      "Built multiple web applications showcasing front-end development skills",
      "Created responsive portfolios and landing pages with modern design principles",
      "Implemented interactive features using vanilla JavaScript and modern CSS",
      "Focused on accessibility and cross-browser compatibility",
      "Continuously learning new technologies and frameworks",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    icon: Database,
  },
]

export function ExperienceSection() {
  return (
    <section className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Professional experiences and practical learning journey
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="group relative"
            >
              <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 hover:bg-black/60 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 hover:border-purple-500/30">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center mb-3">
                      <div className="p-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl mr-4 border border-purple-500/30">
                        <experience.icon className="w-6 h-6 text-purple-400" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                          {experience.title}
                        </h3>
                        <p className="text-purple-300 font-semibold text-lg">{experience.company}</p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-white/60 mb-4">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {experience.location}
                      </div>
                      <span className="hidden sm:inline">•</span>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {experience.period}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 md:mt-0 flex flex-col gap-2">
                    <span
                      className={`px-4 py-2 rounded-full text-sm font-medium border ${
                        experience.status === "ongoing"
                          ? "bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-300 border-green-500/30"
                          : "bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 border-blue-500/30"
                      }`}
                    >
                      {experience.type}
                    </span>
                    {experience.status === "ongoing" && (
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                        className="flex items-center justify-center"
                      >
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-2" />
                        <span className="text-green-400 text-xs font-medium">Currently Active</span>
                      </motion.div>
                    )}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    Key Responsibilities & Achievements
                  </h4>
                  <ul className="space-y-3">
                    {experience.responsibilities.map((responsibility, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2 + idx * 0.1 }}
                        className="flex items-start text-white/80"
                      >
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                        {responsibility}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.2 + techIndex * 0.05 }}
                        className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-white/80 rounded-full text-sm border border-purple-500/30 hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300"
                      >
                        {tech}
                      </motion.span>
                    ))}
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
