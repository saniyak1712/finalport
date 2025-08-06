"use client"

import { motion } from "framer-motion"
import { GraduationCap, MapPin, Award } from "lucide-react"

const educationData = [
  {
    year: "2025",
    degree: "B.Tech in Information Technology",
    institution: "Jaipur Engineering College and Research Centre",
    grade: "CGPA: 8.99",
    description:
      "Currently in pre-final year, focusing on advanced web technologies, software engineering, and computer science fundamentals.",
    location: "Jaipur, Rajasthan",
  },
  {
    year: "2023",
    degree: "XII (CBSE)",
    grade: "Percentage: 90.4%",
    institution: "Vidhya Sagar Senior Secondary School",
    description: "Completed higher secondary education with focus on Mathematics, Physics, and Chemistry.",
    location: "Jaipur, Rajasthan",
  },
  {
    year: "2021",
    degree: "X (CBSE)",
    grade: "Percentage: 94.2%",
    institution: "Maheshwari Girls Public School",
    description: "Achieved excellent academic performance with strong foundation in core subjects.",
    location: "Jaipur, Rajasthan",
  },
]

export function EducationSection() {
  return (
    <section className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">My academic journey and achievements</p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-blue-500 transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transform md:-translate-x-1/2 z-10 shadow-lg shadow-purple-500/50" />

                {/* Content card */}
                <div
                  className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                    index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                  }`}
                >
                  <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-bold">
                        {item.year}
                      </span>
                      <GraduationCap className="w-6 h-6 text-purple-400" />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2">{item.degree}</h3>

                    <p className="text-purple-300 font-medium mb-2">{item.institution}</p>

                    <div className="flex items-center text-white/60 text-sm mb-3">
                      <MapPin className="w-4 h-4 mr-1" />
                      {item.location}
                    </div>

                    <div className="flex items-center text-green-400 font-semibold mb-3">
                      <Award className="w-4 h-4 mr-2" />
                      {item.grade}
                    </div>

                    <p className="text-white/80 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
