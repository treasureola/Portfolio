// TODO: swap in the real repo URLs — these are placeholders following
// github.com/treasureola/<slug> until confirmed.
export const CATEGORIES = ["AI / ML", "Frontend", "Systems", "Full-Stack"]

export const projects = [
  {
    name: "Personal AI Agent",
    cats: ["AI / ML", "Full-Stack"],
    status: "in-progress",
    description:
      "Autonomous personal agent built on the Claude API — tool use, task orchestration, and multi-step reasoning wired into everyday workflows.",
    stack: ["Claude API", "Agents", "Python"],
    githubUrl: "https://github.com/treasureola/personal_AI",
  },
  {
    name: "Inside the Machine",
    cats: ["Frontend", "Full-Stack"],
    status: "complete",
    description:
      "A cinematic 3D museum exhibit built in Unity that teaches PC hardware — explore ten components on glowing pedestals, then assemble a virtual PC through an animated quiz with X-ray mode. All animation and interaction scripted from scratch in C#.",
    stack: ["Unity 6", "C#", "URP", "UI/UX"],
    githubUrl: "https://github.com/treasureola/InsideTheMachine",
  },
  {
    name: "HouseMatch",
    cats: ["AI / ML", "Full-Stack"],
    status: "complete",
    description:
      "Behavioral recommendation engine for housing matches. Built the recommender and live feedback loops that learn from user behavior over time.",
    stack: ["Python", "Recommenders", "Feedback loops"],
    githubUrl: "https://github.com/treasureola/HouseMatch",
  },
  {
    name: "ForgeOS",
    cats: ["Systems"],
    status: "in-progress",
    description:
      "A task scheduler written from scratch in C, implementing rate-monotonic and earliest-deadline-first scheduling with deadline-miss analysis.",
    stack: ["C", "Scheduling", "Low-level"],
    githubUrl: "https://github.com/treasureola/ForgeOS",
  },
  {
    name: "Basic Machine Simulator",
    cats: ["Systems"],
    status: "complete",
    description:
      "A 16-bit computer built in software — two-pass assembler, CPU with a full fetch-decode-execute cycle, 2048-word memory, FIFO cache with hit/miss tracking, and a JavaFX front panel for stepping through programs.",
    stack: ["Java", "JavaFX", "Assembler", "Cache"],
    githubUrl: "https://github.com/treasureola/Assembler",
  },
]
