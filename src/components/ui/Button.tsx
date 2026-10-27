import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonVariant = 'primary' | 'donate' | 'outline'

type SharedProps = {
  variant?: ButtonVariant
  className?: string
  children: ReactNode
}

type ButtonAsButton = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined
  }

type ButtonAsLink = SharedProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string
  }

export type ButtonProps = ButtonAsButton | ButtonAsLink

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-arc-blue text-white hover:bg-[#184a8c] shadow-sm shadow-arc-blue/20',
  donate:
    'bg-arc-amber text-arc-navy hover:bg-[#e08e0a] shadow-sm shadow-arc-amber/30 font-semibold',
  outline:
    'border-2 border-arc-blue bg-white text-arc-blue hover:bg-arc-soft',
}

export function Button(props: ButtonProps) {
  const {
    variant = 'primary',
    className = '',
    children,
    href,
    ...rest
  } = props

  const base =
    'inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-arc-blue disabled:opacity-50'

  const classes = `${base} ${variantClasses[variant]} ${className}`

  if (href) {
    const anchorProps = rest as AnchorHTMLAttributes<HTMLAnchorElement>
    return (
      <a href={href} className={classes} {...anchorProps}>
        {children}
      </a>
    )
  }

  const buttonProps = rest as ButtonHTMLAttributes<HTMLButtonElement>
  const type = buttonProps.type ?? 'button'

  return (
    <button type={type} className={classes} {...buttonProps}>
      {children}
    </button>
  )
}
