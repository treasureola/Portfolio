import { theme } from "../theme"

export default function GlobalStyles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800&family=IBM+Plex+Mono:wght@400;500&display=swap');
      * { box-sizing: border-box; margin: 0; }
      html, body { overflow-x: hidden; }
      h1 { overflow-wrap: break-word; }
      canvas { display: block; max-width: 100%; height: auto; }
      ::selection { background: ${theme.copper}; color: ${theme.bg}; }
      .mono { font-family: 'IBM Plex Mono', monospace; }
      .navlink { color: ${theme.muted}; text-decoration: none; font-size: 12px; letter-spacing: 0.08em; font-family: 'IBM Plex Mono', monospace; }
      .navlink:hover, .navlink:focus-visible { color: ${theme.copperBright}; }
      .card { transition: border-color .18s ease, transform .18s ease; }
      .card:hover { border-color: ${theme.copper} !important; transform: translateY(-3px); }
      @keyframes pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.35; } }
      .pulse { animation: pulse 1.6s ease-in-out infinite; }
      @media (prefers-reduced-motion: reduce) {
        .pulse { animation: none; }
        .card { transition: none; }
      }
      :focus-visible { outline: 2px solid ${theme.copper}; outline-offset: 2px; }
      @media (max-width: 860px) {
        .hero-grid { grid-template-columns: 1fr !important; }
      }
      @media (max-width: 640px) {
        header { padding: 14px 18px !important; }
        nav { gap: 16px !important; }
        .hero-grid { padding: 32px 18px 16px !important; gap: 8px !important; }
        .orbwrap { order: -1; height: 260px !important; }
        .sect { padding: 28px 18px !important; }
        footer { padding: 28px 18px !important; }
        .card { padding: 20px !important; }
      }
    `}</style>
  )
}
