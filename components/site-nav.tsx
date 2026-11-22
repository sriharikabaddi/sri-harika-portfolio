'use client'

import { AnimatePresence, motion } from 'motion/react'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { navLinks, profile } from '@/lib/portfolio-data'
import { cn } from '@/lib/utils'

export function SiteNav() {
  const [active, setActive] = useState<string>('')
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    for (const link of navLinks) {
      const el = document.getElementById(link.id)
      if (el) observer.observe(el)
    }
    return () => {
      window.removeEventListener('scroll', onScroll)
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        scrolled || open ? 'border-b border-border bg-background/75 backdrop-blur-xl' : 'border-b border-transparent',
      )}
    >
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="group flex items-center gap-3" aria-label={`${profile.name}, back to top`}>
          <span className="relative flex size-8 items-center justify-center rounded-lg border border-border bg-navy font-mono text-xs font-medium text-foreground">
            SB
            <span
              className="absolute inset-x-1 -bottom-px h-px hairline-gradient opacity-0 transition-opacity group-hover:opacity-100"
              aria-hidden="true"
            />
          </span>
          <span className="hidden text-sm font-medium tracking-tight sm:block">{profile.name}</span>
        </a>

        <ul className="hidden items-center gap-1 rounded-full border border-border bg-white/[0.02] p-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                aria-current={active === link.id ? 'true' : undefined}
                className={cn(
                  'relative block rounded-full px-4 py-1.5 text-sm transition-colors',
                  active === link.id ? 'text-foreground' : 'text-muted-foreground hover:text-foreground',
                )}
              >
                {active === link.id ? (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-white/[0.07]"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    aria-hidden="true"
                  />
                ) : null}
                <span className="relative">{link.label}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={`mailto:${profile.email}`}
            className="hidden rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-transform hover:scale-[1.03] active:scale-[0.98] md:inline-flex"
          >
            {"Let's talk"}
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="flex size-10 items-center justify-center rounded-lg border border-border text-foreground md:hidden"
          >
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
            {open ? <X className="size-4" aria-hidden="true" /> : <Menu className="size-4" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden md:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 pb-6 pt-2">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.id}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i }}
                >
                  <a
                    href={`#${link.id}`}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between border-b border-border py-4 text-lg tracking-tight text-foreground"
                  >
                    {link.label}
                    <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
                  </a>
                </motion.li>
              ))}
              <li className="pt-4">
                <a
                  href={`mailto:${profile.email}`}
                  className="flex w-full items-center justify-center rounded-full bg-foreground py-3 text-sm font-medium text-background"
                >
                  {"Let's talk"}
                </a>
              </li>
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
