"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Tag } from "lucide-react";
import Image from "next/image";


const projects = [
  {
    title: "Restaurant Operations Analysis",
    subtitle: "Agile E-commerce Platform",
    summary: "I developed a comprehensive data management and operations system for The Gallery Café. Optimized booking operations and reduced manual administrative overhead by 40%.",
    image: "/Portfolio/project1.png",
    tags: ["Data Modeling", "MySQL", "Dashboards"],
    highlight: "Designed a structured MySQL database to track bookings and revenue securely.",
    live: "/Portfolio/gallery-cafe/index.html",
  },
  {
    title: "Financial Analytics Dashboard",
    subtitle: "Data Visualisation & Analytics",
    summary: "A real-time Business Intelligence dashboard designed for personal and corporate finance tracking. Engineered interactive visual reports for Income vs Expense tracking.",
    image: "/Portfolio/project2.png",
    tags: ["Data Viz", "Chart.js", "Finance"],
    highlight: "Designed real-time KPIs and dynamic transaction tracking metrics.",
    live: "/Portfolio/finance-dashboard/index.html",
  },
  {
    title: "User Engagement Tracking",
    subtitle: "Metrics & A/B Testing",
    summary: "An analytical prototype focusing on how organizations can track and visualize community engagement metrics across a social platform. Developed a trending topics algorithm.",
    image: "/Portfolio/project3.png",
    tags: ["Metrics", "GraphQL", "A/B Testing"],
    highlight: "Developed a trending topics algorithm to aggregate popular real-time content.",
    live: "/Portfolio/social-connect/index.html",
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
                  <a href={p.live} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", fontWeight: 600, color: "#60a5fa", textDecoration: "none", border: "1px solid rgba(59,130,246,0.4)", borderRadius: "999px", padding: "7px 14px", transition: "all 0.2s ease", width: "100%", justifyContent: "center" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#3b82f6"; (e.currentTarget as HTMLElement).style.color = "#fff"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = ""; (e.currentTarget as HTMLElement).style.color = "#60a5fa"; }}
                  >
                    <ExternalLink style={{ width: "13px", height: "13px" }} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
