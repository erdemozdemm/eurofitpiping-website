"use client"

import { useState } from "react"
import { useTranslation } from "@/app/hooks/use-translation"
import SectionTitle from "@/app/components/section-title"
import PageWrapper from "@/app/components/page-wrapper"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog"
import Image from "next/image"
import { X, ZoomIn, Factory, Users, Cog } from "lucide-react"

interface GalleryImage {
  id: string
  src: string
  alt: string
  category: "facility" | "production" | "team" | "products"
  titleKey: string
  descriptionKey?: string
}

const galleryImages: GalleryImage[] = [
  // Facility Images
  {
    id: "facility-1",
    src: "/placeholder.svg?width=800&height=600",
    alt: "Eurofit Piping facility exterior",
    category: "facility",
    titleKey: "galleryPage.images.facility1.title",
    descriptionKey: "galleryPage.images.facility1.description",
  },
  {
    id: "facility-2",
    src: "/placeholder.svg?width=800&height=600",
    alt: "Main production warehouse",
    category: "facility",
    titleKey: "galleryPage.images.facility2.title",
    descriptionKey: "galleryPage.images.facility2.description",
  },
  {
    id: "facility-3",
    src: "/placeholder.svg?width=800&height=600",
    alt: "Office and administrative area",
    category: "facility",
    titleKey: "galleryPage.images.facility3.title",
    descriptionKey: "galleryPage.images.facility3.description",
  },
  {
    id: "facility-4",
    src: "/placeholder.svg?width=800&height=600",
    alt: "Quality control laboratory",
    category: "facility",
    titleKey: "galleryPage.images.facility4.title",
    descriptionKey: "galleryPage.images.facility4.description",
  },
  // Production Line Images
  {
    id: "production-1",
    src: "/placeholder.svg?width=800&height=600",
    alt: "Cold forming press machine",
    category: "production",
    titleKey: "galleryPage.images.production1.title",
    descriptionKey: "galleryPage.images.production1.description",
  },
  {
    id: "production-2",
    src: "/placeholder.svg?width=800&height=600",
    alt: "CNC machining center",
    category: "production",
    titleKey: "galleryPage.images.production2.title",
    descriptionKey: "galleryPage.images.production2.description",
  },
  {
    id: "production-3",
    src: "/placeholder.svg?width=800&height=600",
    alt: "Automated production line",
    category: "production",
    titleKey: "galleryPage.images.production3.title",
    descriptionKey: "galleryPage.images.production3.description",
  },
  {
    id: "production-4",
    src: "/placeholder.svg?width=800&height=600",
    alt: "Quality inspection station",
    category: "production",
    titleKey: "galleryPage.images.production4.title",
    descriptionKey: "galleryPage.images.production4.description",
  },
  {
    id: "production-5",
    src: "/placeholder.svg?width=800&height=600",
    alt: "Raw material storage",
    category: "production",
    titleKey: "galleryPage.images.production5.title",
    descriptionKey: "galleryPage.images.production5.description",
  },
  // Team Images
  {
    id: "team-1",
    src: "/placeholder.svg?width=800&height=600",
    alt: "Management team meeting",
    category: "team",
    titleKey: "galleryPage.images.team1.title",
    descriptionKey: "galleryPage.images.team1.description",
  },
  {
    id: "team-2",
    src: "/placeholder.svg?width=800&height=600",
    alt: "Production technicians at work",
    category: "team",
    titleKey: "galleryPage.images.team2.title",
    descriptionKey: "galleryPage.images.team2.description",
  },
  {
    id: "team-3",
    src: "/placeholder.svg?width=800&height=600",
    alt: "Quality control team",
    category: "team",
    titleKey: "galleryPage.images.team3.title",
    descriptionKey: "galleryPage.images.team3.description",
  },
  {
    id: "team-4",
    src: "/placeholder.svg?width=800&height=600",
    alt: "Engineering team collaboration",
    category: "team",
    titleKey: "galleryPage.images.team4.title",
    descriptionKey: "galleryPage.images.team4.description",
  },
  // Product Images
  {
    id: "products-1",
    src: "/placeholder.svg?width=800&height=600",
    alt: "Finished pipe fittings display",
    category: "products",
    titleKey: "galleryPage.images.products1.title",
    descriptionKey: "galleryPage.images.products1.description",
  },
  {
    id: "products-2",
    src: "/placeholder.svg?width=800&height=600",
    alt: "CuNiFe pipe fittings",
    category: "products",
    titleKey: "galleryPage.images.products2.title",
    descriptionKey: "galleryPage.images.products2.description",
  },
  {
    id: "products-3",
    src: "/placeholder.svg?width=800&height=600",
    alt: "Stainless steel fittings",
    category: "products",
    titleKey: "galleryPage.images.products3.title",
    descriptionKey: "galleryPage.images.products3.description",
  },
]

export default function GalleryPage() {
  const { t } = useTranslation()
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const categories = [
    { key: "all", labelKey: "galleryPage.categories.all", icon: null },
    { key: "facility", labelKey: "galleryPage.categories.facility", icon: <Factory className="h-4 w-4" /> },
    { key: "production", labelKey: "galleryPage.categories.production", icon: <Cog className="h-4 w-4" /> },
    { key: "team", labelKey: "galleryPage.categories.team", icon: <Users className="h-4 w-4" /> },
    { key: "products", labelKey: "galleryPage.categories.products", icon: <ZoomIn className="h-4 w-4" /> },
  ]

  const filteredImages =
    selectedCategory === "all" ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory)

  const openModal = (image: GalleryImage) => {
    setSelectedImage(image)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setSelectedImage(null)
    setIsModalOpen(false)
  }

  return (
    <PageWrapper>
      <div className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title={t("galleryPage.title")} subtitle={t("galleryPage.subtitle")} />

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category.key}
                onClick={() => setSelectedCategory(category.key)}
                variant={selectedCategory === category.key ? "default" : "outline"}
                className={`flex items-center gap-2 ${
                  selectedCategory === category.key
                    ? "bg-industrial-blue text-white"
                    : "border-industrial-blue text-industrial-blue hover:bg-industrial-blue hover:text-white"
                }`}
              >
                {category.icon}
                {t(category.labelKey)}
              </Button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image) => (
              <Card
                key={image.id}
                className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                onClick={() => openModal(image)}
              >
                <CardContent className="p-0 relative">
                  <div className="relative aspect-square overflow-hidden">
                    {/*<Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 group-hover:scale-110"
                    />*/}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                      <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-dark-gray-text text-sm line-clamp-2">{t(image.titleKey)}</h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Modal for Image Preview */}
          {selectedImage && (
            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
              <DialogContent className="max-w-4xl max-h-[90vh] p-0 overflow-hidden">
                <DialogHeader className="p-6 pb-0">
                  <div className="flex items-center justify-between">
                    <DialogTitle className="text-xl font-semibold text-industrial-blue">
                      {t(selectedImage.titleKey)}
                    </DialogTitle>
                    <DialogClose asChild>
                      <Button variant="ghost" size="icon" onClick={closeModal}>
                        <X className="h-4 w-4" />
                      </Button>
                    </DialogClose>
                  </div>
                </DialogHeader>
                <div className="relative">
                  <div className="relative aspect-video">
                    {/*<Image
                      src={selectedImage.src || "/placeholder.svg"}
                      alt={selectedImage.alt}
                      layout="fill"
                      objectFit="contain"
                      className="bg-gray-50"
                    />*/}
                  </div>
                  {selectedImage.descriptionKey && (
                    <div className="p-6">
                      <p className="text-gray-600 leading-relaxed">{t(selectedImage.descriptionKey)}</p>
                    </div>
                  )}
                </div>
              </DialogContent>
            </Dialog>
          )}
        </div>
      </div>
    </PageWrapper>
  )
}
