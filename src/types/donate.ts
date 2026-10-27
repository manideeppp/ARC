export interface DonationTier {
  id: string
  amountInr: number
  impactDescription: string
}

export interface DonationDetails {
  intro: string
  tiers: DonationTier[]
  bankAccountName: string
  bankName: string
  accountNumber: string
  ifsc: string
  upiId: string
  note: string
}
