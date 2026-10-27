interface ArcDividerProps {
  flip?: boolean
  className?: string
}

export function ArcDivider({ flip = false, className = '' }: ArcDividerProps) {
  return (
    <div
      className={`pointer-events-none w-full overflow-hidden leading-[0] ${flip ? 'rotate-180' : ''} ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="block h-12 w-full sm:h-16"
      >
        <path
          fill="currentColor"
          d="M0,40 C360,100 1080,-20 1440,40 L1440,80 L0,80 Z"
        />
      </svg>
    </div>
  )
}
