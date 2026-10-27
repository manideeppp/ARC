import type { HelpRequestForm, HelpRequestFieldError } from '../types/helpRequest'

const emptyForm: HelpRequestForm = {
  patientName: '',
  phone: '',
  location: '',
  medicalCondition: '',
  message: '',
}

export function createEmptyHelpRequestForm(): HelpRequestForm {
  return { ...emptyForm }
}

export function validateHelpRequest(form: HelpRequestForm): HelpRequestFieldError[] {
  const errors: HelpRequestFieldError[] = []

  if (!form.patientName.trim()) {
    errors.push({ field: 'patientName', message: 'Please enter the patient’s name.' })
  }

  const phoneDigits = form.phone.replace(/\D/g, '')
  if (phoneDigits.length < 10) {
    errors.push({ field: 'phone', message: 'Please enter a valid 10-digit phone number.' })
  }

  if (!form.location.trim()) {
    errors.push({ field: 'location', message: 'Please enter city or district.' })
  }

  if (!form.medicalCondition.trim()) {
    errors.push({ field: 'medicalCondition', message: 'Please briefly describe the medical need.' })
  }

  if (form.message.trim().length < 10) {
    errors.push({
      field: 'message',
      message: 'Please add a short message (at least 10 characters).',
    })
  }

  return errors
}

export function errorsByField(errors: HelpRequestFieldError[]): Partial<Record<keyof HelpRequestForm, string>> {
  return errors.reduce<Partial<Record<keyof HelpRequestForm, string>>>((acc, err) => {
    acc[err.field] = err.message
    return acc
  }, {})
}
