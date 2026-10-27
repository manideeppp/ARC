import { ExtrudeGeometry, Shape, type BufferGeometry } from 'three'

function sampleHeartOutline(scale: number, segments: number): Shape {
  const shape = new Shape()
  let started = false

  for (let i = 0; i <= segments; i++) {
    const t = (i / segments) * Math.PI * 2
    const x = 16 * Math.pow(Math.sin(t), 3) * scale
    const y =
      (13 * Math.cos(t) -
        5 * Math.cos(2 * t) -
        2 * Math.cos(3 * t) -
        Math.cos(4 * t)) *
      scale
    if (!started) {
      shape.moveTo(x, y)
      started = true
    } else {
      shape.lineTo(x, y)
    }
  }

  shape.closePath()
  return shape
}

export function createHeartGeometry(): BufferGeometry {
  const shape = sampleHeartOutline(0.045, 64)
  const geometry = new ExtrudeGeometry(shape, {
    depth: 0.55,
    bevelEnabled: true,
    bevelThickness: 0.08,
    bevelSize: 0.06,
    bevelSegments: 4,
    curveSegments: 24,
  })
  geometry.center()
  return geometry
}
