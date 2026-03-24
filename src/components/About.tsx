"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { MapPin, GraduationCap, Briefcase, TrendingUp } from "lucide-react";

const stats = [
  { icon: <Briefcase style={{ width: "18px", height: "18px" }} />, value: "3+", label: "Years Exp" },
  { icon: <TrendingUp style={{ width: "18px", height: "18px" }} />, value: "4+", label: "Projects" },
  { icon: <GraduationCap style={{ width: "18px", height: "18px" }} />, value: "BSc", label: "Data Science" },
  { icon: <MapPin style={{ width: "18px", height: "18px" }} />, value: "LK", label: "Sri Lanka" },
];

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" style={{ padding: "128px 0", background: "#0d1b2a", scrollMarginTop: "64px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "72px" }}
        >
          <span style={{ color: "#60a5fa", fontWeight: 600, fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.1em" }}>Get to Know Me</span>
          <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)", fontWeight: 900, color: "#fff", marginTop: "12px", lineHeight: 1.1 }}>
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "64px", alignItems: "center" }}>
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            style={{ position: "relative" }}
          >
            <div style={{ position: "relative", maxWidth: "400px", margin: "0 auto" }}>
              <div style={{ position: "absolute", top: "-12px", left: "-12px", right: "12px", bottom: "12px", borderRadius: "20px", border: "2px solid rgba(59,130,246,0.4)" }} />
              <div style={{ position: "absolute", top: "12px", left: "12px", right: "-12px", bottom: "-12px", borderRadius: "20px", border: "2px solid rgba(139,92,246,0.3)" }} />
              <div style={{ position: "relative", borderRadius: "20px", overflow: "hidden", aspectRatio: "4/5", background: "linear-gradient(135deg, rgba(59,130,246,0.2), rgba(139,92,246,0.2))" }}>
                <Image
                  src="/profile.jpg"
                  alt="Sanjeethan Jeganathan"
                  fill
                  sizes="400px"
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                  priority
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(13,27,42,0.5) 0%, transparent 60%)" }} />
              </div>
              <div style={{ position: "absolute", bottom: "-20px", left: "50%", transform: "translateX(-50%)", background: "rgba(255,255,255,0.06)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.1)", padding: "10px 20px", borderRadius: "12px", whiteSpace: "nowrap" }}>
                <span style={{ fontSize: "13px", color: "#cbd5e1", fontWeight: 500 }}>📍 Colombo, Sri Lanka</span>
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            style={{ paddingTop: "16px" }}
          >
            <p style={{ color: "#cbd5e1", fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "20px" }}>
              I&apos;m a <strong style={{ color: "#fff" }}>Data Science student</strong> at Cardiff Metropolitan University with practical, hands-on experience spanning application support at Wipro, e-commerce analytics at R.D.S Group, and academic work in machine learning and data visualisation. I bridge the gap between technical complexity and business clarity — translating raw datasets into insights that actually move the needle.
            </p>
            <p style={{ color: "#64748b", fontSize: "1rem", lineHeight: 1.8, marginBottom: "36px" }}>
              What drives me is the intersection of data and decision-making. Whether it&apos;s building a Power BI dashboard to monitor project health, conducting competitor benchmarking to unlock market opportunities, or mapping user stories for a software system — I bring analytical rigour and a business-first mindset to every challenge.
            </p>

            {/* Stats */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              {stats.map(({ icon, value, label }) => (
                <div key={label} style={{ display: "flex", alignItems: "center", gap: "12px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "14px", padding: "14px 16px" }}>
                  <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "rgba(59,130,246,0.15)", display: "flex", alignItems: "center", justifyContent: "center", color: "#60a5fa", flexShrink: 0 }}>
                    {icon}
                  </div>
                  <div>
                    <div style={{ fontSize: "1.3rem", fontWeight: 900, color: "#fff", lineHeight: 1 }}>{value}</div>
                    <div style={{ fontSize: "12px", color: "#64748b", fontWeight: 500, marginTop: "2px" }}>{label}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
