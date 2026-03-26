import { motion } from 'framer-motion'
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi2'

type HeaderProps = {
  theme: 'dark' | 'light'
  onToggleTheme: () => void
  activeSection: 'projects' | 'focus' | 'contact'
}

const navItems = [
  { id: 'projects', label: 'Work' },
  { id: 'focus',    label: 'Focus' },
  { id: 'contact',  label: 'Contact' },
]

export const Header = ({ theme, onToggleTheme, activeSection }: HeaderProps) => {
  return (
    <motion.header
      className="site-header"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
    >
      <a href="#top" className="brand" aria-label="Back to top">
        AB.
      </a>

      <p className="availability" aria-label="Current availability">
        Open to internships
      </p>

      <nav aria-label="Main navigation">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={activeSection === item.id ? 'active' : ''}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <motion.button
        type="button"
        className="theme-toggle"
        onClick={onToggleTheme}
        aria-label="Toggle dark mode"
        whileHover={{ rotate: 15, scale: 1.12 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      >
        {theme === 'dark' ? <HiOutlineSun /> : <HiOutlineMoon />}
      </motion.button>
    </motion.header>
  )
}
