/**
 * CONTENT DATA — Single source of truth for all landing page copy.
 * Replace placeholder text section by section when real content is provided.
 * Components import from this file — no content is hardcoded inside components.
 */

import type {
  NavLink,
  Stat,
  Feature,
  Service,
  ProcessStep,
  CaseStudy,
  TechCategory,
  FooterSection,
} from '@/types'

// ——————————————————————————————————————————
// NAVIGATION
// ——————————————————————————————————————————
export const NAV_LINKS: NavLink[] = [
  { label: 'About',       href: '#about' },
  { label: 'Services',    href: '#services' },
  { label: 'Case Studies',href: '#case-studies' },
  { label: 'Technology',  href: '#technology' },
  { label: 'Contact',     href: '#contact' },
]

// ——————————————————————————————————————————
// HERO
// ——————————————————————————————————————————
export const HERO = {
  badge: 'Enterprise Software Partner',
  headline: ['Engineering Digital', 'Excellence for', 'Tomorrow\'s Enterprises'],
  subheadline:
    'AlphaDev Infotech delivers enterprise-grade software development, cloud solutions, and digital transformation — precision-engineered for businesses that demand excellence.',
  ctaPrimary:  { label: 'Explore Our Services', href: '#services' },
  ctaSecondary:{ label: 'Book a Discovery Call', href: '#contact' },
  trustLine: 'Trusted by 50+ enterprise clients across India',
  techPills: ['Next.js', 'React', 'Node.js', 'AWS', 'TypeScript', 'Flutter'],
  dashboard: {
    metrics: [
      { value: '98.7%', label: 'System Uptime' },
      { value: '3.2s',  label: 'Avg Deploy'    },
      { value: '52',    label: 'Live Projects'  },
    ],
    chartBars: [60, 78, 48, 90, 68, 55, 84, 62, 74, 95, 52, 88],
    badge: 'All Systems Operational',
  },
  floatCard1: { value: '200+', label: 'Projects Delivered' },
  floatCard2: { value: '98%',  label: 'Client Satisfaction' },
}

// ——————————————————————————————————————————
// STATS
// ——————————————————————————————————————————
export const STATS: Stat[] = [
  {
    value: '200',
    suffix: '+',
    label: 'Projects Delivered',
    description: 'Across web, mobile, cloud and AI',
  },
  {
    value: '50',
    suffix: '+',
    label: 'Enterprise Clients',
    description: 'Businesses across India and globally',
  },
  {
    value: '8',
    suffix: '+',
    label: 'Years of Experience',
    description: 'Building enterprise-grade software',
  },
  {
    value: '98',
    suffix: '%',
    label: 'Client Retention',
    description: 'Long-term partnerships built on trust',
  },
]

// ——————————————————————————————————————————
// ABOUT
// ——————————————————————————————————————————
export const ABOUT = {
  eyebrow: 'Who We Are',
  headline: 'Where Innovation Meets Reliability',
  body: [
    'AlphaDev Infotech Private Limited is a full-service technology company dedicated to building enterprise-grade digital solutions. We partner with businesses to design, build, and scale software that solves real problems and drives measurable growth.',
    'Our multidisciplinary team combines deep engineering expertise with a design-first mindset — delivering products that are not just functional, but genuinely exceptional in quality and experience.',
  ],
  highlights: [
    {
      title: 'Precision Engineering',
      description: 'We follow strict engineering practices: code reviews, CI/CD pipelines, automated testing, and zero-compromise quality standards.',
    },
    {
      title: 'Partnership Approach',
      description: 'We embed with your team as trusted technical partners, not just vendors. Long-term success is our shared goal.',
    },
    {
      title: 'Outcome Driven',
      description: 'Every decision we make is tied to measurable business outcomes — not just technical deliverables.',
    },
  ],
}

// ——————————————————————————————————————————
// FEATURES / WHY CHOOSE US
// ——————————————————————————————————————————
export const FEATURES: Feature[] = [
  {
    icon: 'Code2',
    title: 'Custom Software Engineering',
    description:
      'Bespoke software solutions architected for scale, security, and performance — built to grow with your business.',
  },
  {
    icon: 'Cloud',
    title: 'Cloud & DevOps',
    description:
      'Multi-cloud architecture, Kubernetes orchestration, and CI/CD pipelines that keep your systems always on.',
  },
  {
    icon: 'Smartphone',
    title: 'Mobile Applications',
    description:
      'Native and cross-platform mobile experiences on iOS and Android, built with Flutter and React Native.',
  },
  {
    icon: 'BrainCircuit',
    title: 'AI & Machine Learning',
    description:
      'From data engineering to model deployment — we help you extract real business value from your data.',
  },
  {
    icon: 'Palette',
    title: 'Product Design (UI/UX)',
    description:
      'Research-driven design systems and interfaces that convert users into advocates, not just customers.',
  },
  {
    icon: 'LineChart',
    title: 'IT Strategy & Consulting',
    description:
      'Fractional CTO support, technology audits, and digital transformation roadmaps tailored to your stage.',
  },
]

// ——————————————————————————————————————————
// SERVICES
// ——————————————————————————————————————————
export const SERVICES: Service[] = [
  {
    icon: 'Globe',
    title: 'Enterprise Web Development',
    description:
      'Full-stack web applications built with modern frameworks — architected for performance, maintainability, and scale.',
    highlights: ['Next.js / React', 'Node.js Backends', 'API Design', 'Microservices'],
  },
  {
    icon: 'Smartphone',
    title: 'Mobile Applications',
    description:
      'Beautiful, performant mobile apps for iOS and Android — built cross-platform with React Native or Flutter.',
    highlights: ['React Native', 'Flutter', 'App Store Publishing', 'OTA Updates'],
  },
  {
    icon: 'Cloud',
    title: 'Cloud Solutions & DevOps',
    description:
      'Design, migrate, and optimize cloud infrastructure on AWS, Azure, or GCP with enterprise-grade reliability.',
    highlights: ['AWS / Azure / GCP', 'Kubernetes', 'Docker', 'CI/CD Pipelines'],
  },
  {
    icon: 'BrainCircuit',
    title: 'AI & Data Engineering',
    description:
      'Intelligent systems and data pipelines that transform raw information into competitive advantage.',
    highlights: ['ML Models', 'Data Pipelines', 'NLP & Vision', 'LLM Integration'],
  },
  {
    icon: 'Figma',
    title: 'UI/UX & Product Design',
    description:
      'User research, wireframing, design systems, and pixel-perfect interfaces that drive engagement and conversions.',
    highlights: ['Design Systems', 'Prototyping', 'User Research', 'Accessibility'],
  },
  {
    icon: 'BarChart3',
    title: 'IT Strategy & Consulting',
    description:
      'Technology strategy, architecture reviews, and roadmaps that align your engineering with business objectives.',
    highlights: ['Tech Audits', 'Architecture', 'Fractional CTO', 'Team Scaling'],
  },
]

// ——————————————————————————————————————————
// PROCESS
// ——————————————————————————————————————————
export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    description:
      'We begin every engagement with a deep-dive into your business goals, user needs, and technical landscape. This shapes a precise project brief and technology strategy.',
  },
  {
    number: '02',
    title: 'Design & Architecture',
    description:
      'Our designers and architects collaborate to define the visual language, system architecture, and API contracts before a single line of code is written.',
  },
  {
    number: '03',
    title: 'Build & Test',
    description:
      'Development follows agile sprints with weekly demos. Every feature is covered by automated tests and reviewed in code before it ships.',
  },
  {
    number: '04',
    title: 'Deploy & Scale',
    description:
      'We handle the full deployment pipeline — staging, production, monitoring, and ongoing optimization — so you can focus on growth, not infrastructure.',
  },
]

// ——————————————————————————————————————————
// CASE STUDIES
// ——————————————————————————————————————————
export const CASE_STUDIES: CaseStudy[] = [
  {
    tag: 'FinTech',
    title: 'Enterprise Lending Platform',
    description:
      'Designed and built a high-throughput loan origination system handling 10,000+ daily applications with real-time credit scoring and automated underwriting.',
    results: ['10K+ daily applications', '99.9% uptime', '40% faster decisions'],
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'AWS'],
  },
  {
    tag: 'Healthcare',
    title: 'Telehealth Management Suite',
    description:
      'End-to-end telehealth platform connecting 500+ doctors with patients across India — HIPAA-compliant, with real-time video, e-prescriptions, and analytics.',
    results: ['500+ doctors onboarded', '2M+ consultations', 'HIPAA compliant'],
    tech: ['React Native', 'WebRTC', 'GCP', 'MongoDB'],
  },
  {
    tag: 'Logistics',
    title: 'Supply Chain Visibility Dashboard',
    description:
      'Real-time supply chain tracking and analytics platform for a leading FMCG company — reducing logistics costs by 22% through intelligent routing and AI forecasting.',
    results: ['22% cost reduction', '1200+ live routes', 'AI-driven ETA accuracy'],
    tech: ['Vue.js', 'Python', 'Kubernetes', 'Redis'],
  },
]

// ——————————————————————————————————————————
// TECHNOLOGY STACK
// ——————————————————————————————————————————
export const TECH_CATEGORIES: TechCategory[] = [
  {
    label: 'Frontend',
    items: [
      { name: 'React',      category: 'Frontend' },
      { name: 'Next.js',    category: 'Frontend' },
      { name: 'TypeScript', category: 'Frontend' },
      { name: 'Vue.js',     category: 'Frontend' },
      { name: 'Tailwind',   category: 'Frontend' },
    ],
  },
  {
    label: 'Backend',
    items: [
      { name: 'Node.js',  category: 'Backend' },
      { name: 'Python',   category: 'Backend' },
      { name: 'Java',     category: 'Backend' },
      { name: 'Go',       category: 'Backend' },
      { name: 'GraphQL',  category: 'Backend' },
    ],
  },
  {
    label: 'Mobile',
    items: [
      { name: 'Flutter',       category: 'Mobile' },
      { name: 'React Native',  category: 'Mobile' },
      { name: 'Swift',         category: 'Mobile' },
      { name: 'Kotlin',        category: 'Mobile' },
    ],
  },
  {
    label: 'Cloud & DevOps',
    items: [
      { name: 'AWS',        category: 'Cloud' },
      { name: 'Azure',      category: 'Cloud' },
      { name: 'GCP',        category: 'Cloud' },
      { name: 'Docker',     category: 'Cloud' },
      { name: 'Kubernetes', category: 'Cloud' },
    ],
  },
  {
    label: 'Data & AI',
    items: [
      { name: 'PostgreSQL', category: 'Data' },
      { name: 'MongoDB',    category: 'Data' },
      { name: 'Redis',      category: 'Data' },
      { name: 'TensorFlow', category: 'Data' },
      { name: 'PyTorch',    category: 'Data' },
    ],
  },
]

// ——————————————————————————————————————————
// FOOTER
// ——————————————————————————————————————————
export const FOOTER_SECTIONS: FooterSection[] = [
  {
    title: 'Services',
    links: [
      { label: 'Web Development',  href: '#services' },
      { label: 'Mobile Apps',      href: '#services' },
      { label: 'Cloud & DevOps',   href: '#services' },
      { label: 'AI & Data',        href: '#services' },
      { label: 'UI/UX Design',     href: '#services' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us',    href: '#about' },
      { label: 'Case Studies',href: '#case-studies' },
      { label: 'Technology',  href: '#technology' },
      { label: 'Process',     href: '#process' },
      { label: 'Contact',     href: '#contact' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { label: 'LinkedIn',  href: '#' },
      { label: 'Twitter',   href: '#' },
      { label: 'GitHub',    href: '#' },
      { label: 'Dribbble',  href: '#' },
    ],
  },
]

export const COMPANY = {
  name: 'AlphaDev Infotech',
  tagline: 'Engineering Digital Excellence',
  address: 'India',
  email: 'hello@alphadev.in',
  phone: '+91 00000 00000',
  founded: '2024',
}
