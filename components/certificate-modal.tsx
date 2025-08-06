"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, ExternalLink, Calendar, Award, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { Certificate } from "@/app/page"

interface CertificateModalProps {
  certificate: Certificate | null
  onClose: () => void
}

export function CertificateModal({ certificate, onClose }: CertificateModalProps) {
  if (!certificate) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0, rotateY: -15 }}
          animate={{ scale: 1, opacity: 1, rotateY: 0 }}
          exit={{ scale: 0.8, opacity: 0, rotateY: 15 }}
          transition={{ type: "spring", bounce: 0.3 }}
          className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="absolute top-4 right-4 z-10 text-white hover:bg-white/20 rounded-full"
            >
              <X className="h-6 w-6" />
            </Button>

            <div className="relative overflow-hidden rounded-t-3xl">
              <img
                src={certificate.image || "/placeholder.svg"}
                alt={certificate.title}
                className="w-full h-48 md:h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute top-4 left-4">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3 }}
                  className="p-3 bg-yellow-500/20 backdrop-blur-sm rounded-full border border-yellow-500/30"
                >
                  <Award className="w-6 h-6 text-yellow-400" />
                </motion.div>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{certificate.title}</h2>
                <div className="flex items-center justify-between">
                  <p className="text-purple-300 font-medium text-lg">{certificate.issuer}</p>
                  <div className="flex items-center text-white/80">
                    <Calendar className="w-4 h-4 mr-1" />
                    {certificate.date}
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 md:p-8">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                  Certificate Details
                </h3>
                <p className="text-white/80 leading-relaxed">{certificate.description}</p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-bold text-white mb-3">Skills Covered</h3>
                <div className="flex flex-wrap gap-2">
                  {certificate.skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Badge
                        variant="secondary"
                        className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-white border border-purple-500/30 hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300"
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </div>

              {certificate.credentialUrl && (
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                >
                  <a href={certificate.credentialUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Credential
                  </a>
                </Button>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
