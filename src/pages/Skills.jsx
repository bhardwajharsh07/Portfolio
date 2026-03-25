import { AnimSection, SectionHeader, SkillBar } from "../components/UI.jsx";
import portfolioData from "../data/portfolioData.js";

export default function Skills() {
  return (
    <section id="skills" style={{ padding: "90px 40px" }}>
      <div style={{ maxWidth: 1300, margin: "0 auto" }}>
        <SectionHeader label="skills" title="My" accent="Expertise" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 20 }}>
          {portfolioData.skills.map((cat, ci) => (
            <AnimSection key={ci} delay={ci * 0.1}>
              <div style={{ background: "#181c0f", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 18, padding: 28, transition: "all .3s" }} onMouseOver={e => e.currentTarget.style.borderColor = "rgba(184,240,0,0.2)"} onMouseOut={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"}>
                <div style={{ fontSize: 11, color: "#b8f000", letterSpacing: 3, textTransform: "uppercase", marginBottom: 24 }}>// {cat.category}</div>
                {cat.items.map((s, si) => (
                  <SkillBar key={si} name={s.name} level={s.level} logo={s.logo} delay={si * 0.08} />
                ))}
              </div>
            </AnimSection>
          ))}
        </div>
      </div>
    </section>
  );
}