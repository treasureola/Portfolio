import { theme } from "../theme"

export default function GlobalStyles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800&family=IBM+Plex+Mono:wght@400;500&display=swap');
      * { box-sizing: border-box; margin: 0; }
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
      @media (max-width: 860px) { .hero-grid { grid-template-columns: 1fr !important; } .orbwrap { order: -1; height: 340px !important; } }
    `}</style>
  )
}
