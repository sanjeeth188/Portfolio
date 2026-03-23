"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Tag } from "lucide-react";
import Image from "next/image";

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const projects = [
  {
    title: "Café Website",
    subtitle: "Agile E-commerce Platform",
    summary: "An agile e-commerce solution developed using user story mapping principles, focused on usability, structured planning, and business-oriented functionality.",
    image: "/project1.png",
    tags: ["HTML/CSS/JS", "Agile", "UX Design", "E-commerce"],
    highlight: "User story-driven development with sprint planning and retrospective documentation",
    github: "https://github.com/sanjeeth188",
    live: null,
  },
  {
    title: "Flex Fit",
    subtitle: "Gym Management Platform",
    summary: "A full-stack gym management platform with smart member tracking, class scheduling, and operational management features to streamline gym administration.",
    image: "/project2.png",
    tags: ["Full-Stack", "Database Design", "CRUD", "System Design"],
    highlight: "End-to-end member lifecycle management with reporting and operational dashboards",
    github: "https://github.com/sanjeeth188",
    live: null,
  },
  {
    title: "Finance Dashboard",
    subtitle: "Data Visualisation & Analytics",
    summary: "An interactive financial analytics dashboard built to visualise revenue trends, budget tracking, and KPI performance metrics — demonstrating Power BI and data storytelling capabilities.",
    image: "/project3.png",
    tags: ["Power BI", "SQL", "Data Analysis", "KPI Tracking"],
    highlight: "Dynamic visualisations with drill-through capability and automated data refresh",
    github: "https://github.com/sanjeeth188",
    live: "https://sanjeeth188.github.io/Portfolio/",
  },
];

export default function Projects() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="projects" style={{ padding: "128px 0", background: "#080f1c", scrollMarginTop: "64px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "72px" }}
        >
          <span style={{ color: "#60a5fa", fontWeight: 600, fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.1em" }}>Portfolio</span>
          <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)", fontWeight: 900, color: "#fff", marginTop: "12px", lineHeight: 1.1 }}>
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p style={{ color: "#64748b", marginTop: "16px", maxWidth: "520px", marginLeft: "auto", marginRight: "auto", fontSize: "1rem", lineHeight: 1.7 }}>
            Real-world projects demonstrating technical skill, analytical thinking, and business-focused problem solving.
          </p>
        </motion.div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(310px, 1fr))", gap: "24px" }}>
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "20px", overflow: "hidden", display: "flex", flexDirection: "column", transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 60px rgba(59,130,246,0.15)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(59,130,246,0.4)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ""; (e.currentTarget as HTMLElement).style.boxShadow = ""; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)"; }}
            >
              {/* Image */}
              <div style={{ position: "relative", height: "200px", background: "rgba(59,130,246,0.1)", overflow: "hidden" }}>
                <Image src={p.image} alt={p.title} fill sizes="400px" style={{ objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(8,15,28,0.8) 0%, transparent 60%)" }} />
                <div style={{ position: "absolute", bottom: "12px", left: "12px", display: "flex", gap: "6px" }}>
                  {p.tags.slice(0, 2).map((t) => (
                    <span key={t} style={{ fontSize: "11px", fontWeight: 700, padding: "3px 8px", borderRadius: "999px", background: "rgba(13,27,42,0.85)", color: "#93c5fd", border: "1px solid rgba(59,130,246,0.4)", backdropFilter: "blur(4px)" }}>{t}</span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: "24px", display: "flex", flexDirection: "column", flex: 1 }}>
                <span style={{ fontSize: "11px", color: "#475569", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "4px" }}>{p.subtitle}</span>
                <h3 style={{ color: "#fff", fontWeight: 800, fontSize: "1.2rem", marginBottom: "12px" }}>{p.title}</h3>
                <p style={{ color: "#64748b", fontSize: "13px", lineHeight: 1.7, marginBottom: "16px", flex: 1 }}>{p.summary}</p>

                {/* Highlight */}
                <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", background: "rgba(59,130,246,0.07)", border: "1px solid rgba(59,130,246,0.2)", borderRadius: "10px", padding: "10px 12px", marginBottom: "16px" }}>
                  <Tag style={{ width: "13px", height: "13px", color: "#60a5fa", marginTop: "2px", flexShrink: 0 }} />
                  <p style={{ fontSize: "12px", color: "#cbd5e1", lineHeight: 1.6, margin: 0 }}>{p.highlight}</p>
                </div>

                {/* Tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "18px" }}>
                  {p.tags.map((t) => (
                    <span key={t} style={{ fontSize: "11px", fontWeight: 500, padding: "4px 10px", borderRadius: "999px", background: "rgba(255,255,255,0.05)", color: "#64748b", border: "1px solid rgba(255,255,255,0.08)" }}>{t}</span>
                  ))}
                </div>

                {/* Links */}
                <div style={{ display: "flex", gap: "10px" }}>
                  <a href={p.github} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", fontWeight: 600, color: "#94a3b8", textDecoration: "none", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "999px", padding: "7px 14px", transition: "all 0.2s ease" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#fff"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.3)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "#94a3b8"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.15)"; }}
                  >
                    <GithubIcon /> GitHub
                  </a>
                  {p.live ? (
                    <a href={p.live} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", fontWeight: 600, color: "#60a5fa", textDecoration: "none", border: "1px solid rgba(59,130,246,0.4)", borderRadius: "999px", padding: "7px 14px", transition: "all 0.2s ease" }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#3b82f6"; (e.currentTarget as HTMLElement).style.color = "#fff"; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = ""; (e.currentTarget as HTMLElement).style.color = "#60a5fa"; }}
                    >
                      <ExternalLink style={{ width: "13px", height: "13px" }} /> Live Demo
                    </a>
                  ) : (
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#334155", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "999px", padding: "7px 14px", cursor: "not-allowed" }}>
                      <ExternalLink style={{ width: "13px", height: "13px" }} /> Coming Soon
                    </span>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
