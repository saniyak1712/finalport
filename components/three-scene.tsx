"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial, Sphere, Box, Torus, Octahedron } from "@react-three/drei"
import type * as THREE from "three"

function AnimatedSphere({
  position,
  color,
  speed,
}: { position: [number, number, number]; color: string; speed: number }) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * speed
      meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.5
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.5
    }
  })

  return (
    <Sphere ref={meshRef} position={position} args={[0.5, 32, 32]}>
      <meshStandardMaterial color={color} transparent opacity={0.6} />
    </Sphere>
  )
}

function FloatingGeometry() {
  const geometries = useMemo(
    () => [
      { Component: Box, args: [0.8, 0.8, 0.8], position: [-4, 2, -2], color: "#a855f7" },
      { Component: Torus, args: [0.6, 0.2, 16, 32], position: [4, -1, -3], color: "#ec4899" },
      { Component: Octahedron, args: [0.7], position: [-2, -3, -1], color: "#3b82f6" },
      { Component: Box, args: [0.5, 1.2, 0.5], position: [3, 3, -4], color: "#10b981" },
    ],
    [],
  )

  return (
    <>
      {geometries.map((geo, index) => (
        <geo.Component key={index} position={geo.position} args={geo.args}>
          <meshStandardMaterial color={geo.color} transparent opacity={0.4} />
        </geo.Component>
      ))}
    </>
  )
}

function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null)

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(2000 * 3)
    for (let i = 0; i < 2000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20
    }
    return positions
  }, [])

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x = state.clock.elapsedTime * 0.05
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  return (
    <Points ref={pointsRef} positions={particlesPosition} stride={3} frustumCulled={false}>
      <PointMaterial transparent color="#ffffff" size={0.05} sizeAttenuation={true} depthWrite={false} opacity={0.6} />
    </Points>
  )
}

export function ThreeScene() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#a855f7" />

        <ParticleField />
        <FloatingGeometry />

        <AnimatedSphere position={[2, 1, -2]} color="#a855f7" speed={0.5} />
        <AnimatedSphere position={[-3, -1, -1]} color="#ec4899" speed={0.8} />
        <AnimatedSphere position={[1, -2, -3]} color="#3b82f6" speed={0.3} />
        <AnimatedSphere position={[-1, 3, -2]} color="#10b981" speed={0.6} />
      </Canvas>
    </div>
  )
}
