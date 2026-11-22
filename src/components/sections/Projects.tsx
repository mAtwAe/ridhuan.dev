import { projects } from '../../data/portfolio'
import { ProjectCard } from '../ui/ProjectCard'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="relative py-24 sm:py-32">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-line-strong to-transparent" />
      <div className="container-page">
        <SectionHeading
          id="projects"
          eyebrow="03 — Projects"
          title="Featured Projects"
          description="A mix of professional work, shared as an anonymized case study, and personal projects I'm building in the open."
        />

        <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal as="li" key={project.title} delay={i * 80} className="h-full">
              <ProjectCard project={project} index={i} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
