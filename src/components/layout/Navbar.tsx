import { useEffect, useState } from 'react'
import { FileText, Menu, X } from 'lucide-react'
import { navItems, profile } from '../../data/portfolio'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<string>('')

  // Translucent background once the page is scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Highlight the section currently in view
  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((el): el is HTMLElement => el !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  // Close mobile menu on Escape and when resizing to desktop
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    const onResize = () => window.innerWidth >= 768 && setOpen(false)
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [open])

  const solid = scrolled || open

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-300 ${
        solid ? 'border-line/80 bg-ink-900/75 backdrop-blur-xl' : 'border-transparent bg-transparent'
      }`}
    >
      <a
        href="#main"
        className="sr-only rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white focus:not-sr-only focus:absolute focus:top-3 focus:left-3"
      >
        Skip to content
      </a>

      <nav aria-label="Primary" className="container-page flex h-16 items-center justify-between">
        <a
          href="#top"
          className="group flex items-center gap-2 font-mono text-[0.95rem] font-semibold tracking-tight text-white"
          aria-label={`${profile.domain} — back to top`}
        >
          <span
            aria-hidden="true"
            className="flex size-7 items-center justify-center rounded-lg border border-line-strong bg-ink-800 text-xs text-accent-soft transition-colors group-hover:border-accent/60"
          >
            r.
          </span>
          <span>
            ridhuan<span className="text-accent-soft">.dev</span>
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-1 md:flex">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  aria-current={active === item.href ? 'location' : undefined}
                  className={`rounded-lg px-3 py-2 text-sm transition-colors duration-200 ${
                    active === item.href ? 'text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener"
            className="btn-secondary ml-3 min-h-9 px-4 py-1.5"
          >
            <FileText aria-hidden="true" className="size-4" />
            Resume
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="icon-btn md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X aria-hidden="true" className="size-5" /> : <Menu aria-hidden="true" className="size-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div id="mobile-menu" hidden={!open} className="border-t border-line/80 md:hidden">
        <ul className="container-page flex flex-col py-3">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex min-h-12 items-center rounded-lg px-2 text-base text-slate-300 hover:bg-white/[0.04] hover:text-white"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="mt-2 pb-2">
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener"
              onClick={() => setOpen(false)}
              className="btn-primary w-full"
            >
              <FileText aria-hidden="true" className="size-4" />
              View Resume
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
