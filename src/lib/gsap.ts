'use client'

/**
 * GSAP + ScrollTrigger registration module.
 * Always import gsap and ScrollTrigger from this file —
 * never import directly from 'gsap' in components.
 *
 * Marked 'use client' so Next.js never attempts SSR execution.
 */
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export { gsap, ScrollTrigger }
