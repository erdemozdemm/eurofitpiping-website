"use client"

import { useLanguage } from "@/app/context/language-context"
import { useTranslation } from "@/app/hooks/use-translation"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe, ChevronDown } from "lucide-react"

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage()
  const { t } = useTranslation()

  const languages: { code: "en" | "tr" | "nl"; nameKey: string; indicator: string; flag: string }[] = [
    { code: "tr", nameKey: "languages.tr", indicator: "TR", flag: "🇹🇷" },
    { code: "en", nameKey: "languages.en", indicator: "ENG", flag: "🇺🇸" },
    { code: "nl", nameKey: "languages.nl", indicator: "NL", flag: "🇳🇱" },
  ]

  const currentLanguage = languages.find((lang) => lang.code === locale) || languages[0]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="flex items-center space-x-2 px-3 py-2 h-auto text-gray-600 hover:text-industrial-blue hover:bg-gray-50 transition-colors"
          aria-label={`Mevcut dil: ${t(currentLanguage.nameKey)}. Dil değiştirmek için tıklayın`}
        >
          <Globe className="h-4 w-4 flex-shrink-0" />
          <div className="flex items-center space-x-1">
            <span className="text-sm font-medium whitespace-nowrap">{currentLanguage.indicator}</span>
            <ChevronDown className="h-3 w-3 flex-shrink-0" />
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLocale(lang.code)}
            className={`flex items-center justify-between cursor-pointer ${
              locale === lang.code ? "font-semibold bg-industrial-blue/10 text-industrial-blue" : ""
            }`}
          >
            <div className="flex items-center space-x-3">
              <span className="text-lg" role="img" aria-label={`${lang.nameKey} bayrağı`}>
                {lang.flag}
              </span>
              <div className="flex flex-col">
                <span className="text-sm font-medium">{t(lang.nameKey)}</span>
                <span className="text-xs text-gray-500">{lang.indicator}</span>
              </div>
            </div>
            {locale === lang.code && (
              <div className="w-2 h-2 bg-industrial-blue rounded-full flex-shrink-0" aria-hidden="true" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
