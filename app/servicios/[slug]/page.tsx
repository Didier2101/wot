import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
    BadgeCheck, CheckCircle, MessageCircle, ArrowRight, ChevronRight, Phone, Mail, Shield, Clock, Award
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

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.traduccionesbogotawot.com'

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

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.traduccionesbogotawot.com'
    const phoneWa = '573123902406'
    const phone = '+57 312 3902406'
    const email = 'traduccionesenbogotawot@gmail.com'

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
            name: 'WOT Traducciones Bogotá',
            url: siteUrl,
            telephone: phone,
            email: email,
            address: {
                '@type': 'PostalAddress',
                streetAddress: 'Carrera 14B #161-54 Torre 2/1002',
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

            <main className="font-sans antialiased">
                {/* ── HERO del servicio ──────────────────────────────────────── */}
                <section className="bg-gradient-to-br from-[#0c1a35] via-[#1a3055] to-[#1e4a8a] py-16 lg:py-24" aria-label={service.title[locale]}>
                    <div className="container mx-auto px-5 lg:px-16 max-w-5xl text-center">
                        <nav aria-label="breadcrumb" className="flex items-center justify-center gap-2 text-sm text-white/60 mb-8 font-medium">
                            <Link href={`/?lang=${locale}`} className="text-white/80 hover:text-white transition-colors">Home</Link>
                            <ChevronRight size={14} className="text-white/40" />
                            <Link href={`/?lang=${locale}#servicios`} className="text-white/80 hover:text-white transition-colors">
                                {locale === 'es' ? 'Servicios' : 'Services'}
                            </Link>
                            <ChevronRight size={14} className="text-white/40" />
                            <span className="text-white/95">{service.title[locale]}</span>
                        </nav>

                        <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-yellow-400/10 border border-yellow-400/20 flex items-center justify-center text-yellow-400 mb-6 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
                            <BadgeCheck size={32} />
                        </div>

                        <div className="inline-flex items-center gap-2 text-yellow-400 text-xs font-bold uppercase tracking-wider mb-6">
                            <CheckCircle size={14} />
                            {locale === 'es' ? 'Traductores Juramentados Certificados' : 'Certified Sworn Translators'}
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-serif font-bold mb-6 leading-tight">
                            {service.title[locale]}
                        </h1>

                        <p className="text-yellow-400/90 text-xl font-medium mb-6">
                            {service.description[locale]}
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-4 mt-12">
                            <Link href={`/contacto?lang=${locale}`} className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md bg-yellow-400 hover:bg-yellow-500 text-neutral-900 font-extrabold text-sm tracking-wider uppercase transition-all shadow-lg hover:-translate-y-1">
                                {locale === 'es' ? 'Cotizar Servicio' : 'Get a Quote'}
                                <ArrowRight size={18} />
                            </Link>
                            <Link
                                href={`https://wa.me/${phoneWa}?text=${encodeURIComponent(
                                    locale === 'es'
                                        ? `Hola, necesito una cotización para: ${service.title.es}`
                                        : `Hello, I need a quote for: ${service.title.en}`
                                )}`}
                                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md bg-[#25d366] hover:bg-[#1eb358] text-white font-extrabold text-sm tracking-wider transition-all shadow-lg hover:-translate-y-1"
                                target="_blank" rel="noopener noreferrer"
                            >
                                <MessageCircle size={18} />
                                WhatsApp
                            </Link>
                        </div>
                    </div>
                </section>

                <div className="bg-[#122040] py-4 border-y border-[#0c1a35]">
                    <div className="container mx-auto px-5 lg:px-16 flex flex-wrap justify-center gap-6 md:gap-10">
                        {[
                            { i: Shield, l: locale === 'es' ? 'Certificados MRE' : 'MFA Certified' },
                            { i: Clock, l: locale === 'es' ? 'Entrega en 24–72 h' : '24–72 h delivery' },
                            { i: Award, l: locale === 'es' ? '14 años de experiencia' : '14 years experience' },
                            { i: CheckCircle, l: locale === 'es' ? 'Control de calidad' : 'Quality control' },
                        ].map((pill, i) => (
                            <div key={i} className="flex items-center gap-2 text-white/80 text-sm font-medium">
                                <pill.i size={16} className="text-yellow-400" />
                                {pill.l}
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── CONTENT + SIDEBAR ──────────────────────────────────────── */}
                <div className="container mx-auto px-5 lg:px-16 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-12 lg:gap-20">

                    {/* Main content directly from JSON */}
                    <article className="prose prose-lg prose-slate max-w-none prose-headings:font-serif prose-headings:text-[#0c1a35] prose-h3:text-2xl prose-a:text-blue-600">
                        <div dangerouslySetInnerHTML={{ __html: service.content_html[locale] }} />

                        {/* ── Preguntas Frecuentes ──────────────────────────────────────── */}
                        <div className="mt-12">
                            <h3 className="text-2xl font-serif font-bold text-[#0c1a35] mb-6 border-b border-slate-200 pb-2">
                                {locale === 'es' ? 'Preguntas Frecuentes' : 'Frequently Asked Questions'}
                            </h3>
                            <div className="space-y-6">
                                {faqs.map((faq, idx) => (
                                    <div key={idx} className="bg-slate-50 rounded-lg p-5 border border-slate-100">
                                        <h4 className="text-[#0c1a35] font-bold mb-2 m-0 p-0 text-lg">{faq.q[locale]}</h4>
                                        <p className="text-slate-600 m-0 p-0 leading-relaxed text-base">{faq.a[locale]}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA en el contenido */}
                        <div className="mt-16 bg-blue-50 border border-blue-100 rounded-2xl p-8 text-center" id="contacto">
                            <h3 className="text-2xl font-serif font-bold text-[#0c1a35] mb-4">
                                {locale === 'es' ? '¿Necesita esta traducción?' : 'Need this translation?'}
                            </h3>
                            <p className="text-slate-600 mb-8">
                                {locale === 'es'
                                    ? 'Inicie su proceso hoy mismo con nuestro equipo de expertos.'
                                    : 'Start your process today with our team of experts.'}
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <Link href={`/contacto?lang=${locale}`} className="inline-flex items-center gap-2 px-6 py-3 rounded bg-yellow-400 hover:bg-yellow-500 text-neutral-900 font-bold text-sm tracking-wider uppercase transition-colors shadow-sm">
                                    {locale === 'es' ? 'Ir al Formulario' : 'Go to Form'}
                                    <ArrowRight size={18} />
                                </Link>
                                <Link href={`https://wa.me/${phoneWa}`} className="inline-flex items-center gap-2 px-6 py-3 rounded bg-transparent border-2 border-[#25d366] text-[#25d366] hover:bg-[#25d366] hover:text-white font-bold text-sm tracking-wider uppercase transition-colors" target="_blank" rel="noopener noreferrer">
                                    <MessageCircle size={18} />
                                    WhatsApp
                                </Link>
                            </div>
                        </div>
                    </article>

                    {/* Sidebar */}
                    <aside className="space-y-8">
                        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                            <h4 className="text-[#0c1a35] font-bold uppercase tracking-wider text-sm mb-6 pb-4 border-b border-slate-100">
                                {locale === 'es' ? 'Contacto directo' : 'Direct contact'}
                            </h4>
                            <Link href={`https://wa.me/${phoneWa}`} className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-[#25d366] hover:bg-[#1eb358] text-white rounded font-semibold transition-colors mb-3" target="_blank" rel="noopener noreferrer">
                                <MessageCircle size={18} />
                                WhatsApp
                            </Link>
                            <Link href={`tel:${phone}`} className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-[#1a3a6c] hover:bg-[#122040] text-white rounded font-semibold transition-colors mb-3">
                                <Phone size={18} />
                                {phone}
                            </Link>
                            <Link href={`mailto:${email}`} className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-transparent border border-slate-300 hover:border-[#1a3a6c] text-slate-700 hover:text-[#1a3a6c] rounded font-semibold transition-colors text-sm">
                                <Mail size={16} />
                                {email}
                            </Link>
                        </div>

                        <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 shadow-sm">
                            <h4 className="text-[#0c1a35] font-bold uppercase tracking-wider text-sm mb-6 pb-4 border-b border-slate-200">
                                {locale === 'es' ? 'Otros servicios' : 'Other services'}
                            </h4>
                            <ul className="flex flex-col gap-1">
                                {otherServices.map((sv) => (
                                    <li key={sv.slug}>
                                        <Link href={`/servicios/${sv.slug}?lang=${locale}`} className="flex items-center justify-between text-slate-600 hover:text-[#1a3a6c] hover:bg-white py-3 px-4 -mx-4 rounded-lg transition-colors font-medium">
                                            {sv.title[locale]}
                                            <ChevronRight size={16} className="text-slate-400" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>
                </div>
            </main>

            <Footer locale={locale} />
        </>
    )
}
