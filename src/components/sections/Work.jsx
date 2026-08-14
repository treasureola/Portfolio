import { useState } from "react"
import { theme } from "../../theme"
import { CATEGORIES, projects } from "../../data/projects"
import ProjectCard from "../ProjectCard"

export default function Work() {
  const [filter, setFilter] = useState("All")
  const visible = filter === "All" ? projects : projects.filter((p) => p.cats.includes(filter))

  return (
    <section id="work" className="sect" style={{ maxWidth: 1180, margin: "0 auto", padding: "44px 28px" }}>
      <p className="mono" style={{ color: theme.copper, fontSize: 12, letterSpacing: "0.16em", marginBottom: 24 }}>
        SELECTED WORK
      </p>
      <div
        role="group"
        aria-label="Filter projects by category"
        style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 24 }}
      >
        {["All", ...CATEGORIES].map((cat) => {
          const count = cat === "All" ? projects.length : projects.filter((p) => p.cats.includes(cat)).length
          const active = filter === cat
          return (
            <button
              key={cat}
              type="button"
              aria-pressed={active}
              onClick={() => setFilter(cat)}
              className="mono"
              style={{
                fontSize: 11,
                letterSpacing: "0.08em",
                padding: "6px 14px",
                borderRadius: 999,
                cursor: "pointer",
                border: `1px solid ${active ? theme.copper : theme.muted}`,
                background: active ? theme.copper : "transparent",
                color: active ? theme.bg : theme.muted,
              }}
            >
              {cat.toUpperCase()} ({count})
            </button>
          )
        })}
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 16,
        }}
      >
        {visible.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  )
}
