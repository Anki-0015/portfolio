import { useEffect, useState } from 'react'

const sectionIds = ['projects', 'focus', 'contact'] as const

type SectionId = (typeof sectionIds)[number]

export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState<SectionId>('projects')

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    sectionIds.forEach((id) => {
      const section = document.getElementById(id)
      if (!section) {
        return
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id)
            }
          })
        },
        {
          rootMargin: '-40% 0px -45% 0px',
          threshold: 0.15,
        },
      )

      observer.observe(section)
      observers.push(observer)
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [])

  return activeSection
}
