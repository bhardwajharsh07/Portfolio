import { AnimSection, SectionHeader } from "../components/UI.jsx";
import portfolioData from "../data/portfolioData.js";

function AchCard({ ach }) {
  return (
    <div style={{ background: "#181c0f", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 16, padding: 24, display: "flex", gap: 18, alignItems: "flex-start", transition: "all .3s" }} onMouseOver={e => { e.currentTarget.style.borderColor = "rgba(184,240,0,0.3)"; e.currentTarget.style.transform = "translateX(6px)"; }} onMouseOut={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"; e.currentTarget.style.transform = ""; }}>
      <div style={{ fontSize: 32, flexShrink: 0 }}>{ach.icon}</div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 16, fontWeight: 700, color: "#f0f2e8", marginBottom: 6 }}>{ach.title}</div>
        <div style={{ fontSize: 13, color: "#a8b090", lineHeight: 1.65, marginBottom: 8 }}>{ach.desc}</div>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <span style={{ fontSize: 12, color: "#b8f000", fontWeight: 600 }}>{ach.org}</span>
          <span style={{ fontSize: 11, color: "#6a7055", padding: "2px 10px", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 100 }}>{ach.year}</span>
        </div>
        {ach.link && <div style={{ fontSize: 10, color: "#b8f000", opacity: .7, marginTop: 6, letterSpacing: ".5px" }}>↗ VIEW PROFILE</div>}
      </div>
    </div>
  );
}

export default function Achievements() {
  return (
    <section id="achievements" className="bg-alt" style={{ padding: "90px 40px" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <SectionHeader label="achievements" title="Key" accent="Milestones" />
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {portfolioData.achievements.map((ach, i) => (
            <AnimSection key={i} delay={i * 0.1}>
              {ach.link ? <a href={ach.link} target="_blank" rel="noreferrer" style={{ textDecoration: "none", display: "block" }}><AchCard ach={ach} /></a> : <AchCard ach={ach} />}
            </AnimSection>
          ))}
        </div>
      </div>
    </section>
  );
}
