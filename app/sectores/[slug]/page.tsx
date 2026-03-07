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
            canonical: `https://www.traduccionesbogotawot.com/sectores/${slug}?lang=${locale}`
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
            "name": "WOT Traducciones Bogotá",
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
                <section className="bg-gradient-to-br from-[#0c1a35] via-[#1a3055] to-[#1e4a8a] py-16 lg:py-24" aria-label={title}>
                    <div className="container mx-auto px-5 lg:px-16 max-w-5xl text-center">
                        <nav aria-label="breadcrumb" className="flex items-center justify-center gap-2 text-sm text-white/60 mb-8 font-medium">
                            <Link href={`/?lang=${locale}`} className="text-white/80 hover:text-white transition-colors">Home</Link>
                            <span className="text-white/40">/</span>
                            <Link href={`/sectores?lang=${locale}`} className="text-white/80 hover:text-white transition-colors">
                                {locale === 'es' ? 'Sectores' : 'Sectors'}
                            </Link>
                            <span className="text-white/40">/</span>
                            <span className="text-white/95">{title}</span>
                        </nav>

                        <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-yellow-400/10 border border-yellow-400/20 flex items-center justify-center text-yellow-400 mb-6 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
                            <Globe size={32} />
                        </div>

                        <div className="inline-flex items-center gap-2 text-yellow-400 text-xs font-bold uppercase tracking-wider mb-6">
                            <CheckCircle size={14} />
                            {locale === 'es' ? 'Traducción Especializada' : 'Specialized Translation'}
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-serif font-bold mb-6 leading-tight">
                            {title}
                        </h1>

                        <p className="text-yellow-400/90 text-xl font-medium mb-6">
                            {description}
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-4 mt-12">
                            <a href="#contacto" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md bg-yellow-400 hover:bg-yellow-500 text-neutral-900 font-extrabold text-sm tracking-wider uppercase transition-all shadow-lg hover:-translate-y-1">
                                {locale === 'es' ? 'Cotizar Servicio' : 'Get a Quote'}
                                <ArrowRight size={18} />
                            </a>
                            <a
                                href={`https://wa.me/573123902406?text=Hola, necesito traducción especializada para el sector ${title}`}
                                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md bg-[#25d366] hover:bg-[#1eb358] text-white font-extrabold text-sm tracking-wider transition-all shadow-lg hover:-translate-y-1"
                                target="_blank" rel="noopener noreferrer"
                            >
                                <MessageCircle size={18} />
                                WhatsApp
                            </a>
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

                            {/* Panel lateral - Garantía WOT */}
                            <aside className="bg-slate-50 p-10 rounded-3xl border border-slate-200 shadow-sm h-fit">
                                <div className="text-center mb-10">
                                    <div className="w-16 h-16 bg-[#1a3a6c] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#1a3a6c]/20">
                                        <Shield size={32} className="text-[#c9a227]" />
                                    </div>
                                    <h3 className="text-2xl font-serif font-bold text-[#0c1a35]">{locale === 'es' ? 'Garantía WOT' : 'WOT Guarantee'}</h3>
                                </div>
                                <ul className="flex flex-col gap-6 mb-10">
                                    <li className="flex gap-4 p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                                        <CheckCircle size={24} className="text-[#c9a227] shrink-0" />
                                        <div>
                                            <div className="font-bold text-[#0c1a35] mb-1">{locale === 'es' ? 'Traductores Expertos' : 'Expert Translators'}</div>
                                            <div className="text-sm text-slate-600">{locale === 'es' ? 'Nativos y certificados ante el Ministerio.' : 'Native and certified before the Ministry.'}</div>
                                        </div>
                                    </li>
                                    <li className="flex gap-4 p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                                        <Clock size={24} className="text-[#c9a227] shrink-0" />
                                        <div>
                                            <div className="font-bold text-[#0c1a35] mb-1">{locale === 'es' ? 'Entrega Puntual' : 'Punctual Delivery'}</div>
                                            <div className="text-sm text-slate-600">{locale === 'es' ? 'Plazos ajustados a su necesidad empresarial.' : 'Deadlines tailored to your business needs.'}</div>
                                        </div>
                                    </li>
                                </ul>
                                <div className="text-center">
                                    <a href={`https://wa.me/573123902406?text=Hola, necesito traducción especializada para el sector ${title}`} className="inline-flex w-full items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#c9a227] hover:bg-[#b08d20] text-neutral-900 font-bold tracking-wider transition-colors shadow-lg">
                                        <MessageCircle size={20} />
                                        {locale === 'es' ? 'Cotizar por WhatsApp' : 'Get Quote via WhatsApp'}
                                    </a>
                                </div>
                            </aside>
                        </div>
                    </div>
                </section>

                {/* CTA FINAL - SIN FORMULARIO */}
                <section className="bg-blue-50 py-24 border-y border-blue-100" id="contacto">
                    <div className="container mx-auto px-5 lg:px-16 text-center max-w-3xl">
                        <div className="text-[#0c1a35] font-bold text-sm uppercase tracking-[0.15em] mb-6 inline-flex items-center gap-3">
                            <div className="w-8 h-[2px] bg-yellow-400 rounded-full" />
                            {locale === 'es' ? 'Cotización Inmediata' : 'Instant Quote'}
                            <div className="w-8 h-[2px] bg-yellow-400 rounded-full" />
                        </div>
                        <h2 className="text-[#0c1a35] font-serif font-bold text-3xl md:text-4xl lg:text-[2.5rem] leading-tight mb-8">
                            {locale === 'es'
                                ? `¿Listo para traducir sus documentos del sector ${title.toLowerCase()}?`
                                : `Ready to translate your ${title.toLowerCase()} sector documents?`}
                        </h2>
                        <p className="text-slate-600 text-lg md:text-xl mb-12 leading-relaxed">
                            {locale === 'es'
                                ? 'Obtenga una respuesta en menos de 24 horas con la precisión técnica que su empresa requiere.'
                                : 'Get a response in less than 24 hours with the technical precision your company requires.'}
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-4">
                            <a href={`https://wa.me/573123902406?text=Hola, necesito traducción especializada para el sector ${title}`} className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#25d366] hover:bg-[#1eb358] text-white font-bold tracking-wider transition-colors shadow-lg">
                                <MessageCircle size={20} />
                                {locale === 'es' ? 'Consultar por WhatsApp' : 'Consult via WhatsApp'}
                            </a>
                            <Link href={`/?lang=${locale}#contacto`} className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#1a3a6c] hover:bg-[#122040] text-white font-bold tracking-wider transition-colors shadow-lg">
                                {locale === 'es' ? 'Formulario de contacto' : 'Contact form'}
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
