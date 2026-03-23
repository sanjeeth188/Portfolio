"use client";

import { motion } from "framer-motion";
import { ArrowDown, ExternalLink, Download, Mail } from "lucide-react";

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } as any },
};

export default function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      style={{ minHeight: "100vh", position: "relative", overflow: "hidden", background: "#0d1b2a", display: "flex", flexDirection: "column", justifyContent: "center" }}
    >
      {/* Ambient orbs */}
      <div style={{ position: "absolute", top: "-160px", left: "-160px", width: "560px", height: "560px", borderRadius: "50%", background: "radial-gradient(circle, rgba(59,130,246,0.35) 0%, transparent 70%)", filter: "blur(70px)", pointerEvents: "none", animation: "float 10s ease-in-out infinite" }} />
      <div style={{ position: "absolute", bottom: "-160px", right: "-160px", width: "480px", height: "480px", borderRadius: "50%", background: "radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 70%)", filter: "blur(70px)", pointerEvents: "none", animation: "float 8s ease-in-out infinite reverse" }} />
      <div style={{ position: "absolute", top: "30%", right: "15%", width: "320px", height: "320px", borderRadius: "50%", background: "radial-gradient(circle, rgba(6,182,212,0.2) 0%, transparent 70%)", filter: "blur(60px)", pointerEvents: "none", animation: "float 12s ease-in-out infinite 2s" }} />

      {/* Grid pattern */}
      <div style={{ position: "absolute", inset: 0, opacity: 0.03, backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)", backgroundSize: "60px 60px", pointerEvents: "none" }} />

      {/* Content */}
      <div style={{ position: "relative", maxWidth: "1280px", margin: "0 auto", padding: "112px 2rem 80px", width: "100%" }}>
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          style={{ maxWidth: "800px" }}
        >


          {/* Name */}
          <motion.h1 variants={fadeUp} style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.03em", color: "#fff", marginBottom: "20px" }}>
            Sanjeethan<br />
            <span className="gradient-text">Jeganathan</span>
          </motion.h1>

          {/* Headline */}
          <motion.p variants={fadeUp} style={{ fontSize: "clamp(1rem, 2.5vw, 1.3rem)", fontWeight: 500, color: "#94a3b8", marginBottom: "20px", lineHeight: 1.5 }}>
            Data Science Student &nbsp;·&nbsp; Aspiring{" "}
            <span style={{ color: "#22d3ee", fontWeight: 600 }}>Data Analyst</span>
            {" "}&amp;{" "}
            <span style={{ color: "#a78bfa", fontWeight: 600 }}>Business Analyst</span>
          </motion.p>

          {/* Statement */}
          <motion.p variants={fadeUp} style={{ fontSize: "1rem", color: "#64748b", lineHeight: 1.8, maxWidth: "620px", marginBottom: "40px" }}>
            Analytical and detail-oriented professional with hands-on experience in application
            support, e-commerce analytics, and digital performance tracking. Passionate about
            transforming data into actionable insights that drive smarter business decisions.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "48px" }}>
            <button
              onClick={() => scrollTo("projects")}
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "12px 24px", borderRadius: "999px", background: "linear-gradient(135deg, #3b82f6, #06b6d4)", color: "#fff", fontWeight: 700, fontSize: "14px", border: "none", cursor: "pointer", boxShadow: "0 4px 20px rgba(59,130,246,0.35)", transition: "all 0.25s ease" }}
              onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-2px)")}
              onMouseLeave={e => (e.currentTarget.style.transform = "")}
            >
              View Projects <ArrowDown style={{ width: "16px", height: "16px", transform: "rotate(-45deg)" }} />
            </button>
            <a
              href="/Portfolio/Sanjeethan.Jeganathan.CV.pdf"
              download
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "12px 24px", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.2)", background: "rgba(255,255,255,0.05)", color: "#fff", fontWeight: 600, fontSize: "14px", textDecoration: "none", transition: "all 0.25s ease" }}
              onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}
              onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.05)")}
            >
              <Download style={{ width: "16px", height: "16px" }} /> Download CV
            </a>
            <button
              onClick={() => scrollTo("contact")}
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "12px 24px", borderRadius: "999px", border: "1px solid rgba(59,130,246,0.4)", color: "#60a5fa", fontWeight: 600, fontSize: "14px", background: "transparent", cursor: "pointer", transition: "all 0.25s ease" }}
              onMouseEnter={e => (e.currentTarget.style.background = "rgba(59,130,246,0.1)")}
              onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
            >
              <Mail style={{ width: "16px", height: "16px" }} /> Contact Me
            </button>
          </motion.div>

          {/* Social links */}
          <motion.div variants={fadeUp} style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <span style={{ fontSize: "13px", color: "#475569", fontWeight: 500 }}>Find me on</span>
            <div style={{ width: "48px", height: "1px", background: "#334155" }} />
            <div style={{ display: "flex", gap: "12px" }}>
              {[
                { href: "https://linkedin.com/in/sanjeethan-jeganathan", icon: <LinkedInIcon />, label: "LinkedIn" },
                { href: "mailto:sanjeethdilani18@gmail.com", icon: <Mail style={{ width: "20px", height: "20px" }} />, label: "Email" },
              ].map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{ width: "40px", height: "40px", borderRadius: "50%", border: "1px solid rgba(255,255,255,0.12)", display: "flex", alignItems: "center", justifyContent: "center", color: "#94a3b8", textDecoration: "none", transition: "all 0.25s ease" }}
                  onMouseEnter={e => { e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "rgba(59,130,246,0.6)"; e.currentTarget.style.background = "rgba(59,130,246,0.1)"; }}
                  onMouseLeave={e => { e.currentTarget.style.color = "#94a3b8"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; e.currentTarget.style.background = "transparent"; }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        onClick={() => scrollTo("about")}
        style={{ position: "absolute", bottom: "32px", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", cursor: "pointer" }}
      >
        <span style={{ fontSize: "11px", color: "#475569", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase" }}>scroll</span>
        <div style={{ width: "24px", height: "40px", borderRadius: "12px", border: "1px solid #334155", display: "flex", alignItems: "flex-start", justifyContent: "center", paddingTop: "6px" }}>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#3b82f6" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
