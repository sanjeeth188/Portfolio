"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GraduationCap, Calendar } from "lucide-react";

const education = [
  {
    degree: "BSc (Hons) Data Science",
    institution: "Cardiff Metropolitan University",
    period: "2025 – Present",
    status: "In Progress",
    emoji: "🎓",
    borderColor: "rgba(59,130,246,0.4)",
    badgeBg: "rgba(59,130,246,0.15)",
    badgeColor: "#93c5fd",
    badgeBorder: "rgba(59,130,246,0.35)",
    focus: ["Data Analysis", "Machine Learning", "Artificial Intelligence", "Big Data", "Statistical Modelling"],
  },
  {
    degree: "Higher Diploma in Computing",
    institution: "Cardiff Metropolitan University",
    period: "2022 – 2024",
    status: "Completed",
    emoji: "💻",
    borderColor: "rgba(6,182,212,0.4)",
    badgeBg: "rgba(6,182,212,0.15)",
    badgeColor: "#67e8f9",
    badgeBorder: "rgba(6,182,212,0.35)",
    focus: ["Systems Analysis", "Agile Project Management", "Database Design", "Software Engineering"],
  },
  {
    degree: "Foundation in Software Engineering",
    institution: "Informatics Institute of Technology (IIT)",
    period: "2021",
    status: "Completed",
    emoji: "⚡",
    borderColor: "rgba(139,92,246,0.4)",
    badgeBg: "rgba(139,92,246,0.15)",
    badgeColor: "#c4b5fd",
    badgeBorder: "rgba(139,92,246,0.35)",
    focus: ["Programming Fundamentals", "Problem Solving", "Software Principles"],
  },
];

export default function Education() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="education" style={{ padding: "128px 0", background: "#0d1b2a", scrollMarginTop: "64px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "72px" }}
        >
          <span style={{ color: "#22d3ee", fontWeight: 600, fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.1em" }}>Academic Background</span>
          <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)", fontWeight: 900, color: "#fff", marginTop: "12px", lineHeight: 1.1 }}>
            Education &amp; <span className="gradient-text">Qualifications</span>
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "20px" }}>
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              style={{ background: "rgba(255,255,255,0.025)", border: `1px solid ${edu.borderColor}`, borderRadius: "20px", padding: "28px", transition: "transform 0.25s ease" }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = ""; }}
            >
              <div style={{ fontSize: "28px", marginBottom: "16px" }}>{edu.emoji}</div>

              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "8px", marginBottom: "12px" }}>
                <span style={{ fontSize: "12px", fontWeight: 700, padding: "4px 10px", borderRadius: "999px", background: edu.badgeBg, color: edu.badgeColor, border: `1px solid ${edu.badgeBorder}` }}>
                  {edu.status}
                </span>
                <div style={{ display: "flex", alignItems: "center", gap: "5px", color: "#475569", fontSize: "12px" }}>
                  <Calendar style={{ width: "12px", height: "12px" }} />
                  {edu.period}
                </div>
              </div>

              <h3 style={{ color: "#fff", fontWeight: 800, fontSize: "1.05rem", marginBottom: "6px", lineHeight: 1.3 }}>{edu.degree}</h3>

              <div style={{ display: "flex", alignItems: "flex-start", gap: "6px", color: "#64748b", fontSize: "13px", marginBottom: "20px" }}>
                <GraduationCap style={{ width: "15px", height: "15px", flexShrink: 0, marginTop: "1px" }} />
                <span>{edu.institution}</span>
              </div>

              <div>
                <p style={{ fontSize: "11px", fontWeight: 700, color: "#475569", textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: "10px" }}>Key Focus Areas</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {edu.focus.map((f) => (
                    <span key={f} style={{ fontSize: "11px", fontWeight: 500, padding: "4px 10px", borderRadius: "999px", background: "rgba(255,255,255,0.05)", color: "#64748b", border: "1px solid rgba(255,255,255,0.08)" }}>{f}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
