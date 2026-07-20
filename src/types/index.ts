// ============================================================
// SHARED TYPES
// ============================================================

export interface NavLink {
  label: string
  href: string
}

export interface Stat {
  value: string
  suffix?: string
  label: string
  description?: string
}

export interface Feature {
  icon: string
  title: string
  description: string
}

export interface Service {
  icon: string
  title: string
  description: string
  highlights: string[]
}

export interface ProcessStep {
  number: string
  title: string
  description: string
}

export interface CaseStudy {
  tag: string
  title: string
  description: string
  results: string[]
  tech: string[]
}

export interface Technology {
  name: string
  category: string
}

export interface TechCategory {
  label: string
  items: Technology[]
}

export interface FooterSection {
  title: string
  links: { label: string; href: string }[]
}

export interface SocialLink {
  label: string
  href: string
  icon: string
}
