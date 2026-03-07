import type { Metadata } from 'next'
import Link from 'next/link'
import { MessageCircle, CheckCircle, ArrowRight, Clock, FileText, Award, BadgeHelp } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import type { Locale } from '@/lib/i18n'

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ lang?: string }> }): Promise<Metadata> {
    const { lang } = await searchParams
    const locale: Locale = lang === 'en' ? 'en' : 'es'
    return {
        title: locale === 'es' ? 'Asesoría en Apostilla y Legalización | WOT Traducciones Bogotá' : 'Apostille & Legalization Advisory | WOT Translations Bogotá',
        description: locale === 'es'
            ? 'Asesoría gratuita sobre apostilla, legalización y proceso de traducción oficial en Colombia. Te guiamos paso a paso para embajadas, notarías y trámites internacionales.'
            : 'Free advisory on apostille, legalization and official translation process in Colombia. We guide you step by step for embassies, notaries and international procedures.',
    }
}

const PROCESO = [
    {
        step: '01',
        es: { title: 'Revisión del documento', desc: 'Analizamos el idioma, el formato y la fecha de emisión del documento para definir el proceso correcto.' },
        en: { title: 'Document review', desc: 'We analyze the language, format and issue date of the document to define the correct process.' },
    },
    {
        step: '02',
        es: { title: 'Traducción certificada', desc: 'Aplicamos terminología consistente y verificación de nombres, cifras y sellos originales.' },
        en: { title: 'Certified translation', desc: 'We apply consistent terminology and verify names, figures and original stamps.' },
    },
    {
        step: '03',
        es: { title: 'Control de calidad', desc: 'Revisión final por segundo traductor: comparamos cada cifra, nombre y fecha con el original.' },
        en: { title: 'Quality control', desc: 'Final review by a second translator: we compare every figure, name and date against the original.' },
    },
    {
        step: '04',
        es: { title: 'Entrega y seguimiento', desc: 'Enviamos digital y/o físico según tu necesidad. Asistencia post-entrega si el documento es rechazado.' },
        en: { title: 'Delivery and follow-up', desc: 'We deliver digitally and/or physically as needed. Post-delivery assistance if the document is rejected.' },
    },
]

const TIPS = [
    {
        icon: <FileText size={20} />,
        es: { title: 'Envía un PDF legible, no pantallazos', desc: 'Los documentos en baja resolución o fotos torcidas aumentan el tiempo de procesamiento. Usa siempre un escáner o app de escaneo.' },
        en: { title: 'Send a legible PDF, not blurry screenshots', desc: 'Low-resolution or tilted documents increase processing time. Always use a scanner or scanning app.' },
    },
    {
        icon: <CheckCircle size={20} />,
        es: { title: 'Indica el uso del documento', desc: 'Cuéntanos si es para una visa, una universidad o una notaría. El tono y el formato cambian según el destino.' },
        en: { title: 'Indicate the purpose of the document', desc: 'Tell us if it\'s for a visa, university or notary. The tone and format change depending on the destination.' },
    },
    {
        icon: <Clock size={20} />,
        es: { title: 'No esperes al último momento', desc: 'Los trámites consulares tienen tiempos variables. Pide tu traducción con al menos 5 días hábiles de anticipación.' },
        en: { title: 'Don\'t wait until the last minute', desc: 'Consular procedures have variable times. Request your translation at least 5 business days in advance.' },
    },
    {
        icon: <Award size={20} />,
        es: { title: 'Verifica si necesitas apostilla', desc: 'La apostilla la gestiona la Cancillería colombiana ANTES de que nosotros traduzcamos. Te asesoramos sobre el orden correcto del proceso sin costo.' },
        en: { title: 'Check if you need an apostille', desc: 'The apostille is managed by the Colombian Foreign Ministry BEFORE we translate. We advise you on the correct process order at no cost.' },
    },
]

export default async function AsesoriaPage({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
    const { lang } = await searchParams
    const locale: Locale = lang === 'en' ? 'en' : 'es'

    return (
        <>
            <Navbar locale={locale} currentPath="/asesoria" />

            <main className="font-sans antialiased text-slate-800">
                {/* HERO */}
                <section className="bg-gradient-to-br from-[#0c1a35] via-[#1a3055] to-[#1e4a8a] py-16 lg:py-24" aria-label="Asesoría">
                    <div className="container mx-auto px-5 lg:px-16 max-w-5xl text-center">
                        <nav aria-label="breadcrumb" className="flex items-center justify-center gap-2 text-sm text-white/60 mb-8 font-medium">
                            <Link href={`/?lang=${locale}`} className="text-white/80 hover:text-white transition-colors">Home</Link>
                            <span className="text-white/40">/</span>
                            <span className="text-white/95">{locale === 'es' ? 'Asesoría' : 'Advisory'}</span>
                        </nav>

                        <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-yellow-400/10 border border-yellow-400/20 flex items-center justify-center text-yellow-400 mb-6 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
                            <BadgeHelp size={32} />
                        </div>

                        <div className="inline-flex items-center gap-2 text-yellow-400 text-xs font-bold uppercase tracking-wider mb-6">
                            <CheckCircle size={14} />
                            {locale === 'es' ? 'Asesoría gratuita sin compromiso' : 'Free advisory, no commitment'}
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-serif font-bold mb-6 leading-tight">
                            {locale === 'es' ? 'Asesoría en Apostilla y Legalización' : 'Apostille & Legalization Advisory'}
                        </h1>

                        <p className="text-yellow-400/90 text-xl font-medium mb-6">
                            {locale === 'es'
                                ? 'No todos los documentos siguen el mismo proceso. Te guiamos paso a paso: ¿necesitas apostilla primero? ¿legalización consular? ¿traducir directamente? Resolvemos tu duda en minutos.'
                                : 'Not all documents follow the same process. We guide you step by step: do you need an apostille first? Consular legalization? Translate directly? We resolve your question in minutes.'}
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-4 mt-12">
                            <Link href={`/?lang=${locale}#contacto`} className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md bg-yellow-400 hover:bg-yellow-500 text-neutral-900 font-extrabold text-sm tracking-wider uppercase transition-all shadow-lg hover:-translate-y-1">
                                {locale === 'es' ? 'Formulario de consulta' : 'Inquiry form'}
                                <ArrowRight size={18} />
                            </Link>
                            <a
                                href={`https://wa.me/573123902406?text=${encodeURIComponent(locale === 'es' ? 'Hola, necesito asesoría sobre apostilla y traducción' : 'Hello, I need advisory on apostille and translation')}`}
                                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md bg-[#25d366] hover:bg-[#1eb358] text-white font-extrabold text-sm tracking-wider transition-all shadow-lg hover:-translate-y-1"
                                target="_blank" rel="noopener noreferrer"
                            >
                                <MessageCircle size={18} />
                                WhatsApp
                            </a>
                        </div>
                    </div>
                </section>

                {/* Proceso paso a paso */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-5 lg:px-16">
                        <div className="text-center max-w-2xl mx-auto mb-16">
                            <div className="text-[#0c1a35] font-bold text-sm uppercase tracking-[0.15em] mb-4 flex items-center justify-center gap-2">
                                <div className="w-8 h-[2px] bg-[#c9a227] rounded-full" />
                                {locale === 'es' ? 'Nuestro proceso' : 'Our process'}
                                <div className="w-8 h-[2px] bg-[#c9a227] rounded-full" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0c1a35] mb-6">
                                {locale === 'es' ? 'Cómo funciona la traducción oficial' : 'How official translation works'}
                            </h2>
                            <p className="text-slate-600 text-lg">
                                {locale === 'es'
                                    ? 'Un proceso transparente, rápido y con control de calidad en cada etapa.'
                                    : 'A transparent, fast process with quality control at every stage.'}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {PROCESO.map((p) => (
                                <div key={p.step} className="bg-slate-50 border border-slate-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                                    <div className="w-12 h-12 rounded-xl bg-[#1a3a6c] text-yellow-400 font-bold flex items-center justify-center mb-6 shadow-md">
                                        {p.step}
                                    </div>
                                    <h3 className="text-xl font-bold text-[#0c1a35] mb-3">
                                        {p[locale].title}
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        {p[locale].desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Tips para el cliente */}
                <section className="py-24 bg-blue-50 border-y border-blue-100">
                    <div className="container mx-auto px-5 lg:px-16">
                        <div className="text-center max-w-2xl mx-auto mb-16">
                            <div className="text-[#0c1a35] font-bold text-sm uppercase tracking-[0.15em] mb-4 flex items-center justify-center gap-2">
                                <div className="w-8 h-[2px] bg-[#c9a227] rounded-full" />
                                {locale === 'es' ? 'Recomendaciones' : 'Recommendations'}
                                <div className="w-8 h-[2px] bg-[#c9a227] rounded-full" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0c1a35] mb-6">
                                {locale === 'es' ? 'Cómo preparar tu documento' : 'How to prepare your document'}
                            </h2>
                            <p className="text-slate-600 text-lg">
                                {locale === 'es'
                                    ? 'Sigue estas recomendaciones para que tu traducción sea más rápida y sin contratiempos.'
                                    : 'Follow these recommendations to make your translation faster and without setbacks.'}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                            {TIPS.map((tip, i) => (
                                <div key={i} className="bg-white border border-slate-200 rounded-2xl p-8 flex gap-6 hover:shadow-md transition-shadow">
                                    <div className="w-14 h-14 rounded-xl bg-yellow-100 text-[#b08d20] flex items-center justify-center shrink-0">
                                        {tip.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-[#0c1a35] mb-2">
                                            {tip[locale].title}
                                        </h3>
                                        <p className="text-slate-600">
                                            {tip[locale].desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ Apostilla */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-5 lg:px-16 max-w-3xl">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0c1a35] mb-12 text-center">
                            {locale === 'es' ? '¿Apostilla o legalización?' : 'Apostille or legalization?'}
                        </h2>
                        <div className="space-y-4">
                            {[
                                {
                                    q: locale === 'es' ? '¿Qué es la apostilla y cuándo la necesito?' : 'What is an apostille and when do I need it?',
                                    a: locale === 'es'
                                        ? 'La apostilla es un sello que valida documentos públicos entre países firmantes del Convenio de La Haya (más de 120 países). Si el país destino hace parte del convenio, necesitas apostilla. Si no, necesitas legalización consular. La tramita la Cancillería colombiana.'
                                        : 'The apostille is a seal that validates public documents between countries that have signed the Hague Convention (over 120 countries). If the destination country is part of the convention, you need an apostille. If not, you need consular legalization. It is processed by the Colombian Foreign Ministry.',
                                },
                                {
                                    q: locale === 'es' ? '¿Primero apostilla o primero traducción?' : 'Apostille first or translation first?',
                                    a: locale === 'es'
                                        ? 'Generalmente: primero apostilla el documento original, luego nosotros lo traducimos. Algunos países aceptan apostillar la traducción; en ese caso primero traducimos y después apostillan la traducción. Te asesoramos caso por caso.'
                                        : 'Generally: first apostille the original document, then we translate it. Some countries accept apostilling the translation; in that case we first translate and then the translation is apostilled. We advise case by case.',
                                },
                                {
                                    q: locale === 'es' ? '¿La Cancillería da apostilla a cualquier documento?' : 'Does the Foreign Ministry issue apostilles for any document?',
                                    a: locale === 'es'
                                        ? 'Solo apostillan documentos públicos expedidos en Colombia: registros civiles, diplomas, documentos notariales y judiciales. Los documentos privados (contratos, cartas) no pueden apostillarse directamente; deben elevarse a escritura pública antes.'
                                        : 'They only apostille public documents issued in Colombia: civil records, diplomas, notarial and judicial documents. Private documents (contracts, letters) cannot be apostilled directly; they must first be elevated to a public deed.',
                                },
                            ].map((item, i) => (
                                <details key={i} className="group bg-slate-50 border border-slate-200 rounded-xl overflow-hidden cursor-pointer">
                                    <summary className="flex items-center justify-between p-6 font-bold text-[#0c1a35] hover:text-[#1a3a6c] select-none">
                                        <span>{item.q}</span>
                                        <ArrowRight size={20} className="text-slate-400 group-open:rotate-90 transition-transform" />
                                    </summary>
                                    <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                                        {item.a}
                                    </div>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Final */}
                <section className="bg-gradient-to-br from-[#1a3a6c] to-[#0c1a35] py-24" id="contacto">
                    <div className="container mx-auto px-5 lg:px-16 text-center max-w-3xl">
                        <div className="text-yellow-400 font-bold text-sm uppercase tracking-[0.15em] mb-6 inline-flex items-center gap-3">
                            <div className="w-8 h-[2px] bg-yellow-400/50 rounded-full" />
                            {locale === 'es' ? 'Contacto' : 'Contact'}
                            <div className="w-8 h-[2px] bg-yellow-400/50 rounded-full" />
                        </div>
                        <h2 className="text-white font-serif font-bold text-3xl md:text-4xl leading-tight mb-8">
                            {locale === 'es' ? '¿Tiene dudas? Escríbanos ahora' : 'Have questions? Write us now'}
                        </h2>
                        <p className="text-white/80 text-lg md:text-xl mb-12 leading-relaxed">
                            {locale === 'es'
                                ? 'Asesoría profesional sin costo. Contáctenos para recibir orientación experta sobre su proceso.'
                                : 'Professional free advisory. Contact us for expert guidance on your process.'}
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-4">
                            <Link href={`/contacto?lang=${locale}`} className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-yellow-400 hover:bg-yellow-500 text-neutral-900 font-bold tracking-wider transition-colors shadow-lg">
                                {locale === 'es' ? 'Ir al Formulario' : 'Go to Form'}
                                <ArrowRight size={20} />
                            </Link>
                            <a href="https://wa.me/573123902406" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#25d366] hover:bg-[#1eb358] text-white font-bold tracking-wider transition-colors shadow-lg" target="_blank" rel="noopener noreferrer">
                                <MessageCircle size={20} />
                                WhatsApp
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <Footer locale={locale} />
        </>
    )
}
