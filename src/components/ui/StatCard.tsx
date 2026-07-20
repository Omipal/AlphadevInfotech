'use client'

import { useEffect, useRef } from 'react'
import { cn } from '@/utils/cn'
import type { Stat } from '@/types'

interface StatCardProps {
  stat: Stat
  className?: string
}

/**
 * StatCard — animated counter card for the Stats section.
 * Uses GSAP counter animation triggered by IntersectionObserver.
 */
export default function StatCard({ stat, className }: StatCardProps) {
  const valueRef = useRef<HTMLSpanElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const el = valueRef.current
    if (!el) return

    const numericValue = parseInt(stat.value, 10)
    if (isNaN(numericValue)) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      el.textContent = stat.value
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true

            const duration = 1800
            const start = performance.now()
            const startVal = 0

            const step = (now: number) => {
              const elapsed = now - start
              const progress = Math.min(elapsed / duration, 1)
              // easeOutExpo
              const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
              const current = Math.floor(startVal + (numericValue - startVal) * eased)
              el.textContent = current.toString()
              if (progress < 1) requestAnimationFrame(step)
            }

            requestAnimationFrame(step)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.5 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [stat.value])

  return (
    <article className={cn('stat-card gsap-fade-up', className)}>
      <div className="stat-number">
        <span ref={valueRef}>0</span>
        {stat.suffix && (
          <span style={{ color: 'var(--primary)' }}>{stat.suffix}</span>
        )}
      </div>
      <p
        className="mt-2 text-base font-semibold"
        style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-family-heading)' }}
      >
        {stat.label}
      </p>
      {stat.description && (
        <p className="mt-1 text-sm" style={{ color: 'var(--text-secondary)' }}>
          {stat.description}
        </p>
      )}
    </article>
  )
}
