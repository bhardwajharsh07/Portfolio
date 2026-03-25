import { AnimSection, SectionHeader } from "../components/UI.jsx";

export default function Internship() {
  return (
    <section id="internship" style={{ padding: "90px 40px" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <SectionHeader label="internship" title="Work" accent="Experience" />
        <AnimSection>
          <div style={{ background: "#181c0f", border: "1px solid rgba(184,240,0,0.12)", borderRadius: 20, padding: 48, textAlign: "center", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg,transparent,#b8f000,transparent)" }} />
            <div style={{ fontSize: 52, marginBottom: 16 }}>🚀</div>
            <div style={{ fontSize: 24, fontWeight: 800, color: "#f0f2e8", marginBottom: 12 }}>Actively Seeking Internship Opportunities</div>
            <p style={{ fontSize: 15, color: "#a8b090", maxWidth: 500, margin: "0 auto 28px", lineHeight: 1.85 }}>Looking for roles in Data Science, Machine Learning, Java Development, or Software Engineering. Ready to contribute and grow in a professional environment.</p>
            <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap", marginBottom: 32 }}>
              {["Python", "Java", "SQL", "Machine Learning", "Data Science"].map(t => <span key={t} className="pill">{t}</span>)}
            </div>
            <a href="mailto:harshbhardwaj9491@gmail.com" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 26px", borderRadius: 8, background: "#b8f000", color: "#000", fontWeight: 700, fontSize: 14, textDecoration: "none", transition: "all .2s" }} onMouseOver={e => e.currentTarget.style.background = "#96cc00"} onMouseOut={e => e.currentTarget.style.background = "#b8f000"}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              Hire Me — harshbhardwaj9491@gmail.com
            </a>
          </div>
        </AnimSection>
      </div>
    </section>
  );
}
