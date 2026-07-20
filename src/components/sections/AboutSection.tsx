"use client";

import { useEffect, useRef } from "react";
import { CheckCircle2 } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { ABOUT } from "@/data/content";

/**
 * AboutSection — split layout: text content left, highlight cards right.
 * GSAP ScrollTrigger reveals the two columns from opposite sides.
 */
export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 75%",
        once: true,
        onEnter: () => {
          gsap.fromTo(
            leftRef.current,
            { opacity: 0, x: -40 },
            { opacity: 1, x: 0, duration: 0.9, ease: "power3.out" },
          );
          gsap.fromTo(
            rightRef.current,
            { opacity: 0, x: 40 },
            {
              opacity: 1,
              x: 0,
              duration: 0.9,
              ease: "power3.out",
              delay: 0.12,
            },
          );
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      aria-label="About AlphaDev Infotech"
      className="section-padding"
      style={{ background: "var(--background)" }}
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
          {/* Left: text */}
          <div
            ref={leftRef}
            className="flex flex-col gap-8"
            style={{ opacity: 0 }}
          >
            <SectionTitle
              eyebrow={ABOUT.eyebrow}
              heading={ABOUT.headline}
              align="left"
            />

            <div className="flex flex-col gap-5">
              {ABOUT.body.map((para, i) => (
                <p
                  key={i}
                  className="text-base leading-8"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {para}
                </p>
              ))}
            </div>

            {/* Subtle brand accent bar */}
            <div
              className="h-1 w-24 rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, var(--primary), var(--secondary))",
              }}
              aria-hidden="true"
            />
          </div>

          {/* Right: highlights */}
          <div
            ref={rightRef}
            className="flex flex-col gap-5"
            style={{ opacity: 0 }}
          >
            {ABOUT.highlights.map((h, i) => (
              <div
                key={h.title}
                className="glass-panel p-7 flex flex-col gap-3"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(var(--primary-rgb), 0.1)" }}
                  >
                    <CheckCircle2
                      size={18}
                      style={{ color: "var(--primary)" }}
                      aria-hidden="true"
                    />
                  </div>
                  <h3
                    className="text-base font-bold"
                    style={{
                      color: "var(--text-primary)",
                      fontFamily: "var(--font-family-heading)",
                    }}
                  >
                    {h.title}
                  </h3>
                </div>
                <p
                  className="text-sm leading-7 pl-12"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {h.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
