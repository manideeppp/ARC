import { trustContent } from '../../data/trust'
import { SectionHeading } from '../ui/SectionHeading'
import { SectionBackground } from '../ui/SectionBackground'
import { VerifiedBadge } from '../ui/VerifiedBadge'
import { FloatingMedicalIcons } from '../visual/FloatingMedicalIcons'

export function Trust() {
  return (
    <SectionBackground variant="b" id="trust">
      <FloatingMedicalIcons section="trust" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Trust & transparency"
          title="Registered, accountable, open"
          subtitle={trustContent.intro}
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <ul className="space-y-4">
            {trustContent.registrations.map((reg) => (
              <li key={reg.id} className="glass-card p-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="font-semibold text-arc-navy">{reg.label}</p>
                  {reg.verified && <VerifiedBadge />}
                </div>
                <p className="mt-2 font-mono text-sm text-arc-navy/80">{reg.value}</p>
              </li>
            ))}
            <li className="rounded-2xl border border-dashed border-arc-blue/20 bg-white/50 p-5 text-sm text-arc-navy/75 backdrop-blur-sm">
              {trustContent.taxNote}
            </li>
          </ul>

          <div className="glass-card p-6">
            <h3 className="text-lg font-semibold text-arc-navy">{trustContent.donationUseTitle}</h3>
            <ul className="mt-6 space-y-4">
              {trustContent.donationUse.map((item) => (
                <li key={item.id}>
                  <div className="mb-1 flex justify-between text-sm">
                    <span className="text-arc-navy/85">{item.label}</span>
                    <span className="font-semibold text-arc-blue">{item.percentage}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-white/80">
                    <div
                      className="h-full rounded-full bg-arc-blue"
                      style={{ width: `${item.percentage}%` }}
                      role="presentation"
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </SectionBackground>
  )
}
