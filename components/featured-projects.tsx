"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react"
import { A11y, Autoplay, Keyboard, Navigation, Pagination } from "swiper/modules"
import { supabase } from "@/lib/supabase-client"
import type { Project } from "@/lib/supabase-client"

import "swiper/css"
import "swiper/css/pagination"

export function FeaturedProjects() {
  const [projects, setProjects] = useState<Project[]>([])
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    setReduceMotion(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )

    const fetchProjects = async () => {
      const { data } = await supabase
        .from("projects")
        .select("*")
        .eq("is_published", true)
        .order("is_featured", { ascending: false })
        .order("created_at", { ascending: false })
        .limit(6)

      setProjects(data || [])
    }

    fetchProjects()
  }, [])

  if (projects.length === 0) return null

  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-4xl px-4">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <h2 className="mb-2 text-3xl font-bold text-foreground">
              Featured Projects
            </h2>
            <p className="text-muted-foreground">
              A few things I&apos;ve built recently.
            </p>
          </div>

          <div className="hidden gap-2 sm:flex">
            <button
              type="button"
              aria-label="Previous project"
              className="featured-prev flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition hover:bg-secondary disabled:opacity-40"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              aria-label="Next project"
              className="featured-next flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition hover:bg-secondary disabled:opacity-40"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <Swiper
          modules={[A11y, Autoplay, Keyboard, Navigation, Pagination]}
          className="featured-swiper !pb-12"
          spaceBetween={24}
          slidesPerView={1.1}
          breakpoints={{ 640: { slidesPerView: 2 } }}
          speed={reduceMotion ? 0 : 700}
          grabCursor
          keyboard={{ enabled: true }}
          navigation={{ prevEl: ".featured-prev", nextEl: ".featured-next" }}
          pagination={{ clickable: true, dynamicBullets: true }}
          autoplay={
            reduceMotion
              ? false
              : { delay: 4500, disableOnInteraction: false, pauseOnMouseEnter: true }
          }
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id} className="!h-auto py-2">
              <Link
                href={`/projects/${project.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card transition duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                {project.cover_image ? (
                  <div className="h-40 overflow-hidden bg-secondary">
                    <img
                      src={project.cover_image}
                      alt={project.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                ) : (
                  <div className="flex h-40 items-center justify-center bg-secondary">
                    <span className="text-sm text-muted-foreground">No image</span>
                  </div>
                )}

                <div className="flex flex-1 flex-col p-4">
                  {project.category && (
                    <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      {project.category}
                    </div>
                  )}

                  <h3 className="mb-2 font-bold text-foreground">
                    {project.title}
                  </h3>

                  <p className="line-clamp-3 text-sm leading-6 text-muted-foreground">
                    {project.description}
                  </p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-4 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition hover:gap-3"
          >
            View all projects <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
