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
  Capability,
  ProcessStep,
  CaseStudy,
  TechCategory,
  FooterSection,
} from "@/types";

// ——————————————————————————————————————————
// NAVIGATION
// ——————————————————————————————————————————
export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Why Us", href: "#why-us" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Success Stories", href: "#success-stories" },
  { label: "Technology", href: "#technology" },
  { label: "Contact", href: "#contact" },
];

// ——————————————————————————————————————————
// HERO
// ——————————————————————————————————————————
export const HERO = {
  badge: "Institutional-Grade Financial Technology",
  headline: ["Powering the", "Future of", "Algorithmic Finance."],
  subheadline:
    "We engineer ultra-low latency trading infrastructures and quantitative research systems that give institutional players the edge they need in microseconds.",
  ctaPrimary: { label: "Transform Your Infrastructure", href: "#contact" },
  ctaSecondary: { label: "Explore Solutions", href: "#capabilities" },
  trustLine: "Trusted by 50+ enterprise clients across India",
  techPills: ["Next.js", "React", "Node.js", "AWS", "TypeScript", "Flutter"],
  dashboard: {
    metrics: [
      { value: "98.7%", label: "System Uptime" },
      { value: "3.2s", label: "Avg Deploy" },
      { value: "52", label: "Live Projects" },
    ],
    chartBars: [60, 78, 48, 90, 68, 55, 84, 62, 74, 95, 52, 88],
    badge: "All Systems Operational",
  },
  floatCard1: { value: "200+", label: "Projects Delivered" },
  floatCard2: { value: "98%", label: "Client Satisfaction" },
};

// ——————————————————————————————————————————
// STATS
// ——————————————————————————————————————————
export const STATS: Stat[] = [
  {
    value: "0.1",
    prefix: "~",
    suffix: "ms",
    label: "Execution Latency",
    description: "",
  },
  {
    value: "5",
    suffix: "M+",
    label: "Tickets / Day",
    description: "",
  },
  {
    value: "99.99",
    suffix: "%",
    label: "Uptime Reliability",
    description: "",
  },
  // {
  //   value: "98",
  //   suffix: "%",
  //   label: "Client Retention",
  //   description: "Long-term partnerships built on trust",
  // },
];

// ——————————————————————————————————————————
// ABOUT
// ——————————————————————————————————————————
export const ABOUT = {
  eyebrow: "Engineering Excellence",
  headline: "About Us",
  body: [
    "Alphadev Infotech is a specialized financial technology firm dedicated to engineering high-performance trading infrastructures, investment platforms, and quantitative research systems. We bridge the gap between complex financial requirements and modern software engineering, delivering ultra-low latency solutions that drive institutional success.",
    "Our expertise lies in building mission-critical systems where speed, accuracy, and reliability are non-negotiable. From fractional investment platforms to high-frequency backtesting engines, we empower financial institutions to scale with confidence.",
  ],
  image: "/images/about_us_fintech.png",
  // highlights: [
  //   {
  //     title: "Precision Engineering",
  //     description:
  //       "We follow strict engineering practices: code reviews, CI/CD pipelines, automated testing, and zero-compromise quality standards.",
  //   },
  //   {
  //     title: "Partnership Approach",
  //     description:
  //       "We embed with your team as trusted technical partners, not just vendors. Long-term success is our shared goal.",
  //   },
  //   {
  //     title: "Outcome Driven",
  //     description:
  //       "Every decision we make is tied to measurable business outcomes — not just technical deliverables.",
  //   },
  // ],
};

// ——————————————————————————————————————————
// FEATURES / WHY CHOOSE US
// ——————————————————————————————————————————
export const FEATURES: Feature[] = [
  {
    icon: "Brain",
    title: "Domain Native",
    description:
      "We understand Greeks, order books, and latency as well as we understand code.",
  },
  {
    icon: "Zap",
    title: "Speed First",
    description:
      "Our architecture prioritizes execution speed and data throughput.",
  },
  {
    icon: "Server",
    title: "Scalable",
    description:
      "Systems designed from Day 1 to handle growing user bases and data volumes.",
  },
  {
    icon: "Shield",
    title: "Reliable",
    description:
      "Proven track record of deploying stable, financial-grade software.",
  },
];

// ——————————————————————————————————————————
// CORE CAPABILITIES (New Section from Old Website)
// ——————————————————————————————————————————
export const CAPABILITIES = {
  eyebrow: "Where Speed Meets Precision",
  heading: "Core Capabilities",
  items: [
    {
      title: "Quant Research & Backtesting",
      description: "",
      image: "/images/quant-research.png", // इमेज यहाँ सेव करें
      bullets: [
        {
          title: "Tick-Level Precision:",
          text: "Simulations run on granular tick data rather than aggregated candles, ensuring realistic fill assumptions.",
        },
        {
          title: "Portfolio Risk Analysis:",
          text: "Integrated benchmarking across multiple asset classes to assess drawdown and volatility exposure.",
        },
        {
          title: "High-Performance Computing:",
          text: "Utilization of parallel processing to handle multi-year simulations in minutes.",
        },
      ],
    },
    {
      title: "Algorithmic Trade Execution",
      description:
        "We automate complex workflows. Our Bulk Trade Execution System is engineered for high-volume order management.",
      image: "/images/algo-trade.png", // इमेज यहाँ सेव करें
      bullets: [
        {
          title: "Safe Orchestration:",
          text: "Slot-based logic to manage concurrent trade bursts, preventing rate-limit violations.",
        },
        {
          title: "Asynchronous Pipelines:",
          text: "Non-blocking architecture ensures near-zero latency during high-load market events.",
        },
        {
          title: "Institutional Security:",
          text: "Token-based authentication and immutable audit trails.",
        },
      ],
    },
    {
      title: "Real-Time Market Data",
      description:
        "We turn data into alpha. Our Time-Series Data Engine processes millions of data points daily.",
      image: "/images/market-data.png", // इमेज यहाँ सेव करें
      bullets: [
        {
          title: "Ultra-Low Latency Ingestion:",
          text: "Pipelines optimized for tick-by-tick ingestion and immediate signal generation.",
        },
        {
          title: "Custom Analytics:",
          text: "On-the-fly generation of custom candles (Renko, Heikin-Ashi) and indicators.",
        },
        {
          title: "Scalable Architecture:",
          text: "Built to handle millions of daily data points, streaming to downstream dashboards.",
        },
      ],
    },
  ],
};

// ——————————————————————————————————————————
// SERVICES
// ——————————————————————————————————————————
export const SERVICES: Service[] = [
  {
    icon: "Globe",
    title: "Enterprise Web Development",
    description:
      "Full-stack web applications built with modern frameworks — architected for performance, maintainability, and scale.",
    highlights: [
      "Next.js / React",
      "Node.js Backends",
      "API Design",
      "Microservices",
    ],
  },
  {
    icon: "Smartphone",
    title: "Mobile Applications",
    description:
      "Beautiful, performant mobile apps for iOS and Android — built cross-platform with React Native or Flutter.",
    highlights: [
      "React Native",
      "Flutter",
      "App Store Publishing",
      "OTA Updates",
    ],
  },
  {
    icon: "Cloud",
    title: "Cloud Solutions & DevOps",
    description:
      "Design, migrate, and optimize cloud infrastructure on AWS, Azure, or GCP with enterprise-grade reliability.",
    highlights: [
      "AWS / Azure / GCP",
      "Kubernetes",
      "Docker",
      "CI/CD Pipelines",
    ],
  },
  {
    icon: "BrainCircuit",
    title: "AI & Data Engineering",
    description:
      "Intelligent systems and data pipelines that transform raw information into competitive advantage.",
    highlights: [
      "ML Models",
      "Data Pipelines",
      "NLP & Vision",
      "LLM Integration",
    ],
  },
  {
    icon: "Figma",
    title: "UI/UX & Product Design",
    description:
      "User research, wireframing, design systems, and pixel-perfect interfaces that drive engagement and conversions.",
    highlights: [
      "Design Systems",
      "Prototyping",
      "User Research",
      "Accessibility",
    ],
  },
  {
    icon: "BarChart3",
    title: "IT Strategy & Consulting",
    description:
      "Technology strategy, architecture reviews, and roadmaps that align your engineering with business objectives.",
    highlights: [
      "Tech Audits",
      "Architecture",
      "Fractional CTO",
      "Team Scaling",
    ],
  },
];

// ——————————————————————————————————————————
// PROCESS
// ——————————————————————————————————————————
export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description:
      "We begin every engagement with a deep-dive into your business goals, user needs, and technical landscape. This shapes a precise project brief and technology strategy.",
  },
  {
    number: "02",
    title: "Design & Architecture",
    description:
      "Our designers and architects collaborate to define the visual language, system architecture, and API contracts before a single line of code is written.",
  },
  {
    number: "03",
    title: "Build & Test",
    description:
      "Development follows agile sprints with weekly demos. Every feature is covered by automated tests and reviewed in code before it ships.",
  },
  {
    number: "04",
    title: "Deploy & Scale",
    description:
      "We handle the full deployment pipeline — staging, production, monitoring, and ongoing optimization — so you can focus on growth, not infrastructure.",
  },
];

// ——————————————————————————————————————————
// RESENT PROJECT
// ——————————————————————————————————————————

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  techStack: string[];
}

export const RECENT_PROJECTS_DATA: Project[] = [
  {
    id: "1",
    title: "EduSmart Learning Platform",
    category: "Web Development",
    description:
      "A comprehensive learning management system designed for universities, featuring real-time collaboration tools, video lectures, and AI-driven personalized learning paths.",
    image: "/images/edusmart.png",
    techStack: ["Next.js", "Node.js", "PostgreSQL"],
  },
  {
    id: "2",
    title: "ShopEase E-Commerce",
    category: "E-Commerce",
    description:
      "High-performance headless e-commerce solution handling 10k+ daily transactions with sub-second page load times and seamless ERP integration.",
    image: "/images/shop-ease.png",
    techStack: ["React", "Shopify Plus", "Redis"],
  },
  {
    id: "3",
    title: "HealthCare+ App",
    category: "Mobile App",
    description:
      "HIPAA-compliant telehealth platform connecting patients with specialists. Features secure video consultations, prescription management, and health tracking.",
    image: "/images/health-care.png",
    techStack: ["React Native", "WebRTC", "AWS"],
  },
  {
    id: "4",
    title: "FinTrack Dashboard",
    category: "FinTech",
    description:
      "Enterprise financial analytics dashboard providing real-time insights into cash flow, expense tracking, and predictive revenue modeling using AI.",
    image: "/images/fintrack.png",
    techStack: ["Vue.js", "Python", "TensorFlow"],
  },
  {
    id: "5",
    title: "FoodieHub Platform",
    category: "Platform",
    description:
      "Multi-vendor food delivery platform with advanced logistics routing, real-time driver tracking, and automated vendor payout systems.",
    image: "/images/foodie-hub.png",
    techStack: ["Next.js", "Go", "Kubernetes"],
  },
];

// ——————————————————————————————————————————
// TECHNOLOGY STACK
// ——————————————————————————————————————————
export const TECH_CATEGORIES: TechCategory[] = [
  {
    label: "Frontend",
    items: [
      { name: "React", category: "Frontend" },
      { name: "Next.js", category: "Frontend" },
      { name: "TypeScript", category: "Frontend" },
      { name: "Vue.js", category: "Frontend" },
      { name: "Tailwind", category: "Frontend" },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "Node.js", category: "Backend" },
      { name: "Python", category: "Backend" },
      { name: "Java", category: "Backend" },
      { name: "Go", category: "Backend" },
      { name: "GraphQL", category: "Backend" },
    ],
  },
  {
    label: "Mobile",
    items: [
      { name: "Flutter", category: "Mobile" },
      { name: "React Native", category: "Mobile" },
      { name: "Swift", category: "Mobile" },
      { name: "Kotlin", category: "Mobile" },
    ],
  },
  {
    label: "Cloud & DevOps",
    items: [
      { name: "AWS", category: "Cloud" },
      { name: "Azure", category: "Cloud" },
      { name: "GCP", category: "Cloud" },
      { name: "Docker", category: "Cloud" },
      { name: "Kubernetes", category: "Cloud" },
    ],
  },
  {
    label: "Data & AI",
    items: [
      { name: "PostgreSQL", category: "Data" },
      { name: "MongoDB", category: "Data" },
      { name: "Redis", category: "Data" },
      { name: "TensorFlow", category: "Data" },
      { name: "PyTorch", category: "Data" },
    ],
  },
];

// ——————————————————————————————————————————
// SUCCESS STORIES
// ——————————————————————————————————————————
export const SUCCESS_STORIES_DATA = {
  eyebrow: "Success Stories & Domain Experience",
  heading: "Architecting Market-Leader Ecosystems",
  subheading:
    "Explore how we've engineered mission-critical infrastructure powering India's top financial platforms.",
  stories: [
    {
      id: "digigold",
      tabLabel: "WealthTech",
      title: "Digital Bullion Platform",
      client: "DigiGold.com",
      badge: "High-Frequency Wealth Engine",
      challenge:
        "To democratize access to precious metals through a secure, digital-first interface handling high-frequency transactions.",
      solution:
        "Engineered a robust, scalable platform facilitating real-time buying, selling, and vaulting of physical gold and silver.",
      image: "/images/digigold.png",
      keyFeatures: [
        {
          title: "Real-Time Market Integration",
          text: "Live bullion market rates with ultra-low latency updates.",
        },
        {
          title: "Micro-Investment Logic",
          text: "Fractional ownership algorithms enabling small ticket investments.",
        },
        {
          title: "Bank-Grade Vault Security",
          text: "Secure transaction processing and physical vault auditing integrations.",
        },
      ],
    },
    {
      id: "fixedincome",
      tabLabel: "Debt Markets",
      title: "Fixed Income Marketplace",
      client: "TheFixedIncome.com",
      badge: "Regulatory Compliant Ledger",
      challenge:
        "To simplify the complex bond market for retail investors while maintaining strict SEBI regulatory compliance.",
      solution:
        "Built a transparent, user-friendly marketplace for discovering and investing in corporate and government bonds.",
      image: "/images/fixed-income.png",
      keyFeatures: [
        {
          title: "Simplified Yield Calculation",
          text: "Automated logic for portfolio tracking and bond yields.",
        },
        {
          title: "Secure KYC Workflows",
          text: "Onboarding flows fully compliant with SEBI regulations.",
        },
        {
          title: "Educational Data Viz",
          text: "Transparent data visualization modules for debt instruments.",
        },
      ],
    },
  ],
};

// ——————————————————————————————————————————
// FOOTER
// ——————————————————————————————————————————
export const FOOTER_SECTIONS: FooterSection[] = [
  {
    title: "Services",
    links: [
      { label: "Web Development", href: "#services" },
      { label: "Mobile Apps", href: "#services" },
      { label: "Cloud & DevOps", href: "#services" },
      { label: "AI & Data", href: "#services" },
      { label: "UI/UX Design", href: "#services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#about" },
      { label: "Case Studies", href: "#case-studies" },
      { label: "Technology", href: "#technology" },
      { label: "Process", href: "#process" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "LinkedIn", href: "#" },
      { label: "Twitter", href: "#" },
      { label: "GitHub", href: "#" },
      { label: "Dribbble", href: "#" },
    ],
  },
];

export const COMPANY = {
  name: "AlphaDev Infotech",
  tagline: "Engineering Digital Excellence",
  address: "India",
  email: "hello@alphadev.in",
  phone: "+91 00000 00000",
  founded: "2024",
};
