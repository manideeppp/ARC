export type MedicalIconKind =
  | 'stethoscope'
  | 'syringe'
  | 'pill'
  | 'cross'
  | 'heartbeat'
  | 'bandage'

export type FloatingIconSection =
  | 'hero'
  | 'impact'
  | 'about'
  | 'how-we-help'
  | 'stories'
  | 'trust'

export interface FloatingIconConfig {
  id: string
  kind: MedicalIconKind
  section: FloatingIconSection
  /** CSS top position, e.g. "12%" */
  top: string
  /** CSS left position */
  left: string
  size: number
  /** Parallax strength when scrolling */
  parallax: number
  floatDuration: number
  opacity: number
}

export type SectionMeshVariant = 'a' | 'b' | 'c'
