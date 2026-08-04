import { theme } from "./theme"
import GlobalStyles from "./components/GlobalStyles"
import Header from "./components/sections/Header"
import Hero from "./components/sections/Hero"
import Work from "./components/sections/Work"
import Skills from "./components/sections/Skills"
import Contact from "./components/sections/Contact"

export default function App() {
  return (
    <div
      style={{
        background: theme.bg,
        color: theme.ink,
        minHeight: "100vh",
        fontFamily: "'Archivo', system-ui, sans-serif",
      }}
    >
      <GlobalStyles />
      <Header />
      <Hero />
      <Work />
      <Skills />
      <Contact />
    </div>
  )
}
