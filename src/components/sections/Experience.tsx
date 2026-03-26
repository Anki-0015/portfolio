import { motion } from 'framer-motion'
import { experience } from '../../data/portfolio'
import { SectionTitle } from '../ui/SectionTitle'

export const Experience = () => {
  return (
    <section id="experience" className="section-pad card-section">
      <SectionTitle eyebrow="Work" title="Experience" />

      <div className="timeline">
        {experience.map((item) => (
          <motion.article
            key={item.role}
            className="card timeline-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
          >
            <p className="period">{item.period}</p>
            <h3>
              {item.role} <span>@ {item.company}</span>
            </h3>
            <ul>
              {item.highlights.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
