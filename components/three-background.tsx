"use client"

import { useEffect, useRef } from "react"

export function ThreeBackground() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    let scene: any, camera: any, renderer: any, particles: any

    const init = () => {
      // Create scene
      scene = {
        add: () => {},
        background: null,
      }

      // Create camera
      camera = {
        position: { set: () => {} },
        aspect: window.innerWidth / window.innerHeight,
      }

      // Create renderer
      renderer = {
        setSize: () => {},
        render: () => {},
        domElement: document.createElement("canvas"),
      }

      // Create particles
      const particleCount = 100
      const positions = new Float32Array(particleCount * 3)

      for (let i = 0; i < particleCount * 3; i++) {
        positions[i] = (Math.random() - 0.5) * 2000
      }

      particles = {
        geometry: { attributes: { position: { array: positions } } },
        material: { color: 0x888888 },
        rotation: { x: 0, y: 0 },
      }

      scene.add(particles)

      if (mountRef.current) {
        mountRef.current.appendChild(renderer.domElement)
      }

      // Set canvas styles
      renderer.domElement.style.position = "fixed"
      renderer.domElement.style.top = "0"
      renderer.domElement.style.left = "0"
      renderer.domElement.style.width = "100%"
      renderer.domElement.style.height = "100%"
      renderer.domElement.style.zIndex = "1"
      renderer.domElement.style.pointerEvents = "none"
      renderer.domElement.style.opacity = "0.1"

      animate()
    }

    const animate = () => {
      requestAnimationFrame(animate)

      if (particles) {
        particles.rotation.x += 0.001
        particles.rotation.y += 0.002
      }

      renderer.render(scene, camera)
    }

    const handleResize = () => {
      if (camera && renderer) {
        camera.aspect = window.innerWidth / window.innerHeight
        renderer.setSize(window.innerWidth, window.innerHeight)
      }
    }

    init()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement)
      }
    }
  }, [])

  return <div ref={mountRef} className="fixed inset-0 pointer-events-none" />
}
