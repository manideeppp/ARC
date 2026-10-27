export interface SocialLink {
  id: string
  label: string
  href: string
}

export interface ContactInfo {
  addressLines: string[]
  phone: string
  email: string
  socialLinks: SocialLink[]
  registrationLine: string
}
