"use client"

import type React from "react"
import { useTranslation } from "@/app/hooks/use-translation"
import SectionTitle from "@/app/components/section-title"
import GallerySection from "@/app/components/gallery-section"
import PageWrapper from "@/app/components/page-wrapper"
import Image from "next/image"
import { CheckCircle, TrendingUp, Target } from "lucide-react"
import { motion } from "framer-motion"

interface TimelineItemProps {
  year: string
  titleKey: string
  descriptionKey: string
}

const TimelineItem: React.FC<TimelineItemProps> = ({ year, titleKey, descriptionKey }) => {
  const { t } = useTranslation()
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative pl-8 sm:pl-32 py-6 group"
    >
      <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:w-px before:bg-medium-gray sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-industrial-blue after:border-4 after:box-content after:border-light-gray after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
        <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-industrial-blue bg-industrial-blue/10 rounded-full">
          {year}
        </time>
        <div className="text-xl font-bold text-dark-gray-text">{t(titleKey)}</div>
      </div>
      <div className="text-gray-600 sm:pl-[7.5rem]">{t(descriptionKey)}</div>
    </motion.div>
  )
}

export default function AboutPage() {
  const { t } = useTranslation()

  const timelineEvents = [
    { year: "2017", titleKey: "aboutPage.timeline.founded", descriptionKey: "aboutPage.timeline.foundedDesc" },
    { year: "2019", titleKey: "aboutPage.timeline.coldPress", descriptionKey: "aboutPage.timeline.coldPressDesc" },
    { year: "2022", titleKey: "aboutPage.timeline.expansion", descriptionKey: "aboutPage.timeline.expansionDesc" },
  ]

  const facilityImages = [
    {
      id: "about-facility-1",
      src: "/placeholder.svg?width=400&height=300",
      alt: "Eurofit Piping facility exterior",
      titleKey: "aboutPage.gallery.facility1",
    },
    {
      id: "about-facility-2",
      src: "/placeholder.svg?width=400&height=300",
      alt: "Production floor",
      titleKey: "aboutPage.gallery.facility2",
    },
    {
      id: "about-team-1",
      src: "/placeholder.svg?width=400&height=300",
      alt: "Our team",
      titleKey: "aboutPage.gallery.team1",
    },
    {
      id: "about-team-2",
      src: "/placeholder.svg?width=400&height=300",
      alt: "Engineering team",
      titleKey: "aboutPage.gallery.team2",
    },
  ]

  return (
    <PageWrapper>
      <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('images/about/about_timeline.png')" }}>
        <div className="absolute inset-0 bg-white bg-opacity-80 backdrop-blur-sm" />
        <div className="relative z-10 py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <SectionTitle title={t("aboutPage.title")} />
            </motion.div>

            {/* Timeline Section */}
            <section className="mb-16 md:mb-24">
              <div className="max-w-3xl mx-auto">
                {timelineEvents.map((event, index) => (
                  <TimelineItem
                    key={index}
                    year={event.year}
                    titleKey={event.titleKey}
                    descriptionKey={event.descriptionKey}
                  />
                ))}
              </div>
            </section>

            {/* What We Do Section */}
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16 md:mb-24"
            >
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-semibold text-industrial-blue mb-4">
                    {t("aboutPage.whatWeDoTitle")}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{t("aboutPage.whatWeDoContent")}</p>
                  <ul className="mt-6 space-y-3">
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Aluminum Fittings
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Stainless Steel Fittings
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" /> CUNI10FE Fittings
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Custom Parts Manufacturing
                    </li>
                  </ul>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Image
                    src="/images/about/whatwedone.png?width=400&height=300"
                    alt="Production Line 1"
                    width={400}
                    height={300}
                    className="rounded-lg shadow-md object-cover w-full h-64"
                  />
                  <Image
                    src="/images/about/whatwedone2.png?width=400&height=300"
                    alt="Production Line 2"
                    width={400}
                    height={300}
                    className="rounded-lg shadow-md object-cover w-full h-64 mt-8"
                  />
                </div>
              </div>
            </motion.section>

            {/* Mission & Vision Section */}
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-light-gray p-8 md:p-12 rounded-lg mb-16 md:mb-24"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center mb-3">
                    <Target className="h-8 w-8 text-industrial-blue mr-3" />
                    <h3 className="text-2xl font-semibold text-industrial-blue">{t("aboutPage.missionTitle")}</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{t("aboutPage.missionContent")}</p>
                </div>
                <div>
                  <div className="flex items-center mb-3">
                    <TrendingUp className="h-8 w-8 text-industrial-blue mr-3" />
                    <h3 className="text-2xl font-semibold text-industrial-blue">{t("aboutPage.visionTitle")}</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{t("aboutPage.visionContent")}</p>
                </div>
              </div>
            </motion.section>
          </div>

          {/* Gallery Section */}
          {/* <div className="relative z-10">
            <GallerySection
              title={t("aboutPage.galleryTitle")}
              subtitle={t("aboutPage.gallerySubtitle")}
              images={facilityImages}
            />
          </div> */}
        </div>
      </div>
    </PageWrapper>
  )
}
