'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLayoutEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { ThemeToggle } from '@/components/ui/theme-toggle'

const navLinks = [
  { href: '/projects', label: 'Projects' },
  { href: '/skills', label: 'Skills' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  // { href: '/admin/login', label: 'Admin' },
]

export function Header() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({})
  const [indicator, setIndicator] = useState<{ left: number; width: number } | null>(null)
  const [animateIndicator, setAnimateIndicator] = useState(false)

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + '/')
  const activeHref = navLinks.find((link) => isActive(link.href))?.href

  // Move the pill under the active link; skip the transition on first paint so it doesn't slide in from 0
  useLayoutEffect(() => {
    const el = activeHref ? linkRefs.current[activeHref] : null
    setIndicator(el ? { left: el.offsetLeft, width: el.offsetWidth } : null)
    if (el && !animateIndicator) requestAnimationFrame(() => setAnimateIndicator(true))
  }, [activeHref, animateIndicator])

  if (pathname.startsWith('/admin')) return null

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-foreground transition hover:text-primary"
        >
          Portfolio
        </Link>

        <div className="relative hidden items-center gap-1 md:flex">
          <span
            aria-hidden
            className={`absolute top-1/2 h-9 -translate-y-1/2 rounded-lg bg-primary ${
              animateIndicator
                ? 'transition-[left,width,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none'
                : ''
            }`}
            style={{
              left: indicator?.left ?? 0,
              width: indicator?.width ?? 0,
              opacity: indicator ? 1 : 0,
            }}
          />
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              ref={(el) => {
                linkRefs.current[link.href] = el
              }}
              className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                isActive(link.href)
                  ? 'text-primary-foreground'
                  : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="ml-2">
            <ThemeToggle />
          </div>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="inline-flex items-center justify-center rounded-lg border border-border p-2 text-foreground transition hover:bg-secondary md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-background px-4 pb-4 pt-2 md:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 flex items-center gap-2 border-t border-border pt-2">
              <span className="text-sm text-muted-foreground">Theme</span>
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
