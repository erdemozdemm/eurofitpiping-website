"use client";

import Link from "next/link";
import { useTranslation } from "@/app/hooks/use-translation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, ShoppingCart, Settings, MessageSquare, Download } from "lucide-react";
import Image from "next/image";
import SectionTitle from "./components/section-title";
import PageWrapper from "./components/page-wrapper";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function HomePage() {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      router.push(`/products?search=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  const ctaCards = [
    {
      titleKey: "homepage.ourProducts",
      href: "/products",
      icon: <ShoppingCart className="h-8 w-8 text-industrial-blue mb-4" />,
    },
    {
      titleKey: "homepage.whyColdPress",
      href: "/cold-forming",
      icon: <Settings className="h-8 w-8 text-industrial-blue mb-4" />,
    },
    {
      titleKey: "homepage.contactUs",
      href: "/contact",
      icon: <MessageSquare className="h-8 w-8 text-industrial-blue mb-4" />,
    },
  ];

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative bg-light-gray py-24 md:py-32 lg:py-40">
        <div className="absolute inset-0">
          <Image
            src="/images/home/home_bg_2.png"
            alt="Eurofit Piping team members gathered together in a modern office setting"
            layout="fill"
            objectFit="cover"
            className="opacity-250"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/85 to-white/60"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* 🔍 Search Bar */}
          {/* <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center -mt-20 mb-8">
            <div className="relative max-w-2xl mx-auto flex items-center">
              <input
                type="text"
                placeholder={t("homepage.searchPlaceholder") || "Search by material, size or name"}
                className="w-full pl-5 pr-40 py-3 rounded-full shadow-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-industrial-blue text-gray-800 text-sm md:text-base transition duration-200"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Button
                onClick={handleSearch}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-2 rounded-full bg-industrial-blue text-white hover:bg-blue-800 transition duration-200"
              >
                🔍 {t("homepage.searchButton") || "Search"}
              </Button>
            </div>
          </div> */}

          {/* Main Title */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-industrial-blue mb-4 leading-snug tracking-tight">
            {t("homepage.onlyColdFormerInTurkey")}
          </h2>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-dark-gray-text mb-6 leading-tight tracking-tight">
            {t("homepage.heroTitle")}
          </h1>

          {/* Subtitle */}
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-700 mb-8 tracking-wide">
            {t("homepage.sinceTitle")}
          </p>

          {/* Supporting Text */}
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed">
            {t("homepage.heroSubtitle")}
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-industrial-blue text-white hover:bg-opacity-90 text-lg px-8 py-4 h-auto"
            >
              <Link href="/about">
                {t("homepage.learnMore")} <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-industrial-blue text-industrial-blue hover:bg-industrial-blue hover:text-white text-lg px-8 py-4 h-auto"
            >
              <Link href="/catalog.pdf" target="_blank" rel="noopener noreferrer">
                {t("homepage.downloadCatalog")} <Download className="ml-3 h-6 w-6" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action Cards Section */}
      <motion.section
        className="py-16 md:py-24 bg-white"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ctaCards.map((card) => (
              <Card
              key={card.titleKey}
              className="group bg-white/60 backdrop-blur-lg border border-white/30 rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 hover:scale-[1.03] transform transition-all duration-300 cursor-pointer"
            >
              <CardHeader className="flex items-center flex-col">
                <div className="bg-industrial-blue/10 rounded-full p-4 mb-4 group-hover:scale-110 group-hover:bg-industrial-blue/20 transition-transform duration-300">
                  {card.icon}
                </div>
                <CardTitle className="text-2xl font-semibold text-industrial-blue text-center">
                  {t(card.titleKey)}
                </CardTitle>
              </CardHeader>

              <CardContent className="text-center">
                <Button
                  asChild
                  variant="outline"
                  className="mt-4 border-industrial-blue text-industrial-blue group-hover:bg-industrial-blue group-hover:text-white transition duration-300"
                >
                  <Link href={card.href}>
                    {t("homepage.learnMore")} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            ))}
          </div>
        </div>
      </motion.section>

      {/* Companies We Worked With Section */}
      <motion.section
        className="py-16 md:py-24 bg-white"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Trusted by Leading Companies" subtitle="Here are some of our valued partners" />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 items-center justify-center text-center">
            {["ford", "siemens", "bosch", "tüv", "petkim", "thy", "arçelik", "vestel"].map((name, i) => (
              <div
                key={i}
                className="p-6 border border-medium-gray rounded-lg bg-white hover:shadow-lg transition-shadow"
              >
                <Image
                  src={`/logos/${name}.svg`}
                  alt={`${name} logo`}
                  width={120}
                  height={80}
                  className="mx-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </motion.section>
    </PageWrapper>
  );
}
