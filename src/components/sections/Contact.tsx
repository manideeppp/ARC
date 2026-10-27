import { contactInfo } from '../../data/contact'
import { SectionHeading } from '../ui/SectionHeading'
import { SectionBackground } from '../ui/SectionBackground'

export function Contact() {
  return (
    <SectionBackground variant="b" id="contact">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Contact"
          title="We are here to listen"
          subtitle="Reach us for patient support, partnerships, or questions about donations."
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="glass-card p-6">
            <h3 className="font-semibold text-arc-navy">Address</h3>
            <address className="mt-3 not-italic text-sm leading-relaxed text-arc-navy/75">
              {contactInfo.addressLines.map((line) => (
                <span key={line} className="block">{line}</span>
              ))}
            </address>
          </div>

          <div className="glass-card p-6">
            <h3 className="font-semibold text-arc-navy">Phone & email</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="text-arc-blue hover:underline">
                  {contactInfo.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${contactInfo.email}`} className="text-arc-blue hover:underline">
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </div>

          <div className="glass-card p-6 sm:col-span-2 lg:col-span-1">
            <h3 className="font-semibold text-arc-navy">Social</h3>
            <ul className="mt-3 space-y-2 text-sm">
              {contactInfo.socialLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="text-arc-blue hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-arc-navy/55">{contactInfo.registrationLine}</p>
      </div>
    </SectionBackground>
  )
}
