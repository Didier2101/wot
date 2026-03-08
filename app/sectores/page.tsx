import Image from 'next/image'
import Link from 'next/link'
import { MessageCircle, ArrowRight, Microscope, Stethoscope, GraduationCap, Briefcase, Scale, Cpu, Globe, CheckCircle } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import type { Locale } from '@/lib/i18n'
import contentData from '@/data/content.json'

import type { Metadata } from 'next'

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ lang?: string }> }): Promise<Metadata> {
    const { lang } = await searchParams
    const locale: Locale = lang === 'en' ? 'en' : 'es'
    return {
        title: locale === 'es' ? 'Sectores que Atendemos | Lex Translations' : 'Sectors We Serve | Lex Translations',
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

const SECTOR_IMAGES: Record<string, string> = {
    'juridico': 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=800',
    'medico': 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800',
    'academico': 'https://images.unsplash.com/photo-1523050338691-c1e53d076efd?q=80&w=800',
    'financiero-seguros': 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800',
    'it-software': 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800',
    'cientifico': 'https://images.unsplash.com/photo-1532187863486-abf51ad982d7?q=80&w=800'
}

export default async function SectoresPage({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
    const { lang } = await searchParams
    const locale: Locale = lang === 'en' ? 'en' : 'es'

    return (
        <>
            <Navbar locale={locale} currentPath="/sectores" />

            <main className="font-sans antialiased text-gray-400 bg-[#0A192F]">
                {/* HERO */}
                <section className="relative py-24 lg:py-32 overflow-hidden bg-[#0A192F]" aria-label="Sectores">
                    <Image
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                        alt="Lex Translations Sectors"
                        fill
                        priority
                        className="object-cover object-center z-0 opacity-40 grayscale-[0.2]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0A192F] via-[#0A192F]/70 to-[#0A192F] z-10" />
                    <div className="container mx-auto px-5 lg:px-16 max-w-5xl text-center relative z-20">
                        <nav aria-label="breadcrumb" className="flex items-center justify-center gap-2 text-sm text-white/50 mb-10 font-medium tracking-widest uppercase text-[10px]">
                            <Link href={`/?lang=${locale}`} className="hover:text-[#D4AF37] transition-colors">Home</Link>
                            <span className="text-white/20">/</span>
                            <span className="text-white/80">{locale === 'es' ? 'Sectores' : 'Sectors'}</span>
                        </nav>

                        <div className="mx-auto w-16 h-16 rounded-sm bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] mb-8 shadow-2xl">
                            <Globe size={32} />
                        </div>

                        <div className="inline-flex items-center gap-3 text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
                            <CheckCircle size={14} />
                            {locale === 'es' ? 'Precisión Técnica' : 'Technical Precision'}
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-serif font-bold mb-10 leading-tight tracking-tight">
                            {locale === 'es' ? 'Sectores que atendemos' : 'Sectors we serve'}
                        </h1>

                        <p className="text-gray-400 text-xl md:text-2xl font-light mb-10 tracking-wide max-w-3xl mx-auto leading-relaxed">
                            {locale === 'es'
                                ? 'Traductores especializados por industria. Cada sector tiene su propio vocabulario técnico y nosotros lo dominamos con rigor.'
                                : 'Industry-specialized translators. Each sector has its own technical vocabulary, and we master it with rigor.'}
                        </p>
                    </div>
                </section>

                {/* Sectores grid */}
                <section className="bg-[#0A192F] py-24 lg:py-32 border-t border-white/5">
                    <div className="container mx-auto px-5 lg:px-16">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 lg:gap-32">
                            {contentData.sectores.map((sector) => (
                                <div key={sector.slug} className="group relative flex flex-col items-start transition-all duration-500">
                                    <div className="relative w-full aspect-[16/9] mb-10 overflow-hidden rounded-sm border border-white/5">
                                        <Image
                                            src={SECTOR_IMAGES[sector.slug] || "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800"}
                                            alt={sector.title[locale]}
                                            fill
                                            className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[0.5] group-hover:grayscale-0"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/80 via-transparent to-transparent" />
                                        <div className="absolute bottom-4 left-4 text-[#D4AF37] transition-transform duration-500 group-hover:-translate-y-1">
                                            {ICON_MAP[sector.slug] || <Globe size={28} />}
                                        </div>
                                    </div>
                                    <h2 className="text-2xl font-serif font-bold text-white mb-6 tracking-tight group-hover:text-[#D4AF37] transition-colors duration-500">
                                        {sector.title[locale]}
                                    </h2>
                                    <p className="text-gray-500 text-lg leading-relaxed mb-10 font-light tracking-wide group-hover:text-gray-300 transition-colors duration-500">
                                        {sector.description[locale]}
                                    </p>

                                    <div className="mt-auto">
                                        <Link
                                            href={`/sectores/${sector.slug}?lang=${locale}`}
                                            className="inline-flex items-center gap-4 text-[#D4AF37] font-bold uppercase tracking-[0.4em] text-[10px] hover:text-white transition-all group/link"
                                        >
                                            {locale === 'es' ? 'Ver detalles' : 'View details'}
                                            <div className="w-8 h-[1px] bg-white transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Industry Visuals */}
                <section className="py-24 bg-[#0A192F] overflow-hidden border-t border-white/5">
                    <div className="container mx-auto px-5 lg:px-16">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="relative h-[400px] rounded-sm overflow-hidden group border border-white/5">
                                <Image
                                    src="https://images.unsplash.com/photo-1532187863486-abf51ad982d7?q=80&w=1000&auto=format&fit=crop"
                                    alt="Science Sector"
                                    fill
                                    className="object-cover transition-all duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/40 to-transparent" />
                                <div className="absolute bottom-8 left-8">
                                    <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.4em] mb-2">Científico</p>
                                    <h4 className="text-white font-serif text-xl font-bold">Investigación Especializada</h4>
                                </div>
                            </div>
                            <div className="relative h-[400px] rounded-sm overflow-hidden group border border-white/5">
                                <Image
                                    src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop"
                                    alt="IT Sector"
                                    fill
                                    className="object-cover transition-all duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/40 to-transparent" />
                                <div className="absolute bottom-8 left-8">
                                    <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.4em] mb-2">Tecnológico</p>
                                    <h4 className="text-white font-serif text-xl font-bold">Localización de Software</h4>
                                </div>
                            </div>
                            <div className="relative h-[400px] rounded-sm overflow-hidden group border border-white/5">
                                <Image
                                    src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1000&auto=format&fit=crop"
                                    alt="Legal Sector"
                                    fill
                                    className="object-cover transition-all duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/40 to-transparent" />
                                <div className="absolute bottom-8 left-8">
                                    <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.4em] mb-2">Jurídico</p>
                                    <h4 className="text-white font-serif text-xl font-bold">Rigor Normativo</h4>
                                </div>
                            </div>
                            <div className="relative h-[400px] rounded-sm overflow-hidden group border border-white/5">
                                <Image
                                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1000&auto=format&fit=crop"
                                    alt="Medical Sector"
                                    fill
                                    className="object-cover transition-all duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/40 to-transparent" />
                                <div className="absolute bottom-8 left-8">
                                    <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.4em] mb-2">Médico</p>
                                    <h4 className="text-white font-serif text-xl font-bold">Salud Global</h4>
                                </div>
                            </div>
                            <div className="relative h-[400px] rounded-sm overflow-hidden group border border-white/5">
                                <Image
                                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
                                    alt="Financial Sector"
                                    fill
                                    className="object-cover transition-all duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/40 to-transparent" />
                                <div className="absolute bottom-8 left-8">
                                    <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.4em] mb-2">Financiero</p>
                                    <h4 className="text-white font-serif text-xl font-bold">Análisis de Mercados</h4>
                                </div>
                            </div>
                            <div className="relative h-[400px] rounded-sm overflow-hidden group border border-white/5">
                                <Image
                                    src="https://images.unsplash.com/photo-1523050338691-c1e53d076efd?q=80&w=1000&auto=format&fit=crop"
                                    alt="Academic Sector"
                                    fill
                                    className="object-cover transition-all duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/40 to-transparent" />
                                <div className="absolute bottom-8 left-8">
                                    <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.4em] mb-2">Académico</p>
                                    <h4 className="text-white font-serif text-xl font-bold">Excelencia Educativa</h4>
                                </div>
                            </div>
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
                            {locale === 'es' ? '¿Su sector no aparece aquí?' : "Doesn't your sector appear here?"}
                        </h2>
                        <p className="text-gray-400 text-xl font-light mb-16 max-w-2xl mx-auto leading-relaxed tracking-wide">
                            {locale === 'es'
                                ? 'Tenemos traductores para casi cualquier industria. Contáctenos para recibir una asesoría técnica sin costo sobre su proyecto.'
                                : 'We have translators for almost any industry. Contact us for a free technical advisory on your project.'}
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-6">
                            <Link href={`/contacto?lang=${locale}`} className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-sm bg-[#D4AF37] text-[#0A192F] font-bold text-[13px] uppercase tracking-[0.2em] transition-all duration-300 hover:bg-white hover:text-[#0A192F]">
                                {locale === 'es' ? 'Ir al Formulario' : 'Go to Form'}
                                <ArrowRight size={20} />
                            </Link>
                            <Link href="https://wa.me/573028645014" className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-sm bg-transparent border border-[#0A192F] text-[#D4AF37] font-bold text-[13px] uppercase tracking-[0.2em] transition-all duration-300 hover:bg-[#D4AF37] hover:text-[#0A192F]" target="_blank" rel="noopener noreferrer">
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
