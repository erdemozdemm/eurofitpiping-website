"use server"

import { z } from "zod"

// Define a Zod schema directly for the form fields
const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  subject: z.string().min(5, "Subject must be at least 5 characters."),
  message: z.string().min(10, "Message must be at least 10 characters."),
})

export interface ContactFormState {
  success: boolean
  message: string
  errors?: {
    name?: string[]
    email?: string[]
    subject?: string[]
    message?: string[]
    _form?: string[] // For general form errors
  }
}

export async function submitContactForm(prevState: ContactFormState, formData: FormData): Promise<ContactFormState> {
  // Manually extract data from FormData
  const rawFormData = {
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  }

  try {
    // Validate the extracted data
    const validatedFields = contactFormSchema.safeParse(rawFormData)

    if (!validatedFields.success) {
      return {
        success: false,
        message: "Validation failed. Please check your input.",
        // Make sure to flatten fieldErrors correctly
        errors: validatedFields.error.flatten().fieldErrors as {
          name?: string[]
          email?: string[]
          subject?: string[]
          message?: string[]
        },
      }
    }

    // Simulate sending the email/storing data
    console.log("Form data received:", validatedFields.data)
    await new Promise((resolve) => setTimeout(resolve, 1500)) // Simulate network delay

    // In a real application, you would send an email or save to a database here.

    return {
      success: true,
      message: "contactPage.form.success", // Use translation key
    }
  } catch (error) {
    console.error("Error submitting contact form:", error)
    return {
      success: false,
      message: "contactPage.form.error", // Use translation key
      errors: {
        _form: ["An unexpected error occurred."],
      },
    }
  }
}
