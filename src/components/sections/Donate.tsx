import { donationDetails } from '../../data/donate'
import { SectionHeading } from '../ui/SectionHeading'
import { Button } from '../ui/Button'
import { SectionBackground } from '../ui/SectionBackground'

export function Donate() {
  return (
    <SectionBackground variant="a" id="donate">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Donate"
          title="Fund surgery that saves lives"
          subtitle={donationDetails.intro}
          align="center"
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {donationDetails.tiers.map((tier) => (
            <div key={tier.id} className="glass-card p-6 text-center">
              <p className="text-2xl font-bold text-arc-amber">
                ₹{tier.amountInr.toLocaleString('en-IN')}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-arc-navy/75">{tier.impactDescription}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-xl glass-card p-6 sm:p-8">
          <h3 className="text-lg font-semibold text-arc-navy">Bank & UPI details</h3>
          <dl className="mt-4 space-y-2 text-sm text-arc-navy/80">
            <div className="flex justify-between gap-4">
              <dt className="text-arc-navy/60">Account name</dt>
              <dd className="text-right font-medium">{donationDetails.bankAccountName}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-arc-navy/60">Bank</dt>
              <dd className="text-right font-medium">{donationDetails.bankName}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-arc-navy/60">Account no.</dt>
              <dd className="text-right font-mono">{donationDetails.accountNumber}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-arc-navy/60">IFSC</dt>
              <dd className="text-right font-mono">{donationDetails.ifsc}</dd>
            </div>
            <div className="flex justify-between gap-4 border-t border-arc-blue/10 pt-3">
              <dt className="text-arc-navy/60">UPI</dt>
              <dd className="text-right font-mono text-arc-blue">{donationDetails.upiId}</dd>
            </div>
          </dl>
          <p className="mt-4 text-xs text-arc-navy/60">{donationDetails.note}</p>
          <div className="mt-6 flex justify-center">
            <Button variant="donate" type="button" disabled aria-describedby="donate-note">
              Donate (coming soon)
            </Button>
          </div>
          <p id="donate-note" className="sr-only">Online payments are not yet connected.</p>
        </div>
      </div>
    </SectionBackground>
  )
}
