import type { Metadata } from 'next'
import { Shield, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import type { Locale } from '@/lib/i18n'

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ lang?: string }> }): Promise<Metadata> {
    const { lang } = await searchParams
    const locale: Locale = lang === 'en' ? 'en' : 'es'
    return {
        title: locale === 'es' ? 'Política de Tratamiento de Datos Personales | Lex Translations' : 'Data Privacy Policy | Official Translations',
        description: locale === 'es'
            ? 'Política de Tratamiento de Datos Personales y Privacidad (Ley 1581 de 2012) de Lex Translations SAS'
            : 'Data Treatment and Privacy Policy of Lex Translations SAS'
    }
}

export default async function PrivacidadPage({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
    const { lang } = await searchParams
    const locale: Locale = lang === 'en' ? 'en' : 'es'

    return (
        <>
            <Navbar locale={locale} currentPath="/legal/privacidad" />
            <main className="font-sans antialiased text-slate-800 bg-slate-50 min-h-screen pb-24">
                {/* HERO LEGAL */}
                <section className="relative py-24 lg:py-32 overflow-hidden bg-[#0A192F]" aria-label="Legal">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(212,175,55,0.1)_0%,transparent_70%)] pointer-events-none" />
                    <div className="container mx-auto px-5 lg:px-16 max-w-5xl text-center relative z-10">
                        <nav aria-label="breadcrumb" className="flex items-center justify-center gap-2 text-sm text-white/50 mb-10 font-medium tracking-widest uppercase text-[10px]">
                            <Link href={`/?lang=${locale}`} className="hover:text-[#D4AF37] transition-colors">Home</Link>
                            <span className="text-white/20">/</span>
                            <span className="text-white/80">Legal</span>
                        </nav>

                        <div className="mx-auto w-16 h-16 rounded-sm bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] mb-8 shadow-2xl">
                            <Shield size={32} />
                        </div>

                        <div className="inline-flex items-center gap-3 text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
                            <CheckCircle size={14} />
                            {locale === 'es' ? 'Acuerdo Privacidad' : 'Privacy Agreement'}
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-serif font-bold mb-10 leading-tight tracking-tight">
                            {locale === 'es' ? 'Política de Privacidad' : 'Privacy Policy'}
                        </h1>

                        <p className="text-gray-400 text-xl font-light mb-6 tracking-wide max-w-2xl mx-auto">
                            {locale === 'es' ? 'Tratamiento de datos personales y compromiso de confidencialidad absoluta.' : 'Personal data processing and commitment to absolute confidentiality.'}
                        </p>
                    </div>
                </section>

                <div className="container mx-auto px-5 lg:px-8 max-w-[900px] -mt-20 relative z-20">
                    <div className="bg-[#0A192F] p-10 md:p-20 rounded-sm shadow-2xl border border-[#D4AF37]/10 relative overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,rgba(212,175,55,0.02)_0%,transparent_50%)] pointer-events-none" />

                        <div className="space-y-12 text-gray-400 leading-relaxed text-lg font-light tracking-wide relative z-10">

                            <section>
                                <h2 className="text-2xl font-serif font-bold text-[#D4AF37] mb-6 tracking-tight">
                                    {locale === 'es' ? '1. Identificación del Responsable' : '1. Controller Identification'}
                                </h2>
                                <p>
                                    {locale === 'es'
                                        ? 'En estricto cumplimiento de la Ley 1581 de 2012 e instrucciones de la SIC, Lex Translations SAS, con domicilio en Bogotá, actúa como el responsable del tratamiento de los datos personales proporcionados para servicios de traducción.'
                                        : 'In strict compliance with Law 1581 of 2012 and SIC instructions, Lex Translations SAS, domiciled in Bogotá, acts as the controller for the processing of personal data provided for translation services.'}
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-serif font-bold text-[#D4AF37] mb-6 tracking-tight">
                                    {locale === 'es' ? '2. Finalidad y Confidencialidad' : '2. Purpose and Confidentiality'}
                                </h2>
                                <p className="mb-6">
                                    {locale === 'es'
                                        ? 'Los datos sensibles (pasaportes, actas, historias clínicas) están protegidos bajo el secreto profesional y protocolos de seguridad de grado corporativo.'
                                        : 'Sensitive data (passports, certificates, medical records) are protected under professional secrecy and corporate-grade security protocols.'}
                                </p>
                                <p>
                                    {locale === 'es'
                                        ? 'La recolección se limita a la prestación de servicios de traducción, gestión de pagos y facturación, garantizando que su información jamás será compartida sin autorización.'
                                        : 'Data collection is limited to the provision of translation services, payment management, and billing, ensuring your information will never be shared without authorization.'}
                                </p>
                            </section>

                            <section className="bg-white/5 border border-white/5 p-10 rounded-sm">
                                <h2 className="text-2xl font-serif font-bold text-[#D4AF37] mb-6 tracking-tight">
                                    {locale === 'es' ? '3. Derechos del Titular (Habeas Data)' : '3. Rights of the Data Subject (Habeas Data)'}
                                </h2>
                                <ul className="space-y-6">
                                    <li className="flex gap-4">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-2.5 shrink-0" />
                                        <span>{locale === 'es' ? 'Conocer, actualizar y rectificar sus datos personales ante Lex Translations SAS' : 'Know, update, and rectify personal data before Lex Translations SAS'}</span>
                                    </li>
                                    <li className="flex gap-4">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-2.5 shrink-0" />
                                        <span>{locale === 'es' ? 'Solicitar prueba de la autorización otorgada para el tratamiento de su información.' : 'Request proof of authorization granted for the processing of your information.'}</span>
                                    </li>
                                    <li className="flex gap-4">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-2.5 shrink-0" />
                                        <span>{locale === 'es' ? 'Revocar la autorización y/o solicitar la supresión del dato cuando así lo considere.' : 'Revoke authorization and/or request data deletion whenever deemed necessary.'}</span>
                                    </li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-serif font-bold text-[#D4AF37] mb-6 tracking-tight">
                                    {locale === 'es' ? '4. Destrucción de Archivos' : '4. File Destruction'}
                                </h2>
                                <p>
                                    {locale === 'es'
                                        ? 'Tras la entrega conforme, los documentos fuente y copias se mantienen cifrados únicamente durante el periodo de garantía técnica. Posteriormente, son eliminados permanentemente.'
                                        : 'Upon delivery, source documents and copies are kept encrypted only during the technical warranty period. Subsequently, they are permanently deleted.'}
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-serif font-bold text-[#D4AF37] mb-6 tracking-tight">
                                    {locale === 'es' ? '5. Contacto Legal' : '5. Legal Contact'}
                                </h2>
                                <p>
                                    {locale === 'es'
                                        ? 'Para Habeas Data, escriba a lex@lextranslations.com o visite nuestras instalaciones en Bogotá.'
                                        : 'For Habeas Data, write to lex@lextranslations.com or visit our facilities in Bogotá.'}
                                </p>
                            </section>

                        </div>

                        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-6 text-[11px] text-gray-500 uppercase tracking-[0.2em] font-bold">
                            <div>Lex Translations SAS</div>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-[1px] bg-[#D4AF37]/30" />
                                <span>{locale === 'es' ? 'Actualizado: Marzo 2026' : 'Updated: March 2026'}</span>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
            <Footer locale={locale} />
        </>
    )
}
