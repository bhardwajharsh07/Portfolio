import { useState } from "react";
import { AnimSection, SectionHeader } from "../components/UI.jsx";
import portfolioData from "../data/portfolioData.js";

const GH = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>;

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const allTech = ["All", ...new Set(portfolioData.projects.flatMap(p => p.tech))].slice(0, 10);
  const filtered = filter === "All" ? portfolioData.projects : portfolioData.projects.filter(p => p.tech.includes(filter));
  return (
    <section id="projects" className="bg-alt" style={{ padding: "90px 40px" }}>
      <div style={{ maxWidth: 1300, margin: "0 auto" }}>
        <SectionHeader label="projects" title="What I've" accent="Built" />
        <AnimSection>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center", marginBottom: 44 }}>
            {allTech.map(tech => (
              <button key={tech} onClick={() => setFilter(tech)} style={{ padding: "8px 18px", borderRadius: 100, fontSize: 12, border: `1px solid ${filter === tech ? "#b8f000" : "rgba(255,255,255,0.08)"}`, background: filter === tech ? "rgba(184,240,0,0.08)" : "transparent", color: filter === tech ? "#b8f000" : "#6a7055", cursor: "pointer", transition: "all .2s" }}>{tech}</button>
            ))}
          </div>
        </AnimSection>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(340px,1fr))", gap: 24 }}>
          {filtered.map((p, i) => (
            <AnimSection key={p.id} delay={i * 0.07}>
              <div style={{ background: "#181c0f", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 18, overflow: "hidden", display: "flex", flexDirection: "column", transition: "all .35s", height: "100%" }} onMouseOver={e => { e.currentTarget.style.borderColor = "rgba(184,240,0,0.3)"; e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 20px 60px rgba(184,240,0,0.06)"; }} onMouseOut={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"; e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}>
                <div style={{ padding: "28px 28px 0", flex: 1 }}>
                  <div style={{ fontSize: 40, marginBottom: 16 }}>{p.emoji}</div>
                  <div style={{ fontSize: 11, color: "#b8f000", letterSpacing: 2, marginBottom: 8 }}>
                    {String(p.id).padStart(2, "0")}.{p.featured && <span style={{ background: "#b8f000", color: "#000", padding: "2px 8px", borderRadius: 4, fontSize: 10, fontWeight: 700, marginLeft: 8 }}>FEATURED</span>}
                  </div>
                  <div style={{ fontSize: 20, fontWeight: 700, color: "#f0f2e8", marginBottom: 12, lineHeight: 1.2 }}>{p.title}</div>
                  <div style={{ fontSize: 13, color: "#a8b090", lineHeight: 1.7, marginBottom: 18 }}>{p.desc}</div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 24 }}>
                    {p.tech.map(t => <span key={t} style={{ fontSize: 11, padding: "4px 10px", borderRadius: 6, background: "#161a0d", color: "#6a7055", border: "1px solid rgba(255,255,255,0.05)" }}>{t}</span>)}
                  </div>
                </div>
                <div style={{ padding: "0 28px 28px", borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 18 }}>
                  <a href={p.github} target="_blank" rel="noreferrer" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: 11, borderRadius: 10, background: "rgba(184,240,0,0.06)", border: "1px solid rgba(184,240,0,0.12)", color: "#b8f000", textDecoration: "none", fontSize: 13, fontWeight: 600, transition: "all .2s" }} onMouseOver={e => { e.currentTarget.style.background = "#b8f000"; e.currentTarget.style.color = "#000"; }} onMouseOut={e => { e.currentTarget.style.background = "rgba(184,240,0,0.06)"; e.currentTarget.style.color = "#b8f000"; }}>
                    <GH /> View on GitHub
                  </a>
                </div>
              </div>
            </AnimSection>
          ))}
        </div>
      </div>
    </section>
  );
}
