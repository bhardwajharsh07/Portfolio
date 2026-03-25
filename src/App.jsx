import { useState, useEffect } from "react";
import "./styles/global.css";
import { ScrollProgress, BackToTop } from "./components/UI.jsx";
import Navbar, { navLinks } from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Resume from "./pages/Resume.jsx";
import Education from "./pages/Education.jsx";
import Skills from "./pages/Skills.jsx";
import Projects from "./pages/Projects.jsx";
import Certifications from "./pages/Certifications.jsx";
import Achievements from "./pages/Achievements.jsx";
import Internship from "./pages/Internship.jsx";
import Competitive from "./pages/Competitive.jsx";
import Contact from "./pages/Contact.jsx";

export default function App() {
  const [active, setActive] = useState("home");
  useEffect(() => {
    const fn = () => {
      const sy = window.scrollY + 100;
      let curr = "home";
      navLinks.forEach(l => { const el = document.getElementById(l.id); if (el && el.offsetTop <= sy) curr = l.id; });
      setActive(curr);
    };
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      <ScrollProgress />
      <Navbar active={active} />
      <main>
        <Home /><About /><Resume /><Education /><Skills />
        <Projects /><Certifications /><Achievements />
        <Internship /><Competitive /><Contact />
      </main>
      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "28px 40px", textAlign: "center" }}>
        <p style={{ fontSize: 13, color: "#6a7055" }}>
          Designed & Built by <span style={{ color: "#b8f000", fontWeight: 600 }}>Harsh Bhardwaj</span> · 2025 &nbsp;·&nbsp;
          <span style={{ fontSize: 11 }}>&lt;made with Python ♥ /&gt;</span>
        </p>
      </footer>
      <BackToTop />
    </>
  );
}
