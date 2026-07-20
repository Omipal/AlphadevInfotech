import { cn } from '@/utils/cn'

interface PrimaryButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: (e: React.MouseEvent) => void
  className?: string
  id?: string
  type?: 'button' | 'submit'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
}

/**
 * PrimaryButton — gradient brand button with hover lift and glow.
 * Renders as <a> when href is provided, else <button>.
 */
export default function PrimaryButton({
  children,
  href,
  onClick,
  className,
  id,
  type = 'button',
  size = 'md',
  disabled,
}: PrimaryButtonProps) {
  const sizeClass =
    size === 'sm' ? 'px-5 py-2.5 text-sm'
    : size === 'lg' ? 'px-8 py-4 text-base'
    : 'px-7 py-3.5 text-sm'

  const base = cn('btn btn-primary', sizeClass, className)

  if (href) {
    return (
      <a href={href} id={id} className={base} onClick={onClick}>
        {children}
      </a>
    )
  }

  return (
    <button
      type={type}
      id={id}
      className={base}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
