"use client";

import { ExternalLink, Mail, BarChart2, Heart } from "lucide-react";

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { icon: <LinkedInIcon />, href: "https://linkedin.com/in/sanjeethan-jeganathan", label: "LinkedIn" },
  { icon: <Mail style={{ width: "16px", height: "16px" }} />, href: "mailto:sanjeethdilani18@gmail.com", label: "Email" },
];

export default function Footer() {
  const scrollTo = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer style={{ background: "#040a13", borderTop: "1px solid rgba(255,255,255,0.06)", padding: "64px 0 40px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "40px", marginBottom: "48px" }}>
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
              <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: "linear-gradient(135deg, #3b82f6, #8b5cf6)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <BarChart2 style={{ width: "18px", height: "18px", color: "#fff" }} />
              </div>
              <span style={{ fontWeight: 800, fontSize: "1rem", color: "#fff" }}>Sanjeethan Jeganathan</span>
            </div>
            <p style={{ color: "#475569", fontSize: "13px", lineHeight: 1.7 }}>
              Data Science Student · Aspiring Data Analyst &amp; Business Analyst. Turning data into decisions, one insight at a time.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h4 style={{ color: "#fff", fontWeight: 700, fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "16px" }}>Navigate</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              {links.map((l) => (
                <li key={l.href}>
                  <button
                    onClick={() => scrollTo(l.href)}
                    style={{ background: "none", border: "none", color: "#475569", fontSize: "13px", cursor: "pointer", padding: 0, transition: "color 0.2s ease" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                    onMouseLeave={e => (e.currentTarget.style.color = "#475569")}
                  >{l.label}</button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 style={{ color: "#fff", fontWeight: 700, fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "16px" }}>Connect</h4>
            <div style={{ display: "flex", gap: "10px" }}>
              {socials.map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{ width: "38px", height: "38px", borderRadius: "50%", border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#64748b", textDecoration: "none", transition: "all 0.2s ease" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#fff"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(59,130,246,0.5)"; (e.currentTarget as HTMLElement).style.background = "rgba(59,130,246,0.1)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "#64748b"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)"; (e.currentTarget as HTMLElement).style.background = ""; }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "28px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "12px" }}>
          <p style={{ color: "#334155", fontSize: "12px" }}>© {new Date().getFullYear()} Sanjeethan Jeganathan. All rights reserved.</p>
          <p style={{ color: "#334155", fontSize: "12px", display: "flex", alignItems: "center", gap: "5px" }}>
            Built with precision and <Heart style={{ width: "12px", height: "12px", color: "#ef4444", fill: "#ef4444" }} /> for data-driven impact
          </p>
        </div>
      </div>
    </footer>
  );
}
