import { ArrowUpRight, Briefcase, Lock } from 'lucide-react'
import type { Project, ProjectStatus } from '../../data/portfolio'
import { GithubIcon } from './BrandIcons'

const statusConfig: Record<ProjectStatus, { label: string; className: string; dot: string }> = {
  professional: {
    label: 'Professional work',
    className: 'border-accent/30 bg-accent/10 text-accent-soft',
    dot: 'bg-accent-soft',
  },
  completed: {
    label: 'Completed',
    className: 'border-emerald-400/30 bg-emerald-400/10 text-emerald-300',
    dot: 'bg-emerald-400',
  },
  'in-development': {
    label: 'In development',
    className: 'border-amber-400/30 bg-amber-400/10 text-amber-200',
    dot: 'bg-amber-400',
  },
  planned: {
    label: 'Planned',
    className: 'border-slate-500/40 bg-slate-500/10 text-slate-300',
    dot: 'bg-slate-400',
  },
}

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const status = statusConfig[project.status]
  const hasLinks = Boolean(project.repoUrl || project.demoUrl)

  return (
    <article className="card card-hover group relative flex h-full flex-col overflow-hidden p-6 sm:p-7">
      {/* Accent line that lights up on hover */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/0 to-transparent transition-all duration-500 group-hover:via-accent/70"
      />

      <div className="mb-6 flex items-start justify-between gap-4">
        <span className="font-mono text-xs text-slate-500">{String(index + 1).padStart(2, '0')}</span>
        <span
          className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium ${status.className}`}
        >
          <span aria-hidden="true" className={`size-1.5 rounded-full ${status.dot}`} />
          {status.label}
        </span>
      </div>

      <h3 className="text-xl font-semibold tracking-tight text-white">{project.title}</h3>
      <p className="mt-1.5 flex items-center gap-1.5 text-xs text-slate-500">
        {project.status === 'professional' ? (
          <Briefcase aria-hidden="true" className="size-3.5" />
        ) : null}
        {project.category}
      </p>

      <p className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-slate-400">{project.description}</p>

      <div className="mt-6">
        <p className="sr-only">
          {project.status === 'planned' || project.status === 'in-development' ? 'Planned technologies' : 'Technologies'}
        </p>
        <ul className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <li key={t} className="tag">
              {t}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-line pt-5 text-sm">
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-medium text-slate-300 transition-colors hover:text-white"
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
            className="inline-flex items-center gap-1 font-medium text-accent-soft transition-colors hover:text-white"
          >
            Live demo
            <ArrowUpRight aria-hidden="true" className="size-4" />
            <span className="sr-only"> of {project.title} (opens in new tab)</span>
          </a>
        )}
        {!hasLinks && (
          <span className="inline-flex items-center gap-1.5 text-xs text-slate-500">
            {project.status === 'professional' ? (
              <>
                <Lock aria-hidden="true" className="size-3.5" />
                Client work — no public repository
              </>
            ) : (
              'Repository coming soon'
            )}
          </span>
        )}
      </div>
    </article>
  )
}
