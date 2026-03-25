import { AnimSection, SectionHeader } from "../components/UI.jsx";
import portfolioData from "../data/portfolioData.js";

export default function Education() {
  return (
    <section id="education" className="bg-alt" style={{ padding: "90px 40px" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <SectionHeader label="education" title="Learning" accent="Journey" />
        <div style={{ position: "relative", paddingLeft: 32 }}>
          <div style={{ position: "absolute", left: 8, top: 0, bottom: 0, width: 2, background: "linear-gradient(180deg,#b8f000,#96cc00,transparent)" }} />
          {portfolioData.education.map((edu, i) => (
            <AnimSection key={i} delay={i * 0.12}>
              <div style={{ position: "relative", marginBottom: 28 }}>
                <div style={{ position: "absolute", left: -27, top: 20, width: 12, height: 12, borderRadius: "50%", background: "#b8f000", border: "3px solid #0d0f0a", boxShadow: "0 0 0 3px rgba(184,240,0,0.25)" }} />
                <div style={{ background: "#181c0f", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 16, padding: 26, transition: "all .3s" }} onMouseOver={e => { e.currentTarget.style.borderColor = "rgba(184,240,0,0.3)"; e.currentTarget.style.transform = "translateX(6px)"; }} onMouseOut={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"; e.currentTarget.style.transform = ""; }}>
                  <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12, marginBottom: 10 }}>
                    <div>
                      <div style={{ fontSize: 17, fontWeight: 700, color: "#f0f2e8", marginBottom: 4 }}>{edu.icon} {edu.degree}</div>
                      {edu.link ? <a href={edu.link} target="_blank" rel="noreferrer" style={{ fontSize: 13, color: "#b8f000", fontWeight: 500, textDecoration: "none" }}>{edu.school}</a> : <div style={{ fontSize: 13, color: "#b8f000", fontWeight: 500 }}>{edu.school}</div>}
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <span style={{ padding: "5px 12px", borderRadius: 100, background: "rgba(184,240,0,0.08)", color: "#b8f000", fontSize: 11, border: "1px solid rgba(184,240,0,0.12)" }}>{edu.year}</span>
                      <div style={{ fontSize: 12, color: "#6a7055", marginTop: 6 }}>{edu.gpa}</div>
                    </div>
                  </div>
                  <p style={{ fontSize: 14, color: "#a8b090", lineHeight: 1.7 }}>{edu.desc}</p>
                </div>
              </div>
            </AnimSection>
          ))}
        </div>
      </div>
    </section>
  );
}
