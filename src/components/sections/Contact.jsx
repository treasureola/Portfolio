import { theme } from "../../theme"

export default function Contact() {
  return (
    <footer
      id="contact"
      style={{
        borderTop: `1px solid ${theme.line}`,
        padding: "36px 28px",
        maxWidth: 1180,
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 16,
      }}
    >
      <div>
        <p className="mono" style={{ color: theme.copper, fontSize: 12, letterSpacing: "0.16em", marginBottom: 12 }}>
          GET IN TOUCH
        </p>
        <a
          href="mailto:treasurelade1@gmail.com"
          style={{ display: "block", marginBottom: 6, textDecoration: "none", color: theme.ink, fontSize: 15, fontWeight: 600 }}
        >
          treasurelade1@gmail.com
        </a>
        <a
          href="https://linkedin.com/in/olamide-oluwalade/"
          style={{ display: "block", textDecoration: "none", color: theme.muted, fontSize: 13.5 }}
        >
          linkedin.com/in/olamide-oluwalade
        </a>
      </div>
      <span className="mono" style={{ color: theme.muted, fontSize: 11, alignSelf: "end", letterSpacing: "0.08em" }}>
        © 2026 OLAMIDE TREASURE OLUWALADE
      </span>
    </footer>
  )
}
