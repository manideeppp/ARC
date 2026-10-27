export interface HelpRequestForm {
  patientName: string
  phone: string
  location: string
  medicalCondition: string
  message: string
}

export type HelpRequestFormField = keyof HelpRequestForm

export interface HelpRequestFieldError {
  field: HelpRequestFormField
  message: string
}
