"use client"

import { motion } from "framer-motion"
import { ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"

/**
 * A self-contained hero section for a coffee-shop landing page.
 * This matches the component imported in `app/page.tsx`.
 */
export function CoffeeHero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden">
      {/* Subtle bean-pattern background */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.03)_25%,rgba(255,255,255,0.03)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.03)_75%)] bg-[length:60px_60px]" />

      <div className="container relative z-10 mx-auto grid gap-12 px-6 py-24 lg:grid-cols-2">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h1 className="text-5xl font-extrabold leading-tight md:text-7xl">
            <span className="block bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
              START YOUR DAY
            </span>
            <span className="block bg-gradient-to-r from-amber-400 to-orange-600 bg-clip-text text-transparent">
              WITH COFFEE
            </span>
          </h1>

          <p className="max-w-lg text-lg leading-relaxed text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ratione sapiente explicabo ipsum modi
            debitis?
          </p>

          <Button
            size="lg"
            className="group relative inline-flex items-center gap-3 rounded-lg bg-gradient-to-r from-amber-600 to-orange-600 px-8 py-4 font-semibold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:from-amber-700 hover:to-orange-700"
          >
            <ShoppingBag className="h-5 w-5 transition-transform group-hover:rotate-12" />
            Shop Now
          </Button>
        </motion.div>

        {/* Cup illustration */}
        <motion.img
          initial={{ opacity: 0, x: 60, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          src="/placeholder.svg?height=520&width=320"
          alt="Coffee Cup"
          className="mx-auto w-64 select-none md:w-80"
        />
      </div>
    </section>
  )
}
