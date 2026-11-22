import type { CSSProperties } from 'react'
import { ArrowRight, Download, MapPin } from 'lucide-react'
import { profile } from '../../data/portfolio'
import { CodeCard } from '../ui/CodeCard'
import { SocialLinks } from '../ui/SocialLinks'

const delay = (ms: number) => ({ '--enter-delay': `${ms}ms` }) as CSSProperties

export function Hero() {
  // "Software Engineer | Backend & Cloud Engineering" → role + specialty, rendered with a proper separator
  const [role, ...rest] = profile.title.split('|').map((s) => s.trim())
  const specialty = rest.join(' · ')

  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden pt-32 pb-16 sm:pt-44 sm:pb-24">
      {/* Background */}
      <div aria-hidden="true" className="bg-grid pointer-events-none absolute inset-0" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-56 left-1/2 h-[520px] w-[1000px] max-w-[180vw] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(59_130_246/0.16),transparent)]"
      />

      <div className="container-page relative grid items-center gap-16 lg:grid-cols-[1.08fr_1fr] lg:gap-14">
        <div>
          {profile.availability && (
            <div className="enter">
              <p className="mb-8 inline-flex items-center gap-2.5 text-sm text-fg-muted">
                <span aria-hidden="true" className="relative flex size-2">
                  <span className="absolute inset-0 rounded-full bg-emerald-400/30 blur-[3px]" />
                  <span className="relative size-2 rounded-full bg-emerald-400" />
                </span>
                {profile.availability}
              </p>
            </div>
          )}

          <div className="enter" style={delay(60)}>
            <h1
              id="hero-title"
              className="text-[2.75rem] leading-[1.02] font-semibold tracking-[-0.04em] sm:text-7xl"
            >
              Hi, I&apos;m {profile.name}
              <span className="text-accent">.</span>
            </h1>
          </div>

          <div className="enter" style={delay(120)}>
            <p className="mt-5 text-lg font-medium tracking-[-0.01em] text-fg sm:text-xl">
              {role}
              {specialty && (
                <>
                  <span aria-hidden="true" className="mx-2.5 text-line-strong">
                    /
                  </span>
                  <span className="sr-only">, </span>
                  <span className="text-fg-muted">{specialty}</span>
                </>
              )}
            </p>
          </div>

          <div className="enter" style={delay(180)}>
            <p className="mt-6 max-w-[34rem] text-base leading-[1.75] text-fg-muted sm:text-[1.0625rem]">{profile.tagline}</p>
          </div>

          <div className="enter" style={delay(240)}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href="#projects" className="btn-primary group">
                Explore My Work
                <ArrowRight aria-hidden="true" className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>
              <a href={profile.resumeUrl} download className="btn-secondary">
                <Download aria-hidden="true" className="size-4" />
                Download Resume
              </a>
            </div>
          </div>

          <div className="enter" style={delay(300)}>
            <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-4 border-t border-line pt-6">
              <SocialLinks />
              <span aria-hidden="true" className="hidden h-5 w-px bg-line sm:block" />
              <p className="flex items-center gap-1.5 text-sm text-fg-subtle">
                <MapPin aria-hidden="true" className="size-4" />
                {profile.location}
              </p>
            </div>
          </div>
        </div>

        <div className="enter mx-auto w-full max-w-lg lg:max-w-none" style={delay(200)}>
          <CodeCard />
        </div>
      </div>
    </section>
  )
}
