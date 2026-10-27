import { brand } from '../../data/site'
import { ArcMark } from './ArcMark'

interface BrandLogoProps {
  compact?: boolean
}

export function BrandLogo({ compact = false }: BrandLogoProps) {
  return (
    <a href="#" className="group flex items-center gap-2.5 no-underline">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-arc-blue">
        <ArcMark className="h-5 w-8" strokeClassName="stroke-white" />
      </span>
      <span className="flex flex-col">
        <span className="text-sm font-bold leading-tight tracking-tight text-arc-navy sm:text-base">
          {brand.name}
        </span>
        {!compact && (
          <span className="text-[0.65rem] font-medium text-arc-navy/70 sm:text-xs">
            {brand.founderCredit}
          </span>
        )}
      </span>
    </a>
  )
}
