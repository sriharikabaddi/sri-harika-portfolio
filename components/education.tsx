import { Award, GraduationCap } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/reveal'
import { education } from '@/lib/portfolio-data'

export function Education() {
  return (
    <section id="education" aria-labelledby="education-title" className="mx-auto max-w-6xl px-6 py-28 md:py-36">
      <SectionHeading
        id="education-title"
        index="04"
        eyebrow="Education"
        title="Foundations in computer science, sharpened by building."
      />

      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <Reveal className="h-full">
          <article className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card/70 p-7 md:p-10">
            <div aria-hidden="true" className="absolute inset-x-10 top-0 h-px hairline-gradient" />
            <div className="flex flex-wrap items-start justify-between gap-4">
              <span className="flex size-11 items-center justify-center rounded-xl border border-border bg-navy text-iris">
                <GraduationCap className="size-5" aria-hidden="true" />
              </span>
              <span className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted-foreground">
                {education.period}
              </span>
            </div>
            <h3 className="mt-8 text-balance text-2xl font-medium tracking-tight text-foreground md:text-3xl">
              {education.degree}
            </h3>
            <p className="mt-2 text-foreground/70">{education.school}</p>
            <p className="mt-5 max-w-lg leading-relaxed text-muted-foreground">{education.detail}</p>

            <div className="mt-auto pt-10">
              <h4 className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Relevant coursework
              </h4>
              <ul className="mt-4 flex flex-wrap gap-2">
                {education.coursework.map((course) => (
                  <li
                    key={course}
                    className="rounded-full border border-border bg-white/[0.02] px-3.5 py-1.5 text-sm text-foreground/75"
                  >
                    {course}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </Reveal>

        <Reveal delay={0.1} className="h-full">
          <article className="flex h-full flex-col rounded-3xl border border-border bg-card/70 p-7 md:p-10">
            <div className="flex items-center gap-3">
              <span className="flex size-11 items-center justify-center rounded-xl border border-border bg-navy text-violet">
                <Award className="size-5" aria-hidden="true" />
              </span>
              <h3 className="text-lg font-medium tracking-tight text-foreground">Certifications</h3>
            </div>
            <ol className="relative mt-8 flex flex-col gap-7 border-l border-border pl-6">
              {education.certifications.map((cert) => (
                <li key={cert.name} className="relative">
                  <span
                    aria-hidden="true"
                    className="absolute -left-[29px] top-1.5 size-2 rounded-full bg-gradient-to-br from-iris to-violet ring-4 ring-card"
                  />
                  <p className="font-medium tracking-tight text-foreground">{cert.name}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {cert.issuer} <span aria-hidden="true">·</span> {cert.year}
                  </p>
                </li>
              ))}
            </ol>
          </article>
        </Reveal>
      </div>

      <div className="mt-8">
        <Reveal>
          <article className="rounded-3xl border border-border bg-card/70 p-7 md:p-10">
            <h3 className="text-lg font-medium tracking-tight text-foreground">Internship experience</h3>
            <div className="mt-7 grid gap-7 md:grid-cols-2">
              <div>
                <p className="font-medium text-foreground">Tech Meridian Pvt. Ltd.</p>
                <p className="mt-1 text-sm text-muted-foreground">Technical Trainee Intern · May 2025</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Worked on an approval workflow integration using Microsoft Power Automate for Dynamics 365 Finance and Operations, including automated approvals, email notifications, and Microsoft Teams integration.</p>
              </div>
              <div>
                <p className="font-medium text-foreground">Bluestock Fintech</p>
                <p className="mt-1 text-sm text-muted-foreground">Software Development Engineer Intern · May–June 2025</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Completed a Software Development Engineer internship. Project-specific responsibilities are not listed here because they have not yet been verified.</p>
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  )
}
