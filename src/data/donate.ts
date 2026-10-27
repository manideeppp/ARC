import type { DonationDetails } from '../types/donate'

/** PLACEHOLDER: replace tiers, bank details, and UPI with live information */
export const donationDetails: DonationDetails = {
  intro:
    'Your contribution funds surgery, hospital stays, and recovery support for people who cannot pay. Every amount matters.',
  tiers: [
    {
      id: 'tier-500',
      amountInr: 500,
      impactDescription: 'Covers essential medicines for post-surgery recovery.',
    },
    {
      id: 'tier-2000',
      amountInr: 2000,
      impactDescription: 'Supports diagnostic tests before a planned surgery.',
    },
    {
      id: 'tier-5000',
      amountInr: 5000,
      impactDescription: 'Helps fund a day of hospital care for a patient in need.',
    },
  ],
  bankAccountName: 'PLACEHOLDER: THE ARC Initiative',
  bankName: 'PLACEHOLDER: Bank name',
  accountNumber: 'PLACEHOLDER: XXXX XXXX XXXX',
  ifsc: 'PLACEHOLDER: XXXX0000000',
  upiId: 'PLACEHOLDER: arc.initiative@upi',
  note:
    'Payment gateway coming soon. For now, please use the bank or UPI details above and email us your transaction reference.',
}
