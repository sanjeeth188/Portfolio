"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skillGroups = [
  {
    title: "Data Analysis & Visualisation",
    emoji: "📊",
    borderColor: "rgba(59,130,246,0.35)",
    badgeBg: "rgba(59,130,246,0.12)",
    badgeColor: "#93c5fd",
    badgeBorder: "rgba(59,130,246,0.3)",
    skills: ["SQL", "Python", "R", "Power BI", "Tableau", "Excel", "DAX", "Pandas", "NumPy"],
  },
  {
    title: "Business Analysis",
    emoji: "🧩",
    borderColor: "rgba(139,92,246,0.35)",
    badgeBg: "rgba(139,92,246,0.12)",
    badgeColor: "#c4b5fd",
    badgeBorder: "rgba(139,92,246,0.3)",
    skills: ["Requirement Gathering", "SRS / BRD", "UML", "User Story Mapping", "Gap Analysis", "Stakeholder Management"],
  },
  {
    title: "Project & Process Support",
    emoji: "⚙️",
    borderColor: "rgba(16,185,129,0.35)",
    badgeBg: "rgba(16,185,129,0.12)",
    badgeColor: "#6ee7b7",
    badgeBorder: "rgba(16,185,129,0.3)",
    skills: ["Agile / Scrum", "SDLC", "JIRA", "Trello", "Process Improvement", "Resource Planning"],
  },
  {
    title: "Technical & Design Tools",
    emoji: "🛠️",
    borderColor: "rgba(245,158,11,0.35)",
    badgeBg: "rgba(245,158,11,0.12)",
    badgeColor: "#fcd34d",
    badgeBorder: "rgba(245,158,11,0.3)",
    skills: ["GitHub", "Figma", "Wireframing", "Dashboard Design", "Microsoft 365"],
  },
  {
    title: "Marketing & Commercial Analytics",
    emoji: "📈",
    borderColor: "rgba(239,68,68,0.35)",
    badgeBg: "rgba(239,68,68,0.12)",
    badgeColor: "#fca5a5",
    badgeBorder: "rgba(239,68,68,0.3)",
    skills: ["CTR Analysis", "ROAS", "Conversion Tracking", "Competitor Benchmarking", "Pricing Strategy", "Sales Reporting"],
  },
];

export default function Skills() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="skills" style={{ padding: "128px 0", background: "#080f1c", scrollMarginTop: "64px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "72px" }}
        >
          <span style={{ color: "#22d3ee", fontWeight: 600, fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.1em" }}>What I Bring</span>
          <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)", fontWeight: 900, color: "#fff", marginTop: "12px", lineHeight: 1.1 }}>
            Skills &amp; <span className="gradient-text">Expertise</span>
          </h2>
          <p style={{ color: "#64748b", marginTop: "16px", maxWidth: "520px", marginLeft: "auto", marginRight: "auto", fontSize: "1rem", lineHeight: 1.7 }}>
            A cross-functional skill set combining technical data capabilities with business analysis, process management, and commercial awareness.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "20px" }}>
          {skillGroups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              style={{ background: "rgba(255,255,255,0.025)", border: `1px solid ${g.borderColor}`, borderRadius: "18px", padding: "24px", transition: "transform 0.25s ease, box-shadow 0.25s ease" }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLDivElement).style.boxShadow = `0 12px 40px ${g.borderColor}`; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = ""; (e.currentTarget as HTMLDivElement).style.boxShadow = ""; }}
            >
              <div style={{ marginBottom: "16px" }}>
                <h3 style={{ color: "#f1f5f9", fontWeight: 700, fontSize: "15px", margin: 0, lineHeight: 1.3 }}>{g.title}</h3>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {g.skills.map((s) => (
                  <span
                    key={s}
                    style={{ fontSize: "12px", fontWeight: 600, padding: "5px 12px", borderRadius: "999px", background: g.badgeBg, color: g.badgeColor, border: `1px solid ${g.badgeBorder}` }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
