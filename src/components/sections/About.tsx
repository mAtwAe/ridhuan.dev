import { about, certifications } from '../../data/portfolio'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="section-y">
      <div className="container-page">
        <SectionHeading id="about" eyebrow="01 — About" title="About Me" />

        <div className="grid gap-12 lg:grid-cols-[1.35fr_1fr] lg:gap-20">
          <div className="space-y-6 text-base leading-[1.8] text-fg-muted sm:text-[1.0625rem]">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 60} as="p" className={i === 0 ? 'text-fg sm:text-lg sm:leading-[1.75]' : undefined}>
                {p}
              </Reveal>
            ))}
          </div>

          <Reveal delay={120} as="aside" aria-label="Focus areas and certifications" className="space-y-10">
            <div>
              <h3 className="meta mb-2">Focus areas</h3>
              <dl className="divide-y divide-line border-y border-line">
                {about.focusAreas.map((area, i) => (
                  <div key={area.title} className="grid grid-cols-[2rem_1fr] gap-x-2 py-4">
                    <span aria-hidden="true" className="pt-0.5 font-mono text-xs text-accent-fg">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <dt className="font-medium text-fg">{area.title}</dt>
                    <dd className="col-start-2 mt-1 text-sm leading-relaxed text-fg-muted">{area.text}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {certifications.length > 0 && (
              <div>
                <h3 className="meta mb-2">Certifications</h3>
                <ul className="divide-y divide-line border-y border-line">
                  {certifications.map((c) => (
                    <li key={c.name} className="flex items-baseline justify-between gap-4 py-3 text-sm">
                      <span className="text-fg">{c.name}</span>
                      <span className="meta shrink-0">{c.year}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
