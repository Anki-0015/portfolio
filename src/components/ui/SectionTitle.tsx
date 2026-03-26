type SectionTitleProps = {
  eyebrow: string
  title: string
}

export const SectionTitle = ({ eyebrow, title }: SectionTitleProps) => {
  return (
    <header className="section-title">
      <p>{eyebrow}</p>
      <h2>{title}</h2>
    </header>
  )
}
