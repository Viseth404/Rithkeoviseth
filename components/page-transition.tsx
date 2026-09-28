"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

// Same order as the header nav, so moving right in the nav slides in from the right
const pageOrder = ["/", "/projects", "/skills", "/about", "/contact"]

let lastIndex: number | null = null

function pageIndex(pathname: string) {
  const section = "/" + (pathname.split("/")[1] ?? "")
  const index = pageOrder.indexOf(section)
  return index === -1 ? pageOrder.length : index
}

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const index = pageIndex(pathname)

  const [direction] = useState<"forward" | "back" | null>(() => {
    if (lastIndex === null) return null // first load: no animation
    if (index === lastIndex) return pathname.split("/").length > 2 ? "forward" : "back"
    return index > lastIndex ? "forward" : "back"
  })

  useEffect(() => {
    lastIndex = index
  }, [index])

  if (pathname.startsWith("/admin")) return <>{children}</>

  return (
    <div className="overflow-x-clip">
      <div className={direction ? `page-slide-${direction}` : undefined}>{children}</div>
    </div>
  )
}
