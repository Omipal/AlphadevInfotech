"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { CheckCircle2, ChevronRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle"; // आपका अपना ग्लोबल कंपोनेंट!
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { CAPABILITIES } from "@/data/content";
import { cn } from "@/utils/cn";

export default function CapabilitiesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  // ── Scroll Reveal Animation ──
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
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
      id="capabilities"
      aria-label="Core Capabilities"
      className="section-padding"
      style={{ background: "var(--background)", opacity: 0 }} // GSAP के लिए opacity 0
    >
      <Container>
        {/* आपका ग्लोबल SectionTitle (बिना किसी हार्डकोडेड स्टाइल के) */}
        <SectionTitle
          eyebrow={CAPABILITIES.eyebrow}
          heading={CAPABILITIES.heading}
          align="left"
          className="mb-12 lg:mb-16"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* ── Left Column: Interactive Accordion Menu (5 columns) ── */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {CAPABILITIES.items.map((item, idx) => {
              const isActive = activeIndex === idx;

              return (
                <div
                  key={item.title}
                  onClick={() => setActiveIndex(idx)}
                  className={cn(
                    "relative overflow-hidden rounded-[var(--radius-card)] border p-6 cursor-pointer transition-all duration-500 ease-out",
                    isActive
                      ? "border-[var(--primary)] shadow-[var(--shadow-card)]"
                      : "border-[var(--border)] hover:border-[var(--primary)] hover:shadow-[var(--shadow-card-hover)]",
                  )}
                  style={{
                    background: isActive
                      ? "var(--background)"
                      : "var(--surface)",
                  }}
                  role="button"
                  aria-expanded={isActive}
                >
                  {/* Active Background Glow (CSS Variable से) */}
                  {isActive && (
                    <div
                      className="absolute inset-0 opacity-10"
                      style={{
                        background:
                          "linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)",
                      }}
                      aria-hidden="true"
                    />
                  )}

                  <div className="relative z-10 flex items-center justify-between">
                    <h3
                      className="text-lg md:text-xl font-bold transition-colors duration-300"
                      style={{
                        fontFamily: "var(--font-family-heading)",
                        color: isActive
                          ? "var(--primary)"
                          : "var(--text-primary)",
                      }}
                    >
                      {item.title}
                    </h3>
                    <ChevronRight
                      className={cn(
                        "transition-transform duration-500",
                        isActive ? "rotate-90" : "rotate-0",
                      )}
                      style={{
                        color: isActive
                          ? "var(--primary)"
                          : "var(--text-secondary)",
                      }}
                      size={20}
                    />
                  </div>

                  {/* ── Expandable Bullets (CSS Grid से Smooth Height Transition) ── */}
                  <div
                    className={cn(
                      "grid transition-all duration-500 ease-in-out relative z-10",
                      isActive
                        ? "grid-rows-[1fr] opacity-100 mt-6"
                        : "grid-rows-[0fr] opacity-0 mt-0",
                    )}
                  >
                    <div className="overflow-hidden flex flex-col gap-4">
                      {item.bullets.map((bullet, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-3">
                          <CheckCircle2
                            size={18}
                            className="mt-1 flex-shrink-0"
                            style={{ color: "var(--primary)" }}
                          />
                          <p
                            className="text-sm leading-relaxed"
                            style={{ color: "var(--text-secondary)" }}
                          >
                            <strong style={{ color: "var(--text-primary)" }}>
                              {bullet.title}{" "}
                            </strong>
                            {bullet.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ── Right Column: Dynamic Image Display (7 columns) ── */}
          <div className="lg:col-span-7 relative w-full h-[350px] md:h-[500px] lg:h-[600px] rounded-[var(--radius-card)] overflow-hidden border border-[var(--border)] shadow-[var(--shadow-float)] bg-[var(--surface-alt)]">
            {CAPABILITIES.items.map((item, idx) => (
              <Image
                key={item.image}
                src={item.image}
                alt={item.title}
                fill
                className={cn(
                  "object-cover transition-opacity duration-700 ease-in-out",
                  activeIndex === idx ? "opacity-100 z-10" : "opacity-0 z-0",
                )}
                sizes="(max-width: 1024px) 100vw, 60vw"
                priority={idx === 0} // पहली इमेज को जल्दी लोड करने के लिए
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
