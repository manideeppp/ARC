interface PlaceholderImageProps {
  alt: string
  aspect?: 'square' | 'video' | 'portrait'
  label?: string
}

const aspectClasses = {
  square: 'aspect-square',
  video: 'aspect-video',
  portrait: 'aspect-[4/5]',
}

export function PlaceholderImage({
  alt,
  aspect = 'square',
  label = 'PLACEHOLDER IMAGE',
}: PlaceholderImageProps) {
  return (
    <div
      className={`relative flex w-full items-center justify-center overflow-hidden rounded-2xl border-2 border-dashed border-arc-blue/25 bg-arc-soft ${aspectClasses[aspect]}`}
      role="img"
      aria-label={alt}
    >
      <span className="px-4 text-center text-xs font-semibold uppercase tracking-wider text-arc-navy/45">
        {label}
      </span>
    </div>
  )
}
