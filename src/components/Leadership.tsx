"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Users, TrendingUp, Target, Award } from "lucide-react";

const stats = [
  { icon: <Users style={{ width: "22px", height: "22px" }} />, value: "200+", label: "Event Attendees", bg: "rgba(59,130,246,0.15)", color: "#60a5fa", border: "rgba(59,130,246,0.3)" },
  { icon: <Users style={{ width: "22px", height: "22px" }} />, value: "15", label: "Team Members Led", bg: "rgba(6,182,212,0.15)", color: "#22d3ee", border: "rgba(6,182,212,0.3)" },
  { icon: <TrendingUp style={{ width: "22px", height: "22px" }} />, value: "40%", label: "Growth vs Target", bg: "rgba(16,185,129,0.15)", color: "#34d399", border: "rgba(16,185,129,0.3)" },
];

export default function Leadership() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="leadership" style={{ padding: "128px 0", background: "#080f1c", scrollMarginTop: "64px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "72px" }}
        >
          <span style={{ color: "#34d399", fontWeight: 600, fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.1em" }}>Beyond the Desk</span>
          <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)", fontWeight: 900, color: "#fff", marginTop: "12px", lineHeight: 1.1 }}>
            Leadership &amp; <span className="gradient-text">Activities</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ maxWidth: "760px", margin: "0 auto", background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "24px", padding: "40px" }}
        >
          {/* Role header */}
          <div style={{ display: "flex", alignItems: "flex-start", gap: "16px", flexWrap: "wrap", marginBottom: "24px" }}>
            <div style={{ width: "52px", height: "52px", borderRadius: "16px", background: "linear-gradient(135deg, #3b82f6, #8b5cf6)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <Award style={{ width: "26px", height: "26px", color: "#fff" }} />
            </div>
            <div style={{ flex: 1 }}>
              <h3 style={{ color: "#fff", fontWeight: 800, fontSize: "1.4rem", marginBottom: "4px" }}>Prom Committee President</h3>
              <p style={{ color: "#64748b", fontSize: "14px" }}>Cardiff Metropolitan University Alumni</p>
            </div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "rgba(16,185,129,0.12)", border: "1px solid rgba(16,185,129,0.3)", borderRadius: "999px", padding: "5px 12px", fontSize: "12px", color: "#34d399", fontWeight: 600 }}>
              <Target style={{ width: "12px", height: "12px" }} />
              Event Leadership
            </div>
          </div>

          <p style={{ color: "#94a3b8", fontSize: "1rem", lineHeight: 1.8, marginBottom: "32px" }}>
            As President of the Prom Committee, I led a cross-functional team of 15 in planning, coordinating, and executing a major event for over 200 attendees. From budgeting and vendor management to coordinated marketing campaigns — this role sharpened my leadership, stakeholder communication, and project delivery capabilities in a high-stakes environment.
          </p>

          {/* Stats */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
            {stats.map(({ icon, value, label, bg, color, border }) => (
              <div key={label} style={{ textAlign: "center", padding: "20px 12px", borderRadius: "16px", background: bg, border: `1px solid ${border}`, display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                <div style={{ color }}>{icon}</div>
                <div style={{ fontSize: "1.75rem", fontWeight: 900, color: "#fff", lineHeight: 1 }}>{value}</div>
                <div style={{ fontSize: "12px", color: "#64748b", fontWeight: 500, textAlign: "center", lineHeight: 1.4 }}>{label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
