"use client"

import { useEffect, type ReactNode } from "react"

interface PageWrapperProps {
  children: ReactNode
  className?: string
}

export default function PageWrapper({ children, className = "" }: PageWrapperProps) {
  useEffect(() => {
    // Ensure page starts at top when component mounts
    const scrollToTop = () => {
      window.scrollTo(0, 0)
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    }

    // Immediate scroll
    scrollToTop()

    // Also scroll after a brief delay to handle any async content loading
    const timeoutId = setTimeout(scrollToTop, 100)

    return () => clearTimeout(timeoutId)
  }, [])

  return <div className={`scroll-to-top ${className}`}>{children}</div>
}
