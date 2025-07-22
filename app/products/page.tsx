"use client"

import { useState } from "react"
import { useTranslation } from "@/app/hooks/use-translation"
import { useLanguage } from "@/app/context/language-context"
import SectionTitle from "@/app/components/section-title"
import PageWrapper from "@/app/components/page-wrapper"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useSearchParams } from "next/navigation"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog"
import Image from "next/image"
import { ArrowRight, Settings, Layers, CheckSquare, Info, Download } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"


type Translation = {
  en: string
  tr: string
  nl: string
}

interface Product {
  id: string
  categoryKey: string
  imageQuery: string
  materials: Translation[]
  sizes: Translation[]
  standards: string[]
  useCases: Translation[]
  materialCategory: string[]
}




const productsData: Product[] = [
  {
    id: "stainless-elbows",
    categoryKey: "productsPage.categories.elbows",
    imageQuery: "technical drawing of stainless steel pipe elbow",
    materials: [
  {
    en: "Stainless Steel 316L",
    tr: "Paslanmaz Çelik 316L",
    nl: "Roestvrij staal 316L"
  },
  {
    en: "Stainless Steel 304",
    tr: "Paslanmaz Çelik 304",
    nl: "Roestvrij staal 304"
  }
],
    sizes: [
      {
        en: "DN15 - DN200",
        tr: "DN15 - DN200",
        nl: "DN15 - DN200",
      }, 
      {
        en: '1/2" - 8"',
        tr: '1/2" - 8"',
        nl: '1/2" - 8"'
      }
    ],
    standards: ["DIN 2605", "ASME B16.9"],
    useCases: [
  {
    en: "Changing pipe direction",
    tr: "Boru yönünü değiştirme",
    nl: "Verander de pijprichting"
  },
  {
    en: "Fluid transport systems",
    tr: "Sıvı taşıma sistemleri",
    nl: "Vloeistoftransportsystemen"
  }
],
    materialCategory: ["stainless", "steel"],
  },
  {
    id: "aluminum-elbows",
    categoryKey: "productsPage.categories.elbows",
    imageQuery: "technical drawing of aluminum pipe elbow",
    materials: [{
    en: "Aluminum 6061",
    tr: "Alüminyum 6061",
    nl: "Aluminium 6061"
  },
  {
    en: "Aluminum 5083",
    tr: "Alüminyum 5083",
    nl: "Aluminium 5083"
  },
  {
    en: "Aluminum 6082",
    tr: "Alüminyum 6082",
    nl: "Aluminium 6082"
  }],
  sizes: [
      {
        en: "DN15 - DN200",
        tr: "DN15 - DN200",
        nl: "DN15 - DN200",
      }, 
      {
        en: '1/2" - 8"',
        tr: '1/2" - 8"',
        nl: '1/2" - 8"'
      }
    ],
    standards: ["DIN 2605", "ASME B16.9"],
    useCases: [
  {
    en: "Changing pipe direction",
    tr: "Boru yönünü değiştirme",
    nl: "Verander de pijprichting"
  },
  {
    en: "Fluid transport systems",
    tr: "Sıvı taşıma sistemleri",
    nl: "Vloeistoftransportsystemen"
  }
],
    materialCategory: ["aluminum"],
  },
  {
    id: "cunife-elbows",
    categoryKey: "productsPage.categories.elbows",
    imageQuery: "technical drawing of CuNiFe pipe elbow",
    materials: [{
    en: "CuNiFe 90/10",
    tr: "CuNiFe 90/10",
    nl: "CuNiFe 90/10"
  },
  {
    en: "CuNiFe 70/30",
    tr: "CuNiFe 70/30",
    nl: "CuNiFe 70/30"
  }],
    sizes: [
      {
        en: "DN15 - DN200",
        tr: "DN15 - DN200",
        nl: "DN15 - DN200",
      }, 
      {
        en: '1/2" - 8"',
        tr: '1/2" - 8"',
        nl: '1/2" - 8"'
      }
    ],
    standards: ["DIN 2605", "ASME B16.9"],
    useCases: [
  {
    en: "Marine applications",
    tr: "Denizcilik uygulamaları",
    nl: "Toepassingen in de scheepvaart"
  },
  {
    en: "Corrosion resistant systems",
    tr: "Korozyona dayanıklı sistemler",
    nl: "Corrosiebestendige systemen"
  }
],
    materialCategory: ["cunife"],
  },
  {
    id: "stainless-tees",
    categoryKey: "productsPage.categories.tees",
    imageQuery: "technical drawing of stainless steel pipe tee",
    materials: [
  {
    en: "Stainless Steel 316L",
    tr: "Paslanmaz Çelik 316L",
    nl: "Roestvrij staal 316L"
  },
  {
    en: "Stainless Steel 304",
    tr: "Paslanmaz Çelik 304",
    nl: "Roestvrij staal 304"
  },
  {
    en: "Stainless Steel 316ti",
    tr: "Paslanmaz Çelik 316ti",
    nl: "Roestvrij staal 316ti"
  }
],
    sizes: [
      {
        en: "SCH5S - SCHXXS",
        tr: "SCH5S - SCHXXS",
        nl: "SCH5S - SCHXXS",
      }, 
      {
        en: '1/2" - 32"',
        tr: '1/2" - 32"',
        nl: '1/2" - 32"'
      }
    ],
    standards: ["DIN 2615", "ASME B16.9"],
    useCases: [
  {
    en: "Branching pipe lines",
    tr: "Boru hatlarını dallandırma",
    nl: "Aftakken van leidingen"
  },
  {
    en: "Distribution manifolds",
    tr: "Dağıtım kollektörleri",
    nl: "Distributiespruitstukken"
  }
],
    materialCategory: ["stainless", "steel"],
  },
  {
    id: "aluminum-tees",
    categoryKey: "productsPage.categories.tees",
    imageQuery: "technical drawing of aluminum pipe tee",
    materials: [{
    en: "Aluminum 6061",
    tr: "Alüminyum 6061",
    nl: "Aluminium 6061"
  },
  {
    en: "Aluminum 6082 T6",
    tr: "Alüminyum 6082 T6",
    nl: "Aluminium 6082 T6",
  },
  {
    en: "Aluminum 5083",
    tr: "Alüminyum 5083",
    nl: "Aluminium 5083"
  },
  {
    en: "Aluminum 5083 H11",
    tr: "Alüminyum 5083 H11",
    nl: "Aluminium 5083 H11",
  }],
    sizes: [
      {
        en: "SCH5S - SCHXXS",
        tr: "SCH5S - SCHXXS",
        nl: "SCH5S - SCHXXS",
      }, 
      {
        en: '1/2" - 32"',
        tr: '1/2" - 32"',
        nl: '1/2" - 32"'
      }
    ],
    standards: ["ASME B16.9", "ASME B16.28", "MSS-SP-75"],
    useCases: [
  {
    en: "Branching pipe lines",
    tr: "Boru hatlarını dallandırma",
    nl: "Aftakken van leidingen"
  },
  {
    en: "Distribution manifolds",
    tr: "Dağıtım kollektörleri",
    nl: "Distributiespruitstukken"
  }
],
    materialCategory: ["aluminum"],
  },
  {
    id: "cunife-tees",
    categoryKey: "productsPage.categories.tees",
    imageQuery: "technical drawing of CuNiFe pipe tee",
    materials: [{
    en: "CuNiFe 90/10",
    tr: "CuNiFe 90/10",
    nl: "CuNiFe 90/10"
  },
  {
    en: "CuNiFe 70/30",
    tr: "CuNiFe 70/30",
    nl: "CuNiFe 70/30"
  }],
    sizes: [
      {
        en: "DN15 - DN150",
        tr: "DN15 - DN150",
        nl: "DN15 - DN150",
      }, 
      {
        en: '1/2" - 6"',
        tr: '1/2" - 6"',
        nl: '1/2" - 6"'
      }
    ],
    standards: ["DIN 2615", "ASME B16.9"],
    useCases: [
  {
    en: "Marine branching systems",
    tr: "Denizcilik boru dallandırma sistemleri",
    nl: "Aftaksystemen voor maritieme toepassingen"
  },
  {
    en: "Seawater applications",
    tr: "Deniz suyu uygulamaları",
    nl: "Toepassingen met zeewater"
  }
],
    materialCategory: ["cunife"],
  },
  {
    id: "stainless-reducers",
    categoryKey: "productsPage.categories.reducers",
    imageQuery: "technical drawing of stainless steel pipe reducer",
    materials: [
  {
    en: "Stainless Steel 316Ti",
    tr: "Paslanmaz Çelik 316Ti",
    nl: "Roestvrij staal 316Ti"
  },
  {
    en: "Stainless Steel 304",
    tr: "Paslanmaz Çelik 304",
    nl: "Roestvrij staal 304"
  }
],
    sizes: [
      {
        en: "DN20/15 - DN200/150",
        tr: "DN20/15 - DN200/150",
        nl: "DN20/15 - DN200/150",
      } ],
    standards: ["DIN 2616", "ASME B16.9"],
    useCases: [
  {
    en: "Connecting pipes of different diameters",
    tr: "Farklı çaplarda boruları birleştirme",
    nl: "Pijpen met verschillende diameters verbinden"
  },
  {
    en: "Flow regulation",
    tr: "Akış düzenlemesi",
    nl: "Stroomregeling"
  }
],
    materialCategory: ["stainless", "steel"],
  },
  {
    id: "aluminum-reducers",
    categoryKey: "productsPage.categories.reducers",
    imageQuery: "technical drawing of aluminum pipe reducer",
    materials: [{
    en: "Aluminum 6061,",
    tr: "Alüminyum 6061,",
    nl: "Aluminium 6061,",
  },
  {
    en: "Aluminum 6082 T6",
    tr: "Alüminyum 6082 T6",
    nl: "Aluminium 6082 T6"
  },
  {
    en: "Aluminum 5083",
    tr: "Alüminyum 5083",
    nl: "Aluminium 5083",
  },
  {
    en: "Aluminum 5083 H11",
    tr: "Alüminyum 5083 H11",
    nl: "Aluminium 5083 H11",
  },],
  
    sizes: [
      {
        en: 'SCH5S - SCHXXS',
        tr: 'SCH5S - SCHXXS',
        nl: 'SCH5S - SCHXXS',
      },
      {
        en: '1/2" - 32"',
        tr: '1/2" - 32"',
        nl: '1/2" - 32"',
      } ],
    standards: ["ASME B16.9", "ASME B16.28", "MSS-SP-75"],
    useCases: [
  {
    en: "Connecting pipes of different diameters",
    tr: "Farklı çaplarda boruları birleştirme",
    nl: "Pijpen met verschillende diameters verbinden"
  },
  {
    en: "Flow regulation",
    tr: "Akış düzenlemesi",
    nl: "Stroomregeling"
  }
],
    materialCategory: ["aluminum"],
  },
  {
    id: "cunife-reducers",
    categoryKey: "productsPage.categories.reducers",
    imageQuery: "technical drawing of CuNiFe pipe reducer",
    materials: [{
    en: "CUNI10FE 90/10",
    tr: "CUNI10FE 90/10",
    nl: "CUNI10FE 90/10"
  },
  {
    en: "CUNI10FE 70/30",
    tr: "CUNI10FE 70/30",
    nl: "CUNI10FE 70/30"
  }],
    sizes: [
      {
        en: "SCH5S - SCHXXS",
        tr: "SCH5S - SCHXXS",
        nl: "SCH5S - SCHXXS",
      } ],
    standards: ["ASME B16.9", "ASME B16.28", "MSS-SP-75"],
    useCases: [
  {
    en: "Marine diameter transitions",
    tr: "Denizcilik çap geçişleri",
    nl: "Overgangen in pijpdiameters voor maritieme toepassingen"
  },
  {
    en: "Corrosion resistant flow control",
    tr: "Korozyona dayanıklı akış kontrolü",
    nl: "Corrosiebestendige stroomregeling"
  }
],
    materialCategory: ["cunife"],
  },
  {
    id: "stainless-custom",
    categoryKey: "productsPage.categories.custom",
    imageQuery: "custom designed stainless steel pipe fitting",
    materials: [
  {
    en: "Stainless Steel 316L",
    tr: "Paslanmaz Çelik 316L",
    nl: "Roestvrij staal 316L"
  },
  {
    en: "Stainless Steel 304",
    tr: "Paslanmaz Çelik 304",
    nl: "Roestvrij staal 304"
  },
  {
    en: "Stainless Steel 316Ti",
    tr: "Paslanmaz Çelik 316Ti",
    nl: "Roestvrij staal 316Ti"
  }
],

    sizes: [{
    en: "As required",
    tr: "İhtiyaca göre",
    nl: "Indien vereist"
  }],
    standards: ["Customer specific","EN, ASTM"],
    useCases: [
  {
    en: "Specialized applications",
    tr: "Özel uygulamalar",
    nl: "Gespecialiseerde toepassingen"
  },
  {
    en: "Unique system requirements",
    tr: "Benzersiz sistem gereksinimleri",
    nl: "Unieke systeemeisen"
  }
],
    materialCategory: ["stainless", "steel"],
  },
  {
    id: "aluminum-custom",
    categoryKey: "productsPage.categories.custom",
    imageQuery: "custom designed aluminum pipe fitting",
    materials: [{
    en: "Aluminum 6061",
    tr: "Alüminyum 6061",
    nl: "Aluminium 6061"
  },
  {
    en: "Aluminum 5083",
    tr: "Alüminyum 5083",
    nl: "Aluminium 5083"
  },
  {
    en: "Aluminum 6082",
    tr: "Alüminyum 6082",
    nl: "Aluminium 6082"
  }],
    sizes: [{
    en: "As required",
    tr: "İhtiyaca göre",
    nl: "Indien vereist"
  }],
    standards: ["Customer specific", "EN, ASTM"],
    useCases: [
  {
    en: "Specialized applications",
    tr: "Özel uygulamalar",
    nl: "Gespecialiseerde toepassingen"
  },
  {
    en: "Lightweight solutions",
    tr: "Hafif çözümler",
    nl: "Lichtgewicht oplossingen"
  }
],
    materialCategory: ["aluminum"],
  },
  {
    id: "cunife-custom",
    categoryKey: "productsPage.categories.custom",
    imageQuery: "custom designed CuNiFe pipe fitting",
    materials: [{
    en: "CuNiFe 90/10",
    tr: "CuNiFe 90/10",
    nl: "CuNiFe 90/10"
  },
  {
    en: "CuNiFe 70/30",
    tr: "CuNiFe 70/30",
    nl: "CuNiFe 70/30"
  }],
    sizes: [{
    en: "As required",
    tr: "İhtiyaca göre",
    nl: "Indien vereist"
  }],
    standards: ["Customer specific", "Marine standards"],
    useCases: [
  {
    en: "Marine specialized applications",
    tr: "Denizcilik için özel uygulamalar",
    nl: "Gespecialiseerde toepassingen voor de scheepvaart"
  },
  {
    en: "Extreme corrosion resistance",
    tr: "Aşırı korozyon direnci",
    nl: "Uiterste corrosiebestendigheid"
  }
],
    materialCategory: ["cunife"],
  },
]

const materialCategories = [
  { id: "all", labelKey: "productsPage.categories.all" },
  { id: "stainless", labelKey: "productsPage.categories.stainless" },
  { id: "aluminum", labelKey: "productsPage.categories.aluminum" },
  { id: "cunife", labelKey: "productsPage.categories.cunife" },
  { id: "steel", labelKey: "productsPage.categories.steel" },
]

export default function ProductsPage() {
  const { t } = useTranslation()
  const { locale } = useLanguage()
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("all")
  const searchParams = useSearchParams()
  const searchTerm = searchParams?.get("search")?.toLowerCase() || ""

  const filteredProducts =
    selectedCategory === "all"
      ? productsData
      : productsData.filter((product) =>
          product.materialCategory.includes(selectedCategory)
        )

  const finalFilteredProducts = filteredProducts.filter((product) => {
    const matchInMaterials = product.materials.some((mat) =>
      (mat[locale] ?? mat.en).toLowerCase().includes(searchTerm)
    )
    const matchInSizes = product.sizes.some((size) =>
      (size[locale] ?? size.en).toLowerCase().includes(searchTerm)
    )
    const matchInName = t(product.categoryKey).toLowerCase().includes(searchTerm)
    return matchInMaterials || matchInSizes || matchInName
  })

  const openModal = (product: Product) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <PageWrapper>
        <div className="bg-gradient-to-b from-slate-100 to-white py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <SectionTitle title={t("productsPage.title")} subtitle={t("productsPage.subtitle")} />
            </motion.div>


            {/* <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center -mt-20 mb-8">
            <div className="relative max-w-2xl mx-auto flex items-center">
              <input
                  type="text"
                  defaultValue={searchTerm}
                  placeholder={t("homepage.searchPlaceholder") || "Search by material, size, or name"}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      const input = (e.target as HTMLInputElement).value.trim()
                      if (input) {
                        window.location.href = `/products?search=${encodeURIComponent(input)}`
                      }
                    }
                  }}
                  className="w-full pl-5 pr-40 py-3 rounded-full shadow-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-industrial-blue text-gray-800 text-sm md:text-base transition duration-200"
                />
              <Button
                  onClick={() => {
                    const input = document.querySelector<HTMLInputElement>('input[type="text"]')?.value.trim()
                    if (input) {
                      window.location.href = `/products?search=${encodeURIComponent(input)}`
                    }
                  }}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-2 rounded-full bg-industrial-blue text-white hover:bg-blue-800 transition duration-200"
                >
                  🔍 {t("homepage.searchButton") || "Search"}
                </Button>

            </div>
          </div> */}

            <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
              {materialCategories.map((category) => (
                <motion.div key={category.id} whileTap={{ scale: 0.95 }}>
                  <Button
                    onClick={() => setSelectedCategory(category.id)}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    className={`px-4 py-2 text-sm md:text-base transition-all duration-300 ${
                      selectedCategory === category.id
                        ? "bg-industrial-blue text-white shadow-lg"
                        : "border-industrial-blue text-industrial-blue hover:bg-industrial-blue hover:text-white"
                    }`}
                  >
                    {t(category.labelKey)}
                  </Button>
                </motion.div>
              ))}
            </div>

            <div className="flex justify-center mb-12">
              <Button
                asChild
                size="lg"
                className="bg-industrial-blue text-white hover:bg-opacity-90 transition-all duration-300 shadow-md flex items-center gap-2 px-6 py-3 h-auto text-base md:text-lg"
              >
                <a href="/catalog.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="h-5 w-5 mr-2" />
                  {t("productsPage.downloadCatalog")}
                </a>
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
              {finalFilteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="flex flex-col hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <CardHeader className="pb-4">
                      <Image
                        src={`images/products/${product.id}.png`}
                        alt={t(product.categoryKey)}
                        width={300}
                        height={200}
                        className="rounded-t-lg object-cover w-full h-48"
                      />

                      <CardTitle className="mt-4 text-lg md:text-xl font-semibold text-industrial-blue">
                        {t(product.categoryKey)}
                      </CardTitle>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {product.materialCategory.map((material) => (
                          <span
                            key={material}
                            className={`px-2 py-1 text-xs rounded-full font-medium ${
                              material === "stainless" || material === "steel"
                                ? "bg-gray-100 text-gray-700"
                                : material === "aluminum"
                                  ? "bg-blue-100 text-blue-700"
                                  : "bg-green-100 text-green-700"
                            }`}
                          >
                            {t(`productsPage.categories.${material}`)}
                          </span>
                        ))}
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow flex flex-col justify-between">
                      <CardDescription className="text-sm text-gray-600 mb-4">
                        {`${t("productsPage.exploreRange", { productType: t(product.categoryKey).toLowerCase() })}`}
                      </CardDescription>
                      <Button
                        onClick={() => openModal(product)}
                        className="w-full bg-industrial-blue text-white hover:bg-opacity-90 transition-all duration-300"
                      >
                        {t("productsPage.details")} <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {finalFilteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">{t("productsPage.noProductsFound")}</p>
              </div>
            )}

            <AnimatePresence>
              {isModalOpen && selectedProduct && (
                <Dialog open={true} onOpenChange={setIsModalOpen}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                  >
                    <DialogContent className="w-[90vw] max-w-[900px] bg-white">
                      <DialogHeader>
                        <DialogTitle className="text-2xl text-industrial-blue">
                          {t(selectedProduct.categoryKey)} - {t("productsPage.modalTitle")}
                        </DialogTitle>
                        <DialogDescription>
                          {t("productsPage.detailedInfo", {
                            productType: t(selectedProduct.categoryKey).toLowerCase(),
                          })}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="max-h-[70vh] overflow-y-auto px-2">
                        <Image
                          src={`images/products/${selectedProduct.id}.png`}
                          alt={t(selectedProduct.categoryKey)}
                          width={800}
                          height={400}
                          className="w-full h-auto rounded-lg object-contain mb-4"
                        />

                        <div className="mb-4">
                          <h4 className="font-semibold text-lg text-dark-gray-text mb-2 flex items-center">
                            <Layers className="h-5 w-5 mr-2 text-industrial-blue" />
                            {t("productsPage.materialOptions")}:
                          </h4>
                          <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                            {selectedProduct.materials.map((mat, i) => (
                              <li key={i}>{mat[locale] ?? mat.en}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="mb-4">
                          <h4 className="font-semibold text-lg text-dark-gray-text mb-2 flex items-center">
                            <Settings className="h-5 w-5 mr-2 text-industrial-blue" />
                            {t("productsPage.sizeOptions")}:
                          </h4>
                          <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                            {selectedProduct.sizes.map((s, i) => (
                              <li key={i}>{s[locale] ?? s.en}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="mb-4">
                          <h4 className="font-semibold text-lg text-dark-gray-text mb-2 flex items-center">
                            <CheckSquare className="h-5 w-5 mr-2 text-industrial-blue" />
                            {t("productsPage.standards")}:
                          </h4>
                          <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                            {selectedProduct.standards.map((std, i) => (
                              <li key={i}>{std}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="mb-4">
                          <h4 className="font-semibold text-lg text-dark-gray-text mb-2 flex items-center">
                            <Info className="h-5 w-5 mr-2 text-industrial-blue" />
                            {t("productsPage.useCases")}:
                          </h4>
                          <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                            {selectedProduct.useCases.map((uc, i) => (
                              <li key={i}>{uc[locale] ?? uc.en}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <DialogFooter>
                        <DialogClose asChild>
                          <Button variant="outline">{t("common.close")}</Button>
                        </DialogClose>
                      </DialogFooter>
                    </DialogContent>
                  </motion.div>
                </Dialog>
              )}
            </AnimatePresence>
          </div>
        </div>
      </PageWrapper>
    </motion.div>
  )
}
