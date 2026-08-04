import { theme } from "../../theme"

export default function Header() {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px 28px",
        borderBottom: `1px solid ${theme.line}`,
      }}
    >
      <span
        className="mono"
        style={{ color: theme.copper, fontSize: 13, fontWeight: 500, letterSpacing: "0.1em" }}
      >
        TREASURE.DEV
      </span>
      <nav style={{ display: "flex", gap: 24 }}>
        <a className="navlink" href="#work">WORK</a>
        <a className="navlink" href="#skills">SKILLS</a>
        <a className="navlink" href="#contact">CONTACT</a>
      </nav>
    </header>
  )
}
