import { cn } from '@/utils/cn'

interface SectionTitleProps {
  eyebrow?: string
  heading: string
  subheading?: string
  align?: 'left' | 'center'
  className?: string
  headingClassName?: string
}

/**
 * SectionTitle — consistent heading block used at the top of every section.
 * Includes optional eyebrow label, main heading, and supporting text.
 */
export default function SectionTitle({
  eyebrow,
  heading,
  subheading,
  align = 'center',
  className,
  headingClassName,
}: SectionTitleProps) {
  const isCenter = align === 'center'

  return (
    <div
      className={cn(
        'flex flex-col gap-4',
        isCenter ? 'items-center text-center' : 'items-start text-left',
        className,
      )}
    >
      {eyebrow && (
        <span className="section-eyebrow" aria-hidden="true">
          {eyebrow}
        </span>
      )}

      <h2 className={cn('section-heading', headingClassName)}>
        {heading}
      </h2>

      {subheading && (
        <p className={cn('section-subheading', isCenter && 'mx-auto')}>
          {subheading}
        </p>
      )}
    </div>
  )
}
