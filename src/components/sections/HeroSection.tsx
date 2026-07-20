'use client'

import { useEffect, useRef } from 'react'
import { CheckCircle, Zap } from 'lucide-react'
import Container from '@/components/ui/Container'
import PrimaryButton from '@/components/ui/PrimaryButton'
import SecondaryButton from '@/components/ui/SecondaryButton'
import { gsap } from '@/lib/gsap'
import { HERO } from '@/data/content'

/**
 * HeroSection — full-viewport enterprise hero with:
 * - Premium gradient-mesh background
 * - GSAP staggered text entrance
 * - Floating glassmorphism dashboard mockup
 * - Two floating micro-cards
 * - Animated tech pill strip
 */
export default function HeroSection() {
  const sectionRef  = useRef<HTMLElement>(null)
  const textRef     = useRef<HTMLDivElement>(null)
  const dashRef     = useRef<HTMLDivElement>(null)
  const float1Ref   = useRef<HTMLDivElement>(null)
  const float2Ref   = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const ctx = gsap.context(() => {
      // Entrance timeline
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      // Text block elements
      tl.fromTo(
        '.hero-badge-el',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7 },
      )
      .fromTo(
        '.hero-h1-line',
        { opacity: 0, y: 36, skewY: 1 },
        { opacity: 1, y: 0, skewY: 0, duration: 0.9, stagger: 0.12 },
        '-=0.3',
      )
      .fromTo(
        '.hero-sub',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.75 },
        '-=0.4',
      )
      .fromTo(
        '.hero-ctas',
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.65 },
        '-=0.35',
      )
      .fromTo(
        '.hero-trust',
        { opacity: 0 },
        { opacity: 1, duration: 0.5 },
        '-=0.2',
      )
      // Dashboard visual
      .fromTo(
        dashRef.current,
        { opacity: 0, x: 48, scale: 0.94 },
        { opacity: 1, x: 0, scale: 1, duration: 1.1, ease: 'power4.out' },
        '-=0.8',
      )
      // Floating cards
      .fromTo(
        [float1Ref.current, float2Ref.current],
        { opacity: 0, scale: 0.85, y: 12 },
        { opacity: 1, scale: 1, y: 0, duration: 0.7, stagger: 0.15, ease: 'back.out(1.5)' },
        '-=0.5',
      )

      // Continuous float animation
      if (float1Ref.current) {
        gsap.to(float1Ref.current, {
          y: -10,
          duration: 2.4,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: -1,
        })
      }
      if (float2Ref.current) {
        gsap.to(float2Ref.current, {
          y: -8,
          duration: 2.8,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: -1,
          delay: 0.6,
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.getElementById(href.replace('#', ''))
    if (!target) return
    const lenis = (window as unknown as Record<string, unknown>)['lenis'] as { scrollTo: (t: HTMLElement, o: { offset: number }) => void } | undefined
    if (lenis) {
      lenis.scrollTo(target as HTMLElement, { offset: -80 })
    } else {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      ref={sectionRef}
      id="home"
      className="hero-section gradient-mesh"
      aria-label="Hero — AlphaDev Infotech"
    >
      {/* Decorative background orbs */}
      <div className="hero-orb hero-orb-primary" aria-hidden="true" />
      <div className="hero-orb hero-orb-secondary" aria-hidden="true" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-16 xl:gap-24 items-center">

          {/* ── LEFT: Text Content ── */}
          <div ref={textRef} className="flex flex-col gap-7 relative z-10">

            {/* Badge */}
            <div className="hero-badge-el" style={{ opacity: 0 }}>
              <span className="badge badge-brand">
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: 'var(--primary)' }}
                  aria-hidden="true"
                />
                {HERO.badge}
              </span>
            </div>

            {/* H1 */}
            <h1
              className="font-heading font-bold overflow-hidden"
              style={{
                fontSize: 'clamp(2.5rem, 5.5vw, 3.75rem)',
                lineHeight: 1.08,
                letterSpacing: '-0.03em',
              }}
              aria-label={HERO.headline.join(' ')}
            >
              {HERO.headline.map((line, i) => (
                <span
                  key={i}
                  className={`hero-h1-line block ${i === HERO.headline.length - 1 ? 'gradient-text-subtle' : ''}`}
                  style={{ opacity: 0 }}
                >
                  {line}
                </span>
              ))}
            </h1>

            {/* Subheadline */}
            <p
              className="hero-sub text-lg leading-8 max-w-lg"
              style={{ color: 'var(--text-secondary)', opacity: 0 }}
            >
              {HERO.subheadline}
            </p>

            {/* CTAs */}
            <div
              className="hero-ctas flex flex-wrap items-center gap-4"
              style={{ opacity: 0 }}
            >
              <PrimaryButton
                href={HERO.ctaPrimary.href}
                onClick={(e) => handleScroll(e as React.MouseEvent<HTMLAnchorElement>, HERO.ctaPrimary.href)}
                size="lg"
                id="hero-cta-primary"
              >
                {HERO.ctaPrimary.label}
              </PrimaryButton>
              <SecondaryButton
                href={HERO.ctaSecondary.href}
                onClick={(e) => handleScroll(e as React.MouseEvent<HTMLAnchorElement>, HERO.ctaSecondary.href)}
                size="lg"
                id="hero-cta-secondary"
              >
                {HERO.ctaSecondary.label}
              </SecondaryButton>
            </div>

            {/* Trust line + pills */}
            <div className="hero-trust flex flex-col gap-3" style={{ opacity: 0 }}>
              <p className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
                {HERO.trustLine}
              </p>
              <div className="hero-tech-strip">
                {HERO.techPills.map((pill) => (
                  <span key={pill} className="tech-pill">{pill}</span>
                ))}
              </div>
            </div>
          </div>

          {/* ── RIGHT: Dashboard Visual ── */}
          <div className="relative hidden lg:flex justify-center items-center">
            <div ref={dashRef} className="hero-dashboard-wrap" style={{ opacity: 0 }}>

              {/* Main glass dashboard card */}
              <div className="hero-dashboard-card">
                {/* Window dots */}
                <div className="dashboard-dots">
                  <span className="dashboard-dot dot-red"   aria-hidden="true" />
                  <span className="dashboard-dot dot-amber" aria-hidden="true" />
                  <span className="dashboard-dot dot-green" aria-hidden="true" />
                </div>

                {/* Title row */}
                <div className="flex items-center justify-between mb-5">
                  <span
                    className="text-sm font-semibold"
                    style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-family-heading)' }}
                  >
                    Project Overview
                  </span>
                  <span className="live-badge">
                    <span className="live-badge-dot" />
                    Live
                  </span>
                </div>

                {/* Metrics */}
                <div className="dashboard-metrics-row" role="list" aria-label="Live metrics">
                  {HERO.dashboard.metrics.map((m) => (
                    <div key={m.label} className="dashboard-metric" role="listitem">
                      <span className="dashboard-metric-value">{m.value}</span>
                      <span className="dashboard-metric-label">{m.label}</span>
                    </div>
                  ))}
                </div>

                {/* Bar chart */}
                <div
                  className="dashboard-chart"
                  role="img"
                  aria-label="Project activity chart"
                >
                  {HERO.dashboard.chartBars.map((h, i) => (
                    <div
                      key={i}
                      className="chart-bar"
                      style={{ height: `${h}%` }}
                      aria-hidden="true"
                    />
                  ))}
                </div>

                {/* Footer row */}
                <div className="dashboard-footer-row mt-4">
                  <span className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                    Last 12 deployments
                  </span>
                  <span
                    className="text-xs font-semibold"
                    style={{ color: 'var(--primary)' }}
                  >
                    {HERO.dashboard.badge}
                  </span>
                </div>
              </div>

              {/* Float card 1 */}
              <div
                ref={float1Ref}
                className="hero-float-card hero-float-1"
                style={{ opacity: 0 }}
                aria-hidden="true"
              >
                <div className="hero-float-icon hero-float-icon-primary">
                  <CheckCircle size={18} />
                </div>
                <div>
                  <p className="hero-float-title">{HERO.floatCard1.value}</p>
                  <p className="hero-float-sub">{HERO.floatCard1.label}</p>
                </div>
              </div>

              {/* Float card 2 */}
              <div
                ref={float2Ref}
                className="hero-float-card hero-float-2"
                style={{ opacity: 0 }}
                aria-hidden="true"
              >
                <div className="hero-float-icon hero-float-icon-secondary">
                  <Zap size={18} />
                </div>
                <div>
                  <p className="hero-float-title">{HERO.floatCard2.value}</p>
                  <p className="hero-float-sub">{HERO.floatCard2.label}</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  )
}
