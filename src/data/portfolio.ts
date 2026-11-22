/**
 * ─────────────────────────────────────────────────────────────
 *  PORTFOLIO CONTENT
 *  Edit this file to update everything shown on the site.
 *  Leave a URL as an empty string ('') to hide that link.
 * ─────────────────────────────────────────────────────────────
 */

// ─── Types ───────────────────────────────────────────────────

export interface SocialLinks {
  github: string
  linkedin: string
  email: string
}

export interface Profile {
  name: string
  fullName: string
  title: string
  tagline: string
  location: string
  availability: string
  domain: string
  resumeUrl: string
  /** Filename used when the resume is downloaded */
  resumeFileName: string
  social: SocialLinks
}

export interface NavItem {
  label: string
  href: `#${string}`
}

export type SkillLevel = 'active' | 'exploring'

export interface SkillCategory {
  id: string
  title: string
  description: string
  level: SkillLevel
  skills: string[]
}

export type ProjectStatus = 'professional' | 'in-development' | 'planned' | 'completed'

export interface Project {
  title: string
  description: string
  tech: string[]
  status: ProjectStatus
  /** Short context label, e.g. "Anonymized case study" */
  category: string
  /** Featured projects get a full-width card. Best used for one project. */
  featured?: boolean
  /** Optional processing steps, shown as a small flow on featured cards */
  flow?: string[]
  /** Optional — only rendered when set */
  repoUrl?: string
  /** Optional — only rendered when set */
  demoUrl?: string
}

export interface ExperienceItem {
  role: string
  company: string
  /** e.g. "Nov 2025 – Present" */
  period: string
  /** Optional context line, e.g. a client assignment */
  context?: string
  highlights: string[]
  tech: string[]
}

export interface Certification {
  name: string
  year: string
}

// ─── Profile & contact ───────────────────────────────────────

export const profile: Profile = {
  name: 'Ridhuan',
  fullName: 'Muhammad Ridhuan',
  title: 'Software Engineer | Backend & Cloud Engineering',
  tagline:
    "I build reliable backend systems, scalable APIs, and enterprise applications using Java, Spring Boot, and cloud-native technologies. I'm passionate about solving complex engineering problems and building software that delivers real-world value.",
  location: 'Kuala Lumpur, Malaysia',
  // Shown as a small badge in the hero. Set to '' to hide it.
  availability: 'Open to software engineering opportunities',
  domain: 'ridhuan.dev',
  resumeUrl: '/resume.pdf',
  resumeFileName: 'Muhammad-Ridhuan-Resume.pdf',
  social: {
    github: 'https://github.com/mAtwAe',
    // TODO: add your LinkedIn URL, e.g. 'https://www.linkedin.com/in/your-handle'
    linkedin: '',
    email: 'mohdridhuan95@gmail.com',
  },
}

export const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

// ─── About ───────────────────────────────────────────────────

export const about = {
  paragraphs: [
    "I'm a software engineer focused on backend development. Most of my work sits behind the scenes of enterprise and financial systems — Java and Spring Boot services, REST APIs, and batch-processing workflows that move, validate, and persist data reliably.",
    "I've spent a lot of time where software meets its data: integrating with SQL Server, Oracle, and PostgreSQL, tuning queries, and supporting database migrations. I'm also comfortable on the operational side — investigating production issues through logs and monitoring, tracing defects across APIs, configuration, and deployments, and verifying fixes through to release.",
    "Day to day I ship through Git-based workflows and Jenkins CI/CD onto Docker, Kubernetes, and OpenShift. Right now I'm deepening my skills in Go, cloud architecture, and distributed systems.",
  ],
  focusAreas: [
    { title: 'Backend services', text: 'Java & Spring Boot REST APIs for enterprise and financial workflows.' },
    { title: 'Data & batch processing', text: 'Spring Batch pipelines, file/SFTP integration and relational persistence.' },
    { title: 'Production reliability', text: 'Error handling, retry/recovery and troubleshooting with logs and monitoring.' },
    { title: 'Cloud-native delivery', text: 'CI/CD with Jenkins, containers on Kubernetes and OpenShift.' },
  ],
}

export const certifications: Certification[] = [
  { name: 'Certified Kubernetes Administrator (CKA)', year: '2025' },
  { name: 'Microsoft Azure AI Fundamentals', year: '2025' },
  { name: 'PCEP – Certified Entry-Level Python Programmer', year: '2024' },
]

// ─── Skills ──────────────────────────────────────────────────

export const skillCategories: SkillCategory[] = [
  {
    id: 'backend',
    title: 'Backend Development',
    description: 'Services, APIs and batch workflows',
    level: 'active',
    skills: ['Java', 'Spring Boot', 'Spring Batch', 'REST APIs', 'Hibernate / JPA'],
  },
  {
    id: 'databases',
    title: 'Databases',
    description: 'Relational data and query tuning',
    level: 'active',
    skills: ['Microsoft SQL Server', 'PostgreSQL', 'Oracle Database'],
  },
  {
    id: 'devops',
    title: 'DevOps & Cloud',
    description: 'Build, ship and run',
    level: 'active',
    skills: ['Docker', 'Kubernetes', 'OpenShift', 'Jenkins', 'Git', 'CI/CD'],
  },
  {
    id: 'tools',
    title: 'Tools & Engineering',
    description: 'Everyday engineering toolkit',
    level: 'active',
    skills: ['GitHub', 'Postman', 'Gradle', 'Maven', 'Linux'],
  },
  {
    id: 'exploring',
    title: 'Currently Exploring',
    description: 'What I am learning next',
    level: 'exploring',
    skills: ['Golang', 'Distributed Systems', 'Cloud Architecture', 'Kafka'],
  },
]

// ─── Projects ────────────────────────────────────────────────

export const projects: Project[] = [
  {
    title: 'Enterprise Batch Processing System',
    description:
      'Designed and developed a backend batch-processing workflow for transferring, validating, and storing image data between SFTP storage and a relational database, with error handling, retry processing, and operational logging.',
    tech: ['Java', 'Spring Boot', 'Spring Batch', 'SQL Server', 'SFTP'],
    status: 'professional',
    category: 'Anonymized case study',
    featured: true,
    flow: ['Retrieve from SFTP', 'Validate input', 'Persist to database', 'Retry & log failures'],
  },
  {
    title: 'Personal Finance & Expense Tracker',
    description:
      'A personal finance application concept for recording expenses, categorizing transactions, and analyzing spending patterns.',
    tech: ['Golang', 'PostgreSQL', 'REST API', 'React'],
    status: 'in-development',
    category: 'Personal project',
    // repoUrl: 'https://github.com/mAtwAe/your-repo',
    // demoUrl: 'https://your-demo.example.com',
  },
  {
    title: 'Golang Backend API',
    description:
      'A portfolio project exploring API design, authentication, database integration, and maintainable backend architecture using Go.',
    tech: ['Golang', 'PostgreSQL', 'Docker', 'REST API'],
    status: 'planned',
    category: 'Personal project',
  },
]

// ─── Experience ──────────────────────────────────────────────

export const experience: ExperienceItem[] = [
  {
    role: 'Backend Developer',
    company: 'The eCEOs Sdn. Bhd.',
    period: 'Nov 2025 – Present',
    context: 'Client assignment — Employees Provident Fund (EPF / KWSP), Malaysia',
    highlights: [
      'Develop and maintain Java / Spring Boot REST services for eKYC, withdrawal-related and financial workflows, integrating Hibernate/JPA and relational databases.',
      'Build metadata-driven Spring Batch workflows that retrieve files and images from SFTP, validate inputs and persist binary data in SQL Server with post-processing cleanup.',
      'Contribute error handling, failed-record tracking and retry/recovery approaches to improve processing reliability and supportability.',
      'Investigate production API, database, configuration, SFTP and deployment defects using application logs and Dynatrace; verify fixes and support releases.',
    ],
    tech: ['Java', 'Spring Boot', 'Spring Batch', 'SQL Server', 'Gerrit', 'Jenkins', 'SonarQube', 'OpenShift'],
  },
  {
    role: 'Senior System Engineer',
    company: 'Fujitsu Systems Global Solutions Sdn. Bhd.',
    period: 'Jan 2023 – Nov 2025',
    highlights: [
      'Developed and enhanced Spring Boot enterprise services and integrations, including e-invoicing workflows; investigated defects and delivered application fixes.',
      'Supported an Oracle 12c to 19c migration with data checks, SQL optimization, compatibility testing and deployment validation.',
      'Contributed to an enterprise application migration from Windows Server 2012 to 2019, including IIS load-balancing configuration and troubleshooting.',
      'Automated recurring operational activities with Python and scripting to reduce manual effort.',
    ],
    tech: ['Spring Boot', 'Oracle', 'SQL', 'Windows Server', 'IIS', 'Python'],
  },
  {
    role: 'Application Engineer',
    company: 'Hitachi eBworx Sdn. Bhd.',
    period: 'Jan 2019 – Dec 2022',
    highlights: [
      'Maintained and enhanced enterprise credit-management applications, resolving defects and supporting production releases.',
      'Built internal utilities with Python, AngularJS and SQL to improve engineering and business workflows.',
      'Performed SQL query optimization and JMeter performance testing; supported Jenkins CI/CD and deployment validation.',
      'Worked with technical and business teams to verify fixes and investigate issues, and mentored junior engineers.',
    ],
    tech: ['Java', 'SQL', 'AngularJS', 'Python', 'JMeter', 'Jenkins'],
  },
  {
    role: 'Software Programmer',
    company: 'Vanli Auto Spares Sdn. Bhd.',
    period: 'Apr 2018 – Oct 2018',
    highlights: [
      'Developed C# / .NET reporting and backend features integrated with Microsoft SQL Server, including SQL query improvements and application troubleshooting.',
    ],
    tech: ['C#', '.NET', 'SQL Server'],
  },
]
