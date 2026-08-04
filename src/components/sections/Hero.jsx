import { theme } from "../../theme"
import HeroScene from "../HeroScene"

export default function Hero() {
  return (
    <section
      className="hero-grid"
      style={{
        display: "grid",
        gridTemplateColumns: "1.05fr 1fr",
        gap: 24,
        alignItems: "center",
        padding: "56px 28px 28px",
        maxWidth: 1180,
        margin: "0 auto",
      }}
    >
      <div>
        <p className="mono" style={{ color: theme.copper, fontSize: 12, letterSpacing: "0.16em", marginBottom: 20 }}>
          SOFTWARE ENGINEER
        </p>
        <h1
          style={{
            fontSize: "clamp(34px, 5vw, 58px)",
            fontWeight: 800,
            lineHeight: 1.08,
            letterSpacing: "-0.02em",
          }}
        >
          Olamide Treasure Oluwalade
        </h1>
        <p style={{ color: theme.muted, marginTop: 22, fontSize: 15.5, lineHeight: 1.75, maxWidth: 490 }}>
          I build software up and down the stack — AI agents, machine
          learning systems, and low-level code written from scratch.
          M.S. Computer Science, George Washington University. I like
          understanding how things actually work, then building with that
          understanding.
        </p>
        <div style={{ display: "flex", gap: 12, marginTop: 30, flexWrap: "wrap" }}>
          <a
            href="#work"
            style={{
              background: theme.copper,
              color: theme.bg,
              padding: "13px 24px",
              fontSize: 13.5,
              fontWeight: 700,
              letterSpacing: "0.04em",
              textDecoration: "none",
              borderRadius: 2,
            }}
          >
            See my work →
          </a>
          <a
            href="https://github.com/treasureola"
            style={{
              border: `1px solid ${theme.line}`,
              color: theme.ink,
              padding: "13px 24px",
              fontSize: 13.5,
              fontWeight: 500,
              textDecoration: "none",
              borderRadius: 2,
            }}
          >
            GitHub
          </a>
        </div>
      </div>

      <HeroScene />
    </section>
  )
}
