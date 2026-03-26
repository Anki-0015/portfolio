import { motion } from 'framer-motion'
import { skillGroups } from '../../data/portfolio'
import { SectionTitle } from '../ui/SectionTitle'

export const Skills = () => {
  return (
    <section id="skills" className="section-pad card-section">
      <SectionTitle eyebrow="Toolkit" title="Technologies I Use" />

      <div className="skills-grid">
        {skillGroups.map((group, index) => (
          <motion.article
            key={group.name}
            className="card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
          >
            <h3>{group.name}</h3>
            <div className="chip-wrap">
              {group.skills.map((skill) => (
                <span key={skill} className="chip">
                  {skill}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
