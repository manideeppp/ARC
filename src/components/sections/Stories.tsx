import { testimonials } from '../../data/testimonials'
import { SectionHeading } from '../ui/SectionHeading'
import { PlaceholderImage } from '../ui/PlaceholderImage'
import { SectionBackground } from '../ui/SectionBackground'
import { TiltCard } from '../ui/TiltCard'
import { FloatingMedicalIcons } from '../visual/FloatingMedicalIcons'

export function Stories() {
  return (
    <SectionBackground variant="c" id="stories">
      <FloatingMedicalIcons section="stories" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Stories"
          title="Lives changed with dignity"
          subtitle="Real families, real outcomes. Names shortened for privacy where needed."
          align="center"
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <TiltCard
              key={item.id}
              className="glass-card flex flex-col p-6"
            >
              <PlaceholderImage alt={item.photoAlt} aspect="video" label="Story photo" />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-arc-navy/80">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <footer className="mt-4 border-t border-arc-blue/10 pt-4">
                <p className="font-semibold text-arc-navy">{item.name}</p>
                <p className="text-xs text-arc-blue">{item.surgeryType}</p>
              </footer>
            </TiltCard>
          ))}
        </div>
      </div>
    </SectionBackground>
  )
}
