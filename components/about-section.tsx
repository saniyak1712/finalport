"use client"

import { motion } from "framer-motion"
import { User, GraduationCap, Heart, Mic } from "lucide-react"

export function AboutSection() {
  return (
    <section className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Get to know more about my journey, passion, and what drives me
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <User className="w-6 h-6 text-purple-400 mr-3" />
                <h3 className="text-xl font-bold text-white">Who I Am</h3>
              </div>
              <p className="text-white/80 leading-relaxed">
                Hello! I'm Saniya Khandelwal, a passionate Information Technology student with a strong foundation in
                programming and web development. Currently pursuing my B.Tech from Jaipur Engineering College and
                Research Centre with an impressive CGPA of 8.99.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <GraduationCap className="w-6 h-6 text-blue-400 mr-3" />
                <h3 className="text-xl font-bold text-white">My Journey</h3>
              </div>
              <p className="text-white/80 leading-relaxed">
                I love creating responsive web applications and have hands-on experience in front-end technologies. My
                journey in technology began with curiosity and has evolved into a deep passion for building solutions
                that make a difference.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <Mic className="w-6 h-6 text-green-400 mr-3" />
                <h3 className="text-xl font-bold text-white">Beyond Coding</h3>
              </div>
              <p className="text-white/80 leading-relaxed">
                Beyond coding, I'm also passionate about public speaking as an active member of JECRC Toastmasters Club,
                where I develop my communication and leadership skills. I also enjoy singing and cooking, which help me
                maintain creativity and balance in my life.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <Heart className="w-6 h-6 text-pink-400 mr-3" />
                <h3 className="text-xl font-bold text-white">My Philosophy</h3>
              </div>
              <p className="text-white/80 leading-relaxed">
                I believe in continuous learning and am always excited to take on new challenges that push my boundaries
                and help me grow as a developer. Every project is an opportunity to learn something new and create
                something meaningful.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
