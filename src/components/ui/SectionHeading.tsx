import { Reveal } from './Reveal'

interface SectionHeadingProps {
  id: string
  eyebrow: string
  title: string
  description?: string
}

/** Title block used by every section: eyebrow + h2 on the left, optional description on the right (desktop). */
export function SectionHeading({ id, eyebrow, title, description }: SectionHeadingProps) {
  return (
    <Reveal className="mb-12 grid gap-4 sm:mb-16 lg:grid-cols-[1fr_1fr] lg:items-end lg:gap-16">
      <div>
        <p className="eyebrow mb-4">{eyebrow}</p>
        <h2 id={`${id}-title`} className="text-3xl font-semibold tracking-[-0.025em] sm:text-[2.5rem] sm:leading-[1.1]">
          {title}
        </h2>
      </div>
      {description && <p className="max-w-lg text-base leading-relaxed text-fg-muted lg:justify-self-end lg:text-right">{description}</p>}
    </Reveal>
  )
}
