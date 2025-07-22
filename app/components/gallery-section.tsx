"use client"
import { useTranslation } from "@/app/hooks/use-translation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ZoomIn } from "lucide-react"

interface GalleryPreviewImage {
  id: string
  src: string
  alt: string
  titleKey: string
}

interface GallerySectionProps {
  title: string
  subtitle?: string
  images: GalleryPreviewImage[]
  showViewAll?: boolean
}

export default function GallerySection({ title, subtitle, images, showViewAll = true }: GallerySectionProps) {
  const { t } = useTranslation()

  return (
    <section className="py-16 md:py-24 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-industrial-blue mb-4">{title}</h2>
          {subtitle && <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
          {images.slice(0, 8).map((image) => (
            <Card
              key={image.id}
              className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <CardContent className="p-0 relative">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={image.src || "/images/about/about_timeline.png"}
                    alt={image.alt}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                    <ZoomIn className="h-6 w-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="font-medium text-dark-gray-text text-sm line-clamp-2">{t(image.titleKey)}</h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {showViewAll && (
          <div className="text-center">
            <Button asChild className="bg-industrial-blue text-white hover:bg-opacity-90">
              <Link href="/gallery">
                {t("galleryPage.viewAllPhotos")} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
