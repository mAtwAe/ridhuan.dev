import { useEffect, useRef, useState, type CSSProperties, type ElementType, type HTMLAttributes, type ReactNode } from 'react'

interface RevealProps extends Omit<HTMLAttributes<HTMLElement>, 'className' | 'children'> {
  children: ReactNode
  as?: ElementType
  className?: string
  /** Delay in ms, useful for staggering siblings */
  delay?: number
}

/** Fades content in once it scrolls into view. Disabled by `prefers-reduced-motion` in CSS. */
export function Reveal({ children, as: Tag = 'div', className = '', delay = 0, style, ...rest }: RevealProps) {
  const ref = useRef<HTMLElement>(null)
  // Show immediately where IntersectionObserver is unavailable
  const [visible, setVisible] = useState(() => !('IntersectionObserver' in window))

  useEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      {...rest}
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={{ ...style, '--reveal-delay': `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  )
}
