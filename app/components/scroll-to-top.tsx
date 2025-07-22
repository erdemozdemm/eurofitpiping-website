"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export default function ScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    // Scroll to top immediately when pathname changes
    window.scrollTo(0, 0)

    // Also ensure document.documentElement scrolls to top (for some browsers)
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0

    // Force a reflow to ensure scroll position is applied
    window.requestAnimationFrame(() => {
      window.scrollTo(0, 0)
    })
  }, [pathname])

  // Also handle initial page load
  useEffect(() => {
    // Ensure page starts at top on initial load
    const handleLoad = () => {
      window.scrollTo(0, 0)
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    }

    // If page is already loaded
    if (document.readyState === "complete") {
      handleLoad()
    } else {
      // Wait for page to load
      window.addEventListener("load", handleLoad)
      return () => window.removeEventListener("load", handleLoad)
    }
  }, [])

  return null
}
