import { ArrowUp } from 'lucide-react'
import { profile } from '@/lib/portfolio-data'

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 py-10 text-sm text-muted-foreground sm:flex-row sm:items-center">
        <p>
          © {new Date().getFullYear()} {profile.name}. Designed & built with care.
        </p>
        <a href="#top" className="group inline-flex items-center gap-2 transition-colors hover:text-foreground">
          Back to top
          <ArrowUp className="size-4 transition-transform group-hover:-translate-y-0.5" aria-hidden="true" />
        </a>
      </div>
    </footer>
  )
}
