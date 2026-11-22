import { ArrowRight, Download, MapPin } from 'lucide-react'
import { profile } from '../../data/portfolio'
import { CodeCard } from '../ui/CodeCard'
import { Reveal } from '../ui/Reveal'
import { SocialLinks } from '../ui/SocialLinks'

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Background */}
      <div aria-hidden="true" className="bg-grid pointer-events-none absolute inset-0" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[900px] max-w-[160vw] -translate-x-1/2 rounded-full bg-accent/15 blur-[120px]"
      />

      <div className="container-page relative grid items-center gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <div>
          {profile.availability && (
            <Reveal>
              <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-3 py-1 text-xs text-slate-400">
                <span aria-hidden="true" className="status-dot size-1.5 rounded-full bg-emerald-400" />
                {profile.availability}
              </p>
            </Reveal>
          )}

          <Reveal delay={60}>
            <h1 id="hero-title" className="text-4xl font-semibold tracking-tight text-white sm:text-6xl">
              Hi, I&apos;m <span className="bg-gradient-to-r from-white to-accent-soft bg-clip-text text-transparent">{profile.name}.</span>
            </h1>
          </Reveal>

          <Reveal delay={120}>
            <p className="mt-4 text-lg font-medium text-slate-200 sm:text-xl">{profile.title}</p>
          </Reveal>

          <Reveal delay={180}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">{profile.tagline}</p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#projects" className="btn-primary group">
                Explore My Work
                <ArrowRight aria-hidden="true" className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>
              <a href={profile.resumeUrl} download className="btn-secondary">
                <Download aria-hidden="true" className="size-4" />
                Download Resume
              </a>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
              <SocialLinks />
              <p className="flex items-center gap-1.5 text-sm text-slate-500">
                <MapPin aria-hidden="true" className="size-4" />
                {profile.location}
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="mx-auto w-full max-w-lg lg:max-w-none">
          <CodeCard />
        </Reveal>
      </div>
    </section>
  )
}
