import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/app/context/language-context"
import Header from "@/app/components/header"
import Footer from "@/app/components/footer"
import ScrollToTop from "@/app/components/scroll-to-top"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Eurofit Piping - Boru Bağlantı Elemanları Üreticisi",
  description:
    "Alüminyum, paslanmaz çelik ve CuNi10Fe boru bağlantı elemanları üreticisi. Rekabetçi ve hızlı üretim için soğuk şekillendirme pres teknolojisi.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Immediate scroll to top before any rendering
              if (typeof window !== 'undefined') {
                window.scrollTo(0, 0);
                document.documentElement.scrollTop = 0;
                document.body.scrollTop = 0;
              }
              // Set default language to Turkish if not already set
              if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
                const storedLocale = localStorage.getItem('eurofit_locale');
                if (!storedLocale) {
                  localStorage.setItem('eurofit_locale', 'tr');
                }
              }
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <LanguageProvider>
            <ScrollToTop />
            <div className="flex flex-col min-h-screen bg-white text-dark-gray-text">
              <Header />
              <main className="flex-grow">{children}</main>
              <Footer />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
