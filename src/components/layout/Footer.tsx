import { profile } from '../../data/portfolio'

export const Footer = () => {
  return (
    <footer className="site-footer">
      <p>Ankit Bansal · Built with React and TypeScript</p>
      <p>
        <a href={profile.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        {' · '}
        <a href={profile.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        {' · '}
        <a href={`mailto:${profile.email}`}>Email</a>
      </p>
    </footer>
  )
}
