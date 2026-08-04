import { theme } from "../../theme"

const skills = [
  ["Languages", "Python · C · Java · C#"],
  ["AI / ML", "Recommenders · feedback loops · Claude API · agents"],
  ["Systems", "OS internals (xv6) · schedulers · assemblers · memory management"],
  ["Foundations", "M.S. Computer Science, GWU · 4 yrs IT support engineering"],
]

export default function Skills() {
  return (
    <section id="skills" className="sect" style={{ maxWidth: 1180, margin: "0 auto", padding: "24px 28px 52px" }}>
      <p className="mono" style={{ color: theme.copper, fontSize: 12, letterSpacing: "0.16em", marginBottom: 24 }}>
        WHAT I WORK WITH
      </p>
      <div style={{ border: `1px solid ${theme.line}`, borderRadius: 3, overflow: "hidden" }}>
        {skills.map(([k, v], i) => (
          <div
            key={k}
            style={{
              display: "grid",
              gridTemplateColumns: "170px 1fr",
              borderBottom: i < skills.length - 1 ? `1px solid ${theme.line}` : "none",
            }}
          >
            <div
              className="mono"
              style={{
                padding: "15px 18px",
                fontSize: 12,
                color: theme.muted,
                letterSpacing: "0.08em",
                borderRight: `1px solid ${theme.line}`,
              }}
            >
              {k.toUpperCase()}
            </div>
            <div style={{ padding: "15px 18px", fontSize: 14 }}>{v}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
