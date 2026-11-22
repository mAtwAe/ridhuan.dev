import { experience } from '../../data/portfolio'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="relative py-24 sm:py-32">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-line-strong to-transparent" />
      <div className="container-page">
        <SectionHeading
          id="experience"
          eyebrow="04 — Experience"
          title="Experience"
          description="Backend development, enterprise APIs, database integration, batch processing, CI/CD and production support across financial services and enterprise platforms."
        />

        <ol className="relative space-y-6 border-l border-line pl-6 sm:pl-10">
          {experience.map((job, i) => (
            <Reveal as="li" key={`${job.company}-${job.period}`} delay={i * 60} className="relative">
              {/* Timeline node */}
              <span
                aria-hidden="true"
                className={`absolute top-7 -left-[29px] size-2.5 rounded-full ring-4 ring-ink-900 sm:-left-[45px] ${
                  i === 0 ? 'bg-accent-soft' : 'bg-slate-600'
                }`}
              />

              <article className="card card-hover p-6 sm:p-7">
                <header className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{job.role}</h3>
                    <p className="text-[0.95rem] text-slate-300">{job.company}</p>
                  </div>
                  <p className="shrink-0 font-mono text-xs text-slate-500 sm:pt-1.5">{job.period}</p>
                </header>

                {job.context && <p className="mt-2 text-sm text-accent-soft/90">{job.context}</p>}

                <ul className="mt-5 space-y-2.5">
                  {job.highlights.map((h) => (
                    <li key={h} className="flex gap-3 text-[0.95rem] leading-relaxed text-slate-400">
                      <span aria-hidden="true" className="mt-[0.6rem] size-1 shrink-0 rounded-full bg-slate-500" />
                      {h}
                    </li>
                  ))}
                </ul>

                {job.tech.length > 0 && (
                  <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Technologies used">
                    {job.tech.map((t) => (
                      <li key={t} className="tag">
                        {t}
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
