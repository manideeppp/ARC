import { helpSteps } from '../../data/steps'
import { SectionHeading } from '../ui/SectionHeading'
import { SectionBackground } from '../ui/SectionBackground'

export function HowWeHelp() {
  return (
    <SectionBackground variant="a" id="how-we-help">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="How we help"
          title="From first call to recovery"
          subtitle="A clear path so families know what to expect—no confusion, no fees."
        />

        <ol className="mt-10 grid list-none gap-5 p-0 sm:grid-cols-2 lg:grid-cols-4">
          {helpSteps.map((step) => (
            <li key={step.id} className="glass-card relative flex flex-col p-6">
              <span
                className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-arc-blue text-sm font-bold text-white shadow-md shadow-arc-blue/25"
                aria-hidden="true"
              >
                {step.stepNumber}
              </span>
              <h3 className="text-lg font-semibold text-arc-navy">{step.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-arc-navy/75">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </SectionBackground>
  )
}
