import type { SkillLevel } from '../../data/portfolio'

interface SkillBadgeProps {
  name: string
  level?: SkillLevel
}

export function SkillBadge({ name, level = 'active' }: SkillBadgeProps) {
  const styles =
    level === 'exploring'
      ? 'border-dashed border-amber-400/30 bg-amber-400/[0.04] text-amber-100/90 hover:border-amber-300/50'
      : 'border-line bg-white/[0.03] text-slate-200 hover:border-accent/50 hover:text-white'

  return (
    <li
      className={`inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 text-sm transition-colors duration-200 ${styles}`}
    >
      <span
        aria-hidden="true"
        className={`size-1.5 rounded-full ${level === 'exploring' ? 'bg-amber-400/80' : 'bg-accent-soft'}`}
      />
      {name}
    </li>
  )
}
