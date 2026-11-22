import { ArrowUpRight, Lock } from 'lucide-react'
import type { Project, ProjectStatus } from '../../data/portfolio'
import { useSpotlight } from '../../hooks/useSpotlight'
import { GithubIcon } from './BrandIcons'

const statusConfig: Record<ProjectStatus, { label: string; className: string; dot: string }> = {
  professional: {
    label: 'Professional work',
    className: 'border-accent/30 bg-accent/10 text-accent-fg',
    dot: 'bg-accent-fg',
  },
  completed: {
    label: 'Completed',
    className: 'border-emerald-400/30 bg-emerald-400/10 text-emerald-300',
    dot: 'bg-emerald-400',
  },
  'in-development': {
    label: 'In development',
    className: 'border-learn/30 bg-learn/10 text-learn-fg',
    dot: 'bg-learn',
  },
  planned: {
    label: 'Planned',
    className: 'border-line-strong bg-white/[0.03] text-fg-muted',
    dot: 'bg-fg-subtle',
  },
}

interface ProjectCardProps {
  project: Project
  /** Featured cards use a wider two-column layout on large screens */
  featured?: boolean
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const status = statusConfig[project.status]
  const isPlanned = project.status === 'planned' || project.status === 'in-development'
  const onPointerMove = useSpotlight<HTMLElement>()

  const statusPill = (
    <span className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium ${status.className}`}>
      <span aria-hidden="true" className={`size-1.5 rounded-full ${status.dot}`} />
      {status.label}
    </span>
  )

  const techList = (
    <div>
      <p className="meta mb-3">{isPlanned ? 'Planned stack' : 'Stack'}</p>
      <ul className="flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <li key={t} className="tag">
            {t}
          </li>
        ))}
      </ul>
    </div>
  )

  const links = (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
      {project.repoUrl && (
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center gap-1.5 font-medium text-fg-muted transition-colors hover:text-fg"
        >
          <GithubIcon className="size-4" />
          Source
          <span className="sr-only"> code for {project.title} (opens in new tab)</span>
        </a>
      )}
      {project.demoUrl && (
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group/link inline-flex min-h-11 items-center gap-1 font-medium text-accent-fg transition-colors hover:text-fg"
        >
          Live demo
          <ArrowUpRight aria-hidden="true" className="size-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          <span className="sr-only"> of {project.title} (opens in new tab)</span>
        </a>
      )}
      {!project.repoUrl && !project.demoUrl && (
        <span className="inline-flex items-center gap-1.5 text-xs text-fg-subtle">
          {project.status === 'professional' && <Lock aria-hidden="true" className="size-3.5" />}
          {project.status === 'professional' ? 'Client work — no public repository' : 'Repository coming soon'}
        </span>
      )}
    </div>
  )

  if (featured) {
    return (
      <article
        onPointerMove={onPointerMove}
        className="card card-interactive spotlight grid h-full gap-8 p-6 sm:p-8 lg:grid-cols-[1.4fr_1fr] lg:gap-12 lg:p-10"
      >
        <div className="flex flex-col">
          <div className="mb-5 flex flex-wrap items-center gap-3">
            {statusPill}
            <span className="meta">{project.category}</span>
          </div>
          <h3 className="text-2xl font-semibold tracking-[-0.02em] sm:text-[1.75rem]">{project.title}</h3>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-fg-muted">{project.description}</p>
          <div className="mt-auto pt-6">{links}</div>
        </div>
        <div className="flex flex-col gap-8 border-t border-line pt-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-12">
          {project.flow && project.flow.length > 0 && (
            <div>
              <p className="meta mb-3">Flow</p>
              <ol className="relative space-y-3 before:absolute before:top-2 before:bottom-2 before:left-[5px] before:w-px before:bg-line-strong">
                {project.flow.map((step, i) => (
                  <li key={step} className="relative flex items-center gap-3 text-sm text-fg">
                    <span
                      aria-hidden="true"
                      className={`relative size-[11px] shrink-0 rounded-full border-2 border-surface ${
                        i === project.flow!.length - 1 ? 'bg-emerald-400' : 'bg-accent-fg'
                      }`}
                    />
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          )}
          <div className="mt-auto">{techList}</div>
        </div>
      </article>
    )
  }

  return (
    <article onPointerMove={onPointerMove} className="card card-interactive spotlight flex h-full flex-col p-6 sm:p-8">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <span className="meta">{project.category}</span>
        {statusPill}
      </div>
      <h3 className="text-xl font-semibold tracking-[-0.015em]">{project.title}</h3>
      <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-fg-muted">{project.description}</p>
      <div className="mt-8">{techList}</div>
      <div className="mt-6 border-t border-line pt-2">{links}</div>
    </article>
  )
}
