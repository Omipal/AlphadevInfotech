"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { ABOUT } from "@/data/content";

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "bottom center",
          toggleActions: "play none none reverse",
        },
      });

      // Image Parallax Scale Down
      tl.to(
        ".gsap-image",
        {
          scale: 1.0,
          duration: 1.6,
          ease: "power3.out",
        },
        0,
      );

      // Text Stagger Fade Up
      tl.from(
        ".gsap-text",
        {
          y: 30,
          opacity: 0,
          duration: 1.2,
          stagger: 0.15,
          ease: "back.out(1.2)",
        },
        0.2,
      );

      // Floating Badges Stagger
      tl.from(
        ".gsap-badge",
        {
          y: 20,
          scale: 0.9,
          opacity: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power2.out",
        },
        0.6,
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="w-full relative pt-20 pb-20 overflow-hidden"
      style={{ background: "var(--background)" }}
    >
      <Container>
        <div className="relative w-full flex flex-col lg:flex-row items-center justify-end min-h-[650px] gap-10 lg:gap-0">
          {/* ── Floating Glassmorphic Panel (Overlap Left) ── */}
          <div className="gsap-text w-full lg:w-5/12 lg:absolute lg:left-[20px] lg:z-20 bg-white/90 backdrop-blur-2xl shadow-2xl rounded-[2rem] p-8 lg:p-12 border border-slate-200/60 flex flex-col gap-6 order-2 lg:order-1">
            <div className="flex items-center gap-4">
              <span className="w-8 h-[2px] bg-[var(--primary)] rounded-full"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--text-secondary)]">
                {ABOUT.eyebrow}
              </span>
            </div>

            <SectionTitle
              heading={ABOUT.headline}
              align="left"
              className="mb-2"
            />

            <div className="flex flex-col gap-5">
              {ABOUT.body.map((para, i) => (
                <p
                  key={i}
                  className="text-base leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {para}
                </p>
              ))}
            </div>

            <div className="mt-2">
              <a
                href="#capabilities"
                className="text-sm font-semibold text-[var(--primary)] border-b-2 border-[var(--primary)] pb-1 hover:text-[var(--secondary)] hover:border-[var(--secondary)] transition-colors duration-300 inline-block"
              >
                Discover our architecture
              </a>
            </div>
          </div>

          {/* ── Dominant Asymmetric Image Container (Right) ── */}
          <div className="w-full lg:w-[70%] relative z-10 order-1 lg:order-2">
            <div className="overflow-hidden rounded-[2.5rem] h-[450px] lg:h-[650px] w-full relative shadow-xl bg-slate-50">
              <Image
                src={ABOUT.image}
                alt="High-performance infrastructure"
                fill
                className="gsap-image w-full h-full object-cover origin-center transform scale-110"
                priority
              />
              {/* Subtle Inner Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-transparent pointer-events-none"></div>
            </div>

            {/* Floating Badge 2: Mini Data Trend (Top Right of Image) */}
            <div className="gsap-badge absolute top-8 right-4 lg:-right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] border border-white/80 flex flex-col gap-2 z-30">
              <div className="flex items-center justify-between gap-6">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                  System Yield
                </span>
                <span className="text-xs font-bold text-green-600">+12.4%</span>
              </div>
              <svg
                className="w-28 h-8 text-green-600 drop-shadow-[0_4px_6px_rgba(0,108,73,0.2)]"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                viewBox="0 0 100 30"
              >
                <path d="M5,25 C20,20 25,10 40,15 C55,20 65,5 95,2"></path>
              </svg>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
