import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-12">
      <div className="mb-8 flex items-center gap-3">
        <Link
          href="/"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground transition hover:bg-secondary"
        >
          <ArrowLeft className="h-4 w-4" />
        </Link>

        <h1 className="text-3xl font-bold text-foreground">About Me</h1>
      </div>

      <div className="space-y-8">
        <p className="text-lg leading-8 text-muted-foreground">
          I&apos;m a detail-oriented System Developer focused on building
          automation and internal tools around Google products — Google Sheets,
          Google Apps Script, and AppSheet — along with web applications built
          with Next.js. I combine my background in data analysis and
          reporting with modern development to streamline business operations.
        </p>

        <section className="rounded-lg border border-border bg-card p-6 transition hover:shadow-md">
          <h2 className="mb-4 text-2xl font-bold text-foreground">
            Background
          </h2>
          <p className="leading-7 text-muted-foreground">
            I currently work as a System Developer at{' '}
            <span className="font-semibold text-foreground">
              Aqualife Cambodia
            </span>
            . My work includes building automation with Google Apps Script and AppSheet,
            developing full-stack web tools with Next.js and PostgreSQL,
            analyzing business data, and improving reporting and operational
            processes.
          </p>
        </section>

        <section className="rounded-lg border border-border bg-card p-6 transition hover:shadow-md">
          <h2 className="mb-4 text-2xl font-bold text-foreground">Skills</h2>

          <ul className="grid gap-3 text-muted-foreground md:grid-cols-2">
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Google Apps Script
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              AppSheet Apps & Workflows
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Google Sheets Automation
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Google Workspace Integration
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              System & Process Automation
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Next.js Development
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Database & SQL
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Realtime Systems & Job Queues
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Testing & Docker Deployment
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Data Analysis & Reporting
            </li>
          </ul>
        </section>

        <section className="rounded-lg border border-border bg-card p-6 transition hover:shadow-md">
          <h2 className="mb-4 text-2xl font-bold text-foreground">
            Approach
          </h2>
          <p className="leading-7 text-muted-foreground">
            My approach focuses on accuracy, clarity, and practical business
            value. I review data carefully, identify patterns and issues, build
            organized reports, and communicate insights that help management
            make better decisions.
          </p>
        </section>

        <section className="rounded-lg border border-border bg-card p-6 transition hover:shadow-md">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <h2 className="text-2xl font-bold text-foreground">
              What I&apos;m Building
            </h2>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-foreground">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
              In progress
            </span>
          </div>
          <p className="leading-7 text-muted-foreground">
            I&apos;m currently building a CRM and customer chat platform that
            connects to Telegram so teams can manage customer conversations
            from one dashboard. Messages arrive in realtime, and outbound
            replies go through a scheduled delivery queue. The system runs a
            Next.js web app, a separate TypeScript Telegram worker, and a
            PostgreSQL database as Docker services.
          </p>

          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              Realtime inbox with PostgreSQL LISTEN/NOTIFY and Server-Sent
              Events
            </li>
            <li className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              Background jobs and outbound message queue with pg-boss
            </li>
            <li className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              Secure login with NextAuth, bcrypt, and JWT sessions
            </li>
            <li className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              Monitoring with Sentry and Pino, tested with Vitest and
              Playwright
            </li>
          </ul>

          <div className="mt-5 flex flex-wrap gap-2">
            {[
              'Next.js 16',
              'TypeScript',
              'PostgreSQL 16',
              'Prisma',
              'Tailwind CSS 4',
              'pg-boss',
              'Redis',
              'Docker Compose',
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        <div className="rounded-lg border border-border bg-gradient-to-br from-card to-secondary p-6">
          <h3 className="mb-3 text-lg font-bold text-foreground">
            Let&apos;s Work Together
          </h3>
          <p className="mb-4 text-sm leading-6 text-muted-foreground">
            If you need automation for Google Sheets, an AppSheet app, a web
            tool, or a business process streamlined, I&apos;d be happy to
            discuss how I can help.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition hover:bg-primary/90"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </div>
  )
}