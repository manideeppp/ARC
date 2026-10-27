import type { ReactNode } from 'react'
import type { SectionMeshVariant } from '../../types/visual'

interface SectionBackgroundProps {
  variant: SectionMeshVariant
  id?: string
  className?: string
  children: ReactNode
  ariaLabelledby?: string
}

const meshClass: Record<SectionMeshVariant, string> = {
  a: 'mesh-bg-a',
  b: 'mesh-bg-b',
  c: 'mesh-bg-c',
}

export const sectionPadding = 'py-12 sm:py-16'

export function SectionBackground({
  variant,
  id,
  className = '',
  children,
  ariaLabelledby,
}: SectionBackgroundProps) {
  return (
    <section
      id={id}
      className={`relative overflow-hidden ${meshClass[variant]} ${sectionPadding} ${className}`}
      aria-labelledby={ariaLabelledby}
    >
      {children}
    </section>
  )
}
