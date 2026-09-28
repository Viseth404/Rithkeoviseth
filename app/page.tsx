"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, BarChart3, FileSpreadsheet, Code } from "lucide-react"
import { FeaturedProjects } from "@/components/featured-projects"

export default function Home() {
  return (
    <>
      <section className="bg-gradient-to-b from-background to-secondary py-20 md:py-28">
        <div className="mx-auto grid max-w-4xl items-center gap-12 px-4 md:grid-cols-[1.3fr_0.7fr]">
          <div className="animate-in fade-in slide-in-from-left-4 duration-700">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-muted-foreground">
              System Developer & Automation Specialist
            </p>

            <h1 className="mb-6 text-4xl font-bold leading-tight text-foreground md:text-5xl">
              Hi, I&apos;m{" "}
              <span className="text-foreground">Rith Keo Viseth</span>
            </h1>

            <p className="mb-8 max-w-2xl text-lg leading-8 text-muted-foreground">
              I build automated systems around Google products — automating
              Google Sheets with Apps Script, creating mobile apps and
              workflows with AppSheet, and connecting Google Workspace tools —
              along with full-stack web applications built on Next.js.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition hover:bg-primary/90"
              >
                View My Work <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center rounded-lg border border-border bg-card px-6 py-3 font-medium text-foreground transition hover:bg-secondary"
              >
                Get In Touch
              </Link>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="animate-in fade-in slide-in-from-right-4 relative flex h-56 w-56 items-center justify-center rounded-full border border-border bg-card shadow-lg delay-150 duration-700">
              <div className="absolute inset-3 rounded-full border border-primary/40" />

              <Image
                src="/profile.png"
                alt="Rith Keo Viseth"
                width={192}
                height={192}
                className="h-48 w-48 rounded-full object-cover object-center"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-card py-20">
        <div className="mx-auto max-w-4xl px-4">
          <div className="animate-in fade-in duration-700">
            <h2 className="mb-4 text-center text-3xl font-bold text-foreground">
              Core Expertise
            </h2>

            <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
              Practical skills focused on system automation, Google product
              integration, full-stack web development, and business decision
              support.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="animate-in fade-in slide-in-from-bottom-4 rounded-lg border border-border p-6 duration-700 transition hover:-translate-y-1 hover:bg-secondary hover:shadow-md">
              <FileSpreadsheet className="mb-4 h-10 w-10 text-primary" />

              <h3 className="mb-2 text-lg font-bold text-foreground">
                Google & System Automation
              </h3>

              <p className="text-sm leading-6 text-muted-foreground">
                Automate Google Sheets with Apps Script, build mobile apps and
                workflows with AppSheet, and connect Google Workspace tools to
                streamline business processes.
              </p>
            </div>

            <div className="animate-in fade-in slide-in-from-bottom-4 rounded-lg border border-border p-6 delay-150 duration-700 transition hover:-translate-y-1 hover:bg-secondary hover:shadow-md">
              <Code className="mb-4 h-10 w-10 text-primary" />

              <h3 className="mb-2 text-lg font-bold text-foreground">
                Full-Stack Next.js
              </h3>

              <p className="text-sm leading-6 text-muted-foreground">
                Build full-stack web apps with Next.js, TypeScript, PostgreSQL,
                and Prisma, including realtime features, background job
                queues, secure login, and Docker deployment.
              </p>
            </div>

            <div className="animate-in fade-in slide-in-from-bottom-4 rounded-lg border border-border p-6 delay-300 duration-700 transition hover:-translate-y-1 hover:bg-secondary hover:shadow-md">
              <BarChart3 className="mb-4 h-10 w-10 text-primary" />

              <h3 className="mb-2 text-lg font-bold text-foreground">
                Data & Reporting
              </h3>

              <p className="text-sm leading-6 text-muted-foreground">
                Use Google Sheets, Excel, Python, Pandas, NumPy, Plotly,
                Streamlit, PostgreSQL, and SQL to clean, analyze, visualize,
                and extract business data.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FeaturedProjects />
    </>
  )
}