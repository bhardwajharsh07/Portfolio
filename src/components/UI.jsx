import { useEffect, useRef, useState } from "react";

export function ScrollProgress() {
  const [w, setW] = useState(0);
  useEffect(() => {
    const fn = () => {
      const el = document.documentElement;
      setW((el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100);
    };
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: 2, background: "transparent", zIndex: 9999 }}><div style={{ height: "100%", width: `${w}%`, background: "#b8f000", transition: "width .1s" }} /></div>;
}

export function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const fn = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  if (!show) return null;
  return (
    <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ position: "fixed", bottom: 32, right: 32, width: 46, height: 46, borderRadius: 10, border: "1px solid rgba(184,240,0,0.2)", background: "#181c0f", color: "#b8f000", cursor: "pointer", fontSize: 18, fontWeight: 700, zIndex: 998, display: "flex", alignItems: "center", justifyContent: "center", transition: "all .3s" }}>↑</button>
  );
}

export function AnimSection({ children, delay = 0, style = {} }) {
  const ref = useRef();
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.08 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} style={{ opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(24px)", transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`, ...style }}>
      {children}
    </div>
  );
}

export function SectionHeader({ label, title, accent, sub }) {
  return (
    <div className="sec-header">
      <div className="sec-label">// {label}</div>
      <h2 className="sec-title">{title} <span>{accent}</span></h2>
      <div className="divider" />
      {sub && <p style={{ fontSize: 15, color: "#a8b090", maxWidth: 540, lineHeight: 1.75, marginTop: 16 }}>{sub}</p>}
    </div>
  );
}

export function SkillBar({ name, level, logo, delay = 0 }) {
  const ref = useRef();
  const [w, setW] = useState(0);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setTimeout(() => setW(level), delay * 1000); }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [level, delay]);
  return (
    <div className="skill-row" ref={ref}>
      <div className="skill-top">
        <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
          {logo && (
            <img
              src={logo}
              alt={name}
              style={{ width: 16, height: 16, objectFit: "contain", flexShrink: 0 }}
            />
          )}
          <span className="skill-name">{name}</span>
        </div>
        <span className="skill-pct">{level}%</span>
      </div>
      <div className="skill-bar"><div className="skill-fill" style={{ width: `${w}%` }} /></div>
    </div>
  );
}