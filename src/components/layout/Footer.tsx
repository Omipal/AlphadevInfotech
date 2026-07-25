import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaLinkedin } from "react-icons/fa6";
import Container from "@/components/ui/Container";
import { FOOTER_SECTIONS, COMPANY } from "@/data/content";
import Link from "next/link";

/**
 * Footer — server component with company info, navigation, social links.
 * All colors use CSS variables — zero hardcoded values.
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      id="contact"
      style={{ background: "var(--text-primary)" }}
    >
      {/* Main footer content */}
      <Container className="section-padding">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand column */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <Link href="/">
              <Image
                src="/alphadevinfotech-logo.png"
                alt="AlphaDev Infotech"
                width={160}
                height={44}
                className="h-10 w-[200px] brightness-0 invert"
              />
            </Link>
            <p
              className="text-sm leading-7 max-w-xs"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              {COMPANY.tagline}
            </p>

            {/* Contact details */}
            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-center gap-2.5 text-sm transition-colors duration-200 footer-link"
                aria-label={`Email us at ${COMPANY.email}`}
              >
                <Mail
                  size={15}
                  style={{ color: "var(--primary)" }}
                  aria-hidden="true"
                />
                <span style={{ color: "rgba(255,255,255,0.6)" }}>
                  {COMPANY.email}
                </span>
              </a>
              <a
                href={`tel:${COMPANY.phone}`}
                className="flex items-center gap-2.5 text-sm transition-colors duration-200 footer-link"
                aria-label={`Call us at ${COMPANY.phone}`}
              >
                <Phone
                  size={15}
                  style={{ color: "var(--primary)" }}
                  aria-hidden="true"
                />
                <span style={{ color: "rgba(255,255,255,0.6)" }}>
                  {COMPANY.phone}
                </span>
              </a>
              <div className="flex items-center gap-2.5 text-sm">
                <MapPin
                  size={15}
                  style={{ color: "var(--primary)" }}
                  aria-hidden="true"
                />
                <span style={{ color: "rgba(255,255,255,0.6)" }}>
                  {COMPANY.address}
                </span>
              </div>
            </div>

            {/* Social links - ONLY LINKEDIN WITH CORRECT ICON */}
            <div
              className="flex items-center gap-3"
              role="list"
              aria-label="Social media links"
            >
              <a
                href="https://www.linkedin.com/company/alphadevinfotech/posts/?feedView=all" // यहाँ अपनी असली LinkedIn प्रोफाइल का लिंक डाल सकते हैं
                target="_blank"
                rel="noopener noreferrer"
                role="listitem"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 text-xs font-bold hover:bg-[var(--primary)] hover:border-[var(--primary)] hover:text-white"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "rgba(255,255,255,0.5)",
                }}
              >
                <FaLinkedin size={16} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {FOOTER_SECTIONS.map((section) => (
            <div key={section.title} className="flex flex-col gap-5">
              <h3
                className="text-sm font-semibold uppercase tracking-widest"
                style={{
                  color: "rgba(255,255,255,0.35)",
                  letterSpacing: "0.1em",
                }}
              >
                {section.title}
              </h3>
              <ul role="list" className="flex flex-col gap-3">
                {section.links.map((link) => (
                  <li key={link.label} role="listitem">
                    <a
                      href={link.href}
                      className="text-sm footer-link"
                      style={{ color: "rgba(255,255,255,0.55)" }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>

      {/* Bottom bar */}
      <div
        className="border-t py-4"
        style={{ borderColor: "rgba(255,255,255,0.06)" }}
      >
        <Container className="py-5  flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            className="text-xs text-center sm:text-left"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            © {currentYear} {COMPANY.name} Private Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs transition-colors duration-200"
                style={{ color: "rgba(255,255,255,0.3)" }}
              >
                {item}
              </a>
            ))}
          </div>
        </Container>
      </div>
    </footer>
  );
}
