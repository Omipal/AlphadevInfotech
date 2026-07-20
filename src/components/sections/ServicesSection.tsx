'use client'

import { useEffect, useRef } from 'react'
import Container from '@/components/ui/Container'
import SectionTitle from '@/components/ui/SectionTitle'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import { SERVICES } from '@/data/content'

const ICON_CHARS: Record<string, string> = {
  Globe:       '◉',
  Smartphone:  '▣',
  Cloud:       '☁',
  BrainCircuit:'◈',
  Figma:       '◇',
  BarChart3:   '▦',
}

/**
 * ServicesSection — 2×3 premium service cards with detailed highlight lists.
 */
export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.services-title',
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', once: true },
        },
      )
      gsap.fromTo(
        '.service-card',
        { opacity: 0, y: 36 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.services-grid', start: 'top 82%', once: true },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="services"
      aria-label="Our Services"
      className="section-padding"
      style={{ background: 'var(--background)' }}
    >
      <Container>
        <div className="services-title" style={{ opacity: 0 }}>
          <SectionTitle
            eyebrow="What We Build"
            heading="Core Service Capabilities"
            subheading="From initial discovery to post-launch support — every engagement is built around measurable business outcomes."
          />
        </div>

        <div className="services-grid mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <article
              key={service.title}
              className="service-card relative flex flex-col gap-5 p-8 rounded-2xl border transition-all duration-300 group overflow-hidden"
              style={{
                background: 'var(--surface)',
                borderColor: 'var(--border)',
                opacity: 0,
              }}
              aria-label={service.title}
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold transition-all duration-300 group-hover:scale-110"
                style={{
                  background: 'rgba(var(--primary-rgb), 0.08)',
                  color: 'var(--primary)',
                }}
                aria-hidden="true"
              >
                {ICON_CHARS[service.icon] ?? '◆'}
              </div>

              {/* Content */}
              <div className="flex flex-col gap-3 flex-1">
                <h3
                  className="text-lg font-bold leading-snug"
                  style={{ fontFamily: 'var(--font-family-heading)', color: 'var(--text-primary)' }}
                >
                  {service.title}
                </h3>
                <p className="text-sm leading-7" style={{ color: 'var(--text-secondary)' }}>
                  {service.description}
                </p>
              </div>

              {/* Highlight tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t" style={{ borderColor: 'var(--border)' }}>
                {service.highlights.map((h) => (
                  <span
                    key={h}
                    className="tech-pill"
                    style={{ fontSize: '0.75rem', padding: '0.25rem 0.625rem' }}
                  >
                    {h}
                  </span>
                ))}
              </div>

              {/* Hover accent line */}
              <div
                className="absolute inset-x-0 bottom-0 h-0.5 rounded-b-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                style={{ background: 'linear-gradient(90deg, var(--primary), var(--secondary))' }}
                aria-hidden="true"
              />
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
