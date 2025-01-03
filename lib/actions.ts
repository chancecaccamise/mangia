'use server'

import { contactFormSchema } from '@/lib/schema'
import { sql } from '@vercel/postgres'
import { z } from 'zod'
import { createContactsTable } from './db/schema'

export async function contactFormAction(
  _prevState: unknown,
  formData: FormData
) {
  const defaultValues = z
    .record(z.string(), z.string())
    .parse(Object.fromEntries(formData.entries()))

  try {
    const rawData = Object.fromEntries(formData.entries())
    // Handle multiple checkbox values
    const services = formData.getAll('services')
    const data = contactFormSchema.parse({
      ...rawData,
      services
    })

    // Ensure the table exists
    await createContactsTable()

    // Insert the data into the database
    // Convert the services array to a JSON string
    const servicesJson = JSON.stringify(data.services)
    await sql`
      INSERT INTO contacts (name, email, message, services)
      VALUES (${data.name}, ${data.email}, ${data.message}, ${servicesJson})
    `

    console.log(`Form submitted successfully for ${data.email}`)

    return {
      defaultValues: {
        name: '',
        email: '',
        message: '',
        services: [],
      },
      success: true,
      errors: null,
    }
  } catch (error) {
    console.error('Form submission error:', error)
    
    if (error instanceof z.ZodError) {
      return {
        defaultValues,
        success: false,
        errors: Object.fromEntries(
          Object.entries(error.flatten().fieldErrors).map(([key, value]) => [
            key,
            value?.join(', '),
          ])
        ),
      }
    }

    // Log the error for server-side visibility
    console.error('Unexpected error during form submission:', error)

    return {
      defaultValues,
      success: false,
      errors: { _form: 'An unexpected error occurred. Please try again later.' },
    }
  }
}

