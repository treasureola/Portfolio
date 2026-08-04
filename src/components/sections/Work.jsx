import { theme } from "../../theme"
import { projects } from "../../data/projects"
import ProjectCard from "../ProjectCard"

export default function Work() {
  return (
    <section id="work" className="sect" style={{ maxWidth: 1180, margin: "0 auto", padding: "44px 28px" }}>
      <p className="mono" style={{ color: theme.copper, fontSize: 12, letterSpacing: "0.16em", marginBottom: 24 }}>
        SELECTED WORK
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 16,
        }}
      >
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  )
}
