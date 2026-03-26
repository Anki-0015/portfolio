import { motion } from 'framer-motion'
import { HiArrowDownRight, HiArrowTopRightOnSquare } from 'react-icons/hi2'
import { profile } from '../../data/portfolio'
import { Avatar3D } from '../ui/Avatar3D'

const impactStats = [
  { value: '40%', label: 'Faster Dev Setup' },
  { value: '30%', label: 'API Response Gain' },
  { value: '250+', label: 'DSA Problems Solved' },
]

export const Hero = () => {
  return (
    <section id="top" className="hero-section">
      {/* ── Background noise texture ── */}
      <div className="hero-noise" aria-hidden="true" />

      {/* ── Full-screen avatar stage ── */}
      <div className="hero-stage">
        {/* Big ghosted name behind the avatar */}
        <div className="hero-bg-name" aria-hidden="true">
          <span>Ankit</span>
          <span>Bansal</span>
        </div>

        {/* 3D Avatar centred */}
        <motion.div
          className="hero-avatar-stage"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.215, 0.61, 0.355, 1] }}
        >
          <Avatar3D />
        </motion.div>

        {/* Eyebrow label */}
        <motion.p
          className="hero-eyebrow"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Full-stack engineer in progress
        </motion.p>

        {/* Scroll hint */}
        <motion.div
          className="hero-scroll-hint"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <span className="scroll-arrow" />
        </motion.div>
      </div>

      {/* ── Info band at the bottom ── */}
      <motion.div
        className="hero-info"
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.55, ease: [0.215, 0.61, 0.355, 1] }}
      >
        {/* Name + title */}
        <div className="hero-info-identity">
          <h1>{profile.name}</h1>
          <p className="hero-title">{profile.title}</p>
          <p className="hero-subtitle">{profile.subtitle}</p>
        </div>

        {/* Stats row */}
        <div className="hero-stats-row">
          {impactStats.map((stat, i) => (
            <motion.article
              key={stat.label}
              className="stat-card"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
            >
              <p>{stat.value}</p>
              <span>{stat.label}</span>
            </motion.article>
          ))}
        </div>

        {/* CTA buttons */}
        <motion.div
          className="hero-actions"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.05 }}
        >
          <a href="#projects" className="btn btn-primary">
            View Work <HiArrowDownRight />
          </a>
          <a href="#contact" className="btn btn-ghost">
            Start a Project
          </a>
          <a href={profile.resumePath} className="btn btn-secondary" download>
            Download Resume <HiArrowTopRightOnSquare />
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
