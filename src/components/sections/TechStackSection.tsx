'use client'

import { useEffect, useRef } from 'react'
import Container from '@/components/ui/Container'
import SectionTitle from '@/components/ui/SectionTitle'
import TechnologyCard from '@/components/ui/TechnologyCard'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import { TECH_CATEGORIES } from '@/data/content'

/**
 * TechStackSection — tabbed or grouped grid of technology cards
 * per category, with staggered scale-in reveal.
 */
export default function TechStackSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.tech-title',
        { opacity: 0, y: 24 },
        {
          opacity: 1, y: 0, duration: 0.75, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', once: true },
        },
      )
      gsap.fromTo(
        '.tech-category-block',
        { opacity: 0, y: 28 },
        {
          opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: '.tech-categories', start: 'top 82%', once: true },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="technology"
      aria-label="Technology Stack"
      className="section-padding"
      style={{ background: 'var(--surface)' }}
    >
      <Container>
        <div className="tech-title" style={{ opacity: 0 }}>
          <SectionTitle
            eyebrow="Technology"
            heading="Our Technology Stack"
            subheading="We work with best-in-class tools across the full development spectrum — chosen for performance, community, and long-term maintainability."
          />
        </div>

        <div className="tech-categories mt-16 flex flex-col gap-10">
          {TECH_CATEGORIES.map((category) => (
            <div
              key={category.label}
              className="tech-category-block"
              style={{ opacity: 0 }}
            >
              {/* Category label */}
              <div className="flex items-center gap-4 mb-5">
                <h3
                  className="text-sm font-bold uppercase tracking-widest"
                  style={{ color: 'var(--text-secondary)', letterSpacing: '0.1em' }}
                >
                  {category.label}
                </h3>
                <div
                  className="flex-1 h-px"
                  style={{ background: 'var(--border)' }}
                  aria-hidden="true"
                />
              </div>

              {/* Tech cards grid */}
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-3">
                {category.items.map((tech) => (
                  <TechnologyCard key={tech.name} tech={tech} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
