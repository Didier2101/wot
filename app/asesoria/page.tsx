import Image from 'next/image'
import Link from 'next/link'
import { MessageCircle, CheckCircle, ArrowRight, Clock, FileText, Award, BadgeHelp } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import type { Locale } from '@/lib/i18n'

import type { Metadata } from 'next'

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ lang?: string }> }): Promise<Metadata> {
    const { lang } = await searchParams
    const locale: Locale = lang === 'en' ? 'en' : 'es'
    return {
        title: locale === 'es' ? 'Asesoría en Apostilla y Legalización | Lex Translations' : 'Apostille & Legalization Advisory | Lex Translations',
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
                <section className="relative py-24 lg:py-32 overflow-hidden bg-[#0A192F]" aria-label="Asesoría">
                    <Image
                        src="https://images.unsplash.com/photo-1507679799987-c7377ec48696?q=80&w=2071&auto=format&fit=crop"
                        alt="Lex Translations Advisory"
                        fill
                        priority
                        className="object-cover object-center z-0 opacity-20 grayscale-[0.5]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0A192F] via-[#0A192F]/80 to-[#0A192F] z-10" />
                    <div className="container mx-auto px-5 lg:px-16 max-w-5xl text-center relative z-20">
                        <nav aria-label="breadcrumb" className="flex items-center justify-center gap-2 text-sm text-white/50 mb-10 font-medium tracking-widest uppercase text-[10px]">
                            <Link href={`/?lang=${locale}`} className="hover:text-[#D4AF37] transition-colors">Home</Link>
                            <span className="text-white/20">/</span>
                            <span className="text-white/80">{locale === 'es' ? 'Asesoría' : 'Advisory'}</span>
                        </nav>

                        <div className="mx-auto w-16 h-16 rounded-sm bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] mb-8 shadow-2xl">
                            <BadgeHelp size={32} />
                        </div>

                        <div className="inline-flex items-center gap-3 text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
                            <CheckCircle size={14} />
                            {locale === 'es' ? 'Asesoría gratuita especializada' : 'Specialized free advisory'}
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-serif font-bold mb-10 leading-tight tracking-tight">
                            {locale === 'es' ? 'Asesoría en Apostilla y Legalización' : 'Apostille & Legalization Advisory'}
                        </h1>

                        <p className="text-gray-400 text-xl md:text-2xl font-light mb-10 tracking-wide max-w-3xl mx-auto leading-relaxed">
                            {locale === 'es'
                                ? 'No todos los documentos siguen el mismo proceso. Te guiamos con rigor técnico: ¿necesitas apostilla primero? ¿legalización consular? ¿traducir directamente? Resolvemos tu duda con precisión.'
                                : 'Not all documents follow the same process. We guide you with technical rigor: do you need an apostille first? Consular legalization? Translate directly? We resolve your question with precision.'}
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-6 mt-14">
                            <Link href={`/contacto?lang=${locale}`} className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-sm bg-[#D4AF37] text-[#0A192F] font-bold text-[13px] uppercase tracking-[0.2em] transition-all duration-300 hover:bg-white hover:text-[#0A192F] shadow-2xl">
                                {locale === 'es' ? 'Agendar Asesoría' : 'Schedule Consulting'}
                                <ArrowRight size={18} />
                            </Link>
                            <Link
                                href={`https://wa.me/573028645014?text=${encodeURIComponent(locale === 'es' ? 'Hola, necesito asesoría sobre apostilla y traducción' : 'Hello, I need advisory on apostille and translation')}`}
                                className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-sm bg-transparent border border-[#D4AF37] text-[#D4AF37] font-bold text-[13px] uppercase tracking-[0.2em] transition-all duration-300 hover:bg-[#D4AF37] hover:text-[#0A192F]"
                                target="_blank" rel="noopener noreferrer"
                            >
                                <MessageCircle size={18} />
                                WhatsApp Directo
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Proceso paso a paso */}
                <section className="py-24 lg:py-32 bg-white">
                    <div className="container mx-auto px-5 lg:px-16">
                        <div className="text-center max-w-2xl mx-auto mb-20">
                            <div className="inline-flex items-center justify-center gap-4 text-[#D4AF37] font-bold text-[10px] uppercase tracking-[0.3em] mb-6">
                                <div className="w-12 h-[1px] bg-[#D4AF37]/30" />
                                {locale === 'es' ? 'Nuestro proceso' : 'Our process'}
                                <div className="w-12 h-[1px] bg-[#D4AF37]/30" />
                            </div>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0A192F] mb-8 tracking-tight">
                                {locale === 'es' ? 'Cómo funciona la traducción oficial' : 'How official translation works'}
                            </h2>
                            <p className="text-gray-600 text-xl font-light tracking-wide leading-relaxed">
                                {locale === 'es'
                                    ? 'Un proceso transparente, rápido y con control de calidad bajo estándares internacionales.'
                                    : 'A transparent, fast process with quality control under international standards.'}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {PROCESO.map((p) => (
                                <div key={p.step} className="bg-[#0A192F] group rounded-sm p-10 border border-[#D4AF37]/10 shadow-2xl hover:border-[#D4AF37]/30 transition-all duration-500">
                                    <div className="w-12 h-12 rounded-sm bg-[#D4AF37] text-[#0A192F] font-bold text-xl flex items-center justify-center mb-8 shadow-2xl transition-transform group-hover:scale-110">
                                        {p.step}
                                    </div>
                                    <h3 className="text-xl font-serif font-bold text-white mb-5 tracking-tight group-hover:text-[#D4AF37] transition-colors">
                                        {p[locale].title}
                                    </h3>
                                    <p className="text-gray-400 font-light leading-relaxed tracking-wide">
                                        {p[locale].desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Tips para el cliente */}
                <section className="py-24 lg:py-32 bg-[#0A192F]">
                    <div className="container mx-auto px-5 lg:px-16">
                        <div className="text-center max-w-2xl mx-auto mb-20">
                            <div className="inline-flex items-center justify-center gap-4 text-[#D4AF37] font-bold text-[10px] uppercase tracking-[0.3em] mb-6">
                                <div className="w-12 h-[1px] bg-[#D4AF37]/30" />
                                {locale === 'es' ? 'Recomendaciones' : 'Recommendations'}
                                <div className="w-12 h-[1px] bg-[#D4AF37]/30" />
                            </div>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8 tracking-tight">
                                {locale === 'es' ? 'Cómo preparar tu documento' : 'How to prepare your document'}
                            </h2>
                            <p className="text-gray-400 text-xl font-light tracking-wide leading-relaxed">
                                {locale === 'es'
                                    ? 'Sigue estas recomendaciones técnicas para garantizar la máxima agilidad en su trámite.'
                                    : 'Follow these technical recommendations to ensure maximum agility in your procedure.'}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                            {TIPS.map((tip, i) => (
                                <div key={i} className="bg-white/5 border border-white/5 rounded-sm p-10 flex gap-8 hover:border-[#D4AF37]/30 transition-all duration-500 group">
                                    <div className="w-16 h-16 rounded-sm bg-[#D4AF37] text-[#0A192F] flex items-center justify-center shrink-0 shadow-2xl transition-transform group-hover:scale-110">
                                        {tip.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-serif font-bold text-white mb-4 tracking-tight group-hover:text-[#D4AF37] transition-colors">
                                            {tip[locale].title}
                                        </h3>
                                        <p className="text-gray-400 leading-relaxed font-light tracking-wide">
                                            {tip[locale].desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ Apostilla */}
                <section className="py-24 lg:py-32 bg-white">
                    <div className="container mx-auto px-5 lg:px-16 max-w-4xl">
                        <div className="text-center max-w-2xl mx-auto mb-20">
                            <div className="inline-flex items-center justify-center gap-4 text-[#D4AF37] font-bold text-[10px] uppercase tracking-[0.3em] mb-6">
                                <div className="w-12 h-[1px] bg-[#D4AF37]/30" />
                                FAQ
                                <div className="w-12 h-[1px] bg-[#D4AF37]/30" />
                            </div>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0A192F] mb-8 tracking-tight">
                                {locale === 'es' ? '¿Apostilla o legalización?' : 'Apostille or legalization?'}
                            </h2>
                        </div>
                        <div className="space-y-6">
                            {[
                                {
                                    q: locale === 'es' ? '¿Qué es la apostilla y cuándo la necesito?' : 'What is an apostille and when do I need it?',
                                    a: locale === 'es'
                                        ? 'La apostilla es un sello que valida documentos públicos entre países firmantes del Convenio de La Haya. Si el país destino hace parte del convenio, necesitas apostilla. Si no, necesitas legalización consular ante el Ministerio de Relaciones Exteriores de Colombia.'
                                        : 'The apostille is a seal that validates public documents between countries that have signed the Hague Convention. If the destination country is part of the convention, you need an apostille. If not, you need consular legalization before the Colombian Ministry of Foreign Affairs.',
                                },
                                {
                                    q: locale === 'es' ? '¿Primero apostilla o primero traducción?' : 'Apostille first or translation first?',
                                    a: locale === 'es'
                                        ? 'Generalmente el rigor técnico dicta que primero se apostilla el documento original y luego se traduce todo el conjunto. Sin embargo, algunos países aceptan apostillar la traducción oficial. Analizamos su caso específico según el país de destino.'
                                        : 'Generally, technical rigor dictates that the original document is apostilled first and then the entire set is translated. However, some countries accept apostilling the official translation. We analyze your specific case according to the destination country.',
                                },
                                {
                                    q: locale === 'es' ? '¿La Cancillería da apostilla a cualquier documento?' : 'Does the Foreign Ministry issue apostilles for any document?',
                                    a: locale === 'es'
                                        ? 'Solo documentos públicos: registros civiles, diplomas, actas notariales y judiciales. Los documentos privados (contratos, cartas) primero deben ser reconocidos ante notario para convertirse en documentos públicos y así poder ser apostillados.'
                                        : 'Only public documents: civil records, diplomas, notarial and judicial records. Private documents (contracts, letters) must first be recognized before a notary to become public documents and thus be able to be apostilled.',
                                },
                            ].map((item, i) => (
                                <details key={i} className="group bg-[#0A192F] rounded-sm border border-[#D4AF37]/10 overflow-hidden cursor-pointer transition-all hover:border-[#D4AF37]/30">
                                    <summary className="flex items-center justify-between p-8 font-serif font-bold text-lg text-white group-hover:text-[#D4AF37] select-none transition-colors">
                                        <span>{item.q}</span>
                                        <ArrowRight size={20} className="text-[#D4AF37] group-open:rotate-90 transition-transform duration-500" />
                                    </summary>
                                    <div className="px-8 pb-8 text-gray-400 leading-relaxed font-light tracking-wide border-t border-[#D4AF37]/5 pt-6 animate-in fade-in slide-in-from-top-4 duration-500">
                                        {item.a}
                                    </div>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA final simplificado */}
                <section className="bg-[#0A192F] py-32 lg:py-40 relative overflow-hidden" id="contacto">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.1)_0%,transparent_70%)] pointer-events-none" />
                    <div className="container mx-auto px-5 lg:px-16 text-center max-w-4xl relative z-10">
                        <div className="inline-flex items-center justify-center gap-4 text-[#D4AF37] font-bold text-[10px] uppercase tracking-[0.3em] mb-10">
                            <div className="w-12 h-[1px] bg-[#D4AF37]/30" />
                            {locale === 'es' ? 'Contacto' : 'Contact'}
                            <div className="w-12 h-[1px] bg-[#D4AF37]/30" />
                        </div>
                        <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-10 leading-tight tracking-tight">
                            {locale === 'es' ? '¿Tiene dudas? Escríbanos ahora' : 'Have questions? Write us now'}
                        </h2>
                        <p className="text-gray-400 text-xl font-light mb-16 max-w-2xl mx-auto leading-relaxed tracking-wide">
                            {locale === 'es'
                                ? 'Reciba asesoría profesional sin costo. Nuestros expertos están listos para orientarlo en el proceso correcto según su trámite.'
                                : 'Receive professional free advisory. Our experts are ready to guide you in the correct process according to your procedure.'}
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-6">
                            <Link href={`/contacto?lang=${locale}`} className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-sm bg-[#D4AF37] text-[#0A192F] font-bold text-[13px] uppercase tracking-[0.2em] transition-all duration-300 hover:bg-white hover:text-[#0A192F]">
                                {locale === 'es' ? 'Ir al Formulario' : 'Go to Form'}
                                <ArrowRight size={20} />
                            </Link>
                            <Link href="https://wa.me/573123902406" className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-sm bg-transparent border border-[#D4AF37] text-[#D4AF37] font-bold text-[13px] uppercase tracking-[0.2em] transition-all duration-300 hover:bg-[#D4AF37] hover:text-[#0A192F]" target="_blank" rel="noopener noreferrer">
                                <MessageCircle size={20} />
                                WhatsApp Directo
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer locale={locale} />
        </>
    )
}
