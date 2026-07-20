import Navbar          from '@/components/layout/Navbar'
import Footer          from '@/components/layout/Footer'
import HeroSection     from '@/components/sections/HeroSection'
import StatsSection    from '@/components/sections/StatsSection'
import AboutSection    from '@/components/sections/AboutSection'
import FeaturesSection from '@/components/sections/FeaturesSection'
import ServicesSection from '@/components/sections/ServicesSection'
import ProcessSection  from '@/components/sections/ProcessSection'
import CaseStudiesSection from '@/components/sections/CaseStudiesSection'
import TechStackSection from '@/components/sections/TechStackSection'
import CTASection      from '@/components/sections/CTASection'

/**
 * Home page — single-page landing with all sections composed in
 * the order specified by landing-page-workflow.md:
 *
 * 1. Header / Navbar
 * 2. Hero
 * 3. Trust Indicators / Stats
 * 4. About
 * 5. Features / Why Choose Us
 * 6. Services / Capabilities
 * 7. Process
 * 8. Case Studies
 * 9. Technology Stack
 * 10. CTA Banner
 * 11. Footer
 */
export default function HomePage() {
  return (
    <>
      {/* ── Navigation ── */}
      <Navbar />

      {/* ── Main Content ── */}
      <main id="main-content" tabIndex={-1}>

        {/* 1. Hero */}
        <HeroSection />

        {/* 2. Trust Indicators */}
        <StatsSection />

        {/* 3. About */}
        <AboutSection />

        {/* 4. Why Choose Us */}
        <FeaturesSection />

        {/* 5. Services */}
        <ServicesSection />

        {/* 6. Process */}
        <ProcessSection />

        {/* 7. Case Studies */}
        <CaseStudiesSection />

        {/* 8. Technology Stack */}
        <TechStackSection />

        {/* 9. CTA Banner */}
        <CTASection />

      </main>

      {/* ── Footer ── */}
      <Footer />
    </>
  )
}
