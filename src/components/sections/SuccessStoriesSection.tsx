"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { CheckCircle2, ArrowUpRight, ShieldCheck } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { cn } from "@/utils/cn";

// डेटा को सीधे content.ts से इम्पोर्ट किया गया है
import { SUCCESS_STORIES_DATA } from "@/data/content";

export default function SuccessStoriesSection() {
  const [activeStoryIdx, setActiveStoryIdx] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const activeStory = SUCCESS_STORIES_DATA.stories[activeStoryIdx];

  // ── Scroll Reveal Animation ──
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 30 },
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

  // ── Tab Change GSAP Animation ──
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
      );
    });
    return () => ctx.revert();
  }, [activeStoryIdx]);

  return (
    <section
      ref={sectionRef}
      id="success-stories"
      className="section-padding"
      style={{ background: "var(--background)", opacity: 0 }}
    >
      <Container>
        {/* Global Section Title */}
        <SectionTitle
          eyebrow={SUCCESS_STORIES_DATA.eyebrow}
          heading={SUCCESS_STORIES_DATA.heading}
          subheading={SUCCESS_STORIES_DATA.subheading}
          align="center"
          className="mb-10"
        />

        {/* ── Category / Tab Switcher ── */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {SUCCESS_STORIES_DATA.stories.map((story, idx) => {
            const isActive = activeStoryIdx === idx;
            return (
              <button
                key={story.id}
                onClick={() => setActiveStoryIdx(idx)}
                className={cn(
                  "px-6 py-2.5 rounded-[var(--radius-pill)] text-sm font-semibold transition-all duration-300 border",
                  isActive
                    ? "bg-[var(--primary)] text-white border-[var(--primary)] shadow-md"
                    : "bg-[var(--surface)] text-[var(--text-secondary)] border-[var(--border)] hover:border-[var(--primary)] hover:text-[var(--primary)]",
                )}
              >
                {story.tabLabel}
              </button>
            );
          })}
        </div>

        {/* ── Bento-Vault Spotlight Card ── */}
        <div
          ref={contentRef}
          className="glass-panel p-6 md:p-10 rounded-[var(--radius-card)] shadow-[var(--shadow-glass)] border border-[var(--border)] relative overflow-hidden"
        >
          {/* Subtle Background Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--primary)] opacity-[0.03] blur-3xl rounded-full pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            {/* Left Side: Spotlight Story */}
            <div className="lg:col-span-7 flex flex-col gap-8 relative z-10">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--border)] pb-6">
                <div>
                  <span className="badge-brand mb-3">{activeStory.badge}</span>
                  <h3 className="font-heading text-2xl md:text-3xl font-bold text-[var(--text-primary)]">
                    {activeStory.title}
                  </h3>
                </div>
                <div className="flex items-center gap-2 text-[var(--text-secondary)] bg-[var(--background)] px-4 py-2 rounded-lg border border-[var(--border)]">
                  <span className="text-sm font-semibold">
                    {activeStory.client}
                  </span>
                  <ArrowUpRight size={16} />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--primary)] mb-2">
                    The Challenge
                  </h4>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {activeStory.challenge}
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--primary)] mb-2">
                    The Solution
                  </h4>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {activeStory.solution}
                  </p>
                </div>
              </div>

              <div className="w-full h-64 md:h-80 bg-[var(--surface-alt)] rounded-2xl border border-[var(--border)] relative overflow-hidden flex items-center justify-center mt-2 shadow-inner">
                {activeStory.image ? (
                  <Image
                    src={activeStory.image}
                    alt={activeStory.title}
                    fill
                    className="object-contain p-4 hover:scale-105 transition-transform duration-700"
                  />
                ) : (
                  <span className="text-[var(--text-secondary)]">
                    Mockup Image Here
                  </span>
                )}
              </div>
            </div>

            {/* Right Side: Core Capabilities List */}
            <div className="lg:col-span-5 flex flex-col gap-6 relative z-10">
              <div className="bg-[var(--background)] border border-[var(--border)] rounded-2xl p-6 md:p-8 h-full shadow-[var(--shadow-card)]">
                <div className="flex items-center gap-3 mb-8">
                  <div className="icon-wrap w-10 h-10">
                    <ShieldCheck size={20} />
                  </div>
                  <h4 className="font-heading text-lg font-bold text-[var(--text-primary)]">
                    Core Capabilities
                  </h4>
                </div>

                <div className="flex flex-col gap-6">
                  {activeStory.keyFeatures.map((feat, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-4 p-4 rounded-xl hover:bg-[var(--surface)] border border-transparent hover:border-[var(--border)] transition-all duration-300"
                    >
                      <div className="mt-1">
                        <CheckCircle2
                          size={18}
                          className="text-[var(--primary)]"
                        />
                      </div>
                      <div>
                        <h5 className="text-sm font-bold text-[var(--text-primary)] mb-1">
                          {feat.title}
                        </h5>
                        <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                          {feat.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
