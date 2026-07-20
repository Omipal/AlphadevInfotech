"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, Calendar } from "lucide-react";
import Container from "@/components/ui/Container";
import { gsap, ScrollTrigger } from "@/lib/gsap";

/**
 * CTASection — full-width gradient conversion banner with GSAP reveal.
 * Uses the brand gradient defined in globals.css via .cta-section.
 */
export default function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".cta-content",
        { opacity: 0, y: 32, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
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

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("contact");
    if (!el) return;
    const lenis = (window as unknown as Record<string, unknown>)["lenis"] as
      | { scrollTo: (t: HTMLElement, o: { offset: number }) => void }
      | undefined;
    if (lenis) {
      lenis.scrollTo(el as HTMLElement, { offset: -80 });
    } else {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="cta"
      aria-label="Call to action — Get in touch"
      className="cta-section py-24 md:py-32 relative section-padding"
    >
      <Container>
        <div
          className="cta-content flex flex-col items-center text-center gap-8 relative z-10"
          style={{ opacity: 0 }}
        >
          {/* Eyebrow */}
          <span
            className="badge"
            style={{
              background: "rgba(255,255,255,0.15)",
              color: "#ffffff",
              border: "1px solid rgba(255,255,255,0.3)",
            }}
          >
            <Calendar size={13} aria-hidden="true" />
            Free Discovery Call
          </span>

          {/* Heading */}
          <h2
            className="font-heading font-bold max-w-3xl"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.25rem)",
              lineHeight: 1.12,
              letterSpacing: "-0.03em",
              color: "#ffffff",
            }}
          >
            Ready to Build Something Exceptional?
          </h2>

          {/* Supporting text */}
          <p
            className="max-w-xl text-lg leading-8"
            style={{ color: "rgba(255,255,255,0.8)" }}
          >
            Let's start with a focused 30-minute discovery call. No sales pitch
            — just a clear conversation about your goals and how we can help.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              className="btn cta-section btn-white"
              onClick={scrollToContact}
              id="cta-primary"
            >
              Book a Discovery Call
              <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a
              href="#services"
              className="btn cta-section btn-outline-white"
              id="cta-secondary"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById("services");
                if (el) {
                  const lenis = (window as unknown as Record<string, unknown>)[
                    "lenis"
                  ] as
                    | {
                        scrollTo: (
                          t: HTMLElement,
                          o: { offset: number },
                        ) => void;
                      }
                    | undefined;
                  if (lenis) lenis.scrollTo(el as HTMLElement, { offset: -80 });
                  else el.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              View Our Services
            </a>
          </div>

          {/* Trust line */}
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
            No commitment required · 100% confidential · Response within 24
            hours
          </p>
        </div>
      </Container>
    </section>
  );
}
