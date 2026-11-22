import type { ReactNode } from 'react'
import { ArrowUpRight, Download, Mail } from 'lucide-react'
import { profile } from '../../data/portfolio'
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons'
import { Reveal } from '../ui/Reveal'

export function Contact() {
  const { email, github, linkedin } = profile.social

  const channels = [
    github && { href: github, label: 'GitHub', value: github.replace(/^https?:\/\/(www\.)?/, ''), icon: <GithubIcon className="size-4" />, external: true },
    linkedin && { href: linkedin, label: 'LinkedIn', value: 'LinkedIn profile', icon: <LinkedinIcon className="size-4" />, external: true },
    email && { href: `mailto:${email}`, label: 'Email', value: email, icon: <Mail aria-hidden="true" className="size-4" />, external: false },
  ].filter(Boolean) as { href: string; label: string; value: string; icon: ReactNode; external: boolean }[]

  return (
    <section id="contact" aria-labelledby="contact-title" className="section-y border-t border-line/60">
      <div className="container-page">
        <Reveal className="card relative overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[720px] max-w-[160%] -translate-x-1/2 bg-[radial-gradient(closest-side,rgb(59_130_246/0.18),transparent)]"
          />

          <div className="relative grid gap-12 px-6 py-12 sm:px-12 sm:py-16 lg:grid-cols-[1.2fr_1fr] lg:items-end lg:gap-16">
            <div>
              <p className="eyebrow mb-4">05 — Contact</p>
              <h2 id="contact-title" className="text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
                Let&apos;s Connect
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-fg-muted sm:text-[1.0625rem]">
                I&apos;m open to connecting with engineering teams, discussing backend development opportunities, and
                collaborating on interesting technical projects.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                {email && (
                  <a href={`mailto:${email}`} className="btn-primary">
                    <Mail aria-hidden="true" className="size-4" />
                    Email Me
                  </a>
                )}
                <a href={profile.resumeUrl} download={profile.resumeFileName} className="btn-secondary">
                  <Download aria-hidden="true" className="size-4" />
                  Download Resume
                </a>
              </div>
            </div>

            <ul className="divide-y divide-line border-y border-line">
              {channels.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="group flex min-h-14 items-center gap-4 py-3 transition-colors"
                  >
                    <span className="text-fg-subtle transition-colors group-hover:text-fg">{c.icon}</span>
                    <span className="min-w-0 flex-1">
                      <span className="meta block">{c.label}</span>
                      <span className="block truncate text-sm text-fg transition-colors group-hover:text-accent-fg">{c.value}</span>
                    </span>
                    <ArrowUpRight
                      aria-hidden="true"
                      className="size-4 shrink-0 text-fg-subtle transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-fg"
                    />
                    {c.external && <span className="sr-only"> (opens in new tab)</span>}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
