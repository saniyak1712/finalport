"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, CheckCircle, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

interface ContactFormProps {
  isDarkMode: boolean
}

export function ContactFormBackend({ isDarkMode }: ContactFormProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Here you would typically send the data to your backend
      console.log("Form submitted:", formData)

      setSubmitStatus("success")
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus("idle"), 5000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div
      className={`${isDarkMode ? "bg-black/40" : "bg-white/40"} backdrop-blur-xl border ${isDarkMode ? "border-white/10" : "border-black/10"} rounded-2xl p-8`}
    >
      <h3 className={`text-2xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"} mb-6 font-heading`}>
        Send a Message
      </h3>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className={`block ${isDarkMode ? "text-white/80" : "text-gray-700"} text-sm font-medium mb-2`}>
              First Name
            </label>
            <Input
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Your first name"
              required
              className={`${isDarkMode ? "bg-white/10 border-white/20 text-white placeholder:text-white/50" : "bg-black/5 border-black/20 text-gray-900 placeholder:text-gray-500"} focus:border-purple-500 cursor-none`}
            />
          </div>
          <div>
            <label className={`block ${isDarkMode ? "text-white/80" : "text-gray-700"} text-sm font-medium mb-2`}>
              Last Name
            </label>
            <Input
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Your last name"
              required
              className={`${isDarkMode ? "bg-white/10 border-white/20 text-white placeholder:text-white/50" : "bg-black/5 border-black/20 text-gray-900 placeholder:text-gray-500"} focus:border-purple-500 cursor-none`}
            />
          </div>
        </div>

        <div>
          <label className={`block ${isDarkMode ? "text-white/80" : "text-gray-700"} text-sm font-medium mb-2`}>
            Email
          </label>
          <Input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your.email@example.com"
            required
            className={`${isDarkMode ? "bg-white/10 border-white/20 text-white placeholder:text-white/50" : "bg-black/5 border-black/20 text-gray-900 placeholder:text-gray-500"} focus:border-purple-500 cursor-none`}
          />
        </div>

        <div>
          <label className={`block ${isDarkMode ? "text-white/80" : "text-gray-700"} text-sm font-medium mb-2`}>
            Subject
          </label>
          <Input
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="What's this about?"
            required
            className={`${isDarkMode ? "bg-white/10 border-white/20 text-white placeholder:text-white/50" : "bg-black/5 border-black/20 text-gray-900 placeholder:text-gray-500"} focus:border-purple-500 cursor-none`}
          />
        </div>

        <div>
          <label className={`block ${isDarkMode ? "text-white/80" : "text-gray-700"} text-sm font-medium mb-2`}>
            Message
          </label>
          <Textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell me about your project or just say hello!"
            rows={5}
            required
            className={`${isDarkMode ? "bg-white/10 border-white/20 text-white placeholder:text-white/50" : "bg-black/5 border-black/20 text-gray-900 placeholder:text-gray-500"} focus:border-purple-500 resize-none cursor-none`}
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 cursor-none disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
            />
          ) : (
            <Send className="w-5 h-5 mr-2" />
          )}
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>

        {submitStatus === "success" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center text-green-400 text-sm"
          >
            <CheckCircle className="w-4 h-4 mr-2" />
            Message sent successfully! I'll get back to you soon.
          </motion.div>
        )}

        {submitStatus === "error" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center text-red-400 text-sm"
          >
            <AlertCircle className="w-4 h-4 mr-2" />
            Failed to send message. Please try again.
          </motion.div>
        )}
      </form>
    </div>
  )
}
