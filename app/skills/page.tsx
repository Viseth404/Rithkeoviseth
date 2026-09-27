import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const skillCategories = [
  {
    name: "Automation & Google Products",
    skills: [
      "Google Apps Script",
      "Google Sheets Automation",
      "AppSheet Apps",
      "Google Workspace",
      "Process Automation",
      "Workflows",
    ],
    level: 90,
  },
  {
    name: "Web Development",
    skills: [
      "TypeScript",
      "Next.js 16 (App Router)",
      "Tailwind CSS 4",
      "shadcn/ui",
      "Base UI",
      "Lucide Icons",
      "Recharts",
      "Supabase",
    ],
    level: 80,
  },
  {
    name: "Backend & System Architecture",
    skills: [
      "NextAuth (Credentials + JWT)",
      "bcrypt Password Hashing",
      "Telegram Client Integration",
      "Background Workers",
      "pg-boss Job Queues & Scheduling",
      "PostgreSQL LISTEN/NOTIFY",
      "Server-Sent Events (Realtime)",
      "Upstash Redis Caching",
      "Sharp Image Processing",
    ],
    level: 75,
  },
  {
    name: "Data Analysis & Reporting",
    skills: [
      "Google Sheets",
      "Microsoft Excel",
      "Advanced Formulas",
      "XLOOKUP / VLOOKUP",
      "Pivot Tables",
      "Conditional Formatting",
      "Charts & Dashboards",
      "Financial Reporting",
    ],
    level: 85,
  },
  {
    name: "Python & Data Analytics",
    skills: ["Python", "Pandas", "NumPy", "Plotly", "Streamlit"],
    level: 75,
  },
  {
    name: "Database & SQL",
    skills: [
      "SQL",
      "PostgreSQL 16",
      "Prisma ORM",
      "Migrations",
      "Indexing",
      "Joins",
      "Views",
      "Data Extraction",
    ],
    level: 75,
  },
  {
    name: "Testing, DevOps & Observability",
    skills: [
      "Docker",
      "Docker Compose",
      "Vitest",
      "Node Test Runner",
      "Playwright E2E",
      "Sentry",
      "Pino Structured Logging",
    ],
    level: 70,
  },
];
export default function SkillsPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-12">
      <div className="mb-8 flex items-center gap-3">
        <Link
          href="/"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground transition hover:bg-secondary"
        >
          <ArrowLeft className="h-4 w-4" />
        </Link>

        <h1 className="text-3xl font-bold text-foreground">
          Skills & Expertise
        </h1>
      </div>

      <div className="grid gap-8">
        {skillCategories.map((category) => (
          <div
            key={category.name}
            className="rounded-lg border border-border bg-card p-6 transition hover:shadow-md"
          >
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-bold text-foreground">
                {category.name}
              </h2>
              <span className="text-sm font-semibold text-foreground">
                {category.level}%
              </span>
            </div>

            <div className="mb-6 h-2 w-full rounded-full bg-secondary">
              <div
                className="h-2 rounded-full bg-gradient-to-r from-primary/70 to-primary transition-all"
                style={{ width: `${category.level}%` }}
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-border bg-background px-3 py-1 text-sm font-medium text-foreground transition hover:bg-secondary"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-lg border border-border bg-card p-6 transition hover:shadow-md">
        <h3 className="mb-3 text-lg font-bold text-foreground">
          Core Competencies
        </h3>

        <div className="grid gap-3 text-sm text-muted-foreground md:grid-cols-2">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Google Apps Script
          </div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            AppSheet Apps & Workflows
          </div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Google Sheets Automation
          </div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Google Workspace Integration
          </div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            System & Process Automation
          </div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Next.js Development
          </div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Database & SQL
          </div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Workers, Job Queues & Realtime Systems
          </div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Testing & Docker Deployment
          </div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Data Analysis & Reporting
          </div>
        </div>
      </div>
    </div>
  );
}
