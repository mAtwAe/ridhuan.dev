import type { JSX } from 'react'
import { Mail } from 'lucide-react'
import { profile } from '../../data/portfolio'
import { GithubIcon, LinkedinIcon } from './BrandIcons'

/** Renders only the social links that have a value in `portfolio.ts`. */
export function SocialLinks({ className = '' }: { className?: string }) {
  const { github, linkedin, email } = profile.social

  const links = [
    github && { href: github, label: 'GitHub', icon: <GithubIcon />, external: true },
    linkedin && { href: linkedin, label: 'LinkedIn', icon: <LinkedinIcon />, external: true },
    email && { href: `mailto:${email}`, label: 'Email', icon: <Mail aria-hidden="true" className="size-5" />, external: false },
  ].filter((l): l is { href: string; label: string; icon: JSX.Element; external: boolean } => Boolean(l))

  return (
    <ul className={`flex items-center gap-2 ${className}`}>
      {links.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            className="icon-btn"
            aria-label={link.external ? `${link.label} (opens in new tab)` : link.label}
            title={link.label}
            {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          >
            {link.icon}
          </a>
        </li>
      ))}
    </ul>
  )
}
