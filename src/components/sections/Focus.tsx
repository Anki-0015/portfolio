import { motion } from 'framer-motion'
import { achievements, education } from '../../data/portfolio'
import { SectionTitle } from '../ui/SectionTitle'

const easingCurve: [number, number, number, number] = [0.215, 0.61, 0.355, 1]

const nowBuilding = [
  'Secure backend APIs with role-based access',
  'SwiftUI experiences with production-grade workflows',
  'Automation-first tooling that saves team time',
]

const cardVariants = {
  hidden:  { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.12, ease: easingCurve },
  }),
}

export const Focus = () => {
  return (
    <section id="focus" className="section-pad card-section">
      <SectionTitle eyebrow="Focus" title="How I Work" />

      <div className="focus-grid">
        <motion.article
          className="card"
          custom={0}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          whileHover={{ y: -5 }}
          transition={{ type: 'spring', stiffness: 280, damping: 22 }}
        >
          <h3>Current Direction</h3>
          <ul>
            {nowBuilding.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </motion.article>

        <motion.article
          className="card"
          custom={1}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          whileHover={{ y: -5 }}
          transition={{ type: 'spring', stiffness: 280, damping: 22 }}
        >
          <h3>Proof</h3>
          <ul>
            <li>Solved 250+ DSA problems across major platforms.</li>
            <li>{achievements[1]}</li>
            <li>
              {education.degree}, {education.institution}
            </li>
          </ul>
        </motion.article>
      </div>
    </section>
  )
}
