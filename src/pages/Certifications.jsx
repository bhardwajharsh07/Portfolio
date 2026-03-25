import { AnimSection, SectionHeader } from "../components/UI.jsx";
import portfolioData from "../data/portfolioData.js";

export default function Certifications() {
  return (
    <section id="certifications" style={{ padding: "100px 40px", position: "relative" }}>
      {/* Subtle background glows */}
      <div style={{ position: "absolute", top: "20%", left: "-5%", width: 400, height: 400, background: "radial-gradient(circle, rgba(184,240,0,0.03) 0%, transparent 70%)", filter: "blur(60px)", pointerEvents: "none", zIndex: 0 }} />
      <div style={{ position: "absolute", bottom: "10%", right: "-5%", width: 500, height: 500, background: "radial-gradient(circle, rgba(184,240,0,0.03) 0%, transparent 70%)", filter: "blur(60px)", pointerEvents: "none", zIndex: 0 }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <SectionHeader label="certificates" title="My" accent="Credentials" />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 32, marginTop: 40 }}>
          {portfolioData.certifications.map((cert, i) => (
            <AnimSection key={i} delay={i * 0.1} style={{ height: "100%" }}>
              <a href={cert.link} target="_blank" rel="noreferrer" style={{ textDecoration: "none", display: "block", height: "100%", outline: "none" }}>
                <div
                  style={{
                    position: "relative",
                    height: "100%",
                    background: "#161a0d",
                    borderRadius: 16,
                    overflow: "hidden",
                    border: "1px solid rgba(255,255,255,0.06)",
                    boxShadow: "0 10px 30px -10px rgba(0,0,0,0.5)",
                    transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                    display: "flex",
                    flexDirection: "column",
                  }}
                  onMouseOver={e => {
                    e.currentTarget.style.transform = "translateY(-8px) scale(1.02)";
                    e.currentTarget.style.borderColor = "rgba(184,240,0,0.3)";
                    e.currentTarget.style.boxShadow = "0 20px 40px -10px rgba(184,240,0,0.15)";
                    const overlay = e.currentTarget.querySelector('.cert-overlay');
                    if (overlay) overlay.style.opacity = "1";
                    const img = e.currentTarget.querySelector('.cert-img');
                    if (img) img.style.transform = "scale(1.05)";
                  }}
                  onMouseOut={e => {
                    e.currentTarget.style.transform = "translateY(0) scale(1)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                    e.currentTarget.style.boxShadow = "0 10px 30px -10px rgba(0,0,0,0.5)";
                    const overlay = e.currentTarget.querySelector('.cert-overlay');
                    if (overlay) overlay.style.opacity = "0";
                    const img = e.currentTarget.querySelector('.cert-img');
                    if (img) img.style.transform = "scale(1)";
                  }}
                >
                  {/* Image Container */}
                  <div style={{ position: "relative", width: "100%", paddingTop: "75%", background: "#0d0f0a", overflow: "hidden", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                    <img
                      className="cert-img"
                      src={cert.image || "https://images.unsplash.com/photo-1589330694653-efa6475305ad?auto=format&fit=crop&q=80&w=800"}
                      alt={cert.title}
                      style={{
                        position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", transition: "transform 0.5s ease"
                      }}
                      onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1589330694653-efa6475305ad?auto=format&fit=crop&q=80&w=800"; // fallback
                      }}
                    />

                    {/* Hover Overlay */}
                    <div
                      className="cert-overlay"
                      style={{
                        position: "absolute", inset: 0, background: "rgba(13, 15, 10, 0.7)", backdropFilter: "blur(3px)", display: "flex", alignItems: "center", justifyContent: "center", opacity: 0, transition: "opacity 0.3s ease"
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "12px 24px", background: "#b8f000", color: "#000", borderRadius: 100, fontWeight: 700, fontSize: 13, letterSpacing: "0.5px" }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6" /><path d="M10 14L21 3" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /></svg>
                        Verify Credential
                      </div>
                    </div>
                  </div>

                  {/* Card Info */}
                  <div style={{ padding: "24px", flex: 1, display: "flex", flexDirection: "column" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12, marginBottom: 12 }}>
                      <h3 style={{ fontSize: 18, fontWeight: 700, color: "#f0f2e8", lineHeight: 1.3, margin: 0 }}>
                        {cert.title}
                      </h3>
                      <div style={{ width: 36, height: 36, borderRadius: 8, background: "rgba(184,240,0,0.06)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, flexShrink: 0, color: cert.color || "#b8f000", border: "1px solid rgba(184,240,0,0.12)" }}>
                        {cert.badge}
                      </div>
                    </div>

                    <div style={{ fontSize: 14, color: "#a8b090", marginBottom: 16 }}>
                      {cert.issuer}
                    </div>

                    <div style={{ marginTop: "auto", display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 16, borderTop: "1px dashed rgba(255,255,255,0.06)" }}>
                      <span style={{ fontSize: 12, color: "#6a7055", letterSpacing: "1px", textTransform: "uppercase" }}>{cert.date}</span>
                      <span style={{ fontSize: 12, color: "#b8f000", fontWeight: 600 }}>Authentic ✅</span>
                    </div>
                  </div>
                </div>
              </a>
            </AnimSection>
          ))}
        </div>
      </div>
    </section>
  );
}
