"use client"

import { motion } from "framer-motion"
import { ExternalLink, Calendar, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { Certificate } from "@/app/page"

interface CertificatesSectionProps {
  setSelectedCertificate: (certificate: Certificate) => void
}

const certificates: Certificate[] = [
  {
    id: "1",
    title: "Front End Development",
    issuer: "Red Symbol Technologies pvt. ltd.",
    date: "2024",
    description: "Comprehensive certification covering HTML, CSS, JavaScript",
    image: "/redsymbol.png?height=400&width=300",
    credentialUrl: "RedSymbol.pdf",
    skills: ["HTML5", "CSS3", "JavaScript"],
  },
 
  {
    id: "3",
    title: "Data Science and Analytics",
    issuer: "HP Life",
    date: "2024",
    description: " Data science and analytics practices, methodologies, and tools",
    image: "/hp.png?height=200&width=300",
    credentialUrl: "HP.pdf",
    skills: ["Python", "SQL", "Data Analysis", "Machine Learning", "Statistics", "Data Visualization"],
  },
  {
    id: "4",
    title: "Cyber Job Simulation",
    issuer: "Deloitte",
    date: "2025",
    description: "Completed a hands-on Cybersecurity Job Simulation, gaining practical experience in threat detection, incident response, and log analysis.",
    image: "/Deloitte.png?height=200&width=300",
    credentialUrl: "/Deloitte.pdf",
    skills: ["hreat detection, incident response, log analysis, cybersecurity fundamentals, and analytical thinking."],
  },
  {
    id: "5",
    title: "Smart India Hackathon 2024",
    issuer: "Jecrc Foundation",
    date: "2024",
    description: "Participated in the Smart India Hackathon 2024, a nationwide initiative to promote innovation and problem-solving among students.",
    image: "/SIH.png?height=200&width=300",
    credentialUrl: "SIH.pdf",
    skills: ["Technical skills", "Problem-solving", "Teamwork", "Innovation"],
  },
 
]

export function CertificatesSection({ setSelectedCertificate }: CertificatesSectionProps) {
  return (
    <section className="min-h-screen py-20 px-4">
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Certificates & Achievements
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Professional certifications and continuous learning achievements that validate my skills
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((certificate, index) => (
            <motion.div
              key={certificate.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group cursor-pointer"
              onClick={() => setSelectedCertificate(certificate)}
            >
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 hover:border-purple-500/30">
                <div className="relative overflow-hidden">
                  <img
                    src={certificate.image || "/placeholder.svg"}
                    alt={certificate.title}
                    className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-3 right-3">
                    <motion.div
                      whileHover={{ rotate: 15, scale: 1.1 }}
                      className="p-2 bg-yellow-500/20 backdrop-blur-sm rounded-full border border-yellow-500/30"
                    >
                      <Award className="w-4 h-4 text-yellow-400" />
                    </motion.div>
                  </div>
                  <div className="absolute bottom-3 left-3 flex items-center text-white/80 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {certificate.date}
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors line-clamp-2">
                    {certificate.title}
                  </h3>
                  <p className="text-purple-300 font-medium mb-3 text-sm">{certificate.issuer}</p>
                  <p className="text-white/60 text-sm mb-4 line-clamp-2">{certificate.description}</p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {certificate.skills.slice(0, 3).map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-white/10 text-white/80 text-xs px-2 py-1">
                        {skill}
                      </Badge>
                    ))}
                    {certificate.skills.length > 3 && (
                      <Badge variant="secondary" className="bg-white/10 text-white/80 text-xs px-2 py-1">
                        +{certificate.skills.length - 3}
                      </Badge>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white text-xs"
                      onClick={(e) => {
                        e.stopPropagation()
                        setSelectedCertificate(certificate)
                      }}
                    >
                      View Details
                    </Button>

                    {certificate.credentialUrl && (
                      <Button
                        asChild
                        size="sm"
                        variant="outline"
                        className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <a href={certificate.credentialUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </Button>
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
