'use server'

import { Resend } from 'resend'
import { z } from 'zod'
import { headers } from 'next/headers'

const resendSecret = process.env.RESEND_API_KEY

// Configurar Resend (si no hay key local, no fallará el build, pero sí el envío)
const resend = resendSecret ? new Resend(resendSecret) : null

// Simple In-Memory Rate Limiter (Lifetime de la Lambda de Vercel)
const rateLimitMap = new Map<string, number>()
const RATE_LIMIT_WINDOW_MS = 60000 // 1 minuto
const MAX_REQUESTS_PER_WINDOW = 3

// Validamos los datos para evitar inyecciones y spam
const contactSchema = z.object({
    nombre: z.string().min(2, 'El nombre es muy corto').max(100),
    telefono: z.string().min(5, 'El teléfono no es válido').max(30),
    email: z.string().email('El correo electrónico no es válido'),
    servicio: z.string().min(2, 'Servicio inválido'),
    mensaje: z.string().min(10, 'El mensaje es muy corto (mínimo 10 caracteres)').max(2000),
})

export async function sendEmailAction(prevState: unknown, formData: FormData) {
    if (!resend) {
        return { success: false, message: 'Falta configurar RESEND_API_KEY en el servidor.' }
    }

    // --- HONEYPOT CHECK ---
    const honey1 = formData.get('_website_honey')
    const honey2 = formData.get('_extra_verify_email')
    if (honey1 || honey2) {
        // Silently fail for bots
        console.warn('Bot detected by honeypot')
        return { success: true, message: 'Tu mensaje ha sido enviado exitosamente. Te contactaremos pronto.' }
    }
    // --- FIN HONEYPOT ---

    // --- RATE LIMITING ---
    const headersList = await headers()
    const ip = headersList.get('x-forwarded-for') || 'unknown-ip'

    // Limpiar mapa de IPs antiguas para liberar memoria
    if (rateLimitMap.size > 1000) rateLimitMap.clear()

    const clientRequests = rateLimitMap.get(ip) || 0
    if (clientRequests >= MAX_REQUESTS_PER_WINDOW) {
        // Bloquear si excede el límite
        return { success: false, message: 'Has enviado demasiadas solicitudes. Espera un minuto.' }
    }
    rateLimitMap.set(ip, clientRequests + 1)

    // Resetear el conteo de la IP después de la ventana de tiempo
    setTimeout(() => {
        const currentScore = rateLimitMap.get(ip)
        if (currentScore && currentScore > 0) {
            rateLimitMap.set(ip, currentScore - 1)
        }
    }, RATE_LIMIT_WINDOW_MS)
    // --- FIN RATE LIMITING ---

    const result = contactSchema.safeParse({
        nombre: formData.get('nombre'),
        telefono: formData.get('telefono'),
        email: formData.get('email'),
        servicio: formData.get('servicio'),
        mensaje: formData.get('mensaje'),
    })

    if (!result.success) {
        return {
            success: false,
            message: 'Por favor, revisa que todos los campos sean correctos.',
            errors: result.error.flatten().fieldErrors,
        }
    }

    const { nombre, telefono, email, servicio, mensaje } = result.data

    try {
        const data = await resend.emails.send({
            from: 'Cotizaciones <onboarding@resend.dev>', // Usaremos el dominio por defecto de pruebas
            to: email, // Enviar al correo ingresado en el formulario
            subject: `🔥 Nueva Cotización: ${servicio} - ${nombre}`,
            replyTo: email,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px; border: 1px solid #e2e8f0; border-radius: 10px;">
          <h2 style="color: #1a3a6c;">Nueva Solicitud de Cotización</h2>
          <p>Has recibido un nuevo contacto desde tu sitio web de Traducciones Oficiales</p>
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
          <ul style="list-style: none; padding: 0;">
            <li style="margin-bottom: 10px;">👤 <strong>Nombre:</strong> ${nombre}</li>
            <li style="margin-bottom: 10px;">📧 <strong>Email:</strong> ${email}</li>
            <li style="margin-bottom: 10px;">📱 <strong>Teléfono:</strong> ${telefono}</li>
            <li style="margin-bottom: 10px;">📂 <strong>Servicio de Interés:</strong> ${servicio}</li>
          </ul>
          <div style="background-color: #f8fafc; padding: 15px; border-radius: 5px; margin-top: 20px;">
            <p style="margin: 0; color: #334155; white-space: pre-wrap;"><strong>Mensaje Técnico:</strong><br/>${mensaje}</p>
          </div>
          <p style="color: #94a3b8; font-size: 12px; margin-top: 30px; text-align: center;">
            Este mensaje fue generado automáticamente por tu servidor Next.js usando Resend.
          </p>
        </div>
      `,
        })

        if (data.error) {
            console.error('Error enviando con Resend:', data.error)
            return { success: false, message: 'Hubo un error con el proveedor de correo.' }
        }

        return { success: true, message: 'Tu mensaje ha sido enviado exitosamente. Te contactaremos pronto.' }
    } catch (error) {
        console.error('Excepción Resend:', error)
        return { success: false, message: 'Error interno de servidor al intentar enviar el correo.' }
    }
}
