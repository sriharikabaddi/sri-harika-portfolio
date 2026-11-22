import { Gauge, ShieldCheck, Sparkles } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/reveal'

const principles = [
  {
    icon: ShieldCheck,
    title: 'Reliability first',
    body: 'Clear contracts, explicit failure modes, and tests that describe behaviour rather than implementation.',
  },
  {
    icon: Gauge,
    title: 'Practical problem solving',
    body: 'I focus on understanding the requirement, choosing suitable tools, and building features that solve the intended problem.',
  },
  {
    icon: Sparkles,
    title: 'Learning by building',
    body: 'I strengthen my understanding by applying concepts in projects, testing features, and improving the implementation step by step.',
  },
]

const facts = [
  { value: '8.5/10', label: 'B.Tech CGPA' },
  { value: '4', label: 'Featured projects' },
  { value: '2026', label: 'Computer Science graduate' },
]

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="mx-auto max-w-6xl px-6 py-28 md:py-36">
      <SectionHeading
        id="about-title"
        index="01"
        eyebrow="About"
        title={
          <>
            Engineering the parts of software <span className="text-muted-foreground">people never see —</span> but
            always feel.
          </>
        }
      />

      <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <Reveal className="flex flex-col gap-6 text-pretty leading-relaxed text-foreground/75 md:text-lg">
          <p>
            {"I'm Sri Harika Baddi, a 2026 Computer Science graduate interested in software engineering, backend development, and practical AI integration. I enjoy building useful web applications, connecting APIs, and working across the frontend and backend to solve real problems."}
          </p>
          <p>
            My project experience includes Java and Spring Boot backend development, React applications, database integration, and using the Google Gemini API to add AI-powered features. I'm continuing to strengthen my software engineering fundamentals and backend skills.
          </p>
          <dl className="mt-6 grid grid-cols-3 gap-6 border-t border-border pt-8">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className="sr-only">{fact.label}</dt>
                <dd className="text-3xl font-medium tracking-tight text-foreground md:text-4xl">{fact.value}</dd>
                <dd className="mt-2 text-xs leading-snug text-muted-foreground md:text-sm">{fact.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={0.1}>
        <ul className="flex flex-col gap-4">
          {principles.map((p) => (
              <li key={p.title} className="group flex gap-5 rounded-2xl border border-border bg-card/60 p-6 transition-colors hover:border-white/15 hover:bg-card">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-border bg-navy text-iris transition-colors group-hover:text-violet">
                  <p.icon className="size-[18px]" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-medium tracking-tight text-foreground">{p.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </div>
              </li>
          ))}
        </ul>
        </Reveal>
      </div>
    </section>
  )
}
