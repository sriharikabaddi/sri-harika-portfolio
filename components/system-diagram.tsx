'use client'

import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { useEffect, useState } from 'react'

const nodes = [
  { id: 'client', label: 'client', x: 20, y: 170 },
  { id: 'gateway', label: 'gateway', x: 150, y: 170 },
  { id: 'service', label: 'api.svc', x: 290, y: 170, primary: true },
  { id: 'pg', label: 'postgres', x: 420, y: 60 },
  { id: 'llm', label: 'llm', x: 420, y: 170 },
  { id: 'vec', label: 'pgvector', x: 420, y: 280 },
]

const paths = [
  { id: 'p1', d: 'M108 188 H150', delay: 0 },
  { id: 'p2', d: 'M238 188 H290', delay: 0.5 },
  { id: 'p3', d: 'M378 188 C400 188 398 78 420 78', delay: 1 },
  { id: 'p4', d: 'M378 188 H420', delay: 1.4 },
  { id: 'p5', d: 'M378 188 C400 188 398 298 420 298', delay: 1.2 },
]

const logLines = [
  { method: 'POST', path: '/v1/query', status: 200, ms: 42 },
  { method: 'GET', path: '/v1/docs/:id', status: 200, ms: 11 },
  { method: 'POST', path: '/v1/ingest', status: 202, ms: 8 },
  { method: 'GET', path: '/health', status: 200, ms: 2 },
  { method: 'POST', path: '/v1/auth/token', status: 201, ms: 19 },
]

export function SystemDiagram() {
  const reduce = useReducedMotion()
  const [tick, setTick] = useState(0)

  useEffect(() => {
    if (reduce) return
    const id = window.setInterval(() => setTick((t) => t + 1), 2200)
    return () => window.clearInterval(id)
  }, [reduce])

  const visible = [0, 1, 2].map((offset) => {
    const i = (tick + offset) % logLines.length
    return { ...logLines[i], key: tick + offset }
  })

  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-navy/60 shadow-[0_40px_120px_-40px_rgb(124_140_255_/_0.35)] backdrop-blur-sm">
      <div className="flex items-center justify-between border-b border-border px-5 py-3">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="size-2.5 rounded-full bg-white/10" />
          <span className="size-2.5 rounded-full bg-white/10" />
          <span className="size-2.5 rounded-full bg-white/10" />
        </div>
        <p className="font-mono text-[11px] text-muted-foreground">request-trace · live</p>
        <span className="flex items-center gap-1.5 font-mono text-[11px] text-emerald-300/80">
          <span className="relative flex size-1.5">
            {!reduce ? (
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400/70" />
            ) : null}
            <span className="relative inline-flex size-1.5 rounded-full bg-emerald-400" />
          </span>
          healthy
        </span>
      </div>

      <svg
        viewBox="0 0 530 376"
        className="w-full"
        role="img"
        aria-label="Diagram of a request flowing from a client through a gateway to an API service, which reads from Postgres, a vector store, and a language model."
      >
        <defs>
          <linearGradient id="edge" x1="0" x2="1">
            <stop offset="0%" stopColor="#7c8cff" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#b394ff" stopOpacity="0.55" />
          </linearGradient>
          <radialGradient id="pulse">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="45%" stopColor="#aab4ff" />
            <stop offset="100%" stopColor="#7c8cff" stopOpacity="0" />
          </radialGradient>
        </defs>

        {paths.map((p, i) => (
          <motion.path
            key={p.id}
            id={p.id}
            d={p.d}
            fill="none"
            stroke="url(#edge)"
            strokeWidth="1.25"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.9, delay: 0.6 + i * 0.12, ease: 'easeInOut' }}
          />
        ))}

        {!reduce
          ? paths.map((p) => (
              <circle key={`pulse-${p.id}`} r="5" fill="url(#pulse)">
                <animateMotion dur="2.2s" repeatCount="indefinite" begin={`${1.6 + p.delay}s`}>
                  <mpath href={`#${p.id}`} />
                </animateMotion>
              </circle>
            ))
          : null}

        {nodes.map((n, i) => (
          <motion.g
            key={n.id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 + i * 0.08 }}
          >
            <rect
              x={n.x}
              y={n.y}
              width="88"
              height="36"
              rx="9"
              fill={n.primary ? '#141b36' : '#0d1324'}
              stroke={n.primary ? 'rgb(170 180 255 / 0.55)' : 'rgb(255 255 255 / 0.1)'}
            />
            <circle cx={n.x + 14} cy={n.y + 18} r="2.5" fill={n.primary ? '#b394ff' : '#7c8cff'} opacity="0.9" />
            <text
              x={n.x + 24}
              y={n.y + 22}
              fill={n.primary ? '#e8eaf2' : '#a4aac0'}
              fontSize="11.5"
              fontFamily="var(--font-geist-mono), monospace"
            >
              {n.label}
            </text>
          </motion.g>
        ))}
      </svg>

      <div className="border-t border-border px-5 py-4 font-mono text-[11.5px]" aria-hidden="true">
        <ul className="flex flex-col gap-1.5">
          <AnimatePresence initial={false} mode="popLayout">
            {visible.map((line, idx) => (
              <motion.li
                key={line.key}
                layout
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: idx === 0 ? 1 : 0.55 - idx * 0.12, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.45 }}
                className="flex items-center gap-3 text-muted-foreground"
              >
                <span className="w-10 text-iris">{line.method}</span>
                <span className="flex-1 truncate text-foreground/80">{line.path}</span>
                <span className="text-emerald-300/80">{line.status}</span>
                <span className="w-12 text-right">{line.ms}ms</span>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      </div>
    </div>
  )
}
