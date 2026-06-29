import { useState, useEffect, useRef } from "react";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

  .portfolio-root {
    --bg:        #ffffff;
    --bg-card:   #F9FAFB;
    --bg-muted:  #F3F4F6;
    --border:    #E5E7EB;
    --text:      #111827;
    --muted:     #6B7280;
    --accent:    #2563EB;
    --accent-bg: #EFF6FF;
    --radius:    12px;
    --radius-sm: 6px;
    --shadow:    0 1px 3px rgba(0,0,0,.06), 0 4px 16px rgba(0,0,0,.04);
    --shadow-lg: 0 8px 32px rgba(0,0,0,.08);
    --transition: 200ms cubic-bezier(.4,0,.2,1);
    --font: 'Inter', system-ui, sans-serif;
    --max-w: 760px;
    font-family: var(--font);
    background: var(--bg);
    color: var(--text);
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    transition: background var(--transition), color var(--transition);
  }

  .portfolio-root.dark {
    --bg:        #0F172A;
    --bg-card:   #1E293B;
    --bg-muted:  #1E293B;
    --border:    #334155;
    --text:      #F1F5F9;
    --muted:     #94A3B8;
    --accent:    #60A5FA;
    --accent-bg: #1E3A5F;
    --shadow:    0 1px 3px rgba(0,0,0,.3), 0 4px 16px rgba(0,0,0,.2);
    --shadow-lg: 0 8px 32px rgba(0,0,0,.4);
  }

  .portfolio-root *, .portfolio-root *::before, .portfolio-root *::after {
    box-sizing: border-box; margin: 0; padding: 0;
  }
  .portfolio-root a { color: inherit; text-decoration: none; }
  .portfolio-root ul { list-style: none; }
  .portfolio-root img { display: block; max-width: 100%; }

  .p-container {
    max-width: var(--max-w);
    margin: 0 auto;
    padding: 0 24px;
  }

  /* NAV */
  .p-nav {
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 100;
    background: rgba(255,255,255,.82);
    backdrop-filter: saturate(180%) blur(16px);
    -webkit-backdrop-filter: saturate(180%) blur(16px);
    border-bottom: 1px solid var(--border);
    transition: background var(--transition);
  }
  .portfolio-root.dark .p-nav {
    background: rgba(15,23,42,.82);
  }
  .p-nav-inner {
    max-width: var(--max-w);
    margin: 0 auto;
    padding: 0 24px;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .p-nav-logo {
    font-size: .875rem;
    font-weight: 600;
    letter-spacing: -.02em;
    color: var(--text);
  }
  .p-nav-right { display: flex; align-items: center; gap: 8px; }
  .p-nav-links { display: flex; gap: 4px; }
  .p-nav-links a {
    font-size: .8125rem;
    font-weight: 500;
    color: var(--muted);
    padding: 5px 10px;
    border-radius: var(--radius-sm);
    transition: color var(--transition), background var(--transition);
  }
  .p-nav-links a:hover { color: var(--text); background: var(--bg-muted); }
  .p-btn-theme {
    width: 34px; height: 34px;
    border-radius: 8px;
    border: 1px solid var(--border);
    background: transparent;
    color: var(--muted);
    cursor: pointer;
    display: flex; align-items: center; justify-content: center;
    transition: background var(--transition), color var(--transition);
    flex-shrink: 0;
  }
  .p-btn-theme:hover { background: var(--bg-muted); color: var(--text); }
  .p-btn-pdf {
    font-size: .8125rem;
    font-weight: 500;
    color: var(--accent);
    padding: 5px 12px;
    border-radius: var(--radius-sm);
    border: 1px solid var(--accent);
    background: transparent;
    cursor: pointer;
    transition: background var(--transition), color var(--transition);
    white-space: nowrap;
  }
  .p-btn-pdf:hover { background: var(--accent); color: #fff; }

  /* HERO */
  .p-hero {
    padding: 128px 0 80px;
    position: relative;
    overflow: hidden;
  }
  .p-hero::before {
    content: '';
    position: absolute;
    top: -160px; right: -160px;
    width: 520px; height: 520px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(37,99,235,.12) 0%, transparent 70%);
    animation: p-orb-float 8s ease-in-out infinite alternate;
    pointer-events: none;
  }
  .portfolio-root.dark .p-hero::before {
    background: radial-gradient(circle, rgba(96,165,250,.10) 0%, transparent 70%);
  }
  @keyframes p-orb-float {
    from { transform: translate(0,0) scale(1); }
    to   { transform: translate(-40px, 40px) scale(1.1); }
  }
  .p-hero-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: .75rem;
    font-weight: 600;
    letter-spacing: .08em;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: 20px;
  }
  .p-hero-eyebrow::before {
    content: '';
    display: block;
    width: 18px; height: 2px;
    background: var(--accent);
    border-radius: 99px;
  }
  .p-hero h1 {
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 700;
    letter-spacing: -.04em;
    line-height: 1.1;
    color: var(--text);
    margin-bottom: 16px;
  }
  .p-hero-subtitle {
    font-size: 1.0625rem;
    color: var(--muted);
    max-width: 480px;
    margin-bottom: 32px;
    line-height: 1.65;
  }
  .p-hero-links { display: flex; flex-wrap: wrap; gap: 10px; }
  .p-chip {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 7px 14px;
    border-radius: 99px;
    border: 1px solid var(--border);
    background: var(--bg-card);
    font-size: .8125rem;
    font-weight: 500;
    color: var(--muted);
    transition: border-color var(--transition), color var(--transition), box-shadow var(--transition);
  }
  .p-chip:hover {
    border-color: var(--accent);
    color: var(--accent);
    box-shadow: 0 0 0 3px var(--accent-bg);
  }
  .p-chip svg { flex-shrink: 0; }

  /* DIVIDER */
  .p-divider { height: 1px; background: var(--border); margin: 0; }

  /* SECTIONS */
  .p-section { padding: 72px 0; }
  .p-section-label {
    font-size: .6875rem;
    font-weight: 700;
    letter-spacing: .1em;
    text-transform: uppercase;
    color: var(--muted);
    margin-bottom: 32px;
  }

  /* SOBRE */
  .p-sobre-text {
    font-size: 1rem;
    color: var(--muted);
    line-height: 1.75;
    max-width: 620px;
  }
  .p-sobre-text strong { color: var(--text); font-weight: 600; }
  .p-skills-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 28px;
  }
  .p-skill-tag {
    padding: 5px 12px;
    border-radius: var(--radius-sm);
    background: var(--bg-muted);
    border: 1px solid var(--border);
    font-size: .8125rem;
    font-weight: 500;
    color: var(--text);
    transition: background var(--transition), border-color var(--transition);
  }
  .p-skill-tag:hover {
    background: var(--accent-bg);
    border-color: var(--accent);
    color: var(--accent);
  }

  /* FORMAÇÃO */
  .p-edu-list { display: flex; flex-direction: column; gap: 16px; }
  .p-edu-card {
    padding: 20px 22px;
    border-radius: var(--radius);
    border: 1px solid var(--border);
    background: var(--bg-card);
    display: flex;
    align-items: flex-start;
    gap: 16px;
    transition: box-shadow var(--transition);
  }
  .p-edu-card:hover { box-shadow: var(--shadow); }
  .p-edu-icon {
    width: 38px; height: 38px;
    border-radius: 10px;
    background: var(--accent-bg);
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
    color: var(--accent);
  }
  .p-edu-name {
    font-size: .9375rem;
    font-weight: 600;
    color: var(--text);
    letter-spacing: -.01em;
    margin-bottom: 2px;
  }
  .p-edu-meta { font-size: .8125rem; color: var(--muted); }
  .p-badge {
    display: inline-block;
    padding: 2px 8px;
    border-radius: 99px;
    font-size: .6875rem;
    font-weight: 600;
    letter-spacing: .03em;
  }
  .p-badge-blue { background: var(--accent-bg); color: var(--accent); }
  .p-badge-gray {
    background: var(--bg-muted);
    color: var(--muted);
    border: 1px solid var(--border);
  }

  /* EXPERIÊNCIA */
  .p-exp-card {
    padding: 24px;
    border-radius: var(--radius);
    border: 1px solid var(--border);
    background: var(--bg-card);
    transition: box-shadow var(--transition);
  }
  .p-exp-card:hover { box-shadow: var(--shadow); }
  .p-exp-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 12px;
    margin-bottom: 16px;
  }
  .p-exp-role {
    font-size: 1rem;
    font-weight: 600;
    color: var(--text);
    letter-spacing: -.01em;
  }
  .p-exp-where { font-size: .8125rem; color: var(--muted); margin-top: 2px; }
  .p-exp-bullets { display: flex; flex-direction: column; gap: 6px; }
  .p-exp-bullets li {
    font-size: .875rem;
    color: var(--muted);
    display: flex;
    gap: 8px;
  }
  .p-exp-bullets li::before {
    content: '—';
    color: var(--accent);
    flex-shrink: 0;
    font-weight: 500;
  }

  /* PROJETOS */
  .p-projects-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
  }
  .p-project-card {
    padding: 14px 16px;
    border-radius: var(--radius-sm);
    border: 1px solid var(--border);
    background: var(--bg-card);
    display: flex;
    flex-direction: column;
    gap: 6px;
    transition: box-shadow var(--transition), border-color var(--transition), transform var(--transition);
    cursor: default;
  }
  .p-project-card:hover {
    box-shadow: var(--shadow);
    border-color: rgba(37,99,235,.25);
    transform: translateY(-1px);
  }
  .portfolio-root.dark .p-project-card:hover {
    border-color: rgba(96,165,250,.3);
  }
  .p-project-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2px;
  }
  .p-project-icon {
    width: 26px; height: 26px;
    border-radius: 6px;
    background: var(--accent-bg);
    display: flex; align-items: center; justify-content: center;
    color: var(--accent);
  }
  .p-project-gh { color: var(--muted); transition: color var(--transition); }
  .p-project-gh:hover { color: var(--accent); }
  .p-project-name {
    font-size: .8125rem;
    font-weight: 600;
    color: var(--text);
    letter-spacing: -.015em;
  }
  .p-project-desc {
    font-size: .75rem;
    color: var(--muted);
    line-height: 1.5;
    flex: 1;
  }
  .p-tech-stack { display: flex; flex-wrap: wrap; gap: 4px; margin-top: 2px; }
  .p-tech-tag {
    padding: 1px 6px;
    border-radius: 3px;
    font-size: .625rem;
    font-weight: 600;
    letter-spacing: .01em;
    background: var(--bg-muted);
    border: 1px solid var(--border);
    color: var(--muted);
  }

  /* IDIOMAS */
  .p-lang-grid { display: flex; gap: 8px; flex-wrap: wrap; }
  .p-lang-card {
    padding: 10px 16px;
    border-radius: var(--radius-sm);
    border: 1px solid var(--border);
    background: var(--bg-card);
    min-width: 120px;
  }
  .p-lang-name { font-size: .875rem; font-weight: 600; color: var(--text); margin-bottom: 2px; }
  .p-lang-level { font-size: .75rem; color: var(--muted); }

  /* CONTATO */
  .p-contact-block {
    padding: 32px;
    border-radius: var(--radius);
    border: 1px solid var(--border);
    background: var(--bg-card);
    display: flex;
    flex-direction: column;
    gap: 14px;
  }
  .p-contact-item {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: .9375rem;
    color: var(--muted);
    transition: color var(--transition);
  }
  .p-contact-item:hover { color: var(--accent); }
  .p-contact-item svg { flex-shrink: 0; color: var(--accent); }
  .p-contact-label {
    font-size: .75rem;
    font-weight: 600;
    letter-spacing: .05em;
    text-transform: uppercase;
    color: var(--muted);
    opacity: .7;
    min-width: 72px;
  }

  /* FOOTER */
  .p-footer { border-top: 1px solid var(--border); padding: 28px 0; }
  .p-footer-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    flex-wrap: wrap;
  }
  .p-footer-text { font-size: .8125rem; color: var(--muted); }

  /* REVEAL */
  .p-reveal {
    opacity: 0;
    transform: translateY(16px);
    transition: opacity .5s ease, transform .5s ease;
  }
  .p-reveal.visible {
    opacity: 1;
    transform: translateY(0);
  }

  @media (prefers-reduced-motion: reduce) {
    .p-reveal { opacity: 1; transform: none; transition: none; }
    .p-hero::before { animation: none; }
  }

  @media (max-width: 600px) {
    .p-nav-links { display: none; }
    .p-hero { padding: 100px 0 60px; }
    .p-projects-grid { grid-template-columns: 1fr; }
    .p-hero h1 { font-size: 1.875rem; }
    .p-section { padding: 52px 0; }
  }

  @media print {
    .p-nav, .p-footer, .p-btn-pdf { display: none !important; }
    body { background: #fff !important; color: #111 !important; }
    .p-hero { padding: 32px 0 24px; }
    .p-hero::before { display: none; }
    .p-section { padding: 24px 0; }
    .p-project-card, .p-edu-card, .p-exp-card { break-inside: avoid; }
    * { box-shadow: none !important; animation: none !important; }
    @page { size: A4; margin: 20mm; }
  }
`;

// SVG Icons
const IconSun = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </svg>
);
const IconMoon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
);
const IconEmail = ({ size = 14 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);
const IconGithub = ({ size = 14 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>
);
const IconLinkedin = ({ size = 14 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
);
const IconLocation = ({ size = 16 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);
const IconGraduate = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
  </svg>
);
const IconLock = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
);
const IconBook = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
  </svg>
);
const IconChat = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
);
const IconChart = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
  </svg>
);

// Reveal hook
function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function Reveal({ children, className = "" }) {
  const ref = useReveal();
  return (
    <div ref={ref} className={`p-reveal ${className}`}>
      {children}
    </div>
  );
}

export default function Portfolio() {
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      if (saved) return saved === "dark";
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  useEffect(() => {
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={`portfolio-root${dark ? " dark" : ""}`}>
      <style>{styles}</style>

      {/* NAV */}
      <nav className="p-nav" role="navigation" aria-label="Navegação principal">
        <div className="p-nav-inner">
          <span className="p-nav-logo">Caio Victor</span>
          <div className="p-nav-right">
            <ul className="p-nav-links" role="list">
              <li><a href="#sobre" onClick={e => { e.preventDefault(); scrollTo("sobre"); }}>Sobre</a></li>
              <li><a href="#projetos" onClick={e => { e.preventDefault(); scrollTo("projetos"); }}>Projetos</a></li>
              <li><a href="#contato" onClick={e => { e.preventDefault(); scrollTo("contato"); }}>Contato</a></li>
            </ul>
            <button className="p-btn-theme" onClick={() => setDark(d => !d)} aria-label="Alternar tema escuro">
              {dark ? <IconSun /> : <IconMoon />}
            </button>
            <button className="p-btn-pdf" onClick={() => window.print()} aria-label="Baixar currículo em PDF">
              ↓ PDF
            </button>
          </div>
        </div>
      </nav>

      <main>
        {/* HERO */}
        <header className="p-hero" id="inicio">
          <div className="p-container">
            <p className="p-hero-eyebrow">Disponível para estágio</p>
            <h1>Caio Victor<br />Andrade Araújo</h1>
            <p className="p-hero-subtitle">
              Desenvolvedor de Software · Campina Grande, PB<br />FullStack
            </p>
            <div className="p-hero-links" role="list">
              <a className="p-chip" href="mailto:contatoiscaio@gmail.com" aria-label="Email">
                <IconEmail /> contatoiscaio@gmail.com
              </a>
              <a className="p-chip" href="https://github.com/iscaio" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <IconGithub /> github.com/iscaio
              </a>
              <a className="p-chip" href="https://linkedin.com/in/iscaioandrade" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <IconLinkedin /> linkedin.com/in/iscaioandrade
              </a>
            </div>
          </div>
        </header>

        <div className="p-divider" />

        {/* SOBRE */}
        <section id="sobre" className="p-section" aria-labelledby="sobre-title">
          <div className="p-container">
            <p className="p-section-label">Sobre</p>
            <Reveal>
              <p className="p-sobre-text">
                Sou estudante de <strong>Análise e Desenvolvimento de Sistemas</strong> e graduado em Administração.
                Tenho interesse em <strong>Engenharia de Software</strong>, desenvolvimento backend e arquitetura de sistemas.
                Desenvolvo projetos utilizando Java, Node.js, React e Python, buscando escrever código limpo e organizado,
                focado na resolução de problemas reais.
              </p>
              <div className="p-skills-grid" role="list" aria-label="Tecnologias">
                {["Java","Node.js","Express","React","Python","MongoDB","JWT","REST API","POO","MVC","Git","SQL"].map(s => (
                  <span key={s} className="p-skill-tag" role="listitem">{s}</span>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <div className="p-divider" />

        {/* FORMAÇÃO */}
        <section id="formacao" className="p-section" aria-labelledby="formacao-title">
          <div className="p-container">
            <p className="p-section-label">Formação</p>
            <Reveal>
              <ul className="p-edu-list" role="list">
                <li className="p-edu-card">
                  <div className="p-edu-icon"><IconGraduate /></div>
                  <div>
                    <p className="p-edu-name">Tecnólogo em Análise e Desenvolvimento de Sistemas</p>
                    <p className="p-edu-meta">5º Período · <span className="p-badge p-badge-blue">Em andamento</span></p>
                  </div>
                </li>
                <li className="p-edu-card">
                  <div className="p-edu-icon"><IconGraduate /></div>
                  <div>
                    <p className="p-edu-name">Bacharel em Administração</p>
                    <p className="p-edu-meta"><span className="p-badge p-badge-gray">Concluído</span></p>
                  </div>
                </li>
              </ul>
            </Reveal>
          </div>
        </section>

        <div className="p-divider" />

        {/* EXPERIÊNCIA */}
        <section id="experiencia" className="p-section" aria-labelledby="exp-title">
          <div className="p-container">
            <p className="p-section-label">Experiência</p>
            <Reveal>
              <div className="p-exp-card">
                <div className="p-exp-header">
                  <div>
                    <p className="p-exp-role">Monitor de Programação Orientada a Objetos</p>
                    <p className="p-exp-where">Universidade · Campina Grande, PB</p>
                  </div>
                </div>
                <ul className="p-exp-bullets" role="list">
                  <li>Suporte direto a alunos em exercícios e projetos com Java</li>
                  <li>Depuração de código e identificação de erros de lógica</li>
                  <li>Mentoria e comunicação técnica com estudantes iniciantes</li>
                  <li>Correção de exercícios com feedback construtivo</li>
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        <div className="p-divider" />

        {/* PROJETOS */}
        <section id="projetos" className="p-section" aria-labelledby="proj-title">
          <div className="p-container">
            <p className="p-section-label">Projetos</p>
            <Reveal>
              <div className="p-projects-grid">
                {[
                  {
                    icon: <IconLock />,
                    name: "API de Autenticação",
                    desc: "API REST completa com CRUD de usuários, autenticação JWT, arquitetura MVC e criptografia de senhas com BCrypt.",
                    tags: ["Node.js","Express","MongoDB","JWT","BCrypt"],
                  },
                  {
                    icon: <IconBook />,
                    name: "Sistema de Biblioteca",
                    desc: "Sistema acadêmico em Java aplicando os pilares da POO: encapsulamento, herança e polimorfismo.",
                    tags: ["Java","POO"],
                  },
                  {
                    icon: <IconChat />,
                    name: "Sistema de Ouvidoria",
                    desc: "Sistema para registro, triagem e gerenciamento de manifestações, construído em Python.",
                    tags: ["Python"],
                  },
                  {
                    icon: <IconChart />,
                    name: "Machine Learning",
                    desc: "Projeto acadêmico de análise de dados e treinamento de modelos preditivos com Scikit-Learn e Pandas.",
                    tags: ["Python","Pandas","Scikit-Learn","Jupyter"],
                  },
                ].map((p) => (
                  <article key={p.name} className="p-project-card">
                    <div className="p-project-top">
                      <div className="p-project-icon">{p.icon}</div>
                      <a className="p-project-gh" href="https://github.com/iscaio" target="_blank" rel="noopener noreferrer" aria-label="Ver no GitHub">
                        <IconGithub size={16} />
                      </a>
                    </div>
                    <p className="p-project-name">{p.name}</p>
                    <p className="p-project-desc">{p.desc}</p>
                    <div className="p-tech-stack">
                      {p.tags.map(t => <span key={t} className="p-tech-tag">{t}</span>)}
                    </div>
                  </article>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <div className="p-divider" />

        {/* IDIOMAS */}
        <section id="idiomas" className="p-section" style={{padding: "36px 0"}} aria-labelledby="idiomas-title">
          <div className="p-container">
            <p className="p-section-label">Idiomas</p>
            <Reveal>
              <div className="p-lang-grid">
                <div className="p-lang-card">
                  <p className="p-lang-name">Português</p>
                  <p className="p-lang-level">Nativo</p>
                </div>
                <div className="p-lang-card">
                  <p className="p-lang-name">Inglês</p>
                  <p className="p-lang-level">Leitura técnica</p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <div className="p-divider" />

        {/* CONTATO */}
        <section id="contato" className="p-section" aria-labelledby="contato-title">
          <div className="p-container">
            <p className="p-section-label">Contato</p>
            <Reveal>
              <div className="p-contact-block">
                <a className="p-contact-item" href="mailto:contatoiscaio@gmail.com">
                  <IconEmail size={16} />
                  <span className="p-contact-label">Email</span>
                  contatoiscaio@gmail.com
                </a>
                <a className="p-contact-item" href="https://github.com/iscaio" target="_blank" rel="noopener noreferrer">
                  <IconGithub size={16} />
                  <span className="p-contact-label">GitHub</span>
                  github.com/iscaio
                </a>
                <a className="p-contact-item" href="https://linkedin.com/in/iscaioandrade" target="_blank" rel="noopener noreferrer">
                  <IconLinkedin size={16} />
                  <span className="p-contact-label">LinkedIn</span>
                  linkedin.com/in/iscaioandrade
                </a>
                <div className="p-contact-item">
                  <IconLocation size={16} />
                  <span className="p-contact-label">Local</span>
                  Campina Grande, PB — Brasil
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="p-footer">
        <div className="p-container">
          <div className="p-footer-inner">
            <p className="p-footer-text">© 2025 Caio Victor Andrade Araújo</p>
            <p className="p-footer-text">
              Campina Grande, PB ·{" "}
              <a href="mailto:contatoiscaio@gmail.com" style={{ color: "var(--accent)" }}>
                contatoiscaio@gmail.com
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
