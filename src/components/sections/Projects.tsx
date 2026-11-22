import { projects } from '../../data/portfolio'
import { ProjectCard } from '../ui/ProjectCard'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="section-y border-t border-line/60">
      <div className="container-page">
        <SectionHeading
          id="projects"
          eyebrow="03 — Projects"
          title="Featured Projects"
          description="Professional work shared as an anonymized case study, alongside personal projects I'm building in the open."
        />

        <ul className="grid gap-4 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal as="li" key={project.title} delay={i * 70} className={`h-full ${project.featured ? 'md:col-span-2' : ''}`}>
              <ProjectCard project={project} featured={project.featured} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
