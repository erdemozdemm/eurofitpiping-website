"use client"

import { createContext, useState, useContext, useEffect, type ReactNode } from "react"
import en from "@/app/locales/en.json"
import tr from "@/app/locales/tr.json"
import nl from "@/app/locales/nl.json"

type Locale = "en" | "tr" | "nl"

interface LanguageContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  translations: any // Consider defining a more specific type for translations
}

const translationsMap = { en, tr, nl }

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  // Default to Turkish (TR) as the primary language
  const [locale, setLocaleState] = useState<Locale>("tr")

  useEffect(() => {
    // Check if user has previously selected a language preference
    const storedLocale = localStorage.getItem("eurofit_locale") as Locale | null
    if (storedLocale && ["en", "tr", "nl"].includes(storedLocale)) {
      setLocaleState(storedLocale)
    } else {
      // If no stored preference, ensure Turkish is set as default
      setLocaleState("tr")
      localStorage.setItem("eurofit_locale", "tr")
    }
  }, [])

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)
    localStorage.setItem("eurofit_locale", newLocale)
  }

  return (
    <LanguageContext.Provider value={{ locale, setLocale, translations: translationsMap[locale] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
