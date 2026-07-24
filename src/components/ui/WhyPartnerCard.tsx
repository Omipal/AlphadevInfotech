"use client";

import { cn } from "@/utils/cn";
import type { Feature } from "@/types";
import { Brain, Zap, Server, Shield } from "lucide-react";

interface WhyPartnerCardProps {
  feature: Feature;
  index: number;
  className?: string;
}

// यहाँ हमने Lucide React के असली आइकन्स को मैप कर दिया है
const ICON_MAP: Record<string, React.ElementType> = {
  Brain: Brain,
  Zap: Zap,
  Server: Server,
  Shield: Shield,
};

/**
 * WhyPartnerCard — individual card in the "Why Partner With Us" grid.
 * Renamed from FeatureCard to match the section context.
 */
export default function WhyPartnerCard({
  feature,
  index,
  className,
}: WhyPartnerCardProps) {
  // आइकॉन को मैप से निकालें
  const IconComponent = ICON_MAP[feature.icon];

  return (
    <article
      className={cn("feature-card gsap-fade-up", className)}
      aria-label={feature.title}
      data-index={index}
    >
      {/* Icon (डिज़ाइन में कोई बदलाव नहीं, बस असली आइकॉन रेंडर किया है) */}
      <div className="icon-wrap icon-wrap-lg mb-5">
        {IconComponent ? (
          <IconComponent size={24} strokeWidth={2} aria-hidden="true" />
        ) : (
          <span aria-hidden="true" className="text-xl font-bold">
            ◆
          </span>
        )}
      </div>

      {/* Content */}
      <h3
        className="font-heading text-lg font-700 mb-2"
        style={{
          fontWeight: 700,
          color: "var(--text-primary)",
          fontFamily: "var(--font-family-heading)",
        }}
      >
        {feature.title}
      </h3>
      <p
        className="text-sm leading-7"
        style={{ color: "var(--text-secondary)" }}
      >
        {feature.description}
      </p>
    </article>
  );
}
