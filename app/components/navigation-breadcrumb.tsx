"use client"

import { usePathname } from "next/navigation"
import { useTranslation } from "@/app/hooks/use-translation"
import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"

interface BreadcrumbItem {
  href: string
  labelKey: string
  isActive?: boolean
}

export default function NavigationBreadcrumb() {
  const pathname = usePathname()
  const { t } = useTranslation()

  // Define route mappings
  const routeMap: Record<string, string> = {
    "/": "navigation.home",
    "/about": "navigation.about",
    "/products": "navigation.products",
    "/cold-forming": "navigation.coldForming",
    "/industries": "navigation.industries",
    "/certificates": "navigation.certificates",
    "/gallery": "navigation.gallery",
    "/contact": "navigation.contact",
    "/blog": "navigation.blog",
  }

  // Don't show breadcrumb on home page
  if (pathname === "/" || pathname === "/contact") {
    return null
  }

  // Handle blog post pages
  const isBlogPost = pathname.startsWith("/blog/") && pathname !== "/blog"

  const breadcrumbItems: BreadcrumbItem[] = [{ href: "/", labelKey: "navigation.home" }]

  if (isBlogPost) {
    breadcrumbItems.push(
      { href: "/blog", labelKey: "navigation.blog" },
      { href: pathname, labelKey: "blogPage.currentPost", isActive: true },
    )
  } else {
    const currentPageLabel = routeMap[pathname]
    if (currentPageLabel) {
      breadcrumbItems.push({
        href: pathname,
        labelKey: currentPageLabel,
        isActive: true,
      })
    }
  }

  return (
    <nav className="bg-light-gray border-b border-medium-gray py-3">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbItems.map((item, index) => (
            <li key={item.href} className="flex items-center">
              {index > 0 && <ChevronRight className="h-4 w-4 text-gray-400 mx-2" />}
              {item.isActive ? (
                <span className="text-industrial-blue font-medium flex items-center">
                  {index === 0 && <Home className="h-4 w-4 mr-1" />}
                  {item.labelKey === "blogPage.currentPost" ? "Current Post" : t(item.labelKey)}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="text-gray-600 hover:text-industrial-blue transition-colors flex items-center"
                >
                  {index === 0 && <Home className="h-4 w-4 mr-1" />}
                  {t(item.labelKey)}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  )
}
