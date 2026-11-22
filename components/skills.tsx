'use client'

import { AnimatePresence, motion } from 'motion/react'
import { useRef, useState, type KeyboardEvent } from 'react'
import { Reveal, SectionHeading } from '@/components/reveal'
import { skillGroups, type SkillLevel } from '@/lib/portfolio-data'
import { cn } from '@/lib/utils'

const levelStyles: Record<SkillLevel, { dots: number; className: string }> = {
  Core: { dots: 3, className: 'text-[#c3caff]' },
  'Working knowledge': { dots: 2, className: 'text-foreground/70' },
  Learning: { dots: 1, className: 'text-muted-foreground' },
}

export function Skills() {
  const [activeId, setActiveId] = useState(skillGroups[0].id)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])
  const active = skillGroups.find((g) => g.id === activeId) ?? skillGroups[0]

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const current = skillGroups.findIndex((g) => g.id === activeId)
    let next = current
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') next = (current + 1) % skillGroups.length
    else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') next = (current - 1 + skillGroups.length) % skillGroups.length
    else if (e.key === 'Home') next = 0
    else if (e.key === 'End') next = skillGroups.length - 1
    else return
    e.preventDefault()
    setActiveId(skillGroups[next].id)
    tabRefs.current[next]?.focus()
  }

  return (
    <section id="skills" aria-labelledby="skills-title" className="relative py-28 md:py-36">
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-navy/50 to-transparent" />
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          id="skills-title"
          index="03"
          eyebrow="Technical skills"
          title="A toolkit chosen for depth, not breadth."
          description="Select a discipline to see the tools I reach for and how I use them."
        />

        <Reveal className="grid gap-6 lg:grid-cols-[280px_1fr] lg:gap-10">
          <div
            role="tablist"
            aria-label="Skill categories"
            aria-orientation="vertical"
            onKeyDown={onKeyDown}
            className="-mx-6 flex gap-2 overflow-x-auto px-6 pb-2 lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0 lg:pb-0"
          >
            {skillGroups.map((group, i) => {
              const selected = group.id === activeId
              return (
                <button
                  key={group.id}
                  ref={(el) => {
                    tabRefs.current[i] = el
                  }}
                  type="button"
                  role="tab"
                  id={`tab-${group.id}`}
                  aria-selected={selected}
                  aria-controls={`panel-${group.id}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActiveId(group.id)}
                  className={cn(
                    'relative flex shrink-0 items-center justify-between gap-6 rounded-xl px-5 py-4 text-left transition-colors',
                    selected ? 'text-foreground' : 'text-muted-foreground hover:text-foreground',
                  )}
                >
                  {selected ? (
                    <motion.span
                      layoutId="skill-tab"
                      className="absolute inset-0 rounded-xl border border-white/10 bg-card"
                      transition={{ type: 'spring', stiffness: 380, damping: 34 }}
                      aria-hidden="true"
                    />
                  ) : null}
                  <span className="relative font-medium tracking-tight">{group.label}</span>
                  <span className="relative font-mono text-xs text-muted-foreground">
                    {String(group.skills.length).padStart(2, '0')}
                  </span>
                </button>
              )
            })}
          </div>

          <div
            role="tabpanel"
            id={`panel-${active.id}`}
            aria-labelledby={`tab-${active.id}`}
            className="relative min-h-[420px] overflow-hidden rounded-3xl border border-border bg-card/70 p-6 md:p-10"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="max-w-lg text-pretty text-lg leading-relaxed text-foreground/80">{active.summary}</p>
                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {active.skills.map((skill, i) => {
                    const level = levelStyles[skill.level]
                    return (
                      <motion.li
                        key={skill.name}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.04 * i, duration: 0.35 }}
                        className="group rounded-2xl border border-border bg-navy/60 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-iris/30 hover:bg-navy"
                      >
                        <div className="flex items-center justify-between gap-4">
                          <h3 className="font-medium tracking-tight text-foreground">{skill.name}</h3>
                          <span className={cn('flex items-center gap-2 font-mono text-[11px]', level.className)}>
                            <span className="flex gap-1" aria-hidden="true">
                              {[0, 1, 2].map((d) => (
                                <span
                                  key={d}
                                  className={cn(
                                    'size-1.5 rounded-full',
                                    d < level.dots ? 'bg-gradient-to-r from-iris to-violet' : 'bg-white/10',
                                  )}
                                />
                              ))}
                            </span>
                            {skill.level}
                          </span>
                        </div>
                        <p className="mt-2 text-sm text-muted-foreground">{skill.note}</p>
                      </motion.li>
                    )
                  })}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
