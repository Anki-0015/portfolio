import { motion } from 'framer-motion'
import { education, profile } from '../../data/portfolio'
import { SectionTitle } from '../ui/SectionTitle'

export const AboutEducation = () => {
  return (
    <section id="about" className="section-pad card-section">
      <SectionTitle eyebrow="Overview" title="A Bit About Me" />

      <motion.div
        className="grid-about"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <article className="card">
          <h3>What I Build</h3>
          <p>
            I build clean, production-ready apps with a backend-first mindset and practical
            product thinking. Most of my work sits at the intersection of secure APIs,
            maintainable architecture, and smooth user experiences.
          </p>
          <p>
            I enjoy taking ambiguous ideas, shaping them into reliable systems, and iterating
            quickly with strong ownership and execution discipline.
          </p>
        </article>

        <article className="card">
          <h3>Current Focus</h3>
          <p>
            Building full-stack projects with Java and Node.js, and refining mobile UX with
            SwiftUI. Currently open to internships where I can ship real product value.
          </p>
          <p className="ed-title">{education.degree}</p>
          <p>
            {education.institution} · {education.period}
          </p>
          <p>CGPA {education.cgpa}</p>
          <p className="contact-points">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </p>
        </article>
      </motion.div>
    </section>
  )
}
