import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import { Contact } from './components/sections/Contact'
import { Focus } from './components/sections/Focus'
import { Hero } from './components/sections/Hero'
import { Projects } from './components/sections/Projects'
import { MorphCursor } from './components/ui/MorphCursor'
import { useActiveSection } from './hooks/useActiveSection'
import { useTheme } from './hooks/useTheme'

function App() {
  const { theme, toggleTheme } = useTheme()
  const activeSection = useActiveSection()

  return (
    <>
      <MorphCursor />
      <Header
        theme={theme}
        onToggleTheme={toggleTheme}
        activeSection={activeSection}
      />
      <main>
        <Hero />
        <Projects />
        <Focus />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
