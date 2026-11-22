import { skillCategories } from '../../data/portfolio'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'
import { SkillBadge } from '../ui/SkillBadge'

// Bento spans for each card position on large screens (6-column grid)
const spans = ['lg:col-span-4', 'lg:col-span-2', 'lg:col-span-3', 'lg:col-span-3', 'lg:col-span-6']

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="section-y border-t border-line/60">
      <div className="container-page">
        <SectionHeading
          id="skills"
          eyebrow="02 — Skills"
          title="Tech Stack"
          description="The tools I use to build and run backend systems, and what I'm learning next."
        />

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
          {skillCategories.map((cat, i) => {
            const exploring = cat.level === 'exploring'
            return (
              <Reveal
                key={cat.id}
                delay={i * 50}
                className={`card card-interactive flex flex-col p-6 sm:p-7 ${spans[i] ?? 'lg:col-span-3'} ${
                  exploring ? 'border-dashed border-learn/25 bg-learn/[0.02] hover:border-learn/40 hover:bg-learn/[0.035] sm:col-span-2' : ''
                }`}
              >
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-medium tracking-[-0.01em]">{cat.title}</h3>
                    <p className="mt-1 text-sm text-fg-subtle">{cat.description}</p>
                  </div>
                  {exploring ? (
                    <span className="shrink-0 rounded-full border border-dashed border-learn/40 px-2.5 py-0.5 font-mono text-[0.68rem] text-learn-fg">
                      Learning
                    </span>
                  ) : (
                    <span className="meta shrink-0" aria-hidden="true">
                      {String(cat.skills.length).padStart(2, '0')}
                    </span>
                  )}
                </div>
                <ul className="mt-auto flex flex-wrap gap-1.5" aria-label={`${cat.title}${exploring ? ' (currently learning)' : ''}`}>
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
