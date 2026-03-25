import { AnimSection, SectionHeader } from "../components/UI.jsx";
import portfolioData from "../data/portfolioData.js";

export default function Competitive() {
  const platforms = portfolioData.competitive;
  return (
    <section id="competitive" className="bg-alt" style={{ padding: "90px 40px" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <SectionHeader label="competitive_programming" title="Coding" accent="Platforms" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: 20, marginBottom: 32 }}>
          {platforms.map((p, i) => (
            <AnimSection key={i} delay={i * 0.1}>
              <a href={p.url} target="_blank" rel="noreferrer" style={{ textDecoration: "none", display: "block" }}>
                <div style={{ background: "#181c0f", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 18, padding: 26, transition: "all .3s", cursor: "pointer" }} onMouseOver={e => { e.currentTarget.style.borderColor = "rgba(184,240,0,0.3)"; e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 16px 48px rgba(184,240,0,0.06)"; }} onMouseOut={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"; e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
                    <div style={{ width: 50, height: 50, borderRadius: 12, background: "rgba(184,240,0,0.06)", border: "1px solid rgba(184,240,0,0.12)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, color: "#b8f000" }}>{p.logo}</div>
                    <div>
                      <div style={{ fontSize: 16, fontWeight: 700, color: "#f0f2e8" }}>{p.name}</div>
                      <div style={{ fontSize: 12, color: "#b8f000" }}>{p.handle}</div>
                    </div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 16 }}>
                    {p.stats.map((s, si) => <div key={si} style={{ display: "flex", justifyContent: "space-between", padding: "8px 12px", borderRadius: 8, background: "#161a0d", border: "1px solid rgba(255,255,255,0.04)" }}><span style={{ fontSize: 12, color: "#6a7055" }}>{s.label}</span><span style={{ fontSize: 12, fontWeight: 600, color: "#b8f000" }}>{s.value}</span></div>)}
                  </div>
                  <div style={{ textAlign: "center", padding: 10, borderRadius: 8, border: "1px solid rgba(184,240,0,0.12)", color: "#b8f000", fontSize: 13, fontWeight: 600, background: "rgba(184,240,0,0.04)" }}>View Profile →</div>
                </div>
              </a>
            </AnimSection>
          ))}
        </div>
        <AnimSection delay={0.3}>
          <div style={{ background: "#181c0f", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 18, padding: 28 }}>
            <div style={{ fontSize: 11, color: "#b8f000", letterSpacing: 3, textTransform: "uppercase", marginBottom: 20 }}>// highlights</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))", gap: 14 }}>
              {[["5 ⭐", "Java & Python", "HackerRank"], ["4 ⭐", "SQL & C++", "HackerRank"], ["450+", "Problems", "LC + GFG + CodeChef"], ["DSA", "Core Focus", "Problem Solving + Pattern Finding"]].map(([val, lbl, sub]) => (
                <div key={lbl} style={{ textAlign: "center", padding: 16, background: "#161a0d", borderRadius: 12, border: "1px solid rgba(255,255,255,0.04)" }}>
                  <div style={{ fontSize: 22, fontWeight: 800, color: "#b8f000", marginBottom: 4 }}>{val}</div>
                  <div style={{ fontSize: 12, fontWeight: 600, color: "#f0f2e8" }}>{lbl}</div>
                  <div style={{ fontSize: 10, color: "#6a7055", marginTop: 3 }}>{sub}</div>
                </div>
              ))}
            </div>
          </div>
        </AnimSection>
      </div>
    </section>
  );
}
