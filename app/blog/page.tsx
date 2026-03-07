import type { Metadata } from 'next'
import Link from 'next/link'
import { MessageCircle, Clock, ArrowRight, BookOpen, CheckCircle } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import type { Locale } from '@/lib/i18n'
import { getDict } from '@/lib/i18n'
import contentData from '@/data/content.json'

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ lang?: string }> }): Promise<Metadata> {
    const { lang } = await searchParams
    const locale: Locale = lang === 'en' ? 'en' : 'es'
    const t = getDict(locale)

    return {
        title: t.blog.h2 + ' | WOT Traducciones Bogotá',
        description: t.blog.subtitle,
    }
}

export default async function BlogPage({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
    const { lang } = await searchParams
    const locale: Locale = lang === 'en' ? 'en' : 'es'
    const t = getDict(locale)

    // Sort posts by date locally
    const posts = [...contentData.blog].sort((a, b) =>
        new Date(b.fecha).getTime() - new Date(a.fecha).getTime()
    )

    return (
        <>
            <Navbar locale={locale} currentPath="/blog" />

            <main className="font-sans antialiased text-slate-800">
                {/* HERO DEL BLOG */}
                <section className="bg-gradient-to-br from-[#0c1a35] via-[#1a3055] to-[#1e4a8a] py-16 lg:py-24" aria-label="Blog">
                    <div className="container mx-auto px-5 lg:px-16 max-w-5xl text-center">
                        <nav aria-label="breadcrumb" className="flex items-center justify-center gap-2 text-sm text-white/60 mb-8 font-medium">
                            <Link href={`/?lang=${locale}`} className="text-white/80 hover:text-white transition-colors">Home</Link>
                            <span className="text-white/40">/</span>
                            <span className="text-white/95">{t.blog.sectionLabel}</span>
                        </nav>

                        <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-yellow-400/10 border border-yellow-400/20 flex items-center justify-center text-yellow-400 mb-6 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
                            <BookOpen size={32} />
                        </div>

                        <div className="inline-flex items-center gap-2 text-yellow-400 text-xs font-bold uppercase tracking-wider mb-6">
                            <CheckCircle size={14} />
                            {t.blog.sectionLabel}
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-serif font-bold mb-6 leading-tight">
                            {t.blog.h2}
                        </h1>

                        <p className="text-yellow-400/90 text-xl font-medium mb-6">
                            {t.blog.subtitle}
                        </p>
                    </div>
                </section>

                {/* LISTADO DE ARTÍCULOS */}
                <section className="py-24 bg-slate-50">
                    <div className="container mx-auto px-5 lg:px-16 grid lg:grid-cols-[1fr_380px] gap-12 lg:gap-20 items-start">

                        {/* Feed de Artículos */}
                        <div>
                            {posts.length === 0 ? (
                                <div className="text-center p-16 bg-white rounded-2xl border-2 border-dashed border-slate-300">
                                    <p className="text-slate-500 text-lg">{t.blog.noPosts}</p>
                                </div>
                            ) : (
                                <div className="grid gap-10">
                                    {posts.map((post) => (
                                        <article key={post.slug} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-200 transition-all duration-300 group flex flex-col sm:flex-row">
                                            <div className="relative min-h-[240px] sm:w-[320px] shrink-0 bg-[#0c1a35] flex items-center justify-center overflow-hidden">
                                                {/* Fallback image o logo en caso de que no haya imagen real */}
                                                <div className="absolute inset-0 bg-gradient-to-br from-[#1a3a6c] to-[#0c1a35] opacity-90 group-hover:scale-105 transition-transform duration-500" />
                                                <BookOpen size={64} className="text-white/20 relative z-10" />
                                                <div className="absolute top-4 left-4 z-20 bg-yellow-400 text-[#0c1a35] px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider shadow-sm">
                                                    {post.categoria[locale]}
                                                </div>
                                            </div>
                                            <div className="p-8 flex flex-col justify-center w-full">
                                                <div className="flex items-center gap-2 text-slate-400 text-sm mb-3 font-medium">
                                                    <Clock size={14} />
                                                    {new Date(post.fecha).toLocaleDateString(locale === 'es' ? 'es-CO' : 'en-US', {
                                                        year: 'numeric', month: 'long', day: 'numeric'
                                                    })}
                                                </div>
                                                <h2 className="text-2xl font-serif font-bold text-[#0c1a35] mb-4 group-hover:text-[#1a3a6c] transition-colors leading-snug">
                                                    {post.title[locale]}
                                                </h2>
                                                <p className="text-slate-600 mb-8 flex-1 leading-relaxed">
                                                    {post.description[locale]}
                                                </p>
                                                <Link
                                                    href={`/blog/${post.slug}?lang=${locale}`}
                                                    className="inline-flex items-center gap-2 text-[#1a3a6c] font-bold uppercase tracking-wider text-sm hover:text-yellow-500 transition-colors"
                                                >
                                                    {t.blog.readMore}
                                                    <ArrowRight size={18} />
                                                </Link>
                                            </div>
                                        </article>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Sidebar de Conversión */}
                        <aside className="sticky top-28 space-y-8">
                            <div className="bg-gradient-to-br from-[#0c1a35] to-[#1a3a6c] p-8 rounded-2xl shadow-xl text-white relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />

                                <h3 className="text-yellow-400 text-2xl font-serif font-bold mb-4">
                                    {t.blog.sidebar.title}
                                </h3>
                                <p className="text-white/80 leading-relaxed mb-8">
                                    {t.blog.sidebar.desc}
                                </p>
                                <div className="grid gap-4">
                                    <Link href={`/contacto?lang=${locale}`} className="inline-flex items-center justify-center gap-2 w-full py-4 bg-yellow-400 hover:bg-yellow-500 text-neutral-900 font-bold rounded-xl transition-all shadow-lg text-sm tracking-wider uppercase">
                                        {t.blog.sidebar.cta}
                                    </Link>
                                    <Link href="https://wa.me/573123902406" className="inline-flex items-center justify-center gap-2 w-full py-4 bg-[#25d366] hover:bg-[#1eb358] text-white font-bold rounded-xl transition-all shadow-lg text-sm tracking-wider uppercase" target="_blank" rel="noopener noreferrer">
                                        <MessageCircle size={18} /> WhatsApp
                                    </Link>
                                </div>
                            </div>

                            {/* Categorías (Opcional) */}
                            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                                <h4 className="text-[#0c1a35] font-bold uppercase tracking-wider text-sm mb-6 pb-4 border-b border-slate-100">
                                    {t.blog.category}
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {['Traducción Legal', 'Traducción Académica', 'Visas', 'Consejos'].map(cat => (
                                        <span key={cat} className="inline-block px-4 py-2 bg-slate-50 border border-slate-200 text-slate-600 rounded-lg text-sm font-medium hover:bg-slate-100 hover:text-[#1a3a6c] transition-colors cursor-pointer">
                                            {cat}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </aside>
                    </div>
                </section>
            </main>

            <Footer locale={locale} />
        </>
    )
}
