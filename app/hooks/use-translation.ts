"use client" 

import { useLanguage } from "@/app/context/language-context"
import { get } from "lodash" // Make sure lodash is available

export const useTranslation = () => {
  const { translations } = useLanguage()

  const t = (key: string, fallback?: any): any => {
    const value = get(translations, key)
    if (value !== undefined) {
      return value // Return the actual value (could be string, array, object, etc.)
    }
    if (fallback !== undefined) {
      return fallback
    }
    // If the key is not found and no fallback, return the key itself.
    // This helps in identifying missing translations.
    // For arrays or objects, this might not be the desired behavior if the key is missing,
    // so ensure keys for complex types always exist in your translation files.
    return key
  }

  return { t }
}
