import { AnimSection, SectionHeader, SkillBar } from "../components/UI.jsx";
import portfolioData from "../data/portfolioData.js";

const rcol = { fontSize: 11, color: "#b8f000", letterSpacing: 3, textTransform: "uppercase", marginBottom: 18, display: "flex", alignItems: "center", gap: 8 };
const rcolAfter = { flex: 1, height: 1, background: "rgba(255,255,255,0.06)" };

export default function Resume() {
  const { personal, education, projects, certifications, achievements } = portfolioData;
  return (
    <section id="resume" style={{ padding: "90px 40px" }}>
      <div style={{ maxWidth: 1300, margin: "0 auto" }}>
        <SectionHeader label="resume" title="Full" accent="Resume" />
        <AnimSection>
          <a href="/cv.pdf" download="HarshBhardwaj_CV.pdf" target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "13px 26px", borderRadius: 8, background: "#b8f000", color: "#000", fontWeight: 700, fontSize: 14, textDecoration: "none", marginBottom: 44, transition: "all .2s" }} onMouseOver={e => e.currentTarget.style.background = "#96cc00"} onMouseOut={e => e.currentTarget.style.background = "#b8f000"}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
            Download Full CV (PDF)
          </a>
        </AnimSection>

        <div style={{ background: "#181c0f", border: "1px solid rgba(184,240,0,0.12)", borderRadius: 20, padding: 40, position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg,#b8f000,#96cc00,transparent)" }} />

          {/* ── Header ── */}
          <div style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", paddingBottom: 26, marginBottom: 32 }}>
            <div style={{ fontSize: 32, fontWeight: 800, color: "#f0f2e8", letterSpacing: -1, marginBottom: 6 }}>Harsh Bhardwaj</div>
            <div style={{ color: "#b8f000", fontWeight: 600, fontSize: 14, marginBottom: 14 }}>Data Science & Java Developer</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
              {[["✉", personal.email], ["📞", personal.phone], ["📍", "LPU, Punjab, India"], ["🔗", "github.com/bhardwajharsh07"], ["💼", "linkedin.com/in/bhardwajharsh07"]].map(([icon, val]) => (
                <span key={val} style={{ fontSize: 12, color: "#6a7055", display: "flex", alignItems: "center", gap: 5 }}><span>{icon}</span>{val}</span>
              ))}
            </div>
          </div>

          {/* ── SKILLS — full width, 4 columns ── */}
          <div style={{ marginBottom: 36, paddingBottom: 36, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
            <div style={rcol}>Skills<div style={rcolAfter} /></div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32 }} className="four-col">
              {[
                ["LANGUAGES", [
                  ["Java", 88, "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"],
                  ["Python", 85, "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"],
                  ["C++", 78, "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"],
                  ["SQL", 82, "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"],
                ]],
                ["DATA SCIENCE", [
                  ["Scikit-learn", 82, "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg"],
                  ["Pandas", 85, "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg"],
                  ["NumPy", 83, "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg"],
                  ["Matplotlib / Seaborn", 79, "https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg"],
                ]],
                ["TOOLS & PLATFORMS", [
                  ["Git & GitHub", 85, "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"],
                  ["Jupyter Notebook", 85, "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg"],
                  ["Power BI", 72, "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg"],
                  ["MySQL", 80, "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"],
                  ["Java Swing", 82, "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"],
                ]],
                ["SOFT SKILLS", null],
              ].map(([cat, skills]) => (
                <div key={cat}>
                  <div style={{ fontSize: 10, color: "#6a7055", letterSpacing: 1, marginBottom: 12 }}>{cat}</div>
                  {skills ? (
                    skills.map(([name, level, logo]) => (
                      <SkillBar key={name} name={name} level={level} logo={logo} />
                    ))
                  ) : (
                    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                      {["Adaptability", "Team Collaboration", "Analytical Thinking", "Problem Solving", "Time Management", "Communication"].map(s => (
                        <div key={s} style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 12px", borderRadius: 8, background: "rgba(184,240,0,0.04)", border: "1px solid rgba(184,240,0,0.08)" }}>
                          <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#b8f000", flexShrink: 0 }} />
                          <span style={{ fontSize: 12, color: "#a8b090" }}>{s}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* ── BOTTOM: Education + Projects | Certs + Achievements ── */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }} className="two-col">

            {/* LEFT — Education + Projects */}
            <div>
              <div style={rcol}>Education<div style={rcolAfter} /></div>
              <div style={{ marginBottom: 28 }}>
                {education.map((edu, i) => (
                  <div key={i} style={{ marginBottom: 16, paddingBottom: 16, borderBottom: i < education.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none" }}>
                    <div style={{ fontSize: 13, fontWeight: 600, color: "#f0f2e8" }}>{edu.degree}</div>
                    <div style={{ fontSize: 12, color: "#b8f000", margin: "3px 0" }}>{edu.school}</div>
                    <div style={{ display: "flex", gap: 14 }}>
                      <span style={{ fontSize: 11, color: "#6a7055" }}>{edu.year}</span>
                      <span style={{ fontSize: 11, color: "#6a7055" }}>{edu.gpa}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div style={rcol}>Projects<div style={rcolAfter} /></div>
              <div>
                {projects.map((p, i) => (
                  <div key={i} style={{ marginBottom: 14, padding: 14, borderRadius: 10, background: "#161a0d", border: "1px solid rgba(255,255,255,0.04)", transition: "all .2s" }} onMouseOver={e => e.currentTarget.style.borderColor = "rgba(184,240,0,0.2)"} onMouseOut={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.04)"}>
                    <div style={{ fontSize: 13, fontWeight: 600, color: "#f0f2e8", marginBottom: 4 }}>{p.title}</div>
                    <div style={{ fontSize: 12, color: "#6a7055", lineHeight: 1.6, marginBottom: 8 }}>{p.desc.split(".")[0]}.</div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                      {p.tech.slice(0, 4).map(t => (
                        <span key={t} style={{ fontSize: 10, padding: "2px 8px", borderRadius: 4, background: "rgba(184,240,0,0.06)", color: "#b8f000" }}>{t}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — Certifications + Achievements */}
            <div>
              <div style={rcol}>Certifications<div style={rcolAfter} /></div>
              <div style={{ marginBottom: 28 }}>
                {certifications.map((c, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 12px", borderRadius: 8, background: "#161a0d", border: "1px solid rgba(255,255,255,0.04)", marginBottom: 8 }}>
                    <span style={{ fontSize: 18, flexShrink: 0 }}>{c.badge}</span>
                    <div>
                      <div style={{ fontSize: 12, fontWeight: 500, color: "#f0f2e8" }}>{c.title}</div>
                      <div style={{ fontSize: 11, color: "#6a7055" }}>{c.issuer} · {c.date}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div style={rcol}>Achievements<div style={rcolAfter} /></div>
              {achievements.map((a, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, padding: "10px 12px", borderRadius: 8, background: "#161a0d", borderLeft: "3px solid #b8f000", marginBottom: 10 }}>
                  <span style={{ fontSize: 16, flexShrink: 0 }}>{a.icon}</span>
                  <div style={{ fontSize: 12, color: "#a8b090", lineHeight: 1.5 }}>{a.title}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
      <style>{`
        @media(max-width:900px){.two-col{grid-template-columns:1fr!important}}
        @media(max-width:1100px){.four-col{grid-template-columns:1fr 1fr!important}}
        @media(max-width:600px){.four-col{grid-template-columns:1fr!important}}
      `}</style>
    </section>
  );
}