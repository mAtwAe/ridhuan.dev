import { Reveal } from './Reveal'

interface SectionHeadingProps {
  id: string
  eyebrow: string
  title: string
  description?: string
}

export function SectionHeading({ id, eyebrow, title, description }: SectionHeadingProps) {
  return (
    <Reveal className="mb-12 max-w-2xl sm:mb-14">
      <p className="mb-3 font-mono text-xs font-medium tracking-[0.18em] text-accent-soft uppercase">{eyebrow}</p>
      <h2 id={`${id}-title`} className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {description && <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">{description}</p>}
    </Reveal>
  )
}
