"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { Mail, Phone, MapPin, ExternalLink, Send, CheckCircle } from "lucide-react";

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const contactItems = [
  { icon: <Mail style={{ width: "18px", height: "18px" }} />, label: "Email", value: "sanjeethdilani18@gmail.com", href: "mailto:sanjeethdilani18@gmail.com" },
  { icon: <Phone style={{ width: "18px", height: "18px" }} />, label: "Phone", value: "+94 (0) 757 014 955", href: "tel:+94757014955" },
  { icon: <MapPin style={{ width: "18px", height: "18px" }} />, label: "Location", value: "Colombo-13, Sri Lanka", href: null },
  { icon: <LinkedInIcon />, label: "LinkedIn", value: "linkedin.com/in/sanjeethan-jeganathan", href: "https://linkedin.com/in/sanjeethan-jeganathan" },
];

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Required";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Valid email required";
    if (!form.subject.trim()) e.subject = "Required";
    if (!form.message.trim()) e.message = "Required";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setSubmitting(true);
    window.location.href = `mailto:sanjeethdilani18@gmail.com?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
    setTimeout(() => { setSubmitting(false); setSubmitted(true); }, 800);
  };

  const inputStyle = (field: string) => ({
    width: "100%",
    padding: "12px 16px",
    background: "rgba(255,255,255,0.04)",
    border: `1px solid ${errors[field] ? "rgba(239,68,68,0.5)" : "rgba(255,255,255,0.1)"}`,
    borderRadius: "12px",
    color: "#f1f5f9",
    fontSize: "14px",
    outline: "none",
    fontFamily: "inherit",
    boxSizing: "border-box" as const,
    transition: "border-color 0.2s ease",
  });

  return (
    <section id="contact" style={{ padding: "128px 0", background: "#0d1b2a", scrollMarginTop: "64px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 2rem" }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "72px" }}
        >
          <span style={{ color: "#60a5fa", fontWeight: 600, fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.1em" }}>Let&apos;s Connect</span>
          <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)", fontWeight: 900, color: "#fff", marginTop: "12px", lineHeight: 1.1 }}>
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p style={{ color: "#64748b", marginTop: "16px", maxWidth: "520px", marginLeft: "auto", marginRight: "auto", fontSize: "1rem", lineHeight: 1.7 }}>
            Open to internship opportunities, graduate analyst roles, and meaningful collaborations.
          </p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px", alignItems: "flex-start" }}>
          {/* Info panel */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}>
            <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "20px", padding: "28px", marginBottom: "24px" }}>
              <h3 style={{ color: "#fff", fontWeight: 700, fontSize: "1.1rem", marginBottom: "10px" }}>Ready to Work Together?</h3>
              <p style={{ color: "#64748b", fontSize: "13px", lineHeight: 1.7, margin: 0 }}>
                Whether you&apos;re a recruiter, hiring manager, or potential collaborator — I&apos;m always open to discussing new opportunities.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {contactItems.map(({ icon, label, value, href }) => (
                <div key={label} style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                  <div style={{ width: "42px", height: "42px", borderRadius: "12px", background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.25)", display: "flex", alignItems: "center", justifyContent: "center", color: "#60a5fa", flexShrink: 0 }}>
                    {icon}
                  </div>
                  <div>
                    <p style={{ fontSize: "11px", color: "#475569", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "2px" }}>{label}</p>
                    {href ? (
                      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" style={{ color: "#cbd5e1", fontSize: "13px", fontWeight: 500, textDecoration: "none", transition: "color 0.2s ease" }}
                        onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                        onMouseLeave={e => (e.currentTarget.style.color = "#cbd5e1")}
                      >{value}</a>
                    ) : (
                      <p style={{ color: "#cbd5e1", fontSize: "13px", fontWeight: 500, margin: 0 }}>{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 }}>
            <div style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "20px", padding: "32px" }}>
              {submitted ? (
                <div style={{ textAlign: "center", padding: "48px 0" }}>
                  <CheckCircle style={{ width: "52px", height: "52px", color: "#34d399", margin: "0 auto 16px" }} />
                  <h3 style={{ color: "#fff", fontWeight: 700, fontSize: "1.2rem", marginBottom: "8px" }}>Message Sent!</h3>
                  <p style={{ color: "#64748b", fontSize: "13px" }}>Your mail client should have opened. Thank you!</p>
                  <button onClick={() => setSubmitted(false)} style={{ marginTop: "20px", color: "#60a5fa", background: "none", border: "none", cursor: "pointer", fontSize: "13px" }}>
                    Send another →
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginBottom: "14px" }}>
                    {(["name", "email"] as const).map((field) => (
                      <div key={field}>
                        <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#94a3b8", marginBottom: "6px", textTransform: "capitalize" }}>{field === "email" ? "Email Address" : "Full Name"}</label>
                        <input type={field === "email" ? "email" : "text"} value={form[field]} onChange={e => setForm({ ...form, [field]: e.target.value })} style={inputStyle(field)} placeholder={field === "email" ? "you@example.com" : "Your name"} />
                        {errors[field] && <p style={{ color: "#f87171", fontSize: "11px", marginTop: "4px" }}>{errors[field]}</p>}
                      </div>
                    ))}
                  </div>
                  <div style={{ marginBottom: "14px" }}>
                    <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#94a3b8", marginBottom: "6px" }}>Subject</label>
                    <input type="text" value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })} style={inputStyle("subject")} placeholder="What's this about?" />
                    {errors.subject && <p style={{ color: "#f87171", fontSize: "11px", marginTop: "4px" }}>{errors.subject}</p>}
                  </div>
                  <div style={{ marginBottom: "20px" }}>
                    <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#94a3b8", marginBottom: "6px" }}>Message</label>
                    <textarea rows={5} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} style={{ ...inputStyle("message"), resize: "vertical", minHeight: "120px" }} placeholder="Tell me about the opportunity..." />
                    {errors.message && <p style={{ color: "#f87171", fontSize: "11px", marginTop: "4px" }}>{errors.message}</p>}
                  </div>
                  <button type="submit" disabled={submitting} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", padding: "14px", borderRadius: "12px", background: "linear-gradient(135deg, #3b82f6, #06b6d4)", color: "#fff", fontWeight: 700, fontSize: "14px", border: "none", cursor: submitting ? "not-allowed" : "pointer", opacity: submitting ? 0.6 : 1, transition: "all 0.25s ease", boxShadow: "0 4px 20px rgba(59,130,246,0.3)" }}>
                    <Send style={{ width: "16px", height: "16px" }} />
                    {submitting ? "Opening mail client…" : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
