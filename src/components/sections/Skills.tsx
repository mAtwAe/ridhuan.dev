import { Compass, Database, Server, Cloud, Wrench, type LucideIcon } from 'lucide-react'
import { skillCategories } from '../../data/portfolio'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'
import { SkillBadge } from '../ui/SkillBadge'

const icons: Record<string, LucideIcon> = {
  backend: Server,
  databases: Database,
  devops: Cloud,
  tools: Wrench,
  exploring: Compass,
}

// Bento layout: spans for each card position on large screens
const spans = ['lg:col-span-4', 'lg:col-span-2', 'lg:col-span-3', 'lg:col-span-3', 'lg:col-span-6']

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="relative py-24 sm:py-32">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-line-strong to-transparent" />
      <div className="container-page">
        <SectionHeading
          id="skills"
          eyebrow="02 — Skills"
          title="Tech Stack"
          description="The tools I use to build and run backend systems — and what I'm learning next."
        />

        <Reveal className="mb-6 flex flex-wrap items-center gap-5 text-xs text-slate-400">
          <span className="flex items-center gap-2">
            <span aria-hidden="true" className="size-2 rounded-full bg-accent-soft" /> Used professionally
          </span>
          <span className="flex items-center gap-2">
            <span aria-hidden="true" className="size-2 rounded-full border border-dashed border-amber-400 bg-amber-400/40" /> Currently learning
          </span>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {skillCategories.map((cat, i) => {
            const Icon = icons[cat.id] ?? Server
            const exploring = cat.level === 'exploring'
            return (
              <Reveal
                key={cat.id}
                delay={i * 60}
                className={`card card-hover p-6 ${spans[i] ?? 'lg:col-span-3'} ${
                  exploring ? 'border-dashed border-amber-400/20 bg-amber-400/[0.02] sm:col-span-2' : ''
                }`}
              >
                <div className="mb-5 flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span
                      className={`inline-flex size-9 items-center justify-center rounded-lg border ${
                        exploring ? 'border-amber-400/25 bg-amber-400/10 text-amber-300' : 'border-line bg-accent/10 text-accent-soft'
                      }`}
                    >
                      <Icon aria-hidden="true" className="size-[18px]" />
                    </span>
                    <div>
                      <h3 className="font-medium text-white">{cat.title}</h3>
                      <p className="text-xs text-slate-500">{cat.description}</p>
                    </div>
                  </div>
                  {exploring && (
                    <span className="shrink-0 rounded-full border border-amber-400/30 px-2 py-0.5 text-[0.68rem] font-medium text-amber-200">
                      Learning
                    </span>
                  )}
                </div>
                <ul className="flex flex-wrap gap-2" aria-label={`${cat.title} skills`}>
                  {cat.skills.map((s) => (
                    <SkillBadge key={s} name={s} level={cat.level} />
                  ))}
                </ul>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
