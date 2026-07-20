"use client";

import { useEffect, useRef } from "react";
import Container from "@/components/ui/Container";
import StatCard from "@/components/ui/StatCard";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { STATS } from "@/data/content";

/**
 * StatsSection — four animated stat counters with ScrollTrigger reveal.
 * Numbers animate via StatCard's internal IntersectionObserver.
 */
export default function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".stat-card",
        { opacity: 0, y: 32, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="stats"
      aria-label="Company statistics"
      className="section-padding"
      style={{ background: "var(--surface)" }}
    >
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} />
          ))}
        </div>

        <div className="divider-gradient divider mt-16" aria-hidden="true" />
      </Container>
    </section>
  );
}
