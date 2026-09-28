import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Reveal } from "@/components/reveal";

const experience = [
  {
    role: "System Developer",
    company: "Aqualife Cambodia",
    period: "Sep 2026 – Present",
    current: true,
    points: [
      "Build automation with Google Apps Script and AppSheet to streamline business operations",
      "Develop full-stack web tools with Next.js and PostgreSQL",
      "Analyze business data and improve reporting and operational processes",
    ],
  },
  {
    role: "Financial Analyst",
    company: "Private Family Business – Digital Marketing & Tech Solution",
    period: "Jul 2024 – Sep 2026",
    current: false,
    points: [
      "Analyzed financial data and prepared reports to support business decision-making",
      "Built Excel reports and dashboards with advanced formulas, Pivot Tables, and XLOOKUP",
      "Built Python automation tools and interactive dashboards with Pandas, Plotly, and Streamlit",
      "Monitored transactions, reconciliations, and budget utilization",
      "Worked with the IT team to improve reporting workflows and support ERP implementation",
    ],
  },
  {
    role: "Teacher (Volunteer, Seasonal)",
    company: "Center for Digital and Distance Education (CDDE)",
    period: "Nov 2023 – Apr 2024",
    current: false,
    points: [
      "Assisted students in digital learning programs across multiple schools",
      "Supported the rollout of distance education initiatives",
      "Promoted technology adoption and digital learning engagement",
    ],
  },
];

const education = [
  {
    title: "Bachelor of Computer Science and Engineering",
    school: "ACLEDA University of Business",
    period: "2023 – Present",
  },
  {
    title: "Advanced Excel Course",
    school: "ACLEDA University of Business",
    period: "Aug 2025 – Nov 2025",
  },
  {
    title: "Bachelor of Management (completed Year 2)",
    school: "Panha Chiet University",
    period: "2023 – 2024",
  },
];

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
          with Next.js. I combine my background in data analysis and reporting
          with modern development to streamline business operations.
        </p>

        <section className="rounded-lg border border-border bg-card p-6 transition hover:shadow-md">
          <h2 className="mb-4 text-2xl font-bold text-foreground">
            Background
          </h2>
          <p className="leading-7 text-muted-foreground">
            I currently work as a System Developer at{" "}
            <span className="font-semibold text-foreground">
              Aqualife Cambodia
            </span>
            . My work includes building automation with Google Apps Script and
            AppSheet, developing full-stack web tools with Next.js and
            PostgreSQL, analyzing business data, and improving reporting and
            operational processes.
          </p>
        </section>

        <section className="rounded-lg border border-border bg-card p-6 transition hover:shadow-md">
          <h2 className="mb-6 text-2xl font-bold text-foreground">
            Experience
          </h2>

          <ol className="relative space-y-8 border-l border-border pl-6">
            {experience.map((job, index) => (
              <li key={job.company} className="relative">
                <Reveal delay={index * 120}>
                  <span
                    className={`absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-card ${
                      job.current ? "bg-green-500" : "bg-muted-foreground"
                    }`}
                  />

                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="font-bold text-foreground">{job.role}</h3>
                    {job.period && (
                      <span className="text-sm text-muted-foreground">
                        {job.period}
                      </span>
                    )}
                  </div>

                  <p className="mb-3 text-sm font-medium text-muted-foreground">
                    {job.company}
                  </p>

                  <ul className="space-y-2 text-sm leading-6 text-muted-foreground">
                    {job.points.map((point) => (
                      <li key={point} className="flex gap-2">
                        <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </li>
            ))}
          </ol>
        </section>

        <section className="rounded-lg border border-border bg-card p-6 transition hover:shadow-md">
          <h2 className="mb-6 text-2xl font-bold text-foreground">
            Education
          </h2>

          <ul className="space-y-5">
            {education.map((item, index) => (
              <li key={item.title}>
                <Reveal delay={index * 120}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="font-bold text-foreground">{item.title}</h3>
                    <span className="text-sm text-muted-foreground">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.school}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-lg border border-border bg-card p-6 transition hover:shadow-md">
          <h2 className="mb-4 text-2xl font-bold text-foreground">Approach</h2>
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
            <span className="inline-flex items-center gap-1.5 rounded-full border border-green-200 bg-green-50 px-3 py-1 text-xs font-medium text-green-700 dark:border-green-500/30 dark:bg-green-500/10 dark:text-green-400">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
              In progress
            </span>
          </div>
          <p className="leading-7 text-muted-foreground">
            I&apos;m currently building a CRM and Customer Chat platform that
            connects to Telegram so teams can manage customer conversations from
            one dashboard. Messages arrive in realtime, and outbound replies go
            through a scheduled delivery queue. The system runs a Next.js web
            app, a separate TypeScript Telegram worker, and a PostgreSQL
            database as Docker services.
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
              Monitoring with Sentry and Pino, tested with Vitest and Playwright
            </li>
          </ul>

          <div className="mt-5 flex flex-wrap gap-2">
            {[
              "Next.js 16",
              "TypeScript",
              "PostgreSQL 16",
              "Prisma",
              "Tailwind CSS 4",
              "pg-boss",
              "Redis",
              "Docker Compose",
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
  );
}
