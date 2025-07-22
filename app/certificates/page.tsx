"use client"

import { useTranslation } from "@/app/hooks/use-translation"
import SectionTitle from "@/app/components/section-title"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Award, CheckSquare, FileText, Download } from "lucide-react"
import { motion } from "framer-motion"

interface CertificateItem {
  titleKey: string
  imageSrc: string
  downloadLink?: string
}

const isoCertificatesData: CertificateItem[] = [
  {
    titleKey: "certificatesPage.isoCertificates.iso9001",
    imageSrc: "/images/certificates/certificate1.png",
    downloadLink: "/placeholder-iso9001.pdf",
  },
  {
    titleKey: "certificatesPage.isoCertificates.iso14001",
    imageSrc: "/images/certificates/certificate2.png",
  },
]

export default function CertificatesPage() {
  const { t } = useTranslation()

  return (
    <div className="bg-light-gray py-16 md:py-24">
      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <SectionTitle title={t("certificatesPage.title")} subtitle={t("certificatesPage.subtitle")} />

        {/* ISO Certificates Section */}
        <motion.section
          className="mb-16 md:mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center mb-8">
            <Award className="h-10 w-10 text-industrial-blue mr-4" />
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold text-industrial-blue">
                {t("certificatesPage.isoCertificates.title")}
              </h3>
              <p className="text-gray-600 mt-1">{t("certificatesPage.isoCertificates.description")}</p>
            </div>
          </div>

         <div className="flex flex-wrap justify-center gap-8">
            {isoCertificatesData.map((cert, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <Card className="flex flex-col text-center items-center p-4 shadow-sm hover:shadow-lg h-full">

                 <CardHeader className="pb-4 w-full">
                    <div className="w-full h-[220px] flex items-center justify-center mb-4">
                      <Image
                        src={cert.imageSrc}
                        alt={t(cert.titleKey)}
                        width={300}
                        height={220}
                        className="object-contain max-h-full max-w-full"
                      />
                    </div>
                    <CardTitle className="text-lg font-semibold text-dark-gray-text">{t(cert.titleKey)}</CardTitle>
                  </CardHeader>

                  <CardContent className="flex-grow flex flex-col justify-end">
                    {cert.downloadLink ? (
                      <Button
                        asChild
                        variant="outline"
                        className="w-full border-industrial-blue text-industrial-blue hover:bg-industrial-blue hover:text-white"
                      >
                        <a href={cert.downloadLink} target="_blank" rel="noopener noreferrer">
                          {t("certificatesPage.isoCertificates.viewCertificate")} <Download className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    ) : (
                      <p className="text-sm text-gray-500 italic">Certificate (Planned)</p>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Compliance Standards Section */}
          <motion.section
            className="mb-16 md:mb-0"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="h-full bg-white shadow-sm">
              <CardHeader>
                <div className="flex items-center mb-2">
                  <CheckSquare className="h-8 w-8 text-industrial-blue mr-3" />
                  <CardTitle className="text-xl font-semibold text-industrial-blue">
                    {t("certificatesPage.complianceStandards.title")}
                  </CardTitle>
                </div>
                <CardDescription>{t("certificatesPage.complianceStandards.description")}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {(t("certificatesPage.complianceStandards.list") as string[]).map((standard, index) => (
                    <li key={index} className="flex items-start">
                      <FileText className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{standard}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.section>

          {/* Supported Specifications Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="h-full bg-white shadow-sm">
              <CardHeader>
                <div className="flex items-center mb-2">
                  <FileText className="h-8 w-8 text-industrial-blue mr-3" />
                  <CardTitle className="text-xl font-semibold text-industrial-blue">
                    {t("certificatesPage.supportedSpecifications.title")}
                  </CardTitle>
                </div>
                <CardDescription>{t("certificatesPage.supportedSpecifications.description")}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                  {(t("certificatesPage.supportedSpecifications.list") as string[]).map((spec, index) => (
                    <li key={index} className="flex items-center">
                      <CheckSquare className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{spec}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.section>
        </div>
      </motion.div>
    </div>
  )
}