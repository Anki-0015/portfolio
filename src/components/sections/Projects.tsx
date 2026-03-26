import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiArrowTopRightOnSquare } from 'react-icons/hi2'
import { projects } from '../../data/portfolio'
import { SectionTitle } from '../ui/SectionTitle'

const easingCurve: [number, number, number, number] = [0.215, 0.61, 0.355, 1]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const cardVariants = {
  hidden:  { opacity: 0, y: 28, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: easingCurve } },
}

export const Projects = () => {
  const [showAll, setShowAll] = useState(false)
  const visibleProjects = showAll ? projects : projects.filter((p) => p.featured)

  return (
    <section id="projects" className="section-pad card-section">
      <SectionTitle eyebrow="Selected Work" title="Projects That Matter" />

      <div className="project-toolbar">
        <p className="result-count">
          Showing {visibleProjects.length} project{visibleProjects.length === 1 ? '' : 's'}
        </p>
        <button type="button" className="minimal-link" onClick={() => setShowAll((s) => !s)}>
          {showAll ? 'Show featured only' : 'Show all projects'}
        </button>
      </div>

      <AnimatePresence mode="sync">
        <motion.div
          key={showAll ? 'all' : 'featured'}
          className="project-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {visibleProjects.map((project, index) => (
            <motion.article
              key={project.title}
              className="card project-card"
              variants={cardVariants}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <p className="project-index">{String(index + 1).padStart(2, '0')}</p>
              <div className="project-top">
                <h3>{project.title}</h3>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${project.title} repository`}
                >
                  <HiArrowTopRightOnSquare />
                </a>
              </div>

              <div className="chip-wrap">
                {project.stack.map((item) => (
                  <span className="chip" key={item}>{item}</span>
                ))}
              </div>

              <ul>
                {project.summary.slice(0, 2).map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  )
}
