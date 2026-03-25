import { AnimSection, SectionHeader } from "../components/UI.jsx";
import portfolioData from "../data/portfolioData.js";

export default function About() {
  const { about } = portfolioData;
  return (
    <section id="about" className="bg-alt" style={{ padding: "90px 40px" }}>
      <div style={{ maxWidth: 1300, margin: "0 auto" }}>
        <SectionHeader label="about_me" title="Who" accent="Am I" />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "start" }} className="two-col">
          <AnimSection>
            <div>
              <p style={{ fontSize: 16, color: "#a8b090", lineHeight: 1.85, marginBottom: 20 }}>{about.description}</p>
              <p style={{ fontSize: 16, color: "#a8b090", lineHeight: 1.85, marginBottom: 24 }}>I believe in clean code, continuous learning, and data-driven problem solving. Whether crafting ML models or building GUI applications, I bring analytical thinking to every project.</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {about.interests.map((int, i) => <span key={i} className="pill">{int}</span>)}
              </div>
            </div>
          </AnimSection>
          <AnimSection delay={0.15}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              {about.highlights.map((h, i) => (
                <div key={i} style={{ background: "#181c0f", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 14, padding: 22, transition: "all .3s" }} onMouseOver={e => { e.currentTarget.style.borderColor = "rgba(184,240,0,0.3)"; e.currentTarget.style.transform = "translateY(-3px)"; }} onMouseOut={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"; e.currentTarget.style.transform = ""; }}>
                  <div style={{ fontSize: 26, fontWeight: 800, color: "#b8f000" }}>{h.split(" ")[0]}</div>
                  <div style={{ fontSize: 12, color: "#6a7055", marginTop: 4 }}>{h.split(" ").slice(1).join(" ")}</div>
                </div>
              ))}
            </div>
          </AnimSection>
        </div>
      </div>
    </section>
  );
}
