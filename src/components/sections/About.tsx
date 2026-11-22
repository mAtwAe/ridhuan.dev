import { Award, Boxes, Database, Server, ShieldCheck } from 'lucide-react'
import { about, certifications } from '../../data/portfolio'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

const focusIcons = [Server, Database, ShieldCheck, Boxes]

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading id="about" eyebrow="01 — About" title="About Me" />

        <div className="grid gap-12 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
          <div className="space-y-5 text-base leading-relaxed text-slate-400 sm:text-[1.05rem]">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 60} as="p">
                {p}
              </Reveal>
            ))}

            {certifications.length > 0 && (
              <Reveal delay={200} className="pt-4">
                <h3 className="mb-3 flex items-center gap-2 text-sm font-medium text-slate-200">
                  <Award aria-hidden="true" className="size-4 text-accent-soft" />
                  Certifications
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {certifications.map((c) => (
                    <li key={c.name} className="rounded-lg border border-line bg-white/[0.02] px-3 py-1.5 text-sm text-slate-300">
                      {c.name} <span className="text-slate-500">· {c.year}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}
          </div>

          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {about.focusAreas.map((area, i) => {
              const Icon = focusIcons[i % focusIcons.length]
              return (
                <Reveal as="li" key={area.title} delay={i * 70} className="card card-hover p-5">
                  <span className="mb-4 inline-flex size-9 items-center justify-center rounded-lg border border-line bg-accent/10 text-accent-soft">
                    <Icon aria-hidden="true" className="size-[18px]" />
                  </span>
                  <h3 className="font-medium text-white">{area.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{area.text}</p>
                </Reveal>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
