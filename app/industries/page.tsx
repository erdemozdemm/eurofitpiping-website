"use client"
import { useTranslation } from "@/app/hooks/use-translation"
import SectionTitle from "@/app/components/section-title"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import { motion } from "framer-motion"


const industriesData = [
  {
    key: "maritime",
    imageSrc: "/images/industries/maritime.png",
  },
  {
    key: "hvac",
    imageSrc: "/images/industries/hvac.png",
  },
  {
    key: "industrial",
    imageSrc: "/images/industries/construction.png",
  },
  {
    key: "oilAndGas",
    imageSrc: "/images/industries/oil&gas.png",
  },
  {
    key: "renewable",
    imageSrc: "/images/industries/renewable.png",
  },
]

export default function IndustriesPage() {
  const { t } = useTranslation()

  return (
    <div className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title={t("industriesPage.title")} subtitle={t("industriesPage.subtitle")} />

        <div className="space-y-16">
  {industriesData.map((industry, index) => (
    <motion.div
      key={industry.key}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden shadow-sm hover:shadow-xl rounded-lg bg-white"
      >
        <div className="grid md:grid-cols-2 items-center group">
          {/* Image container with zoom-in effect */}
          <div
            className={`relative h-64 md:h-full overflow-hidden ${
              index % 2 === 1 ? "md:order-2" : ""
            }`}
          >
            <motion.div
              className="w-full h-full"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.4 }}
            >
              <Image
                src={industry.imageSrc}
                alt={t(`industriesPage.industries.${industry.key}.title`)}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500"
              />
            </motion.div>
          </div>

          {/* Text content */}
          <div className="p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-semibold text-industrial-blue mb-4">
              {t(`industriesPage.industries.${industry.key}.title`)}
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {t(`industriesPage.industries.${industry.key}.description`)}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  ))}
</div>

      </div>
    </div>
  )
}
