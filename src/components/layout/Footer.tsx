import { ArrowUp } from 'lucide-react'
import { profile } from '../../data/portfolio'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line">
      <div className="container-page flex flex-col items-center justify-between gap-4 py-8 text-sm text-slate-500 sm:flex-row">
        <p>
          © {year} {profile.name}. Built with React &amp; TypeScript.
        </p>
        <a
          href="#top"
          className="inline-flex items-center gap-1.5 rounded-lg px-2 py-1 transition-colors hover:text-white"
        >
          Back to top
          <ArrowUp aria-hidden="true" className="size-4" />
        </a>
      </div>
    </footer>
  )
}
