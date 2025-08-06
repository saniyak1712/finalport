"use client"

import { motion } from "framer-motion"
import { Trophy, Star, Users, BookOpen, Code, Award } from "lucide-react"

const achievements = [
  {
    icon: Trophy,
    title: "Academic Excellence",
    description:
      "Maintaining a CGPA of 8.99 throughout my B.Tech program, demonstrating consistent academic performance and dedication to learning.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Users,
    title: "JECRC Toastmasters",
    description:
      "Active member of JECRC Toastmasters Club, developing public speaking and leadership skills through regular participation and presentations.",
    color: "from-blue-500 to-purple-500",
  },
  {
    icon: Code,
    title: "Technical Projects",
    description:
      "Successfully completed multiple web development projects, showcasing proficiency in front-end technologies and modern design principles.",
    color: "from-green-500 to-teal-500",
  },
  {
    icon: Star,
    title: "Leadership Skills",
    description:
      "Developed strong communication and leadership abilities through active participation in college clubs and extracurricular activities.",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description:
      "Committed to staying updated with latest technologies and industry trends through self-learning and online courses.",
    color: "from-indigo-500 to-blue-500",
  },
  {
    icon: Award,
    title: "Team Collaboration",
    description:
      "Proven ability to work effectively in team environments, contributing to group projects and collaborative development initiatives.",
    color: "from-purple-500 to-pink-500",
  },
]

export function AchievementsSection() {
  return (
    <section className="min-h-screen py-20 px-4">
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Achievements
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">Recognition and accomplishments in my journey</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 h-full text-center">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${achievement.color} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}
                >
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                  {achievement.title}
                </h3>

                <p className="text-white/70 leading-relaxed">{achievement.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
