import { impactStats } from '../../data/impactStats'
import type { ImpactStat } from '../../types/impact'
import { useAnimatedCounter } from '../../hooks/useAnimatedCounter'
import { useInView } from '../../hooks/useInView'
import { GlassCard } from '../ui/GlassCard'
import { SectionBackground } from '../ui/SectionBackground'
import { FloatingMedicalIcons } from '../visual/FloatingMedicalIcons'

function ImpactCard({ stat, active }: { stat: ImpactStat; active: boolean }) {
  const count = useAnimatedCounter(stat.value, active)

  return (
    <GlassCard className="p-6 text-center">
      <p className="text-3xl font-bold tabular-nums text-arc-blue sm:text-4xl">
        {stat.prefix}
        {count.toLocaleString('en-IN')}
        {stat.suffix}
      </p>
      <p className="mt-2 text-sm font-medium text-arc-navy/75">{stat.label}</p>
    </GlassCard>
  )
}

export function Impact() {
  const { ref, inView } = useInView<HTMLDivElement>(0.25)

  return (
    <SectionBackground variant="c" ariaLabelledby="impact-heading">
      <FloatingMedicalIcons section="impact" />
      <div ref={ref} className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id="impact-heading" className="sr-only">Our impact</h2>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-5">
          {impactStats.map((stat) => (
            <ImpactCard key={stat.id} stat={stat} active={inView} />
          ))}
        </div>
      </div>
    </SectionBackground>
  )
}
