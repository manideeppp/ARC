import type { TrustContent } from '../types/trust'

/** PLACEHOLDER: replace registration numbers and tax status with official records */
export const trustContent: TrustContent = {
  intro:
    'We are committed to transparency. Registration details and how we use donations are shared openly so supporters can give with confidence.',
  registrations: [
    {
      id: 'ts',
      label: 'Trust / Society registration (TS)',
      value: 'PLACEHOLDER: TS Reg. No. XXXX/YYYY',
      verified: true,
    },
    {
      id: 'niti',
      label: 'NITI Aayog (DARPAN)',
      value: 'PLACEHOLDER: NITI Aayog ID XXXXXXXXXX',
      verified: true,
    },
  ],
  taxNote:
    'PLACEHOLDER: 80G and 12A status — insert certificate numbers and validity dates when confirmed.',
  donationUseTitle: 'How donations are used',
  donationUse: [
    { id: 'surgery', label: 'Direct patient care and surgeries', percentage: 78 },
    { id: 'medicine', label: 'Medicines and follow-up support', percentage: 12 },
    { id: 'ops', label: 'Coordination and outreach', percentage: 7 },
    { id: 'admin', label: 'Compliance and administration', percentage: 3 },
  ],
}
