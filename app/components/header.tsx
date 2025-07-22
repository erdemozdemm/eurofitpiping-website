"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTranslation } from "@/app/hooks/use-translation"
import LanguageSwitcher from "./language-switcher"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { useState } from "react"
import Image from "next/image"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function Header() {
  const { t } = useTranslation()
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Main navigation items (always visible in desktop)
  const mainNavItems = [
    { href: "/", labelKey: "navigation.home" },
    { href: "/about", labelKey: "navigation.about" },
    { href: "/products", labelKey: "navigation.products" },
    { href: "/cold-forming", labelKey: "navigation.coldForming" },
    { href: "/industries", labelKey: "navigation.industries" },
    { href: "/certificates", labelKey: "navigation.certificates" },
  ]

  // More dropdown items (Gallery and Blog only)
  const moreDropdownItems = [
    { href: "/gallery", labelKey: "navigation.gallery" },
    { href: "/blog", labelKey: "navigation.blog" },
  ]

  // All navigation items for mobile menu
  const allNavItems = [...mainNavItems, ...moreDropdownItems]

  // Function to handle mobile menu item click
  const handleMobileMenuClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
        <img src="/images/eurofitlogo.png" alt="Eurofit Piping Logo" width="120" height="60" />
          <span className="font-bold text-lg xl:text-xl text-industrial-blue whitespace-nowrap">Eurofit Piping</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 text-sm font-medium">
          {/* Main Navigation Items */}
          {mainNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-2 xl:px-3 py-2 rounded-md transition-colors whitespace-nowrap ${
                pathname === item.href
                  ? "text-industrial-blue font-semibold bg-industrial-blue/10"
                  : "text-gray-600 hover:text-industrial-blue hover:bg-gray-50"
              }`}
            >
              {t(item.labelKey)}
            </Link>
          ))}

          {/* More Dropdown */}
          {/* <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className={`px-2 xl:px-3 py-2 text-sm font-medium transition-colors whitespace-nowrap ${
                  moreDropdownItems.some((item) => pathname === item.href)
                    ? "text-industrial-blue font-semibold bg-industrial-blue/10"
                    : "text-gray-600 hover:text-industrial-blue hover:bg-gray-50"
                }`}
              >
                {t("navigation.more")} <ChevronDown className="ml-1 h-3 w-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-40">
              {moreDropdownItems.map((item) => (
                <DropdownMenuItem key={item.href} asChild>
                  <Link
                    href={item.href}
                    className={`w-full cursor-pointer ${
                      pathname === item.href ? "bg-industrial-blue/10 text-industrial-blue font-medium" : ""
                    }`}
                  >
                    {t(item.labelKey)}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu> */}
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-2 flex-shrink-0">
          <LanguageSwitcher />

          {/* Contact Us Button - Desktop */}
          <Button
            asChild
            variant="outline"
            size="sm"
            className="hidden lg:inline-flex border-industrial-blue text-industrial-blue hover:bg-industrial-blue hover:text-white transition-all duration-200 whitespace-nowrap"
          >
            <Link href="/contact">{t("homepage.contactUs")}</Link>
          </Button>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 right-0 bg-white shadow-lg py-4 z-40 border-t border-gray-100 max-h-[calc(100vh-4rem)] overflow-y-auto">
          <nav className="flex flex-col space-y-1 px-4">
            {/* Main Navigation Items */}
            {mainNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors py-3 px-4 rounded-md text-sm ${
                  pathname === item.href
                    ? "text-industrial-blue font-semibold bg-industrial-blue/10"
                    : "text-gray-700 hover:text-industrial-blue hover:bg-gray-50"
                }`}
                onClick={handleMobileMenuClick}
              >
                {t(item.labelKey)}
              </Link>
            ))}

            {/* More Section Separator */}
            {/* <div className="py-2">
              <div className="border-t border-gray-200 my-2"></div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-4 mb-2">
                {t("navigation.more")}
              </p>
            </div> */}

            {/* More Dropdown Items */}
            {/* {moreDropdownItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors py-3 px-4 rounded-md text-sm ${
                  pathname === item.href
                    ? "text-industrial-blue font-semibold bg-industrial-blue/10"
                    : "text-gray-700 hover:text-industrial-blue hover:bg-gray-50"
                }`}
                onClick={handleMobileMenuClick}
              >
                {t(item.labelKey)}
              </Link>
            ))} */}

            {/* Mobile Contact Button */}
            <div className="pt-4 border-t border-gray-100 mt-4">
              <Button
                asChild
                variant="outline"
                className="w-full border-industrial-blue text-industrial-blue hover:bg-industrial-blue hover:text-white"
                onClick={handleMobileMenuClick}
              >
                <Link href="/contact">{t("homepage.contactUs")}</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
