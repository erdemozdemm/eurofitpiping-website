"use client"

import Link from "next/link"
import Image from "next/image"
import { useTranslation } from "@/app/hooks/use-translation"
import SectionTitle from "@/app/components/section-title"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CalendarDays, UserCircle, ArrowRight } from "lucide-react"
import { getAllPosts, type BlogPost } from "@/app/data/blog-posts" // Import the data


export default function BlogPage() {
  const { t } = useTranslation()
  const posts: BlogPost[] = getAllPosts() // Fetch all posts

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString(t("locale") || "en-US", {
      // Use translated locale or default
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }



  return (
    <div className="bg-light-gray py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title={t("blogPage.title")} subtitle={t("blogPage.subtitle")} />

        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Card
                key={post.slug}
                className="flex flex-col overflow-hidden hover:shadow-xl transition-shadow duration-300 bg-white"
              >
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="relative w-full h-56">
                    <Image
                      src={post.imageSrc}
                      alt={t(post.titleKey)}
                      layout="fill"
                      objectFit="cover"
                    />

                  </div>
                </Link>
                <CardHeader>
                  <Link href={`/blog/${post.slug}`}>
                    <CardTitle className="text-xl font-semibold text-industrial-blue hover:underline">
                      {t(post.titleKey)}
                    </CardTitle>
                  </Link>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mt-2">
                    <div className="flex items-center">
                      <CalendarDays className="h-4 w-4 mr-1.5" />
                      {formatDate(post.date)}
                    </div>
                    <div className="flex items-center">
                      <UserCircle className="h-4 w-4 mr-1.5" />
                      {t(post.authorKey)}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-gray-600 mb-4">{t(post.excerptKey)}</CardDescription>
                </CardContent>
                <div className="p-6 pt-0">
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-industrial-blue text-industrial-blue hover:bg-industrial-blue hover:text-white"
                  >
                    <Link href={`/blog/${post.slug}`}>
                      {t("blogPage.readTitle")} <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 text-lg">{t("blogPage.noPosts")}</p>
        )}
      </div>
    </div>
  )
}
