import type { MedicalIconKind } from '../../types/visual'

interface MedicalIconProps {
  kind: MedicalIconKind
  size: number
  className?: string
}

export function MedicalIcon({ kind, size, className = '' }: MedicalIconProps) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 48 48',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: `${className} text-arc-blue`,
    'aria-hidden': true as const,
  }

  switch (kind) {
    case 'stethoscope':
      return (
        <svg {...common}>
          <path
            d="M14 10v14a10 10 0 1020 0V10"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle cx="34" cy="32" r="5" stroke="currentColor" strokeWidth="2.5" />
          <path d="M14 10H10a4 4 0 000 8h4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      )
    case 'syringe':
      return (
        <svg {...common}>
          <path d="M12 36l18-18 6 6L18 42l-6-6z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
          <path d="M28 14l6-6 4 4-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M8 32l4 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      )
    case 'pill':
      return (
        <svg {...common}>
          <rect
            x="10"
            y="18"
            width="28"
            height="12"
            rx="6"
            stroke="currentColor"
            strokeWidth="2.5"
            transform="rotate(-35 24 24)"
          />
          <path d="M18 26l12-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" transform="rotate(-35 24 24)" />
        </svg>
      )
    case 'cross':
      return (
        <svg {...common}>
          <rect x="20" y="10" width="8" height="28" rx="2" fill="currentColor" />
          <rect x="10" y="20" width="28" height="8" rx="2" fill="currentColor" />
        </svg>
      )
    case 'heartbeat':
      return (
        <svg {...common}>
          <path
            d="M6 28h6l4-12 6 24 6-16 4 8h10"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'bandage':
      return (
        <svg {...common}>
          <rect x="10" y="10" width="28" height="28" rx="4" stroke="currentColor" strokeWidth="2.5" />
          <circle cx="18" cy="18" r="2" fill="currentColor" />
          <circle cx="30" cy="18" r="2" fill="currentColor" />
          <circle cx="18" cy="30" r="2" fill="currentColor" />
          <circle cx="30" cy="30" r="2" fill="currentColor" />
          <path d="M24 16v16M16 24h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    default:
      return null
  }
}
