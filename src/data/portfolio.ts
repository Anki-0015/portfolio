export type ExperienceItem = {
  role: string
  company: string
  period: string
  highlights: string[]
}

export type ProjectItem = {
  title: string
  stack: string[]
  summary: string[]
  github: string
  category: 'backend' | 'mobile' | 'java' | 'devtools'
  featured: boolean
}

export const profile = {
  name: 'Ankit Bansal',
  title: 'Full-Stack & iOS Developer',
  subtitle:
    'I build reliable backend systems and clean user-facing products with a strong engineering foundation.',
  phone: '+91-8968877852',
  email: 'bansalankit1575@gmail.com',
  linkedin: 'https://www.linkedin.com/in/ankit-bansal-50828a199/',
  github: 'https://github.com/Anki-0015',
  resumePath: '/Ankit-Bansal-Resume.tex',
}

export const education = {
  institution: 'Chitkara University, Punjab',
  degree: 'Bachelor of Engineering in Computer Science',
  period: 'Aug 2023 - Jul 2027',
  cgpa: '7.8',
}

export const experience: ExperienceItem[] = [
  {
    role: 'iOS Application Development Intern',
    company: 'Infosys',
    period: 'Dec 2025 - Jan 2026',
    highlights: [
      'Built SwiftUI MVVM apps for multiple user roles and 3+ workflows using reusable components.',
      'Integrated Stripe payment flow with tokenization and robust error handling for 100+ staged transactions.',
      'Led Agile ceremonies as Scrum Master for a 10-member team, improving sprint on-time delivery by about 20%.',
      'Refactored feature modules to separate business logic from UI, improving maintainability and delivery speed.',
    ],
  },
]

export const skillGroups = [
  {
    name: 'Languages',
    skills: ['Java', 'JavaScript'],
  },
  {
    name: 'Frontend / Mobile',
    skills: ['React.js', 'SwiftUI'],
  },
  {
    name: 'Backend',
    skills: ['Node.js', 'Express.js', 'Spring Boot', 'REST APIs', 'JWT', 'BCrypt'],
  },
  {
    name: 'Databases',
    skills: ['MySQL', 'MongoDB'],
  },
  {
    name: 'Tools',
    skills: ['Git', 'GitHub', 'Postman', 'Linux CLI'],
  },
  {
    name: 'Core CS',
    skills: ['Data Structures & Algorithms', 'OOP', 'DBMS', 'Operating Systems'],
  },
]

export const projects: ProjectItem[] = [
  {
    title: 'Banking Management System',
    github: 'https://github.com/Anki-0015/bankingManagementSysteme',
    category: 'backend',
    featured: true,
    stack: ['Java', 'Spring Boot', 'JWT', 'MySQL'],
    summary: [
      'Engineered full-stack banking workflows with JWT authentication and role-based access control.',
      'Implemented transfers, withdrawals, and transaction history with ACID-safe MySQL transactions and rollback paths.',
      'Built admin controls and OTP-based password reset with email verification.',
    ],
  },
  {
    title: 'Job Portal',
    github: 'https://github.com/Anki-0015/JobPortal',
    category: 'backend',
    featured: true,
    stack: ['Node.js', 'Express', 'MongoDB', 'BCrypt'],
    summary: [
      'Built a role-based REST API backend for employer and candidate workflows.',
      'Improved query/index strategy to reduce average API response time by 30%.',
      'Secured sessions using BCrypt, cookie controls, and CSRF protections.',
    ],
  },
  {
    title: 'Concert Management System',
    github: 'https://github.com/Anki-0015/Concert-Management',
    category: 'java',
    featured: false,
    stack: ['Java', 'OOP', 'Data Structures'],
    summary: [
      'Developed a Java CLI solution using BST, Stack, Queue, and HashMap for scheduling and ticket workflows.',
      'Applied encapsulation, inheritance, and polymorphism for clean domain modeling.',
    ],
  },
  {
    title: 'BrewDev - Dev Environment Automation Tool',
    github: 'https://github.com/Anki-0015/brewdev',
    category: 'devtools',
    featured: false,
    stack: ['Linux', 'Bash', 'CLI'],
    summary: [
      'Created a Bash CLI setup tool for installs, dotfiles, and config automation.',
      'Reduced onboarding setup time by 40% through modular scripts and reliable error handling.',
    ],
  },
]

export const achievements = [
  'Solved 250+ DSA problems across LeetCode, GeeksforGeeks, and HackerRank in arrays, trees, graphs, dynamic programming, and sliding window patterns.',
  'Nutanix Hybrid Cloud Fundamentals (NHCF) certified, Jan 2026.',
]
