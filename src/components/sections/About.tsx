import { aboutIntro, aboutMission, arcMeaning, founder } from '../../data/about'
import { SectionHeading } from '../ui/SectionHeading'
import { PlaceholderImage } from '../ui/PlaceholderImage'
import { SectionBackground } from '../ui/SectionBackground'
import { FloatingMedicalIcons } from '../visual/FloatingMedicalIcons'

export function About() {
  return (
    <SectionBackground variant="b" id="about">
      <FloatingMedicalIcons section="about" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="About us"
          title="Care without cost barriers"
          subtitle={aboutIntro}
        />

        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="space-y-6 leading-relaxed text-arc-navy/80">
            <div>
              <h3 className="text-lg font-semibold text-arc-navy">Our mission</h3>
              <p className="mt-2">{aboutMission}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-arc-navy">What ARC means</h3>
              <p className="mt-2">{arcMeaning}</p>
            </div>
          </div>

          <article className="glass-card p-6">
            <div className="grid gap-6 sm:grid-cols-[minmax(0,140px)_1fr] sm:items-start">
              <PlaceholderImage alt={founder.photoAlt} aspect="portrait" label="Founder photo" />
              <div>
                <h3 className="text-xl font-bold text-arc-navy">Founder</h3>
                <p className="mt-3 text-sm leading-relaxed text-arc-navy/80">{founder.message}</p>
                <p className="mt-4 font-semibold text-arc-navy">{founder.name}</p>
                <p className="text-sm text-arc-navy/65">{founder.title}</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </SectionBackground>
  )
}
