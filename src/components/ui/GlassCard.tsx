import { cn } from '@/utils/cn'

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  as?: keyof React.JSX.IntrinsicElements
  hover?: boolean
}

/**
 * GlassCard — reusable frosted-glass card wrapper.
 * Used for floating elements, highlights, and overlay panels.
 */
export default function GlassCard({
  children,
  className,
  as: Tag = 'div',
  hover = false,
}: GlassCardProps) {
  return (
    <Tag
      className={cn(
        'glass-card',
        hover && 'transition-shadow duration-300 hover:shadow-xl',
        className,
      )}
    >
      {children}
    </Tag>
  )
}
