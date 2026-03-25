import { useState } from "react";
import { AnimSection, SectionHeader } from "../components/UI.jsx";
import portfolioData from "../data/portfolioData.js";

const WEB3FORMS_KEY = "4b9c2bb0-cc28-48e1-9d8a-85b97b14ea47";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sendError, setSendError] = useState("");

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email";
    if (!form.message.trim()) e.message = "Message is required";
    return e;
  };

  const handleSubmit = async () => {
    const e = validate(); setErrors(e); setSendError("");
    if (Object.keys(e).length > 0) return;
    setLoading(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify({ access_key: WEB3FORMS_KEY, name: form.name, email: form.email, message: form.message, subject: `Portfolio Contact from ${form.name}`, replyto: form.email }) });
      const data = await res.json();
      if (data.success) { setSubmitted(true); setForm({ name: "", email: "", message: "" }); }
      else throw new Error();
    } catch { setSendError("Could not send. Email me at harshbhardwaj9491@gmail.com"); }
    finally { setLoading(false); }
  };

  const inp = (err) => ({ width: "100%", padding: "13px 16px", borderRadius: 10, background: "#161a0d", border: `1px solid ${err ? "#ff6060" : "rgba(255,255,255,0.06)"}`, color: "#f0f2e8", fontSize: 14, outline: "none", transition: "all .2s" });
  const { personal } = portfolioData;

  return (
    <section id="contact" style={{ padding: "90px 40px" }}>
      <div style={{ maxWidth: 1300, margin: "0 auto" }}>
        <SectionHeader label="contact" title="Let's" accent="Connect" />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }} className="two-col">
          <AnimSection>
            <div>
              <h3 style={{ fontSize: 24, fontWeight: 800, color: "#f0f2e8", marginBottom: 14 }}>Let's Build Something Together</h3>
              <p style={{ fontSize: 15, color: "#a8b090", lineHeight: 1.8, marginBottom: 36 }}>Looking for internship opportunities in Data Science, ML, or Software Development. My inbox is always open!</p>
              {[{ icon: "✉", label: "Email", val: personal.email, href: `mailto:${personal.email}` }, { icon: "📞", label: "Phone", val: personal.phone, href: `tel:${personal.phone}` }, { icon: "📍", label: "Location", val: personal.location, href: "#" }].map((item, i) => (
                <a key={i} href={item.href} style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18, textDecoration: "none" }}>
                  <div style={{ width: 42, height: 42, borderRadius: 10, background: "rgba(184,240,0,0.06)", border: "1px solid rgba(184,240,0,0.12)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>{item.icon}</div>
                  <div><div style={{ fontSize: 11, color: "#6a7055", textTransform: "uppercase", letterSpacing: 1, marginBottom: 2 }}>{item.label}</div><div style={{ fontSize: 14, fontWeight: 500, color: "#f0f2e8" }}>{item.val}</div></div>
                </a>
              ))}
              <div style={{ marginTop: 28 }}>
                <div style={{ fontSize: 11, color: "#6a7055", letterSpacing: 2, marginBottom: 14 }}>// SOCIAL</div>
                <div style={{ display: "flex", gap: 12 }}>
                  {[["https://github.com/bhardwajharsh07", <svg key="gh" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>], ["https://linkedin.com/in/bhardwajharsh07/", <svg key="li" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>]].map(([url, icon]) => (
                    <a key={url} href={url} target="_blank" rel="noreferrer" style={{ width: 42, height: 42, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(255,255,255,0.08)", color: "#6a7055", textDecoration: "none", transition: "all .2s" }} onMouseOver={e => { e.currentTarget.style.borderColor = "#b8f000"; e.currentTarget.style.color = "#b8f000"; e.currentTarget.style.background = "rgba(184,240,0,0.08)"; }} onMouseOut={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.color = "#6a7055"; e.currentTarget.style.background = "transparent"; }}>{icon}</a>
                  ))}
                </div>
              </div>
            </div>
          </AnimSection>
          <AnimSection delay={0.15}>
            <div style={{ background: "#181c0f", border: "1px solid rgba(184,240,0,0.12)", borderRadius: 20, padding: 36, position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg,#b8f000,#96cc00,transparent)" }} />
              {submitted ? (
                <div style={{ textAlign: "center", padding: "40px 0" }}>
                  <div style={{ fontSize: 56, marginBottom: 16 }}>🎉</div>
                  <div style={{ fontSize: 20, fontWeight: 800, color: "#f0f2e8", marginBottom: 10 }}>Message Sent!</div>
                  <p style={{ color: "#a8b090", marginBottom: 20 }}>Thanks! I'll get back to you soon.</p>
                  <button onClick={() => setSubmitted(false)} style={{ padding: "10px 22px", borderRadius: 8, background: "#b8f000", color: "#000", border: "none", fontWeight: 700, cursor: "pointer" }}>Send Another</button>
                </div>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                  {[{ key: "name", label: "Full Name", type: "text", ph: "John Doe" }, { key: "email", label: "Email Address", type: "email", ph: "john@example.com" }].map(f => (
                    <div key={f.key}>
                      <label style={{ display: "block", fontSize: 13, fontWeight: 500, marginBottom: 8, color: "#a8b090" }}>{f.label}</label>
                      <input type={f.type} placeholder={f.ph} value={form[f.key]} onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))} style={inp(errors[f.key])} onFocus={e => e.target.style.borderColor = "#b8f000"} onBlur={e => e.target.style.borderColor = errors[f.key] ? "#ff6060" : "rgba(255,255,255,0.06)"} />
                      {errors[f.key] && <p style={{ margin: "5px 0 0", fontSize: 12, color: "#ff6060" }}>{errors[f.key]}</p>}
                    </div>
                  ))}
                  <div>
                    <label style={{ display: "block", fontSize: 13, fontWeight: 500, marginBottom: 8, color: "#a8b090" }}>Message</label>
                    <textarea placeholder="Tell me about your opportunity..." value={form.message} rows={5} onChange={e => setForm(p => ({ ...p, message: e.target.value }))} style={{ ...inp(errors.message), resize: "vertical" }} onFocus={e => e.target.style.borderColor = "#b8f000"} onBlur={e => e.target.style.borderColor = errors.message ? "#ff6060" : "rgba(255,255,255,0.06)"} />
                    {errors.message && <p style={{ margin: "5px 0 0", fontSize: 12, color: "#ff6060" }}>{errors.message}</p>}
                  </div>
                  {sendError && <div style={{ padding: "11px 14px", borderRadius: 8, background: "rgba(255,96,96,0.06)", border: "1px solid rgba(255,96,96,0.2)", color: "#ff6060", fontSize: 13 }}>{sendError}</div>}
                  <button onClick={handleSubmit} disabled={loading} style={{ padding: "14px", borderRadius: 10, background: loading ? "#4a5a00" : "#b8f000", color: "#000", border: "none", fontSize: 15, fontWeight: 700, cursor: loading ? "not-allowed" : "pointer", transition: "all .2s", opacity: loading ? .7 : 1 }}>
                    {loading ? "Sending..." : "Send Message →"}
                  </button>
                </div>
              )}
            </div>
          </AnimSection>
        </div>
      </div>
      <style>{`@media(max-width:900px){.two-col{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}
