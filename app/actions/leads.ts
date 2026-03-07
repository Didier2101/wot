'use server'

import { createClient } from '@supabase/supabase-js'
import { z } from 'zod'

// Cliente con service role para operaciones del servidor (no expuesto al cliente)
function getServerClient() {
    return createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )
}

// Schema de validación Zod
const leadSchema = z.object({
    nombre: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
    email: z.string().email('Correo electrónico inválido'),
    telefono: z.string().optional(),
    tipo_documento: z.string().min(1, 'Selecciona el tipo de documento'),
    idioma_origen: z.string().min(1, 'Selecciona el idioma de origen'),
    idioma_destino: z.string().min(1, 'Selecciona el idioma de destino'),
    descripcion: z.string().optional(),
    nombre_archivo: z.string().optional(),
    urgente: z.boolean().optional(),
})

export type LeadFormData = z.infer<typeof leadSchema>

export type ActionResult = {
    success: boolean
    message: string
    error?: string
}

export async function submitLead(formData: LeadFormData): Promise<ActionResult> {
    // Validar datos
    const parsed = leadSchema.safeParse(formData)
    if (!parsed.success) {
        return {
            success: false,
            message: 'Datos inválidos. Por favor revisa el formulario.',
            error: parsed.error.issues.map(e => e.message).join(', '),
        }
    }

    try {
        const supabase = getServerClient()
        const { error } = await supabase.from('leads').insert([parsed.data])

        if (error) throw error

        return {
            success: true,
            message: '¡Solicitud enviada con éxito! Te contactaremos en menos de 24 horas.',
        }
    } catch (err) {
        console.error('[submitLead] Error:', err)
        return {
            success: false,
            message: 'Ocurrió un error al enviar tu solicitud. Por favor intenta de nuevo.',
            error: err instanceof Error ? err.message : 'Error desconocido',
        }
    }
}
