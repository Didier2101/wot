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
        title: locale === 'es' ? 'Términos y Condiciones de Servicio | Traducciones Oficiales' : 'Terms and Conditions of Service | Official Translations',
        description: locale === 'es'
            ? 'Términos comerciales, responsabilidades y política de entregas para Traducciones Oficiales y Certificadas por Traducciones Oficiales S.A.S.'
            : 'Commercial terms, responsibilities, and delivery policy for Official and Certified Translations by Traducciones Oficiales S.A.S.'
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
                <section className="relative py-24 lg:py-32 overflow-hidden bg-[#0A192F]" aria-label="Legal">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(212,175,55,0.1)_0%,transparent_70%)] pointer-events-none" />
                    <div className="container mx-auto px-5 lg:px-16 max-w-5xl text-center relative z-10">
                        <nav aria-label="breadcrumb" className="flex items-center justify-center gap-2 text-sm text-white/50 mb-10 font-medium tracking-widest uppercase text-[10px]">
                            <Link href={`/?lang=${locale}`} className="hover:text-[#D4AF37] transition-colors">Home</Link>
                            <span className="text-white/20">/</span>
                            <span className="text-white/80">Legal</span>
                        </nav>

                        <div className="mx-auto w-16 h-16 rounded-sm bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] mb-8 shadow-2xl">
                            <Scale size={32} />
                        </div>

                        <div className="inline-flex items-center gap-3 text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
                            <CheckCircle size={14} />
                            {locale === 'es' ? 'Acuerdo Comercial' : 'Commercial Agreement'}
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-serif font-bold mb-10 leading-tight tracking-tight">
                            {locale === 'es' ? 'Términos y Condiciones' : 'Terms and Conditions'}
                        </h1>

                        <p className="text-gray-400 text-xl font-light mb-6 tracking-wide max-w-2xl mx-auto">
                            {locale === 'es' ? 'Marco legal y condiciones aplicables a la prestación de servicios.' : 'Legal framework and conditions applicable to the provision of services.'}
                        </p>
                    </div>
                </section>

                <div className="container mx-auto px-5 lg:px-8 max-w-[900px] -mt-20 relative z-20">
                    <div className="bg-[#0A192F] p-10 md:p-20 rounded-sm shadow-2xl border border-[#D4AF37]/10 relative overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,rgba(212,175,55,0.02)_0%,transparent_50%)] pointer-events-none" />

                        <div className="space-y-12 text-gray-400 leading-relaxed text-lg font-light tracking-wide relative z-10">

                            <section>
                                <p className="font-serif font-bold text-white text-xl mb-10 leading-relaxed">
                                    {locale === 'es'
                                        ? 'Al solicitar o aprobar una cotización y efectuar el anticipo para iniciar un proyecto con Traducciones Oficiales S.A.S., el cliente acepta en su totalidad y de forma irrevocable las siguientes condiciones comerciales y legales que rigen el rigor de nuestra práctica profesional.'
                                        : 'By requesting or approving a quote and making the advance payment to initiate a project with Traducciones Oficiales S.A.S., the client fully and irrevocably accepts the following commercial and legal conditions that govern the rigor of our professional practice.'}
                                </p>

                                <h2 className="text-2xl font-serif font-bold text-[#D4AF37] mb-6 tracking-tight">
                                    {locale === 'es' ? '1. Naturaleza del Servicio de Traducción' : '1. Nature of the Translation Service'}
                                </h2>
                                <p>
                                    {locale === 'es'
                                        ? 'Nuestros servicios están basados en el principio de "Traducción Oficial, Certificada y Fiel del documento original". El Traductor Oficial plasma con exactitud idiomática, técnica y legal el contenido tal y como se encuentra en el documento fuente, sin alteraciones de fondo que comprometan la veracidad de la certificación.'
                                        : 'Our services are based on the principle of "Official, Certified, and Faithful Translation of the original document." The Official Translator renders with idiomatic, technical, and legal accuracy the content exactly as it is found in the source document, without substantive alterations that compromise the veracity of the certification.'}
                                </p>
                            </section>

                            <section className="bg-white/5 border border-white/5 p-10 rounded-sm">
                                <h2 className="text-2xl font-serif font-bold text-[#D4AF37] mb-6 tracking-tight">
                                    {locale === 'es' ? '2. Limitación de Responsabilidad' : '2. Limitation of Liability'}
                                </h2>
                                <ul className="space-y-6">
                                    <li className="flex gap-4">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-2.5 shrink-0" />
                                        <span>
                                            <strong className="text-white font-bold">{locale === 'es' ? 'Falsedad o Inconsistencias Originales:' : 'Original Falsehood or Inconsistencies:'} </strong>
                                            {locale === 'es'
                                                ? 'Traducciones Oficiales S.A.S. NO es responsable por la autenticidad, autoría, falsedad, omisiones de la fuente o ilegalidad intrínseca de los documentos proporcionados por el cliente. Traducimos bajo el principio de buena fe y nos abstenemos de alterar el sentido original por peticiones externas.'
                                                : 'Traducciones Oficiales S.A.S. is NOT responsible for the authenticity, authorship, falsehood, source omissions, or intrinsic illegality of the documents provided by the client. We translate under the principle of good faith and abstain from altering the original meaning by external request.'}
                                        </span>
                                    </li>
                                    <li className="flex gap-4">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-2.5 shrink-0" />
                                        <span>
                                            <strong className="text-white font-bold">{locale === 'es' ? 'Errores en documentos originales:' : 'Errors in original documents:'} </strong>
                                            {locale === 'es'
                                                ? 'Si el documento fuente tiene nombres propios mal escritos o fechas erróneas, la traducción oficial mantendrá el error visible o señalará [sic] según los protocolos internacionales para certificar fidelidad absoluta.'
                                                : 'If the source document has misspelled proper names or erroneous dates, the official translation will keep the error visible or point it out [sic] according to international protocols to certify absolute fidelity.'}
                                        </span>
                                    </li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-serif font-bold text-[#D4AF37] mb-6 tracking-tight">
                                    {locale === 'es' ? '3. Tiempos de Entrega' : '3. Delivery Times'}
                                </h2>
                                <p className="mb-6">
                                    {locale === 'es'
                                        ? 'El tiempo de ejecución y entrega comienza a contar estrictamente después de la verificación del comprobante de pago o anticipo formal.'
                                        : 'Execution and delivery time strictly begin after the verification of the payment receipt or formal advance payment.'}
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                                    <div className="p-6 bg-white/5 border-l-2 border-[#D4AF37]">
                                        <div className="text-white font-bold mb-2 tracking-widest uppercase text-xs">{locale === 'es' ? 'Estándar' : 'Standard'}</div>
                                        <p className="text-sm font-light leading-relaxed">{locale === 'es' ? '24 a 72 horas hábiles, según volumen y complejidad técnica.' : '24 to 72 business hours, depending on volume and technical complexity.'}</p>
                                    </div>
                                    <div className="p-6 bg-white/5 border-l-2 border-[#D4AF37]">
                                        <div className="text-white font-bold mb-2 tracking-widest uppercase text-xs">{locale === 'es' ? 'Servicio Exprés' : 'Express Service'}</div>
                                        <p className="text-sm font-light leading-relaxed">{locale === 'es' ? 'Entrega entre 4 a 12 horas. Este servicio conlleva un recargo por prioridad absoluta.' : 'Delivery between 4 to 12 hours. This service incurs a surcharge for absolute priority.'}</p>
                                    </div>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-2xl font-serif font-bold text-[#D4AF37] mb-6 tracking-tight">
                                    {locale === 'es' ? '4. Modificaciones y Reembolsos' : '4. Modifications and Refunds'}
                                </h2>
                                <p>
                                    {locale === 'es'
                                        ? 'Una vez el traductor juramentado ha asignado su bloque horario e iniciado el proceso de redacción oficial, las cancelaciones conllevarán una penalidad proporcional al avance. Las adiciones de nuevos documentos se tratarán como un anexo independiente y requerirán su propia valoración comercial.'
                                        : 'Once the sworn translator has assigned their time slot and started the drafting process, cancellations will incur a penalty proportional to the progress. Additions of new documents will be treated as an independent annex and will require their own commercial assessment.'}
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-serif font-bold text-[#D4AF37] mb-6 tracking-tight">
                                    {locale === 'es' ? '5. Pagos y Envío' : '5. Payments and Dispatch'}
                                </h2>
                                <p>
                                    {locale === 'es'
                                        ? 'Las traducciones se envían en formato digital (PDF con firma digital validable) como estándar premium. El pago del balance restante se exige antes del envío definitivo. Los requerimientos de copias físicas con firma húmeda y sello de relieve acarrearán costos adicionales de impresión y mensajería certificada.'
                                        : 'Translations are sent in digital format (PDF with verifiable digital signature) as a premium standard. Payment of the remaining balance is required prior to final dispatch. Requirements for physical copies with wet signature and relief seal will incur additional printing and certified courier costs.'}
                                </p>
                            </section>

                        </div>

                        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-6 text-[11px] text-gray-500 uppercase tracking-[0.2em] font-bold">
                            <div>
                                <span className="text-white block mb-2 tracking-widest">Traducciones Oficiales S.A.S.</span>
                                {locale === 'es' ? 'Calle 161 # 14B - 54, Oficina 1002 — Bogotá, CO' : '161 # 14B - 54 St, Office 1002 — Bogotá, CO'}
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-[1px] bg-[#D4AF37]/30" />
                                <span>NIT: 901.455.678-1</span>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
            <Footer locale={locale} />
        </>
    )
}
