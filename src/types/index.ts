// ============================================================
// SHARED TYPES
// ============================================================

export interface NavLink {
  label: string;
  href: string;
}

export interface Stat {
  value: string;
  prefix?: string;
  suffix?: string;
  label: string;
  description?: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
  highlights: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface CaseStudy {
  tag: string;
  title: string;
  description: string;
  results: string[];
  tech: string[];
}

export interface Technology {
  name: string;
  category: string;
}

export interface TechCategory {
  label: string;
  items: Technology[];
}

export interface FooterSection {
  title: string;
  links: { label: string; href: string }[];
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export interface CapabilityBullet {
  title: string;
  text: string;
}

export interface Capability {
  title: string;
  description: string;
  image: string;
  bullets: CapabilityBullet[];
}

export interface SuccessStoryFeature {
  title: string;
  text: string;
}

export interface SuccessStory {
  id: string;
  tabLabel: string;
  title: string;
  client: string;
  badge: string;
  challenge: string;
  solution: string;
  image: string;
  keyFeatures: SuccessStoryFeature[];
}

export interface SuccessStoriesData {
  eyebrow: string;
  heading: string;
  subheading: string;
  stories: SuccessStory[];
}
