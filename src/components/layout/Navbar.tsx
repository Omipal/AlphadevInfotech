"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { cn } from "@/utils/cn";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { NAV_LINKS } from "@/data/content";

// ─── Types ──────────────────────────────────────────────────────────────────
type LenisInstance = {
  scrollTo: (target: HTMLElement | string, opts?: { offset?: number }) => void;
};

function getLenis(): LenisInstance | undefined {
  return (window as unknown as Record<string, unknown>)["lenis"] as
    | LenisInstance
    | undefined;
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeHref, setActiveHref] = useState<string>("");
  const observerRef = useRef<IntersectionObserver | null>(null);

  // ── Scroll detection ───────────────────────────────────────────────────
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── Active section tracking ────────────────────────────────────────────
  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.replace("#", "")).filter(Boolean);

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          setActiveHref(`#${visible[0].target.id}`);
        }
      },
      {
        threshold: [0.15, 0.3],
        rootMargin: "-80px 0px -25% 0px",
      },
    );

    const obs = observerRef.current;
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  // ── Body scroll lock ───────────────────────────────────────────────────
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // ── Escape key closes drawer ───────────────────────────────────────────
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // ── Smooth scroll to section ───────────────────────────────────────────
  const scrollToSection = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      setMobileOpen(false);
      if (href === "#") return;
      const id = href.replace("#", "");
      const target = document.getElementById(id);
      if (!target) return;
      const lenis = getLenis();
      if (lenis) {
        lenis.scrollTo(target, { offset: -84 });
      } else {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    },
    [],
  );

  return (
    <>
      {/* ════════════════════════ HEADER BAR ════════════════════════════ */}
      <header
        role="banner"
        id="site-navbar"
        className={cn(
          "navbar",
          scrolled ? "navbar-solid" : "navbar-transparent",
        )}
      >
        <nav
          className="container-site navbar-inner"
          aria-label="Main navigation"
        >
          {/* ── Logo (Responsive Width) ─────────────────────────────────── */}
          <a
            href="/"
            className="navbar-logo-link flex-shrink-0"
            aria-label="AlphaDev Infotech — home"
          >
            <Image
              src="/alphadevinfotech-logo.png"
              alt="AlphaDev Infotech logo"
              width={180}
              height={50}
              priority
              className="w-[130px] md:w-[150px] lg:w-[170px] xl:w-[190px] h-auto object-contain transition-all duration-300"
            />
          </a>

          {/* ── Desktop nav links (Visible lg and above) ──────────────── */}
          <ul
            role="list"
            className="navbar-links !hidden lg:!flex flex-1 justify-center gap-1 xl:gap-3"
          >
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    "nav-link lg:!px-2 xl:!px-3 lg:!text-[13px] xl:!text-sm whitespace-nowrap",
                    activeHref === link.href && "nav-link--active",
                  )}
                  aria-current={activeHref === link.href ? "page" : undefined}
                  onClick={(e) => scrollToSection(e, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* ── CTA button (Visible lg and above) ─────────────────────── */}
          <div className="navbar-cta !hidden lg:!flex flex-shrink-0">
            <PrimaryButton
              href="#contact"
              onClick={(e) =>
                scrollToSection(
                  e as React.MouseEvent<HTMLAnchorElement>,
                  "#contact",
                )
              }
              size="sm"
              id="navbar-cta"
            >
              Get in Touch
            </PrimaryButton>
          </div>

          {/* ── Hamburger (Visible up to lg breakpoint) ───────────────── */}
          <button
            className="navbar-toggle !flex lg:!hidden"
            aria-label={
              mobileOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-panel"
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? (
              <X size={22} strokeWidth={2} />
            ) : (
              <Menu size={22} strokeWidth={2} />
            )}
          </button>
        </nav>
      </header>

      {/* ════════════════════════ MOBILE DRAWER ═════════════════════════ */}
      <div
        className={cn(
          "mobile-nav-overlay !block lg:!hidden",
          mobileOpen && "is-open",
        )}
        aria-hidden={!mobileOpen}
      >
        {/* Backdrop — tap anywhere to close */}
        <div
          className="mobile-nav-backdrop"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />

        {/* Slide panel */}
        <div
          id="mobile-nav-panel"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          className="mobile-nav-panel"
        >
          {/* Panel header */}
          <div className="mobile-nav-header">
            <Image
              src="/alphadevinfotech-logo.png"
              alt="AlphaDev Infotech"
              width={140}
              height={40}
              className="h-6 w-auto max-h-full object-contain"
              style={{ background: "transparent" }}
            />
            <button
              onClick={() => setMobileOpen(false)}
              className="navbar-toggle !flex lg:!hidden"
              aria-label="Close navigation menu"
            >
              <X size={20} strokeWidth={2} />
            </button>
          </div>

          {/* Nav links */}
          <nav className="mobile-nav-body" aria-label="Mobile navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "mobile-nav-link",
                  activeHref === link.href && "mobile-nav-link--active",
                )}
                aria-current={activeHref === link.href ? "page" : undefined}
                onClick={(e) => scrollToSection(e, link.href)}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Footer CTA */}
          <div className="mobile-nav-footer">
            <PrimaryButton
              href="#contact"
              onClick={(e) =>
                scrollToSection(
                  e as React.MouseEvent<HTMLAnchorElement>,
                  "#contact",
                )
              }
              className="w-full justify-center"
              id="mobile-navbar-cta"
            >
              Get in Touch
            </PrimaryButton>
          </div>
        </div>
      </div>
    </>
  );
}
