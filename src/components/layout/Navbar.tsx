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

/**
 * Navbar
 *
 * Layout (all breakpoints share the same 80 px fixed header):
 *
 *  Mobile  (<768px)  : [Logo]                [Hamburger]
 *  Tablet  (768–1023): [Logo] [Nav — compressed] [CTA — small]
 *  Desktop (≥1024px) : [Logo] [Nav — full gap]   [CTA]
 *
 * Scroll behaviour:
 *  • Transparent at the top of the page.
 *  • On scroll > 24 px → solid opaque white + blur + shadow.
 *    Background is rgba(255,255,255,0.97) so NO page content
 *    is ever visible through the header.
 *
 * Active section:
 *  • IntersectionObserver watches each nav-target section.
 *  • The matching nav link gains `nav-link--active` (brand colour + underline).
 *
 * Mobile drawer:
 *  • CSS-class–driven (`.is-open`) — no React conditional rendering.
 *    This eliminates the first-open flicker caused by hydration.
 *  • Overlay: `display:none` on ≥768 px (via CSS media query) so
 *    it can never accidentally block desktop interaction.
 *  • Smooth 380 ms translate + opacity transitions driven purely by CSS.
 *  • Body scroll locked while open; released on close.
 *  • Closes on: link click, backdrop tap, Escape key.
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeHref, setActiveHref] = useState<string>("");
  const observerRef = useRef<IntersectionObserver | null>(null);

  // ── Scroll detection ───────────────────────────────────────────────────
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll(); // evaluate immediately on mount (handles pre-scrolled pages)
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
        rootMargin: "-80px 0px -25% 0px", // account for 80 px navbar
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
        lenis.scrollTo(target, { offset: -84 }); // 80px bar + 4px breathing
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
          {/* ── Logo ──────────────────────────────────────────────────── */}
          <a
            href="/"
            className="navbar-logo-link"
            aria-label="AlphaDev Infotech — home"
          >
            <Image
              src="/alphadevinfotech-logo.png"
              alt="AlphaDev Infotech logo"
              width={130}
              height={39}
              priority
              className="h-4 md:h-5 w-[200px] max-h-full object-contain"
            />
          </a>

          {/* ── Desktop nav links (hidden on mobile via .navbar-links CSS) ── */}
          <ul role="list" className="navbar-links">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    "nav-link",
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

          {/* ── CTA button (hidden on mobile via .navbar-cta CSS) ────── */}
          <div className="navbar-cta">
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

          {/* ── Hamburger (visible ONLY below md) ────────────────────── */}
          {/*
           * Hidden at md+ via Tailwind md:hidden.
           * The CSS `.navbar-toggle` class provides sizing + hover state.
           */}
          <button
            className="navbar-toggle"
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
      {/*
       * The overlay lives in the DOM at all times (no conditional render).
       * CSS `display:none` hides it on ≥768 px so desktop is unaffected.
       * The `.is-open` class drives ALL animations:
       *   backdrop  : opacity 0 → 1
       *   panel     : translateX(100%) → translateX(0)
       *   overlay   : pointer-events: none → auto
       *
       * This approach means the first open is instant with no flicker.
       */}
      <div
        className={cn("mobile-nav-overlay", mobileOpen && "is-open")}
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
          {/* Panel header — matches navbar height */}
          <div className="mobile-nav-header">
            <Image
              src="/alphadevinfotech-logo.png"
              alt="AlphaDev Infotech"
              width={130}
              height={39}
              className="h-6 w-auto max-h-full object-contain"
              style={{ background: "transparent" }}
            />
            <button
              onClick={() => setMobileOpen(false)}
              className="navbar-toggle"
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
