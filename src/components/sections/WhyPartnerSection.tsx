"use client";

import { useEffect, useRef } from "react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import WhyPartnerCard from "@/components/ui/WhyPartnerCard";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { FEATURES } from "@/data/content";

/**
 * FeaturesSection — "Why Choose Us" grid with staggered card reveal.
 */
export default function WhyPartnerSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".section-features-title",
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
        ".feature-card",
        { opacity: 0, y: 40, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.65,
          stagger: 0.09,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".features-grid",
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
      id="why-us"
      aria-label="Why Choose AlphaDev Infotech"
      className="section-padding"
      style={{ background: "var(--surface)" }}
    >
      <Container>
        <div className="section-features-title" style={{ opacity: 0 }}>
          <SectionTitle
            eyebrow="Why Choose Us"
            heading="Why Partner With Us?"
            subheading=""
          />
        </div>

        <div className="features-grid mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature, i) => (
            <WhyPartnerCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
