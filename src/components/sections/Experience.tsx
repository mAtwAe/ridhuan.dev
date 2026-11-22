import { experience } from '../../data/portfolio'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="section-y border-t border-line/60">
      <div className="container-page">
        <SectionHeading
          id="experience"
          eyebrow="04 — Experience"
          title="Experience"
          description="Backend development, enterprise APIs, database integration, batch processing, CI/CD and production support."
        />

        <ol>
          {experience.map((job, i) => {
            const current = /present/i.test(job.period)
            return (
              <Reveal
                as="li"
                key={`${job.company}-${job.period}`}
                delay={i * 50}
                className="grid gap-4 border-t border-line py-10 md:grid-cols-[13rem_1fr] md:gap-12 sm:py-12"
              >
                {/* Meta column */}
                <div className="flex flex-wrap items-center gap-3 md:flex-col md:items-start md:gap-2">
                  <p className="font-mono text-[0.8125rem] text-fg-muted">{job.period}</p>
                  {current && (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-2 py-0.5 text-[0.7rem] font-medium text-accent-fg">
                      <span aria-hidden="true" className="size-1.5 rounded-full bg-accent-fg" />
                      Current
                    </span>
                  )}
                </div>

                {/* Content column */}
                <article>
                  <h3 className="text-lg font-semibold tracking-[-0.015em] sm:text-xl">
                    {job.role}
                    <span className="font-normal text-fg-muted">
                      <span aria-hidden="true"> · </span>
                      <span className="sr-only"> at </span>
                      {job.company}
                    </span>
                  </h3>

                  {job.context && <p className="mt-1.5 text-sm text-fg-subtle">{job.context}</p>}

                  <ul className="mt-5 space-y-3">
                    {job.highlights.map((h) => (
                      <li key={h} className="relative pl-5 text-[0.95rem] leading-relaxed text-fg-muted">
                        <span aria-hidden="true" className="absolute top-[0.7rem] left-0 h-px w-2.5 bg-fg-subtle/70" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  {job.tech.length > 0 && (
                    <ul className="mt-6 flex flex-wrap gap-1.5" aria-label="Technologies used">
                      {job.tech.map((t) => (
                        <li key={t} className="tag">
                          {t}
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              </Reveal>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
