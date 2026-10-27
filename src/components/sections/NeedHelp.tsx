import { useState, type FormEvent } from 'react'
import type { HelpRequestForm } from '../../types/helpRequest'
import {
  createEmptyHelpRequestForm,
  errorsByField,
  validateHelpRequest,
} from '../../utils/validateHelpRequest'
import { SectionHeading } from '../ui/SectionHeading'
import { Button } from '../ui/Button'
import { SectionBackground } from '../ui/SectionBackground'

const fieldClass =
  'mt-1 w-full rounded-xl border border-arc-blue/20 bg-white px-4 py-2.5 text-sm text-arc-navy shadow-sm focus:border-arc-blue focus:outline-none focus:ring-2 focus:ring-arc-blue/20'

export function NeedHelp() {
  const [form, setForm] = useState<HelpRequestForm>(createEmptyHelpRequestForm)
  const [submitted, setSubmitted] = useState(false)
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<keyof HelpRequestForm, string>>>({})

  const update = (field: keyof HelpRequestForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    setFieldErrors((prev) => {
      const next = { ...prev }
      delete next[field]
      return next
    })
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const errors = validateHelpRequest(form)
    if (errors.length > 0) {
      setFieldErrors(errorsByField(errors))
      setSubmitted(false)
      return
    }
    setFieldErrors({})
    setSubmitted(true)
  }

  return (
    <SectionBackground variant="c" id="need-help">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <SectionHeading
            eyebrow="Need help?"
            title="Request support for surgery or hospital care"
            subtitle="Share a few details and our team will call you back. There is no charge for this service."
          />

          <form
            onSubmit={handleSubmit}
            noValidate
            className="glass-card p-6 sm:p-8"
            aria-labelledby="need-help-form-title"
          >
            <h3 id="need-help-form-title" className="sr-only">Help request form</h3>

            <div className="space-y-4">
              <div>
                <label htmlFor="patientName" className="text-sm font-medium text-arc-navy">
                  Patient name
                </label>
                <input
                  id="patientName"
                  name="patientName"
                  type="text"
                  autoComplete="name"
                  className={fieldClass}
                  value={form.patientName}
                  onChange={(e) => update('patientName', e.target.value)}
                  aria-invalid={Boolean(fieldErrors.patientName)}
                  aria-describedby={fieldErrors.patientName ? 'patientName-error' : undefined}
                />
                {fieldErrors.patientName && (
                  <p id="patientName-error" className="mt-1 text-xs text-red-700" role="alert">
                    {fieldErrors.patientName}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="text-sm font-medium text-arc-navy">
                  Phone number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  className={fieldClass}
                  value={form.phone}
                  onChange={(e) => update('phone', e.target.value)}
                  aria-invalid={Boolean(fieldErrors.phone)}
                  aria-describedby={fieldErrors.phone ? 'phone-error' : undefined}
                />
                {fieldErrors.phone && (
                  <p id="phone-error" className="mt-1 text-xs text-red-700" role="alert">
                    {fieldErrors.phone}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="location" className="text-sm font-medium text-arc-navy">
                  Location (city / district)
                </label>
                <input
                  id="location"
                  name="location"
                  type="text"
                  className={fieldClass}
                  value={form.location}
                  onChange={(e) => update('location', e.target.value)}
                  aria-invalid={Boolean(fieldErrors.location)}
                  aria-describedby={fieldErrors.location ? 'location-error' : undefined}
                />
                {fieldErrors.location && (
                  <p id="location-error" className="mt-1 text-xs text-red-700" role="alert">
                    {fieldErrors.location}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="medicalCondition" className="text-sm font-medium text-arc-navy">
                  Medical condition
                </label>
                <input
                  id="medicalCondition"
                  name="medicalCondition"
                  type="text"
                  className={fieldClass}
                  value={form.medicalCondition}
                  onChange={(e) => update('medicalCondition', e.target.value)}
                  aria-invalid={Boolean(fieldErrors.medicalCondition)}
                  aria-describedby={
                    fieldErrors.medicalCondition ? 'medicalCondition-error' : undefined
                  }
                />
                {fieldErrors.medicalCondition && (
                  <p id="medicalCondition-error" className="mt-1 text-xs text-red-700" role="alert">
                    {fieldErrors.medicalCondition}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="text-sm font-medium text-arc-navy">
                  Short message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className={fieldClass}
                  value={form.message}
                  onChange={(e) => update('message', e.target.value)}
                  aria-invalid={Boolean(fieldErrors.message)}
                  aria-describedby={fieldErrors.message ? 'message-error' : undefined}
                />
                {fieldErrors.message && (
                  <p id="message-error" className="mt-1 text-xs text-red-700" role="alert">
                    {fieldErrors.message}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button variant="primary" type="submit">Submit request</Button>
              <p className="text-xs text-arc-navy/55">
                Form validation only in this version—submission will be connected later.
              </p>
            </div>

            {submitted && (
              <p className="mt-4 rounded-xl bg-arc-green/10 px-4 py-3 text-sm text-arc-green" role="status">
                Thank you. Your details look complete. Our team will reach out when submission is live.
              </p>
            )}
          </form>
        </div>
      </div>
    </SectionBackground>
  )
}
