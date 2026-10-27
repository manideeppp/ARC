interface ArcMarkProps {
  className?: string
  strokeClassName?: string
}

export function ArcMark({ className = 'h-8 w-8', strokeClassName = 'stroke-arc-amber' }: ArcMarkProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M4 20 Q20 2 36 20"
        className={strokeClassName}
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
  )
}
