import type { Metadata } from 'next'
import Link from 'next/link'
import { MessageCircle, ArrowRight, Microscope, Stethoscope, GraduationCap, Briefcase, Scale, Cpu, Globe, CheckCircle } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import type { Locale } from '@/lib/i18n'
import contentData from '@/data/content.json'

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ lang?: string }> }): Promise<Metadata> {
    const { lang } = await searchParams
    const locale: Locale = lang === 'en' ? 'en' : 'es'
    return {
        title: locale === 'es' ? 'Sectores que Atendemos | WOT Traducciones Bogotá' : 'Sectors We Serve | WOT Translations Bogotá',
        description: locale === 'es'
            ? 'Traducción certificada para el sector jurídico, médico, académico, financiero, tecnológico y empresarial en Bogotá. Traductores especializados por industria.'
            : 'Certified translation for the legal, medical, academic, financial, tech and business sector in Bogotá. Industry-specialized translators.',
    }
}

// Icon mapper mapping slugs to icons statically
const ICON_MAP: Record<string, React.ReactNode> = {
    'juridico': <Scale size={28} />,
    'medico': <Stethoscope size={28} />,
    'academico': <GraduationCap size={28} />,
    'financiero-seguros': <Briefcase size={28} />,
    'it-software': <Cpu size={28} />,
    'cientifico': <Microscope size={28} />
}

export default async function SectoresPage({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
    const { lang } = await searchParams
    const locale: Locale = lang === 'en' ? 'en' : 'es'

    return (
        <>
            <Navbar locale={locale} currentPath="/sectores" />

            <main className="font-sans antialiased text-slate-800">
                {/* HERO */}
                <section className="bg-gradient-to-br from-[#0c1a35] via-[#1a3055] to-[#1e4a8a] py-16 lg:py-24" aria-label="Sectores">
                    <div className="container mx-auto px-5 lg:px-16 max-w-5xl text-center">
                        <nav aria-label="breadcrumb" className="flex items-center justify-center gap-2 text-sm text-white/60 mb-8 font-medium">
                            <Link href={`/?lang=${locale}`} className="text-white/80 hover:text-white transition-colors">Home</Link>
                            <span className="text-white/40">/</span>
                            <span className="text-white/95">{locale === 'es' ? 'Sectores' : 'Sectors'}</span>
                        </nav>

                        <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-yellow-400/10 border border-yellow-400/20 flex items-center justify-center text-yellow-400 mb-6 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
                            <Globe size={32} />
                        </div>

                        <div className="inline-flex items-center gap-2 text-yellow-400 text-xs font-bold uppercase tracking-wider mb-6">
                            <CheckCircle size={14} />
                            {locale === 'es' ? 'Precisión Técnica' : 'Technical Precision'}
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-serif font-bold mb-6 leading-tight">
                            {locale === 'es' ? 'Sectores que atendemos' : 'Sectors we serve'}
                        </h1>

                        <p className="text-yellow-400/90 text-xl font-medium mb-6">
                            {locale === 'es'
                                ? 'Traductores especializados por industria. Cada sector tiene su propio vocabulario técnico y nosotros lo dominamos.'
                                : 'Industry-specialized translators. Each sector has its own technical vocabulary, and we master it.'}
                        </p>
                    </div>
                </section>

                {/* Sectores grid */}
                <section className="bg-slate-50 py-20 lg:py-28">
                    <div className="container mx-auto px-5 lg:px-16">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {contentData.sectores.map((sector) => {
                                const Icon = ICON_MAP[sector.slug] || <Globe size={28} />
                                return (
                                    <div key={sector.slug} className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative group overflow-hidden flex flex-col h-full border-t-4 border-t-[#c9a227]">
                                        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#1a3a6c] to-[#1e4a8a] text-[#c9a227] flex items-center justify-center mb-6 shadow-md transition-transform group-hover:scale-110 shrink-0">
                                            {Icon}
                                        </div>
                                        <h2 className="text-2xl font-serif font-bold text-[#0c1a35] mb-3">
                                            {sector.title[locale]}
                                        </h2>
                                        <p className="text-slate-600 text-[0.95rem] leading-relaxed mb-8 flex-grow">
                                            {sector.description[locale]}
                                        </p>

                                        <div className="pt-6 border-t border-slate-100 mt-auto">
                                            <Link
                                                href={`/sectores/${sector.slug}?lang=${locale}`}
                                                className="inline-flex items-center gap-2 text-[#1a3a6c] font-bold uppercase tracking-wider text-xs hover:text-[#c9a227] transition-colors"
                                            >
                                                {locale === 'es' ? 'Ver detalles del sector' : 'View sector details'}
                                                <ArrowRight size={16} />
                                            </Link>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* CTA final simplificado */}
                <section className="bg-blue-50 py-24 border-y border-blue-100" id="contacto">
                    <div className="container mx-auto px-5 lg:px-16 text-center max-w-3xl">
                        <div className="text-[#0c1a35] font-bold text-sm uppercase tracking-[0.15em] mb-6 inline-flex items-center gap-3">
                            <div className="w-8 h-[2px] bg-yellow-400 rounded-full" />
                            {locale === 'es' ? 'Contacto' : 'Contact'}
                            <div className="w-8 h-[2px] bg-yellow-400 rounded-full" />
                        </div>
                        <h2 className="text-[#0c1a35] font-serif font-bold text-3xl md:text-4xl leading-tight mb-8">
                            {locale === 'es' ? '¿Su sector no aparece aquí?' : "Doesn't your sector appear here?"}
                        </h2>
                        <p className="text-slate-600 text-lg md:text-xl mb-12 leading-relaxed">
                            {locale === 'es'
                                ? 'Tenemos traductores para casi cualquier industria. Contáctenos para recibir una asesoría técnica gratuita sobre su proyecto.'
                                : 'We have translators for almost any industry. Contact us for a free technical advisory on your project.'}
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-4">
                            <Link href={`/contacto?lang=${locale}`} className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#c9a227] hover:bg-[#b08d20] text-neutral-900 font-bold tracking-wider transition-colors shadow-lg">
                                {locale === 'es' ? 'Ir al Formulario de Contacto' : 'Go to Contact Form'}
                                <ArrowRight size={20} />
                            </Link>
                            <Link href="https://wa.me/573123902406" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#25d366] hover:bg-[#1eb358] text-white font-bold tracking-wider transition-colors shadow-lg" target="_blank" rel="noopener noreferrer">
                                <MessageCircle size={20} />
                                WhatsApp
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer locale={locale} />
        </>
    )
}
