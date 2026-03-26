import { motion } from 'framer-motion'
import { achievements } from '../../data/portfolio'
import { SectionTitle } from '../ui/SectionTitle'

export const Achievements = () => {
  return (
    <section className="section-pad card-section">
      <SectionTitle eyebrow="Proof" title="Certifications & Achievements" />
      <motion.article
        className="card"
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55 }}
      >
        <ul>
          {achievements.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </motion.article>
    </section>
  )
}
