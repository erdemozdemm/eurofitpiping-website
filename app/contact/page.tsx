"use client"

import { useActionState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { useTranslation } from "@/app/hooks/use-translation"
import SectionTitle from "@/app/components/section-title"
import PageWrapper from "@/app/components/page-wrapper"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MessageCircle, MapPin, Send } from "lucide-react"
import { submitContactForm, type ContactFormState } from "./action"

const initialState: ContactFormState = {
  success: false,
  message: "",
}

import type { Variants } from "framer-motion"

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

export default function ContactPage() {
  const { t } = useTranslation()
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset()
    }
  }, [state.success])

  const contactDetails = [
    {
      icon: <Mail className="h-6 w-6 text-industrial-blue" />,
      labelKey: "contactPage.directContact.email",
      value: t("footer.email"),
      href: `mailto:${t("footer.email")}`,
    },
    {
      icon: <Phone className="h-6 w-6 text-industrial-blue" />,
      labelKey: "contactPage.directContact.phone",
      value: t("footer.phone"),
      href: `tel:${t("footer.phone")}`,
    },
    {
      icon: <MessageCircle className="h-6 w-6 text-industrial-blue" />,
      labelKey: "contactPage.directContact.whatsapp",
      value: t("footer.phone"),
      href: `https://wa.me/${t("footer.phone").replace(/\s+/g, "")}`,
    },
  ]

  return (
    <PageWrapper>
     <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.5,
            },
          },
        }}
      >
         <div className="bg-gradient-to-b from-slate-100 to-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUpVariants} custom={0}>
            <SectionTitle title={t("contactPage.title")} subtitle={t("contactPage.subtitle")} />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 mt-12">
            {/* Contact Form */}
            <motion.div variants={fadeUpVariants} custom={1}>
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-industrial-blue">
                    {t("contactPage.form.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form ref={formRef} action={formAction} className="space-y-6">
                    {/* Name */}
                    <div>
                      <Label htmlFor="name">{t("contactPage.form.name")}</Label>
                      <Input id="name" name="name" required placeholder={t("contactPage.form.namePlaceholder")} />
                      {state?.errors?.name && <p className="text-sm text-red-600">{state.errors.name.join(", ")}</p>}
                    </div>

                    {/* Email */}
                    <div>
                      <Label htmlFor="email">{t("contactPage.form.email")}</Label>
                      <Input id="email" name="email" type="email" required placeholder={t("contactPage.form.emailPlaceholder")} />
                      {state?.errors?.email && <p className="text-sm text-red-600">{state.errors.email.join(", ")}</p>}
                    </div>

                    {/* Subject */}
                    <div>
                      <Label htmlFor="subject">{t("contactPage.form.subject")}</Label>
                      <Input id="subject" name="subject" required placeholder={t("contactPage.form.subjectPlaceholder")} />
                      {state?.errors?.subject && <p className="text-sm text-red-600">{state.errors.subject.join(", ")}</p>}
                    </div>

                    {/* Message */}
                    <div>
                      <Label htmlFor="message">{t("contactPage.form.message")}</Label>
                      <Textarea id="message" name="message" rows={5} required placeholder={t("contactPage.form.messagePlaceholder")} />
                      {state?.errors?.message && <p className="text-sm text-red-600">{state.errors.message.join(", ")}</p>}
                    </div>

                    {/* Submit Button */}
                    <motion.div whileTap={{ scale: 0.97 }}>
                      <Button
                        type="submit"
                        className="w-full bg-industrial-blue text-white hover:bg-opacity-90 flex items-center justify-center"
                        disabled={isPending}
                        aria-live="polite"
                      >
                        {isPending ? (
                          <>
                            <Send className="mr-2 h-4 w-4 animate-pulse" />
                            {t("contactPage.form.submitting")}
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4" />
                            {t("contactPage.form.submit")}
                          </>
                        )}
                      </Button>
                    </motion.div>

                    {state?.message && (
                      <p className={`text-sm mt-2 text-center ${state.success ? "text-green-600" : "text-red-600"}`} role="alert">
                        {t(state.message)}
                      </p>
                    )}
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Details & Map */}
            <motion.div variants={fadeUpVariants} custom={2} className="space-y-8">
              {/* Contact Info */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-industrial-blue">
                    {t("contactPage.directContact.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-industrial-blue mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-dark-gray-text">{t("contactPage.directContact.address")}</h4>
                      <p className="text-gray-600">{t("contactPage.directContact.addressDetails")}</p>
                    </div>
                  </div>
                  {contactDetails.map((detail) => (
                    <div key={detail.labelKey} className="flex items-center">
                      {detail.icon}
                      <div className="ml-3">
                        <h4 className="font-semibold text-dark-gray-text">{t(detail.labelKey)}</h4>
                        <a href={detail.href} className="text-gray-600 hover:text-industrial-blue transition-colors">
                          {detail.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Map */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-industrial-blue">{t("contactPage.mapTitle")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <motion.div
                    className="aspect-w-16 aspect-h-9 bg-medium-gray rounded-md overflow-hidden mb-4"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3014.5234567890123!2d29.1833333!3d40.9000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDU0JzAwLjAiTiAyOcKwMTEnMDAuMCJF!5e0!3m2!1sen!2str!4v1234567890123!5m2!1sen!2str"
                      width="100%"
                      height="350"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      title="Eurofit Piping Location in Kartal, İstanbul"
                      className="rounded-md"
                    />
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
        </div>
      </motion.div>
    </PageWrapper>
  )
}
