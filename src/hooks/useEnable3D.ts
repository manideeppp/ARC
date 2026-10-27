import { useEffect, useState } from 'react'
import { useMediaQuery } from './useMediaQuery'
import { usePrefersReducedMotion } from './usePrefersReducedMotion'

function detectLowPowerDevice(): boolean {
  const nav = navigator as Navigator & { deviceMemory?: number }
  const lowMemory = nav.deviceMemory !== undefined && nav.deviceMemory < 4
  const lowCpu =
    navigator.hardwareConcurrency !== undefined && navigator.hardwareConcurrency <= 4
  return lowMemory || lowCpu
}

/** Desktop, capable devices only — mobile and low-power get the static fallback. */
export function useEnable3D(): boolean {
  const reducedMotion = usePrefersReducedMotion()
  const isMobile = useMediaQuery('(max-width: 767px)')
  const [lowPower, setLowPower] = useState(false)

  useEffect(() => {
    setLowPower(detectLowPowerDevice())
  }, [])

  return !reducedMotion && !isMobile && !lowPower
}
