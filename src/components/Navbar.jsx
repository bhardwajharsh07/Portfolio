import { useState, useEffect } from "react";

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "resume", label: "Resume" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certificates" },
  { id: "achievements", label: "Achievements" },
  { id: "internship", label: "Internship" },
  { id: "competitive", label: "Competitive" },
  { id: "contact", label: "Contact" },
];

const s = {
  nav: (sc) => ({
    position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000, padding: "0 40px",
    background: sc ? "rgba(13,15,10,0.97)" : "transparent",
    backdropFilter: sc ? "blur(16px)" : "none",
    borderBottom: sc ? "1px solid rgba(184,240,0,0.12)" : "none",
    transition: "all 0.3s"
  }),
  inner: { maxWidth: 1300, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 70 },
  logo: { fontSize: 20, fontWeight: 800, color: "#b8f000", background: "none", border: "none", cursor: "pointer" },
  btn: (active) => ({
    padding: "6px 14px", borderRadius: 6, border: "none", fontSize: 12, fontWeight: 500,
    color: active ? "#b8f000" : "#6a7055",
    background: active ? "rgba(184,240,0,0.08)" : "transparent",
    cursor: "pointer", transition: "all 0.2s"
  })
};

export default function Navbar({ active }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (id) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); setOpen(false); };

  return (
    <nav style={s.nav(scrolled)}>
      <div style={s.inner}>
        <button style={s.logo} onClick={() => go("home")}>HB.</button>
        <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }} className="desk-nl">
          {navLinks.map(l => <button key={l.id} style={s.btn(active === l.id)} onClick={() => go(l.id)}>{l.label}</button>)}
        </div>
        <button onClick={() => setOpen(o => !o)} className="mob-menu" style={{ display: "none", padding: 8, borderRadius: 8, border: "1px solid rgba(255,255,255,0.1)", background: "transparent", cursor: "pointer", color: "#f0f2e8" }}>
          ☰
        </button>
      </div>
      {open && (
        <div style={{ background: "rgba(13,15,10,0.98)", padding: "16px 40px 24px", display: "flex", flexDirection: "column", gap: 4 }}>
          {navLinks.map(l => <button key={l.id} style={{ ...s.btn(active === l.id), textAlign: "left", padding: "10px 16px", fontSize: 14 }} onClick={() => go(l.id)}>{l.label}</button>)}
        </div>
      )}
      <style>{`.desk-nl{display:flex!important}.mob-menu{display:none!important}@media(max-width:900px){.desk-nl{display:none!important}.mob-menu{display:block!important}}`}</style>
    </nav>
  );
}
