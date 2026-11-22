'use client'

import { motion } from 'motion/react'
import type { ReactNode } from 'react'

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  id,
}: {
  index: string
  eyebrow: string
  title: ReactNode
  description?: string
  id: string
}) {
  return (
    <Reveal className="mb-14 md:mb-20">
      <p className="mb-5 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
        <span className="text-iris">{index}</span>
        <span className="h-px w-8 bg-border" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2 id={id} className="max-w-3xl text-balance text-3xl font-medium tracking-tight text-foreground md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-2xl text-pretty leading-relaxed text-muted-foreground md:text-lg">{description}</p>
      ) : null}
    </Reveal>
  )
}
