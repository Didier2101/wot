import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
    BadgeCheck, CheckCircle, MessageCircle, ArrowRight, ChevronRight, Shield, Clock, Award
} from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import contentData from '@/data/content.json'
import type { Locale } from '@/lib/i18n'

const SERVICE_FAQS: Record<string, { q: { es: string, en: string }, a: { es: string, en: string } }[]> = {
    'traduccion-oficial': [
        { q: { es: '¿Cuáles son los precios de una traducción oficial?', en: 'What are the prices for an official translation?' }, a: { es: 'Los precios dependen del número de palabras, idioma y urgencia. Contáctenos para una cotización inmediata y precisa.', en: 'Prices depend on word count, language, and urgency. Contact us for an immediate and accurate quote.' } },
        { q: { es: '¿Llevan sello oficial y firma?', en: 'Do they have an official seal and signature?' }, a: { es: 'Sí, todas nuestras traducciones son entregadas con la firma y el sello de un traductor oficial avalado por el Ministerio de Relaciones Exteriores.', en: 'Yes, all our translations are delivered with the signature and seal of an official translator endorsed by the Ministry of Foreign Affairs.' } },
        { q: { es: '¿Son válidas para trámites en embajadas?', en: 'Are they valid for procedures at embassies?' }, a: { es: 'Absolutamente. Estructuramos y certificamos cada documento para garantizar su aceptación en embajadas, consulados y entidades gubernamentales extranjeras.', en: 'Absolutely. We structure and certify each document to guarantee its acceptance at embassies, consulates, and foreign government entities.' } }
    ],
    'traduccion-legal': [
        { q: { es: '¿Traducen contratos y poderes legales?', en: 'Do you translate contracts and legal powers?' }, a: { es: 'Sí, somos especialistas en la traducción de textos jurídicos con exactitud legal y confidencialidad.', en: 'Yes, we are specialists in the translation of legal texts with legal accuracy and confidentiality.' } }
    ],
};

const defaultFaqs = [
    { q: { es: '¿Cuánto tiempo toma la traducción?', en: 'How long does the translation take?' }, a: { es: 'El tiempo de entrega estándar es de 24 a 72 horas, dependiendo de la complejidad y el volumen del texto.', en: 'Standard delivery time is 24 to 72 hours, depending on the complexity and volume of the text.' } },
    { q: { es: '¿Cómo puedo solicitar una cotización?', en: 'How can I request a quote?' }, a: { es: 'Puede enviarnos sus documentos por WhatsApp o correo electrónico y le enviaremos el presupuesto en minutos.', en: 'You can send us your documents via WhatsApp or email and we will send you the estimate in minutes.' } }
];

// ── Service image mapper ──────────────────────────────────────────────────
const SERVICE_IMAGES: Record<string, { hero: string; secondary: string[] }> = {
    'traduccion-oficial': {
        hero: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1400',
        secondary: ['https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=800', 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800']
    },
    'traduccion-academica': {
        hero: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1400',
        secondary: ['https://images.unsplash.com/photo-1523050338691-c1e53d076efd?q=80&w=800', 'https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=800']
    },
    'traduccion-registro-civil': {
        hero: 'https://images.unsplash.com/photo-1593113503874-42fcd69947ae?q=80&w=1400',
        secondary: ['https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=800', 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=800']
    },
    'traduccion-legal': {
        hero: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=1400',
        secondary: ['https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=800', 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800']
    },
    'traduccion-financiera': {
        hero: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1400',
        secondary: ['https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=800', 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800']
    },
    'traduccion-tecnica-legal': {
        hero: 'https://images.unsplash.com/photo-1521791136064-7986c2959663?q=80&w=1400',
        secondary: ['https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800', 'https://images.unsplash.com/photo-1532187863486-abf51ad982d7?q=80&w=800']
    },
    'traduccion-sitios-web': {
        hero: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1400',
        secondary: ['https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800', 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800']
    }
}

// ── SSG: generar todas las rutas estáticamente ─────────────────────────────
export async function generateStaticParams() {
    return contentData.servicios.map(s => ({ slug: s.slug }))
}

// ── Metadata dinámica ──────────────────────────────────────────────────────
export async function generateMetadata({
    params,
    searchParams,
}: {
    params: Promise<{ slug: string }>
    searchParams: Promise<{ lang?: string }>
}): Promise<Metadata> {
    const { slug } = await params
    const { lang } = await searchParams
    const locale: Locale = lang === 'en' ? 'en' : 'es'
    const service = contentData.servicios.find(s => s.slug === slug)
    if (!service) return {}

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://kavvo.store'

    return {
        title: service.metadata.seo_title[locale],
        description: service.description[locale],
        keywords: service.metadata.keywords,
        alternates: {
            canonical: `${siteUrl}/servicios/${slug}`,
            languages: {
                'es-CO': `${siteUrl}/servicios/${slug}?lang=es`,
                'en-US': `${siteUrl}/servicios/${slug}?lang=en`,
            },
        },
        openGraph: {
            title: service.metadata.seo_title[locale],
            description: service.description[locale],
            url: `${siteUrl}/servicios/${slug}`,
            type: 'website',
            locale: locale === 'es' ? 'es_CO' : 'en_US',
        },
    }
}

// ── Page ───────────────────────────────────────────────────────────────────
export default async function ServicePage({
    params,
    searchParams,
}: {
    params: Promise<{ slug: string }>
    searchParams: Promise<{ lang?: string }>
}) {
    const { slug } = await params
    const { lang } = await searchParams
    const locale: Locale = lang === 'en' ? 'en' : 'es'
    const service = contentData.servicios.find(s => s.slug === slug)

    if (!service) notFound()

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://kavvo.store'
    const phoneWa = '573028645014'
    const phone = '+57 302 8645014'
    const email = 'lex@lextranslations.com'

    const otherServices = contentData.servicios
        .filter((sv) => sv.slug !== slug)
        .slice(0, 4)

    // JSON-LD Service schema
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: service.title[locale],
        description: service.description[locale],
        provider: {
            '@type': 'LocalBusiness',
            name: 'Lex Translations',
            url: siteUrl,
            telephone: phone,
            email: email,
            address: {
                '@type': 'PostalAddress',
                streetAddress: 'Carrera 18 # 1H-12',
                addressLocality: 'Bogotá',
                addressRegion: 'Cundinamarca',
                addressCountry: 'CO',
            },
        },
        areaServed: { '@type': 'City', name: 'Bogotá' },
        url: `${siteUrl}/servicios/${slug}`,
    }

    const faqs = SERVICE_FAQS[slug] || defaultFaqs

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map(faq => ({
            '@type': 'Question',
            name: faq.q[locale],
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.a[locale]
            }
        }))
    }

    const schemas = [jsonLd, faqSchema]

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
            />

            <Navbar locale={locale} currentPath={`/servicios/${slug}`} />

            <main className="font-sans antialiased bg-[#0A192F]">
                {/* ── HERO del servicio ──────────────────────────────────────── */}
                <section className="relative py-24 lg:py-32 overflow-hidden bg-[#0A192F]" aria-label={service.title[locale]}>
                    <Image
                        src={SERVICE_IMAGES[slug]?.hero || "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1400&auto=format&fit=crop"}
                        alt={service.title[locale]}
                        fill
                        priority
                        className="object-cover object-center z-0 opacity-35 grayscale-[0.3]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0A192F] via-[#0A192F]/70 to-[#0A192F] z-10" />

                    <div className="container mx-auto px-5 lg:px-16 max-w-5xl text-center relative z-20">
                        <nav aria-label="breadcrumb" className="flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 mb-10">
                            <Link href={`/?lang=${locale}`} className="hover:text-[#D4AF37] transition-colors">Home</Link>
                            <ChevronRight size={12} className="text-white/20" />
                            <Link href={`/?lang=${locale}#servicios`} className="hover:text-[#D4AF37] transition-colors">
                                {locale === 'es' ? 'Servicios' : 'Services'}
                            </Link>
                            <ChevronRight size={12} className="text-white/20" />
                            <span className="text-white/80">{service.title[locale]}</span>
                        </nav>

                        <div className="mx-auto w-16 h-16 rounded-sm bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] mb-8 shadow-2xl">
                            <BadgeCheck size={32} />
                        </div>

                        <div className="inline-flex items-center gap-3 text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
                            <CheckCircle size={14} />
                            {locale === 'es' ? 'Certificación de Traductores Oficiales' : 'Official Translator Certification'}
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-serif font-bold mb-10 leading-tight tracking-tight">
                            {service.title[locale]}
                        </h1>

                        <p className="text-gray-400 text-xl font-light mb-12 tracking-wide max-w-3xl mx-auto leading-relaxed">
                            {service.description[locale]}
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-6 mt-14">
                            <Link href={`/contacto?lang=${locale}`} className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-sm bg-[#D4AF37] text-[#0A192F] font-bold text-[13px] uppercase tracking-[0.15em] transition-all duration-300 hover:bg-white hover:text-[#0A192F] shadow-2xl">
                                {locale === 'es' ? 'Solicitar Presupuesto' : 'Request Quotation'}
                                <ArrowRight size={18} />
                            </Link>
                            <Link
                                href={`https://wa.me/${phoneWa}?text=${encodeURIComponent(
                                    locale === 'es'
                                        ? `Hola, necesito una cotización para: ${service.title.es}`
                                        : `Hello, I need a quote for: ${service.title.en}`
                                )}`}
                                className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-sm bg-transparent border border-[#D4AF37] text-[#D4AF37] font-bold text-[13px] uppercase tracking-[0.15em] transition-all duration-300 hover:bg-[#D4AF37] hover:text-[#0A192F]"
                                target="_blank" rel="noopener noreferrer"
                            >
                                <MessageCircle size={18} />
                                WhatsApp Directo
                            </Link>
                        </div>
                    </div>
                </section>

                <div className="bg-[#0A192F] py-10 border-y border-white/5">
                    <div className="container mx-auto px-5 lg:px-16 flex flex-wrap justify-center gap-10 md:gap-20">
                        {[
                            { i: Shield, l: locale === 'es' ? 'CERTIFICADOS POR EL MRE' : 'MFA CERTIFIED' },
                            { i: Clock, l: locale === 'es' ? 'ENTREGA EN 24–72 HORAS' : '24–72 H DELIVERY' },
                            { i: Award, l: locale === 'es' ? 'EXPERIENCIA EMPRESARIAL' : 'CORPORATE EXPERIENCE' },
                            { i: CheckCircle, l: locale === 'es' ? 'CONTROL DE CALIDAD RIGUROSO' : 'STRICT QUALITY CONTROL' },
                        ].map((pill, i) => (
                            <div key={i} className="flex items-center gap-3 text-gray-500 text-[10px] font-bold uppercase tracking-[0.2em]">
                                <pill.i size={14} className="text-[#D4AF37]" />
                                {pill.l}
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── CONTENT + SIDEBAR ──────────────────────────────────────── */}
                <div className="container mx-auto px-5 lg:px-16 py-24 lg:py-32 grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-16 lg:gap-24 bg-[#0A192F]">

                    {/* Main content directly from JSON */}
                    <article className="prose prose-invert prose-lg max-w-none prose-headings:font-serif prose-headings:text-white prose-h3:text-3xl prose-h3:border-b prose-h3:border-[#D4AF37]/10 prose-h3:pb-4 prose-p:text-gray-400 prose-p:font-light prose-p:leading-relaxed prose-a:text-[#D4AF37] prose-a:no-underline hover:prose-a:underline">
                        <div dangerouslySetInnerHTML={{ __html: service.content_html[locale] }} />

                        {/* Characterized Visuals */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20 not-prose">
                            {(SERVICE_IMAGES[slug]?.secondary || [
                                "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1000",
                                "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1000"
                            ]).map((img, i) => (
                                <div key={i} className="relative h-[300px] rounded-sm overflow-hidden border border-white/10 group">
                                    <Image
                                        src={img}
                                        alt={`${service.title[locale]} - detail ${i + 1}`}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] opacity-40" />
                                </div>
                            ))}
                        </div>

                        {/* ── Preguntas Frecuentes ──────────────────────────────────────── */}
                        <div className="mt-24 not-prose">
                            <div className="inline-flex items-center gap-4 text-[#D4AF37] font-bold text-[10px] uppercase tracking-[0.3em] mb-8">
                                <div className="w-12 h-[1px] bg-[#D4AF37]/30" />
                                {locale === 'es' ? 'Consultas Frecuentes' : 'Common Questions'}
                            </div>
                            <h3 className="text-4xl font-serif font-bold text-white mb-16 tracking-tight">
                                {locale === 'es' ? 'Preguntas Frecuentes' : 'Frequently Asked Questions'}
                            </h3>
                            <div className="space-y-12">
                                {faqs.map((faq, idx) => (
                                    <div key={idx} className="group border-b border-white/5 pb-12 last:border-0">
                                        <h4 className="text-white font-bold mb-5 text-2xl tracking-tight group-hover:text-[#D4AF37] transition-colors duration-500 italic font-serif ">{faq.q[locale]}</h4>
                                        <p className="text-gray-400 leading-relaxed text-lg font-light">{faq.a[locale]}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA en el contenido */}
                        <div className="mt-32 py-16 border-t border-white/10 relative overflow-hidden" id="contacto">
                            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />
                            <h3 className="text-4xl font-serif font-bold text-white mb-6 tracking-tight m-0 uppercase italic">
                                {locale === 'es' ? 'Traducción de Excelencia' : 'Excellence in Translation'}
                            </h3>
                            <p className="text-gray-400 mb-12 text-xl font-light tracking-wide m-0 pt-4 leading-relaxed max-w-2xl">
                                {locale === 'es'
                                    ? 'Inicie su trámite con el respaldo de nuestro equipo de traductores oficiales. Garantizamos precisión técnica y legal.'
                                    : 'Start your process with the support of our team of official translators. We guarantee technical and legal precision.'}
                            </p>
                            <div className="flex flex-wrap gap-8 pt-4">
                                <Link href={`/contacto?lang=${locale}`} className="inline-flex items-center gap-3 text-[#D4AF37] font-bold text-[13px] uppercase tracking-[0.3em] transition-all duration-300 hover:text-white group/cta">
                                    {locale === 'es' ? 'Cotizar Ahora' : 'Get Quote Now'}
                                    <ArrowRight size={20} className="group-hover/cta:translate-x-2 transition-transform" />
                                </Link>
                                <Link href={`https://wa.me/${phoneWa}`} className="inline-flex items-center gap-3 text-white/60 font-bold text-[13px] uppercase tracking-[0.3em] transition-all duration-300 hover:text-[#D4AF37]">
                                    {locale === 'es' ? 'Consulta Ejecutiva' : 'Executive Inquiry'}
                                </Link>
                            </div>
                        </div>
                    </article>

                    {/* Sidebar - Seamless Design */}
                    <aside className="space-y-20 lg:pt-4">
                        <section>
                            <h4 className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.4em] mb-10 flex items-center gap-4">
                                <span className="w-8 h-[1px] bg-[#D4AF37]/30" />
                                {locale === 'es' ? 'Atención Directa' : 'Direct Attention'}
                            </h4>
                            <div className="space-y-8">
                                <Link href={`https://wa.me/${phoneWa}`} className="group block">
                                    <div className="text-white/40 text-[9px] font-bold uppercase tracking-widest mb-1 group-hover:text-[#D4AF37] transition-colors">WhatsApp</div>
                                    <div className="text-xl text-white font-serif group-hover:pl-2 transition-all duration-300 flex items-center gap-3">
                                        Canal Oficial
                                        <MessageCircle size={18} className="text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                </Link>
                                <Link href={`tel:${phone}`} className="group block">
                                    <div className="text-white/40 text-[9px] font-bold uppercase tracking-widest mb-1 group-hover:text-[#D4AF37] transition-colors">Teléfono</div>
                                    <div className="text-xl text-white font-serif group-hover:pl-2 transition-all duration-300">
                                        {phone}
                                    </div>
                                </Link>
                                <Link href={`mailto:${email}`} className="group block">
                                    <div className="text-white/40 text-[9px] font-bold uppercase tracking-widest mb-1 group-hover:text-[#D4AF37] transition-colors">Email</div>
                                    <div className="text-lg text-white/80 font-serif group-hover:pl-2 transition-all duration-300 truncate">
                                        {email}
                                    </div>
                                </Link>
                            </div>
                        </section>

                        <section>
                            <h4 className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.4em] mb-10 flex items-center gap-4">
                                <span className="w-8 h-[1px] bg-[#D4AF37]/30" />
                                {locale === 'es' ? 'Portafolio' : 'Portfolio'}
                            </h4>
                            <ul className="space-y-1">
                                {otherServices.map((sv) => (
                                    <li key={sv.slug}>
                                        <Link href={`/servicios/${sv.slug}?lang=${locale}`} className="flex items-center justify-between text-gray-500 hover:text-white py-4 border-b border-white/5 transition-all duration-500 group">
                                            <span className="text-[15px] font-light tracking-wide">{sv.title[locale]}</span>
                                            <ChevronRight size={14} className="text-[#D4AF37] opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </aside>
                </div>
            </main>

            <Footer locale={locale} />
        </>
    )
}
