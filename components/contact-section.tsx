"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react"
import { ContactFormBackend } from "@/components/contact-form-backend"

interface ContactSectionProps {
  isDarkMode: boolean
}

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "saniyakhandelwal10446@gmail.com",
    href: "mailto:saniyakhandelwal10446@gmail.com",
    color: "from-red-500 to-pink-500",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91 8764670540",
    href: "tel:+918764670540",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Jaipur, Rajasthan",
    href: "#",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Github,
    title: "GitHub",
    value: "https://github.com/saniyak1712",
    href: "https://github.com/saniyak1712",
    color: "from-gray-600 to-gray-800",
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    value: "https://www.linkedin.com/in/saniya-khandelwal-26127b295/",
    href: "https://www.linkedin.com/in/saniya-khandelwal-26127b295/",
    color: "from-blue-600 to-blue-800",
  },
]

export function ContactSection({ isDarkMode }: ContactSectionProps) {
  return (
    <section className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-heading">
            Get In Touch
          </h2>
          <p className={`text-xl ${isDarkMode ? "text-white/70" : "text-gray-600"} max-w-2xl mx-auto font-body`}>
            Let's connect and discuss opportunities
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <div
              className={`${isDarkMode ? "bg-black/40" : "bg-white/40"} backdrop-blur-xl border ${isDarkMode ? "border-white/10" : "border-black/10"} rounded-2xl p-8 mb-8`}
            >
              <h3 className={`text-2xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"} mb-6 font-heading`}>
                Let's Connect
              </h3>
              <p className={`${isDarkMode ? "text-white/80" : "text-gray-700"} leading-relaxed mb-8 font-body`}>
                I'm always excited to connect with fellow developers, potential collaborators, and anyone interested in
                discussing technology, web development, or new opportunities. Feel free to reach out!
              </p>

              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={item.title}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ x: 10 }}
                    className={`flex items-center p-4 ${isDarkMode ? "bg-white/5" : "bg-black/5"} rounded-xl border ${isDarkMode ? "border-white/10" : "border-black/10"} ${isDarkMode ? "hover:bg-white/10" : "hover:bg-black/10"} transition-all duration-300 group cursor-none`}
                  >
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className={`${isDarkMode ? "text-white" : "text-gray-900"} font-semibold font-body`}>
                        {item.title}
                      </h4>
                      <p className={`${isDarkMode ? "text-white/70" : "text-gray-600"} text-sm font-body`}>
                        {item.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
            <ContactFormBackend isDarkMode={isDarkMode} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
