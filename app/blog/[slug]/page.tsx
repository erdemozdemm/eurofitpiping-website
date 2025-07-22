"use client"

import { useEffect, useState } from "react"
import { useParams, notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { useTranslation } from "@/app/hooks/use-translation"
import { getPostBySlug, type BlogPost } from "@/app/data/blog-posts"
import { CalendarDays, UserCircle, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

export default function BlogPostPage() {
  const { t } = useTranslation()
  const params = useParams()
  const slug = typeof params.slug === "string" ? params.slug : ""
  const [post, setPost] = useState<BlogPost | null | undefined>(undefined)

  useEffect(() => {
    if (slug) {
      const foundPost = getPostBySlug(slug)
      setPost(foundPost)
    }
  }, [slug])

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString(t("locale") || "en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  if (post === undefined && slug) {
    return <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">Loading post...</div>
  }

  if (post === null || !post) {
    notFound()
    return null
  }

  return (
    <div className="bg-white py-16 md:py-24">
      <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <article>
          <header className="mb-8">
            <div className="mb-6">
              <Button
                variant="outline"
                asChild
                className="text-industrial-blue border-industrial-blue hover:bg-industrial-blue/10"
              >
                <Link href="/blog">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  {t("blogPage.backTitle")}
                </Link>
              </Button>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-industrial-blue mb-4">{t(post.titleKey)}</h1>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center">
                <CalendarDays className="h-4 w-4 mr-1.5" />
                {formatDate(post.date)}
              </div>
              <div className="flex items-center">
                <UserCircle className="h-4 w-4 mr-1.5" />
                {t(post.authorKey)}
              </div>
            </div>
          </header>

          <div className="relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden shadow-lg">
            <Image
              src={post.imageSrc}
              alt={t(post.titleKey)}
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed prose-headings:text-industrial-blue prose-a:text-industrial-blue hover:prose-a:text-opacity-80 prose-strong:text-dark-gray-text prose-blockquote:border-industrial-blue prose-blockquote:text-gray-600">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
          </div>
        </article>
      </div>
    </div>
  )
}
