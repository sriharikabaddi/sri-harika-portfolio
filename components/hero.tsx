'use client'

import { motion } from 'motion/react'
import { ArrowDown, ArrowUpRight, Code2, Sparkles, Terminal } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { profile } from '@/lib/portfolio-data'

const ease = [0.22, 1, 0.36, 1] as const

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="hero-section relative isolate overflow-hidden pt-28 md:pt-36">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_75%_65%_at_50%_25%,black,transparent)]" />
        <div className="hero-orb absolute -top-48 left-[38%] h-[680px] w-[680px] rounded-full bg-[radial-gradient(circle,rgb(93_103_255_/_0.24),transparent_68%)] blur-3xl" />
        <div className="hero-orb hero-orb-delay absolute right-[-18%] top-48 h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgb(169_105_255_/_0.18),transparent_68%)] blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-background" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 pb-24 md:pb-32 lg:grid-cols-[1.08fr_.92fr] lg:gap-8">
        <div className="relative z-10">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, ease }} className="mb-8 inline-flex items-center gap-3 rounded-full border border-emerald-300/20 bg-emerald-300/[0.06] px-4 py-2 text-xs tracking-wide text-emerald-100/90 shadow-[0_0_35px_-15px_rgba(52,211,153,.45)]">
            <span className="relative flex size-2"><span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-300 opacity-60" /><span className="relative inline-flex size-2 rounded-full bg-emerald-300" /></span>
            {profile.availability}
          </motion.div>

          <motion.p initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .12, duration: .6 }} className="mb-4 font-mono text-xs uppercase tracking-[.32em] text-[#aab4ff]">
            Hello, I&apos;m
          </motion.p>
          <h1 id="hero-title" className="max-w-3xl text-[clamp(3.2rem,7vw,6.4rem)] font-semibold leading-[.94] tracking-[-.065em]">
            Sri Harika <span className="hero-name-gradient block">Baddi<span className="text-[#aab4ff]">.</span></span>
          </h1>
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .3, duration: .7, ease }}>
            <p className="mt-8 max-w-xl text-xl font-medium leading-relaxed text-white/90 md:text-2xl">Software Engineer <span className="text-[#aab4ff]">|</span> Backend Development <span className="text-[#aab4ff]">|</span> AI Integration</p>
            <p className="mt-5 max-w-xl text-pretty text-base leading-8 text-[#a8aec2] md:text-lg">I build thoughtful web applications, reliable backend services, and practical AI-powered experiences — turning ideas into software people can use.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .48, duration: .7, ease }} className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#work" className="hero-primary group inline-flex items-center gap-3 rounded-full px-6 py-3.5 text-sm font-semibold text-white">Explore my work <ArrowDown className="size-4 transition-transform group-hover:translate-y-1" /></a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.035] px-6 py-3.5 text-sm font-medium text-white/90 transition-all hover:border-[#9ca8ff]/50 hover:bg-white/[0.07]">Let&apos;s connect <ArrowUpRight className="size-4" /></a>
            <div className="flex items-center gap-1 pl-1">
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub profile" className="flex size-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.025] text-white/65 transition-all hover:-translate-y-1 hover:border-white/30 hover:text-white"><GithubIcon className="size-[18px]" /></a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className="flex size-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.025] text-white/65 transition-all hover:-translate-y-1 hover:border-white/30 hover:text-white"><LinkedinIcon className="size-[17px]" /></a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .75 }} className="mt-14 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/10 pt-6 text-xs font-mono uppercase tracking-[.16em] text-white/40">
            <span className="inline-flex items-center gap-2"><Code2 className="size-4 text-[#aab4ff]" /> Backend engineering</span>
            <span className="inline-flex items-center gap-2"><Sparkles className="size-4 text-[#c5a6ff]" /> AI integration</span>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 30, scale: .96 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 1, delay: .2, ease }} className="relative mx-auto w-full max-w-[490px] lg:ml-auto">
          <div aria-hidden="true" className="absolute -inset-5 rounded-[2.8rem] bg-gradient-to-br from-[#7c8cff]/25 via-transparent to-[#bd8cff]/25 blur-2xl" />
          <div className="hero-photo-frame relative rounded-[2.4rem] border border-white/15 bg-[#101629]/80 p-3 shadow-[0_35px_100px_-35px_rgba(107,119,255,.55)]">
            <div className="relative overflow-hidden rounded-[1.85rem] bg-[#171d2e]">
              <img src="/harika-profile.jpg" alt="Portrait of Sri Harika Baddi" className="h-[490px] w-full object-cover object-[center_30%] sm:h-[570px]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080b14]/95 via-transparent to-[#080b14]/10" />
              <div className="absolute inset-x-0 bottom-0 p-7 sm:p-8">
                <p className="font-mono text-[10px] uppercase tracking-[.3em] text-[#c3caff]">Building with purpose</p>
                <p className="mt-2 text-2xl font-semibold tracking-tight text-white">Curious mind. Builder&apos;s mindset.</p>
                <p className="mt-2 text-sm text-white/65">Computer Science · Class of 2026</p>
              </div>
            </div>
            <div className="absolute -left-7 top-16 hidden items-center gap-3 rounded-2xl border border-white/15 bg-[#101629]/90 px-4 py-3 shadow-2xl backdrop-blur-xl sm:flex">
              <span className="flex size-9 items-center justify-center rounded-xl bg-indigo-400/15 text-[#b8c0ff]"><Terminal className="size-4" /></span>
              <span><span className="block text-xs font-semibold text-white">Backend focused</span><span className="mt-0.5 block text-[10px] text-white/45">APIs · Data · Systems</span></span>
            </div>
            <div className="absolute -right-5 bottom-28 hidden rounded-2xl border border-white/15 bg-[#17132a]/95 px-4 py-3 shadow-2xl backdrop-blur-xl sm:block">
              <p className="font-mono text-[10px] uppercase tracking-widest text-[#c8adff]">Currently exploring</p>
              <p className="mt-1 text-sm font-medium text-white">AI-powered products</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute -right-8 -top-8 -z-10 size-32 rounded-full border border-[#9b9fff]/20" />
          <div aria-hidden="true" className="absolute -bottom-10 -left-10 -z-10 size-40 rounded-full border border-[#b68cff]/15" />
        </motion.div>
      </div>
      <div className="mx-auto max-w-7xl px-6"><div className="h-px bg-gradient-to-r from-transparent via-[#8f9aff]/50 to-transparent" /></div>
    </section>
  )
}
