import { lazy, Suspense } from 'react'
import { useEnable3D } from '../../hooks/useEnable3D'
import { useInView } from '../../hooks/useInView'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

const HeartCanvas = lazy(() =>
  import('./HeartCanvas').then((mod) => ({ default: mod.HeartCanvas })),
)

interface HeroHeartVisualProps {
  animate: boolean
}

function HeroHeartFallback() {
  return (
    <img
      src="/images/hero-heart-fallback.svg"
      alt=""
      className="relative z-10 h-full w-full max-w-[min(100%,320px)] object-contain drop-shadow-lg"
      width={320}
      height={320}
      decoding="async"
    />
  )
}

export function HeroHeartVisual({ animate }: HeroHeartVisualProps) {
  const enable3D = useEnable3D()
  const reducedMotion = usePrefersReducedMotion()
  const { ref, inView } = useInView<HTMLDivElement>(0.15)
  const showCanvas = enable3D && inView

  return (
    <div
      ref={ref}
      className="relative mx-auto flex aspect-square w-full max-w-md items-center justify-center"
      aria-hidden="true"
    >
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 400 400"
        fill="none"
      >
        <path
          d="M30 280 Q200 60 370 280"
          stroke="#1E5AA8"
          strokeOpacity="0.22"
          strokeWidth="10"
          strokeLinecap="round"
        />
        <path
          d="M50 275 Q200 90 350 275"
          stroke="#ffffff"
          strokeOpacity="0.65"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>

      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-arc-amber/25 blur-3xl"
      />

      <div className="relative z-10 flex h-[min(100%,340px)] w-[min(100%,340px)] items-center justify-center">
        {showCanvas ? (
          <Suspense fallback={<HeroHeartFallback />}>
            <HeartCanvas animate={animate && !reducedMotion} />
          </Suspense>
        ) : (
          <HeroHeartFallback />
        )}
      </div>
    </div>
  )
}
