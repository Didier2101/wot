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
        title: locale === 'es' ? 'Política de Tratamiento de Datos Personales | WOT Traducciones' : 'Data Privacy Policy | WOT Translations',
        description: locale === 'es'
            ? 'Política de Tratamiento de Datos Personales y Privacidad (Ley 1581 de 2012) de WORLD OFFICIAL TRANSLATIONS S.A.S.'
            : 'Data Treatment and Privacy Policy of WORLD OFFICIAL TRANSLATIONS S.A.S.'
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
                <section className="bg-gradient-to-br from-[#0c1a35] via-[#1a3055] to-[#1e4a8a] py-16 lg:py-24" aria-label="Legal">
                    <div className="container mx-auto px-5 lg:px-16 max-w-5xl text-center">
                        <nav aria-label="breadcrumb" className="flex items-center justify-center gap-2 text-sm text-white/60 mb-8 font-medium">
                            <Link href={`/?lang=${locale}`} className="text-white/80 hover:text-white transition-colors">Home</Link>
                            <span className="text-white/40">/</span>
                            <span className="text-white/95">Legal</span>
                        </nav>

                        <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-yellow-400/10 border border-yellow-400/20 flex items-center justify-center text-yellow-400 mb-6 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
                            <Shield size={32} />
                        </div>

                        <div className="inline-flex items-center gap-2 text-yellow-400 text-xs font-bold uppercase tracking-wider mb-6">
                            <CheckCircle size={14} />
                            {locale === 'es' ? 'Acuerdo Legal' : 'Legal Agreement'}
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-serif font-bold mb-6 leading-tight">
                            {locale === 'es' ? 'Política de Tratamiento de Datos Personales' : 'Personal Data Processing Policy'}
                        </h1>

                        <p className="text-yellow-400/90 text-xl font-medium mb-6">
                            {locale === 'es' ? 'Cumplimiento estricto de la Ley 1581 de 2012.' : 'Strict compliance with Colombian Law 1581 of 2012.'}
                        </p>
                    </div>
                </section>

                <div className="container mx-auto px-5 lg:px-8 max-w-[800px] -mt-10 relative z-10">
                    <div className="bg-white p-10 md:p-14 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100">

                        <div className="space-y-8 text-slate-600 leading-relaxed text-[1.05rem]">

                            <section>
                                <h2 className="text-xl font-bold text-[#0c1a35] mb-3">
                                    {locale === 'es' ? '1. Identificación del Responsable' : '1. Controller Identification'}
                                </h2>
                                <p>
                                    {locale === 'es'
                                        ? 'En cumplimiento de la Ley 1581 de 2012 y el Decreto Reglamentario 1377 de 2013, WORLD OFFICIAL TRANSLATIONS S.A.S., con domicilio en Bogotá, Colombia (Carrera 14B #161-54), actúa como responsable del tratamiento de los datos personales proporcionados por sus clientes y usuarios a través de sus canales digitales y físicos.'
                                        : 'In compliance with Law 1581 of 2012 and Regulatory Decree 1377 of 2013, WORLD OFFICIAL TRANSLATIONS S.A.S., domiciled in Bogotá, Colombia (Carrera 14B #161-54), acts as the controller for the processing of personal data provided by its clients and users through its digital and physical channels.'}
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold text-[#0c1a35] mb-3">
                                    {locale === 'es' ? '2. Finalidad del Tratamiento y Confidencialidad' : '2. Purpose of Processing and Confidentiality'}
                                </h2>
                                <p className="mb-3">
                                    {locale === 'es'
                                        ? 'Los datos sensibles (incluyendo pasaportes, registros civiles, actas de divorcio, historias clínicas, y cualquier otro documento de carácter privado) enviados para cotización o traducción están protegidos por el secreto profesional y estrictos Acuerdos de Confidencialidad (NDA).'
                                        : 'Sensitive data (including passports, civil registries, divorce decrees, medical records, and any other private documents) sent for quotation or translation are protected by professional secrecy and strict Non-Disclosure Agreements (NDAs).'}
                                </p>
                                <p>
                                    {locale === 'es'
                                        ? 'La recolección se limita exclusivamente a la prestación de servicios de traducción oficial, gestión de pagos, facturación electrónica y comunicación operativa con el titular.'
                                        : 'Data collection is strictly limited to the provision of official translation services, payment processing, electronic billing, and operational communication with the data subject.'}
                                </p>
                            </section>

                            <section className="bg-blue-50/50 p-6 rounded-xl border border-blue-100">
                                <h2 className="text-lg font-bold text-[#1a3a6c] mb-3">
                                    {locale === 'es' ? '3. Derechos del Titular (Habeas Data)' : '3. Rights of the Data Subject (Habeas Data)'}
                                </h2>
                                <ul className="list-disc pl-5 space-y-2 text-slate-700">
                                    <li>{locale === 'es' ? 'Conocer, actualizar y rectificar sus datos personales frente a WORLD OFFICIAL TRANSLATIONS S.A.S.' : 'Know, update, and rectify personal data before WORLD OFFICIAL TRANSLATIONS S.A.S.'}</li>
                                    <li>{locale === 'es' ? 'Solicitar prueba de la autorización otorgada para el tratamiento de datos.' : 'Request proof of authorization granted for data processing.'}</li>
                                    <li>{locale === 'es' ? 'Revocar la autorización y/o solicitar la supresión pura y simple del dato cuando en el tratamiento no se respeten los principios, derechos y garantías constitucionales y legales.' : 'Revoke authorization and/or request data deletion when constitutional and legal principles and guarantees are not respected during processing.'}</li>
                                    <li>{locale === 'es' ? 'Acceder en forma gratuita a sus datos personales que hayan sido objeto de Tratamiento.' : 'Access for free personal data that have been processed.'}</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold text-[#0c1a35] mb-3">
                                    {locale === 'es' ? '4. Destrucción de Archivos Temporales' : '4. Destruction of Temporary Files'}
                                </h2>
                                <p>
                                    {locale === 'es'
                                        ? 'Como agencia de traducciones juramentadas, entendemos el nivel de sensibilidad del material procesado. Tras la entrega conforme del archivo al cliente, los documentos físicos y réplicas digitales involucradas se mantendrán almacenadas de forma cifrada única y exclusivamente durante nuestro periodo temporal de garantía y eventualidad de soporte. Cumplida la etapa, los documentos confidenciales son eliminados de nuestros servidores para proteger su integridad.'
                                        : 'As a sworn translation agency, we understand the sensitivity level of the processed material. Upon confirmed delivery to the client, physical documents and involved digital replicas will be stored encrypted uniquely and exclusively during our temporary warranty period for support eventualities. Once this stage concludes, confidential documents are permanently deleted from our servers to protect your integrity.'}
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold text-[#0c1a35] mb-3">
                                    {locale === 'es' ? '5. Contacto para Ejercicio de Derechos' : '5. Contact to Exercise Rights'}
                                </h2>
                                <p>
                                    {locale === 'es'
                                        ? 'Las peticiones, consultas y reclamos relacionados con la protección de datos personales pueden dirigirse al correo electrónico traduccionesenbogotawot@gmail.com o enviando correspondencia escrita a nuestras instalaciones en Bogotá.'
                                        : 'Petitions, queries, and claims related to personal data protection can be directed to the email traduccionesenbogotawot@gmail.com or by sending written correspondence to our facilities in Bogotá.'}
                                </p>
                            </section>

                        </div>

                        <div className="mt-12 pt-6 border-t border-slate-100 flex items-center justify-between text-sm text-slate-400">
                            <div>WORLD OFFICIAL TRANSLATIONS S.A.S.</div>
                            <div>{locale === 'es' ? 'Actualizado: Marzo 2026' : 'Updated: March 2026'}</div>
                        </div>

                    </div>
                </div>
            </main>
            <Footer locale={locale} />
        </>
    )
}
