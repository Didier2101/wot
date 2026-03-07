import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import {
    ArrowRight, MessageCircle, CheckCircle, Shield, Clock, Globe
} from 'lucide-react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import type { Locale } from '@/lib/i18n'
import contentData from '@/data/content.json'

// ── SSG: generar estáticamente ─────────────────────────────
export async function generateStaticParams() {
    return contentData.sectores.map((s) => ({ slug: s.slug }))
}

// ── Metadata dinámica ──────────────────────────────────────────────────────
export async function generateMetadata({ params, searchParams }: {
    params: Promise<{ slug: string }>,
    searchParams: Promise<{ lang?: string }>
}): Promise<Metadata> {
    const { slug } = await params
    const { lang } = await searchParams
    const locale: Locale = lang === 'en' ? 'en' : 'es'
    const sector = contentData.sectores.find((s) => s.slug === slug)

    if (!sector) return {}

    return {
        title: sector.metadata.seo_title[locale],
        description: sector.description[locale],
        keywords: sector.metadata.keywords,
        alternates: {
            canonical: `https://www.traduccionescertificadas.com.co/sectores/${slug}?lang=${locale}`
        }
    }
}

export default async function SectorDetailPage({ params, searchParams }: {
    params: Promise<{ slug: string }>,
    searchParams: Promise<{ lang?: string }>
}) {
    const { slug } = await params
    const { lang } = await searchParams
    const locale: Locale = lang === 'en' ? 'en' : 'es'
    const sector = contentData.sectores.find((s) => s.slug === slug)

    if (!sector) notFound()

    // Map dynamic data
    const title = sector.title[locale]
    const description = sector.description[locale]
    const contentHtml = sector.content_html[locale]

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": title,
        "description": description,
        "provider": {
            "@type": "LocalBusiness",
            "name": "Traducciones Oficiales",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Carrera 14B #161-54 Torre 2/1002",
                "addressLocality": "Bogotá",
                "addressCountry": "CO"
            }
        },
        "areaServed": "Bogotá, Colombia",
        "serviceType": `Translation for ${title} Sector`
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Navbar locale={locale} currentPath={`/sectores/${slug}`} />

            <main className="font-sans antialiased text-slate-800">
                {/* HERO SECTOR */}
                <section className="relative py-24 lg:py-32 overflow-hidden bg-[#0A192F]" aria-label={title}>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(212,175,55,0.1)_0%,transparent_70%)] pointer-events-none" />
                    <div className="container mx-auto px-5 lg:px-16 max-w-5xl text-center relative z-10">
                        <nav aria-label="breadcrumb" className="flex items-center justify-center gap-2 text-sm text-white/50 mb-10 font-medium tracking-widest uppercase text-[10px]">
                            <Link href={`/?lang=${locale}`} className="hover:text-[#D4AF37] transition-colors">Home</Link>
                            <span className="text-white/20">/</span>
                            <Link href={`/sectores?lang=${locale}`} className="hover:text-[#D4AF37] transition-colors">
                                {locale === 'es' ? 'Sectores' : 'Sectors'}
                            </Link>
                            <span className="text-white/20">/</span>
                            <span className="text-white/80">{title}</span>
                        </nav>

                        <div className="mx-auto w-16 h-16 rounded-sm bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] mb-8 shadow-2xl">
                            <Globe size={32} />
                        </div>

                        <div className="inline-flex items-center gap-3 text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
                            <CheckCircle size={14} />
                            {locale === 'es' ? 'Traducción Especializada' : 'Specialized Translation'}
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-serif font-bold mb-10 leading-tight tracking-tight">
                            {title}
                        </h1>

                        <p className="text-gray-400 text-xl md:text-2xl font-light mb-10 tracking-wide max-w-3xl mx-auto leading-relaxed">
                            {description}
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-6 mt-14">
                            <Link href={`/contacto?lang=${locale}`} className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-sm bg-[#D4AF37] text-[#0A192F] font-bold text-[13px] uppercase tracking-[0.2em] transition-all duration-300 hover:bg-white hover:text-[#0A192F] shadow-2xl">
                                {locale === 'es' ? 'Cotizar Especialidad' : 'Get a Quote'}
                                <ArrowRight size={18} />
                            </Link>
                            <Link
                                href={`https://wa.me/573123902406?text=Hola, necesito traducción especializada para el sector ${title}`}
                                className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-sm bg-transparent border border-[#D4AF37] text-[#D4AF37] font-bold text-[13px] uppercase tracking-[0.2em] transition-all duration-300 hover:bg-[#D4AF37] hover:text-[#0A192F]"
                                target="_blank" rel="noopener noreferrer"
                            >
                                <MessageCircle size={18} />
                                WhatsApp Directo
                            </Link>
                        </div>
                    </div>
                </section>

                {/* CONTENIDO CRÍTICO */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-5 lg:px-16">
                        <div className="grid gap-16 lg:grid-cols-[1fr_400px]">
                            {/* Texto Extraído del JSON */}
                            <article className="prose prose-lg prose-slate prose-headings:font-serif prose-headings:text-[#0c1a35] prose-h3:text-2xl prose-a:text-blue-600 max-w-none">
                                <div dangerouslySetInnerHTML={{ __html: contentHtml }} />

                                <div className="mt-12">
                                    <div className="text-[#0c1a35] font-bold text-xs uppercase tracking-[0.15em] mb-4 flex items-center gap-2">
                                        <div className="w-6 h-[2px] bg-[#c9a227] rounded-full" />
                                        {locale === 'es' ? 'Precisión Técnica y Validez Legal' : 'Technical Precision & Legal Validity'}
                                    </div>
                                </div>
                            </article>

                            {/* Panel lateral - Garantía de Calidad */}
                            <aside className="bg-[#0A192F] p-8 lg:p-10 rounded-sm border border-[#D4AF37]/10 shadow-2xl h-fit">
                                <div className="text-center mb-10">
                                    <div className="w-16 h-16 bg-[#D4AF37]/10 border border-[#D4AF37]/20 rounded-sm flex items-center justify-center mx-auto mb-6 shadow-2xl">
                                        <Shield size={32} className="text-[#D4AF37]" />
                                    </div>
                                    <h3 className="text-2xl font-serif font-bold text-white tracking-tight">{locale === 'es' ? 'Garantía de Calidad' : 'Quality Guarantee'}</h3>
                                </div>
                                <ul className="flex flex-col gap-6 mb-12">
                                    <li className="flex gap-4 p-5 bg-white/5 rounded-sm border border-white/5 transition-all hover:border-[#D4AF37]/20 group">
                                        <CheckCircle size={24} className="text-[#D4AF37] shrink-0 opacity-80" />
                                        <div>
                                            <div className="font-bold text-white mb-1 tracking-tight group-hover:text-[#D4AF37] transition-colors">{locale === 'es' ? 'Traductores Expertos' : 'Expert Translators'}</div>
                                            <div className="text-sm text-gray-400 font-light leading-relaxed">{locale === 'es' ? 'Nativos y certificados ante el Ministerio.' : 'Native and certified before the Ministry.'}</div>
                                        </div>
                                    </li>
                                    <li className="flex gap-4 p-5 bg-white/5 rounded-sm border border-white/5 transition-all hover:border-[#D4AF37]/20 group">
                                        <Clock size={24} className="text-[#D4AF37] shrink-0 opacity-80" />
                                        <div>
                                            <div className="font-bold text-white mb-1 tracking-tight group-hover:text-[#D4AF37] transition-colors">{locale === 'es' ? 'Entrega Puntual' : 'Punctual Delivery'}</div>
                                            <div className="text-sm text-gray-400 font-light leading-relaxed">{locale === 'es' ? 'Plazos ajustados a su necesidad empresarial.' : 'Deadlines tailored to your business needs.'}</div>
                                        </div>
                                    </li>
                                </ul>
                                <div className="text-center">
                                    <Link href={`https://wa.me/573123902406?text=Hola, necesito traducción especializada para el sector ${title}`} className="inline-flex w-full items-center justify-center gap-3 px-8 py-4 rounded-sm bg-[#D4AF37] text-[#0A192F] font-bold text-[12px] uppercase tracking-widest transition-all hover:bg-white shadow-2xl">
                                        {locale === 'es' ? 'Halar con un Especialista' : 'Talk with a Specialist'}
                                        <ArrowRight size={18} />
                                    </Link>
                                </div>
                            </aside>
                        </div>
                    </div>
                </section>

                {/* CTA FINAL - SIN FORMULARIO */}
                <section className="bg-[#0A192F] py-32 lg:py-40 relative overflow-hidden" id="contacto">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(212,175,55,0.1)_0%,transparent_70%)] pointer-events-none" />
                    <div className="container mx-auto px-5 lg:px-16 text-center max-w-4xl relative z-10">
                        <div className="inline-flex items-center justify-center gap-4 text-[#D4AF37] font-bold text-[10px] uppercase tracking-[0.3em] mb-10">
                            <div className="w-12 h-[1px] bg-[#D4AF37]/30" />
                            {locale === 'es' ? 'Cotización Inmediata' : 'Instant Quote'}
                            <div className="w-12 h-[1px] bg-[#D4AF37]/30" />
                        </div>
                        <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-10 tracking-tight leading-tight">
                            {locale === 'es'
                                ? `¿Listo para traducir sus documentos del sector ${title.toLowerCase()}?`
                                : `Ready to translate your ${title.toLowerCase()} sector documents?`}
                        </h2>
                        <p className="text-gray-400 text-xl font-light mb-16 max-w-2xl mx-auto leading-relaxed tracking-wide">
                            {locale === 'es'
                                ? 'Obtenga una respuesta en menos de 24 horas con el rigor técnico y la confidencialidad que su empresa requiere.'
                                : 'Get a response in less than 24 hours with the technical rigor and confidentiality your company requires.'}
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-6">
                            <Link href={`https://wa.me/573123902406?text=Hola, necesito traducción especializada para el sector ${title}`} className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-sm bg-[#D4AF37] text-[#0A192F] font-bold text-[13px] uppercase tracking-[0.2em] transition-all duration-300 hover:bg-white hover:text-[#0A192F] shadow-2xl" target="_blank" rel="noopener noreferrer">
                                <MessageCircle size={20} />
                                {locale === 'es' ? 'WhatsApp Directo' : 'Direct WhatsApp'}
                            </Link>
                            <Link href={`/?lang=${locale}#contacto`} className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-sm bg-transparent border border-[#D4AF37] text-[#D4AF37] font-bold text-[13px] uppercase tracking-[0.2em] transition-all duration-300 hover:bg-[#D4AF37] hover:text-[#0A192F]">
                                {locale === 'es' ? 'Ir al Formulario' : 'Go to Form'}
                                <ArrowRight size={20} />
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer locale={locale} />
        </>
    )
}
