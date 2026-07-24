"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { ABOUT } from "@/data/content";

/**
 * AboutSection — split layout: text content left, Image right.
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">
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

            {/* Paragraphs */}
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
          </div>

          {/* Right: Image */}
          <div
            ref={rightRef}
            className="relative w-full h-[350px] md:h-[450px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
            style={{ opacity: 0 }}
          >
            {ABOUT.image && (
              <Image
                src={ABOUT.image}
                alt="About Us - AlphaDev Infotech"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
