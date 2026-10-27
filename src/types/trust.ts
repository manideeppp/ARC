export interface RegistrationDetail {
  id: string
  label: string
  value: string
  verified?: boolean
}

export interface DonationUseItem {
  id: string
  label: string
  percentage: number
}

export interface TrustContent {
  intro: string
  registrations: RegistrationDetail[]
  taxNote: string
  donationUseTitle: string
  donationUse: DonationUseItem[]
}
