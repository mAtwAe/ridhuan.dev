import { Download, Mail } from 'lucide-react'
import { profile } from '../../data/portfolio'
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons'
import { Reveal } from '../ui/Reveal'

export function Contact() {
  const { email, github, linkedin } = profile.social

  return (
    <section id="contact" aria-labelledby="contact-title" className="py-24 sm:py-32">
      <div className="container-page">
        <Reveal className="relative overflow-hidden rounded-3xl border border-line bg-ink-850/70 px-6 py-14 text-center sm:px-12 sm:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[640px] max-w-[150%] -translate-x-1/2 rounded-full bg-accent/20 blur-[100px]"
          />
          <div aria-hidden="true" className="bg-grid pointer-events-none absolute inset-0 opacity-60" />

          <div className="relative mx-auto max-w-2xl">
            <p className="mb-3 font-mono text-xs font-medium tracking-[0.18em] text-accent-soft uppercase">05 — Contact</p>
            <h2 id="contact-title" className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              Let&apos;s Connect
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-400 sm:text-lg">
              I&apos;m open to connecting with engineering teams, discussing backend development opportunities, and
              collaborating on interesting technical projects.
            </p>

            <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              {email && (
                <a href={`mailto:${email}`} className="btn-primary">
                  <Mail aria-hidden="true" className="size-4" />
                  Email Me
                </a>
              )}
              <a href={profile.resumeUrl} download className="btn-secondary">
                <Download aria-hidden="true" className="size-4" />
                Download Resume
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm">
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 text-slate-400 transition-colors hover:text-white"
                >
                  <GithubIcon className="size-4" />
                  {github.replace(/^https?:\/\/(www\.)?/, '')}
                  <span className="sr-only"> (opens in new tab)</span>
                </a>
              )}
              {linkedin && (
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 text-slate-400 transition-colors hover:text-white"
                >
                  <LinkedinIcon className="size-4" />
                  LinkedIn
                  <span className="sr-only"> (opens in new tab)</span>
                </a>
              )}
              {email && (
                <a
                  href={`mailto:${email}`}
                  className="inline-flex min-h-11 items-center gap-2 break-all text-slate-400 transition-colors hover:text-white"
                >
                  <Mail aria-hidden="true" className="size-4 shrink-0" />
                  {email}
                </a>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
