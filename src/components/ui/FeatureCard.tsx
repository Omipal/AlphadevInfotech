import { cn } from '@/utils/cn'
import type { Feature } from '@/types'

interface FeatureCardProps {
  feature: Feature
  index: number
  className?: string
}

// Icon mapping — all icons come from Lucide via CSS class names
// Components receive the icon name as a string, rendered via a data attribute
// for the CSS to pick up. This avoids dynamic imports at component level.
const ICON_MAP: Record<string, string> = {
  Code2:       '⟨/⟩',
  Cloud:       '☁',
  Smartphone:  '📱',
  BrainCircuit:'◈',
  Palette:     '✦',
  LineChart:   '↗',
  Globe:       '◉',
  Figma:       '◇',
  BarChart3:   '▦',
}

/**
 * FeatureCard — individual card in the "Why Choose Us" / Features grid.
 * Each card has a gradient top-border reveal on hover.
 */
export default function FeatureCard({ feature, index, className }: FeatureCardProps) {
  return (
    <article
      className={cn('feature-card gsap-fade-up', className)}
      aria-label={feature.title}
      data-index={index}
    >
      {/* Icon */}
      <div className="icon-wrap icon-wrap-lg mb-5">
        <span aria-hidden="true" className="text-xl font-bold">
          {ICON_MAP[feature.icon] ?? '◆'}
        </span>
      </div>

      {/* Content */}
      <h3 className="font-heading text-lg font-700 mb-2" style={{ fontWeight: 700, color: 'var(--text-primary)', fontFamily: 'var(--font-family-heading)' }}>
        {feature.title}
      </h3>
      <p className="text-sm leading-7" style={{ color: 'var(--text-secondary)' }}>
        {feature.description}
      </p>
    </article>
  )
}
