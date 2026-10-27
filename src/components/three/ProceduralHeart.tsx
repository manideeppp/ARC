import { useFrame } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import type { Mesh } from 'three'
import { createHeartGeometry } from './heartGeometry'

interface ProceduralHeartProps {
  animate: boolean
}

export function ProceduralHeart({ animate }: ProceduralHeartProps) {
  const meshRef = useRef<Mesh>(null)
  const geometry = useMemo(() => createHeartGeometry(), [])

  useFrame((_, delta) => {
    const mesh = meshRef.current
    if (!mesh || !animate) return
    mesh.rotation.y += delta * 0.45
    mesh.rotation.x = Math.sin(performance.now() * 0.00035) * 0.06
  })

  return (
    <mesh ref={meshRef} geometry={geometry} scale={1.15}>
      <meshPhysicalMaterial
        color="#5ba3e0"
        metalness={0.2}
        roughness={0.15}
        clearcoat={1}
        clearcoatRoughness={0.12}
        emissive="#1e5aa8"
        emissiveIntensity={0.12}
        reflectivity={0.9}
      />
    </mesh>
  )
}
