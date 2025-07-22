"use client"

import type React from "react"
import { useTranslation } from "@/app/hooks/use-translation"
import SectionTitle from "@/app/components/section-title"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { Zap, Target, Gem, Gauge } from "lucide-react"
import { motion } from "framer-motion"

const BenefitCard = ({
  icon,
  titleKey,
  contentKey,
}: { icon: React.ReactNode; titleKey: string; contentKey: string }) => {
  const { t } = useTranslation()
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card className="text-center bg-white">
        <CardHeader>
          <div className="mx-auto bg-industrial-blue/10 rounded-full p-3 w-fit mb-4">{icon}</div>
          <CardTitle className="text-xl font-semibold text-industrial-blue">{t(titleKey)}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">{t(contentKey)}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

const ComparisonRow = ({
  labelKey,
  coldValueKey,
  hotValueKey,
}: { labelKey: string; coldValueKey: string; hotValueKey: string }) => {
  const { t } = useTranslation()
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="grid grid-cols-3 items-center text-center py-3 border-b border-medium-gray last:border-b-0"
    >
      <p className="font-semibold text-gray-700">{t(labelKey)}</p>
      <p className="text-green-600 font-medium">{t(coldValueKey)}</p>
      <p className="text-orange-600 font-medium">{t(hotValueKey)}</p>
    </motion.div>
  )
}

export default function ColdFormingPage() {
  const { t } = useTranslation()

  const benefits = [
    {
      icon: <Target className="h-8 w-8 text-industrial-blue" />,
      titleKey: "coldFormingPage.benefits.precision.title",
      contentKey: "coldFormingPage.benefits.precision.content",
    },
    {
      icon: <Zap className="h-8 w-8 text-industrial-blue" />,
      titleKey: "coldFormingPage.benefits.speed.title",
      contentKey: "coldFormingPage.benefits.speed.content",
    },
    {
      icon: <Gem className="h-8 w-8 text-industrial-blue" />,
      titleKey: "coldFormingPage.benefits.integrity.title",
      contentKey: "coldFormingPage.benefits.integrity.content",
    },
    {
      icon: <Gauge className="h-8 w-8 text-industrial-blue" />,
      titleKey: "coldFormingPage.benefits.surface.title",
      contentKey: "coldFormingPage.benefits.surface.content",
    },
  ]

  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/about/about_timeline.png')" }}
    >
      <div className="absolute inset-0 bg-white bg-opacity-80 backdrop-blur-sm" />

      <div className="relative z-10 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle title={t("coldFormingPage.title")} subtitle={t("coldFormingPage.subtitle")} />
          </motion.div>

          {/* What is Cold Press Forming? Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16 md:mb-24"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center bg-white p-8 rounded-lg shadow-sm">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl md:text-3xl font-semibold text-industrial-blue mb-4">
                  {t("coldFormingPage.whatIs.title")}
                </h3>
                <p className="text-gray-700 leading-relaxed">{t("coldFormingPage.whatIs.content")}</p>
              </div>
              <div className="order-1 md:order-2">
                <Image
                  src="/images/cold forming/cold_forming_machine.png?width=500&height=350"
                  alt="Cold press forming machine"
                  width={500}
                  height={350}
                  className="rounded-lg shadow-md object-cover w-full"
                />
              </div>
            </div>
          </motion.section>

          {/* Benefits Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16 md:mb-24"
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-industrial-blue text-center mb-8">
              {t("coldFormingPage.benefits.title")}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <BenefitCard
                  key={index}
                  icon={benefit.icon}
                  titleKey={benefit.titleKey}
                  contentKey={benefit.contentKey}
                />
              ))}
            </div>
          </motion.section>

          {/* Infographic Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16 md:mb-24"
          >
            <Card className="max-w-4xl mx-auto shadow-lg">
              <CardHeader className="text-center bg-gray-50 rounded-t-lg">
                <CardTitle className="text-2xl text-industrial-blue">{t("coldFormingPage.infographic.title")}</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="grid grid-cols-3 text-center font-bold text-lg p-4 bg-gray-100">
                  <span></span>
                  <span className="text-green-700">{t("coldFormingPage.infographic.cold")}</span>
                  <span className="text-orange-700">{t("coldFormingPage.infographic.hot")}</span>
                </div>
                <div className="p-4 md:p-6">
                  <ComparisonRow
                    labelKey="coldFormingPage.infographic.temperature"
                    coldValueKey="coldFormingPage.infographic.temperature_cold"
                    hotValueKey="coldFormingPage.infographic.temperature_hot"
                  />
                  <ComparisonRow
                    labelKey="coldFormingPage.infographic.precision"
                    coldValueKey="coldFormingPage.infographic.precision_cold"
                    hotValueKey="coldFormingPage.infographic.precision_hot"
                  />
                  <ComparisonRow
                    labelKey="coldFormingPage.infographic.strength"
                    coldValueKey="coldFormingPage.infographic.strength_cold"
                    hotValueKey="coldFormingPage.infographic.strength_hot"
                  />
                  <ComparisonRow
                    labelKey="coldFormingPage.infographic.cost"
                    coldValueKey="coldFormingPage.infographic.cost_cold"
                    hotValueKey="coldFormingPage.infographic.cost_hot"
                  />
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Competitive Edge Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="max-w-3xl mx-auto text-center bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl md:text-3xl font-semibold text-industrial-blue mb-4">
                {t("coldFormingPage.competitiveEdge.title")}
              </h3>
              <p className="text-gray-700 leading-relaxed">{t("coldFormingPage.competitiveEdge.content")}</p>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  )
}
