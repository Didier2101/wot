'use client'

import { useState } from 'react'
import { Send, Loader2, CheckCircle2 } from 'lucide-react'
import { sendEmailAction } from '@/app/actions/send-email'
import type { Locale, I18nDict } from '@/lib/i18n'

interface LeadFormProps {
    locale: Locale
    t: I18nDict['form'] // mantenemos por type safety pero simplificaremos textos
}

export default function LeadForm({ locale, t }: LeadFormProps) {
    const [submitted, setSubmitted] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [serverError, setServerError] = useState<string | null>(null)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSubmitting(true)
        setServerError(null)

        const formData = new FormData(e.currentTarget)
        const result = await sendEmailAction(null, formData)

        setIsSubmitting(false)

        if (result.success) {
            setSubmitted(true)
        } else {
            setServerError(result.message)
        }
    }

    if (submitted) {
        return (
            <div className="text-center py-10 animate-in fade-in slide-in-from-bottom-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={32} className="text-green-600" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#0c1a35] mb-2">
                    {locale === 'es' ? '¡Mensaje Enviado!' : 'Message Sent!'}
                </h3>
                <p className="text-slate-600 mb-8">
                    {locale === 'es'
                        ? 'Gracias por contactarnos. Le responderemos en menos de 24 horas hábiles.'
                        : 'Thank you for contacting us. We will reply within 24 business hours.'}
                </p>
                <button
                    onClick={() => setSubmitted(false)}
                    className="inline-flex items-center justify-center px-6 py-2 rounded-md bg-[#1a3a6c] hover:bg-[#122040] text-white font-medium transition-colors"
                >
                    {locale === 'es' ? 'Enviar otro mensaje' : 'Send another message'}
                </button>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-5 animate-in fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                    <label className="text-sm font-bold text-[#0c1a35]" htmlFor="nombre">
                        {locale === 'es' ? 'Nombre completo' : 'Full Name'} <span className="text-red-500">*</span>
                    </label>
                    <input
                        required minLength={2} maxLength={100}
                        id="nombre" name="nombre" type="text"
                        className="w-full px-4 py-3 rounded-md bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#c9a227] focus:border-transparent transition-shadow text-slate-800"
                        placeholder={locale === 'es' ? 'Ej. Juan Pérez' : 'e.g. John Doe'}
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-bold text-[#0c1a35]" htmlFor="email">
                        {locale === 'es' ? 'Correo electrónico' : 'Email address'} <span className="text-red-500">*</span>
                    </label>
                    <input
                        required type="email"
                        id="email" name="email"
                        className="w-full px-4 py-3 rounded-md bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#c9a227] focus:border-transparent transition-shadow text-slate-800"
                        placeholder={locale === 'es' ? 'ejemplo@empresa.com' : 'example@company.com'}
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                    <label className="text-sm font-bold text-[#0c1a35]" htmlFor="telefono">
                        {locale === 'es' ? 'Teléfono / WhatsApp' : 'Phone / WhatsApp'} <span className="text-red-500">*</span>
                    </label>
                    <input
                        required minLength={5}
                        id="telefono" name="telefono" type="tel"
                        className="w-full px-4 py-3 rounded-md bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#c9a227] focus:border-transparent transition-shadow text-slate-800"
                        placeholder="+57 300 000 0000"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-bold text-[#0c1a35]" htmlFor="servicio">
                        {locale === 'es' ? 'Servicio de Interés' : 'Service of Interest'} <span className="text-red-500">*</span>
                    </label>
                    <select
                        required
                        id="servicio" name="servicio"
                        className="w-full px-4 py-3 rounded-md bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#c9a227] focus:border-transparent transition-shadow text-slate-800 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M5%207l5%205%205-5%22%20stroke%3D%22%236b7280%22%20stroke-width%3D%222%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-[position:right_1rem_center] bg-no-repeat"
                    >
                        <option value="">{locale === 'es' ? 'Seleccione una opción...' : 'Select an option...'}</option>
                        <option value="Traducción Oficial">Traducción Oficial</option>
                        <option value="Traducción Técnica/Legal">Traducción Técnica / Legal</option>
                        <option value="Traducción Académica">Traducción Académica</option>
                        <option value="Traducción de Sitios Web/Software">Traducción Web / Software</option>
                        <option value="Otro">Otro / Asesoría General</option>
                    </select>
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-sm font-bold text-[#0c1a35]" htmlFor="mensaje">
                    {locale === 'es' ? 'Mensaje o Detalle del Proyecto' : 'Message or Project Details'} <span className="text-red-500">*</span>
                </label>
                <textarea
                    required minLength={10}
                    id="mensaje" name="mensaje" rows={4}
                    className="w-full px-4 py-3 rounded-md bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#c9a227] focus:border-transparent transition-shadow text-slate-800 resize-none"
                    placeholder={locale === 'es' ? 'Cuéntenos sobre sus documentos a traducir...' : 'Tell us about the documents you need translated...'}
                />
            </div>

            {serverError && (
                <div className="p-3 rounded bg-red-50 border border-red-200 text-red-600 text-sm font-medium text-center">
                    {serverError}
                </div>
            )}

            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 py-4 rounded-md bg-yellow-400 hover:bg-yellow-500 text-neutral-900 font-bold uppercase tracking-wider text-sm transition-all shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
            >
                {isSubmitting ? (
                    <>
                        <Loader2 size={18} className="animate-spin" />
                        {locale === 'es' ? 'Enviando...' : 'Sending...'}
                    </>
                ) : (
                    <>
                        <Send size={18} />
                        {locale === 'es' ? 'Solicitar Cotización Oficial' : 'Request Official Quote'}
                    </>
                )}
            </button>
            <p className="text-xs text-center text-slate-400 mt-4">
                {locale === 'es' ? 'Tus datos están protegidos. No enviamos spam.' : 'Your data is safe. We do not send spam.'}
            </p>
        </form>
    )
}
