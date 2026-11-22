'use client'

import { AnimatePresence, motion } from 'motion/react'
import { ArrowUpRight, Check, Copy, Mail } from 'lucide-react'
import { useState } from 'react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { Reveal } from '@/components/reveal'
import { profile } from '@/lib/portfolio-data'

export function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  const links = [
    { href: profile.github, label: 'GitHub', icon: GithubIcon },
    { href: profile.linkedin, label: 'LinkedIn', icon: LinkedinIcon },
  ]

  return (
    <section id="contact" aria-labelledby="contact-title" className="mx-auto max-w-6xl px-6 py-28 md:py-36">
      <Reveal>
        <div className="relative isolate overflow-hidden rounded-[2rem] border border-border bg-navy px-7 py-16 md:px-16 md:py-24">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_60%_70%_at_80%_0%,black,transparent)]" />
            <div className="absolute -right-32 -top-40 h-[440px] w-[560px] rounded-full bg-[radial-gradient(closest-side,rgb(124_140_255_/_0.22),transparent)] blur-2xl" />
            <div className="absolute inset-x-16 top-0 h-px hairline-gradient" />
          </div>

          <p className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span className="text-iris">05</span>
            <span className="h-px w-8 bg-border" aria-hidden="true" />
            Contact
          </p>
          <h2
            id="contact-title"
            className="max-w-3xl text-balance text-4xl font-medium tracking-tight text-foreground md:text-6xl"
          >
            {"Let's build something "}
            <span className="text-gradient">dependable.</span>
          </h2>
          <p className="mt-6 max-w-xl text-pretty leading-relaxed text-foreground/70 md:text-lg">
            {"I'm looking for backend and AI-platform roles where I can learn from strong engineers and own meaningful systems. My inbox is always open."}
          </p>

          <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="flex items-center rounded-full border border-border bg-background/60 p-1.5 pl-5">
              <Mail className="mr-3 size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
              <a
                href={`mailto:${profile.email}`}
                className="truncate text-sm text-foreground transition-colors hover:text-[#c3caff] md:text-base"
              >
                {profile.email}
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className="ml-3 flex h-9 shrink-0 items-center gap-1.5 rounded-full bg-white/[0.06] px-3.5 text-xs font-medium text-foreground transition-colors hover:bg-white/[0.1]"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={copied ? 'done' : 'copy'}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.15 }}
                    className="flex items-center gap-1.5"
                  >
                    {copied ? (
                      <Check className="size-3.5 text-emerald-300" aria-hidden="true" />
                    ) : (
                      <Copy className="size-3.5" aria-hidden="true" />
                    )}
                    {copied ? 'Copied' : 'Copy'}
                  </motion.span>
                </AnimatePresence>
              </button>
              <span className="sr-only" aria-live="polite">
                {copied ? 'Email address copied to clipboard' : ''}
              </span>
            </div>

            <div className="flex gap-3">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex h-12 items-center gap-2.5 rounded-full border border-border px-5 text-sm text-foreground/80 transition-colors hover:border-white/20 hover:text-foreground"
                >
                  <link.icon className="size-4" />
                  {link.label}
                  <ArrowUpRight
                    className="size-3.5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
