import { cn } from '@/utils/cn'

interface ContainerProps {
  children: React.ReactNode
  className?: string
  as?: keyof React.JSX.IntrinsicElements
}

/**
 * Container — constrains content to 1280px with consistent horizontal padding.
 * Use as the inner wrapper for every section.
 */
export default function Container({
  children,
  className,
  as: Tag = 'div',
}: ContainerProps) {
  return (
    <Tag className={cn('container-site', className)}>
      {children}
    </Tag>
  )
}
