import { Canvas } from '@react-three/fiber'
import { ProceduralHeart } from './ProceduralHeart'

interface HeartCanvasProps {
  animate: boolean
}

export function HeartCanvas({ animate }: HeartCanvasProps) {
  return (
    <Canvas
      className="h-full w-full touch-none"
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 3.2], fov: 42 }}
      gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
    >
      <ambientLight intensity={0.55} />
      <directionalLight position={[4, 4, 5]} intensity={1.1} color="#ffffff" />
      <pointLight position={[-2, 1, 3]} intensity={1.4} color="#f59e0b" distance={8} />
      <pointLight position={[2, -2, 2]} intensity={0.6} color="#1e5aa8" />
      <ProceduralHeart animate={animate} />
    </Canvas>
  )
}
