"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "@/lib/gsap";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

// Lucide Icons for Categories
import {
  Monitor,
  Server,
  Smartphone,
  Cloud,
  Database,
  BrainCircuit,
} from "lucide-react";

// Brand Icons from react-icons (Removed the ones causing errors)
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiPython,
  SiFlutter,
  SiDocker,
  SiKubernetes,
  SiGithubactions,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiTensorflow,
  SiHuggingface,
} from "react-icons/si";

// 100% Safe Alternative Icons
import { TbBrain } from "react-icons/tb"; // For LangChain
import { FaAws, FaRobot } from "react-icons/fa"; // For AWS and OpenAI

const TECH_DATA = [
  {
    id: "frontend",
    title: "Frontend",
    icon: <Monitor size={20} />,
    techs: [
      { name: "React", icon: <SiReact size={16} className="text-[#61DAFB]" /> },
      {
        name: "Next.js",
        icon: <SiNextdotjs size={16} className="text-black dark:text-white" />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript size={16} className="text-[#3178C6]" />,
      },
      {
        name: "Tailwind",
        icon: <SiTailwindcss size={16} className="text-[#06B6D4]" />,
      },
    ],
    position: "left",
  },
  {
    id: "backend",
    title: "Backend",
    icon: <Server size={20} />,
    techs: [
      {
        name: "Node.js",
        icon: <SiNodedotjs size={16} className="text-[#339933]" />,
      },
      { name: "Express", icon: <SiExpress size={16} className="text-black" /> },
      {
        name: "NestJS",
        icon: <SiNestjs size={16} className="text-[#E0234E]" />,
      },
      {
        name: "Python",
        icon: <SiPython size={16} className="text-[#3776AB]" />,
      },
    ],
    position: "left",
  },
  {
    id: "mobile",
    title: "Mobile",
    icon: <Smartphone size={20} />,
    techs: [
      {
        name: "Flutter",
        icon: <SiFlutter size={16} className="text-[#02569B]" />,
      },
      {
        name: "React Native",
        icon: <SiReact size={16} className="text-[#61DAFB]" />,
      },
    ],
    position: "left",
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    icon: <Cloud size={20} />,
    techs: [
      {
        name: "AWS",
        icon: <FaAws size={16} className="text-[#FF9900]" />, // Updated to FaAws
      },
      {
        name: "Docker",
        icon: <SiDocker size={16} className="text-[#2496ED]" />,
      },
      {
        name: "Kubernetes",
        icon: <SiKubernetes size={16} className="text-[#326CE5]" />,
      },
      {
        name: "GitHub Actions",
        icon: <SiGithubactions size={16} className="text-[#2088FF]" />,
      },
    ],
    position: "right",
  },
  {
    id: "database",
    title: "Database",
    icon: <Database size={20} />,
    techs: [
      {
        name: "PostgreSQL",
        icon: <SiPostgresql size={16} className="text-[#4169E1]" />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb size={16} className="text-[#47A248]" />,
      },
      { name: "Redis", icon: <SiRedis size={16} className="text-[#DC382D]" /> },
    ],
    position: "right",
  },
  {
    id: "ai",
    title: "AI & ML",
    icon: <BrainCircuit size={20} />,
    techs: [
      {
        name: "OpenAI",
        icon: <FaRobot size={16} className="text-black" />, // Updated to FaRobot
      },
      {
        name: "TensorFlow",
        icon: <SiTensorflow size={16} className="text-[#FF6F00]" />,
      },
      {
        name: "LangChain",
        icon: <TbBrain size={16} className="text-[#1C3C3C]" />,
      },
      {
        name: "Hugging Face",
        icon: <SiHuggingface size={16} className="text-[#FFD21E]" />,
      },
    ],
    position: "right",
  },
];

export default function TechStackSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Header Animation
      gsap.fromTo(
        ".tech-header",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        },
      );

      // 2. Central Hub Pulse
      gsap.to(".tech-hub", {
        scale: 1.05,
        boxShadow: "0 0 40px rgba(217, 108, 187, 0.5)",
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // 3. FIX: Dotted Lines Fade-In (Preserves the dots perfectly)
      gsap.fromTo(
        ".connection-line",
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1.5,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: ".tech-network-container",
            start: "top 70%",
          },
        },
      );

      // 4. Node Cards sliding in
      gsap.fromTo(
        ".tech-node-left",
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: ".tech-network-container",
            start: "top 75%",
          },
        },
      );

      gsap.fromTo(
        ".tech-node-right",
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: ".tech-network-container",
            start: "top 75%",
          },
        },
      );

      // 5. Icons/Pills popping in sequentially
      gsap.fromTo(
        ".tech-pill",
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.4,
          stagger: 0.05,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: ".tech-network-container",
            start: "top 65%",
          },
        },
      );

      // 6. Continuous Floating effect for cards
      gsap.to(".tech-card-wrapper", {
        y: -5,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          each: 0.2,
          from: "random",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="technology"
      ref={sectionRef}
      className="section-padding relative bg-[var(--surface)] overflow-hidden"
    >
      <Container>
        <div className="tech-header mb-16">
          <SectionTitle
            eyebrow="Technology"
            heading="Tools We Use"
            subheading="Powering enterprise solutions with a robust, modern, and scalable technology stack."
            align="center"
          />
        </div>

        {/* Network Layout */}
        <div className="tech-network-container relative max-w-[1000px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0">
          {/* Left Nodes */}
          <div className="flex flex-col gap-6 lg:gap-12 w-full lg:w-[350px] z-10">
            {TECH_DATA.filter((item) => item.position === "left").map((cat) => (
              <div className="tech-card-wrapper" key={cat.id}>
                <TechCard category={cat} align="right" />
              </div>
            ))}
          </div>

          {/* Central Hub */}
          <div className="hidden lg:flex tech-hub w-32 h-32 bg-white rounded-full shadow-[0_10px_40px_rgba(217,108,187,0.2)] border-2 border-[var(--primary)] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 items-center justify-center">
            <span className="font-heading font-bold text-2xl text-[var(--primary)]">
              AD
            </span>

            {/* SVG Connecting Dotted Lines */}
            <svg
              className="absolute w-[800px] h-[600px] pointer-events-none -z-10 opacity-40"
              style={{
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              {/* Left Connections */}
              <path
                className="connection-line"
                d="M 400 300 Q 250 100 100 100"
                fill="none"
                stroke="var(--primary)"
                strokeWidth="1.5"
                strokeDasharray="5,5"
              />
              <path
                className="connection-line"
                d="M 400 300 L 100 300"
                fill="none"
                stroke="var(--primary)"
                strokeWidth="1.5"
                strokeDasharray="5,5"
              />
              <path
                className="connection-line"
                d="M 400 300 Q 250 500 100 500"
                fill="none"
                stroke="var(--primary)"
                strokeWidth="1.5"
                strokeDasharray="5,5"
              />
              {/* Right Connections */}
              <path
                className="connection-line"
                d="M 400 300 Q 550 100 700 100"
                fill="none"
                stroke="var(--primary)"
                strokeWidth="1.5"
                strokeDasharray="5,5"
              />
              <path
                className="connection-line"
                d="M 400 300 L 700 300"
                fill="none"
                stroke="var(--primary)"
                strokeWidth="1.5"
                strokeDasharray="5,5"
              />
              <path
                className="connection-line"
                d="M 400 300 Q 550 500 700 500"
                fill="none"
                stroke="var(--primary)"
                strokeWidth="1.5"
                strokeDasharray="5,5"
              />
            </svg>
          </div>

          {/* Right Nodes */}
          <div className="flex flex-col gap-6 lg:gap-12 w-full lg:w-[350px] z-10">
            {TECH_DATA.filter((item) => item.position === "right").map(
              (cat) => (
                <div className="tech-card-wrapper" key={cat.id}>
                  <TechCard category={cat} align="left" />
                </div>
              ),
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

// Sub-component for individual Tech Cards
function TechCard({
  category,
  align,
}: {
  category: any;
  align: "left" | "right";
}) {
  return (
    <div
      className={`tech-node-${category.position} group relative p-6 bg-white rounded-[20px] border border-black/5 shadow-sm hover:shadow-[0_15px_40px_rgba(217,108,187,0.15)] hover:border-[var(--primary)]/40 transition-all duration-300`}
    >
      <div
        className={`flex items-center gap-3 mb-5 ${align === "right" ? "lg:flex-row-reverse" : ""}`}
      >
        <div className="w-12 h-12 rounded-xl bg-[var(--primary)]/10 text-[var(--primary)] flex items-center justify-center group-hover:bg-[var(--primary)] group-hover:text-white group-hover:scale-110 transition-all duration-300">
          {category.icon}
        </div>
        <h3 className="font-heading font-bold text-lg text-[var(--text-primary)]">
          {category.title}
        </h3>
      </div>

      <div
        className={`flex flex-wrap gap-2 ${align === "right" ? "lg:justify-end" : ""}`}
      >
        {category.techs.map((tech: any) => (
          <div
            key={tech.name}
            title={tech.name}
            className="tech-pill flex items-center gap-1.5 px-3 py-1.5 bg-[var(--surface-secondary)] rounded-full border border-black/5 hover:border-[var(--primary)]/30 hover:-translate-y-0.5 hover:shadow-sm cursor-default transition-all duration-300"
          >
            {/* The Brand Icon */}
            <span className="flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
              {tech.icon}
            </span>
            {/* The Tech Name */}
            <span className="text-xs font-semibold text-[var(--text-secondary)] group-hover:text-[var(--primary)] transition-colors">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
