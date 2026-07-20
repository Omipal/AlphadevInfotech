"use client";

import { useEffect, useRef } from "react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import CaseStudyCard from "@/components/ui/CaseStudyCard";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { CASE_STUDIES } from "@/data/content";

/**
 * CaseStudiesSection — three case study cards with alternating reveal direction.
 */
export default function CaseStudiesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".case-studies-title",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
        },
      );
      gsap.fromTo(
        ".case-study-card",
        { opacity: 0, y: 40, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.75,
          stagger: 0.13,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".case-studies-grid",
            start: "top 82%",
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
      id="case-studies"
      aria-label="Case Studies"
      className="section-padding"
      style={{ background: "var(--background)" }}
    >
      <Container>
        <div className="case-studies-title pb-8" style={{ opacity: 0 }}>
          <SectionTitle
            eyebrow="Case Studies"
            heading="Proven Results at Scale"
            subheading="Real projects. Real outcomes. Here's a look at how we've helped businesses solve complex problems with technology."
          />
        </div>

        <div className="case-studies-grid mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {CASE_STUDIES.map((study, i) => (
            <CaseStudyCard key={study.title} study={study} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
