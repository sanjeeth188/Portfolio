"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";

const experiences = [
  {
    role: "Application Support Executive Intern",
    company: "Wipro",
    location: "Colombo, Sri Lanka",
    period: "Jun 2025 – Present",
    current: true,
    dotColor: "#3b82f6",
    accentColor: "#60a5fa",
    bullets: [
      "Designed dashboards to monitor project milestones and health metrics across the full SDLC, enabling real-time visibility for project leads",
      "Acted as liaison between business stakeholders and technical teams — translating requirements into clear functional specifications",
      "Supported resource allocation across multiple concurrent projects, matching team capacity to timeline demands and workload priorities",
      "Tracked contractor allocations ensuring accurate records for cost control and project governance",
      "Created purchase orders to support cost tracking, procurement, and timely vendor payments",
      "Assisted in revenue collection follow-ups and provided stakeholder support for outstanding project deliverables",
      "Prepared ad-hoc reports and system data extracts to support decision-making and project monitoring",
    ],
  },
  {
    role: "Associate E-commerce Analyst",
    company: "R.D.S Group",
    location: "Colombo, Sri Lanka",
    period: "Feb 2022 – Apr 2023",
    current: false,
    dotColor: "#06b6d4",
    accentColor: "#22d3ee",
    bullets: [
      "Conducted structured competitor analysis to identify pricing trends, catalogue gaps, and market positioning opportunities",
      "Generated weekly sales and digital performance reports to support strategic planning and e-commerce optimisation",
      "Maintained product catalogue accuracy and data integrity across multiple e-commerce platforms",
      "Collaborated with marketing and operations teams to align product data with promotional and business objectives",
    ],
  },
  {
    role: "Intern E-commerce Analyst",
    company: "R.D.S Group",
    location: "Colombo, Sri Lanka",
    period: "Nov 2021 – Feb 2022",
    current: false,
    dotColor: "#8b5cf6",
    accentColor: "#a78bfa",
    bullets: [
      "Produced weekly sales performance reports to track KPIs and support data-driven decision-making",
      "Conducted competitor analysis across product categories to uncover growth opportunities and inform pricing strategy",
    ],
  },
];

export default function Experience() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="experience" style={{ padding: "128px 0", background: "#0d1b2a", scrollMarginTop: "64px" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 2rem" }}>
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "72px" }}
        >
          <span style={{ color: "#a78bfa", fontWeight: 600, fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.1em" }}>Track Record</span>
          <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)", fontWeight: 900, color: "#fff", marginTop: "12px", lineHeight: 1.1 }}>
            Work <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {/* Vertical line */}
          <div style={{ position: "absolute", left: "20px", top: "8px", bottom: "8px", width: "2px", background: "linear-gradient(to bottom, #3b82f6, #06b6d4, #8b5cf6)", borderRadius: "1px" }} />

          <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.15 }}
                style={{ display: "flex", gap: "32px", alignItems: "flex-start", paddingLeft: "8px" }}
              >
                {/* Dot */}
                <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: exp.dotColor, border: "3px solid #0d1b2a", boxShadow: `0 0 12px ${exp.dotColor}80`, flexShrink: 0, marginTop: "18px" }} />

                {/* Card */}
                <div style={{ flex: 1, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "20px", padding: "28px", transition: "all 0.3s ease" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = `${exp.dotColor}50`; (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLDivElement).style.boxShadow = `0 8px 32px ${exp.dotColor}20`; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.08)"; (e.currentTarget as HTMLDivElement).style.transform = ""; (e.currentTarget as HTMLDivElement).style.boxShadow = ""; }}
                >
                  {/* Header row */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "12px", marginBottom: "16px" }}>
                    <div>
                      <h3 style={{ color: "#fff", fontWeight: 700, fontSize: "1.1rem", lineHeight: 1.3, marginBottom: "6px" }}>{exp.role}</h3>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                        <Briefcase style={{ width: "14px", height: "14px", color: exp.accentColor, flexShrink: 0 }} />
                        <span style={{ color: exp.accentColor, fontWeight: 600, fontSize: "14px" }}>{exp.company}</span>
                        <span style={{ color: "#475569", fontSize: "13px" }}>· {exp.location}</span>
                      </div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "999px", padding: "5px 12px", fontSize: "12px", color: "#94a3b8", fontWeight: 600, whiteSpace: "nowrap" }}>
                      <Calendar style={{ width: "12px", height: "12px" }} />
                      {exp.period}
                    </div>
                  </div>

                  {/* Currently Here badge */}
                  {exp.current && (
                    <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "rgba(16,185,129,0.12)", border: "1px solid rgba(16,185,129,0.3)", borderRadius: "999px", padding: "4px 12px", fontSize: "12px", color: "#34d399", fontWeight: 600, marginBottom: "16px" }}>
                      <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#34d399", display: "inline-block", animation: "pulse 2s infinite" }} />
                      Currently Here
                    </div>
                  )}

                  {/* Bullets */}
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                    {exp.bullets.map((b) => (
                      <li key={b} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "14px", color: "#94a3b8", lineHeight: 1.65 }}>
                        <ChevronRight style={{ width: "14px", height: "14px", color: exp.accentColor, marginTop: "3px", flexShrink: 0 }} />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
