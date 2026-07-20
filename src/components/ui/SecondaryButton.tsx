import { cn } from '@/utils/cn'

interface SecondaryButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: (e: React.MouseEvent) => void
  className?: string
  id?: string
  type?: 'button' | 'submit'
  size?: 'sm' | 'md' | 'lg'
}

/**
 * SecondaryButton — outlined button that picks up brand color on hover.
 * Renders as <a> when href is provided, else <button>.
 */
export default function SecondaryButton({
  children,
  href,
  onClick,
  className,
  id,
  type = 'button',
  size = 'md',
}: SecondaryButtonProps) {
  const sizeClass =
    size === 'sm' ? 'px-5 py-2.5 text-sm'
    : size === 'lg' ? 'px-8 py-4 text-base'
    : 'px-7 py-3.5 text-sm'

  const base = cn('btn btn-secondary', sizeClass, className)

  if (href) {
    return (
      <a href={href} id={id} className={base} onClick={onClick}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} id={id} className={base} onClick={onClick}>
      {children}
    </button>
  )
}
