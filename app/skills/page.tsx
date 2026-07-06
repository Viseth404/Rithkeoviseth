import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const skillCategories = [
  {
    name: "Data Analysis & Reporting",
    skills: [
      "Microsoft Excel",
      "Advanced Formulas",
      "XLOOKUP / VLOOKUP",
      "Pivot Tables",
      "Conditional Formatting",
      "Charts & Dashboards",
      "Financial Reporting",
    ],
    level: 95,
  },
  {
    name: "Python & Data Analytics",
    skills: ["Python", "Pandas", "NumPy", "Plotly", "Streamlit"],
    level: 80,
  },
  {
    name: "Web Development",
    skills: ["TypeScript", "React", "Next.js", "Supabase"],
    level: 70,
  },
  {
    name: "Database & SQL",
    skills: ["SQL", "PostgreSQL", "Joins", "Views", "Data Extraction"],
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
            Financial Reporting
          </div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Advanced Microsoft Excel
          </div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Pivot Tables & Dashboards
          </div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Python Data Analytics
          </div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Pandas, NumPy & Plotly
          </div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            PostgreSQL & SQL
          </div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Data Extraction & Cleaning
          </div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            React & Next.js Development
          </div>
        </div>
      </div>
    </div>
  );
}
