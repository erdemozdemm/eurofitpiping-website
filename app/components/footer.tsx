"use client"

import Link from "next/link"
import { useTranslation } from "@/app/hooks/use-translation"
import LanguageSwitcher from "./language-switcher"
import { Mail, Phone, MapPin, Linkedin, Youtube, Instagram } from "lucide-react"
import Image from "next/image"
import { color } from "framer-motion"

export default function Footer() {
  const { t } = useTranslation()

  const quickLinks = [
    { href: "/", labelKey: "navigation.home" },
    { href: "/about", labelKey: "navigation.about" },
    { href: "/products", labelKey: "navigation.products" },
    { href: "/cold-forming", labelKey: "navigation.coldForming" },
    { href: "/industries", labelKey: "navigation.industries" },
    { href: "/certificates", labelKey: "navigation.certificates" },
    { href: "/contact", labelKey: "navigation.contact" },
    { href: "/blog", labelKey: "navigation.blog" },
  ]

  return (
    <footer className="bg-light-gray border-t border-medium-gray text-dark-gray-text">
      <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Logo & About */}
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Image src="images/eurofitlogo.png" alt="Eurofit Piping Logo" width={120} height={60} />
              <span className="font-bold text-2xl text-industrial-blue">Eurofit Piping</span>
            </Link>
            <p className="text-sm text-gray-600 mb-4">{t("homepage.heroSubtitle")}</p>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">Dil:</span>
              <LanguageSwitcher />
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-industrial-blue mb-4">{t("footer.quickLinks")}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-600 hover:text-industrial-blue transition-colors">
                    {t(link.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-industrial-blue mb-4">{t("footer.contactInfo")}</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-0.5 text-industrial-blue flex-shrink-0" />
                <ul className="space-y-1 text-sm">
  {t("footer.address", { returnObjects: true }).map((addr: string, i: number) => (
    <li key={i}>🏢 {addr}</li>
  ))}
</ul>
              </li>
              <li className="flex items-center">
<ul className="space-y-1 text-sm">
      <li className="flex items-start">
  <Phone className="w-5 h-5 mr-3 mt-1 text-industrial-blue flex-shrink-0" />
  <div className="space-y-1 text-sm text-gray-600">
    {t("footer.phones", { returnObjects: true }).map(
      (item: { label: string; number: string }, i: number) => (
        <div key={i}>
          <strong>{item.label}:</strong>{" "}
          <a href={`tel:${item.number}`} className="hover:underline">
            {item.number}
          </a>
        </div>
      )
    )}
  </div>
</li>
</ul>

              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-industrial-blue flex-shrink-0" />
                <a href={`mailto:${t("footer.email")}`} className="text-gray-600 hover:text-industrial-blue">
                  {t("footer.email")}
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="text-md font-semibold text-industrial-blue mb-2">{t("footer.socialMedia")}</h4>
              <div className="flex space-x-3">
                <a href="https://www.linkedin.com/company/eurofit-piping/about/?viewAsMember=true" aria-label="LinkedIn" className="text-gray-500 hover:text-industrial-blue">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Interactive Map */}
          <div>
            <h3 className="text-lg font-semibold text-industrial-blue mb-4">Konumumuz</h3>
            <div className="aspect-w-16 aspect-h-9 bg-medium-gray rounded-md overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3014.5234567890123!2d29.1833333!3d40.9000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDU0JzAwLjAiTiAyOcKwMTEnMDAuMCJF!5e0!3m2!1sen!2str!4v1234567890123!5m2!1sen!2str"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Eurofit Piping Kartal, İstanbul'daki Konumu"
                className="rounded-md"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-medium-gray pt-8 text-center text-sm text-gray-500">
          <p className="mb-2">&copy; {new Date().getFullYear()} Eurofit Piping. All rights reserved. Powered by <a href="https://novaprotech.com" className="text-blue-600 underline hover:text-blue-800"> Novaprotech</a>.</p>
        </div>
      </div>
    </footer>
  )
}
