import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { floatingIcons } from '../../data/floatingIcons'
import type { FloatingIconSection } from '../../types/visual'
import { MedicalIcon } from './MedicalIcon'

interface FloatingMedicalIconsProps {
  section: FloatingIconSection
}

export function FloatingMedicalIcons({ section }: FloatingMedicalIconsProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const icons = floatingIcons.filter((icon) => icon.section === section)
  if (icons.length === 0) return null

  return (
    <div ref={containerRef} className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {icons.map((icon) => (
        <FloatingIcon
          key={icon.id}
          icon={icon}
          scrollYProgress={scrollYProgress}
          reduceMotion={reduceMotion ?? false}
        />
      ))}
    </div>
  )
}

interface FloatingIconProps {
  icon: (typeof floatingIcons)[number]
  scrollYProgress: ReturnType<typeof useScroll>['scrollYProgress']
  reduceMotion: boolean
}

function FloatingIcon({ icon, scrollYProgress, reduceMotion }: FloatingIconProps) {
  const yParallax = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [icon.parallax * -40, icon.parallax * 40],
  )

  return (
    <motion.div
      className="absolute"
      style={{
        top: icon.top,
        left: icon.left,
        y: reduceMotion ? 0 : yParallax,
        opacity: icon.opacity,
        zIndex: Math.round(icon.parallax * 100),
      }}
    >
      <motion.div
        animate={reduceMotion ? undefined : { y: [0, -10, 0, 8, 0] }}
        transition={
          reduceMotion
            ? undefined
            : { duration: icon.floatDuration, repeat: Infinity, ease: 'easeInOut' }
        }
      >
        <MedicalIcon kind={icon.kind} size={icon.size} />
      </motion.div>
    </motion.div>
  )
}
