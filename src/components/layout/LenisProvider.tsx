'use client'

import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import { gsap, ScrollTrigger } from '@/lib/gsap'

interface LenisProviderProps {
  children: React.ReactNode
}

/**
 * LenisProvider — initialises Lenis smooth scrolling and wires it
 * to GSAP ScrollTrigger so all scroll-based animations are in sync.
 *
 * Exposes the lenis instance on `window.lenis` so the Navbar
 * can call `window.lenis.scrollTo()` for section links.
 */
export default function LenisProvider({ children }: LenisProviderProps) {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    })

    lenisRef.current = lenis

    // Sync Lenis scroll position with GSAP ScrollTrigger
    lenis.on('scroll', () => ScrollTrigger.update())

    // Drive Lenis via GSAP's RAF for a single animation loop
    const ticker = (time: number) => lenis.raf(time * 1000)
    gsap.ticker.add(ticker)
    gsap.ticker.lagSmoothing(0)

    // Expose on window so Navbar links can call lenis.scrollTo()
    ;(window as unknown as Record<string, unknown>)['lenis'] = lenis

    // Refresh ScrollTrigger after fonts / images load
    window.addEventListener('load', () => ScrollTrigger.refresh())

    return () => {
      gsap.ticker.remove(ticker)
      lenis.destroy()
      delete (window as unknown as Record<string, unknown>)['lenis']
    }
  }, [])

  return <>{children}</>
}
