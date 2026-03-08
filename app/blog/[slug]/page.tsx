import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import NextImage from 'next/image'
import { BookOpen, Calendar, Tag, MessageCircle } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import type { Locale } from '@/lib/i18n'
import contentData from '@/data/content.json'

export async function generateStaticParams() {
    return contentData.blog.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params, searchParams }: {
    params: Promise<{ slug: string }>,
    searchParams: Promise<{ lang?: string }>
}): Promise<Metadata> {
    const { slug } = await params
    const { lang } = await searchParams
    const locale: Locale = lang === 'en' ? 'en' : 'es'
    const post = contentData.blog.find((p) => p.slug === slug)

    if (!post) return {}

    return {
        title: post.metadata.seo_title[locale],
        description: post.description[locale],
        keywords: post.metadata.keywords,
        alternates: {
            canonical: `https://kavvo.store/blog/${slug}?lang=${locale}`
        }
    }
}

export default async function BlogPostPage({ params, searchParams }: {
    params: Promise<{ slug: string }>,
    searchParams: Promise<{ lang?: string }>
}) {
    const { slug } = await params
    const { lang } = await searchParams
    const locale: Locale = lang === 'en' ? 'en' : 'es'
    const post = contentData.blog.find((p) => p.slug === slug)

    if (!post) notFound()

    const title = post.title[locale]
    const description = post.description[locale]
    const contentHtml = post.content_html[locale]
    const date = new Date(post.fecha).toLocaleDateString(locale === 'es' ? 'es-CO' : 'en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://kavvo.store/blog/${slug}?lang=${locale}`
        },
        "headline": title,
        "description": description,
        "author": {
            "@type": "Organization",
            "name": "Lex Translations"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Lex Translations",
            "logo": {
                "@type": "ImageObject",
                "url": "https://kavvo.store/logo-nuevo.png"
            }
        },
        "datePublished": post.fecha
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Navbar locale={locale} currentPath={`/blog/${slug}`} />

            <main className="font-sans antialiased text-slate-800 bg-slate-50 min-h-screen pb-24">
                {/* HERO DEL POST */}
                <section className="bg-gradient-to-br from-[#0c1a35] via-[#1a3055] to-[#1e4a8a] py-16 lg:py-24" aria-label={title}>
                    <div className="container mx-auto px-5 lg:px-16 max-w-5xl text-center">
                        <nav aria-label="breadcrumb" className="flex items-center justify-center gap-2 text-sm text-white/60 mb-8 font-medium">
                            <Link href={`/?lang=${locale}`} className="text-white/80 hover:text-white transition-colors">Home</Link>
                            <span className="text-white/40">/</span>
                            <Link href={`/blog?lang=${locale}`} className="text-white/80 hover:text-white transition-colors">
                                Blog
                            </Link>
                            <span className="text-white/40">/</span>
                            <span className="text-white/95">{title}</span>
                        </nav>

                        <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-yellow-400/10 border border-yellow-400/20 flex items-center justify-center text-yellow-400 mb-6 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
                            <BookOpen size={32} />
                        </div>

                        <div className="inline-flex items-center justify-center gap-4 text-yellow-400 text-xs font-bold uppercase tracking-wider mb-6">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-yellow-400/20 text-yellow-400 border border-yellow-400/30">
                                <Tag size={13} />
                                {post.categoria[locale]}
                            </span>
                            <span className="inline-flex items-center gap-1.5">
                                <Calendar size={13} />
                                {date}
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-serif font-bold mb-6 leading-tight">
                            {title}
                        </h1>

                        <p className="text-yellow-400/90 text-xl font-medium mb-6">
                            {description}
                        </p>
                    </div>
                </section>

                <article className="container mx-auto px-5 lg:px-16 max-w-3xl mt-16 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100">
                    <div className="prose prose-lg prose-slate prose-headings:font-serif prose-headings:text-[#0c1a35] prose-h3:text-2xl prose-a:text-blue-600 max-w-none">
                        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />

                        {/* Post Visual Support */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-16 not-prose">
                            <div className="relative h-64 rounded-xl overflow-hidden shadow-md">
                                <NextImage
                                    src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=800"
                                    alt="Detail 1"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="relative h-64 rounded-xl overflow-hidden shadow-md">
                                <NextImage
                                    src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800"
                                    alt="Detail 2"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 pt-10 border-t border-slate-100 flex flex-col items-center text-center">
                        <div className="w-20 h-20 bg-gradient-to-br from-[#1a3a6c] to-[#0c1a35] text-white rounded-2xl flex items-center justify-center mb-6 shadow-xl rotate-3 translate-y-[-10px]">
                            <span className="font-serif font-bold text-2xl">LEX</span>
                        </div>
                        <h3 className="font-serif font-bold text-[#0c1a35] text-3xl mb-4">
                            {locale === 'es' ? '¿Listo para dar el siguiente paso?' : 'Ready to take the next step?'}
                        </h3>
                        <p className="text-slate-600 mb-8 max-w-lg text-lg">
                            {locale === 'es'
                                ? 'Nuestros expertos en traducción oficial garantizan resultados impecables para su documentación técnica y legal.'
                                : 'Our official translation experts guarantee flawless results for your technical and legal documentation.'}
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="/contacto" className="inline-flex items-center gap-2 px-10 py-4 bg-[#D4AF37] hover:bg-[#0A192F] text-[#0A192F] hover:text-white font-bold rounded-sm transition-all shadow-xl uppercase tracking-widest text-[11px]">
                                {locale === 'es' ? 'Cotizar Documento' : 'Quote Document'}
                            </Link>
                            <Link href="https://wa.me/573028645014" className="inline-flex items-center gap-2 px-10 py-4 bg-[#25d366] hover:bg-[#1eb358] text-white font-bold rounded-sm transition-all shadow-xl uppercase tracking-widest text-[11px]" target="_blank" rel="noopener noreferrer">
                                <MessageCircle size={18} />
                                {locale === 'es' ? 'WhatsApp Directo' : 'Direct WhatsApp'}
                            </Link>
                        </div>
                    </div>
                </article>
            </main>

            <Footer locale={locale} />
        </>
    )
}
