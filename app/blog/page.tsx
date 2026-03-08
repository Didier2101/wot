import Image from 'next/image'
import Link from 'next/link'
import { MessageCircle, Clock, ArrowRight, BookOpen, CheckCircle } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import type { Locale } from '@/lib/i18n'
import { getDict } from '@/lib/i18n'
import contentData from '@/data/content.json'

import type { Metadata } from 'next'

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ lang?: string }> }): Promise<Metadata> {
    const { lang } = await searchParams
    const locale: Locale = lang === 'en' ? 'en' : 'es'
    const t = getDict(locale)

    return {
        title: t.blog.h2 + ' | Lex Translations',
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

            <main className="font-sans antialiased text-gray-400 bg-[#0A192F]">
                {/* HERO DEL BLOG */}
                <section className="relative py-24 lg:py-32 overflow-hidden bg-[#0A192F]" aria-label="Blog">
                    <Image
                        src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop"
                        alt="Lex Translations Insights"
                        fill
                        priority
                        className="object-cover object-center z-0 opacity-40 grayscale-[0.2]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0A192F] via-[#0A192F]/70 to-[#0A192F] z-10" />

                    <div className="container mx-auto px-5 lg:px-16 max-w-5xl text-center relative z-20">
                        <nav aria-label="breadcrumb" className="flex items-center justify-center gap-2 text-sm text-white/50 mb-10 font-medium tracking-widest uppercase text-[10px]">
                            <Link href={`/?lang=${locale}`} className="hover:text-[#D4AF37] transition-colors">Home</Link>
                            <span className="text-white/20">/</span>
                            <span className="text-white/80">{t.blog.sectionLabel}</span>
                        </nav>

                        <div className="mx-auto w-16 h-16 rounded-sm bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] mb-8 shadow-2xl">
                            <BookOpen size={32} />
                        </div>

                        <div className="inline-flex items-center gap-3 text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
                            <CheckCircle size={14} />
                            {t.blog.sectionLabel}
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-serif font-bold mb-10 leading-tight tracking-tight">
                            {t.blog.h2}
                        </h1>

                        <p className="text-gray-400 text-xl font-light mb-12 tracking-wide max-w-2xl mx-auto leading-relaxed">
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
                                            <div className="relative min-h-[240px] sm:w-[320px] shrink-0 bg-[#0c1a35] overflow-hidden">
                                                <Image
                                                    src={post.categoria[locale] === 'Visas y Migración' || post.categoria[locale] === 'Visas and Migration'
                                                        ? "https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=800"
                                                        : "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800"}
                                                    alt={post.title[locale]}
                                                    fill
                                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1a35]/60 to-transparent" />
                                                <div className="absolute top-4 left-4 z-20 bg-[#D4AF37] text-[#0A192F] px-4 py-1.5 rounded-sm text-[10px] font-bold uppercase tracking-[0.2em] shadow-xl">
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
                                    <Link href={`/contacto?lang=${locale}`} className="inline-flex items-center justify-center gap-2 w-full py-4 bg-[#D4AF37] hover:bg-white text-[#0A192F] font-bold rounded-sm transition-all shadow-lg text-sm tracking-widest uppercase">
                                        {t.blog.sidebar.cta}
                                    </Link>
                                    <Link href="https://wa.me/573028645014" className="inline-flex items-center justify-center gap-2 w-full py-4 bg-transparent border border-white/20 hover:border-[#D4AF37] text-white font-bold rounded-sm transition-all text-sm tracking-widest uppercase" target="_blank" rel="noopener noreferrer">
                                        <MessageCircle size={18} /> WhatsApp
                                    </Link>
                                </div>
                            </div>

                            {/* Exploration Section */}
                            <div className="space-y-4">
                                <Link
                                    href={`/#servicios?lang=${locale}`}
                                    className="block relative h-40 rounded-xl overflow-hidden group border border-white/5"
                                >
                                    <Image
                                        src="https://images.unsplash.com/photo-1454165833222-d1d44a60ea4b?q=80&w=600"
                                        alt="Servicios"
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-[#0A192F]/60 group-hover:bg-[#0A192F]/40 transition-colors" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-white font-serif font-bold text-xl tracking-widest uppercase">Nuestros Servicios</span>
                                    </div>
                                </Link>
                                <Link
                                    href={`/sectores?lang=${locale}`}
                                    className="block relative h-40 rounded-xl overflow-hidden group border border-white/5"
                                >
                                    <Image
                                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600"
                                        alt="Sectores"
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-[#0A192F]/60 group-hover:bg-[#0A192F]/40 transition-colors" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-white font-serif font-bold text-xl tracking-widest uppercase">Sectores Clave</span>
                                    </div>
                                </Link>
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

                {/* Perspective Visuals */}
                <section className="py-24 bg-[#0A192F] border-t border-white/5">
                    <div className="container mx-auto px-5 lg:px-16">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="relative h-[400px] group overflow-hidden border border-white/5 rounded-sm">
                                <Image
                                    src="https://images.unsplash.com/photo-1512314889357-e157c22f938d?q=80&w=1000&auto=format&fit=crop"
                                    alt="Deep Focus"
                                    fill
                                    className="object-cover group-hover:scale-110 transition-all duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/40 to-transparent" />
                                <div className="absolute bottom-10 left-10">
                                    <h4 className="text-white font-serif text-2xl font-bold">Rigor Editorial</h4>
                                </div>
                            </div>
                            <div className="relative h-[400px] group overflow-hidden border border-white/5 rounded-sm">
                                <Image
                                    src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1000&auto=format&fit=crop"
                                    alt="Content Creation"
                                    fill
                                    className="object-cover group-hover:scale-110 transition-all duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/40 to-transparent" />
                                <div className="absolute bottom-10 left-10">
                                    <h4 className="text-white font-serif text-2xl font-bold">Actualidad Global</h4>
                                </div>
                            </div>
                            <div className="relative h-[400px] group overflow-hidden border border-white/5 rounded-sm">
                                <Image
                                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
                                    alt="Analysis"
                                    fill
                                    className="object-cover group-hover:scale-110 transition-all duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/40 to-transparent" />
                                <div className="absolute bottom-10 left-10">
                                    <h4 className="text-white font-serif text-2xl font-bold">Análisis Técnico</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer locale={locale} />
        </>
    )
}
