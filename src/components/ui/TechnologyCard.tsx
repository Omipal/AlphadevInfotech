import { cn } from '@/utils/cn'
import type { Technology } from '@/types'

interface TechnologyCardProps {
  tech: Technology
  className?: string
}

/**
 * TechnologyCard — compact tech logo card in the technology stack grid.
 */
export default function TechnologyCard({ tech, className }: TechnologyCardProps) {
  return (
    <div className={cn('tech-card gsap-scale-in', className)}>
      {/* Logo placeholder — replaced with actual logos when provided */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center text-sm font-bold"
        style={{ background: 'rgba(var(--primary-rgb), 0.06)', color: 'var(--primary)' }}
        aria-hidden="true"
      >
        {tech.name.slice(0, 2).toUpperCase()}
      </div>
      <span
        className="text-xs font-semibold text-center leading-tight"
        style={{ color: 'var(--text-primary)' }}
      >
        {tech.name}
      </span>
    </div>
  )
}
