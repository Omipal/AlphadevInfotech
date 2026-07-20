'use client'

import { useEffect, useRef } from 'react'
import Container from '@/components/ui/Container'
import SectionTitle from '@/components/ui/SectionTitle'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import { PROCESS_STEPS } from '@/data/content'

/**
 * ProcessSection — vertical numbered process steps with connecting line
 * and staggered reveal animation.
 */
export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.process-title',
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
        '.process-step-item',
        { opacity: 0, x: -32 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.process-steps', start: 'top 80%', once: true },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="process"
      aria-label="Our Process"
      className="section-padding"
      style={{ background: 'var(--surface)' }}
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-16 items-start">

          {/* Left: title */}
          <div className="process-title" style={{ opacity: 0 }}>
            <SectionTitle
              eyebrow="How We Work"
              heading="A Process Built for Certainty"
              subheading="Four clear phases that eliminate guesswork and deliver predictable, high-quality outcomes on every engagement."
              align="left"
            />
          </div>

          {/* Right: steps */}
          <div className="process-steps flex flex-col">
            {PROCESS_STEPS.map((step, i) => {
              const isLast = i === PROCESS_STEPS.length - 1

              return (
                <div
                  key={step.number}
                  className="process-step-item flex gap-6"
                  style={{ opacity: 0 }}
                >
                  {/* Number + connector line */}
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div
                      className="w-14 h-14 rounded-full border-2 flex items-center justify-center font-bold text-lg transition-all duration-300"
                      style={{
                        borderColor: 'var(--primary)',
                        color: 'var(--primary)',
                        background: 'rgba(var(--primary-rgb), 0.06)',
                        fontFamily: 'var(--font-family-heading)',
                      }}
                      aria-hidden="true"
                    >
                      {step.number}
                    </div>
                    {!isLast && (
                      <div
                        className="w-0.5 flex-1 my-2"
                        style={{
                          background: 'linear-gradient(180deg, var(--primary) 0%, var(--border) 100%)',
                          minHeight: '2.5rem',
                        }}
                        aria-hidden="true"
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div className={`flex flex-col gap-2 pb-10 ${isLast ? 'pb-0' : ''}`}>
                    <h3
                      className="text-xl font-bold"
                      style={{
                        fontFamily: 'var(--font-family-heading)',
                        color: 'var(--text-primary)',
                      }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-base leading-7" style={{ color: 'var(--text-secondary)' }}>
                      {step.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </Container>
    </section>
  )
}
