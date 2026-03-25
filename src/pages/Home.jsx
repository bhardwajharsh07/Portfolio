import { useEffect, useState } from "react";
import portfolioData from "../data/portfolioData.js";
import { AnimSection } from "../components/UI.jsx";

function useTypewriter(words) {
  const [text, setText] = useState("");
  useEffect(() => {
    let wi = 0, ci = 0, del = false;
    const tick = () => {
      const w = words[wi % words.length];
      if (!del) { setText(w.slice(0, ci + 1)); ci++; if (ci === w.length) { setTimeout(() => { del = true; timer = setTimeout(tick, 80); }, 1800); return; } }
      else { setText(w.slice(0, ci - 1)); ci--; if (ci === 0) { del = false; wi++; } }
      timer = setTimeout(tick, del ? 40 : 80);
    };
    let timer = setTimeout(tick, 300);
    return () => clearTimeout(timer);
  }, []);
  return text;
}

const GH = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" /></svg>;
const LI = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>;
const Mail = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>;

const socBtn = { width: 42, height: 42, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(255,255,255,0.08)", color: "#6a7055", textDecoration: "none", transition: "all 0.2s" };

const ShapesBackground = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => { if (!ticking) { window.requestAnimationFrame(() => { setScrollY(window.scrollY); ticking = false; }); ticking = true; } };
    const handleMouseMove = (e) => { setMousePos({ x: (e.clientX / window.innerWidth - 0.5) * 20, y: (e.clientY / window.innerHeight - 0.5) * 20 }); };
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => { window.removeEventListener("scroll", handleScroll); window.removeEventListener("mousemove", handleMouseMove); };
  }, []);

  const shapes = [
    { id: 1, type: 'hex', size: 140, top: '15%', left: '8%', speedY: -0.3, speedX: 0.2, rotSpeed: 0.05, opacity: 0.05 },
    { id: 2, type: 'hex', size: 80, top: '65%', left: '85%', speedY: -0.15, speedX: 0.1, rotSpeed: -0.08, opacity: 0.08 },
    { id: 3, type: 'plus', size: 40, top: '25%', left: '80%', speedY: -0.4, speedX: 0.3, rotSpeed: 0.15, opacity: 0.12 },
    { id: 4, type: 'hex', size: 220, top: '75%', left: '-5%', speedY: -0.1, speedX: 0.08, rotSpeed: -0.02, opacity: 0.03 },
    { id: 5, type: 'plus', size: 60, top: '85%', left: '45%', speedY: -0.3, speedX: 0.25, rotSpeed: 0.1, opacity: 0.1 },
    { id: 6, type: 'hex', size: 100, top: '20%', left: '50%', speedY: -0.2, speedX: 0.15, rotSpeed: 0.06, opacity: 0.06 },
    { id: 7, type: 'circle', size: 300, top: '40%', left: '60%', speedY: -0.05, speedX: 0.05, rotSpeed: 0, opacity: 0.02 },
  ];

  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, #0d0f0a 0%, #161a0d 100%)" }} />
      <div style={{ position: "absolute", top: "-10%", right: "-5%", width: "60vw", height: "60vw", minWidth: 600, minHeight: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(184,240,0,0.06) 0%, transparent 60%)", filter: "blur(60px)", transform: `translate3d(${mousePos.x * 2}px, ${mousePos.y * 2}px, 0)`, transition: "transform 0.2s ease-out" }} />
      <div style={{ position: "absolute", bottom: "-15%", left: "-10%", width: "50vw", height: "50vw", minWidth: 500, minHeight: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(184,240,0,0.04) 0%, transparent 60%)", filter: "blur(60px)", transform: `translate3d(${mousePos.x * -2}px, ${mousePos.y * -2}px, 0)`, transition: "transform 0.2s ease-out" }} />
      <div style={{ position: "absolute", inset: 0, opacity: 0.03, backgroundImage: "linear-gradient(rgba(184,240,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(184,240,0,1) 1px, transparent 1px)", backgroundSize: "60px 60px", transform: `translateY(${scrollY * -0.1}px)` }} />
      {shapes.map(s => {
        const moveY = scrollY * s.speedY + (mousePos.y * (s.speedY * 10));
        const moveX = scrollY * s.speedX + (mousePos.x * (s.speedX * 10));
        const rot = scrollY * s.rotSpeed;
        return (
          <div key={s.id} style={{ position: "absolute", top: s.top, left: s.left, width: s.size, height: s.size, opacity: s.opacity, transform: `translate3d(${moveX}px, ${moveY}px, 0) rotate(${rot}deg)`, transition: "transform 0.1s linear", willChange: "transform" }}>
            {s.type === 'hex' && <svg viewBox="0 0 100 100" fill="none" stroke="#b8f000" strokeWidth="2"><polygon points="50 2 93 25 93 75 50 98 7 75 7 25" /></svg>}
            {s.type === 'plus' && <svg viewBox="0 0 100 100" fill="none" stroke="#b8f000" strokeWidth="2"><line x1="50" y1="10" x2="50" y2="90" /><line x1="10" y1="50" x2="90" y2="50" /></svg>}
            {s.type === 'circle' && <svg viewBox="0 0 100 100" fill="none" stroke="#b8f000" strokeWidth="1"><circle cx="50" cy="50" r="48" /></svg>}
          </div>
        );
      })}
    </div>
  );
};

export default function Home() {
  const tw = useTypewriter(portfolioData.personal.taglines);
  const { personal } = portfolioData;
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" style={{ minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden", padding: "100px 40px 60px" }}>
      <ShapesBackground />

      <div style={{ maxWidth: 1300, margin: "0 auto", width: "100%", position: "relative", zIndex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "end" }} className="two-col">

        {/* LEFT */}
        <AnimSection>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 16px", borderRadius: 100, border: "1px solid rgba(184,240,0,0.2)", background: "rgba(184,240,0,0.06)", marginBottom: 28 }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#b8f000", animation: "pulse-g 2s infinite", display: "inline-block" }} />
            <span style={{ fontSize: 12, color: "#b8f000", letterSpacing: ".5px" }}>available_for_opportunities.exe</span>
          </div>
          <h1 style={{ fontSize: "clamp(44px,5vw,72px)", fontWeight: 800, lineHeight: 1.0, marginBottom: 12, color: "#f0f2e8", letterSpacing: "-2px" }}>
            Harsh<br /><span style={{ color: "#b8f000" }}>Bhardwaj</span>
          </h1>
          <div style={{ fontSize: 15, color: "#a8b090", marginBottom: 24 }}>
            // <span style={{ color: "#b8f000" }}>{tw}</span><span style={{ animation: "blink 1s infinite", color: "#b8f000" }}>_</span>
          </div>
          <p style={{ fontSize: 16, color: "#a8b090", lineHeight: 1.8, marginBottom: 40, maxWidth: 480 }}>{personal.bio}</p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 40 }}>
            <button onClick={() => go("projects")} style={{ padding: "13px 26px", borderRadius: 8, background: "#b8f000", color: "#000", fontWeight: 700, fontSize: 14, border: "none", cursor: "pointer", transition: "all .2s" }} onMouseOver={e => { e.currentTarget.style.background = "#96cc00"; e.currentTarget.style.transform = "translateY(-2px)"; }} onMouseOut={e => { e.currentTarget.style.background = "#b8f000"; e.currentTarget.style.transform = ""; }}>View Projects →</button>
            <button onClick={() => go("contact")} style={{ padding: "13px 26px", borderRadius: 8, background: "transparent", color: "#f0f2e8", fontWeight: 600, fontSize: 14, border: "1px solid rgba(255,255,255,0.1)", cursor: "pointer", transition: "all .2s" }} onMouseOver={e => { e.currentTarget.style.borderColor = "#b8f000"; e.currentTarget.style.color = "#b8f000"; }} onMouseOut={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.color = "#f0f2e8"; }}>Get In Touch</button>
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            {[["https://github.com/bhardwajharsh07", <GH />], ["https://linkedin.com/in/bhardwajharsh07/", <LI />], [`mailto:${personal.email}`, <Mail />]].map(([url, icon], i) => (
              <a key={i} href={url} target="_blank" rel="noreferrer" style={socBtn} onMouseOver={e => { e.currentTarget.style.borderColor = "#b8f000"; e.currentTarget.style.color = "#b8f000"; e.currentTarget.style.background = "rgba(184,240,0,0.08)"; }} onMouseOut={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.color = "#6a7055"; e.currentTarget.style.background = "transparent"; }}>{icon}</a>
            ))}
          </div>
        </AnimSection>

        {/* RIGHT — Photo floats above, card below */}
        <AnimSection delay={0.15}>
          <div style={{ position: "relative", width: "100%" }}>

            {/* === GREEN GLOW behind photo === */}
            <div style={{
              position: "absolute",
              top: "0%",
              left: "50%",
              transform: "translateX(-50%)",
              width: "90%",
              height: "65%",
              background: "radial-gradient(ellipse at 50% 60%, rgba(184,240,0,0.35) 0%, rgba(184,240,0,0.12) 35%, transparent 70%)",
              filter: "blur(28px)",
              zIndex: 0,
              pointerEvents: "none",
            }} />

            {/* === PHOTO — sits above card, no overlap === */}
            <div style={{ position: "relative", zIndex: 2, display: "flex", justifyContent: "center" }}>
              <img
                src="/profile.png"
                alt="Harsh Bhardwaj"
                style={{
                  width: "72%",
                  maxWidth: 300,
                  display: "block",
                  filter: "drop-shadow(0 0 30px rgba(184,240,0,0.2)) drop-shadow(0 10px 20px rgba(0,0,0,0.7))",
                }}
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.parentElement.innerHTML = `<div style="width:280px;height:320px;border:2px dashed rgba(184,240,0,0.3);border-radius:16px;display:flex;align-items:center;justify-content:center;color:rgba(184,240,0,0.5);font-size:13px;text-align:center;padding:20px;box-sizing:border-box;">Save background-removed<br/>photo as<br/>public/profile.png</div>`;
                }}
              />
            </div>

            {/* === STATS CARD — sits directly below photo === */}
            <div style={{
              position: "relative",
              zIndex: 3,
              background: "linear-gradient(180deg, #1a1f10 0%, #141809 100%)",
              border: "1px solid rgba(184,240,0,0.15)",
              borderRadius: 20,
              padding: "28px 24px",
              boxShadow: "0 20px 50px rgba(0,0,0,0.6)",
            }}>
              {/* top accent line */}
              <div style={{ position: "absolute", top: 0, left: "15%", right: "15%", height: 2, background: "linear-gradient(90deg,transparent,rgba(184,240,0,0.8),transparent)" }} />

              {/* Stats row */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, marginBottom: 24, paddingBottom: 24, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                {[["8.71", "CGPA, LPU"], ["450+", "PROBLEMS_SOLVED"], ["3+", "ML_PROJECTS"]].map(([val, lbl]) => (
                  <div key={lbl} style={{ textAlign: "center" }}>
                    <div style={{ fontSize: "clamp(24px, 3vw, 32px)", fontWeight: 800, color: "#b8f000", lineHeight: 1.1, marginBottom: 6 }}>{val}</div>
                    <div style={{ fontSize: 9, color: "#6a7055", letterSpacing: "1px", textTransform: "uppercase" }}>{lbl}</div>
                  </div>
                ))}
              </div>

              {/* Coding profiles */}
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  ["HackerRank", "@harshbhardwaj999", "https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png", "#b8f000"],
                  ["LeetCode", "@harshbhardwaj07", "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png", "#ffa116"],
                  ["GeeksForGeeks", "@harshbhardwaj999", "https://media.geeksforgeeks.org/gfg-gg-logo.svg", "#2f8d46"],
                ].map(([name, val, icon, color]) => (
                  <div key={name} style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <img src={icon} alt={name} style={{ width: 18, height: 18, objectFit: "contain", filter: name === "LeetCode" ? "hue-rotate(-20deg) saturate(3) brightness(1.2)" : name === "GeeksForGeeks" ? "invert(0.5) sepia(1) saturate(5) hue-rotate(40deg) brightness(1.3)" : "" }} />
                      <span style={{ fontSize: 13, fontWeight: 500, color: "#f0f2e8" }}>{name}</span>
                    </div>
                    <span style={{ fontSize: 12, color }}>{val}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </AnimSection>
      </div>

      <style>{`@media(max-width:900px){.two-col{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}