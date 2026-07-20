import { cn } from '@/utils/cn'
import type { CaseStudy } from '@/types'

interface CaseStudyCardProps {
  study: CaseStudy
  index: number
  className?: string
}

/**
 * CaseStudyCard — premium card for case study showcase.
 * Displays tag, title, description, results, and tech stack.
 */
export default function CaseStudyCard({ study, index, className }: CaseStudyCardProps) {
  const accentColors = ['var(--primary)', 'var(--secondary)', 'var(--primary-hover)']
  const accent = accentColors[index % accentColors.length]

  return (
    <article className={cn('case-study-card gsap-fade-up flex flex-col', className)}>
      {/* Color accent header bar */}
      <div
        className="h-1.5 w-full"
        style={{ background: accent }}
        aria-hidden="true"
      />

      <div className="p-8 flex flex-col gap-5 flex-1">
        {/* Tag */}
        <span
          className="badge text-xs"
          style={{
            background: `rgba(${accent === 'var(--primary)' ? 'var(--primary-rgb)' : 'var(--secondary-rgb)'}, 0.1)`,
            color: accent,
            border: `1px solid ${accent}33`,
          }}
        >
          {study.tag}
        </span>

        {/* Title + Description */}
        <div>
          <h3
            className="text-xl font-bold mb-3 leading-snug"
            style={{ fontFamily: 'var(--font-family-heading)', color: 'var(--text-primary)' }}
          >
            {study.title}
          </h3>
          <p className="text-sm leading-7" style={{ color: 'var(--text-secondary)' }}>
            {study.description}
          </p>
        </div>

        {/* Results */}
        <div className="flex flex-col gap-2">
          <p
            className="text-xs font-700 uppercase tracking-widest mb-1"
            style={{ color: 'var(--text-secondary)', letterSpacing: '0.08em', fontWeight: 700 }}
          >
            Key Results
          </p>
          <ul className="flex flex-col gap-1.5">
            {study.results.map((result) => (
              <li key={result} className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-primary)' }}>
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: accent }}
                  aria-hidden="true"
                />
                {result}
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="mt-auto pt-5 flex flex-wrap gap-2 border-t" style={{ borderColor: 'var(--border)' }}>
          {study.tech.map((t) => (
            <span
              key={t}
              className="tech-pill"
              style={{ fontSize: '0.75rem', padding: '0.25rem 0.625rem' }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}
