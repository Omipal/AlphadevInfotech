"use client";

import { useEffect, useRef } from "react";
import { Zap, Server, Brain, ShieldCheck } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle"; // ✅ आपका ग्लोबल कंपोनेंट वापस आ गया
import { gsap } from "@/lib/gsap";
import { cn } from "@/utils/cn";
import { WHY_CHOOSE_US_DATA } from "@/data/content";

// ─── माउस-ट्रैकिंग ग्लो कार्ड कंपोनेंट ────────────────────────────
function BentoCard({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { current } = cardRef;
    if (!current) return;
    const rect = current.getBoundingClientRect();
    current.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    current.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={cn(
        "group relative overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] transition-all duration-500 hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-1 bento-card",
        className,
      )}
      style={style}
    >
      {/* Dynamic Glow Effect */}
      <div
        className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(600px circle at var(--mouse-x, 0) var(--mouse-y, 0), rgba(var(--primary-rgb), 0.08), transparent 40%)",
        }}
      />
      <div className="relative z-10 h-full p-8 md:p-10 flex flex-col">
        {children}
      </div>
    </div>
  );
}

// ─── मेन सेक्शन ──────────────────────────────────────────────────
export default function WhyPartnerSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      // हेडिंग एनिमेशन
      gsap.fromTo(
        ".bento-heading",
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

      // कार्ड्स एनिमेशन (Staggered Reveal)
      gsap.fromTo(
        ".bento-card",
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: ".bento-grid-container",
            start: "top 75%",
            once: true,
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // डेटा को वेरिएबल्स में मैप करना
  const [speed, scalable, domain, reliable] = WHY_CHOOSE_US_DATA.features;

  return (
    <section
      ref={sectionRef}
      id="why-us"
      className="section-padding"
      style={{ background: "var(--background)" }}
    >
      <Container>
        {/* ── Heading Area (अब यह आपकी बाकी वेबसाइट से 100% मैच करेगा) ── */}
        <div className="bento-heading mb-16 flex justify-center">
          <SectionTitle
            eyebrow={WHY_CHOOSE_US_DATA.eyebrow}
            heading={WHY_CHOOSE_US_DATA.heading}
            align="center"
          />
        </div>

        {/* ── Bento Grid Layout ── */}
        <div className="bento-grid-container grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">
          {/* Card 1: Speed First (Large Horizontal) */}
          <BentoCard className="md:col-span-2 md:row-span-1 bg-gradient-to-br from-[rgba(var(--primary-rgb),0.05)] to-transparent">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white shadow-sm border border-[var(--border)] flex items-center justify-center text-[var(--primary)] mb-6">
              <Zap size={24} />
            </div>
            <h3 className="text-2xl font-bold text-[var(--text-primary)] font-heading mb-3">
              {speed.title}
            </h3>
            <p className="text-[var(--text-secondary)] leading-relaxed max-w-lg">
              {speed.description}
            </p>
          </BentoCard>

          {/* Card 2: Scalable Architecture (Tall Vertical with Chart Graphic) */}
          <BentoCard className="md:col-span-1 md:row-span-2 flex flex-col">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[var(--surface-alt)] border border-[var(--border)] flex items-center justify-center text-[var(--primary)] mb-6">
              <Server size={24} />
            </div>
            <h3 className="text-2xl font-bold text-[var(--text-primary)] font-heading mb-3">
              {scalable.title}
            </h3>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-8 flex-grow">
              {scalable.description}
            </p>

            {/* Fake Abstract Bar Chart for visual flair */}
            <div className="mt-auto flex items-end gap-2 h-24 pt-4 border-t border-[var(--border)]">
              {[40, 70, 45, 100, 60].map((h, i) => (
                <div
                  key={i}
                  className="w-full rounded-t-sm"
                  style={{
                    height: `${h}%`,
                    background:
                      i === 3
                        ? "var(--primary)"
                        : "rgba(var(--primary-rgb), 0.2)",
                  }}
                />
              ))}
            </div>
          </BentoCard>

          {/* Card 3: Domain Native (Small Square) */}
          <BentoCard className="md:col-span-1 md:row-span-1">
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[rgba(34,197,94,0.1)] flex items-center justify-center text-green-600 mb-5">
              <Brain size={20} />
            </div>
            <h3 className="text-xl font-bold text-[var(--text-primary)] font-heading mb-2">
              {domain.title}
            </h3>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              {domain.description}
            </p>
          </BentoCard>

          {/* Card 4: Reliable (Small Square) */}
          <BentoCard className="md:col-span-1 md:row-span-1">
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[rgba(var(--primary-rgb),0.1)] flex items-center justify-center text-[var(--primary)] mb-5">
              <ShieldCheck size={20} />
            </div>
            <h3 className="text-xl font-bold text-[var(--text-primary)] font-heading mb-2">
              {reliable.title}
            </h3>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              {reliable.description}
            </p>
          </BentoCard>
        </div>
      </Container>
    </section>
  );
}
