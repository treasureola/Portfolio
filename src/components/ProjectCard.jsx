import { useState } from "react"
import { theme } from "../theme"

export default function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false)
  const isComplete = project.status === "complete"

  return (
    <article
      className="card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        border: `1px solid ${theme.line}`,
        background: theme.panel,
        padding: 24,
        borderRadius: 3,
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span
          className="mono"
          style={{
            fontSize: 11,
            color: hovered ? theme.copperBright : theme.muted,
            letterSpacing: "0.12em",
          }}
        >
          {project.tag}
        </span>
        <span
          className="mono"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            fontSize: 10,
            letterSpacing: "0.1em",
            color: isComplete ? theme.success : theme.gold,
            border: `1px solid ${theme.line}`,
            padding: "3px 8px",
            borderRadius: 999,
          }}
        >
          <span
            className={isComplete ? "" : "pulse"}
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: isComplete ? theme.success : theme.gold,
            }}
          />
          {isComplete ? "COMPLETE" : "IN PROGRESS"}
        </span>
      </div>
      <h2 style={{ fontSize: 21, fontWeight: 700, margin: "14px 0 10px" }}>{project.name}</h2>
      <p style={{ fontSize: 13.5, color: theme.muted, lineHeight: 1.7 }}>{project.description}</p>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 18 }}>
        {project.stack.map((s) => (
          <span
            key={s}
            className="mono"
            style={{
              fontSize: 11,
              color: theme.gold,
              border: `1px solid ${theme.line}`,
              padding: "3px 9px",
              borderRadius: 2,
            }}
          >
            {s}
          </span>
        ))}
      </div>
      <a
        href={project.githubUrl}
        target="_blank"
        rel="noreferrer"
        className="mono"
        style={{
          display: "inline-block",
          marginTop: 18,
          fontSize: 11.5,
          letterSpacing: "0.06em",
          color: theme.ink,
          textDecoration: "none",
          borderBottom: `1px solid ${theme.line}`,
        }}
      >
        VIEW ON GITHUB →
      </a>
    </article>
  )
}
