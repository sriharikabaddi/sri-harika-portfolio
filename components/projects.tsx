'use client'

import { ArrowUpRight } from 'lucide-react'
import type { PointerEvent } from 'react'
import { GithubIcon } from '@/components/brand-icons'
import { Reveal, SectionHeading } from '@/components/reveal'
import { projects, type Project } from '@/lib/portfolio-data'
import { cn } from '@/lib/utils'

function trackPointer(e: PointerEvent<HTMLElement>) {
  const rect = e.currentTarget.getBoundingClientRect()
  e.currentTarget.style.setProperty('--x', `${e.clientX - rect.left}px`)
  e.currentTarget.style.setProperty('--y', `${e.clientY - rect.top}px`)
}

function ProjectCard({ project, index, featured }: { project: Project; index: number; featured?: boolean }) {
  return (
    <article
      onPointerMove={trackPointer}
      className={cn(
        'group relative isolate flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card/70 p-7 transition-colors duration-300 hover:border-white/15 md:p-10',
        featured && 'lg:grid lg:grid-cols-[1.4fr_1fr] lg:gap-14',
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(420px circle at var(--x, 50%) var(--y, 50%), rgb(124 140 255 / 0.10), transparent 60%)',
        }}
      />

      <div className="flex flex-col">
        <div className="mb-8 flex items-center justify-between">
          <span className="font-mono text-xs text-muted-foreground">
            {String(index + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
          </span>
          {featured ? (
            <span className="rounded-full border border-iris/30 bg-iris/10 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-[#c3caff]">
              Featured
            </span>
          ) : null}
        </div>

        <h3 className={cn('font-medium tracking-tight text-foreground', featured ? 'text-3xl md:text-4xl' : 'text-2xl')}>
          {project.title}
        </h3>
        <p className="mt-2 text-foreground/70">{project.tagline}</p>
        <p className="mt-5 max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground md:text-[15px]">
          {project.description}
        </p>

        <ul className="mt-7 flex flex-wrap gap-2" aria-label="Tech stack">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-border bg-white/[0.02] px-3 py-1 font-mono text-[11.5px] text-foreground/70"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex items-center gap-5 pt-9">
          {project.repo ? (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-foreground/80 transition-colors hover:text-foreground"
            >
              <GithubIcon className="size-4" />
              Source<span className="sr-only"> code for {project.title}</span>
            </a>
          ) : null}
          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="group/link inline-flex items-center gap-1.5 text-sm text-foreground/80 transition-colors hover:text-foreground"
            >
              Walkthrough<span className="sr-only"> for {project.title}</span>
              <ArrowUpRight className="size-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" aria-hidden="true" />
            </a>
          ) : null}
        </div>
      </div>

      <dl
        className={cn(
          'mt-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border',
          featured ? 'grid-cols-3 lg:mt-0 lg:grid-cols-1 lg:self-stretch' : 'grid-cols-2',
        )}
      >
        {project.metrics.map((m) => (
          <div key={m.label} className="flex flex-col justify-center bg-navy/90 p-5">
            <dt className="order-2 mt-1.5 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
              {m.label}
            </dt>
            <dd className="order-1 text-xl font-medium tracking-tight text-foreground md:text-2xl">{m.value}</dd>
          </div>
        ))}
      </dl>
    </article>
  )
}

export function Projects() {
  const [featured, ...rest] = projects

  return (
    <section id="work" aria-labelledby="work-title" className="mx-auto max-w-6xl px-6 py-28 md:py-36">
      <SectionHeading
        id="work-title"
        index="02"
        eyebrow="Selected work"
        title="Systems built to be understood, measured, and trusted."
        description="A few projects that reflect how I approach backend problems — from API surface to data layer to the AI components in between."
      />

      <div className="flex flex-col gap-6">
        <Reveal>
          <ProjectCard project={featured} index={0} featured />
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2">
          {rest.map((project, i) => (
            <Reveal key={project.title} delay={0.08 * i} className="h-full">
              <ProjectCard project={project} index={i + 1} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
