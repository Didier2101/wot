import type { Metadata } from 'next'
import { Scale, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import type { Locale } from '@/lib/i18n'

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ lang?: string }> }): Promise<Metadata> {
    const { lang } = await searchParams
    const locale: Locale = lang === 'en' ? 'en' : 'es'
    return {
        title: locale === 'es' ? 'Términos y Condiciones de Servicio | WOT Traducciones' : 'Terms and Conditions of Service | WOT Translations',
        description: locale === 'es'
            ? 'Términos comerciales, responsabilidades y política de entregas para Traducciones Oficiales y Certificadas por WORLD OFFICIAL TRANSLATIONS S.A.S.'
            : 'Commercial terms, responsibilities, and delivery policy for Official and Certified Translations by WORLD OFFICIAL TRANSLATIONS S.A.S.'
    }
}

export default async function TerminosPage({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
    const { lang } = await searchParams
    const locale: Locale = lang === 'en' ? 'en' : 'es'

    return (
        <>
            <Navbar locale={locale} currentPath="/legal/terminos" />
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
                            <Scale size={32} />
                        </div>

                        <div className="inline-flex items-center gap-2 text-yellow-400 text-xs font-bold uppercase tracking-wider mb-6">
                            <CheckCircle size={14} />
                            {locale === 'es' ? 'Acuerdo Comercial' : 'Commercial Agreement'}
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-serif font-bold mb-6 leading-tight">
                            {locale === 'es' ? 'Términos y Condiciones de Servicio' : 'Terms and Conditions of Service'}
                        </h1>

                        <p className="text-yellow-400/90 text-xl font-medium mb-6">
                            {locale === 'es' ? 'Condiciones aplicables a los servicios de traducción.' : 'Conditions applicable to translation services.'}
                        </p>
                    </div>
                </section>

                <div className="container mx-auto px-5 lg:px-8 max-w-[800px] -mt-10 relative z-10">
                    <div className="bg-white p-10 md:p-14 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100">

                        <div className="space-y-8 text-slate-600 leading-relaxed text-[1.05rem]">

                            <section>
                                <p className="font-bold text-[#1a3a6c] mb-6">
                                    {locale === 'es'
                                        ? 'Al solicitar o aprobar una cotización y efectuar el anticipo para iniciar un proyecto con WORLD OFFICIAL TRANSLATIONS S.A.S., el cliente acepta en su totalidad y de forma irrevocable las siguientes condiciones comerciales y legales.'
                                        : 'By requesting or approving a quote and making the advance payment to initiate a project with WORLD OFFICIAL TRANSLATIONS S.A.S., the client fully and irrevocably accepts the following commercial and legal conditions.'}
                                </p>

                                <h2 className="text-xl font-bold text-[#0c1a35] mb-3">
                                    {locale === 'es' ? '1. Naturaleza del Servicio de Traducción' : '1. Nature of the Translation Service'}
                                </h2>
                                <p>
                                    {locale === 'es'
                                        ? 'Nuestros servicios están basados en el principio de "Traducción Oficial, Certificada y Fiel del documento original". El Traductor Oficial plasma con exactitud idiomática, técnica y legal el contenido tal y como se encuentra en el documento fuente.'
                                        : 'Our services are based on the principle of "Official, Certified, and Faithful Translation of the original document." The Official Translator renders with idiomatic, technical, and legal accuracy the content exactly as it is found in the source document.'}
                                </p>
                            </section>

                            <section className="bg-slate-50 border border-slate-100 p-6 rounded-xl">
                                <h2 className="text-xl font-bold text-[#0c1a35] mb-3">
                                    {locale === 'es' ? '2. Limitación de Responsabilidad' : '2. Limitation of Liability'}
                                </h2>
                                <ul className="list-disc pl-5 space-y-3">
                                    <li>
                                        <strong>{locale === 'es' ? 'Falsedad o Inconsistencias Originales:' : 'Original Falsehood or Inconsistencies:'} </strong>
                                        {locale === 'es'
                                            ? 'WORLD OFFICIAL TRANSLATIONS S.A.S. NO es responsable por la autenticidad, autoría, falsedad, omisiones de la fuente o ilegalidad intrínseca de los documentos proporcionados por el cliente. Traducimos textualmente y nos abstenemos de alterar el sentido original por peticiones del cliente (ej. cambiar una calificación académica o alterar fechas). '
                                            : 'WORLD OFFICIAL TRANSLATIONS S.A.S. is NOT responsible for the authenticity, authorship, falsehood, source omissions, or intrinsic illegality of the documents provided by the client. We translate verbatim and abstain from altering the original meaning by client request (e.g., changing an academic grade or altering dates). '}
                                    </li>
                                    <li>
                                        <strong>{locale === 'es' ? 'Errores en documentos originales:' : 'Errors in original documents:'} </strong>
                                        {locale === 'es'
                                            ? 'Si el documento fuente tiene nombres propios mal escritos o fechas erróneas, la traducción oficial mantendrá el error visible o señalará [sic] según los protocolos del traductor para certificar fidelidad.'
                                            : 'If the source document has misspelled proper names or erroneous dates, the official translation will keep the error visible or point it out [sic] according to the translator\'s protocols to certify fidelity.'}
                                    </li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold text-[#0c1a35] mb-3">
                                    {locale === 'es' ? '3. Tiempos de Entrega (Estándar vs. Exprés)' : '3. Delivery Times (Standard vs. Express)'}
                                </h2>
                                <p className="mb-3">
                                    {locale === 'es'
                                        ? 'El tiempo de ejecución y entrega comienza a contar UNICAMENTE después de la verificación del comprobante de pago o anticipo (normalmente del 50%).'
                                        : 'Execution and delivery time strictly begin ONLY after the verification of the payment receipt or advance payment (usually 50%).'}
                                </p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li><strong>{locale === 'es' ? 'Entrega Estándar:' : 'Standard Delivery:'}</strong> {locale === 'es' ? '24 a 72 horas hábiles, según el volumen total y la complejidad técnica de la terminología de los folios.' : '24 to 72 business hours, depending on total volume and technical complexity of the folio terminology.'}</li>
                                    <li><strong>{locale === 'es' ? 'Servicio Exprés (Urgencias):' : 'Express Service (Rush):'}</strong> {locale === 'es' ? 'Garantía de entrega entre 4 a 12 horas. Este servicio conlleva un recargo en el costo preacordado en la cotización inicial y está sujeto a disponibilidad.' : 'Guaranteed delivery between 4 to 12 hours. This service incurs a surcharge on the pre-agreed cost in the initial quote and is subject to availability.'}</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold text-[#0c1a35] mb-3">
                                    {locale === 'es' ? '4. Modificaciones y Política de Reembolsos' : '4. Modifications and Refund Policy'}
                                </h2>
                                <ul className="list-disc pl-5 space-y-3">
                                    <li>
                                        {locale === 'es'
                                            ? 'Una vez el traductor juramentado ha asignado su bloque horario y/o iniciado el proceso de redacción oficial, las cancelaciones solicitadas por el cliente conllevarán una penalidad proporcional al avance ejecutado. En caso de cancelaciones tardías, es posible que el anticipo pagado no sea reembolsable.'
                                            : 'Once the sworn translator has assigned their time slot and/or formally started the drafting process, client-requested cancellations will incur a penalty proportional to the progress made. In cases of late cancellations, the advance payment may become non-refundable.'}
                                    </li>
                                    <li>
                                        {locale === 'es'
                                            ? 'Las adiciones de nuevos documentos a un proyecto ya cotizado se tratarán como un anexo independiente y requerirán su propia valoración comercial de tiempo y costo.'
                                            : 'Additions of new documents to an already quoted project will be treated as an independent annex and will require their own commercial assessment of time and cost.'}
                                    </li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold text-[#0c1a35] mb-3">
                                    {locale === 'es' ? '5. Pagos y Envío' : '5. Payments and Dispatch'}
                                </h2>
                                <p>
                                    {locale === 'es'
                                        ? 'Las traducciones se envían en formato digital (PDF con firma digital validable) como estándar de la industria. El pago del balance restante (50% final) se exige antes del envío definitivo. En caso de requerir copias físicas impresas con firma húmeda y sello de relieve y envíos nacionales por correo certificado, estos acarrearán costos adicionales que el usuario deberá sufragar.'
                                        : 'Translations are sent in digital format (PDF with verifiable digital signature) as an industry standard. Payment of the remaining balance (final 50%) is strictly required prior to final dispatch. If physical printed copies with wet signature and relief seal and national shipments via certified mail are required, these will incur additional costs to be bounded by the user.'}
                                </p>
                            </section>

                        </div>

                        <div className="mt-12 pt-6 border-t border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4 text-sm text-slate-400">
                            <div>
                                <strong className="font-bold text-slate-500">WORLD OFFICIAL TRANSLATIONS S.A.S.</strong><br />
                                NIT: Registro Cámara de Comercio de Bogotá<br />
                                {locale === 'es' ? 'Carrera 14B #161-54, Oficina 1002 — Bogotá, CO' : 'Carrera 14B #161-54, Office 1002 — Bogotá, CO'}
                            </div>
                        </div>

                    </div>
                </div>
            </main>
            <Footer locale={locale} />
        </>
    )
}
