import type { HelpStep } from '../types/step'

export const helpSteps: HelpStep[] = [
  {
    id: 'reach-out',
    stepNumber: 1,
    title: 'Reach out',
    description:
      'A patient or family member contacts us by phone or the form below. We listen and gather basic medical details.',
  },
  {
    id: 'assess',
    stepNumber: 2,
    title: 'Medical review',
    description:
      'Our team reviews the case with volunteer doctors and confirms whether surgery or hospital care is needed.',
  },
  {
    id: 'hospital',
    stepNumber: 3,
    title: 'Hospital placement',
    description:
      'We coordinate with a partner hospital for admission, surgery, and inpatient care—at no cost to the patient.',
  },
  {
    id: 'recovery',
    stepNumber: 4,
    title: 'Recovery and follow-up',
    description:
      'After discharge, we stay in touch for follow-up visits and medicines when required, so recovery is supported.',
  },
]
