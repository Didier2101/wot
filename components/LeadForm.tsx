'use client'

import { useState } from 'react'
import { Send, Loader2, CheckCircle2 } from 'lucide-react'
import { sendEmailAction } from '@/app/actions/send-email'
import type { Locale } from '@/lib/i18n'

interface LeadFormProps {
    locale: Locale
}

export default function LeadForm({ locale }: LeadFormProps) {
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
            <div className="text-center py-16 animate-in fade-in slide-in-from-bottom-4">
                <div className="w-20 h-20 bg-[#D4AF37]/10 rounded-sm flex items-center justify-center mx-auto mb-8 border border-[#D4AF37]/20 shadow-2xl">
                    <CheckCircle2 size={40} className="text-[#D4AF37]" />
                </div>
                <h3 className="text-3xl font-serif font-bold text-white mb-4 tracking-tight">
                    {locale === 'es' ? '¡Mensaje Enviado!' : 'Message Sent!'}
                </h3>
                <p className="text-gray-400 mb-10 max-w-sm mx-auto font-light leading-relaxed">
                    {locale === 'es'
                        ? 'Gracias por su confianza. Un consultor especializado analizará su solicitud y le responderá en menos de 24 horas hábiles.'
                        : 'Thank you for your trust. A specialized consultant will analyze your request and respond within 24 business hours.'}
                </p>
                <button
                    onClick={() => setSubmitted(false)}
                    className="inline-flex items-center justify-center px-10 py-3 rounded-sm bg-transparent border border-[#D4AF37] text-[#D4AF37] font-bold text-[12px] uppercase tracking-[0.2em] transition-all duration-300 hover:bg-[#D4AF37] hover:text-[#0A192F]"
                >
                    {locale === 'es' ? 'Enviar otro mensaje' : 'Send another message'}
                </button>
            </div>
        )
    }

    const inputClasses = "w-full px-5 py-4 rounded-sm bg-white/5 border border-white/10 focus:outline-[1px] focus:outline-[#D4AF37] focus:border-transparent transition-all text-white placeholder:text-gray-500 font-light text-[15px] tracking-wide"
    const labelClasses = "text-[11px] font-bold text-[#D4AF37] uppercase tracking-[0.2em] mb-2 block"

    return (
        <form onSubmit={handleSubmit} className="space-y-6 animate-in fade-in fill-mode-both duration-700">
            {/* Honeypot fields to catch bots */}
            <div className="absolute opacity-0 pointer-events-none -z-10 h-0 w-0 overflow-hidden" aria-hidden="true">
                <input type="text" name="_website_honey" tabIndex={-1} autoComplete="off" />
                <input type="email" name="_extra_verify_email" tabIndex={-1} autoComplete="off" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1">
                    <label className={labelClasses} htmlFor="nombre">
                        {locale === 'es' ? 'Nombre completo' : 'Full Name'} <span className="opacity-50">*</span>
                    </label>
                    <input
                        required minLength={2} maxLength={100}
                        id="nombre" name="nombre" type="text"
                        className={inputClasses}
                        placeholder={locale === 'es' ? 'Ej. Juan Pérez' : 'e.g. John Doe'}
                    />
                </div>

                <div className="space-y-1">
                    <label className={labelClasses} htmlFor="email">
                        {locale === 'es' ? 'Correo electrónico' : 'Email address'} <span className="opacity-50">*</span>
                    </label>
                    <input
                        required type="email"
                        id="email" name="email"
                        className={inputClasses}
                        placeholder={locale === 'es' ? 'ejemplo@empresa.com' : 'example@company.com'}
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1">
                    <label className={labelClasses} htmlFor="telefono">
                        {locale === 'es' ? 'Teléfono / WhatsApp' : 'Phone / WhatsApp'} <span className="opacity-50">*</span>
                    </label>
                    <input
                        required minLength={5}
                        id="telefono" name="telefono" type="tel"
                        className={inputClasses}
                        placeholder="+57 300 000 0000"
                    />
                </div>

                <div className="space-y-1">
                    <label className={labelClasses} htmlFor="servicio">
                        {locale === 'es' ? 'Servicio Requerido' : 'Required Service'} <span className="opacity-50">*</span>
                    </label>
                    <select
                        required
                        id="servicio" name="servicio"
                        className={`${inputClasses} appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M5%207l5%205%205-5%22%20stroke%3D%22%23D4AF37%22%20stroke-width%3D%221.5%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-[position:right_1.2rem_center] bg-no-repeat`}
                    >
                        <option value="" className="bg-[#0A192F]">{locale === 'es' ? 'Seleccione...' : 'Select...'}</option>
                        <option value="Traducción Oficial" className="bg-[#0A192F]">Traducción Oficial / Juramentada</option>
                        <option value="Traducción Técnica/Legal" className="bg-[#0A192F]">Traducción Técnica o Legal</option>
                        <option value="Traducción Académica" className="bg-[#0A192F]">Traducción Académica</option>
                        <option value="Traducción de Sitios Web/Software" className="bg-[#0A192F]">Traducción de Software o Web</option>
                        <option value="Otro" className="bg-[#0A192F]">Asesoría / Otros</option>
                    </select>
                </div>
            </div>

            <div className="space-y-1">
                <label className={labelClasses} htmlFor="mensaje">
                    {locale === 'es' ? 'Detalle de su solicitud' : 'Request details'} <span className="opacity-50">*</span>
                </label>
                <textarea
                    required minLength={10}
                    id="mensaje" name="mensaje" rows={5}
                    className={`${inputClasses} resize-none`}
                    placeholder={locale === 'es' ? 'Describa brevemente el tipo de documentos y el idioma de destino...' : 'Briefly describe the documents and destination language...'}
                />
            </div>

            {serverError && (
                <div className="p-4 rounded-sm bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-widest text-center">
                    {serverError}
                </div>
            )}

            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-3 py-5 rounded-sm bg-[#D4AF37] text-[#0A192F] font-bold uppercase tracking-[0.25em] text-[13px] transition-all duration-300 hover:bg-white hover:text-[#0A192F] shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed group"
            >
                {isSubmitting ? (
                    <>
                        <Loader2 size={18} className="animate-spin" />
                        {locale === 'es' ? 'Procesando...' : 'Processing...'}
                    </>
                ) : (
                    <>
                        <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                        {locale === 'es' ? 'Solicitar Presupuesto Oficial' : 'Request Official Quote'}
                    </>
                )}
            </button>
            <div className="flex items-center justify-center gap-4 mt-6 opacity-30 select-none">
                <div className="w-8 h-[1px] bg-white" />
                <p className="text-[9px] text-white uppercase tracking-[0.3em]">
                    {locale === 'es' ? 'Privacidad Garantizada' : 'Privacy Guaranteed'}
                </p>
                <div className="w-8 h-[1px] bg-white" />
            </div>
        </form>
    )
}
