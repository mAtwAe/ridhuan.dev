import type { SkillLevel } from '../../data/portfolio'

interface SkillBadgeProps {
  name: string
  level?: SkillLevel
}

export function SkillBadge({ name, level = 'active' }: SkillBadgeProps) {
  const styles =
    level === 'exploring'
      ? 'border-dashed border-learn/35 text-learn-fg hover:border-learn/60'
      : 'border-line bg-white/[0.025] text-fg hover:border-line-strong hover:bg-white/[0.05]'

  return (
    <li className={`inline-flex items-center rounded-md border px-2.5 py-1 text-[0.8125rem] transition-colors duration-200 ${styles}`}>
      {name}
    </li>
  )
}
