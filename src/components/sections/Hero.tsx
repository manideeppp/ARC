import { useReducedMotion } from 'framer-motion'
import { hero } from '../../data/site'
import { HeroHeartVisual } from '../three/HeroHeartVisual'
import { FloatingMedicalIcons } from '../visual/FloatingMedicalIcons'
import { ArcMark } from '../ui/ArcMark'
import { Button } from '../ui/Button'

export function Hero() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="relative overflow-hidden mesh-bg-a pb-12 pt-10 sm:pb-14 sm:pt-12">
      <FloatingMedicalIcons section="hero" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12">
        <div className="text-left">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/70 px-4 py-1.5 text-sm font-medium text-arc-blue shadow-sm backdrop-blur-sm">
            <ArcMark className="h-3 w-6" />
            {hero.tagline}
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-arc-navy sm:text-5xl lg:text-[3.1rem]">
            {hero.headline}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-arc-navy/85">{hero.mission}</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button variant="outline" href="#need-help">Need Help?</Button>
            <Button variant="donate" href="#donate">Donate</Button>
          </div>
          <p className="mt-5 flex items-start gap-2 text-sm font-medium text-arc-navy/85">
            <svg
              className="mt-0.5 h-4 w-4 shrink-0 text-arc-green"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
            <span>{hero.trustLine}</span>
          </p>
        </div>

        <div className="hidden md:block lg:justify-self-end">
          <HeroHeartVisual animate={!reduceMotion} />
        </div>
      </div>
    </section>
  )
}
