"use client";

import React, {
  useRef,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { gsap } from "@/lib/gsap";
import { RECENT_PROJECTS_DATA } from "@/data/content";

export default function RecentProjectsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  // Smooth Infinite Loop Hack: Repeat data array if total items < 8
  const duplicatedProjects = useMemo(() => {
    if (RECENT_PROJECTS_DATA.length < 8) {
      return [...RECENT_PROJECTS_DATA, ...RECENT_PROJECTS_DATA];
    }
    return RECENT_PROJECTS_DATA;
  }, []);

  // Embla Carousel Hook Configuration
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  );
  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(
      emblaApi.selectedScrollSnap() % RECENT_PROJECTS_DATA.length,
    );
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  // GSAP Animations
  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".project-anim-header",
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

      gsap.fromTo(
        ".project-card-anim",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="recent-projects"
      className="section-padding overflow-hidden relative bg-[var(--background)]"
    >
      <Container>
        {/* Section Header */}
        <div className="project-anim-header mb-12">
          <SectionTitle
            eyebrow="Our Work"
            heading="Recent Projects"
            subheading="Showcase a selection of successful digital products, enterprise platforms, AI solutions, mobile applications and business websites delivered by AlphaDev Infotech."
            align="center"
          />
        </div>

        {/* Carousel Container */}
        <div className="relative group max-w-[1280px] mx-auto px-1">
          {/* Previous Button */}
          <button
            onClick={scrollPrev}
            aria-label="Previous projects"
            className="hidden md:flex absolute -left-5 lg:-left-6 top-[40%] -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white text-[var(--primary)] shadow-[0_4px_20px_rgba(0,0,0,0.12)] border border-black/5 items-center justify-center hover:bg-[var(--primary)] hover:text-white transition-all duration-300 focus:outline-none cursor-pointer"
          >
            <ArrowLeft size={20} strokeWidth={2.2} />
          </button>

          {/* Next Button */}
          <button
            onClick={scrollNext}
            aria-label="Next projects"
            className="hidden md:flex absolute -right-5 lg:-right-6 top-[40%] -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white text-[var(--primary)] shadow-[0_4px_20px_rgba(0,0,0,0.12)] border border-black/5 items-center justify-center hover:bg-[var(--primary)] hover:text-white transition-all duration-300 focus:outline-none cursor-pointer"
          >
            <ArrowRight size={20} strokeWidth={2.2} />
          </button>

          {/* Embla Viewport */}
          <div className="overflow-hidden py-4 -mx-3 px-3" ref={emblaRef}>
            <div className="flex -ml-6">
              {duplicatedProjects.map((project, index) => (
                <div
                  key={`${project.id}-${index}`}
                  /* YAHAN CHANGE KIYA HAI: flex-[0_0_85vw] ko flex-[0_0_100%] kiya */
                  className="pl-6 flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_33.3333%] lg:flex-[0_0_25%] min-w-0"
                >
                  <article className="project-card-anim bg-white rounded-2xl md:rounded-[24px] border border-[var(--border)] hover:border-[var(--primary)]/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(147,51,234,0.12)] flex flex-col group/card h-full">
                    {/* Image & Category Pill */}
                    <div className="relative aspect-[16/10] overflow-hidden rounded-t-2xl md:rounded-t-[24px]">
                      <div className="absolute top-3.5 left-3.5 z-10 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full shadow-sm border border-black/5">
                        <span className="text-xs font-semibold text-[var(--primary)]">
                          {project.category}
                        </span>
                      </div>
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        className="object-cover transition-transform duration-500 ease-out group-hover/card:scale-105"
                      />
                    </div>

                    {/* Content Body */}
                    <div className="p-6 flex flex-col flex-grow rounded-b-2xl md:rounded-b-[24px]">
                      <h3 className="font-heading text-lg font-bold text-[var(--text-primary)] mb-2 line-clamp-1">
                        {project.title}
                      </h3>
                      <p className="text-[14px] text-[var(--text-secondary)] mb-6 line-clamp-2 flex-grow leading-relaxed">
                        {project.description}
                      </p>

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-[var(--border)]">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="text-[12px] font-semibold px-2.5 py-1 rounded-md bg-[var(--secondary)]/10 text-[#004ac6]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Indicator Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {RECENT_PROJECTS_DATA.map((_, idx) => (
              <button
                key={idx}
                aria-label={`Go to slide ${idx + 1}`}
                onClick={() => scrollTo(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  selectedIndex === idx
                    ? "w-6 bg-[var(--primary)]"
                    : "w-2.5 bg-[var(--border)] hover:bg-[var(--primary)]/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* View All Projects Button */}
        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="btn btn-secondary px-8 py-4 text-base border-black group"
          >
            <span>View All Projects</span>
            <ExternalLink
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>
      </Container>
    </section>
  );
}
