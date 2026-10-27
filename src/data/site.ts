import type { BrandContent, HeroContent, NavLink } from '../types/site'

export const brand: BrandContent = {
  name: 'THE ARC Initiative',
  founderCredit: 'by Anoop Reddy Chinthala',
  tagline: 'Giving life an edge.',
}

export const navLinks: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'How We Help', href: '#how-we-help' },
  { label: 'Stories', href: '#stories' },
  { label: 'Contact', href: '#contact' },
]

export const hero: HeroContent = {
  headline: 'Free surgery and hospital care for those who need it most',
  mission:
    'We connect people who cannot afford treatment with trusted hospitals and cover the cost of care—dignity first, always.',
  tagline: brand.tagline,
  trustLine: 'TS & NITI Aayog registered · 100% free for patients',
}
