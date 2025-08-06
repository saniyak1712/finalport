"use client"

import { motion } from "framer-motion"
import { Code, Palette, Database, Globe, Smartphone, Zap } from "lucide-react"

const skills = [
  {
    icon: Code,
    title: "Programming Languages",
    description: "Proficient in Java, JavaScript, C++, and Python with strong problem-solving abilities.",
    technologies: ["Java", "JavaScript", "C++", "Python"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Expert in creating responsive, accessible web applications using modern frameworks.",
    technologies: ["React", "Next.js", "HTML5", "CSS3"],
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Understanding of user experience principles and creating intuitive interfaces.",
    technologies: ["Figma", "Adobe XD", "Responsive Design", "Prototyping"],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Database,
    title: "Data Structures & Algorithms",
    description: "Strong foundation in algorithms, data structures, and problem-solving techniques.",
    technologies: [" Arrays", "Linked Lists", "Trees", "Graphs", "Sorting Algorithms"],
    color: "from-orange-500 to-red-500",
  },
 
  
  
]

export function SkillsSection() {
  return (
    <section className="min-h-screen py-20 px-4">
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            My Skills
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 h-full">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${skill.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <skill.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {skill.title}
                </h3>

                <p className="text-white/70 mb-4 leading-relaxed">{skill.description}</p>

                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-sm border border-white/20 hover:bg-white/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
